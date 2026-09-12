import { createSupabaseServerClient } from "@/lib/supabase/server";

export type AdminIdentity = {
  id: string;
  email: string;
  role: string;
};

/**
 * Vérifie que l'utilisateur connecté figure bien dans `admin_users`.
 *
 * Être authentifié ne suffit pas : Supabase Auth peut contenir d'autres
 * comptes. Seule la présence dans la liste blanche ouvre le dashboard.
 * La requête passe par le client lié à la session, donc la RLS s'applique.
 */
export async function getAdminIdentity(): Promise<
  { status: "anonymous" } | { status: "forbidden"; email: string } | { status: "admin"; admin: AdminIdentity }
> {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) return { status: "anonymous" };

  const { data, error } = await supabase
    .from("admin_users")
    .select("id, email, role")
    .eq("id", user.id)
    .maybeSingle();

  if (error || !data) {
    return { status: "forbidden", email: user.email ?? "" };
  }

  return { status: "admin", admin: { id: data.id, email: data.email, role: data.role } };
}
