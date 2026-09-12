import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons/Icon";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  /** Identifiant analytics stable, en kebab-case (ex. "hero-cta-consultation"). */
  trackId?: string;
  /** Libellé lisible affiché dans le dashboard. À défaut, le texte du bouton est utilisé. */
  trackLabel?: string;
};

export function ButtonLink({ href, children, variant = "primary", trackId, trackLabel }: ButtonLinkProps) {
  return (
    <Link className={`button ${variant}`} href={href} data-track={trackId} data-track-label={trackLabel}>
      {children}
      <Icon name="arrow" />
    </Link>
  );
}
