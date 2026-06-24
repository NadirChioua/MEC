import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Approach } from "@/components/sections/Approach";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Morocco Europe Consulting, cabinet de conseil basé à Tanger spécialisé dans l'accompagnement financier, comptable et stratégique Maroc-Europe."
};

const values = ["Expertise", "Rigueur", "Transparence", "Confidentialité"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="À propos"
        intro="Un cabinet de conseil basé à Tanger, spécialisé dans l'accompagnement financier, comptable et stratégique des entreprises opérant au Maroc et en Europe."
      />
      <section className="section">
        <div className="container split">
          <div className="image-panel">
            <div className="experience-badge">
              <strong>15+</strong>
              <span>ans d'expertise</span>
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Morocco Europe Consulting" title="Rigueur locale, vision internationale" />
            <p className="lead" style={{ marginTop: 18 }}>
              Morocco Europe Consulting est un cabinet de conseil basé à Tanger, spécialisé dans l'accompagnement
              financier, comptable et stratégique des entreprises opérant au Maroc et en Europe.
            </p>
            <p className="lead" style={{ marginTop: 14 }}>
              Grâce à une expertise locale et internationale, MEC accompagne les dirigeants dans la structuration,
              l'optimisation et le développement de leurs activités, avec une approche fondée sur la rigueur, la
              proximité et la confidentialité.
            </p>
          </div>
        </div>
      </section>
      <section className="section band">
        <div className="container">
          <SectionTitle
            center
            eyebrow="Mission"
            title="Transformer la complexité financière en décisions claires"
            text="MEC sécurise les chiffres, structure les opérations et accompagne les entreprises dans leurs projets de croissance au Maroc et en Europe."
          />
          <div className="grid three" style={{ marginTop: 36 }}>
            {services.slice(0, 6).map((service) => (
              <div className="card" key={service.slug}>
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
              <div className="card" key={value}>
                <h3>{value}</h3>
                <p>Une exigence constante dans l'accompagnement des dirigeants et la protection de leurs informations.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
