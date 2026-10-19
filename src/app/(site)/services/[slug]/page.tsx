import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { getService, services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const titles: Record<string, string> = {
    comptabilite: "Comptabilité d’entreprise à Tanger : tenue, bilans, déclarations",
    "conseil-financier": "Conseil financier entreprise au Maroc : trésorerie, investissement",
    "gestion-entreprise": "Conseil en gestion d’entreprise au Maroc : pilotage, KPI",
    "implantation-internationale": "Implantation d’entreprise entre le Maroc et l’Europe",
    "audit-controle": "Audit interne et contrôle de gestion au Maroc",
    "accompagnement-personnalise": "Accompagnement personnalisé des dirigeants au Maroc",
    "commerce-maroc-europe": "Import-export Maroc-Europe : conseil fiscal et financier"
  };

  return createPageMetadata({
    title: titles[service.slug] ?? service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    image: service.imageSrc,
    keywords: [service.title, `${service.title} Maroc`, `${service.title} Tanger`, "Morocco Europe Consulting"]
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((item) => item.slug !== service.slug);
  const serviceUrl = absoluteUrl(`/services/${service.slug}`);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.detail,
      url: serviceUrl,
      image: absoluteUrl(service.imageSrc),
      areaServed: [{ "@type": "Country", name: "Maroc" }, { "@type": "AdministrativeArea", name: "Europe" }],
      provider: { "@type": "ProfessionalService", "@id": `${siteConfig.url}/#organization`, name: siteConfig.name }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
        { "@type": "ListItem", position: 3, name: service.title, item: serviceUrl }
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
              <p className="eyebrow">Description du service</p>
              <h2>{service.title}</h2>
              <p className="lead" style={{ marginTop: 12 }}>
                {service.detail}
              </p>
            </div>
            <div className="grid three">
              <div className="card">
                <h3>Ce que nous faisons</h3>
                <ul className="plain-list">
                  {service.actions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3>Pour qui ?</h3>
                <p>{service.audience}</p>
              </div>
              <div className="card">
                <h3>Avantages client</h3>
                <ul className="plain-list">
                  {service.benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card">
              <h3>Besoin d’un avis structuré ?</h3>
              <p>Planifiez une première consultation pour cadrer vos priorités et identifier les prochaines étapes.</p>
              <div className="cta-row">
                <ButtonLink href="/contact" variant="primary" trackId="service-detail-cta-consultation" trackLabel="Fiche service — Demander une consultation">
                  Contacter MEC
                </ButtonLink>
              </div>
            </div>
          </article>
          <aside className="sidebar card" aria-label="Autres services">
            <h3>Autres services</h3>
            <ul className="footer-list">
              {otherServices.map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`}>{item.title}</Link>
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
