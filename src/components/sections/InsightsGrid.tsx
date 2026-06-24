import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { insights } from "@/data/insights";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function InsightsGrid() {
  return (
    <section className="section band">
      <div className="container">
        <SectionTitle
          center
          eyebrow="Ressources & insights"
          title="Des repères utiles pour vos décisions"
          text="Une base éditoriale prête à évoluer avec les publications validées par MO-EU Consulting."
        />
        <div className="insight-grid" style={{ marginTop: 34 }}>
          {insights.map((insight) => (
            <Link className="insight-card reveal" href={insight.href} key={insight.title}>
              <div className={`insight-visual tone-${insight.imageTone}`} />
              <div className="insight-content">
                <span className="meta">{insight.category} · {insight.date}</span>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
                <span className="card-link">
                  Consulter <Icon name="arrow" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
