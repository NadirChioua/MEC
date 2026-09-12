/**
 * Jeu de données de démonstration pour le dashboard MEC.
 *
 *   npm run seed-demo     -> insère 30 jours de trafic réaliste
 *   npm run seed-demo:wipe -> supprime TOUT le jeu de démonstration
 *
 * Toutes les lignes insérées portent un session_id préfixé par
 * "demo-seed-". La suppression est donc un DELETE unique et sans reste :
 *
 *   delete from analytics_events where session_id like 'demo-seed-%';
 *
 * Les chemins et les identifiants data-track utilisés ci-dessous sont
 * exclusivement ceux qui existent réellement dans le code du site.
 */

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/* ------------------------------------------------------------------ */
/* Environnement                                                       */
/* ------------------------------------------------------------------ */

function loadEnvFile(filename: string) {
  try {
    const content = readFileSync(resolve(process.cwd(), filename), "utf8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const separator = trimmed.indexOf("=");
      if (separator === -1) continue;
      const key = trimmed.slice(0, separator).trim();
      const value = trimmed.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
      if (!(key in process.env)) process.env[key] = value;
    }
  } catch {
    /* fichier absent */
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const SEED_PREFIX = "demo-seed-";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const secretKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !secretKey) {
  console.error("✗ NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SECRET_KEY sont requis.");
  process.exit(1);
}

const db = createClient(url, secretKey, { auth: { persistSession: false } });

/* ------------------------------------------------------------------ */
/* Modèle de trafic                                                    */
/* ------------------------------------------------------------------ */

/** Chemins réels du site, avec leur poids relatif de fréquentation. */
const PAGES: Array<[string, number]> = [
  ["/", 100],
  ["/services", 46],
  ["/contact", 38],
  ["/about", 26],
  ["/services/comptabilite", 24],
  ["/services/conseil-financier", 22],
  ["/cabinet-comptable-tanger", 21],
  ["/services/implantation-internationale", 18],
  ["/creation-entreprise-maroc", 17],
  ["/notre-equipe", 15],
  ["/services/audit-controle", 14],
  ["/resources", 13],
  ["/implantation-entreprise-maroc", 12],
  ["/services/gestion-entreprise", 11],
  ["/resources/creer-societe-maroc-depuis-europe", 10],
  ["/services/commerce-maroc-europe", 9],
  ["/resources/tableau-bord-financier-pme-maroc", 8],
  ["/services/accompagnement-personnalise", 7],
  ["/resources/bfr-tresorerie-entreprise-maroc", 6],
  ["/resources/preparer-audit-interne-maroc", 5],
  ["/legal/mentions-legales", 3],
  ["/legal/confidentialite", 2]
];

/** Boutons réels : [data-track, libellé, pages où il apparaît, poids]. */
const BUTTONS: Array<[string, string, string[], number]> = [
  ["hero-cta-consultation", "Hero — Consultation confidentielle", ["/"], 34],
  ["header-cta-consultation", "Header — Consultation confidentielle", PAGES.map((p) => p[0]), 30],
  ["floating-whatsapp", "Bouton flottant — WhatsApp", PAGES.map((p) => p[0]), 27],
  ["final-cta-consultation", "CTA final — Demander une consultation", ["/", "/about", "/services", "/notre-equipe"], 21],
  ["hero-cta-services", "Hero — Explorer les services", ["/"], 19],
  ["contact-form-submit", "Envoyer ma demande", ["/contact"], 16],
  ["service-card-comptabilite", "Carte service — Comptabilité", ["/", "/services"], 14],
  ["service-card-conseil-financier", "Carte service — Conseil financier", ["/", "/services"], 13],
  ["topbar-phone", "Barre haute — Téléphone", PAGES.map((p) => p[0]), 12],
  ["quick-contact-cta", "Contact rapide — Contacter MEC", ["/"], 11],
  ["service-detail-cta-consultation", "Fiche service — Demander une consultation", ["/services/comptabilite", "/services/conseil-financier", "/services/audit-controle"], 10],
  ["landing-cta-whatsapp", "Landing SEO — Échanger sur WhatsApp", ["/cabinet-comptable-tanger", "/creation-entreprise-maroc"], 9],
  ["footer-email", "Footer — Email", PAGES.map((p) => p[0]), 8],
  ["landing-cta-diagnostic", "Landing SEO — Demander un diagnostic", ["/cabinet-comptable-tanger", "/creation-entreprise-maroc", "/implantation-entreprise-maroc"], 8],
  ["topbar-email", "Barre haute — Email", PAGES.map((p) => p[0]), 6],
  ["article-cta-contact", "Article — Demander un échange", ["/resources/creer-societe-maroc-depuis-europe", "/resources/tableau-bord-financier-pme-maroc"], 6],
  ["service-card-audit-controle", "Carte service — Audit & contrôle", ["/services"], 5],
  ["footer-phone", "Footer — Téléphone", PAGES.map((p) => p[0]), 5],
  ["resources-page-download", "Ressources — Télécharger le guide", ["/resources"], 4],
  ["contact-map-link", "Contact — Voir l’adresse sur Google Maps", ["/contact"], 4],
  ["language-switch-en", "Langue — English", PAGES.map((p) => p[0]), 3]
];

const DEVICES: Array<["mobile" | "tablet" | "desktop", number]> = [
  ["mobile", 54],
  ["desktop", 38],
  ["tablet", 8]
];

const COUNTRIES: Array<[string, number]> = [
  ["MA", 52], ["FR", 24], ["ES", 8], ["BE", 5], ["NL", 4], ["DE", 3], ["IT", 2], ["GB", 2]
];

const LOCALES: Array<[string, number]> = [
  ["fr", 76], ["en", 12], ["es", 6], ["ar", 4], ["nl", 2]
];

const REFERRERS: Array<[string | null, number]> = [
  [null, 44], ["google.com", 32], ["linkedin.com", 9], ["bing.com", 5],
  ["facebook.com", 4], ["l.instagram.com", 3], ["duckduckgo.com", 2], ["fr.search.yahoo.com", 1]
];

/* ------------------------------------------------------------------ */
/* Générateur pseudo-aléatoire déterministe (résultats reproductibles) */
/* ------------------------------------------------------------------ */

let seed = 20260911;
function random() {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
}

function pick<T>(items: Array<[T, number]>): T {
  const total = items.reduce((sum, [, weight]) => sum + weight, 0);
  let roll = random() * total;
  for (const [value, weight] of items) {
    roll -= weight;
    if (roll <= 0) return value;
  }
  return items[items.length - 1]![0];
}

function pickOne<T>(items: T[]): T {
  return items[Math.floor(random() * items.length)]!;
}

function hex(length: number) {
  let out = "";
  while (out.length < length) out += Math.floor(random() * 16).toString(16);
  return out.slice(0, length);
}

/* ------------------------------------------------------------------ */
/* Génération                                                          */
/* ------------------------------------------------------------------ */

const DAYS = 30;

type EventRow = {
  event_type: "pageview" | "click";
  path: string;
  element_id: string | null;
  element_label: string | null;
  visitor_hash: string;
  session_id: string;
  referrer: string | null;
  device: string;
  country: string;
  locale: string;
  created_at: string;
};

function buildRows() {
  const rows: EventRow[] = [];
  const now = new Date();
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));

  for (let offset = DAYS - 1; offset >= 0; offset -= 1) {
    const day = new Date(today);
    day.setUTCDate(day.getUTCDate() - offset);
    const weekday = day.getUTCDay();

    // Moins de trafic le week-end, légère tendance haussière sur le mois.
    const weekendFactor = weekday === 0 || weekday === 6 ? 0.45 : 1;
    const growth = 0.75 + ((DAYS - offset) / DAYS) * 0.5;
    const sessionsToday = Math.max(3, Math.round((14 + random() * 12) * weekendFactor * growth));

    for (let s = 0; s < sessionsToday; s += 1) {
      // visitor_hash change chaque jour : c'est la règle du sel quotidien.
      const visitorHash = hex(64);
      const sessionId = `${SEED_PREFIX}${hex(12)}`;
      const device = pick(DEVICES);
      const country = pick(COUNTRIES);
      const locale = pick(LOCALES);
      const referrer = pick(REFERRERS);

      const hour = 7 + Math.floor(random() * 14);
      const minute = Math.floor(random() * 60);
      const stamp = (extraSeconds: number) => {
        const d = new Date(day);
        d.setUTCHours(hour, minute, Math.min(59, Math.floor(random() * 50) + extraSeconds));
        return d.toISOString();
      };

      const pageCount = 1 + Math.floor(random() * 3.4);
      const visited: string[] = [];

      for (let p = 0; p < pageCount; p += 1) {
        const path = p === 0 ? pick(PAGES) : pick(PAGES);
        visited.push(path);
        rows.push({
          event_type: "pageview",
          path,
          element_id: null,
          element_label: null,
          visitor_hash: visitorHash,
          session_id: sessionId,
          referrer: p === 0 ? referrer : null,
          device,
          country,
          locale,
          created_at: stamp(p * 3)
        });
      }

      // Clics : uniquement sur des boutons présents sur une page visitée.
      const clickCount = random() < 0.42 ? 1 + Math.floor(random() * 2) : 0;
      for (let c = 0; c < clickCount; c += 1) {
        const candidates = BUTTONS.filter(([, , pages]) => pages.some((p) => visited.includes(p)));
        if (candidates.length === 0) break;
        const [elementId, label, pages] = pick(
          candidates.map((b) => [b, b[3]] as [typeof b, number])
        );
        const clickPath = pickOne(pages.filter((p) => visited.includes(p)));
        rows.push({
          event_type: "click",
          path: clickPath,
          element_id: elementId,
          element_label: label,
          visitor_hash: visitorHash,
          session_id: sessionId,
          referrer: null,
          device,
          country,
          locale,
          created_at: stamp(6 + c * 4)
        });
      }
    }
  }

  return rows;
}

/* ------------------------------------------------------------------ */
/* Actions                                                             */
/* ------------------------------------------------------------------ */

async function wipe() {
  console.log("→ Suppression du jeu de démonstration…");

  const { error } = await db.from("analytics_events").delete().like("session_id", `${SEED_PREFIX}%`);
  if (error) {
    console.error("✗ Suppression impossible :", error.message);
    process.exit(1);
  }

  // Les agrégats quotidiens sont recalculés à partir des événements
  // restants : sans événement, la journée redevient vide. Aucun reste.
  const days = distinctDays();
  let rebuilt = 0;
  for (const day of days) {
    const { error: rollupError } = await db.rpc("rollup_analytics", { target_day: day });
    if (!rollupError) rebuilt += 1;
  }

  console.log(`✓ Événements de démonstration supprimés.`);
  console.log(`✓ ${rebuilt}/${days.length} jours d'agrégats recalculés (vidés).`);
}

function distinctDays() {
  const days: string[] = [];
  const now = new Date();
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  for (let offset = DAYS - 1; offset >= 0; offset -= 1) {
    const d = new Date(today);
    d.setUTCDate(d.getUTCDate() - offset);
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}

async function seedData() {
  const rows = buildRows();
  console.log(`→ ${rows.length} événements générés sur ${DAYS} jours.`);

  // Nettoyage préalable : relancer le script ne double jamais les données.
  await db.from("analytics_events").delete().like("session_id", `${SEED_PREFIX}%`);

  const CHUNK = 500;
  for (let index = 0; index < rows.length; index += CHUNK) {
    const batch = rows.slice(index, index + CHUNK);
    const { error } = await db.from("analytics_events").insert(batch);
    if (error) {
      console.error("✗ Insertion échouée :", error.message);
      process.exit(1);
    }
    process.stdout.write(`\r  inséré ${Math.min(index + CHUNK, rows.length)}/${rows.length}`);
  }
  console.log("");

  // Agrégation de chaque jour passé pour que le sélecteur 7/30 jours
  // s'appuie bien sur analytics_daily, comme en production.
  const days = distinctDays();
  const todayIso = days[days.length - 1]!;
  let rolled = 0;
  let rollupMissing = false;

  for (const day of days) {
    if (day === todayIso) continue; // aujourd'hui est lu en direct
    const { error } = await db.rpc("rollup_analytics", { target_day: day });
    if (error) {
      rollupMissing = true;
      break;
    }
    rolled += 1;
  }

  if (rollupMissing) {
    console.warn("⚠ rollup_analytics absent : appliquez 0002_functions.sql puis relancez.");
  } else {
    console.log(`✓ ${rolled} jours agrégés dans analytics_daily.`);
  }

  const { count } = await db
    .from("analytics_events")
    .select("*", { count: "exact", head: true })
    .like("session_id", `${SEED_PREFIX}%`);

  console.log(`✓ Terminé. ${count ?? rows.length} événements de démonstration en base.`);
}

const isWipe = process.argv.includes("--wipe");

await (isWipe ? wipe() : seedData());
