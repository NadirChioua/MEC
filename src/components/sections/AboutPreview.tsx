import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { stats } from "@/data/stats";
import { Icon } from "@/components/icons/Icon";

export function AboutPreview() {
  return (
    <section className="section about-section">
      <div className="container split">
        <div className="image-panel about-visual reveal">
          <img loading="lazy" decoding="async" src="/images/generated/mec-financial-advisory.webp" alt="Analyse financière premium avec rapports, graphiques, ordinateur et conseillers" />
          <div className="experience-badge">
            <strong>15+</strong>
            <span>ans d’expertise financière et stratégique</span>
          </div>
        </div>
        <div className="reveal">
          <SectionTitle
            eyebrow="À propos de MEC"
            title="Votre partenaire stratégique pour réussir au Maroc"
            text="Morocco Europe Consulting accompagne les entreprises marocaines et internationales dans leur création, leur développement et leur transformation. Nous mettons notre expertise au service des dirigeants en les accompagnant dans la comptabilité, la gestion administrative, les obligations fiscales et juridiques, ainsi que dans l’optimisation de leur organisation et de leurs performances."
          />
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
          <div className="stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span className="muted">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="gold-checks">
            {["Conseil financier", "Audit & contrôle", "Pilotage dirigeant"].map((item) => (
              <span key={item}>
                <Icon name="check" />
                {item}
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
