import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/icons/Icon";

const points = [
  "Structuration financiere et administrative des projets transfrontaliers.",
  "Lecture combinee des contraintes marocaines, europeennes et sectorielles.",
  "Accompagnement discret des dirigeants, investisseurs et filiales."
];

export function MoroccoEuropePositioning() {
  return (
    <section className="section morocco-europe-section">
      <div className="container split">
        <div className="reveal">
          <p className="eyebrow">Positionnement international</p>
          <h2>Le pont strategique entre le Maroc et l'Europe.</h2>
          <p className="lead" style={{ marginTop: 14 }}>
            MEC aide les entreprises a transformer la complexite transfrontaliere en decisions structurees:
            finance, audit, comptabilite, fiscalite operationnelle et coordination des partenaires.
          </p>
          <ul className="positioning-list">
            {points.map((point) => (
              <li key={point}>
                <Icon name="check" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="cta-row">
            <ButtonLink href="/services/implantation-internationale" variant="secondary">
              Voir l'accompagnement international
            </ButtonLink>
          </div>
        </div>
        <div className="positioning-visual reveal">
          <img src="/images/generated/mec-morocco-europe-bridge.png" alt="Equipe de conseil international discutant une strategie Maroc Europe dans un bureau premium" />
          <div className="positioning-seal">
            <img src="/images/brand/logo-mark.png" alt="" aria-hidden="true" />
            <span>Morocco-Europe advisory</span>
          </div>
        </div>
      </div>
    </section>
  );
}
