import type { Metadata } from "next";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";

export const metadata: Metadata = {
  title: "Accès refusé",
  robots: { index: false, follow: false }
};

/**
 * Affichée lorsqu'un compte est authentifié mais absent de `admin_users`.
 * Être connecté à Supabase ne donne aucun droit sur le dashboard.
 */
export default function AdminForbiddenPage() {
  return (
    <section className="admin-login-shell">
      <div className="admin-login-card">
        <p className="eyebrow">Erreur 403</p>
        <h1>Accès refusé</h1>
        <p className="muted">
          Votre compte est authentifié mais ne figure pas dans la liste des administrateurs
          autorisés. Contactez le responsable technique pour être ajouté.
        </p>
        <AdminLogoutButton />
      </div>
    </section>
  );
}
