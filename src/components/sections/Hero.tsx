import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/icons/Icon";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" aria-hidden="true">
        <Image
          src="/images/generated/mec-hero-consulting-meeting.webp"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <p className="eyebrow">Cabinet de conseil financier et comptable à Tanger</p>
          <h1>Votre partenaire financier et opérationnel entre le Maroc et l’Europe.</h1>
          <p className="lead" style={{ marginTop: 22 }}>
            Morocco Europe Consulting accompagne les PME, investisseurs et sociétés internationales dans leur comptabilité,
            leur fiscalité, leur gestion financière et leur implantation au Maroc. Nous transformons les chiffres et les
            obligations en décisions claires pour sécuriser votre croissance entre le Maroc et l’Europe.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact" variant="primary" trackId="hero-cta-consultation" trackLabel="Hero — Consultation confidentielle">
              Consultation confidentielle
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" trackId="hero-cta-services" trackLabel="Hero — Explorer les services">
              Explorer les services
            </ButtonLink>
          </div>
          <div className="hero-points" aria-label="Expertises clés">
            <div className="hero-point reveal">
              <Icon name="finance" />
              <strong>Finance & reporting</strong>
              <span>Des chiffres fiables pour arbitrer avec précision.</span>
            </div>
            <div className="hero-point reveal">
              <Icon name="shield" />
              <strong>Audit & contrôle</strong>
              <span>Conformité, risques et gouvernance mieux cadrés.</span>
            </div>
            <div className="hero-point reveal">
              <Icon name="globe" />
              <strong>Maroc-Europe</strong>
              <span>Une lecture internationale de vos décisions.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
