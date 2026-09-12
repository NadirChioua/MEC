import Link from "next/link";
import { services } from "@/data/services";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icon } from "@/components/icons/Icon";

type ServicesGridProps = {
  showTitle?: boolean;
};

export function ServicesGrid({ showTitle = true }: ServicesGridProps) {
  return (
    <section className="section band">
      <div className="container">
        {showTitle ? (
          <SectionTitle
            center
            eyebrow="Nos services"
            title="Des solutions fiables pour votre développement"
            text="Finance, comptabilité, gestion et implantation internationale : MEC structure vos décisions avec une vision Maroc-Europe."
          />
        ) : null}
        <div className="grid three" style={{ marginTop: showTitle ? 36 : 0 }}>
          {services.map((service) => (
            <Link
              className="card service-card reveal"
              key={service.slug}
              href={`/services/${service.slug}`}
              data-track={`service-card-${service.slug}`}
              data-track-label={`Carte service — ${service.title}`}
            >
              <span className="icon-box">
                <Icon name={service.icon} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="card-link">Découvrir le service <Icon name="arrow" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
