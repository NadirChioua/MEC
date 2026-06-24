import { Icon } from "@/components/icons/Icon";

const values = [
  { icon: "strategy", title: "Expertise stratégique", text: "Des décisions financières mieux cadrées." },
  { icon: "partnership", title: "Accompagnement personnalisé", text: "Un suivi adapté à chaque dirigeant." },
  { icon: "globe", title: "Vision internationale", text: "Une lecture Maroc-Europe de vos enjeux." },
  { icon: "shield", title: "Solutions adaptées", text: "Rigueur, confidentialité et conformité." }
];

export function ValueBar() {
  return (
    <section className="value-band" aria-label="Valeurs de MO-EU Consulting">
      <div className="container value-grid">
        {values.map((item) => (
          <div className="value-item reveal" key={item.title}>
            <span className="icon-box">
              <Icon name={item.icon} />
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
