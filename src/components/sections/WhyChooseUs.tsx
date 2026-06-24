import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icon } from "@/components/icons/Icon";

const reasons = [
  {
    icon: "globe",
    title: "Double expertise réglementaire",
    text: "Normes IFRS, droit fiscal marocain et européen."
  },
  {
    icon: "strategy",
    title: "Approche sur-mesure",
    text: "Suivi personnalisé adapté à chaque client."
  },
  {
    icon: "shield",
    title: "Confidentialité absolue",
    text: "Données traitées avec la plus stricte confidentialité."
  },
  {
    icon: "time",
    title: "Réactivité garantie",
    text: "Cabinet disponible pour tous vos besoins."
  }
];

export function WhyChooseUs() {
  return (
    <section className="section dark-band">
      <div className="container">
        <SectionTitle
          eyebrow="Pourquoi nous choisir"
          title="Une expertise bi-continentale unique"
          text="Avec une présence au Maroc et en Europe, nous maîtrisons les environnements réglementaires des deux côtés de la Méditerranée."
        />
        <div className="grid four" style={{ marginTop: 36 }}>
          {reasons.map((reason) => (
            <div className="card reveal" key={reason.title}>
              <span className="icon-box">
                <Icon name={reason.icon} />
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
