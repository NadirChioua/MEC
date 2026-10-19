import type { Metadata } from "next";
import Image from "next/image";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { hasPublicCredentials } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Connexion administrateur",
  description: "Espace réservé à l'équipe Morocco Europe Consulting.",
  robots: { index: false, follow: false }
};

type LoginPageProps = {
  searchParams: Promise<{ next?: string }>;
};

/** N'accepte qu'un chemin interne : empêche une redirection ouverte via ?next=. */
function safeNextPath(value: string | undefined) {
  if (!value) return "/admin";
  if (!value.startsWith("/") || value.startsWith("//")) return "/admin";
  return value;
}

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const { next } = await searchParams;
  const configured = hasPublicCredentials();

  return (
    <section className="admin-login-shell">
      <div className="admin-login-card">
        <Image src="/images/brand/logo-mark.webp" alt="" aria-hidden="true" width={68} height={68} />
        <p className="eyebrow">Accès confidentiel</p>
        <h1>Connexion administrateur</h1>
        <p className="muted">
          Espace réservé à l’équipe Morocco Europe Consulting pour consulter la fréquentation du site.
        </p>

        {configured ? (
          <AdminLoginForm nextPath={safeNextPath(next)} />
        ) : (
          <p className="error" role="alert">
            Supabase n’est pas encore configuré. Renseignez NEXT_PUBLIC_SUPABASE_URL et
            NEXT_PUBLIC_SUPABASE_ANON_KEY, puis consultez docs/DASHBOARD.md.
          </p>
        )}
      </div>
    </section>
  );
}
