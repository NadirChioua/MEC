"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/icons/Icon";

/** Transforme un href en identifiant analytics stable : "/services/audit" -> "services-audit". */
function trackSlug(href: string) {
  return href.replace(/^\//, "").replace(/\//g, "-") || "accueil";
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Accueil Morocco Europe Consulting" data-track="header-logo" data-track-label="Header — Logo">
          <img
            className="brand-logo brand-logo-main"
            src="/images/brand/logo-main.png"
            alt={siteConfig.name}
          />
          <img
            className="brand-logo brand-logo-mark"
            src="/images/brand/logo-mark.png"
            alt=""
            aria-hidden="true"
          />
        </Link>

        <div className="desktop-nav">
          <nav aria-label="Navigation principale">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li className="nav-item" key={item.href}>
                  {item.children ? (
                    <>
                      <Link className="nav-link" href={item.href} data-track={`nav-${trackSlug(item.href)}`} data-track-label={`Menu — ${item.label}`}>
                        {item.label} <span className="dropdown-caret" aria-hidden="true" />
                      </Link>
                      <div className="dropdown" aria-label="Sous-menu Services">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} data-track={`nav-dropdown-${trackSlug(child.href)}`} data-track-label={`Menu Services — ${child.label}`}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link className="nav-link" href={item.href} data-track={`nav-${trackSlug(item.href)}`} data-track-label={`Menu — ${item.label}`}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href="/contact" variant="primary" trackId="header-cta-consultation" trackLabel="Header — Consultation confidentielle">
            Consultation confidentielle
          </ButtonLink>
        </div>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          data-track="header-mobile-menu-toggle"
          data-track-label="Header — Ouvrir le menu mobile"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="container">
          <nav aria-label="Navigation mobile">
            {navigation.map((item) =>
              item.children ? (
                <details key={item.href} open>
                  <summary>{item.label}</summary>
                  <div className="mobile-subnav">
                    <Link href={item.href} onClick={() => setOpen(false)} data-track="mobile-nav-services-all" data-track-label="Menu mobile — Tous les services">
                      Tous les services
                    </Link>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setOpen(false)} data-track={`mobile-nav-${trackSlug(child.href)}`} data-track-label={`Menu mobile — ${child.label}`}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} data-track={`mobile-nav-${trackSlug(item.href)}`} data-track-label={`Menu mobile — ${item.label}`}>
                  {item.label}
                </Link>
              )
            )}
            <ButtonLink href="/contact" variant="primary" trackId="mobile-cta-consultation" trackLabel="Menu mobile — Consultation confidentielle">
              Consultation confidentielle
            </ButtonLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
