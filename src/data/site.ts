export const siteConfig = {
  name: "Morocco Europe Consulting",
  shortName: "MEC",
  tagline: "Conseil financier et stratégie Maroc-Europe.",
  description:
    "Cabinet de conseil premium basé à Tanger, spécialisé en finance, audit, comptabilité, stratégie d'entreprise et accompagnement Maroc-Europe.",
  url: "https://www.mecfinance.ma",
  locale: "fr_MA",
  contact: {
    phone: "+212 6 14 47 49 36",
    whatsappNumber: "212614474936",
    email: "contact@mecfinance.ma",
    address: "1er étage N3, Rue Farabi, Résidence N18 - Tanger, Maroc",
    hours: "Lun - Ven : 9h00 - 18h00"
  },
  languages: [
    { code: "FR", label: "Français", enabled: true },
    { code: "AR", label: "العربية", enabled: true },
    { code: "EN", label: "English", enabled: true },
    { code: "NL", label: "Nederlands", enabled: true },
    { code: "ES", label: "Español", enabled: true }
  ],
  resource: {
    title: "Loi de Finances Maroc 2026 : les mesures clés à connaître",
    description: "Téléchargez le document officiel et restez informé.",
    href: "https://www.finances.gov.ma",
    cta: "Télécharger le guide 2026"
  }
};

export const homeMetadata = {
  title: "Morocco Europe Consulting | Conseil financier Maroc-Europe",
  description: siteConfig.description
};
