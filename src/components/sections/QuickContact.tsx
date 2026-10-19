import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/data/site";
import { Icon } from "@/components/icons/Icon";
import { tr } from "@/lib/i18n-server";

export function QuickContact() {
  return (
    <section className="container quick-contact" aria-label={tr("Contact rapide")}>
      <div className="quick-contact-grid">
        <div>
          <p className="eyebrow">{tr("Consultation gratuite")}</p>
          <h3>{tr("Parlons de vos enjeux financiers et de développement.")}</h3>
        </div>
        <div>
          <Icon name="phone" />
          <strong>{tr("Téléphone")}</strong>
          <p className="muted">{siteConfig.contact.phone}</p>
        </div>
        <div>
          <Icon name="email" />
          <strong>{tr("Email")}</strong>
          <p className="muted">{siteConfig.contact.email}</p>
        </div>
        <ButtonLink href="/contact" variant="dark" trackId="quick-contact-cta" trackLabel="Contact rapide — Contacter MEC">
          Contacter MEC
        </ButtonLink>
      </div>
    </section>
  );
}
