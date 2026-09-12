import { TrafficChart } from "@/components/dashboard/TrafficChart";
import {
  DashPanel,
  EmptyState,
  InfoTip,
  ShareBar,
  TrendBadge,
  formatNumber,
  formatPercent,
  labelForCountry,
  labelForDevice,
  labelForLocale
} from "@/components/dashboard/primitives";
import { CONTACT_PATH, CONTACT_SUBMIT_ID } from "@/lib/analytics/constants";
import { PERIOD_COMPARISON_LABELS, type ResolvedPeriod } from "@/lib/analytics/period";
import type { DashboardData, KpiWithTrend } from "@/lib/analytics/queries";
import type { BreakdownRow } from "@/lib/supabase/types";

export function DashboardView({ data, period }: { data: DashboardData; period: ResolvedPeriod }) {
  const comparison = PERIOD_COMPARISON_LABELS[period.key];
  const hasTraffic = data.kpis.pageviews.value > 0;

  return (
    <div className="dash-stack">
      {/* ---------------------------------------------------------- */}
      {/* 1. KPI                                                      */}
      {/* ---------------------------------------------------------- */}
      <div className="dash-kpis">
        <KpiCard
          label="Visiteurs uniques (cumul quotidien)"
          kpi={data.kpis.uniqueVisitors}
          comparison={comparison}
          info="Le sel d’anonymisation change toutes les 24 h : un visiteur qui revient un autre jour est compté à nouveau. C’est voulu — c’est ce qui garantit qu’aucune personne ne peut être suivie d’un jour sur l’autre, conformément à la loi 09-08 et au RGPD."
        />
        <KpiCard label="Pages vues" kpi={data.kpis.pageviews} comparison={comparison} />
        <KpiCard label="Sessions" kpi={data.kpis.sessions} comparison={comparison} />
        <KpiCard
          label="Formulaires envoyés"
          kpi={data.kpis.formSubmits}
          comparison={comparison}
          hint="Clics sur le bouton d’envoi du formulaire de contact."
        />
      </div>

      {/* ---------------------------------------------------------- */}
      {/* 2. Courbe                                                   */}
      {/* ---------------------------------------------------------- */}
      <DashPanel
        title="Fréquentation"
        description="Visiteurs uniques et pages vues, jour par jour."
      >
        {hasTraffic ? (
          <TrafficChart data={data.timeseries} />
        ) : (
          <EmptyState
            title="Aucune donnée sur cette période."
            hint="Les visites apparaissent ici quelques secondes après le premier passage sur le site."
          />
        )}
      </DashPanel>

      {/* ---------------------------------------------------------- */}
      {/* 3 + 4. Pages et boutons                                     */}
      {/* ---------------------------------------------------------- */}
      <div className="dash-two-columns">
        <DashPanel title="Pages les plus vues" description="Trafic par page sur la période.">
          {data.topPages.length === 0 ? (
            <EmptyState title="Aucune page vue sur cette période." />
          ) : (
            <div className="dash-table-scroll">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th scope="col">Page</th>
                    <th scope="col" className="num">Vues</th>
                    <th scope="col" className="num">Visiteurs</th>
                    <th scope="col" className="num">Part</th>
                  </tr>
                </thead>
                <tbody>
                  {data.topPages.map((page) => (
                    <tr key={page.path}>
                      <th scope="row"><code>{page.path}</code></th>
                      <td className="num">{formatNumber(page.pageviews)}</td>
                      <td className="num">{formatNumber(page.unique_visitors)}</td>
                      <td className="num">{formatPercent(page.share)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </DashPanel>

        <DashPanel
          title="Boutons les plus cliqués"
          description="Quel appel à l’action fonctionne réellement. Le taux rapporte les clics aux pages vues des pages où le bouton a été cliqué."
        >
          {data.topButtons.length === 0 ? (
            <EmptyState
              title="Aucun clic enregistré sur cette période."
              hint="Seuls les éléments portant un attribut data-track sont comptés."
            />
          ) : (
            <div className="dash-table-scroll">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th scope="col">Bouton</th>
                    <th scope="col" className="num">Clics</th>
                    <th scope="col" className="num">Uniques</th>
                    <th scope="col" className="num">Taux</th>
                  </tr>
                </thead>
                <tbody>
                  {data.topButtons.map((button) => (
                    <tr key={button.element_id}>
                      <th scope="row">
                        <span className="dash-button-label">{button.element_label ?? button.element_id}</span>
                        <code>{button.element_id}</code>
                      </th>
                      <td className="num strong">{formatNumber(button.clicks)}</td>
                      <td className="num">{formatNumber(button.unique_clickers)}</td>
                      <td className="num">{formatPercent(button.click_through_rate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </DashPanel>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* 5. Répartitions                                             */}
      {/* ---------------------------------------------------------- */}
      <div className="dash-breakdowns">
        <BreakdownCard title="Appareils" rows={data.breakdowns.device} format={labelForDevice} />
        <BreakdownCard title="Sources" rows={data.breakdowns.referrer} format={(value) => value} limit={6} />
        <BreakdownCard title="Pays" rows={data.breakdowns.country} format={labelForCountry} limit={6} />
        <BreakdownCard title="Langues" rows={data.breakdowns.locale} format={labelForLocale} />
      </div>

      {/* ---------------------------------------------------------- */}
      {/* 6. Parcours vers le contact                                 */}
      {/* ---------------------------------------------------------- */}
      <DashPanel
        title="Parcours vers le contact"
        description="Les demandes arrivent par email : on ne mesure ici que le chemin qui y mène."
      >
        <div className="dash-funnel">
          <div className="dash-funnel-step">
            <span className="dash-funnel-label">Pages vues — contact</span>
            <strong>{formatNumber(data.contactFunnel.contact_pageviews)}</strong>
            <span className="dash-funnel-meta">
              {formatNumber(data.contactFunnel.contact_visitors)} visiteurs uniques sur <code>{CONTACT_PATH}</code>
            </span>
          </div>

          <span className="dash-funnel-arrow" aria-hidden="true">→</span>

          <div className="dash-funnel-step">
            <span className="dash-funnel-label">Formulaires envoyés</span>
            <strong>{formatNumber(data.contactFunnel.submit_clicks)}</strong>
            <span className="dash-funnel-meta">
              clics sur <code>{CONTACT_SUBMIT_ID}</code>
            </span>
          </div>

          <span className="dash-funnel-arrow" aria-hidden="true">=</span>

          <div className="dash-funnel-step highlight">
            <span className="dash-funnel-label">Taux de conversion</span>
            <strong>{formatPercent(data.contactFunnel.conversion_rate)}</strong>
            <span className="dash-funnel-meta">envois rapportés aux visites de la page contact</span>
          </div>
        </div>

        {data.contactFunnel.contact_pageviews === 0 ? (
          <EmptyState title="La page contact n’a pas encore été vue sur cette période." />
        ) : null}
      </DashPanel>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function KpiCard({
  label,
  kpi,
  comparison,
  hint,
  info
}: {
  label: string;
  kpi: KpiWithTrend;
  comparison: string;
  hint?: string;
  info?: string;
}) {
  return (
    <article className="dash-kpi">
      <span className="dash-kpi-label">
        {label}
        {info ? <InfoTip text={info} /> : null}
      </span>
      <strong className="dash-kpi-value">{formatNumber(kpi.value)}</strong>
      <div className="dash-kpi-trend">
        <TrendBadge change={kpi.change} />
        <span className="dash-kpi-comparison">{comparison}</span>
      </div>
      {hint ? <p className="dash-kpi-hint">{hint}</p> : null}
    </article>
  );
}

function BreakdownCard({
  title,
  rows,
  format,
  limit = 5
}: {
  title: string;
  rows: BreakdownRow[];
  format: (value: string) => string;
  limit?: number;
}) {
  const visible = rows.slice(0, limit);
  const max = visible.reduce((highest, row) => Math.max(highest, row.visitors), 0);
  const total = rows.reduce((sum, row) => sum + row.visitors, 0);

  return (
    <section className="dash-panel dash-breakdown">
      <h2>{title}</h2>
      {visible.length === 0 ? (
        <EmptyState title="Pas encore de données." />
      ) : (
        <ul className="dash-breakdown-list">
          {visible.map((row) => (
            <li key={`${row.dimension}-${row.value}`}>
              <span className="dash-breakdown-name">{format(row.value)}</span>
              <ShareBar value={row.visitors} max={max} />
              <span className="dash-breakdown-value">
                {formatNumber(row.visitors)}
                <small>{total > 0 ? formatPercent((row.visitors / total) * 100, 0) : "—"}</small>
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
