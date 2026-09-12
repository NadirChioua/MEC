/**
 * Crée le premier compte administrateur du dashboard MEC.
 *
 * Usage :
 *   npm run create-admin
 *
 * Variables requises (dans .env.local ou l'environnement) :
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SECRET_KEY        (ou SUPABASE_SERVICE_ROLE_KEY, ancien format)
 *   ADMIN_EMAIL
 *   ADMIN_PASSWORD      (uniquement pour cette exécution, ne pas committer)
 *
 * Le script est idempotent : relancé avec le même email, il se contente de
 * s'assurer que le compte figure bien dans admin_users.
 */

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/** Charge .env.local sans dépendance externe. */
function loadEnvFile(filename: string) {
  try {
    const content = readFileSync(resolve(process.cwd(), filename), "utf8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const separator = trimmed.indexOf("=");
      if (separator === -1) continue;
      const key = trimmed.slice(0, separator).trim();
      const value = trimmed.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
      if (!(key in process.env)) process.env[key] = value;
    }
  } catch {
    // Fichier absent : on se rabat sur les variables déjà présentes.
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

function required(name: string) {
  const value = process.env[name];
  if (!value) {
    console.error(`✗ Variable d'environnement manquante : ${name}`);
    process.exit(1);
  }
  return value;
}

async function main() {
  const url = required("NEXT_PUBLIC_SUPABASE_URL");
  // Accepte le nouveau format de clé secrète comme l'ancien service_role.
  const secretKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!secretKey) {
    console.error("✗ Variable d'environnement manquante : SUPABASE_SECRET_KEY");
    process.exit(1);
  }
  const email = required("ADMIN_EMAIL").toLowerCase();
  const password = required("ADMIN_PASSWORD");

  if (password.length < 12) {
    console.error("✗ ADMIN_PASSWORD doit contenir au moins 12 caractères.");
    process.exit(1);
  }

  const supabase = createClient(url, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  console.log(`→ Création du compte ${email}…`);

  let userId: string | undefined;

  const { data: created, error: createError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true
  });

  if (createError) {
    // Le compte existe déjà : on le retrouve pour l'ajouter à la liste blanche.
    console.log("  Le compte auth existe déjà, recherche de son identifiant…");
    const { data: list, error: listError } = await supabase.auth.admin.listUsers({ perPage: 200 });
    if (listError) {
      console.error("✗ Impossible de lister les comptes :", listError.message);
      process.exit(1);
    }
    userId = list.users.find((user) => user.email?.toLowerCase() === email)?.id;
    if (!userId) {
      console.error("✗ Compte introuvable :", createError.message);
      process.exit(1);
    }
  } else {
    userId = created.user?.id;
  }

  if (!userId) {
    console.error("✗ Identifiant utilisateur introuvable.");
    process.exit(1);
  }

  const { error: upsertError } = await supabase
    .from("admin_users")
    .upsert({ id: userId, email, role: "admin" }, { onConflict: "id" });

  if (upsertError) {
    console.error("✗ Ajout dans admin_users impossible :", upsertError.message);
    process.exit(1);
  }

  console.log("✓ Administrateur prêt.");
  console.log(`  Email : ${email}`);
  console.log("  Connectez-vous sur /admin/login");
}

main().catch((error) => {
  console.error("✗ Échec inattendu :", error instanceof Error ? error.message : error);
  process.exit(1);
});
