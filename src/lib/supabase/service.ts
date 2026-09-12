import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { MISSING_SECRET_ENV, supabaseSecretKey, supabaseUrl } from "@/lib/supabase/env";
import type { Database } from "@/lib/supabase/types";

/**
 * Client Supabase à privilèges élevés (clé secrète / service_role).
 *
 * Il contourne la RLS : il ne doit JAMAIS être importé depuis un composant
 * client. L'import "server-only" ci-dessus fait échouer le build si cela
 * arrive. La clé n'est pas préfixée NEXT_PUBLIC_, donc Next ne l'injecte
 * jamais dans un bundle navigateur.
 *
 * Usage : /api/track (insertions) et /api/cron/rollup (agrégation).
 */
export function createServiceClient(): SupabaseClient<Database> {
  const url = supabaseUrl();
  const secretKey = supabaseSecretKey();

  if (!url || !secretKey) throw new Error(MISSING_SECRET_ENV);

  return createClient<Database>(url, secretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  });
}

export { hasSecretCredentials as hasServiceCredentials } from "@/lib/supabase/env";
