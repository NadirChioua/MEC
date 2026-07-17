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
    category: "Fiscalite",
    date: "2026",
    title: "Loi de Finances Maroc 2026 : les mesures cles a connaitre",
    description: "Un acces direct aux ressources officielles pour suivre les nouvelles dispositions financieres.",
    href: "https://www.finances.gov.ma",
    imageTone: "tax",
    imageSrc: "/images/sections/finance-table.png",
    imageAlt: "Documents financiers, graphiques et calculatrice dans une palette navy et or"
  },
  {
    category: "Strategie",
    date: "A preparer",
    title: "Structurer sa croissance entre le Maroc et l'Europe",
    description: "Un futur guide MEC pour cadrer les priorites financieres, juridiques et operationnelles.",
    href: "/contact",
    imageTone: "strategy",
    imageSrc: "/images/generated/mec-morocco-europe-bridge.png",
    imageAlt: "Consultants en reunion strategique devant une carte internationale"
  },
  {
    category: "Pilotage",
    date: "A preparer",
    title: "Les indicateurs financiers a suivre avant une expansion",
    description: "Une ressource editoriale prevue pour aider les dirigeants a lire leurs chiffres avec precision.",
    href: "/contact",
    imageTone: "market",
    imageSrc: "/images/generated/mec-financial-advisory.png",
    imageAlt: "Conseillers examinant des rapports financiers et tableaux de bord"
  },
  {
    category: "Audit",
    date: "Guide",
    title: "Preparer un audit interne sans ralentir l'activite",
    description: "Les points de controle essentiels pour securiser vos donnees, vos flux et vos obligations.",
    href: "/services/audit-controle",
    imageTone: "audit",
    imageSrc: "/images/generated/mec-audit-compliance.png",
    imageAlt: "Auditeurs examinant des documents de controle et de conformite"
  }
];
