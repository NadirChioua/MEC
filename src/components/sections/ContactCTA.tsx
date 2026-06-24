import { ButtonLink } from "@/components/ui/ButtonLink";

export function ContactCTA() {
  return (
    <section className="section compact dark-band final-cta">
      <div className="container resource-card" style={{ background: "transparent", borderColor: "rgba(255,255,255,.24)", boxShadow: "none" }}>
        <div>
          <p className="eyebrow">Première consultation</p>
          <h2>Prêt à structurer votre croissance ?</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            Échangeons sur vos priorités et les leviers financiers, comptables ou réglementaires à sécuriser.
          </p>
        </div>
        <ButtonLink href="/contact" variant="primary">
          Demandez une consultation gratuite
        </ButtonLink>
      </div>
    </section>
  );
}
