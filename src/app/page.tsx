import { AboutPreview } from "@/components/sections/AboutPreview";
import { Approach } from "@/components/sections/Approach";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Hero } from "@/components/sections/Hero";
import { InsightsGrid } from "@/components/sections/InsightsGrid";
import { QuickContact } from "@/components/sections/QuickContact";
import { ServiceImageGrid } from "@/components/sections/ServiceImageGrid";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ValueBar } from "@/components/sections/ValueBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueBar />
      <QuickContact />
      <AboutPreview />
      <ServicesGrid />
      <ServiceImageGrid />
      <WhyChooseUs />
      <Approach />
      <InsightsGrid />
      <ContactCTA />
    </>
  );
}
