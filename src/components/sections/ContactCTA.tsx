import { ButtonLink } from "@/components/ui/ButtonLink";
import { tr } from "@/lib/i18n-server";

export function ContactCTA() {
  return (
    <section className="final-cta">
      <img loading="lazy" decoding="async" src="/images/generated/mec-contact-cta.webp" alt="" aria-hidden="true" />
      <div className="container final-cta-content">
        <div>
          <p className="eyebrow">{tr("Première consultation")}</p>
          <h2>{tr("Parlons de vos décisions les plus importantes.")}</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            {tr("Un échange confidentiel pour cadrer vos priorités financières, comptables, d’audit ou de développement entre le Maroc et l’Europe.")}
          </p>
        </div>
        <ButtonLink href="/contact" variant="primary" trackId="final-cta-consultation" trackLabel="CTA final — Demander une consultation">
          Demander une consultation
        </ButtonLink>
      </div>
    </section>
  );
}
