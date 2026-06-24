import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { services } from "@/data/services";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ServiceImageGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Domaines d'intervention"
          title="Des cartes de mission lisibles pour décider plus vite"
          text="Chaque service MEC combine une lecture financière, une exigence réglementaire et une exécution opérationnelle."
        />
        <div className="image-card-grid" style={{ marginTop: 34 }}>
          {services.map((service) => (
            <Link className="image-service-card reveal" href={`/services/${service.slug}`} key={service.slug}>
              <div className={`service-visual tone-${service.imageTone}`}>
                <span>{service.imageLabel}</span>
              </div>
              <div className="image-service-content">
                <span className="icon-box small">
                  <Icon name={service.icon} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="card-link">
                  Lire la suite <Icon name="arrow" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
