import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageRuntime } from "@/components/layout/LanguageRuntime";
import { MotionObserver } from "@/components/layout/MotionObserver";
import { TopBar } from "@/components/layout/TopBar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { Tracker } from "@/components/analytics/Tracker";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Conseil financier et comptable",
  keywords: [
    "cabinet comptable Tanger",
    "conseil financier Maroc",
    "création entreprise Maroc",
    "implantation entreprise Maroc",
    "audit financier Maroc",
    "fiscalité entreprise Maroc",
    "conseil Maroc Europe"
  ],
  title: {
    default: "Cabinet comptable et conseil financier à Tanger | MEC Finance",
    template: "%s | MEC Finance"
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Cabinet comptable et conseil financier à Tanger | MEC Finance",
    description: siteConfig.description,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Morocco Europe Consulting - conseil financier et comptable à Tanger"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinet comptable et conseil financier à Tanger | MEC Finance",
    description: siteConfig.description,
    images: [DEFAULT_OG_IMAGE]
  },
  alternates: {
    canonical: siteConfig.url,
    languages: { fr: siteConfig.url, "x-default": siteConfig.url }
  },
  robots: {
    index: true,
    follow: true
  },
  // Search Console / Bing Webmaster verification codes, set in Vercel env (empty = no tag)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined
  }
};

/**
 * Layout racine du site public.
 *
 * Le projet a deux layouts racines : celui-ci pour (site), et un second
 * pour (admin). C'est le seul moyen, avec l'App Router, de servir le
 * back-office sans l'en-tête, le pied de page et le bouton WhatsApp du
 * site public.
 */
export default function SiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  const organizationId = `${siteConfig.url}/#organization`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": ["AccountingService", "ProfessionalService"],
      "@id": organizationId,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/brand/logo-main.png`,
      image: absoluteUrl(DEFAULT_OG_IMAGE),
      description: siteConfig.description,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1er étage N3, Rue Farabi, Résidence N18",
        addressLocality: siteConfig.contact.city,
        addressRegion: siteConfig.contact.region,
        addressCountry: siteConfig.contact.country
      },
      hasMap: "https://www.google.com/maps/search/?api=1&query=Rue+Farabi+Residence+N18+Tanger+Maroc",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00"
        }
      ],
      areaServed: [
        { "@type": "City", name: "Tanger" },
        { "@type": "AdministrativeArea", name: "Tanger-Tétouan-Al Hoceïma" },
        { "@type": "Country", name: "Maroc" },
        { "@type": "Place", name: "Europe" }
      ],
      knowsAbout: [
        "Comptabilité",
        "Fiscalité des entreprises au Maroc",
        "Création d'entreprise au Maroc",
        "Implantation d'entreprises étrangères au Maroc",
        "Audit interne et contrôle de gestion",
        "Conseil financier et trésorerie"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        contactType: "customer service",
        availableLanguage: ["fr", "ar", "en", "es", "nl"]
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de conseil MEC",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            url: `${siteConfig.url}/services/${service.slug}`
          }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: ["fr", "nl", "en", "es", "ar"],
      publisher: { "@id": organizationId }
    }
  ];

  return (
    <html lang="fr">
      <body>
        <JsonLd data={structuredData} />
        <Tracker />
        <LanguageRuntime />
        <MotionObserver />
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
