import Link from "next/link";
import type { Locale } from "@/data/i18n";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { services, type Service } from "@/data/services";
import { siteConfig } from "@/data/site";
import { getPageLocale, localizedPath, lp, tr } from "@/lib/i18n-server";
import { absoluteUrl } from "@/lib/seo";
import { localizedMetadata } from "./pageMeta";

const seoTitles: Record<string, string> = {
  comptabilite: "Comptabilité d’entreprise à Tanger : tenue, bilans, déclarations",
  "conseil-financier": "Conseil financier entreprise au Maroc : trésorerie, investissement",
  "gestion-entreprise": "Conseil en gestion d’entreprise au Maroc : pilotage, KPI",
  "implantation-internationale": "Implantation d’entreprise entre le Maroc et l’Europe",
  "audit-controle": "Audit interne et contrôle de gestion au Maroc",
  "accompagnement-personnalise": "Accompagnement personnalisé des dirigeants au Maroc",
  "commerce-maroc-europe": "Import-export Maroc-Europe : conseil fiscal et financier"
};

export const serviceMetadata = (lang: Locale, service: Service) =>
  localizedMetadata(lang, {
    path: `/services/${service.slug}`,
    title: seoTitles[service.slug] ?? service.title,
    description: service.description,
    image: service.imageSrc,
    keywords: [service.title, "Maroc", "Tanger", "Morocco Europe Consulting"]
  });

export function ServiceDetailContent({ service }: { service: Service }) {
  const lang = getPageLocale();
  const otherServices = services.filter((item) => item.slug !== service.slug);
  const serviceUrl = absoluteUrl(localizedPath(lang, `/services/${service.slug}`));
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: tr(service.title),
      description: tr(service.detail),
      url: serviceUrl,
      inLanguage: lang,
      image: absoluteUrl(service.imageSrc),
      areaServed: [{ "@type": "Country", name: "Morocco" }, { "@type": "Place", name: "Europe" }],
      provider: { "@id": `${siteConfig.url}/#organization` }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tr("Accueil"), item: absoluteUrl(localizedPath(lang, "/")) },
        { "@type": "ListItem", position: 2, name: tr("Services"), item: absoluteUrl(localizedPath(lang, "/services")) },
        { "@type": "ListItem", position: 3, name: tr(service.title), item: serviceUrl }
      ]
    }
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <PageHero title={service.title} intro={service.description} parent="Services" />
      <section className="section">
        <div className="container service-layout">
          <article className="grid" style={{ gap: 24 }}>
            <div className="card">
              <p className="eyebrow">{tr("Description du service")}</p>
              <h2>{tr(service.title)}</h2>
              <p className="lead" style={{ marginTop: 12 }}>
                {tr(service.detail)}
              </p>
            </div>
            <div className="grid three">
              <div className="card">
                <h3>{tr("Ce que nous faisons")}</h3>
                <ul className="plain-list">
                  {service.actions.map((item) => (
                    <li key={item}>{tr(item)}</li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3>{tr("Pour qui ?")}</h3>
                <p>{tr(service.audience)}</p>
              </div>
              <div className="card">
                <h3>{tr("Avantages client")}</h3>
                <ul className="plain-list">
                  {service.benefits.map((item) => (
                    <li key={item}>{tr(item)}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card">
              <h3>{tr("Besoin d’un avis structuré ?")}</h3>
              <p>{tr("Planifiez une première consultation pour cadrer vos priorités et identifier les prochaines étapes.")}</p>
              <div className="cta-row">
                <ButtonLink href="/contact" variant="primary" trackId="service-detail-cta-consultation" trackLabel="Fiche service — Demander une consultation">
                  Contacter MEC
                </ButtonLink>
              </div>
            </div>
          </article>
          <aside className="sidebar card" aria-label={tr("Autres services")}>
            <h3>{tr("Autres services")}</h3>
            <ul className="footer-list">
              {otherServices.map((item) => (
                <li key={item.slug}>
                  <Link href={lp(`/services/${item.slug}`)}>{tr(item.title)}</Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
