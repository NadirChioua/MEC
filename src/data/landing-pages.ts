export type SeoLandingPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
  outcomes: string[];
  sections: { title: string; text: string; items?: string[] }[];
  process: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  relatedServices: string[];
  keywords: string[];
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "cabinet-comptable-tanger",
    eyebrow: "Comptabilité et pilotage à Tanger",
    title: "Cabinet comptable à Tanger pour entreprises et investisseurs",
    description:
      "MEC accompagne les entreprises à Tanger en tenue comptable, fiscalité, reporting, paie, tableaux de bord et pilotage financier.",
    intro:
      "Morocco Europe Consulting aide les dirigeants, PME, filiales et investisseurs à fiabiliser leur comptabilité, respecter leurs échéances et transformer leurs chiffres en décisions. Notre équipe basée à Tanger coordonne le suivi comptable, fiscal et financier avec une approche claire et confidentielle.",
    imageSrc: "/images/sections/finance-table.png",
    imageAlt: "Cabinet comptable à Tanger pour la gestion financière des entreprises",
    outcomes: ["Comptes et échéances mieux maîtrisés", "Reporting lisible pour la direction", "Interlocuteur local à Tanger", "Coordination Maroc-Europe"],
    sections: [
      {
        title: "Une comptabilité utile à la direction",
        text: "Au-delà de la tenue des comptes, nous organisons l’information pour expliquer la marge, la trésorerie, les écarts et les engagements. Le reporting est adapté à la taille de l’entreprise et au rythme de décision du dirigeant.",
        items: ["Tenue et révision comptable", "Bilans et liasses fiscales", "Déclarations et calendrier d’échéances", "Reporting mensuel et tableaux de bord"]
      },
      {
        title: "Un accompagnement pour PME, filiales et projets internationaux",
        text: "Nous intervenons auprès d’entreprises marocaines et de structures internationales présentes à Tanger. Les missions peuvent intégrer le suivi des flux avec l’Europe, la préparation budgétaire, l’analyse des coûts et la coordination avec les conseils juridiques de l’entreprise.",
        items: ["PME et dirigeants", "Filiales de groupes étrangers", "Importateurs et exportateurs", "Sociétés en création ou restructuration"]
      },
      {
        title: "Tanger : proximité locale, lecture internationale",
        text: "Notre implantation à Tanger facilite les échanges avec les entreprises de la région Tanger-Tétouan-Al Hoceïma, les acteurs industriels et logistiques, ainsi qu’avec les investisseurs qui développent une activité entre le Maroc et l’Europe."
      }
    ],
    process: [
      { title: "Diagnostic", text: "Analyse de votre organisation, de vos obligations et de vos priorités." },
      { title: "Plan de reprise", text: "Calendrier, responsabilités, documents et méthode de reporting." },
      { title: "Mise en œuvre", text: "Production, contrôles, déclarations et échanges avec la direction." },
      { title: "Pilotage", text: "Revue régulière des chiffres, écarts, risques et actions." }
    ],
    faq: [
      { question: "Quels services comptables propose MEC à Tanger ?", answer: "MEC propose notamment tenue et révision comptable, bilans, liasses fiscales, suivi des échéances, reporting financier et tableaux de bord de direction." },
      { question: "Travaillez-vous avec les filiales étrangères ?", answer: "Oui. MEC accompagne des structures marocaines et internationales, notamment sur le reporting, les flux Maroc-Europe et la coordination administrative, financière et fiscale." },
      { question: "Peut-on commencer par un diagnostic ?", answer: "Oui. Un premier échange permet de cadrer le périmètre, les documents disponibles, les urgences et la fréquence de suivi adaptée." }
    ],
    relatedServices: ["comptabilite", "gestion-entreprise", "conseil-financier"],
    keywords: ["cabinet comptable Tanger", "comptable Tanger", "fiscalité entreprise Tanger", "tenue comptable Tanger", "conseil financier Tanger"]
  },
  {
    slug: "creation-entreprise-maroc",
    eyebrow: "Création et structuration",
    title: "Création d’entreprise au Maroc : un accompagnement structuré",
    description:
      "Préparez la création de votre entreprise au Maroc avec un diagnostic financier, comptable, fiscal et administratif adapté à votre projet.",
    intro:
      "Créer une entreprise exige d’aligner activité, associés, gouvernance, financement, banque, fiscalité et obligations sociales. MEC structure ces décisions, prépare le calendrier et coordonne les informations nécessaires avec les professionnels juridiques et administratifs concernés.",
    imageSrc: "/images/generated/mec-strategy-meeting.png",
    imageAlt: "Accompagnement professionnel à la création d’une entreprise au Maroc",
    outcomes: ["Projet cadré avant le dépôt", "Financement et flux documentés", "Calendrier administratif lisible", "Démarrage comptable anticipé"],
    sections: [
      { title: "Transformer l’idée en dossier cohérent", text: "Nous clarifions l’activité, les associés, la gouvernance, le budget et les flux attendus. Cette base permet aux intervenants juridiques et administratifs de préparer un dossier cohérent avec le fonctionnement réel de l’entreprise.", items: ["Modèle économique et budget", "Gouvernance et pouvoirs", "Besoins de financement", "Organisation comptable et fiscale"] },
      { title: "Préparer les décisions avant la première facture", text: "La banque, la TVA, la paie, les contrats, les justificatifs et le reporting doivent être anticipés. MEC organise une checklist de lancement et accompagne la mise en place des outils de gestion." },
      { title: "Une coordination pluridisciplinaire", text: "Lorsque le dossier nécessite un acte ou un avis juridique, nous travaillons avec le notaire ou l’avocat compétent. Chaque sujet est orienté vers le bon professionnel, avec un suivi global du projet." }
    ],
    process: [
      { title: "Cadrage du projet", text: "Activité, associés, marché, budget et calendrier." },
      { title: "Structuration", text: "Scénarios de gouvernance, financement et organisation." },
      { title: "Coordination", text: "Pièces, intervenants, formalités et suivi des étapes." },
      { title: "Démarrage", text: "Comptabilité, fiscalité, paie, trésorerie et tableau de bord." }
    ],
    faq: [
      { question: "Quelles sont les premières décisions pour créer une entreprise au Maroc ?", answer: "Il faut d’abord clarifier l’activité, les associés, la gouvernance, le financement, le siège et le calendrier. La forme juridique doit découler de ces éléments." },
      { question: "MEC remplace-t-il l’avocat ou le notaire ?", answer: "Non. MEC structure les dimensions financières, comptables et opérationnelles et coordonne, lorsque nécessaire, avec les professionnels habilités pour les actes et avis juridiques." },
      { question: "Pouvez-vous accompagner le démarrage après la création ?", answer: "Oui. L’accompagnement peut continuer avec la comptabilité, les déclarations, la trésorerie, le reporting et le pilotage de l’activité." }
    ],
    relatedServices: ["gestion-entreprise", "comptabilite", "accompagnement-personnalise"],
    keywords: ["création entreprise Maroc", "créer société Maroc", "accompagnement création société Maroc", "cabinet création entreprise Maroc"]
  },
  {
    slug: "implantation-entreprise-maroc",
    eyebrow: "Développement Maroc-Europe",
    title: "Implantation d’une entreprise étrangère au Maroc",
    description:
      "MEC accompagne les entreprises européennes et investisseurs étrangers dans la préparation financière, fiscale, comptable et opérationnelle de leur implantation au Maroc.",
    intro:
      "Une implantation réussie relie la stratégie du groupe à la réalité marocaine : structure, financement, flux, fiscalité, banque, ressources humaines et reporting. MEC aide les entreprises européennes à cadrer ces sujets et à coordonner leur mise en œuvre au Maroc.",
    imageSrc: "/images/generated/mec-morocco-europe-bridge.png",
    imageAlt: "Implantation d’une entreprise européenne au Maroc avec accompagnement MEC",
    outcomes: ["Scénario d’implantation comparé", "Flux Maroc-Europe cartographiés", "Risques et obligations identifiés", "Feuille de route opérationnelle"],
    sections: [
      { title: "Choisir un modèle d’implantation adapté", text: "Filiale, succursale, bureau de liaison ou partenariat ne répondent pas aux mêmes objectifs. L’analyse doit intégrer contrôle, responsabilité, activité locale, facturation, recrutement, financement et perspectives de développement." },
      { title: "Sécuriser les financements et les flux transfrontaliers", text: "Les apports, prêts, services intragroupe, dividendes et autres paiements doivent être documentés. Une cartographie des flux permet d’anticiper les traitements bancaires, comptables, fiscaux et réglementaires.", items: ["Capital et comptes courants", "Contrats et facturation intragroupe", "Trésorerie et banque", "Justificatifs de financement en devises"] },
      { title: "Construire le dispositif de pilotage", text: "Avant le démarrage, définissez le plan comptable, la fréquence de clôture, les indicateurs, les responsabilités et le format de reporting vers l’Europe. La qualité de ces fondations détermine la lisibilité des premiers mois." }
    ],
    process: [
      { title: "Faisabilité", text: "Objectifs, activités, contraintes et scénarios." },
      { title: "Structuration", text: "Finance, fiscalité, banque, gouvernance et reporting." },
      { title: "Installation", text: "Calendrier, prestataires, documents et contrôles." },
      { title: "Suivi", text: "Clôture, trésorerie, conformité et décisions de croissance." }
    ],
    faq: [
      { question: "Comment une entreprise européenne peut-elle s’implanter au Maroc ?", answer: "Plusieurs options existent selon l’activité et les objectifs. Une étude de faisabilité doit comparer structure, gouvernance, fiscalité, financement, recrutement et obligations réglementaires." },
      { question: "Pourquoi documenter les flux entre la maison mère et le Maroc ?", answer: "La documentation clarifie la nature des paiements, leur traitement comptable et fiscal, les justificatifs bancaires et les responsabilités entre entités." },
      { question: "MEC accompagne-t-il le reporting vers l’Europe ?", answer: "Oui. MEC peut structurer la clôture, les tableaux de bord et le reporting financier afin de relier les exigences du groupe aux données de la structure marocaine." }
    ],
    relatedServices: ["implantation-internationale", "commerce-maroc-europe", "conseil-financier"],
    keywords: ["implantation entreprise Maroc", "entreprise étrangère Maroc", "investir au Maroc entreprise", "filiale Maroc", "conseil implantation Maroc"]
  }
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}

