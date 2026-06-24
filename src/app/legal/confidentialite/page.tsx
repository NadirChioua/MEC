import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Politique de confidentialité de Morocco Europe Consulting."
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Confidentialité" />
      <section className="section">
        <div className="container legal-panel" style={{ padding: 28 }}>
          <h2>Données personnelles</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            Les données envoyées via le formulaire de contact sont destinées uniquement à répondre aux demandes reçues
            par {siteConfig.name}.
          </p>
          <h3 style={{ marginTop: 24 }}>Loi n°09-08</h3>
          <p>
            Le formulaire intègre un consentement relatif à la loi n°09-08 sur la protection des personnes physiques à
            l'égard du traitement des données à caractère personnel.
          </p>
          <h3 style={{ marginTop: 24 }}>Conservation et droits</h3>
          <p>
            Les durées de conservation, modalités d'exercice des droits et mentions réglementaires complètes devront
            être confirmées avec le client avant publication.
          </p>
        </div>
      </section>
    </>
  );
}
