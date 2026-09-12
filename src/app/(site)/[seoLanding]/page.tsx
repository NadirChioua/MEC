import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Icon } from "@/components/icons/Icon";
import { getSeoLandingPage, seoLandingPages } from "@/data/landing-pages";
import { getService } from "@/data/services";
import { siteConfig } from "@/data/site";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

type LandingPageProps = { params: Promise<{ seoLanding: string }> };

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ seoLanding: page.slug }));
}

export async function generateMetadata({ params }: LandingPageProps): Promise<Metadata> {
  const { seoLanding } = await params;
  const page = getSeoLandingPage(seoLanding);
  if (!page) return {};
  return createPageMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    image: page.imageSrc,
    keywords: page.keywords
  });
}

export default async function SeoLanding({ params }: LandingPageProps) {
  const { seoLanding } = await params;
  const page = getSeoLandingPage(seoLanding);
  if (!page) notFound();

  const url = absoluteUrl(`/${page.slug}`);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      description: page.description,
      url,
      areaServed: [{ "@type": "Country", name: "Maroc" }, { "@type": "AdministrativeArea", name: "Europe" }],
      provider: { "@type": "ProfessionalService", "@id": `${siteConfig.url}/#organization`, name: siteConfig.name }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: page.title, item: url }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } }))
    }
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <section className="seo-landing-hero">
        <div className="container split">
          <div>
            <nav className="breadcrumbs" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link> &gt; <span>{page.title}</span></nav>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="lead">{page.description}</p>
            <div className="hero-actions">
              <Link className="button primary" href="/contact" data-track="landing-cta-diagnostic" data-track-label="Landing SEO — Demander un diagnostic">Demander un diagnostic <Icon name="arrow" /></Link>
              <a className="button secondary" href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noreferrer" data-track="landing-cta-whatsapp" data-track-label="Landing SEO — Échanger sur WhatsApp">Échanger sur WhatsApp</a>
            </div>
          </div>
          <div className="seo-landing-image"><Image src={page.imageSrc} alt={page.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="container">
          <p className="seo-intro">{page.intro}</p>
          <div className="grid four seo-outcomes">
            {page.outcomes.map((item) => <div className="card" key={item}><Icon name="check" /><strong>{item}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container seo-section-stack">
          {page.sections.map((section, index) => (
            <article className="seo-feature" key={section.title}>
              <span className="seo-feature-number">0{index + 1}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
                {section.items ? <ul className="plain-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Méthode MEC</p>
          <h2>Un parcours clair, de l’analyse au pilotage</h2>
          <div className="grid four process-grid">
            {page.process.map((step, index) => <div className="card" key={step.title}><span className="meta">Étape {index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container split faq-section">
          <div><p className="eyebrow">Questions fréquentes</p><h2>Les réponses avant de démarrer</h2><p className="lead">Des repères clairs pour préparer votre premier échange avec notre équipe.</p></div>
          <div className="faq-list">
            {page.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="container">
          <p className="eyebrow">Expertises liées</p>
          <div className="grid three">
            {page.relatedServices.map((slug) => {
              const service = getService(slug);
              return service ? <Link className="card service-card" href={`/services/${service.slug}`} key={service.slug}><h3>{service.title}</h3><p>{service.description}</p><span className="card-link">Découvrir <Icon name="arrow" /></span></Link> : null;
            })}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
