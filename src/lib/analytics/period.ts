/**
 * Périodes du dashboard.
 *
 * Tout est calculé en UTC, comme le rollup SQL : sans cela, les chiffres
 * du dashboard et ceux de analytics_daily divergeraient en fin de journée.
 */

export const PERIOD_KEYS = ["today", "7d", "30d", "90d"] as const;
export type PeriodKey = (typeof PERIOD_KEYS)[number];

export const PERIOD_LABELS: Record<PeriodKey, string> = {
  today: "Aujourd’hui",
  "7d": "7 jours",
  "30d": "30 jours",
  "90d": "90 jours"
};

/** Libellé de la période de comparaison, affiché sous chaque KPI. */
export const PERIOD_COMPARISON_LABELS: Record<PeriodKey, string> = {
  today: "vs hier",
  "7d": "vs 7 jours précédents",
  "30d": "vs 30 jours précédents",
  "90d": "vs 90 jours précédents"
};

const PERIOD_DAYS: Record<PeriodKey, number> = {
  today: 1,
  "7d": 7,
  "30d": 30,
  "90d": 90
};

export type ResolvedPeriod = {
  key: PeriodKey;
  days: number;
  /** Bornes incluses, au format YYYY-MM-DD. */
  start: string;
  end: string;
  previousStart: string;
  previousEnd: string;
};

/** Valide une valeur venue de l'URL. Toute valeur inconnue retombe sur 7 jours. */
export function parsePeriod(value: string | undefined): PeriodKey {
  return PERIOD_KEYS.includes(value as PeriodKey) ? (value as PeriodKey) : "7d";
}

function toIsoDay(date: Date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + amount);
  return next;
}

export function resolvePeriod(key: PeriodKey, now = new Date()): ResolvedPeriod {
  const days = PERIOD_DAYS[key];

  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const start = addDays(today, -(days - 1));

  // La période de comparaison a exactement la même longueur et se termine
  // la veille du début de la période courante.
  const previousEnd = addDays(start, -1);
  const previousStart = addDays(previousEnd, -(days - 1));

  return {
    key,
    days,
    start: toIsoDay(start),
    end: toIsoDay(today),
    previousStart: toIsoDay(previousStart),
    previousEnd: toIsoDay(previousEnd)
  };
}

/**
 * Variation en pourcentage entre deux valeurs.
 * Retourne null quand la base est nulle : afficher "+100 %" à partir de zéro
 * n'aurait aucun sens pour l'utilisateur.
 */
export function percentChange(current: number, previous: number): number | null {
  if (previous === 0) return null;
  return ((current - previous) / previous) * 100;
}
