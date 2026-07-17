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
    description: "Strategie financiere, tresorerie, investissement et lecture claire des chiffres.",
    icon: "finance",
    imageTone: "strategy",
    imageLabel: "Analyse financiere",
    imageSrc: "/images/generated/mec-financial-advisory.png",
    imageAlt: "Conseillers financiers analysant des rapports et graphiques dans un bureau premium navy et or",
    detail:
      "Morocco Europe Consulting accompagne les entreprises dans la construction d'une strategie financiere claire, l'optimisation de la tresorerie et l'analyse des investissements afin d'ameliorer la performance et la prise de decision.",
    actions: ["Diagnostic financier", "Previsions de tresorerie", "Analyse d'investissement", "Tableaux de bord de pilotage"],
    audience: "Dirigeants, PME, investisseurs et entreprises en phase de structuration ou de croissance.",
    benefits: ["Decisions plus lisibles", "Tresorerie mieux maitrisee", "Priorites d'investissement clarifiees"]
  },
  {
    slug: "comptabilite",
    title: "Comptabilite",
    description: "Tenue comptable, bilans, liasses fiscales, reporting et suivi des obligations.",
    icon: "document",
    imageTone: "compliance",
    imageLabel: "Reporting comptable",
    imageSrc: "/images/sections/finance-table.png",
    imageAlt: "Table financiere avec ordinateur, calculatrice et graphiques pour reporting comptable professionnel",
    detail:
      "MEC prend en charge la comptabilite quotidienne et les obligations declaratives avec rigueur, confidentialite et une vision utile au pilotage de l'entreprise.",
    actions: ["Tenue comptable", "Bilans et liasses fiscales", "Reporting financier", "Suivi des echeances"],
    audience: "Entreprises marocaines, filiales internationales et structures qui veulent fiabiliser leurs chiffres.",
    benefits: ["Comptes fiables", "Conformite suivie", "Reporting exploitable par la direction"]
  },
  {
    slug: "gestion-entreprise",
    title: "Gestion d'Entreprise",
    description: "Structuration, gestion operationnelle et pilotage de performance.",
    icon: "growth",
    imageTone: "operations",
    imageLabel: "Pilotage dirigeant",
    imageSrc: "/images/generated/mec-strategy-meeting.png",
    imageAlt: "Equipe de conseil en reunion strategique avec carte mondiale et donnees financieres",
    detail:
      "Nous aidons les dirigeants a structurer l'organisation, suivre les indicateurs cles et mettre en place des methodes de gestion adaptees a leur realite operationnelle.",
    actions: ["Organisation administrative", "Pilotage d'activite", "Indicateurs de performance", "Optimisation des processus"],
    audience: "Entreprises qui souhaitent professionnaliser leur gestion et gagner en visibilite.",
    benefits: ["Organisation plus fluide", "Meilleur suivi des performances", "Processus plus efficaces"]
  },
  {
    slug: "implantation-internationale",
    title: "Implantation Internationale",
    description: "Structuration financiere, fiscale et administrative entre le Maroc et l'Europe.",
    icon: "globe",
    imageTone: "international",
    imageLabel: "Expansion Maroc-Europe",
    imageSrc: "/images/generated/mec-morocco-europe-bridge.png",
    imageAlt: "Consultants discutant une strategie internationale Maroc Europe devant une carte elegante",
    detail:
      "MEC accompagne les projets d'implantation entre le Maroc et l'Europe, de l'analyse reglementaire a la structuration financiere et juridique.",
    actions: ["Analyse de faisabilite", "Structuration transfrontaliere", "Coordination reglementaire", "Preparation administrative"],
    audience: "Entreprises marocaines et europeennes qui se developpent de part et d'autre de la Mediterranee.",
    benefits: ["Implantation mieux preparee", "Risques reglementaires reduits", "Coordination plus simple"]
  },
  {
    slug: "audit-controle",
    title: "Audit & Controle",
    description: "Audit interne, controle de gestion, risques et tableaux de bord financiers.",
    icon: "shield",
    imageTone: "audit",
    imageLabel: "Audit et controle",
    imageSrc: "/images/generated/mec-audit-compliance.png",
    imageAlt: "Auditeurs professionnels examinant des documents de controle et de conformite",
    detail:
      "Nous mettons en place des dispositifs de controle pour securiser les operations, fiabiliser les donnees et renforcer la gouvernance financiere.",
    actions: ["Audit interne", "Controle de gestion", "Analyse des risques", "Tableaux de bord financiers"],
    audience: "Directions qui veulent securiser leurs operations et ameliorer la qualite du pilotage.",
    benefits: ["Risques mieux identifies", "Donnees plus fiables", "Gouvernance renforcee"]
  },
  {
    slug: "accompagnement-personnalise",
    title: "Accompagnement Personnalise",
    description: "Un interlocuteur dedie a chaque etape de votre developpement.",
    icon: "partnership",
    imageTone: "advisory",
    imageLabel: "Relation de confiance",
    imageSrc: "/images/generated/mec-contact-cta.png",
    imageAlt: "Accord professionnel entre client et consultant dans un bureau executive navy et or",
    detail:
      "Chaque mission MEC s'appuie sur une ecoute precise des enjeux du client et un accompagnement progressif, lisible et confidentiel.",
    actions: ["Diagnostic initial", "Plan d'action priorise", "Suivi regulier", "Coordination avec vos equipes"],
    audience: "Dirigeants qui veulent un conseil proche, stable et adapte a leurs decisions.",
    benefits: ["Relation de confiance", "Suivi adapte", "Mise en oeuvre plus sereine"]
  },
  {
    slug: "commerce-maroc-europe",
    title: "Commerce Maroc-Europe",
    description: "Accompagnement des flux internationaux, obligations et arbitrages financiers.",
    icon: "market",
    imageTone: "trade",
    imageLabel: "Flux Maroc-Europe",
    imageSrc: "/images/sections/strategy-map.png",
    imageAlt: "Reunion de conseil international autour d'une carte mondiale et de supports strategiques",
    detail:
      "Notre connaissance des echanges Maroc-Europe permet d'accompagner les entreprises dans leurs flux commerciaux, leurs obligations et leurs arbitrages financiers.",
    actions: ["Analyse des flux", "Coordination documentaire", "Conseil fiscal et financier", "Suivi des operations internationales"],
    audience: "Importateurs, exportateurs et entreprises qui operent entre le Maroc et l'Europe.",
    benefits: ["Flux mieux structures", "Obligations clarifiees", "Developpement international facilite"]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
