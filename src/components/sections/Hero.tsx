import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/icons/Icon";
import { tr } from "@/lib/i18n-server";

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
          <p className="eyebrow">{tr("Cabinet de conseil financier et comptable à Tanger")}</p>
          <h1>{tr("Votre partenaire financier et opérationnel entre le Maroc et l’Europe.")}</h1>
          <p className="lead" style={{ marginTop: 22 }}>
            {tr("Morocco Europe Consulting accompagne les PME, investisseurs et sociétés internationales dans leur comptabilité, leur fiscalité, leur gestion financière et leur implantation au Maroc. Nous transformons les chiffres et les obligations en décisions claires pour sécuriser votre croissance entre le Maroc et l’Europe.")}
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact" variant="primary" trackId="hero-cta-consultation" trackLabel="Hero — Consultation confidentielle">
              Consultation confidentielle
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" trackId="hero-cta-services" trackLabel="Hero — Explorer les services">
              Explorer les services
            </ButtonLink>
          </div>
          <div className="hero-points" aria-label={tr("Expertises clés")}>
            <div className="hero-point reveal">
              <Icon name="finance" />
              <strong>{tr("Finance & reporting")}</strong>
              <span>{tr("Des chiffres fiables pour arbitrer avec précision.")}</span>
            </div>
            <div className="hero-point reveal">
              <Icon name="shield" />
              <strong>{tr("Audit & contrôle")}</strong>
              <span>{tr("Conformité, risques et gouvernance mieux cadrés.")}</span>
            </div>
            <div className="hero-point reveal">
              <Icon name="globe" />
              <strong>{tr("Maroc-Europe")}</strong>
              <span>{tr("Une lecture internationale de vos décisions.")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
