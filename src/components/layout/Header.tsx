"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/icons/Icon";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Accueil Morocco Europe Consulting">
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
                      <Link className="nav-link" href={item.href}>
                        {item.label} <span className="dropdown-caret" aria-hidden="true" />
                      </Link>
                      <div className="dropdown" aria-label="Sous-menu Services">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link className="nav-link" href={item.href}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href="/contact" variant="primary">
            Consultation confidentielle
          </ButtonLink>
        </div>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
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
                    <Link href={item.href} onClick={() => setOpen(false)}>
                      Tous les services
                    </Link>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              )
            )}
            <ButtonLink href="/contact" variant="primary">
              Consultation confidentielle
            </ButtonLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
