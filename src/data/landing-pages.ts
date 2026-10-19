import type { HrefLang } from "@/lib/seo";
import { intlLandingPages } from "./landing-pages-intl";

export type SeoLandingPage = {
  slug: string;
  /** pages sharing a group are language versions of each other (hreflang) */
  group: string;
  /** page language, French by default */
  locale?: HrefLang;
  /** full <title>, without the site suffix (falls back to title) */
  seoTitle?: string;
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
    group: "comptable",
    seoTitle: "Cabinet comptable à Tanger : comptabilité, fiscalité, paie | MEC",
    eyebrow: "Comptabilité et pilotage à Tanger",
    title: "Cabinet comptable à Tanger pour entreprises et investisseurs",
    description:
      "MEC accompagne les entreprises à Tanger en tenue comptable, fiscalité, reporting, paie, tableaux de bord et pilotage financier.",
    intro:
      "Morocco Europe Consulting aide les dirigeants, PME, filiales et investisseurs à fiabiliser leur comptabilité, respecter leurs échéances et transformer leurs chiffres en décisions. Notre équipe basée à Tanger coordonne le suivi comptable, fiscal et financier avec une approche claire et confidentielle.",
    imageSrc: "/images/sections/finance-table.webp",
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
    group: "creation",
    seoTitle: "Création d’entreprise au Maroc : accompagnement de A à Z | MEC",
    eyebrow: "Création et structuration",
    title: "Création d’entreprise au Maroc : un accompagnement structuré",
    description:
      "Préparez la création de votre entreprise au Maroc avec un diagnostic financier, comptable, fiscal et administratif adapté à votre projet.",
    intro:
      "Créer une entreprise exige d’aligner activité, associés, gouvernance, financement, banque, fiscalité et obligations sociales. MEC structure ces décisions, prépare le calendrier et coordonne les informations nécessaires avec les professionnels juridiques et administratifs concernés.",
    imageSrc: "/images/generated/mec-strategy-meeting.webp",
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
    group: "implantation",
    seoTitle: "Implantation d’entreprise étrangère au Maroc (filiale, succursale) | MEC",
    eyebrow: "Développement Maroc-Europe",
    title: "Implantation d’une entreprise étrangère au Maroc",
    description:
      "MEC accompagne les entreprises européennes et investisseurs étrangers dans la préparation financière, fiscale, comptable et opérationnelle de leur implantation au Maroc.",
    intro:
      "Une implantation réussie relie la stratégie du groupe à la réalité marocaine : structure, financement, flux, fiscalité, banque, ressources humaines et reporting. MEC aide les entreprises européennes à cadrer ces sujets et à coordonner leur mise en œuvre au Maroc.",
    imageSrc: "/images/generated/mec-morocco-europe-bridge.webp",
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
  },
  {
    slug: "creation-entreprise-maroc-mre",
    group: "mre",
    seoTitle: "Créer son entreprise au Maroc depuis l’Europe (MRE) | MEC Tanger",
    eyebrow: "MRE et investisseurs de la diaspora",
    title: "Créer son entreprise au Maroc quand on vit en Europe",
    description:
      "Vous vivez en France, en Belgique, aux Pays-Bas ou en Espagne et vous voulez créer votre société au Maroc ? MEC structure le projet, documente les fonds et suit le dossier depuis Tanger.",
    intro:
      "Créer une entreprise au Maroc à distance pose une question simple : qui suit réellement le dossier sur place ? Morocco Europe Consulting, cabinet financier et comptable basé à Tanger, organise le projet étape par étape, documente le financement venu d’Europe et travaille avec le notaire ou l’avocat compétent lorsque le dossier nécessite un acte juridique. Vous gardez un interlocuteur dédié, du premier échange au démarrage de l’activité.",
    imageSrc: "/images/generated/mec-morocco-europe-bridge.webp",
    imageAlt: "Accompagnement des Marocains résidant à l’étranger pour créer une entreprise au Maroc",
    outcomes: ["Un interlocuteur dédié à Tanger", "Fonds venus d’Europe documentés", "Étapes et pièces connues à l’avance", "Notaire ou avocat pour les actes"],
    sections: [
      {
        title: "Préparer le projet avant d’envoyer le moindre virement",
        text: "Activité, associés, gouvernance, budget, siège et calendrier : ces décisions déterminent la forme juridique et l’organisation du dossier. Nous les clarifions avec vous à distance, puis nous fixons la liste des pièces à réunir et l’ordre des démarches.",
        items: ["Activité et associés", "Forme juridique adaptée au projet", "Budget de lancement", "Calendrier des démarches"]
      },
      {
        title: "Documenter les fonds envoyés depuis l’Europe",
        text: "Pour un investissement financé depuis l’étranger, la traçabilité des devises est un sujet central. Le circuit des fonds est défini avant le premier transfert (capital, compte courant d’associé ou autre mécanisme), et les justificatifs bancaires sont conservés dès le départ.",
        items: ["Ordres de virement et avis de crédit", "Attestations bancaires", "Conventions entre associés", "Justification future des revenus ou d’une cession"]
      },
      {
        title: "Un suivi sur place, sans multiplier les intermédiaires",
        text: "MEC coordonne les informations entre vous, la banque, l’administration et les professionnels du droit. Lorsque le dossier nécessite un acte ou un avis juridique, nous travaillons avec le notaire ou l’avocat compétent. Après la création, l’accompagnement peut se poursuivre en comptabilité, déclarations et reporting."
      }
    ],
    process: [
      { title: "Premier échange à distance", text: "Votre projet, vos contraintes, vos questions." },
      { title: "Structuration", text: "Forme juridique, financement, flux et calendrier." },
      { title: "Coordination à Tanger", text: "Pièces, intervenants, formalités et suivi." },
      { title: "Démarrage", text: "Comptabilité, fiscalité, banque et tableau de bord." }
    ],
    faq: [
      { question: "Peut-on créer une société au Maroc sans y résider ?", answer: "Oui, c’est un cas fréquent pour les Marocains résidant à l’étranger. Les pièces exactes et les éventuelles procurations dépendent de la situation ; elles sont listées dès le cadrage du projet et validées avec les professionnels compétents." },
      { question: "Comment envoyer le capital depuis l’Europe ?", answer: "Le circuit des fonds doit être défini avant le premier virement et documenté : ordres de virement, avis de crédit et attestations bancaires. Cette discipline facilite la justification de l’investissement et le traitement futur des revenus." },
      { question: "MEC remplace-t-il le notaire ou l’avocat ?", answer: "Non. MEC structure les dimensions financières, comptables et opérationnelles et coordonne avec le notaire ou l’avocat lorsque le dossier nécessite un acte ou un avis juridique." },
      { question: "Faut-il se déplacer à Tanger ?", answer: "Le premier échange et une grande partie du suivi se font à distance. Notre équipe vous reçoit aussi sur rendez-vous au centre de Tanger lorsque vous êtes au Maroc." }
    ],
    relatedServices: ["implantation-internationale", "accompagnement-personnalise", "comptabilite"],
    keywords: ["création entreprise Maroc MRE", "MRE investir au Maroc", "créer une société au Maroc depuis la France", "créer une société au Maroc depuis la Belgique", "investir au Maroc depuis l’étranger"]
  },
  {
    slug: "creation-sarl-maroc",
    group: "sarl",
    seoTitle: "Création de SARL au Maroc : étapes, pièces et accompagnement | MEC",
    eyebrow: "SARL et SARL AU",
    title: "Créer une SARL au Maroc : étapes et accompagnement",
    description:
      "SARL ou SARL à associé unique : MEC vous aide à choisir la bonne structure, préparer le dossier, enchaîner les formalités dans le bon ordre et démarrer la comptabilité dès le premier mois.",
    intro:
      "La SARL est la forme la plus utilisée par les PME et les entrepreneurs au Maroc. Elle peut compter un associé unique (SARL AU) ou plusieurs associés, dans la limite de cinquante. Depuis la loi n° 21-19 de 2019, le capital minimum n’est plus imposé : il est fixé librement par les associés. Le plus important reste l’ordre des décisions : activité, associés, gérance, capital, siège, puis formalités.",
    imageSrc: "/images/generated/mec-strategy-meeting.webp",
    imageAlt: "Préparation du dossier de création d’une SARL au Maroc",
    outcomes: ["Structure choisie selon le projet", "Dossier cohérent avant dépôt", "Formalités dans le bon ordre", "Comptabilité prête au démarrage"],
    sections: [
      {
        title: "SARL ou SARL AU : décider avant de rédiger",
        text: "Le nombre d’associés, la répartition du capital, les pouvoirs du gérant et les règles de décision et de sortie se décident avant la rédaction des statuts. Une structure choisie à la hâte devient contraignante au moment d’ouvrir le capital, de recruter ou de travailler avec un partenaire européen.",
        items: ["Associé unique ou plusieurs associés", "Répartition du capital", "Pouvoirs du gérant", "Règles de décision et de sortie"]
      },
      {
        title: "Les grandes étapes de création",
        text: "Le parcours commence en général par le certificat négatif délivré par l’OMPIC, qui réserve la dénomination. Suivent les statuts, le dépôt et la libération du capital, l’enregistrement, l’immatriculation au registre du commerce, les identifiants fiscaux (IF, ICE, taxe professionnelle) et l’affiliation à la CNSS. Les pièces exactes varient selon la situation et doivent être confirmées avant dépôt, auprès du CRI ou des organismes compétents.",
        items: ["Certificat négatif (OMPIC)", "Statuts et capital", "Registre du commerce", "IF, ICE, taxe professionnelle", "Affiliation CNSS"]
      },
      {
        title: "Démarrer sans retard après l’immatriculation",
        text: "Banque, TVA, facturation, paie et reporting doivent être prêts avant la première facture. MEC organise une checklist de lancement et peut prendre en charge la comptabilité et les déclarations dès le premier mois. Pour les actes juridiques, nous travaillons avec le notaire ou l’avocat compétent."
      }
    ],
    process: [
      { title: "Cadrage", text: "Activité, associés, gérance, capital et siège." },
      { title: "Dossier", text: "Dénomination, statuts et pièces des associés." },
      { title: "Formalités", text: "Enregistrement, immatriculation et identifiants." },
      { title: "Démarrage", text: "Banque, comptabilité, TVA et paie." }
    ],
    faq: [
      { question: "Quel capital minimum pour une SARL au Maroc ?", answer: "Depuis la loi n° 21-19 de 2019, la SARL n’a plus de capital minimum légal : il est fixé librement par les associés. Le montant doit néanmoins rester cohérent avec les besoins réels de démarrage." },
      { question: "Quelle différence entre SARL et SARL AU ?", answer: "La SARL AU compte un seul associé, la SARL classique en compte plusieurs, jusqu’à cinquante. Le fonctionnement est proche ; les règles de décision et de sortie changent avec le nombre d’associés." },
      { question: "Combien de temps faut-il pour créer une SARL ?", answer: "Le délai dépend surtout de la préparation du dossier et des pièces disponibles. Un projet bien cadré avant le dépôt avance plus vite ; nous établissons un calendrier réaliste dès le premier échange." },
      { question: "MEC s’occupe-t-il aussi de la comptabilité après la création ?", answer: "Oui. L’accompagnement peut continuer avec la tenue comptable, les déclarations fiscales et sociales, la paie, la trésorerie et le reporting." }
    ],
    relatedServices: ["comptabilite", "gestion-entreprise", "accompagnement-personnalise"],
    keywords: ["création SARL Maroc", "créer une SARL au Maroc", "SARL AU Maroc", "capital minimum SARL Maroc", "étapes création société Maroc"]
  },
  {
    slug: "conseil-fiscal-tanger",
    group: "fiscal",
    seoTitle: "Conseil fiscal à Tanger : TVA, IS, déclarations des entreprises | MEC",
    eyebrow: "Fiscalité des entreprises",
    title: "Conseil fiscal et déclarations d’entreprise à Tanger",
    description:
      "TVA, impôt sur les sociétés, retenues à la source, paie et flux avec l’Europe : MEC organise le calendrier fiscal de votre entreprise à Tanger et sécurise vos déclarations.",
    intro:
      "La fiscalité d’une entreprise au Maroc ne se limite pas à déclarer à temps. Le modèle commercial et le traitement fiscal doivent rester cohérents, en particulier lorsque l’entreprise facture des clients européens, reçoit des services de l’étranger ou rémunère un non-résident. MEC, cabinet basé à Tanger, organise vos échéances, prépare les déclarations et vous alerte avant les dates clés.",
    imageSrc: "/images/sections/finance-table.webp",
    imageAlt: "Suivi des déclarations fiscales d’une entreprise à Tanger",
    outcomes: ["Calendrier fiscal maîtrisé", "Déclarations préparées et suivies", "Flux Maroc-Europe analysés", "Alertes avant les échéances"],
    sections: [
      {
        title: "Un calendrier déclaratif tenu toute l’année",
        text: "TVA, impôt sur les sociétés, impôt sur le revenu des salariés, retenues à la source et liasse fiscale : chaque obligation a sa périodicité. Nous construisons le calendrier de votre entreprise, préparons les déclarations et suivons les télédéclarations sur les services en ligne de la DGI.",
        items: ["TVA", "Impôt sur les sociétés", "IR sur salaires et retenues à la source", "Bilan et liasse fiscale"]
      },
      {
        title: "Les flux avec l’Europe, analysés avant la facture",
        text: "Une société qui facture des clients européens, reçoit des services intragroupe ou paie un prestataire non résident ne présente pas les mêmes enjeux qu’une activité purement locale. Les conventions fiscales signées par le Maroc avec la France, la Belgique, l’Espagne ou les Pays-Bas doivent être lues au regard des flux réels. Nous cartographions contrats et paiements, puis faisons valider le traitement applicable.",
        items: ["Facturation de clients européens", "Services intragroupe", "Paiements à des non-résidents", "Conventions fiscales"]
      },
      {
        title: "Chaque loi de finances, traduite pour votre entreprise",
        text: "La loi de finances modifie chaque année une partie des règles. Nous identifions les mesures qui concernent réellement votre activité et adaptons vos prévisions et votre organisation. Les choix fiscaux complexes sont validés selon votre situation, avec les professionnels habilités lorsque c’est nécessaire."
      }
    ],
    process: [
      { title: "Diagnostic", text: "Obligations, retards éventuels et risques." },
      { title: "Calendrier", text: "Échéances, responsables et pièces à fournir." },
      { title: "Déclarations", text: "Préparation, contrôle et télédéclaration." },
      { title: "Veille", text: "Loi de finances et alertes avant échéance." }
    ],
    faq: [
      { question: "Quelles déclarations fiscales une société doit-elle déposer au Maroc ?", answer: "En général : la TVA, l’impôt sur les sociétés et ses acomptes, l’impôt sur le revenu des salariés, certaines retenues à la source et la liasse fiscale annuelle. La liste exacte et la périodicité dépendent de l’activité et du régime de l’entreprise." },
      { question: "Pouvez-vous reprendre un dossier en retard ?", answer: "Oui. Le diagnostic commence par l’inventaire des déclarations déposées et manquantes, puis nous établissons un plan de régularisation avec les priorités et les pièces nécessaires." },
      { question: "Accompagnez-vous les sociétés qui facturent en Europe ?", answer: "Oui. Nous analysons les contrats et les flux avec l’Europe, notamment la TVA, les retenues à la source et l’application des conventions fiscales, puis nous faisons valider les points sensibles." }
    ],
    relatedServices: ["comptabilite", "commerce-maroc-europe", "conseil-financier"],
    keywords: ["conseil fiscal Tanger", "fiscalité entreprise Maroc", "déclaration TVA Maroc", "impôt sur les sociétés Maroc", "fiscaliste Tanger"]
  }
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}

/** Every landing page, French and translated. */
export const allLandingPages: SeoLandingPage[] = [...seoLandingPages, ...intlLandingPages];

export const pageLocale = (page: SeoLandingPage): HrefLang => page.locale ?? "fr";

/** Site path of a landing page: French pages at the root, others under /{lang}/. */
export function landingPath(page: SeoLandingPage) {
  const lang = pageLocale(page);
  return lang === "fr" ? `/${page.slug}` : `/${lang}/${page.slug}`;
}

/** The other language versions of a page (same group), as site paths. */
export function landingAlternates(page: SeoLandingPage) {
  const out: Partial<Record<HrefLang, string>> = {};
  for (const other of allLandingPages) {
    if (other.group === page.group && other !== page) out[pageLocale(other)] = landingPath(other);
  }
  return out;
}

export function getLandingPage(lang: HrefLang, slug: string) {
  // non-Latin slugs (Arabic) can reach us percent-encoded
  let decoded = slug;
  try {
    decoded = decodeURIComponent(slug);
  } catch {}
  return allLandingPages.find((page) => pageLocale(page) === lang && page.slug === decoded);
}

export const landingPagesFor = (lang: HrefLang) => allLandingPages.filter((page) => pageLocale(page) === lang);
