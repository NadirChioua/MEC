import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { insights } from "@/data/insights";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { lp, tr } from "@/lib/i18n-server";

export function InsightsGrid() {
  return (
    <section className="section band insights-section">
      <div className="container">
        <div className="reveal">
          <SectionTitle
            center
            eyebrow="Ressources & insights"
            title="Des repères utiles pour vos décisions"
            text="Des guides pratiques, datés et structurés par nos experts pour préparer vos décisions financières et vos projets Maroc-Europe."
          />
        </div>
        <div className="insight-grid insight-grid-priority" style={{ marginTop: 34 }}>
          {insights.map((insight) => (
            <Link className="insight-card reveal" href={lp(insight.href)} key={insight.title}>
              <div className={`insight-visual tone-${insight.imageTone}`}>
                <img src={insight.imageSrc} alt={tr(insight.imageAlt)} loading="lazy" />
                <span>{tr(insight.category)}</span>
              </div>
              <div className="insight-content">
                <span className="meta">{tr(insight.category)} - {tr(insight.date)}</span>
                <h3>{tr(insight.title)}</h3>
                <p>{tr(insight.description)}</p>
                <span className="card-link">
                  {tr("Consulter")} <Icon name="arrow" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
