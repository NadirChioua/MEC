import Link from "next/link";
import { PERIOD_KEYS, PERIOD_LABELS, type PeriodKey } from "@/lib/analytics/period";

/**
 * Sélecteur de période.
 *
 * Implémenté avec de vrais liens plutôt qu'un state client : la période
 * vit dans l'URL, donc elle est partageable, revient au rechargement et
 * ne nécessite aucun JavaScript.
 */
export function PeriodSwitcher({ active }: { active: PeriodKey }) {
  return (
    <nav className="dash-period" aria-label="Période analysée">
      {PERIOD_KEYS.map((key) => (
        <Link
          key={key}
          href={key === "7d" ? "/admin" : `/admin?periode=${key}`}
          className={key === active ? "active" : ""}
          aria-current={key === active ? "page" : undefined}
          scroll={false}
        >
          {PERIOD_LABELS[key]}
        </Link>
      ))}
    </nav>
  );
}
