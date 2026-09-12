import type { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";
import { DashboardView } from "@/components/dashboard/DashboardView";
import { PeriodSwitcher } from "@/components/dashboard/PeriodSwitcher";
import { EmptyState } from "@/components/dashboard/primitives";
import { parsePeriod, resolvePeriod, PERIOD_LABELS } from "@/lib/analytics/period";
import { AnalyticsUnavailableError, loadDashboardData } from "@/lib/analytics/queries";
import { getAdminIdentity } from "@/lib/supabase/admin-guard";
import "./dashboard.css";

export const metadata: Metadata = {
  title: "Statistiques du site",
  description: "Tableau de bord de fréquentation Morocco Europe Consulting.",
  robots: { index: false, follow: false }
};

// Les chiffres du jour doivent être frais à chaque affichage.
export const dynamic = "force-dynamic";

type AdminPageProps = {
  searchParams: Promise<{ periode?: string }>;
};

export default async function AdminPage({ searchParams }: AdminPageProps) {
  // Le middleware bloque déjà les visiteurs non connectés ; cette seconde
  // vérification couvre l'appartenance à admin_users, que le middleware ne
  // teste pas pour éviter une requête base sur chaque navigation.
  const identity = await getAdminIdentity();
  if (identity.status === "anonymous") redirect("/admin/login");
  if (identity.status === "forbidden") redirect("/admin/forbidden");

  const { periode } = await searchParams;
  const period = resolvePeriod(parsePeriod(periode));

  return (
    <div className="dash-shell">
      <header className="dash-header">
        <div>
          <p className="eyebrow">Tableau de bord</p>
          <h1>Fréquentation du site</h1>
          <p className="dash-header-meta">
            Connecté en tant que <strong>{identity.admin.email}</strong>
          </p>
        </div>
        <AdminLogoutButton />
      </header>

      <div className="dash-toolbar">
        <PeriodSwitcher active={period.key} />
        <p className="dash-range">
          {PERIOD_LABELS[period.key]} · du {formatDay(period.start)} au {formatDay(period.end)} (UTC)
        </p>
      </div>

      {/* La clé force un nouveau Suspense à chaque changement de période :
          le squelette réapparaît au lieu d'afficher les anciens chiffres. */}
      <Suspense key={period.key} fallback={<DashboardSkeleton />}>
        <DashboardSection period={period} />
      </Suspense>
    </div>
  );
}

async function DashboardSection({ period }: { period: ReturnType<typeof resolvePeriod> }) {
  let data: Awaited<ReturnType<typeof loadDashboardData>>;

  // Le try n'enveloppe que le chargement des données, jamais le rendu :
  // React ne rend pas les composants de façon synchrone, une erreur de
  // rendu ne serait donc pas interceptée ici de toute façon.
  try {
    data = await loadDashboardData(period);
  } catch (error) {
    if (error instanceof AnalyticsUnavailableError) {
      return (
        <section className="dash-panel">
          <EmptyState
            title="Les statistiques ne sont pas encore disponibles."
            hint="Vérifiez que les migrations SQL ont bien été exécutées sur le projet Supabase (voir docs/DASHBOARD.md)."
          />
        </section>
      );
    }
    throw error;
  }

  return <DashboardView data={data} period={period} />;
}

function formatDay(day: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${day}T00:00:00Z`));
}
