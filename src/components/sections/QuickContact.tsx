import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/data/site";
import { Icon } from "@/components/icons/Icon";

export function QuickContact() {
  return (
    <section className="container quick-contact" aria-label="Contact rapide">
      <div className="quick-contact-grid">
        <div>
          <p className="eyebrow">Consultation gratuite</p>
          <h3>Parlons de vos enjeux financiers et de développement.</h3>
        </div>
        <div>
          <Icon name="phone" />
          <strong>Téléphone</strong>
          <p className="muted">{siteConfig.contact.phone}</p>
        </div>
        <div>
          <Icon name="email" />
          <strong>Email</strong>
          <p className="muted">{siteConfig.contact.email}</p>
        </div>
        <ButtonLink href="/contact" variant="dark">
          Contacter MEC
        </ButtonLink>
      </div>
    </section>
  );
}
