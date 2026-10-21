import Image from "next/image";
import type { Locale } from "@/data/i18n";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { tr } from "@/lib/i18n-server";
import { localizedMetadata } from "./pageMeta";

export const teamMetadata = (lang: Locale) =>
  localizedMetadata(lang, {
    path: "/notre-equipe",
    title: "Notre équipe d’experts à Tanger",
    description: "Découvrez l’équipe MEC : comptables agréés, analystes financiers, conseillers en gestion et partenaires juridiques au service des entreprises au Maroc.",
    image: "/images/generated/mec-strategy-meeting.webp"
  });

const expertiseCards = [
  { title: "Comptables agréés", text: "Une expertise comptable structurée pour sécuriser vos obligations, vos déclarations et votre organisation financière." },
  { title: "Analystes financiers", text: "Une lecture claire des chiffres, de la performance et des décisions d’investissement pour accompagner la croissance." },
  { title: "Conseillers en gestion", text: "Un accompagnement opérationnel et stratégique pour améliorer le pilotage, les processus et la prise de décision." }
];

const scopeItems = ["Comptabilité", "Fiscalité", "Analyse financière", "Pilotage de la performance", "Conseil stratégique", "Coordination juridique"];

export function TeamContent() {
  return (
    <>
      <PageHero title="Notre équipe" intro="Une équipe d’experts au service de votre réussite." />

      <section className="section">
        <div className="container split">
          <div className="image-panel reveal">
            <Image src="/images/generated/mec-strategy-meeting.webp" width={1600} height={840} sizes="(max-width: 900px) 100vw, 45vw" alt={tr("Équipe Morocco Europe Consulting réunie autour d’une mission de conseil stratégique")} />
            <div className="experience-badge">
              <strong>20+</strong>
              <span>{tr("ans d’expérience")}</span>
            </div>
          </div>

          <div className="reveal">
            <SectionTitle eyebrow="Expertise pluridisciplinaire" title="Une équipe d’experts au service de votre réussite" />
            <p className="lead" style={{ marginTop: 18 }}>
              {tr("Chez Morocco Europe Consulting (MEC), nous mettons à votre disposition une équipe de comptables agréés, d’analystes financiers et de conseillers en gestion bénéficiant de plus de 20 ans d’expérience dans l’accompagnement des entreprises marocaines et internationales.")}
            </p>
            <p className="lead" style={{ marginTop: 14 }}>
              {tr("Notre expertise couvre la comptabilité, la fiscalité, l’analyse financière, le pilotage de la performance et le conseil stratégique, afin de vous offrir des solutions fiables, conformes et adaptées aux enjeux de votre activité.")}
            </p>
            <div className="mission-callout">
              {tr("Avec MEC, vous bénéficiez d’un interlocuteur de confiance, d’un accompagnement personnalisé et d’une expertise pluridisciplinaire pour développer votre entreprise en toute sérénité.")}
            </div>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <SectionTitle
            center
            eyebrow="Domaines d’expertise"
            title="Des compétences complémentaires pour sécuriser vos décisions"
            text="Notre approche réunit exigence financière, conformité réglementaire et vision stratégique pour accompagner chaque étape de votre développement."
          />
          <div className="grid three" style={{ marginTop: 36 }}>
            {expertiseCards.map((item) => (
              <div className="card reveal" key={item.title}>
                <h3>{tr(item.title)}</h3>
                <p>{tr(item.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <SectionTitle eyebrow="Réseau de partenaires" title="Une approche globale pour vos opérations sensibles" />
            <p className="lead" style={{ marginTop: 18 }}>
              {tr("Parce que chaque projet nécessite une approche globale, nous travaillons en étroite collaboration avec un réseau de notaires et d’avocats reconnus. Cette synergie nous permet d’accompagner nos clients à chaque étape de leur développement, de la création de leur société jusqu’à la sécurisation de leurs opérations juridiques, fiscales et financières.")}
            </p>
          </div>

          <div className="card reveal">
            <h3>{tr("Une couverture complète")}</h3>
            <div className="grid two" style={{ marginTop: 20 }}>
              {scopeItems.map((item) => (
                <p key={item} style={{ margin: 0 }}>
                  {tr(item)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
