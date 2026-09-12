import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Approach } from "@/components/sections/Approach";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "À propos de MEC",
  description: "Découvrez Morocco Europe Consulting, cabinet basé à Tanger et partenaire financier des entreprises qui travaillent entre le Maroc et l’Europe.",
  path: "/about"
});

const values = ["Expertise", "Rigueur", "Transparence", "Confidentialité"];

export default function AboutPage() {
  return (
    <>
      <PageHero title="À propos" intro="Votre partenaire stratégique pour réussir au Maroc." />
      <section className="section">
        <div className="container split">
          <div className="image-panel reveal">
            <img src="/images/generated/mec-financial-advisory.png" alt="Conseillers Morocco Europe Consulting analysant des documents financiers" />
            <div className="experience-badge">
              <strong>15+</strong>
              <span>ans d’expertise</span>
            </div>
          </div>
          <div className="reveal">
            <SectionTitle eyebrow="Morocco Europe Consulting" title="Votre partenaire stratégique pour réussir au Maroc" />
            <p className="lead" style={{ marginTop: 18 }}>
              Morocco Europe Consulting accompagne les entreprises marocaines et internationales dans leur création, leur
              développement et leur transformation. Nous mettons notre expertise au service des dirigeants en les accompagnant
              dans la comptabilité, la gestion administrative, les obligations fiscales et juridiques, ainsi que dans
              l’optimisation de leur organisation et de leurs performances.
            </p>
            <p className="lead" style={{ marginTop: 14 }}>
              Nous accompagnons également les entrepreneurs et investisseurs étrangers souhaitant s’implanter au Maroc. De la
              création de leur société aux démarches administratives, fiscales et comptables, nous les guidons à chaque étape
              de leur installation afin de leur offrir un parcours simple, sécurisé et conforme à la réglementation marocaine.
            </p>
            <p className="lead" style={{ marginTop: 14 }}>
              Notre ambition est de permettre à chaque entreprise de se développer en toute sérénité, en bénéficiant d’un
              accompagnement personnalisé, rigoureux et confidentiel. Chez Morocco Europe Consulting, nous transformons les
              défis en opportunités et bâtissons des solutions durables pour assurer la réussite de nos clients.
            </p>
            <div className="mission-callout">
              Notre mission est simple : offrir à nos clients un partenaire de confiance, capable de sécuriser leurs projets,
              d’optimiser leur gestion et de favoriser leur réussite au Maroc.
            </div>
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
                <h3>{service.title}</h3>
                <p>{service.description}</p>
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
                <h3>{value}</h3>
                <p>Une exigence constante dans l’accompagnement des dirigeants et la protection de leurs informations.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
