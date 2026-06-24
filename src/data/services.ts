export type Service = {
  slug: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
  imageTone: string;
  imageLabel: string;
  actions: string[];
  audience: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "conseil-financier",
    title: "Conseil Financier",
    description: "Stratégie financière, optimisation de trésorerie et analyse des investissements.",
    icon: "finance",
    imageTone: "strategy",
    imageLabel: "Analyse financière",
    detail:
      "Morocco Europe Consulting accompagne les entreprises dans la construction d'une stratégie financière claire, l'optimisation de la trésorerie et l'analyse des investissements afin d'améliorer la performance et la prise de décision.",
    actions: ["Diagnostic financier", "Prévisions de trésorerie", "Analyse d'investissement", "Tableaux de bord de pilotage"],
    audience: "Dirigeants, PME, investisseurs et entreprises en phase de structuration ou de croissance.",
    benefits: ["Décisions plus lisibles", "Trésorerie mieux maîtrisée", "Priorités d'investissement clarifiées"]
  },
  {
    slug: "comptabilite",
    title: "Comptabilité",
    description: "Tenue de comptabilité, bilans, liasses fiscales et reporting financier.",
    icon: "document",
    imageTone: "compliance",
    imageLabel: "Reporting comptable",
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
    imageLabel: "Pilotage d'entreprise",
    detail:
      "Nous aidons les dirigeants à structurer l'organisation, suivre les indicateurs clés et mettre en place des méthodes de gestion adaptées à leur réalité opérationnelle.",
    actions: ["Organisation administrative", "Pilotage d'activité", "Indicateurs de performance", "Optimisation des processus"],
    audience: "Entreprises qui souhaitent professionnaliser leur gestion et gagner en visibilité.",
    benefits: ["Organisation plus fluide", "Meilleur suivi des performances", "Processus plus efficaces"]
  },
  {
    slug: "implantation-internationale",
    title: "Implantation Internationale",
    description: "Fiscalité transfrontalière, conformité réglementaire et structuration juridique.",
    icon: "globe",
    imageTone: "international",
    imageLabel: "Expansion internationale",
    detail:
      "MEC accompagne les projets d'implantation entre le Maroc et l'Europe, de l'analyse réglementaire à la structuration financière et juridique.",
    actions: ["Analyse de faisabilité", "Structuration transfrontalière", "Coordination réglementaire", "Préparation administrative"],
    audience: "Entreprises marocaines et européennes qui se développent de part et d'autre de la Méditerranée.",
    benefits: ["Implantation mieux préparée", "Risques réglementaires réduits", "Coordination plus simple"]
  },
  {
    slug: "audit-controle",
    title: "Audit & Contrôle",
    description: "Audit interne, contrôle de gestion et tableaux de bord financiers.",
    icon: "shield",
    imageTone: "audit",
    imageLabel: "Contrôle et audit",
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
    imageLabel: "Conseil dédié",
    detail:
      "Chaque mission MEC s'appuie sur une écoute précise des enjeux du client et un accompagnement progressif, lisible et confidentiel.",
    actions: ["Diagnostic initial", "Plan d'action priorisé", "Suivi régulier", "Coordination avec vos équipes"],
    audience: "Dirigeants qui veulent un conseil proche, stable et adapté à leurs décisions.",
    benefits: ["Relation de confiance", "Suivi adapté", "Mise en oeuvre plus sereine"]
  },
  {
    slug: "commerce-maroc-europe",
    title: "Commerce Maroc-Europe",
    description: "Nous accompagnons vos flux internationaux avec expertise et rigueur.",
    icon: "market",
    imageTone: "trade",
    imageLabel: "Flux Maroc-Europe",
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
