import { Skeleton } from "@/components/dashboard/primitives";

/**
 * Squelette affiché pendant le chargement des données.
 * Il reprend exactement la structure du dashboard réel : aucun saut de
 * mise en page au moment où les chiffres arrivent.
 */
export function DashboardSkeleton() {
  return (
    <div className="dash-stack" aria-busy="true" aria-label="Chargement des statistiques">
      <div className="dash-kpis">
        {Array.from({ length: 4 }).map((_, index) => (
          <article className="dash-kpi" key={index}>
            <Skeleton lines={1} height={12} />
            <Skeleton lines={1} height={34} />
            <Skeleton lines={1} height={12} />
          </article>
        ))}
      </div>

      <section className="dash-panel">
        <header className="dash-panel-head">
          <div><Skeleton lines={2} height={14} /></div>
        </header>
        <Skeleton lines={1} height={300} />
      </section>

      <div className="dash-two-columns">
        {Array.from({ length: 2 }).map((_, index) => (
          <section className="dash-panel" key={index}>
            <header className="dash-panel-head">
              <div><Skeleton lines={2} height={14} /></div>
            </header>
            <Skeleton lines={6} height={22} />
          </section>
        ))}
      </div>

      <div className="dash-breakdowns">
        {Array.from({ length: 4 }).map((_, index) => (
          <section className="dash-panel dash-breakdown" key={index}>
            <Skeleton lines={1} height={16} />
            <Skeleton lines={4} height={18} />
          </section>
        ))}
      </div>
    </div>
  );
}
