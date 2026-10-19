import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/icons/Icon";
import { tr } from "@/lib/i18n-server";

const points = [
  "Structuration financière et administrative des projets transfrontaliers.",
  "Lecture combinée des contraintes marocaines, européennes et sectorielles.",
  "Accompagnement discret des dirigeants, investisseurs et filiales."
];

export function MoroccoEuropePositioning() {
  return (
    <section className="section morocco-europe-section">
      <div className="container split">
        <div className="reveal">
          <p className="eyebrow">{tr("Positionnement international")}</p>
          <h2>{tr("Le pont stratégique entre le Maroc et l’Europe.")}</h2>
          <p className="lead" style={{ marginTop: 14 }}>
            {tr("MEC aide les entreprises à transformer la complexité transfrontalière en décisions structurées : finance, audit, comptabilité, fiscalité opérationnelle et coordination des partenaires.")}
          </p>
          <ul className="positioning-list">
            {points.map((point) => (
              <li key={point}>
                <Icon name="check" />
                <span>{tr(point)}</span>
              </li>
            ))}
          </ul>
          <div className="cta-row">
            <ButtonLink href="/services/implantation-internationale" variant="secondary" trackId="positioning-cta-implantation" trackLabel="Positionnement — Implantation internationale">
              Voir l’accompagnement international
            </ButtonLink>
          </div>
        </div>
        <div className="positioning-visual reveal">
          <img loading="lazy" decoding="async" src="/images/generated/mec-morocco-europe-bridge.webp" alt={tr("Équipe de conseil international discutant une stratégie Maroc Europe dans un bureau premium")} />
          <div className="positioning-seal">
            <img loading="lazy" decoding="async" src="/images/brand/logo-mark.webp" alt="" aria-hidden="true" />
            <span>Morocco-Europe advisory</span>
          </div>
        </div>
      </div>
    </section>
  );
}
