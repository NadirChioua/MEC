import type { Locale } from "@/data/i18n";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { localizedMetadata } from "./pageMeta";

export const servicesMetadata = (lang: Locale) =>
  localizedMetadata(lang, {
    path: "/services",
    title: "Services de conseil financier et comptable",
    description: "Conseil financier, comptabilité, gestion, audit, implantation internationale et accompagnement des entreprises entre le Maroc et l’Europe.",
    keywords: ["services comptables Maroc", "conseil financier Tanger", "audit entreprise Maroc", "conseil gestion Maroc"]
  });

export function ServicesContent() {
  return (
    <>
      <PageHero title="Nos Services" intro="Des services de conseil fiables et performants pour accompagner votre développement au Maroc et en Europe." />
      <ServicesGrid showTitle={false} />
      <ContactCTA />
    </>
  );
}
