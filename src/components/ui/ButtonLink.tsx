import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons/Icon";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link className={`button ${variant}`} href={href}>
      {children}
      <Icon name="arrow" />
    </Link>
  );
}
