import { services } from "./services";

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`
    }))
  },
  { label: "Ressources", href: "/resources" },
  { label: "Contact", href: "/contact" }
];
