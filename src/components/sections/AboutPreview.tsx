import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { stats } from "@/data/stats";
import { Icon } from "@/components/icons/Icon";

export function AboutPreview() {
  return (
    <section className="section">
      <div className="container split">
        <div className="image-panel about-visual reveal">
          <div className="experience-badge">
            <strong>15+</strong>
            <span>ans d'expertise financière et stratégique</span>
          </div>
        </div>
        <div className="reveal">
          <SectionTitle
            eyebrow="À propos de MEC"
            title="Un cabinet ancré à Tanger, tourné vers l'Europe"
            text="Morocco Europe Consulting accompagne les dirigeants dans la structuration, l'optimisation et le développement de leurs activités, avec une approche fondée sur la rigueur, la proximité et la confidentialité."
          />
          <div className="stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span className="muted">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="gold-checks">
            {["Conseil financier", "Confidentialité", "Pilotage dirigeant"].map((item) => (
              <span key={item}><Icon name="check" />{item}</span>
            ))}
          </div>
          <div className="cta-row">
            <ButtonLink href="/about" variant="secondary">
              Découvrir MEC
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
