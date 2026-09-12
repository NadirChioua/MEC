import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Formatage                                                           */
/* ------------------------------------------------------------------ */

const numberFormatter = new Intl.NumberFormat("fr-FR");

export function formatNumber(value: number) {
  return numberFormatter.format(Math.round(value));
}

export function formatPercent(value: number | null, digits = 1) {
  if (value === null || Number.isNaN(value)) return "—";
  return `${value.toFixed(digits).replace(".", ",")} %`;
}

export function formatSignedPercent(value: number | null) {
  if (value === null || Number.isNaN(value)) return "—";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1).replace(".", ",")} %`;
}

const DEVICE_LABELS: Record<string, string> = {
  mobile: "Mobile",
  tablet: "Tablette",
  desktop: "Ordinateur",
  inconnu: "Inconnu"
};

const LOCALE_LABELS: Record<string, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
  nl: "Nederlands",
  es: "Español",
  inconnu: "Inconnue"
};

export function labelForDevice(value: string) {
  return DEVICE_LABELS[value] ?? value;
}

export function labelForLocale(value: string) {
  return LOCALE_LABELS[value] ?? value.toUpperCase();
}

export function labelForCountry(value: string) {
  if (value === "inconnu") return "Inconnu";
  try {
    const names = new Intl.DisplayNames(["fr"], { type: "region" });
    return names.of(value) ?? value;
  } catch {
    return value;
  }
}

/* ------------------------------------------------------------------ */
/* Blocs réutilisables                                                 */
/* ------------------------------------------------------------------ */

export function DashPanel({
  title,
  description,
  action,
  children
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="dash-panel">
      <header className="dash-panel-head">
        <div>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        {action}
      </header>
      {children}
    </section>
  );
}

/** État vide explicite : on dit pourquoi c'est vide et quoi faire ensuite. */
export function EmptyState({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="dash-empty">
      <p className="dash-empty-title">{title}</p>
      {hint ? <p className="dash-empty-hint">{hint}</p> : null}
    </div>
  );
}

/**
 * Squelette de chargement : reproduit la forme du contenu final pour que
 * la mise en page ne bouge pas quand les données arrivent.
 */
export function Skeleton({ lines = 4, height = 18 }: { lines?: number; height?: number }) {
  return (
    <div className="dash-skeleton" aria-hidden="true">
      {Array.from({ length: lines }).map((_, index) => (
        <span key={index} style={{ height }} />
      ))}
    </div>
  );
}

/**
 * Bulle d'information.
 *
 * Sans JavaScript : la bulle s'affiche au survol et au focus clavier via
 * CSS. Le texte est aussi exposé aux lecteurs d'écran par aria-label, donc
 * l'information n'est jamais réservée aux utilisateurs de souris.
 */
export function InfoTip({ text }: { text: string }) {
  return (
    <span className="dash-infotip">
      <button type="button" className="dash-infotip-trigger" aria-label={`Information : ${text}`}>
        <span aria-hidden="true">i</span>
      </button>
      <span className="dash-infotip-bubble" role="tooltip">
        {text}
      </span>
    </span>
  );
}

export function TrendBadge({ change }: { change: number | null }) {
  if (change === null) {
    return <span className="dash-trend neutral">Pas de comparaison</span>;
  }

  const rounded = Number(change.toFixed(1));
  const direction = rounded > 0 ? "up" : rounded < 0 ? "down" : "flat";
  const arrow = direction === "up" ? "▲" : direction === "down" ? "▼" : "—";

  return (
    <span className={`dash-trend ${direction}`}>
      <span aria-hidden="true">{arrow}</span> {formatSignedPercent(rounded)}
    </span>
  );
}

/** Barre de proportion horizontale, utilisée dans les répartitions. */
export function ShareBar({ value, max }: { value: number; max: number }) {
  const width = max > 0 ? Math.max((value / max) * 100, 2) : 0;
  return (
    <span className="dash-bar" aria-hidden="true">
      <span style={{ width: `${width}%` }} />
    </span>
  );
}
