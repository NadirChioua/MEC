"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const adminEmail = "admin@mecfinance.ma";
const adminPassword = "Mecadmin2026.";
export const adminSessionKey = "mec-admin-session";
export const adminCookieKey = "mec-admin-auth";
const adminCookieValue = "mec-admin-authorized";

function createSessionToken() {
  return `mec-admin-${Date.now()}`;
}

export function setAdminSession() {
  if (typeof window === "undefined") return;
  const token = createSessionToken();
  window.localStorage.setItem(adminSessionKey, token);
  document.cookie = `${adminCookieKey}=${adminCookieValue}; path=/; max-age=86400; SameSite=Lax`;
}

export function hasAdminSession() {
  if (typeof window === "undefined") return false;
  return Boolean(window.localStorage.getItem(adminSessionKey)) || document.cookie.includes(`${adminCookieKey}=${adminCookieValue}`);
}

export function clearAdminSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(adminSessionKey);
  document.cookie = `${adminCookieKey}=; path=/; max-age=0; SameSite=Lax`;
}

export function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (hasAdminSession()) {
      setAdminSession();
      router.replace("/admin");
    }
  }, [router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (email.trim().toLowerCase() !== adminEmail || code !== adminPassword) {
      setError("Identifiants incorrects. Veuillez vérifier l’email et le code d’accès.");
      return;
    }

    setAdminSession();
    router.replace("/admin");
  };

  return (
    <section className="admin-login-shell">
      <div className="admin-login-card">
        <img src="/images/brand/logo-mark.png" alt="" aria-hidden="true" />
        <p className="eyebrow">Accès confidentiel</p>
        <h1>Connexion administrateur</h1>
        <p className="muted">
          Espace réservé à l’équipe Morocco Europe Consulting pour piloter les contenus essentiels du site.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="admin-email">
            Email administrateur
            <input
              id="admin-email"
              name="email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@mecfinance.ma"
            />
          </label>
          <label htmlFor="admin-code">
            Code d’accès
            <input
              id="admin-code"
              name="code"
              type="password"
              autoComplete="current-password"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              placeholder="••••••••••••"
            />
          </label>
          {error ? <p className="error">{error}</p> : null}
          <button className="button primary" type="submit">
            Se connecter
          </button>
        </form>
      </div>
    </section>
  );
}
