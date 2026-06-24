import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Morocco Europe Consulting."
};

export default function LegalNoticePage() {
  return (
    <>
      <PageHero title="Mentions légales" />
      <section className="section">
        <div className="container legal-panel" style={{ padding: 28 }}>
          <h2>Éditeur du site</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            {siteConfig.name}, cabinet de conseil basé à Tanger, Maroc.
          </p>
          <h3 style={{ marginTop: 24 }}>Coordonnées</h3>
          <p>{siteConfig.contact.address}</p>
          <p>{siteConfig.contact.email}</p>
          <p>{siteConfig.contact.phone}</p>
          <h3 style={{ marginTop: 24 }}>Note de validation</h3>
          <p>
            Les informations juridiques définitives devront être validées par le client avant mise en ligne.
          </p>
        </div>
      </section>
    </>
  );
}
