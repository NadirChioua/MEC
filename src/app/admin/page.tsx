import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Tableau de bord administrateur pour Morocco Europe Consulting.",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminPage() {
  return <AdminDashboard />;
}
