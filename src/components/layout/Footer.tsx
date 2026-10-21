import Link from "next/link";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { landingLabels } from "@/data/landing-i18n";
import { landingPagesFor, landingPath, seoLandingPages } from "@/data/landing-pages";
import type { HrefLang } from "@/lib/seo";

const intlLangs: HrefLang[] = ["nl", "en", "es", "ar"];

/** Transforme un href en identifiant analytics stable : "/services/audit" -> "services-audit". */
function trackSlug(href: string) {
  return href.replace(/^\//, "").replace(/\//g, "-") || "accueil";
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link prefetch={false} className="brand" href="/" aria-label="Accueil Morocco Europe Consulting" data-track="footer-logo" data-track-label="Footer — Logo">
              <img loading="lazy" decoding="async" className="footer-logo" src="/images/brand/logo-footer.webp" alt={siteConfig.name} />
            </Link>
            <p className="muted" style={{ marginTop: 18 }}>
              Cabinet comptable et de conseil financier à Tanger : comptabilité, fiscalité, audit et création d&apos;entreprise pour les sociétés qui opèrent entre le Maroc et l&apos;Europe.
            </p>
          </div>
          <div>
            <h3>Liens rapides</h3>
            <ul className="footer-list">
              {navigation.filter((item) => !item.children).map((item) => (
                <li key={item.href}>
                  <Link prefetch={false} href={item.href} data-track={`footer-nav-${trackSlug(item.href)}`} data-track-label={`Footer — ${item.label}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link prefetch={false} href="/services" data-track="footer-nav-services" data-track-label="Footer — Services">Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul className="footer-list">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link prefetch={false} href={`/services/${service.slug}`} data-track={`footer-service-${service.slug}`} data-track-label={`Footer service — ${service.title}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Expertises</h3>
            <ul className="footer-list">
              {seoLandingPages.map((page) => (
                <li key={page.slug}>
                  <Link prefetch={false} href={landingPath(page)} data-track={`footer-landing-${page.slug}`} data-track-label={`Footer expertise — ${page.title}`}>
                    {page.eyebrow}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul className="footer-list">
              <li>
                <a href={`tel:+${siteConfig.contact.whatsappNumber}`} data-track="footer-phone" data-track-label="Footer — Téléphone">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} data-track="footer-email" data-track-label="Footer — Email">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>
            <h3 style={{ marginTop: 22 }}>Légal</h3>
            <ul className="footer-list">
              <li>
                <Link prefetch={false} href="/legal/mentions-legales" data-track="footer-legal-mentions" data-track-label="Footer — Mentions légales">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/legal/confidentialite" data-track="footer-legal-confidentialite" data-track-label="Footer — Confidentialité">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <nav className="footer-intl" aria-label="International" translate="no">
          {intlLangs.map((lang) => (
            <span key={lang} lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
              <strong>{landingLabels[lang].languageName}</strong>
              <Link prefetch={false} href={`/${lang}`} hrefLang={lang} data-track={`footer-intl-home-${lang}`} data-track-label={`Footer international — ${landingLabels[lang].home}`}>
                {landingLabels[lang].home}
              </Link>
              {landingPagesFor(lang).map((page) => (
                <Link prefetch={false} key={page.slug} href={landingPath(page)} hrefLang={lang} data-track={`footer-intl-${lang}`} data-track-label={`Footer international — ${page.title}`}>
                  {page.eyebrow}
                </Link>
              ))}
            </span>
          ))}
        </nav>
        <div className="footer-bottom">
          <span>2026 {siteConfig.name}. Tous droits réservés.</span>
          <span>Tanger, Maroc</span>
        </div>
      </div>
    </footer>
  );
}
