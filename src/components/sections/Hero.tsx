import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/data/site";
import { Icon } from "@/components/icons/Icon";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <p className="eyebrow">Cabinet de conseil — Maroc & Europe</p>
          <h1>{siteConfig.tagline}</h1>
          <p className="lead" style={{ marginTop: 22 }}>
            Morocco Europe Consulting vous accompagne dans la gestion financière, la comptabilité et le conseil
            stratégique pour faire croître votre entreprise des deux côtés de la Méditerranée.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact" variant="primary">
              Prendre rendez-vous
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Nos services
            </ButtonLink>
          </div>
          <div className="hero-points" aria-label="Points clés">
            <div className="hero-point">
              <Icon name="location" />
              <strong>Tanger, Maroc</strong>
              <span>Une base stratégique entre Afrique et Europe.</span>
            </div>
            <div className="hero-point">
              <Icon name="market" />
              <strong>Port Tanger Med</strong>
              <span>1er port d'Afrique et de Méditerranée.</span>
            </div>
            <div className="hero-point">
              <Icon name="globe" />
              <strong>Conseil bi-continental</strong>
              <span>Finance, fiscalité et pilotage transfrontalier.</span>
            </div>
          </div>
        </div>
        <div className="hero-visual reveal" aria-label="Consultants MO-EU Consulting en réunion stratégique">
          <img src="/images/moeu-hero-consulting.png" alt="Consultants professionnels analysant une stratégie financière dans un bureau premium" />
          <div className="hero-card-metric">
            <span>Maroc-Europe</span>
            <strong>Vision stratégique</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
