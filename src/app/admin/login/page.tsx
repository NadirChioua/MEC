import type { Metadata } from "next";
import { AdminLogin } from "@/components/admin/AdminLogin";

export const metadata: Metadata = {
  title: "Connexion administrateur",
  description: "Accès confidentiel au tableau de bord Morocco Europe Consulting.",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminLoginPage() {
  return <AdminLogin />;
}
