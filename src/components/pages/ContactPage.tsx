import type { Locale } from "@/data/i18n";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";
import { tr } from "@/lib/i18n-server";
import { localizedMetadata } from "./pageMeta";

export const contactMetadata = (lang: Locale) =>
  localizedMetadata(lang, {
    path: "/contact",
    title: "Contact - Cabinet de conseil à Tanger",
    description: "Contactez MEC à Tanger pour un premier échange en conseil financier, comptabilité, audit, création ou implantation d’entreprise au Maroc.",
    image: "/images/generated/mec-contact-cta.webp"
  });

export function ContactContent() {
  return (
    <>
      <PageHero
        title="Contact"
        intro="Vous recherchez un accompagnement fiable en conseil financier, comptabilité ou gestion d’entreprise entre le Maroc et l’Europe ? Notre équipe est disponible pour une première consultation gratuite sans engagement."
      />
      <section className="section">
        <div className="container contact-layout">
          <ContactForm />
          <aside className="grid">
            <div className="card">
              <h3>{tr("Téléphone")}</h3>
              <p>{siteConfig.contact.phone}</p>
            </div>
            <div className="card">
              <h3>{tr("Email")}</h3>
              <p>{siteConfig.contact.email}</p>
            </div>
            <div className="card">
              <h3>{tr("Adresse")}</h3>
              <p>{tr(siteConfig.contact.address)}</p>
            </div>
            <div className="card">
              <h3>{tr("Horaires")}</h3>
              <p>{tr(siteConfig.contact.hours)}</p>
            </div>
            <div className="card">
              <h3>{tr("Tanger, Maroc")}</h3>
              <p>{tr("Notre équipe vous accueille sur rendez-vous au centre de Tanger pour un échange confidentiel sur votre projet.")}</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Rue+Farabi+Residence+N18+Tanger+Maroc" target="_blank" rel="noreferrer" data-track="contact-map-link" data-track-label="Contact — Voir l’adresse sur Google Maps">
                {tr("Voir l’adresse sur Google Maps")}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
