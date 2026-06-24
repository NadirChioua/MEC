export const siteConfig = {
  name: "Morocco Europe Consulting",
  shortName: "MEC",
  tagline: "L'excellence financière, à votre service.",
  description:
    "Cabinet de conseil basé à Tanger, spécialisé en conseil financier, comptabilité, gestion d'entreprise et accompagnement Maroc-Europe.",
  url: "https://mo-eu-consulting.com",
  locale: "fr_MA",
  contact: {
    phone: "+212 6 00 00 00 00",
    whatsappNumber: "212600000000",
    email: "contact@mec-consulting.com",
    address: "1er Étage N°3, Sis à Rue Farabi, Rsd N°18 — Tanger, Maroc",
    hours: "Lun - Ven : 9h00 - 18h00"
  },
  languages: [
    { code: "FR", label: "Français", enabled: true },
    { code: "AR", label: "العربية", enabled: false },
    { code: "EN", label: "English", enabled: false },
    { code: "NL", label: "Nederlands", enabled: false },
    { code: "ES", label: "Español", enabled: false }
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
