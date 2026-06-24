import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icon } from "@/components/icons/Icon";

const approach = [
  {
    icon: "partnership",
    title: "Accompagnement sur mesure",
    text: "Nous adaptons nos solutions à vos enjeux spécifiques pour un accompagnement efficace et personnalisé."
  },
  {
    icon: "globe",
    title: "Expertise locale et internationale",
    text: "Une parfaite maîtrise des environnements marocain et européen pour vous ouvrir les meilleures opportunités."
  },
  {
    icon: "shield",
    title: "Rigueur & confiance",
    text: "Nous plaçons la qualité, la confidentialité et l'éthique au cœur de chaque mission."
  },
  {
    icon: "growth",
    title: "Création de valeur durable",
    text: "Nous vous aidons à structurer, optimiser et développer votre activité pour une croissance pérenne."
  }
];

export function Approach() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          center
          eyebrow="Notre approche"
          title="Notre approche, votre réussite"
          text="Chez MEC, nous transformons la complexité en opportunités. Notre mission : vous accompagner avec rigueur, proximité et expertise pour atteindre vos objectifs en toute sérénité."
        />
        <div className="grid four" style={{ marginTop: 36 }}>
          {approach.map((item) => (
            <div className="card reveal" key={item.title}>
              <span className="icon-box">
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
