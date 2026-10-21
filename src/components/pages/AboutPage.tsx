import Image from "next/image";
import type { Locale } from "@/data/i18n";
import { PageHero } from "@/components/PageHero";
import { PARA_AMBITION, PARA_FOREIGN, PARA_MISSION } from "@/components/sections/AboutPreview";
import { Approach } from "@/components/sections/Approach";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/data/services";
import { tr } from "@/lib/i18n-server";
import { localizedMetadata } from "./pageMeta";

export const aboutMetadata = (lang: Locale) =>
  localizedMetadata(lang, {
    path: "/about",
    title: "À propos de MEC",
    description: "Découvrez Morocco Europe Consulting, cabinet basé à Tanger et partenaire financier des entreprises qui travaillent entre le Maroc et l’Europe."
  });

const values = ["Expertise", "Rigueur", "Transparence", "Confidentialité"];

const PARA_INTRO =
  "Morocco Europe Consulting accompagne les entreprises marocaines et internationales dans leur création, leur développement et leur transformation. Nous mettons notre expertise au service des dirigeants en les accompagnant dans la comptabilité, la gestion administrative, les obligations fiscales et juridiques, ainsi que dans l’optimisation de leur organisation et de leurs performances.";

export function AboutContent() {
  return (
    <>
      <PageHero title="À propos" intro="Votre partenaire stratégique pour réussir au Maroc." />
      <section className="section">
        <div className="container split">
          <div className="image-panel reveal">
            <Image src="/images/generated/mec-financial-advisory.webp" width={1600} height={840} sizes="(max-width: 900px) 100vw, 45vw" alt={tr("Conseillers Morocco Europe Consulting analysant des documents financiers")} />
            <div className="experience-badge">
              <strong>15+</strong>
              <span>{tr("ans d’expertise")}</span>
            </div>
          </div>
          <div className="reveal">
            <SectionTitle eyebrow="Morocco Europe Consulting" title="Votre partenaire stratégique pour réussir au Maroc" />
            <p className="lead" style={{ marginTop: 18 }}>{tr(PARA_INTRO)}</p>
            <p className="lead" style={{ marginTop: 14 }}>{tr(PARA_FOREIGN)}</p>
            <p className="lead" style={{ marginTop: 14 }}>{tr(PARA_AMBITION)}</p>
            <div className="mission-callout">{tr(PARA_MISSION)}</div>
          </div>
        </div>
      </section>
      <section className="section band">
        <div className="container">
          <SectionTitle
            center
            eyebrow="Mission"
            title="L’excellence au service de votre entreprise"
            text="Nous sécurisons les projets de nos clients, optimisons leur gestion et favorisons leur réussite au Maroc grâce à un accompagnement personnalisé, rigoureux et confidentiel."
          />
          <div className="grid three" style={{ marginTop: 36 }}>
            {services.slice(0, 6).map((service) => (
              <div className="card reveal" key={service.slug}>
                <h3>{tr(service.title)}</h3>
                <p>{tr(service.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Approach />
      <section className="section band">
        <div className="container">
          <SectionTitle center eyebrow="Valeurs" title="Un cadre de confiance pour chaque mission" />
          <div className="grid four" style={{ marginTop: 32 }}>
            {values.map((value) => (
              <div className="card reveal" key={value}>
                <h3>{tr(value)}</h3>
                <p>{tr("Une exigence constante dans l’accompagnement des dirigeants et la protection de leurs informations.")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
