import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services de conseil financier et comptable",
  description: "Conseil financier, comptabilité, gestion, audit, implantation internationale et accompagnement des entreprises entre le Maroc et l’Europe.",
  path: "/services",
  keywords: ["services comptables Maroc", "conseil financier Tanger", "audit entreprise Maroc", "conseil gestion Maroc"]
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Nos Services"
        intro="Des services de conseil fiables et performants pour accompagner votre développement au Maroc et en Europe."
      />
      <ServicesGrid showTitle={false} />
      <ContactCTA />
    </>
  );
}
