import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Mentions légales", description: "Mentions légales et coordonnées de Morocco Europe Consulting à Tanger.", path: "/legal/mentions-legales" });

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
          <h3 style={{ marginTop: 24 }}>Responsabilité</h3>
          <p>Les informations publiées sur ce site ont une portée générale et ne remplacent pas un avis adapté à une situation particulière.</p>
        </div>
      </section>
    </>
  );
}
