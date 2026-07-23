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
    category: "Fiscalité",
    date: "2026",
    title: "Loi de Finances Maroc 2026 : les mesures clés à connaître",
    description: "Un accès direct aux ressources officielles pour suivre les nouvelles dispositions financières.",
    href: "https://www.finances.gov.ma",
    imageTone: "tax",
    imageSrc: "/images/sections/finance-table.png",
    imageAlt: "Documents financiers, graphiques et calculatrice dans une palette navy et or"
  },
  {
    category: "Stratégie",
    date: "À préparer",
    title: "Structurer sa croissance entre le Maroc et l’Europe",
    description: "Un futur guide MEC pour cadrer les priorités financières, juridiques et opérationnelles.",
    href: "/contact",
    imageTone: "strategy",
    imageSrc: "/images/generated/mec-morocco-europe-bridge.png",
    imageAlt: "Consultants en réunion stratégique devant une carte internationale"
  },
  {
    category: "Pilotage",
    date: "À préparer",
    title: "Les indicateurs financiers à suivre avant une expansion",
    description: "Une ressource éditoriale prévue pour aider les dirigeants à lire leurs chiffres avec précision.",
    href: "/contact",
    imageTone: "market",
    imageSrc: "/images/generated/mec-financial-advisory.png",
    imageAlt: "Conseillers examinant des rapports financiers et tableaux de bord"
  },
  {
    category: "Audit",
    date: "Guide",
    title: "Préparer un audit interne sans ralentir l’activité",
    description: "Les points de contrôle essentiels pour sécuriser vos données, vos flux et vos obligations.",
    href: "/services/audit-controle",
    imageTone: "audit",
    imageSrc: "/images/generated/mec-audit-compliance.png",
    imageAlt: "Auditeurs examinant des documents de contrôle et de conformité"
  }
];
