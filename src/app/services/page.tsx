import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Des services de conseil fiables et performants pour accompagner votre développement au Maroc et en Europe."
};

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
