import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { MAX_EVENTS_PER_BATCH } from "@/lib/analytics/constants";
import { supabaseSecretKey, supabaseUrl } from "@/lib/supabase/env";
import type { Database, Device } from "@/lib/supabase/types";

export const runtime = "edge";
export const dynamic = "force-dynamic";

/* ------------------------------------------------------------------ */
/* Validation                                                          */
/* ------------------------------------------------------------------ */

const eventSchema = z.object({
  event_type: z.enum(["pageview", "click"]),
  path: z.string().min(1).max(512),
  element_id: z.string().max(120).nullish(),
  element_label: z.string().max(200).nullish(),
  session_id: z.string().min(8).max(64),
  referrer: z.string().max(512).nullish(),
  locale: z.string().max(8).nullish()
});

const bodySchema = z.object({
  events: z.array(eventSchema).min(1).max(MAX_EVENTS_PER_BATCH)
});

/** Taille maximale du corps de requête, en octets. */
const MAX_BODY_BYTES = 16 * 1024;

/* ------------------------------------------------------------------ */
/* Filtres                                                             */
/* ------------------------------------------------------------------ */

const BOT_PATTERN =
  /bot|crawler|spider|crawl|slurp|curl|wget|python-requests|axios|headless|phantom|puppeteer|playwright|lighthouse|pingdom|uptime|monitor|scrape|facebookexternalhit|embedly|preview|fetcher|archiver|semrush|ahrefs|mj12|dotbot|petalbot|bytespider|gptbot|claudebot|ccbot|perplexity/i;

const TABLET_PATTERN = /ipad|tablet|playbook|silk|(android(?!.*mobile))/i;
const MOBILE_PATTERN = /mobi|iphone|ipod|android.*mobile|windows phone|blackberry|opera mini/i;

function detectDevice(userAgent: string): Device {
  if (TABLET_PATTERN.test(userAgent)) return "tablet";
  if (MOBILE_PATTERN.test(userAgent)) return "mobile";
  return "desktop";
}

/* ------------------------------------------------------------------ */
/* Anonymisation                                                       */
/* ------------------------------------------------------------------ */

/**
 * Construit l'identifiant anonyme du visiteur.
 *
 * L'IP n'est utilisée qu'ici, en mémoire, le temps de calculer le hash :
 * elle n'est écrite nulle part. Le sel inclut la date du jour (UTC), donc
 * le hash d'un même visiteur change à minuit — il est impossible de le
 * suivre d'un jour sur l'autre. C'est ce qui rend le dispositif défendable
 * au regard de la loi 09-08 et du RGPD.
 */
async function buildVisitorHash(ip: string, userAgent: string, day: string) {
  const salt = process.env.ANALYTICS_SALT ?? "";
  const data = new TextEncoder().encode(`${ip}|${userAgent}|${salt}|${day}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "0.0.0.0";
}

/* ------------------------------------------------------------------ */
/* Limitation de débit (best-effort)                                   */
/* ------------------------------------------------------------------ */

/**
 * Compteur en mémoire — GARANTIE FAIBLE, à comprendre avant de s'y fier.
 *
 * Cette Map vit dans un isolate Edge. Vercel en exécute plusieurs en
 * parallèle, dans plusieurs régions, et les recycle en permanence. Un même
 * visiteur réparti sur N isolates dispose donc en pratique de N fois le
 * quota, et le compteur repart à zéro à chaque recyclage.
 *
 * C'est un premier filtre bon marché contre un script qui inonderait
 * l'endpoint depuis un seul onglet — pas une protection anti-abus. Un vrai
 * plafond exigerait un compteur partagé (Redis, Upstash), donc un service
 * payant : hors budget, et disproportionné pour le trafic visé.
 */
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_EVENTS = 120;

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

function overRateLimit(key: string, cost: number) {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: cost, resetAt: now + RATE_LIMIT_WINDOW_MS });

    // Purge opportuniste : empêche la Map de grossir indéfiniment.
    if (buckets.size > 5_000) {
      for (const [bucketKey, value] of buckets) {
        if (now > value.resetAt) buckets.delete(bucketKey);
      }
    }
    return false;
  }

  bucket.count += cost;
  return bucket.count > RATE_LIMIT_MAX_EVENTS;
}

/* ------------------------------------------------------------------ */
/* Normalisation                                                       */
/* ------------------------------------------------------------------ */

/** Garde le chemin seul : pas de query string (elle peut contenir des données personnelles). */
function normalizePath(rawPath: string) {
  const withoutQuery = rawPath.split("?")[0]!.split("#")[0]!;
  const path = withoutQuery.startsWith("/") ? withoutQuery : `/${withoutQuery}`;
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path.slice(0, 512);
}

/** Ne conserve que l'origine du référent, jamais l'URL complète. */
function normalizeReferrer(rawReferrer: string | null | undefined, host: string | null) {
  if (!rawReferrer) return null;
  try {
    const url = new URL(rawReferrer);
    if (host && url.host === host) return null; // navigation interne
    return url.host.slice(0, 512);
  } catch {
    return null;
  }
}

/* ------------------------------------------------------------------ */
/* Handler                                                             */
/* ------------------------------------------------------------------ */

/** Cet endpoint ne renvoie jamais d'erreur au client : toujours 204. */
const noContent = () => new Response(null, { status: 204 });

export async function POST(request: Request) {
  try {
    // 1. Do Not Track — on n'enregistre rien, on ne compte rien.
    if (request.headers.get("dnt") === "1" || request.headers.get("sec-gpc") === "1") {
      return noContent();
    }

    const userAgent = request.headers.get("user-agent") ?? "";
    if (!userAgent || BOT_PATTERN.test(userAgent)) return noContent();

    // 2. Taille du corps de requête.
    const contentLength = Number(request.headers.get("content-length") ?? "0");
    if (contentLength > MAX_BODY_BYTES) return noContent();

    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return noContent();

    let parsedJson: unknown;
    try {
      parsedJson = JSON.parse(raw);
    } catch {
      return noContent();
    }

    const parsed = bodySchema.safeParse(parsedJson);
    if (!parsed.success) return noContent();

    // 3. Configuration absente : on ignore silencieusement plutôt que de
    //    casser la navigation du visiteur.
    const url = supabaseUrl();
    const secretKey = supabaseSecretKey();
    if (!url || !secretKey) return noContent();

    // 4. Identité anonyme + limitation de débit.
    const day = new Date().toISOString().slice(0, 10);
    const visitorHash = await buildVisitorHash(clientIp(request), userAgent, day);

    if (overRateLimit(visitorHash, parsed.data.events.length)) return noContent();

    const device = detectDevice(userAgent);
    const country = request.headers.get("x-vercel-ip-country");
    const host = request.headers.get("host");

    const rows = parsed.data.events.map((event) => ({
      event_type: event.event_type,
      path: normalizePath(event.path),
      element_id: event.event_type === "click" ? (event.element_id ?? null) : null,
      element_label: event.event_type === "click" ? (event.element_label ?? null) : null,
      visitor_hash: visitorHash,
      session_id: event.session_id,
      referrer: normalizeReferrer(event.referrer, host),
      device,
      country: country ? country.slice(0, 2).toUpperCase() : null,
      locale: event.locale ? event.locale.slice(0, 8).toLowerCase() : null
    }));

    const supabase = createClient<Database>(url, secretKey, {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
    });

    const { error } = await supabase.from("analytics_events").insert(rows);
    if (error) console.error("[track] insert failed", error.message);
  } catch (error) {
    // Jamais d'erreur renvoyée au visiteur, jamais de détail exposé.
    console.error("[track] unexpected", error instanceof Error ? error.message : error);
  }

  return noContent();
}

/** Toute autre méthode est ignorée de la même manière. */
export function GET() {
  return noContent();
}
