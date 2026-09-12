import { NextResponse } from "next/server";
import { createServiceClient, hasServiceCredentials } from "@/lib/supabase/service";

/**
 * Tâche quotidienne de maintenance.
 *
 * Runtime Node (et non Edge) : cette route utilise la clé service_role et
 * n'est jamais appelée par un visiteur, la latence n'a donc aucune
 * importance ici.
 *
 * Trois opérations :
 *   1. rollup_analytics(hier)  — agrège la veille dans analytics_daily
 *   2. purge_old_events()      — supprime les événements de plus de 90 jours
 *   3. une lecture triviale    — empêche Supabase de mettre le projet
 *                                gratuit en pause après 7 jours d'inactivité
 *
 * Déclenchée par le cron Vercel à 02:00 UTC (voir vercel.json). Le plan
 * Hobby n'autorise qu'une exécution par jour : tout doit donc tenir dans
 * cet appel unique.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// Le plan Hobby coupe à 10 s ; on reste largement en dessous.
export const maxDuration = 10;

/**
 * Comparaison à temps constant : une comparaison naïve peut fuiter le
 * secret caractère par caractère via le temps de réponse.
 */
function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let index = 0; index < a.length; index += 1) {
    mismatch |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }
  return mismatch === 0;
}

function isAuthorized(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;

  const header = request.headers.get("authorization") ?? "";
  const expected = `Bearer ${secret}`;
  return safeEqual(header, expected);
}

function yesterdayUtc() {
  const now = new Date();
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  today.setUTCDate(today.getUTCDate() - 1);
  return today.toISOString().slice(0, 10);
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    // 401 sans détail : ne pas indiquer si CRON_SECRET est défini ou non.
    return NextResponse.json({ message: "Non autorisé." }, { status: 401 });
  }

  if (!hasServiceCredentials()) {
    return NextResponse.json({ message: "Supabase non configuré." }, { status: 503 });
  }

  const supabase = createServiceClient();
  const targetDay = yesterdayUtc();

  const report: {
    day: string;
    rolledUpRows: number | null;
    purgedEvents: number | null;
    keepAlive: boolean;
    errors: string[];
  } = { day: targetDay, rolledUpRows: null, purgedEvents: null, keepAlive: false, errors: [] };

  // 1. Agrégation de la veille.
  const rollup = await supabase.rpc("rollup_analytics", { target_day: targetDay });
  if (rollup.error) report.errors.push(`rollup_analytics: ${rollup.error.message}`);
  else report.rolledUpRows = rollup.data ?? 0;

  // 2. Purge de rétention. Exécutée même si l'agrégation a échoué : la
  //    rétention des données est une obligation, pas une option.
  const purge = await supabase.rpc("purge_old_events");
  if (purge.error) report.errors.push(`purge_old_events: ${purge.error.message}`);
  else report.purgedEvents = purge.data ?? 0;

  // 3. Lecture triviale anti-mise en veille du projet Supabase gratuit.
  const keepAlive = await supabase.from("analytics_daily").select("day").limit(1);
  if (keepAlive.error) report.errors.push(`keepAlive: ${keepAlive.error.message}`);
  else report.keepAlive = true;

  if (report.errors.length > 0) {
    console.error("[cron/rollup]", report.errors.join(" | "));
    return NextResponse.json(report, { status: 500 });
  }

  return NextResponse.json(report);
}
