import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { stats } from "@/data/stats";
import { Icon } from "@/components/icons/Icon";
import { tr } from "@/lib/i18n-server";

// shared with the About page
export const PARA_FOREIGN =
  "Nous accompagnons également les entrepreneurs et investisseurs étrangers souhaitant s’implanter au Maroc. De la création de leur société aux démarches administratives, fiscales et comptables, nous les guidons à chaque étape de leur installation afin de leur offrir un parcours simple, sécurisé et conforme à la réglementation marocaine.";
export const PARA_AMBITION =
  "Notre ambition est de permettre à chaque entreprise de se développer en toute sérénité, en bénéficiant d’un accompagnement personnalisé, rigoureux et confidentiel. Chez Morocco Europe Consulting, nous transformons les défis en opportunités et bâtissons des solutions durables pour assurer la réussite de nos clients.";
export const PARA_MISSION =
  "Notre mission est simple : offrir à nos clients un partenaire de confiance, capable de sécuriser leurs projets, d’optimiser leur gestion et de favoriser leur réussite au Maroc.";

export function AboutPreview() {
  return (
    <section className="section about-section">
      <div className="container split">
        <div className="image-panel about-visual reveal">
          <Image src="/images/generated/mec-financial-advisory.webp" width={1600} height={840} sizes="(max-width: 900px) 100vw, 45vw" alt={tr("Analyse financière premium avec rapports, graphiques, ordinateur et conseillers")} />
          <div className="experience-badge">
            <strong>15+</strong>
            <span>{tr("ans d’expertise financière et stratégique")}</span>
          </div>
        </div>
        <div className="reveal">
          <SectionTitle
            eyebrow="À propos de MEC"
            title="Votre partenaire stratégique pour réussir au Maroc"
            text="Morocco Europe Consulting accompagne les entreprises marocaines et internationales dans leur création, leur développement et leur transformation. Nous mettons notre expertise au service des dirigeants en les accompagnant dans la comptabilité, la gestion administrative, les obligations fiscales et juridiques, ainsi que dans l’optimisation de leur organisation et de leurs performances."
          />
          <p className="lead" style={{ marginTop: 14 }}>
            {tr(PARA_FOREIGN)}
          </p>
          <p className="lead" style={{ marginTop: 14 }}>
            {tr(PARA_AMBITION)}
          </p>
          <div className="mission-callout">
            {tr(PARA_MISSION)}
          </div>
          <div className="stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span className="muted">{tr(stat.label)}</span>
              </div>
            ))}
          </div>
          <div className="gold-checks">
            {["Conseil financier", "Audit & contrôle", "Pilotage dirigeant"].map((item) => (
              <span key={item}>
                <Icon name="check" />
                {tr(item)}
              </span>
            ))}
          </div>
          <div className="cta-row">
            <ButtonLink href="/about" variant="secondary" trackId="about-preview-cta" trackLabel="À propos — En savoir plus">
              Découvrir le cabinet
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
