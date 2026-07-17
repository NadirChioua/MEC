export const siteConfig = {
  name: "Morocco Europe Consulting",
  shortName: "MEC",
  tagline: "Conseil financier et strategie Maroc-Europe.",
  description:
    "Cabinet de conseil premium base a Tanger, specialise en finance, audit, comptabilite, strategie d'entreprise et accompagnement Maroc-Europe.",
  url: "https://mo-eu-consulting.com",
  locale: "fr_MA",
  contact: {
    phone: "+212 6 00 00 00 00",
    whatsappNumber: "212600000000",
    email: "contact@mec-consulting.com",
    address: "1er etage N3, Rue Farabi, Residence N18 - Tanger, Maroc",
    hours: "Lun - Ven : 9h00 - 18h00"
  },
  languages: [
    { code: "FR", label: "Francais", enabled: true },
    { code: "AR", label: "Arabe", enabled: false },
    { code: "EN", label: "English", enabled: false },
    { code: "NL", label: "Nederlands", enabled: false },
    { code: "ES", label: "Espanol", enabled: false }
  ],
  resource: {
    title: "Loi de Finances Maroc 2026 : les mesures cles a connaitre",
    description: "Telechargez le document officiel et restez informe.",
    href: "https://www.finances.gov.ma",
    cta: "Telecharger le guide 2026"
  }
};

export const homeMetadata = {
  title: "Morocco Europe Consulting | Conseil financier Maroc-Europe",
  description: siteConfig.description
};
