export type Insight = {
  category: string;
  date: string;
  title: string;
  description: string;
  href: string;
  imageTone: string;
  imageSrc: string;
  imageAlt: string;
};

export const insights: Insight[] = [
  {
    category: "Implantation Maroc-Europe",
    date: "Septembre 2026",
    title: "Créer une société au Maroc depuis l’Europe : 7 vérifications",
    description: "Structure, banque, fiscalité, financement, CNSS et reporting : les décisions à cadrer avant le lancement.",
    href: "/resources/creer-societe-maroc-depuis-europe",
    imageTone: "strategy",
    imageSrc: "/images/generated/mec-morocco-europe-bridge.webp",
    imageAlt: "Conseil pour créer une société au Maroc depuis l’Europe"
  },
  {
    category: "Pilotage financier",
    date: "Septembre 2026",
    title: "BFR et trésorerie : pourquoi le bénéfice ne garantit pas le cash",
    description: "Les trois indicateurs à suivre pour comprendre et anticiper les tensions de trésorerie.",
    href: "/resources/bfr-tresorerie-entreprise-maroc",
    imageTone: "tax",
    imageSrc: "/images/generated/mec-financial-advisory.webp",
    imageAlt: "Analyse du BFR et de la trésorerie d’une PME"
  },
  {
    category: "Gestion d’entreprise",
    date: "Septembre 2026",
    title: "Tableau de bord financier : les indicateurs vraiment utiles",
    description: "Une méthode claire pour relier activité, marge, cash, BFR et risques aux décisions du dirigeant.",
    href: "/resources/tableau-bord-financier-pme-maroc",
    imageTone: "market",
    imageSrc: "/images/sections/strategy-map.webp",
    imageAlt: "Tableau de bord financier pour une PME au Maroc"
  },
  {
    category: "Audit et contrôle",
    date: "Septembre 2026",
    title: "Préparer un audit interne sans ralentir l’activité",
    description: "Les points de contrôle essentiels pour sécuriser vos données, vos flux et vos obligations.",
    href: "/resources/preparer-audit-interne-maroc",
    imageTone: "audit",
    imageSrc: "/images/generated/mec-audit-compliance.webp",
    imageAlt: "Auditeurs examinant des documents de contrôle et de conformité"
  }
];
