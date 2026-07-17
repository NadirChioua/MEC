import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/icons/Icon";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" aria-hidden="true">
        <img src="/images/generated/mec-hero-consulting-meeting.png" alt="" />
      </div>
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <p className="eyebrow">Cabinet de conseil premium — Maroc & Europe</p>
          <h1>L’excellence au service de votre entreprise.</h1>
          <p className="lead" style={{ marginTop: 22 }}>
            Morocco Europe Consulting accompagne les entreprises marocaines et les sociétés internationales implantées ou
            souhaitant s’implanter au Maroc dans leur gestion comptable, financière, fiscale et administrative. Nous
            conseillons également les dirigeants dans leurs décisions stratégiques afin de soutenir durablement la croissance
            de leur activité.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact" variant="primary">
              Consultation confidentielle
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
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
