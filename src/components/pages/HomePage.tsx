import type { Locale } from "@/data/i18n";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Approach } from "@/components/sections/Approach";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Hero } from "@/components/sections/Hero";
import { InsightsGrid } from "@/components/sections/InsightsGrid";
import { MoroccoEuropePositioning } from "@/components/sections/MoroccoEuropePositioning";
import { QuickContact } from "@/components/sections/QuickContact";
import { ServiceImageGrid } from "@/components/sections/ServiceImageGrid";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ValueBar } from "@/components/sections/ValueBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { localizedMetadata } from "./pageMeta";

export const homeMetadata = (lang: Locale) =>
  localizedMetadata(lang, {
    path: "/",
    title: "Cabinet comptable à Tanger | Conseil financier Maroc-Europe – MEC",
    absoluteTitle: true,
    description:
      "Cabinet comptable et de conseil financier à Tanger : comptabilité, fiscalité, audit, création et implantation d’entreprise au Maroc, pour PME, investisseurs et MRE. Première consultation gratuite.",
    keywords: ["cabinet comptable Tanger", "conseil financier Maroc", "création entreprise Maroc", "implantation entreprise Maroc", "audit Tanger", "fiscalité entreprise Maroc"]
  });

export function HomeContent() {
  return (
    <>
      <Hero />
      <ValueBar />
      <QuickContact />
      <AboutPreview />
      <ServicesGrid />
      <MoroccoEuropePositioning />
      <ServiceImageGrid />
      <WhyChooseUs />
      <Approach />
      <InsightsGrid />
      <ContactCTA />
    </>
  );
}
