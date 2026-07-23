export type Service = {
  slug: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
  imageTone: string;
  imageLabel: string;
  imageSrc: string;
  imageAlt: string;
  actions: string[];
  audience: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "conseil-financier",
    title: "Conseil Financier",
    description: "Stratégie financière, trésorerie, investissement et lecture claire des chiffres.",
    icon: "finance",
    imageTone: "strategy",
    imageLabel: "Analyse financière",
    imageSrc: "/images/generated/mec-financial-advisory.png",
    imageAlt: "Conseillers financiers analysant des rapports et graphiques dans un bureau premium navy et or",
    detail:
      "Morocco Europe Consulting accompagne les entreprises dans la construction d'une stratégie financière claire, l'optimisation de la trésorerie et l'analyse des investissements afin d'améliorer la performance et la prise de décision.",
    actions: ["Diagnostic financier", "Prévisions de trésorerie", "Analyse d'investissement", "Tableaux de bord de pilotage"],
    audience: "Dirigeants, PME, investisseurs et entreprises en phase de structuration ou de croissance.",
    benefits: ["Décisions plus lisibles", "Trésorerie mieux maîtrisée", "Priorités d'investissement clarifiées"]
  },
  {
    slug: "comptabilite",
    title: "Comptabilité",
    description: "Tenue comptable, bilans, liasses fiscales, reporting et suivi des obligations.",
    icon: "document",
    imageTone: "compliance",
    imageLabel: "Reporting comptable",
    imageSrc: "/images/sections/finance-table.png",
    imageAlt: "Table financière avec ordinateur, calculatrice et graphiques pour reporting comptable professionnel",
    detail:
      "MEC prend en charge la comptabilité quotidienne et les obligations déclaratives avec rigueur, confidentialité et une vision utile au pilotage de l'entreprise.",
    actions: ["Tenue comptable", "Bilans et liasses fiscales", "Reporting financier", "Suivi des échéances"],
    audience: "Entreprises marocaines, filiales internationales et structures qui veulent fiabiliser leurs chiffres.",
    benefits: ["Comptes fiables", "Conformité suivie", "Reporting exploitable par la direction"]
  },
  {
    slug: "gestion-entreprise",
    title: "Gestion d'Entreprise",
    description: "Structuration, gestion opérationnelle et pilotage de performance.",
    icon: "growth",
    imageTone: "operations",
    imageLabel: "Pilotage dirigeant",
    imageSrc: "/images/generated/mec-strategy-meeting.png",
    imageAlt: "Équipe de conseil en réunion stratégique avec carte mondiale et données financières",
    detail:
      "Nous aidons les dirigeants à structurer l'organisation, suivre les indicateurs clés et mettre en place des méthodes de gestion adaptées à leur réalité opérationnelle.",
    actions: ["Organisation administrative", "Pilotage d'activité", "Indicateurs de performance", "Optimisation des processus"],
    audience: "Entreprises qui souhaitent professionnaliser leur gestion et gagner en visibilité.",
    benefits: ["Organisation plus fluide", "Meilleur suivi des performances", "Processus plus efficaces"]
  },
  {
    slug: "implantation-internationale",
    title: "Implantation Internationale",
    description: "Structuration financière, fiscale et administrative entre le Maroc et l'Europe.",
    icon: "globe",
    imageTone: "international",
    imageLabel: "Expansion Maroc-Europe",
    imageSrc: "/images/generated/mec-morocco-europe-bridge.png",
    imageAlt: "Consultants discutant une strategie internationale Maroc Europe devant une carte elegante",
    detail:
      "MEC accompagne les projets d'implantation entre le Maroc et l'Europe, de l'analyse réglementaire à la structuration financière et juridique.",
    actions: ["Analyse de faisabilité", "Structuration transfrontalière", "Coordination réglementaire", "Préparation administrative"],
    audience: "Entreprises marocaines et européennes qui se développent de part et d'autre de la Méditerranée.",
    benefits: ["Implantation mieux préparée", "Risques réglementaires réduits", "Coordination plus simple"]
  },
  {
    slug: "audit-controle",
    title: "Audit & Contrôle",
    description: "Audit interne, contrôle de gestion, risques et tableaux de bord financiers.",
    icon: "shield",
    imageTone: "audit",
    imageLabel: "Audit et contrôle",
    imageSrc: "/images/generated/mec-audit-compliance.png",
    imageAlt: "Auditeurs professionnels examinant des documents de contrôle et de conformité",
    detail:
      "Nous mettons en place des dispositifs de contrôle pour sécuriser les opérations, fiabiliser les données et renforcer la gouvernance financière.",
    actions: ["Audit interne", "Contrôle de gestion", "Analyse des risques", "Tableaux de bord financiers"],
    audience: "Directions qui veulent sécuriser leurs opérations et améliorer la qualité du pilotage.",
    benefits: ["Risques mieux identifiés", "Données plus fiables", "Gouvernance renforcée"]
  },
  {
    slug: "accompagnement-personnalise",
    title: "Accompagnement Personnalisé",
    description: "Un interlocuteur dédié à chaque étape de votre développement.",
    icon: "partnership",
    imageTone: "advisory",
    imageLabel: "Relation de confiance",
    imageSrc: "/images/generated/mec-contact-cta.png",
    imageAlt: "Accord professionnel entre client et consultant dans un bureau exécutif navy et or",
    detail:
      "Chaque mission MEC s'appuie sur une écoute précise des enjeux du client et un accompagnement progressif, lisible et confidentiel.",
    actions: ["Diagnostic initial", "Plan d'action priorisé", "Suivi régulier", "Coordination avec vos équipes"],
    audience: "Dirigeants qui veulent un conseil proche, stable et adapté à leurs décisions.",
    benefits: ["Relation de confiance", "Suivi adapté", "Mise en œuvre plus sereine"]
  },
  {
    slug: "commerce-maroc-europe",
    title: "Commerce Maroc-Europe",
    description: "Accompagnement des flux internationaux, obligations et arbitrages financiers.",
    icon: "market",
    imageTone: "trade",
    imageLabel: "Flux Maroc-Europe",
    imageSrc: "/images/sections/strategy-map.png",
    imageAlt: "Réunion de conseil international autour d'une carte mondiale et de supports stratégiques",
    detail:
      "Notre connaissance des échanges Maroc-Europe permet d'accompagner les entreprises dans leurs flux commerciaux, leurs obligations et leurs arbitrages financiers.",
    actions: ["Analyse des flux", "Coordination documentaire", "Conseil fiscal et financier", "Suivi des opérations internationales"],
    audience: "Importateurs, exportateurs et entreprises qui opèrent entre le Maroc et l'Europe.",
    benefits: ["Flux mieux structurés", "Obligations clarifiées", "Développement international facilité"]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
