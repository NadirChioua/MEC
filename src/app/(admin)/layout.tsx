import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";

/**
 * Layout racine du back-office.
 *
 * Volontairement nu : ni TopBar, ni Header, ni Footer, ni bouton WhatsApp,
 * ni LanguageRuntime. Le dashboard est un outil interne, pas une page du
 * site public — et le LanguageRuntime traduirait les libellés du tableau
 * de bord au passage, ce qui n'a aucun sens ici.
 *
 * globals.css est importé pour les tokens de couleur et la remise à zéro
 * typographique, afin que le back-office reste dans la même famille
 * visuelle que le site.
 */

export const metadata: Metadata = {
  title: {
    default: "Administration | Morocco Europe Consulting",
    template: "%s | Administration MEC"
  },
  // Le back-office ne doit jamais être indexé, quelle que soit la page.
  robots: {
    index: false,
    follow: false,
    nocache: true
  }
};

export default function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body className="admin-body">{children}</body>
    </html>
  );
}
