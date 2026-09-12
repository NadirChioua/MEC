"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { MAX_EVENTS_PER_BATCH } from "@/lib/analytics/constants";

/**
 * Tracker analytics MEC.
 *
 * - Une seule écoute de clic, déléguée sur `document` (pas un listener par bouton).
 * - Aucun cookie : seul un identifiant de session vit dans sessionStorage,
 *   ce qui le rend automatiquement éphémère et non traçable entre onglets.
 * - Les envois passent par sendBeacon : aucune requête ne bloque l'interface,
 *   et les événements en attente partent même si l'onglet se ferme.
 * - Ne rend aucun élément : zéro impact sur la mise en page.
 */

const SESSION_KEY = "mec-analytics-session";
const FLUSH_INTERVAL_MS = 5_000;
const ENDPOINT = "/api/track";

type TrackedEvent = {
  event_type: "pageview" | "click";
  path: string;
  element_id?: string | null;
  element_label?: string | null;
  session_id: string;
  referrer?: string | null;
  locale?: string | null;
};

/** Respecte Do Not Track / Global Privacy Control côté navigateur. */
function trackingRefused() {
  if (typeof navigator === "undefined") return true;
  const nav = navigator as Navigator & { msDoNotTrack?: string; globalPrivacyControl?: boolean };
  const win = typeof window !== "undefined" ? (window as Window & { doNotTrack?: string }) : undefined;
  const signal = nav.doNotTrack ?? win?.doNotTrack ?? nav.msDoNotTrack;
  return signal === "1" || signal === "yes" || nav.globalPrivacyControl === true;
}

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `s-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Identifiant de session : stable tant que l'onglet reste ouvert.
 * Un rechargement conserve donc la même session, un nouvel onglet en ouvre une.
 */
function getSessionId() {
  try {
    const existing = window.sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const created = createId();
    window.sessionStorage.setItem(SESSION_KEY, created);
    return created;
  } catch {
    // Navigation privée ou stockage bloqué : session éphémère en mémoire.
    return createId();
  }
}

function currentLocale() {
  const lang = document.documentElement.lang || "fr";
  return lang.slice(0, 8).toLowerCase();
}

/**
 * Le back-office n'est pas du trafic public : le compter fausserait les
 * chiffres que l'équipe consulte justement depuis ce back-office.
 */
function isExcludedPath(path: string) {
  return path.startsWith("/admin");
}

export function Tracker() {
  const queue = useRef<TrackedEvent[]>([]);
  const sessionId = useRef<string>("");
  const enabled = useRef(false);
  /** Dernier chemin envoyé : évite le doublon du double-render en développement. */
  const lastPath = useRef<string | null>(null);
  const pathname = usePathname();

  /* ---------------------------------------------------------------- */
  /* Initialisation : file d'attente, envoi différé, écoute des clics  */
  /* ---------------------------------------------------------------- */
  useEffect(() => {
    if (trackingRefused()) return;

    enabled.current = true;
    sessionId.current = getSessionId();

    const flush = () => {
      if (queue.current.length === 0) return;

      const pending = queue.current;
      queue.current = [];

      for (let index = 0; index < pending.length; index += MAX_EVENTS_PER_BATCH) {
        const batch = pending.slice(index, index + MAX_EVENTS_PER_BATCH);
        const payload = JSON.stringify({ events: batch });

        const sent =
          typeof navigator.sendBeacon === "function" &&
          navigator.sendBeacon(ENDPOINT, new Blob([payload], { type: "application/json" }));

        if (!sent) {
          // sendBeacon indisponible ou quota dépassé : repli non bloquant.
          void fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: payload,
            keepalive: true
          }).catch(() => undefined);
        }
      }
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const tracked = target.closest<HTMLElement>("[data-track]");
      if (!tracked) return;

      const elementId = tracked.dataset.track?.trim();
      if (!elementId) return;
      if (isExcludedPath(window.location.pathname)) return;

      const label =
        tracked.dataset.trackLabel?.trim() ||
        tracked.getAttribute("aria-label")?.trim() ||
        tracked.textContent?.trim().replace(/\s+/g, " ").slice(0, 120) ||
        elementId;

      queue.current.push({
        event_type: "click",
        path: window.location.pathname,
        element_id: elementId.slice(0, 120),
        element_label: label.slice(0, 200),
        session_id: sessionId.current,
        locale: currentLocale()
      });

      // Un clic quitte souvent la page : on part sans attendre le timer.
      flush();
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") flush();
    };

    // `passive` : la capture d'analytics ne peut pas retarder le défilement
    // ni empêcher l'action par défaut du bouton.
    document.addEventListener("click", onClick, { capture: true, passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pagehide", flush);

    const timer = window.setInterval(flush, FLUSH_INTERVAL_MS);

    return () => {
      flush();
      window.clearInterval(timer);
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pagehide", flush);
      enabled.current = false;
    };
  }, []);

  /* ---------------------------------------------------------------- */
  /* Une vue par navigation (montage initial + changements de route)   */
  /* ---------------------------------------------------------------- */
  useEffect(() => {
    if (!enabled.current || !pathname) return;
    if (lastPath.current === pathname) return;
    if (isExcludedPath(pathname)) return;

    const isFirstView = lastPath.current === null;
    lastPath.current = pathname;

    queue.current.push({
      event_type: "pageview",
      path: pathname,
      session_id: sessionId.current,
      // Le référent externe n'a de sens que pour la page d'entrée.
      referrer: isFirstView ? document.referrer || null : null,
      locale: currentLocale()
    });
  }, [pathname]);

  return null;
}
