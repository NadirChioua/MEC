import Link from "next/link";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/" aria-label="Accueil Morocco Europe Consulting">
              <img className="footer-logo" src="/images/brand/logo-main.png" alt={siteConfig.name} />
            </Link>
            <p className="muted" style={{ marginTop: 18 }}>
              Conseil financier, audit, comptabilite et strategie pour les entreprises qui operent entre le Maroc et l'Europe.
            </p>
          </div>
          <div>
            <h3>Liens rapides</h3>
            <ul className="footer-list">
              {navigation.filter((item) => !item.children).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul className="footer-list">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul className="footer-list">
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.address}</li>
            </ul>
            <h3 style={{ marginTop: 22 }}>Legal</h3>
            <ul className="footer-list">
              <li>
                <Link href="/legal/mentions-legales">Mentions legales</Link>
              </li>
              <li>
                <Link href="/legal/confidentialite">Confidentialite</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>2026 {siteConfig.name}. Tous droits reserves.</span>
          <span>Tanger, Maroc</span>
        </div>
      </div>
    </footer>
  );
}
