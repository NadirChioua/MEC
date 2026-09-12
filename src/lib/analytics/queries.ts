import { createSupabaseServerClient } from "@/lib/supabase/server";
import { percentChange, type ResolvedPeriod } from "@/lib/analytics/period";
import type {
  BreakdownRow,
  ContactFunnelRow,
  KpiRow,
  TimeseriesRow,
  TopButtonRow,
  TopPageRow
} from "@/lib/supabase/types";

/**
 * Couche de lecture du dashboard.
 *
 * Toutes les agrégations sont faites en SQL (voir 0003_dashboard_api.sql) :
 * on ne rapatrie jamais les événements bruts, ce qui évite à la fois la
 * limite de 1000 lignes de PostgREST et des calculs coûteux côté Node.
 */

const EMPTY_KPIS: KpiRow = { pageviews: 0, unique_visitors: 0, sessions: 0, form_submits: 0 };

export type KpiWithTrend = {
  value: number;
  previous: number;
  change: number | null;
};

export type DashboardData = {
  kpis: {
    uniqueVisitors: KpiWithTrend;
    pageviews: KpiWithTrend;
    sessions: KpiWithTrend;
    formSubmits: KpiWithTrend;
  };
  timeseries: TimeseriesRow[];
  topPages: Array<TopPageRow & { share: number }>;
  topButtons: TopButtonRow[];
  breakdowns: {
    device: BreakdownRow[];
    country: BreakdownRow[];
    locale: BreakdownRow[];
    referrer: BreakdownRow[];
  };
  contactFunnel: ContactFunnelRow;
};

/** Erreur métier distinguable d'un bug : la base n'est pas prête. */
export class AnalyticsUnavailableError extends Error {}

export async function loadDashboardData(period: ResolvedPeriod): Promise<DashboardData> {
  const supabase = await createSupabaseServerClient();

  const range = { range_start: period.start, range_end: period.end };
  const previousRange = { range_start: period.previousStart, range_end: period.previousEnd };

  const [kpisResult, previousKpisResult, timeseriesResult, pagesResult, buttonsResult, breakdownsResult, funnelResult] =
    await Promise.all([
      supabase.rpc("dashboard_kpis", range),
      supabase.rpc("dashboard_kpis", previousRange),
      supabase.rpc("dashboard_timeseries", range),
      supabase.rpc("dashboard_top_pages", { ...range, max_rows: 15 }),
      supabase.rpc("dashboard_top_buttons", { ...range, max_rows: 20 }),
      supabase.rpc("dashboard_breakdowns", range),
      supabase.rpc("dashboard_contact_funnel", range)
    ]);

  // Une seule erreur suffit à rendre la page incohérente : on préfère
  // l'écran d'aide au dashboard à moitié rempli.
  const failure = [kpisResult, previousKpisResult, timeseriesResult, pagesResult, buttonsResult, breakdownsResult, funnelResult]
    .find((result) => result.error);

  if (failure?.error) {
    throw new AnalyticsUnavailableError(failure.error.message);
  }

  const current = firstRow(kpisResult.data) ?? EMPTY_KPIS;
  const previous = firstRow(previousKpisResult.data) ?? EMPTY_KPIS;

  const topPages = (pagesResult.data ?? []) as TopPageRow[];
  const totalPageviews = topPages.reduce((sum, page) => sum + Number(page.pageviews), 0);

  const breakdownRows = (breakdownsResult.data ?? []) as BreakdownRow[];

  return {
    kpis: {
      uniqueVisitors: withTrend(current.unique_visitors, previous.unique_visitors),
      pageviews: withTrend(current.pageviews, previous.pageviews),
      sessions: withTrend(current.sessions, previous.sessions),
      formSubmits: withTrend(current.form_submits, previous.form_submits)
    },
    timeseries: ((timeseriesResult.data ?? []) as TimeseriesRow[]).map((row) => ({
      day: row.day,
      pageviews: Number(row.pageviews),
      visitors: Number(row.visitors)
    })),
    topPages: topPages.map((page) => ({
      ...page,
      pageviews: Number(page.pageviews),
      unique_visitors: Number(page.unique_visitors),
      share: totalPageviews > 0 ? (Number(page.pageviews) / totalPageviews) * 100 : 0
    })),
    topButtons: ((buttonsResult.data ?? []) as TopButtonRow[]).map((button) => ({
      ...button,
      clicks: Number(button.clicks),
      unique_clickers: Number(button.unique_clickers),
      exposure_pageviews: Number(button.exposure_pageviews),
      click_through_rate: button.click_through_rate === null ? null : Number(button.click_through_rate)
    })),
    breakdowns: {
      device: pickDimension(breakdownRows, "device"),
      country: pickDimension(breakdownRows, "country"),
      locale: pickDimension(breakdownRows, "locale"),
      referrer: pickDimension(breakdownRows, "referrer")
    },
    contactFunnel: normalizeFunnel(firstRow(funnelResult.data))
  };
}

/* ------------------------------------------------------------------ */
/* Utilitaires                                                         */
/* ------------------------------------------------------------------ */

function firstRow<T>(data: T[] | T | null): T | null {
  if (!data) return null;
  return Array.isArray(data) ? (data[0] ?? null) : data;
}

function withTrend(currentValue: number | null, previousValue: number | null): KpiWithTrend {
  const value = Number(currentValue ?? 0);
  const previous = Number(previousValue ?? 0);
  return { value, previous, change: percentChange(value, previous) };
}

function pickDimension(rows: BreakdownRow[], dimension: BreakdownRow["dimension"]) {
  return rows
    .filter((row) => row.dimension === dimension)
    .map((row) => ({ ...row, visitors: Number(row.visitors), events: Number(row.events) }))
    .sort((a, b) => b.visitors - a.visitors);
}

function normalizeFunnel(row: ContactFunnelRow | null): ContactFunnelRow {
  if (!row) {
    return { contact_pageviews: 0, contact_visitors: 0, submit_clicks: 0, conversion_rate: null };
  }
  return {
    contact_pageviews: Number(row.contact_pageviews),
    contact_visitors: Number(row.contact_visitors),
    submit_clicks: Number(row.submit_clicks),
    conversion_rate: row.conversion_rate === null ? null : Number(row.conversion_rate)
  };
}
