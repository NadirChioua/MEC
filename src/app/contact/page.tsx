import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Morocco Europe Consulting pour une première consultation gratuite en conseil financier, comptabilité ou gestion d'entreprise Maroc-Europe."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        intro="Vous recherchez un accompagnement fiable en conseil financier, comptabilité ou gestion d'entreprise entre le Maroc et l'Europe ? Notre équipe est disponible pour une première consultation gratuite sans engagement."
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
              <p>Bloc adresse prêt à recevoir une carte intégrée lorsque la fiche Google Maps officielle est confirmée.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
