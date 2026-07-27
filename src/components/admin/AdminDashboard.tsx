"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { clearAdminSession, hasAdminSession } from "@/components/admin/AdminLogin";
import { Icon } from "@/components/icons/Icon";
import { services } from "@/data/services";
import { insights } from "@/data/insights";

type Client = {
  id: string;
  name: string;
  company: string;
  need: string;
  status: string;
};

type AdminState = {
  heroTitle: string;
  heroText: string;
  mission: string;
  clients: Client[];
  tasks: string[];
};

const defaultState: AdminState = {
  heroTitle: "L’excellence au service de votre entreprise.",
  heroText:
    "Morocco Europe Consulting accompagne les entreprises marocaines et les sociétés internationales implantées ou souhaitant s’implanter au Maroc.",
  mission:
    "Offrir à nos clients un partenaire de confiance, capable de sécuriser leurs projets, d’optimiser leur gestion et de favoriser leur réussite au Maroc.",
  clients: [
    { id: "1", name: "Nouveau prospect", company: "Entreprise Maroc-Europe", need: "Conseil financier", status: "À qualifier" },
    { id: "2", name: "Investisseur étranger", company: "Projet implantation Maroc", need: "Création société", status: "En suivi" }
  ],
  tasks: ["Valider les images finales", "Préparer les contenus multilingues", "Contrôler les formulaires de contact"]
};

const storageKey = "mec-admin-dashboard";

export function AdminDashboard() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [state, setState] = useState<AdminState>(defaultState);
  const [client, setClient] = useState({ name: "", company: "", need: "" });

  useEffect(() => {
    if (!hasAdminSession()) {
      router.replace("/admin/login");
      return;
    }

    setIsAuthorized(true);
    const saved = window.localStorage.getItem(storageKey);
    if (saved) setState(JSON.parse(saved) as AdminState);
  }, [router]);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state]);

  const imageAssets = useMemo(
    () => [
      "/images/generated/mec-hero-consulting-meeting.png",
      "/images/generated/mec-financial-advisory.png",
      "/images/generated/mec-audit-compliance.png",
      "/images/generated/mec-morocco-europe-bridge.png",
      "/images/generated/mec-contact-cta.png",
      "/images/sections/strategy-map.png"
    ],
    []
  );

  const addClient = () => {
    if (!client.name.trim() || !client.company.trim()) return;
    setState((current) => ({
      ...current,
      clients: [
        {
          id: crypto.randomUUID(),
          name: client.name,
          company: client.company,
          need: client.need || "À préciser",
          status: "Nouveau"
        },
        ...current.clients
      ]
    }));
    setClient({ name: "", company: "", need: "" });
  };

  const updateClientStatus = (id: string, status: string) => {
    setState((current) => ({
      ...current,
      clients: current.clients.map((item) => item.id === id ? { ...item, status } : item)
    }));
  };

  const logout = () => {
    clearAdminSession();
    router.replace("/admin/login");
  };

  if (!isAuthorized) {
    return (
      <section className="admin-loading">
        <p>Vérification de l’accès administrateur…</p>
      </section>
    );
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <img src="/images/brand/logo-mark.png" alt="" aria-hidden="true" />
        <div>
          <strong>Admin MEC</strong>
          <span>Gestion du site</span>
        </div>
        <nav>
          {["Vue générale", "Contenu", "Images", "Clients", "Tâches"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace("â", "a").replace(" ", "-")}`}>{item}</a>
          ))}
        </nav>
        <button className="admin-logout" type="button" onClick={logout}>
          Déconnexion
        </button>
      </aside>

      <section className="admin-main">
        <div className="admin-hero">
          <p className="eyebrow">Dashboard administrateur</p>
          <h1>Centre de pilotage Morocco Europe Consulting</h1>
          <p>
            Une interface de gestion prête pour organiser le contenu, les images, les clients et les actions importantes avant
            publication complète.
          </p>
        </div>

        <div className="admin-kpis" id="vue-générale">
          <div><span>Services</span><strong>{services.length}</strong></div>
          <div><span>Ressources</span><strong>{insights.length}</strong></div>
          <div><span>Images clés</span><strong>{imageAssets.length}</strong></div>
          <div><span>Clients</span><strong>{state.clients.length}</strong></div>
        </div>

        <div className="admin-grid">
          <section className="admin-panel" id="contenu">
            <div className="admin-panel-head">
              <Icon name="document" />
              <div>
                <h2>Modifier le contenu principal</h2>
                <p>Ces champs préparent les textes clés du site pour une future sauvegarde côté serveur.</p>
              </div>
            </div>
            <label>
              Titre hero
              <input value={state.heroTitle} onChange={(event) => setState({ ...state, heroTitle: event.target.value })} />
            </label>
            <label>
              Texte hero
              <textarea value={state.heroText} onChange={(event) => setState({ ...state, heroText: event.target.value })} />
            </label>
            <label>
              Mission
              <textarea value={state.mission} onChange={(event) => setState({ ...state, mission: event.target.value })} />
            </label>
          </section>

          <section className="admin-panel" id="images">
            <div className="admin-panel-head">
              <Icon name="market" />
              <div>
                <h2>Gestion des images</h2>
                <p>Inventaire des visuels actuellement disponibles pour remplacer les sections du site.</p>
              </div>
            </div>
            <div className="admin-image-grid">
              {imageAssets.map((src) => (
                <button key={src} type="button">
                  <img src={src} alt="Aperçu image du site MEC" />
                  <span>{src.split("/").pop()}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="admin-panel" id="clients">
            <div className="admin-panel-head">
              <Icon name="partnership" />
              <div>
                <h2>Clients & prospects</h2>
                <p>Ajouter et suivre les clients importants du cabinet.</p>
              </div>
            </div>
            <div className="admin-client-form">
              <input placeholder="Nom" value={client.name} onChange={(event) => setClient({ ...client, name: event.target.value })} />
              <input placeholder="Entreprise" value={client.company} onChange={(event) => setClient({ ...client, company: event.target.value })} />
              <input placeholder="Besoin" value={client.need} onChange={(event) => setClient({ ...client, need: event.target.value })} />
              <button className="button primary" type="button" onClick={addClient}>Ajouter</button>
            </div>
            <div className="admin-table">
              {state.clients.map((item) => (
                <div key={item.id}>
                  <strong>{item.name}</strong>
                  <span>{item.company}</span>
                  <span>{item.need}</span>
                  <select value={item.status} onChange={(event) => updateClientStatus(item.id, event.target.value)}>
                    <option>Nouveau</option>
                    <option>À qualifier</option>
                    <option>En suivi</option>
                    <option>Validé</option>
                  </select>
                </div>
              ))}
            </div>
          </section>

          <section className="admin-panel" id="tâches">
            <div className="admin-panel-head">
              <Icon name="check" />
              <div>
                <h2>Tâches administrateur</h2>
                <p>Organisation des actions avant et après déploiement.</p>
              </div>
            </div>
            <ul className="admin-task-list">
              {state.tasks.map((task) => (
                <li key={task}><Icon name="check" />{task}</li>
              ))}
            </ul>
            <p className="admin-note">
              Note technique : cette première version fonctionne côté interface et conserve les modifications localement.
              Pour une administration complète en production, il faudra connecter une authentification et une base de données.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
