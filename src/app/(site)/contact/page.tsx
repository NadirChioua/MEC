import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact - Cabinet de conseil à Tanger",
  description: "Contactez MEC à Tanger pour un premier échange en conseil financier, comptabilité, audit, création ou implantation d’entreprise au Maroc.",
  path: "/contact",
  image: "/images/generated/mec-contact-cta.png"
});

export default function ContactPage() {
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
              <h3>Téléphone</h3>
              <p>{siteConfig.contact.phone}</p>
            </div>
            <div className="card">
              <h3>Email</h3>
              <p>{siteConfig.contact.email}</p>
            </div>
            <div className="card">
              <h3>Adresse</h3>
              <p>{siteConfig.contact.address}</p>
            </div>
            <div className="card">
              <h3>Horaires</h3>
              <p>{siteConfig.contact.hours}</p>
            </div>
            <div className="card">
              <h3>Tanger, Maroc</h3>
              <p>Notre équipe vous accueille sur rendez-vous au centre de Tanger pour un échange confidentiel sur votre projet.</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Rue+Farabi+Residence+N18+Tanger+Maroc" target="_blank" rel="noreferrer" data-track="contact-map-link" data-track-label="Contact — Voir l’adresse sur Google Maps">Voir l’adresse sur Google Maps</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
