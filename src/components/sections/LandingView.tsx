import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Icon } from "@/components/icons/Icon";
import { landingLabels } from "@/data/landing-i18n";
import { landingAlternates, landingPagesFor, landingPath, pageLocale, type SeoLandingPage } from "@/data/landing-pages";
import { getService } from "@/data/services";
import { siteConfig } from "@/data/site";
import { absoluteUrl, type HrefLang } from "@/lib/seo";

/**
 * Template shared by every commercial landing page, French (/slug) and translated
 * (/nl/slug, /en/slug, /es/slug, /ar/slug). Server-rendered so search engines index
 * each language version, with hreflang links between versions.
 */
export function LandingView({ page }: { page: SeoLandingPage }) {
  const lang = pageLocale(page);
  const t = landingLabels[lang];
  const isFr = lang === "fr";
  const homeHref = "/";
  const url = absoluteUrl(landingPath(page));
  const alternates = landingAlternates(page);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      description: page.description,
      url,
      inLanguage: lang,
      serviceType: page.eyebrow,
      areaServed: [{ "@type": "Country", name: "Morocco" }, { "@type": "Place", name: "Europe" }],
      provider: { "@id": `${siteConfig.url}/#organization` }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.home, item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: page.title, item: url }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: lang,
      mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } }))
    }
  ];

  // translated pages link to their siblings in the same language (no French-only service pages)
  const siblings = isFr ? [] : landingPagesFor(lang).filter((other) => other !== page);

  const body = (
    <>
      <JsonLd data={structuredData} />
      <section className="seo-landing-hero">
        <div className="container split">
          <div>
            <nav className="breadcrumbs" aria-label={t.breadcrumb}><Link href={homeHref}>{t.home}</Link> &gt; <span>{page.title}</span></nav>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="lead">{page.description}</p>
            <div className="hero-actions">
              <Link className="button primary" href="/contact" data-track="landing-cta-diagnostic" data-track-label={`Landing ${lang} — ${t.ctaPrimary}`}>{t.ctaPrimary} <Icon name="arrow" /></Link>
              <a className="button secondary" href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noreferrer" data-track="landing-cta-whatsapp" data-track-label={`Landing ${lang} — WhatsApp`}>{t.ctaWhatsapp}</a>
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
          <p className="eyebrow">{t.methodEyebrow}</p>
          <h2>{t.methodTitle}</h2>
          <div className="grid four process-grid">
            {page.process.map((step, index) => <div className="card" key={step.title}><span className="meta">{t.step} {index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container split faq-section">
          <div><p className="eyebrow">{t.faqEyebrow}</p><h2>{t.faqTitle}</h2><p className="lead">{t.faqLead}</p></div>
          <div className="faq-list">
            {page.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="container">
          <p className="eyebrow">{t.relatedEyebrow}</p>
          <div className="grid three">
            {isFr
              ? page.relatedServices.map((slug) => {
                  const service = getService(slug);
                  return service ? <Link className="card service-card" href={`/services/${service.slug}`} key={service.slug}><h3>{service.title}</h3><p>{service.description}</p><span className="card-link">{t.discover} <Icon name="arrow" /></span></Link> : null;
                })
              : siblings.map((other) => (
                  <Link className="card service-card" href={landingPath(other)} key={other.slug}><h3>{other.title}</h3><p>{other.description}</p><span className="card-link">{t.discover} <Icon name="arrow" /></span></Link>
                ))}
          </div>
          {Object.keys(alternates).length ? (
            <p className="landing-languages">
              {(Object.entries(alternates) as [HrefLang, string][]).map(([code, path]) => (
                <Link key={code} href={path} hrefLang={code} lang={code}>{landingLabels[code].languageName}</Link>
              ))}
            </p>
          ) : null}
        </div>
      </section>

      {isFr ? (
        <ContactCTA />
      ) : (
        <section className="section band">
          <div className="container landing-cta-band">
            <p className="eyebrow">{t.ctaBandEyebrow}</p>
            <h2>{t.ctaBandTitle}</h2>
            <p className="lead">{t.ctaBandText}</p>
            <div className="hero-actions">
              <a className="button primary" href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noreferrer" data-track="landing-band-whatsapp" data-track-label={`Landing ${lang} band — WhatsApp`}>{t.ctaWhatsapp} <Icon name="arrow" /></a>
              <a className="button secondary" href={`mailto:${siteConfig.contact.email}`} data-track="landing-band-email" data-track-label={`Landing ${lang} band — Email`}>{t.ctaEmail}</a>
            </div>
          </div>
        </section>
      )}
    </>
  );

  // French pages inherit <html lang="fr">; translated pages declare their language on the content
  return isFr ? body : <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>{body}</div>;
}

