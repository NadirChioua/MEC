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
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cabinet de conseil financier et comptable à Tanger",
  description:
    "Morocco Europe Consulting accompagne entreprises, PME et investisseurs en comptabilité, finance, fiscalité, audit et implantation entre le Maroc et l’Europe.",
  path: "",
  keywords: ["cabinet comptable Tanger", "conseil financier Maroc", "implantation entreprise Maroc", "audit Tanger"]
});

export default function HomePage() {
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
import type { Metadata } from "next";
