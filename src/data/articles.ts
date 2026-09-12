export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
  takeaways: string[];
  sections: ArticleSection[];
  faq: { question: string; answer: string }[];
  sources: { label: string; href: string }[];
  relatedService: string;
};

export const articles: Article[] = [
  {
    slug: "creer-societe-maroc-depuis-europe",
    category: "Implantation Maroc-Europe",
    title: "Créer une société au Maroc depuis l’Europe : les 7 vérifications à préparer",
    description:
      "Structure juridique, banque, fiscalité, financement en devises, CNSS et reporting : les points à cadrer avant de créer une société au Maroc depuis l’Europe.",
    publishedAt: "2026-09-11",
    updatedAt: "2026-09-11",
    readingTime: "8 min",
    intro:
      "Créer une société au Maroc depuis l’Europe ne se résume pas au dépôt d’un dossier. La qualité du projet dépend surtout des décisions prises avant la première facture : forme juridique, gouvernance, flux bancaires, fiscalité, obligations sociales et méthode de pilotage. Cette checklist aide le dirigeant à organiser ces décisions avec ses conseils.",
    imageSrc: "/images/generated/mec-morocco-europe-bridge.png",
    imageAlt: "Réunion de conseil pour créer et implanter une société au Maroc depuis l’Europe",
    takeaways: [
      "Choisir la structure à partir du projet réel, des associés et des flux prévus.",
      "Documenter l’origine et le circuit des financements en devises dès le départ.",
      "Préparer la banque, la fiscalité, la CNSS et le reporting avant le lancement opérationnel.",
      "Faire valider les points juridiques et fiscaux propres au dossier par les professionnels compétents."
    ],
    sections: [
      {
        title: "1. Définir l’activité et la gouvernance avant la forme juridique",
        paragraphs: [
          "Le bon véhicule juridique dépend de l’activité, du nombre d’associés, du pouvoir de signature, des besoins de financement et du niveau de contrôle souhaité. Commencer par un organigramme simple : qui apporte les fonds, qui dirige, qui signe et comment les décisions importantes seront-elles prises ?",
          "Cette clarification évite d’adopter une structure standard qui devient contraignante au moment d’ouvrir le capital, de recruter ou de contractualiser avec un partenaire européen."
        ],
        bullets: ["Activité et autorisations éventuelles", "Répartition du capital", "Pouvoirs du gérant", "Règles de décision et de sortie"]
      },
      {
        title: "2. Vérifier la dénomination et préparer le dossier de création",
        paragraphs: [
          "L’OMPIC présente le certificat négatif comme la première pièce du parcours de création d’une personne morale. Le dossier doit ensuite rester cohérent entre la dénomination, l’objet social, le siège, les statuts et les informations déclarées aux administrations.",
          "Préparez une liste de noms, les justificatifs des associés et dirigeants, l’adresse du siège et une description précise de l’activité. Les pièces exactes varient selon la situation et doivent être confirmées avant dépôt."
        ]
      },
      {
        title: "3. Organiser le financement et les flux bancaires",
        paragraphs: [
          "Pour un investissement financé depuis l’étranger, la traçabilité des devises et des attestations bancaires est un sujet central. Le circuit des fonds doit être défini avant le premier virement : capital, compte courant d’associé, prêt apparenté ou autre mécanisme adapté.",
          "Conservez les ordres de virement, avis de crédit, attestations bancaires et conventions. Cette discipline facilite la justification de l’investissement et le traitement futur des revenus ou d’une éventuelle cession."
        ],
        bullets: ["Banque destinataire et signataires", "Devise et libellé du transfert", "Justificatifs de financement", "Règles de validation des paiements"]
      },
      {
        title: "4. Cadrer la fiscalité avant la première facture",
        paragraphs: [
          "TVA, impôt sur les sociétés, retenues à la source, conventions fiscales et établissement stable doivent être analysés à partir des flux réels. Une société qui facture des clients européens, reçoit des services intragroupe ou rémunère un non-résident ne présente pas les mêmes risques qu’une activité purement locale.",
          "Établissez une cartographie des contrats et paiements attendus, puis faites valider le traitement fiscal applicable. Le but n’est pas seulement de déclarer à temps, mais d’éviter que le modèle commercial et le modèle fiscal se contredisent."
        ]
      },
      {
        title: "5. Anticiper les obligations sociales et le premier recrutement",
        paragraphs: [
          "L’affiliation à la CNSS et l’organisation de la paie doivent être intégrées au calendrier de démarrage. Avant le premier salarié, définissez le contrat, la rémunération, les avantages, le calendrier de paie et les responsabilités de validation.",
          "Une procédure simple dès le départ réduit les erreurs de déclaration et garantit que les coûts de personnel sont intégrés aux prévisions de trésorerie."
        ]
      },
      {
        title: "6. Installer un reporting de direction dès le premier mois",
        paragraphs: [
          "Une comptabilité conforme est indispensable, mais le dirigeant a aussi besoin d’un tableau de bord décisionnel. Suivez au minimum le chiffre d’affaires, la marge, la trésorerie disponible, les encaissements, les décaissements et les engagements à venir.",
          "Un rythme mensuel permet d’identifier rapidement un décalage de trésorerie, une marge insuffisante ou un besoin de financement."
        ]
      },
      {
        title: "7. Coordonner comptable, banque, notaire et avocat",
        paragraphs: [
          "Un projet transfrontalier mobilise plusieurs expertises. Nommez un pilote, partagez un calendrier unique et attribuez chaque décision au bon professionnel. Les sujets juridiques doivent être validés par un avocat ou un notaire, tandis que les impacts fiscaux, comptables et financiers relèvent des spécialistes concernés.",
          "MEC peut structurer le diagnostic, organiser les données financières et coordonner les prochaines étapes avec votre réseau de conseils."
        ]
      }
    ],
    faq: [
      {
        question: "Peut-on créer une société au Maroc tout en résidant en Europe ?",
        answer:
          "Oui, plusieurs montages et procédures sont possibles selon la nationalité, la résidence, la forme juridique et les pouvoirs donnés aux mandataires. Les formalités et documents doivent être confirmés pour le dossier précis."
      },
      {
        question: "Quelle forme juridique choisir au Maroc ?",
        answer:
          "Le choix dépend des associés, de la gouvernance, du financement, de l’activité et de la stratégie de développement. Une comparaison personnalisée est préférable à un choix fondé uniquement sur la popularité d’une forme."
      },
      {
        question: "Pourquoi tracer les apports venant de l’étranger ?",
        answer:
          "La traçabilité bancaire permet de documenter le financement de l’investissement et facilite le traitement réglementaire des revenus, remboursements ou produits de cession."
      }
    ],
    sources: [
      { label: "OMPIC - Création et vie de l’entreprise", href: "https://www.ompic.ma/fr/content/creation-et-vie-de-lentreprise" },
      { label: "Office des Changes - Formes d’investissement", href: "https://www.oc.gov.ma/fr/mre/formes-dinvestissement" },
      { label: "CRI Tanger-Tétouan-Al Hoceïma", href: "https://investangier.com/" }
    ],
    relatedService: "implantation-internationale"
  },
  {
    slug: "bfr-tresorerie-entreprise-maroc",
    category: "Pilotage financier",
    title: "BFR et trésorerie : pourquoi une entreprise rentable peut manquer de cash",
    description:
      "Comprendre le besoin en fonds de roulement et suivre délai client, délai fournisseur et stock pour protéger la trésorerie de l’entreprise.",
    publishedAt: "2026-09-11",
    updatedAt: "2026-09-11",
    readingTime: "7 min",
    intro:
      "Le bénéfice mesure une performance comptable sur une période. La trésorerie mesure l’argent réellement disponible à un instant donné. Une entreprise peut donc être rentable tout en manquant de cash lorsque les clients paient tard, que le stock augmente ou que les fournisseurs sont réglés trop vite.",
    imageSrc: "/images/generated/mec-financial-advisory.png",
    imageAlt: "Analyse du besoin en fonds de roulement et de la trésorerie d’une PME marocaine",
    takeaways: [
      "Le résultat ne dit pas quand l’argent entre et sort.",
      "Trois indicateurs expliquent une grande partie du BFR : clients, fournisseurs et stock.",
      "La croissance peut consommer du cash si le BFR augmente plus vite que le chiffre d’affaires.",
      "Une prévision de trésorerie glissante transforme le constat en décisions."
    ],
    sections: [
      {
        title: "Bénéfice et trésorerie répondent à deux questions différentes",
        paragraphs: [
          "Le compte de résultat indique si l’activité a créé un bénéfice. Le relevé bancaire indique si l’entreprise dispose des liquidités nécessaires pour payer salaires, fournisseurs, impôts et investissements. Entre les deux se trouvent les délais de paiement, les stocks, les acomptes et les échéances.",
          "Un chiffre d’affaires facturé mais non encaissé améliore le résultat sans alimenter immédiatement la banque. Inversement, l’achat d’un stock immobilise du cash avant de générer une vente."
        ]
      },
      {
        title: "Les trois chiffres à suivre chaque mois",
        paragraphs: [
          "Le délai moyen de paiement client montre combien de jours l’entreprise finance ses clients. Le délai fournisseur mesure le crédit obtenu auprès des fournisseurs. Le stock moyen représente une partie de la trésorerie immobilisée dans l’exploitation.",
          "Ces indicateurs doivent être analysés ensemble et comparés à leur évolution historique. Une dérive progressive est souvent plus instructive qu’une valeur isolée."
        ],
        bullets: ["Délai client et balance âgée", "Délai fournisseur", "Rotation et couverture du stock", "Encaissements attendus à 13 semaines"]
      },
      {
        title: "Pourquoi la croissance peut créer une tension de cash",
        paragraphs: [
          "Une hausse des ventes exige parfois plus de stock, plus de personnel et davantage de dépenses avant que les factures soient encaissées. Si le BFR croît plus vite que le chiffre d’affaires, chaque nouvelle vente peut accentuer temporairement la tension de trésorerie.",
          "Le dirigeant doit donc traduire le plan commercial en besoins de financement : combien faut-il décaisser, à quelle date et quand les encaissements correspondants sont-ils réellement probables ?"
        ]
      },
      {
        title: "Passer d’un suivi comptable à un pilotage de trésorerie",
        paragraphs: [
          "Construisez une prévision glissante sur treize semaines, mise à jour chaque semaine. Classez les encaissements par probabilité et les décaissements par caractère obligatoire, contractuel ou ajustable.",
          "Le tableau devient utile lorsqu’il déclenche une action : relance client, négociation fournisseur, réduction de stock, décalage d’investissement ou préparation d’un financement."
        ]
      }
    ],
    faq: [
      { question: "Qu’est-ce que le BFR ?", answer: "Le besoin en fonds de roulement représente le financement nécessaire au cycle d’exploitation, principalement lié aux créances clients, aux stocks et aux dettes fournisseurs." },
      { question: "À quelle fréquence suivre la trésorerie ?", answer: "Pour une PME, un suivi hebdomadaire de la prévision et une revue mensuelle approfondie des indicateurs offrent généralement un bon équilibre." },
      { question: "Une hausse du chiffre d’affaires améliore-t-elle toujours le cash ?", answer: "Non. Si les ventes sont encaissées tard ou nécessitent davantage de stock et de dépenses immédiates, la croissance peut consommer de la trésorerie." }
    ],
    sources: [
      { label: "CRI Tanger - Guide financement entreprise", href: "https://investangier.com/guides/guide-financement-entreprise/" }
    ],
    relatedService: "conseil-financier"
  },
  {
    slug: "tableau-bord-financier-pme-maroc",
    category: "Gestion d’entreprise",
    title: "Tableau de bord financier d’une PME : les indicateurs qui aident vraiment à décider",
    description:
      "Une méthode simple pour construire un tableau de bord financier utile aux dirigeants de PME au Maroc : marge, cash, BFR, prévisions et alertes.",
    publishedAt: "2026-09-11",
    updatedAt: "2026-09-11",
    readingTime: "6 min",
    intro:
      "Un tableau de bord n’est pas une accumulation de graphiques. Il doit relier chaque indicateur à une décision, un responsable et une fréquence de revue. Pour une PME, quelques chiffres fiables et expliqués valent mieux qu’un reporting dense livré trop tard.",
    imageSrc: "/images/sections/strategy-map.png",
    imageAlt: "Tableau de bord financier et indicateurs de performance pour une PME au Maroc",
    takeaways: [
      "Chaque indicateur doit conduire à une décision possible.",
      "Séparez activité, rentabilité, cash, BFR et risques.",
      "Comparez réel, budget, période précédente et prévision.",
      "Documentez la définition et la source de chaque chiffre."
    ],
    sections: [
      {
        title: "Commencer par les décisions du dirigeant",
        paragraphs: [
          "Listez les décisions récurrentes : recruter, investir, relancer, ajuster un prix, réduire un coût ou sécuriser un financement. Les indicateurs doivent apporter l’information nécessaire avant l’échéance de décision.",
          "Un bon tableau de bord tient sur un écran ou quelques pages et permet d’identifier en quelques minutes les écarts qui nécessitent une discussion."
        ]
      },
      {
        title: "Les cinq familles d’indicateurs",
        paragraphs: [
          "Les indicateurs d’activité suivent ventes, commandes et portefeuille. Les indicateurs de rentabilité expliquent marge et coûts. La trésorerie et le BFR montrent la capacité de paiement. Les prévisions donnent une trajectoire. Les risques signalent retards, concentrations et échéances sensibles."
        ],
        bullets: ["Chiffre d’affaires et carnet de commandes", "Marge brute et résultat opérationnel", "Trésorerie disponible et prévision", "Délai client, délai fournisseur et stock", "Concentration client et échéances fiscales/sociales"]
      },
      {
        title: "Comparer pour donner du sens",
        paragraphs: [
          "Un chiffre isolé est rarement actionnable. Comparez-le au budget, au mois précédent, à la même période de l’année précédente et à la prévision de fin d’exercice. Ajoutez une explication courte pour chaque écart significatif.",
          "La qualité du commentaire est aussi importante que le graphique : elle distingue un écart ponctuel d’une tendance qui exige une décision."
        ]
      },
      {
        title: "Installer un rituel de pilotage",
        paragraphs: [
          "Fixez une date de clôture interne, désignez le propriétaire de chaque donnée et organisez une revue mensuelle. Les actions décidées doivent être enregistrées avec un responsable et une date.",
          "Le tableau de bord devient alors un outil de gouvernance, pas seulement un document financier."
        ]
      }
    ],
    faq: [
      { question: "Combien d’indicateurs faut-il dans un tableau de bord ?", answer: "Il n’existe pas de nombre universel. Pour une PME, dix à quinze indicateurs bien définis suffisent souvent à couvrir activité, marge, cash, BFR, prévisions et risques." },
      { question: "Qui doit préparer le tableau de bord ?", answer: "La production peut être coordonnée par la fonction finance ou comptable, mais les responsables opérationnels doivent contribuer aux explications et aux prévisions." },
      { question: "Quelle fréquence de mise à jour choisir ?", answer: "La trésorerie peut nécessiter un rythme hebdomadaire, tandis qu’une revue complète du tableau de bord est généralement mensuelle." }
    ],
    sources: [
      { label: "CRI Tanger - Guide financement entreprise", href: "https://investangier.com/guides/guide-financement-entreprise/" }
    ],
    relatedService: "gestion-entreprise"
  },
  {
    slug: "preparer-audit-interne-maroc",
    category: "Audit et contrôle",
    title: "Préparer un audit interne sans ralentir l’activité",
    description:
      "Documents, périmètre, risques, responsables et plan d’action : une méthode pratique pour préparer un audit interne efficace dans l’entreprise.",
    publishedAt: "2026-09-11",
    updatedAt: "2026-09-11",
    readingTime: "7 min",
    intro:
      "Un audit interne bien préparé ne doit pas paralyser les équipes. Il commence par un périmètre clair, une liste de documents proportionnée aux risques et un calendrier partagé. L’objectif est d’obtenir des preuves fiables, de comprendre les causes et de prioriser les actions correctives.",
    imageSrc: "/images/generated/mec-audit-compliance.png",
    imageAlt: "Préparation d’un audit interne et contrôle des documents d’une entreprise",
    takeaways: [
      "Définir le risque et la question d’audit avant de demander des documents.",
      "Nommer un interlocuteur par processus et une source officielle par donnée.",
      "Tester un échantillon pertinent au lieu de collecter tout sans méthode.",
      "Transformer chaque constat en action, responsable, délai et preuve de clôture."
    ],
    sections: [
      {
        title: "Définir le périmètre et les objectifs",
        paragraphs: [
          "Précisez les processus, périodes, entités et systèmes concernés. Formulez les objectifs sous forme de questions : les ventes sont-elles autorisées ? les paiements sont-ils justifiés ? les rapprochements sont-ils réalisés et revus ?",
          "Un périmètre trop large produit beaucoup de documents et peu de décisions. Une mission ciblée permet des conclusions plus solides."
        ]
      },
      {
        title: "Préparer une liste de pièces fondée sur les risques",
        paragraphs: [
          "Demandez les procédures, organigrammes, délégations, extractions comptables et pièces justificatives directement liées aux contrôles à tester. Pour chaque fichier, indiquez le propriétaire, la période et le format attendu.",
          "Centraliser les demandes réduit les interruptions et évite que plusieurs auditeurs sollicitent la même équipe."
        ],
        bullets: ["Procédures et matrices d’autorisation", "Balance, grand livre et journaux", "Contrats et factures", "Rapprochements bancaires", "Rapports d’anomalies et plans d’action antérieurs"]
      },
      {
        title: "Organiser les entretiens et les tests",
        paragraphs: [
          "Commencez par comprendre le processus réel, puis sélectionnez les tests et les échantillons. Comparez la procédure décrite aux traces disponibles dans les systèmes et pièces justificatives.",
          "Les écarts doivent être discutés avec les responsables avant la conclusion afin de distinguer une exception, un défaut de conception et un contrôle non appliqué."
        ]
      },
      {
        title: "Prioriser et suivre les recommandations",
        paragraphs: [
          "Classez les constats selon l’impact et la probabilité. Une recommandation utile précise le risque traité, l’action attendue, le responsable, le délai et la preuve de mise en œuvre.",
          "Planifiez une revue de suivi. Un audit n’apporte de valeur que lorsque les décisions prises sont effectivement mises en œuvre et vérifiées."
        ]
      }
    ],
    faq: [
      { question: "Quels documents préparer pour un audit interne ?", answer: "La liste dépend du périmètre. Elle inclut généralement procédures, délégations, extractions comptables, contrats, factures, rapprochements et preuves de contrôle." },
      { question: "Combien de temps dure un audit interne ?", answer: "La durée dépend du périmètre, du volume de transactions et de la disponibilité des données. Un cadrage précis permet d’établir un calendrier réaliste." },
      { question: "Comment éviter de perturber les équipes ?", answer: "Centralisez les demandes, nommez un interlocuteur, planifiez les entretiens et limitez les tests aux risques prioritaires." }
    ],
    sources: [],
    relatedService: "audit-controle"
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

