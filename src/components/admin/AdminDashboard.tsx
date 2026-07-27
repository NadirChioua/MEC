"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { clearAdminSession, hasAdminSession } from "@/components/admin/AdminLogin";
import { Icon } from "@/components/icons/Icon";
import { insights } from "@/data/insights";
import { services } from "@/data/services";

type Client = {
  id: string;
  name: string;
  company: string;
  need: string;
  status: string;
};

type MediaAsset = {
  id: string;
  title: string;
  type: "Image" | "Vidéo";
  section: string;
  url: string;
  status: "Actif" | "À remplacer" | "Archivé";
};

type Project = {
  id: string;
  title: string;
  market: string;
  status: "Prospection" | "En cours" | "Livré";
};

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  status: "Nouveau" | "En traitement" | "Traité";
};

type Task = {
  id: string;
  title: string;
  done: boolean;
};

type AdminState = {
  content: {
    heroTitle: string;
    heroText: string;
    mission: string;
  };
  clients: Client[];
  media: MediaAsset[];
  projects: Project[];
  messages: ContactMessage[];
  tasks: Task[];
};

const storageKey = "mec-admin-dashboard-v2";

const createId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `mec-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const defaultState: AdminState = {
  content: {
    heroTitle: "L’excellence au service de votre entreprise.",
    heroText:
      "Morocco Europe Consulting accompagne les entreprises marocaines et les sociétés internationales implantées ou souhaitant s’implanter au Maroc dans leur gestion comptable, financière, fiscale et administrative.",
    mission:
      "Offrir à nos clients un partenaire de confiance, capable de sécuriser leurs projets, d’optimiser leur gestion et de favoriser leur réussite au Maroc."
  },
  clients: [
    { id: "client-1", name: "Prospect stratégique", company: "Entreprise Maroc-Europe", need: "Conseil financier", status: "À qualifier" },
    { id: "client-2", name: "Investisseur international", company: "Implantation Maroc", need: "Création société", status: "En suivi" }
  ],
  media: [
    {
      id: "media-1",
      title: "Hero consulting meeting",
      type: "Image",
      section: "Hero",
      url: "/images/generated/mec-hero-consulting-meeting.png",
      status: "Actif"
    },
    {
      id: "media-2",
      title: "Financial advisory",
      type: "Image",
      section: "Services",
      url: "/images/generated/mec-financial-advisory.png",
      status: "Actif"
    },
    {
      id: "media-3",
      title: "Audit compliance",
      type: "Image",
      section: "Audit",
      url: "/images/generated/mec-audit-compliance.png",
      status: "Actif"
    }
  ],
  projects: [
    { id: "project-1", title: "Structuration financière PME", market: "Maroc", status: "En cours" },
    { id: "project-2", title: "Implantation société étrangère", market: "Europe → Maroc", status: "Prospection" }
  ],
  messages: [
    { id: "message-1", name: "Direction PME", email: "contact@mecfinance.ma", subject: "Demande de consultation confidentielle", status: "Nouveau" }
  ],
  tasks: [
    { id: "task-1", title: "Valider les images finales", done: true },
    { id: "task-2", title: "Contrôler les formulaires de contact", done: false },
    { id: "task-3", title: "Vérifier le domaine et l’email professionnel", done: true }
  ]
};

export function AdminDashboard() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [state, setState] = useState<AdminState>(defaultState);
  const [clientForm, setClientForm] = useState({ name: "", company: "", need: "" });
  const [mediaForm, setMediaForm] = useState({ title: "", type: "Image" as MediaAsset["type"], section: "", url: "" });
  const [projectForm, setProjectForm] = useState({ title: "", market: "" });
  const [messageForm, setMessageForm] = useState({ name: "", email: "", subject: "" });
  const [taskTitle, setTaskTitle] = useState("");
  const [notice, setNotice] = useState("Toutes les modifications sont sauvegardées automatiquement dans ce navigateur.");

  useEffect(() => {
    if (!hasAdminSession()) {
      router.replace("/admin/login");
      return;
    }

    setIsAuthorized(true);
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try {
        setState(JSON.parse(saved) as AdminState);
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
  }, [router]);

  useEffect(() => {
    if (!isAuthorized) return;
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  }, [isAuthorized, state]);

  const kpis = useMemo(
    () => [
      { label: "Services publics", value: services.length },
      { label: "Ressources", value: insights.length },
      { label: "Médias", value: state.media.length },
      { label: "Messages", value: state.messages.length },
      { label: "Clients", value: state.clients.length },
      { label: "Projets", value: state.projects.length }
    ],
    [state.clients.length, state.media.length, state.messages.length, state.projects.length]
  );

  const saveNotice = (text = "Modification enregistrée avec succès.") => setNotice(text);

  const updateContent = (field: keyof AdminState["content"], value: string) => {
    setState((current) => ({ ...current, content: { ...current.content, [field]: value } }));
    saveNotice("Contenu sauvegardé automatiquement.");
  };

  const addClient = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!clientForm.name.trim() || !clientForm.company.trim()) return;
    setState((current) => ({
      ...current,
      clients: [{ id: createId(), ...clientForm, need: clientForm.need || "À préciser", status: "Nouveau" }, ...current.clients]
    }));
    setClientForm({ name: "", company: "", need: "" });
    saveNotice("Client ajouté.");
  };

  const updateClientStatus = (id: string, status: string) => {
    setState((current) => ({
      ...current,
      clients: current.clients.map((item) => item.id === id ? { ...item, status } : item)
    }));
    saveNotice("Statut client mis à jour.");
  };

  const updateClientField = (id: string, field: keyof Omit<Client, "id">, value: string) => {
    setState((current) => ({
      ...current,
      clients: current.clients.map((item) => item.id === id ? { ...item, [field]: value } : item)
    }));
    saveNotice("Client mis à jour.");
  };

  const deleteClient = (id: string) => {
    setState((current) => ({ ...current, clients: current.clients.filter((item) => item.id !== id) }));
    saveNotice("Client supprimé.");
  };

  const addMedia = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!mediaForm.title.trim() || !mediaForm.url.trim()) return;
    setState((current) => ({
      ...current,
      media: [{ id: createId(), ...mediaForm, section: mediaForm.section || "Site", status: "Actif" }, ...current.media]
    }));
    setMediaForm({ title: "", type: "Image", section: "", url: "" });
    saveNotice("Média ajouté.");
  };

  const updateMediaStatus = (id: string, status: MediaAsset["status"]) => {
    setState((current) => ({ ...current, media: current.media.map((item) => item.id === id ? { ...item, status } : item) }));
    saveNotice("Statut média mis à jour.");
  };

  const updateMediaField = (id: string, field: keyof Omit<MediaAsset, "id">, value: string) => {
    setState((current) => ({
      ...current,
      media: current.media.map((item) => item.id === id ? { ...item, [field]: value } : item)
    }));
    saveNotice("Média mis à jour.");
  };

  const deleteMedia = (id: string) => {
    setState((current) => ({ ...current, media: current.media.filter((item) => item.id !== id) }));
    saveNotice("Média supprimé.");
  };

  const addProject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!projectForm.title.trim()) return;
    setState((current) => ({
      ...current,
      projects: [{ id: createId(), title: projectForm.title, market: projectForm.market || "Maroc-Europe", status: "Prospection" }, ...current.projects]
    }));
    setProjectForm({ title: "", market: "" });
    saveNotice("Projet ajouté.");
  };

  const updateProjectStatus = (id: string, status: Project["status"]) => {
    setState((current) => ({
      ...current,
      projects: current.projects.map((item) => item.id === id ? { ...item, status } : item)
    }));
    saveNotice("Statut projet mis à jour.");
  };

  const updateProjectField = (id: string, field: keyof Omit<Project, "id">, value: string) => {
    setState((current) => ({
      ...current,
      projects: current.projects.map((item) => item.id === id ? { ...item, [field]: value } : item)
    }));
    saveNotice("Projet mis à jour.");
  };

  const deleteProject = (id: string) => {
    setState((current) => ({ ...current, projects: current.projects.filter((item) => item.id !== id) }));
    saveNotice("Projet supprimé.");
  };

  const addMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!messageForm.name.trim() || !messageForm.subject.trim()) return;
    setState((current) => ({
      ...current,
      messages: [{ id: createId(), ...messageForm, email: messageForm.email || "contact@mecfinance.ma", status: "Nouveau" }, ...current.messages]
    }));
    setMessageForm({ name: "", email: "", subject: "" });
    saveNotice("Message ajouté.");
  };

  const updateMessageStatus = (id: string, status: ContactMessage["status"]) => {
    setState((current) => ({
      ...current,
      messages: current.messages.map((item) => item.id === id ? { ...item, status } : item)
    }));
    saveNotice("Statut message mis à jour.");
  };

  const updateMessageField = (id: string, field: keyof Omit<ContactMessage, "id">, value: string) => {
    setState((current) => ({
      ...current,
      messages: current.messages.map((item) => item.id === id ? { ...item, [field]: value } : item)
    }));
    saveNotice("Message mis à jour.");
  };

  const deleteMessage = (id: string) => {
    setState((current) => ({ ...current, messages: current.messages.filter((item) => item.id !== id) }));
    saveNotice("Message supprimé.");
  };

  const addTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!taskTitle.trim()) return;
    setState((current) => ({ ...current, tasks: [{ id: createId(), title: taskTitle, done: false }, ...current.tasks] }));
    setTaskTitle("");
    saveNotice("Tâche ajoutée.");
  };

  const toggleTask = (id: string) => {
    setState((current) => ({
      ...current,
      tasks: current.tasks.map((task) => task.id === id ? { ...task, done: !task.done } : task)
    }));
    saveNotice("Tâche mise à jour.");
  };

  const deleteTask = (id: string) => {
    setState((current) => ({ ...current, tasks: current.tasks.filter((task) => task.id !== id) }));
    saveNotice("Tâche supprimée.");
  };

  const resetDashboard = () => {
    setState(defaultState);
    window.localStorage.removeItem(storageKey);
    saveNotice("Tableau de bord réinitialisé.");
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
          {["Vue générale", "Contenu", "Médias", "Projets", "Clients", "Messages", "Tâches"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`}>{item}</a>
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
            Gérez le contenu, les médias, les projets, les clients, les messages et les tâches depuis une interface
            dynamique sauvegardée localement.
          </p>
        </div>

        <div className="admin-status-bar" role="status">
          <span>{notice}</span>
          <button type="button" onClick={resetDashboard}>Réinitialiser</button>
        </div>

        <div className="admin-kpis" id="vue-generale">
          {kpis.map((item) => (
            <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>
          ))}
        </div>

        <div className="admin-grid">
          <section className="admin-panel" id="contenu">
            <PanelHead icon="document" title="Modifier le contenu principal" text="Ces champs sont modifiables et conservés après actualisation de la page." />
            <label>
              Titre hero
              <input value={state.content.heroTitle} onChange={(event) => updateContent("heroTitle", event.target.value)} />
            </label>
            <label>
              Texte hero
              <textarea value={state.content.heroText} onChange={(event) => updateContent("heroText", event.target.value)} />
            </label>
            <label>
              Mission
              <textarea value={state.content.mission} onChange={(event) => updateContent("mission", event.target.value)} />
            </label>
          </section>

          <section className="admin-panel" id="medias">
            <PanelHead icon="market" title="Gestion images & vidéos" text="Ajoutez, archivez ou remplacez les visuels utilisés par l’identité MEC." />
            <form className="admin-inline-form" onSubmit={addMedia}>
              <input value={mediaForm.title} onChange={(event) => setMediaForm({ ...mediaForm, title: event.target.value })} placeholder="Titre du média" />
              <select value={mediaForm.type} onChange={(event) => setMediaForm({ ...mediaForm, type: event.target.value as MediaAsset["type"] })}>
                <option>Image</option>
                <option>Vidéo</option>
              </select>
              <input value={mediaForm.section} onChange={(event) => setMediaForm({ ...mediaForm, section: event.target.value })} placeholder="Section du site" />
              <input value={mediaForm.url} onChange={(event) => setMediaForm({ ...mediaForm, url: event.target.value })} placeholder="/images/..." />
              <button className="button primary" type="submit">Ajouter</button>
            </form>
            <div className="admin-record-list">
              {state.media.map((asset) => (
                <article key={asset.id} className="admin-record">
                  <div className="admin-record-fields">
                    <input value={asset.title} onChange={(event) => updateMediaField(asset.id, "title", event.target.value)} aria-label="Titre média" />
                    <input value={asset.section} onChange={(event) => updateMediaField(asset.id, "section", event.target.value)} aria-label="Section média" />
                    <input value={asset.url} onChange={(event) => updateMediaField(asset.id, "url", event.target.value)} aria-label="URL média" />
                  </div>
                  <select value={asset.type} onChange={(event) => updateMediaField(asset.id, "type", event.target.value)}>
                    <option>Image</option>
                    <option>Vidéo</option>
                  </select>
                  <select value={asset.status} onChange={(event) => updateMediaStatus(asset.id, event.target.value as MediaAsset["status"])}>
                    <option>Actif</option>
                    <option>À remplacer</option>
                    <option>Archivé</option>
                  </select>
                  <button type="button" onClick={() => deleteMedia(asset.id)}>Supprimer</button>
                </article>
              ))}
            </div>
          </section>

          <section className="admin-panel" id="projets">
            <PanelHead icon="growth" title="Projets & missions" text="Suivez les missions importantes et leur niveau d’avancement." />
            <form className="admin-inline-form" onSubmit={addProject}>
              <input value={projectForm.title} onChange={(event) => setProjectForm({ ...projectForm, title: event.target.value })} placeholder="Nom de mission" />
              <input value={projectForm.market} onChange={(event) => setProjectForm({ ...projectForm, market: event.target.value })} placeholder="Marché / pays" />
              <button className="button primary" type="submit">Ajouter</button>
            </form>
            <div className="admin-record-list">
              {state.projects.map((project) => (
                <article key={project.id} className="admin-record">
                  <div className="admin-record-fields">
                    <input value={project.title} onChange={(event) => updateProjectField(project.id, "title", event.target.value)} aria-label="Titre projet" />
                    <input value={project.market} onChange={(event) => updateProjectField(project.id, "market", event.target.value)} aria-label="Marché projet" />
                  </div>
                  <select value={project.status} onChange={(event) => updateProjectStatus(project.id, event.target.value as Project["status"])}>
                    <option>Prospection</option>
                    <option>En cours</option>
                    <option>Livré</option>
                  </select>
                  <button type="button" onClick={() => deleteProject(project.id)}>Supprimer</button>
                </article>
              ))}
            </div>
          </section>

          <section className="admin-panel" id="clients">
            <PanelHead icon="partnership" title="Clients & prospects" text="Ajoutez, qualifiez et supprimez les fiches clients." />
            <form className="admin-inline-form" onSubmit={addClient}>
              <input value={clientForm.name} onChange={(event) => setClientForm({ ...clientForm, name: event.target.value })} placeholder="Nom" />
              <input value={clientForm.company} onChange={(event) => setClientForm({ ...clientForm, company: event.target.value })} placeholder="Entreprise" />
              <input value={clientForm.need} onChange={(event) => setClientForm({ ...clientForm, need: event.target.value })} placeholder="Besoin" />
              <button className="button primary" type="submit">Ajouter</button>
            </form>
            <div className="admin-record-list">
              {state.clients.map((item) => (
                <article key={item.id} className="admin-record">
                  <div className="admin-record-fields">
                    <input value={item.name} onChange={(event) => updateClientField(item.id, "name", event.target.value)} aria-label="Nom client" />
                    <input value={item.company} onChange={(event) => updateClientField(item.id, "company", event.target.value)} aria-label="Entreprise client" />
                    <input value={item.need} onChange={(event) => updateClientField(item.id, "need", event.target.value)} aria-label="Besoin client" />
                  </div>
                  <select value={item.status} onChange={(event) => updateClientStatus(item.id, event.target.value)}>
                    <option>Nouveau</option>
                    <option>À qualifier</option>
                    <option>En suivi</option>
                    <option>Validé</option>
                  </select>
                  <button type="button" onClick={() => deleteClient(item.id)}>Supprimer</button>
                </article>
              ))}
            </div>
          </section>

          <section className="admin-panel" id="messages">
            <PanelHead icon="email" title="Demandes de contact" text="Centralisez les demandes reçues ou ajoutées manuellement." />
            <form className="admin-inline-form" onSubmit={addMessage}>
              <input value={messageForm.name} onChange={(event) => setMessageForm({ ...messageForm, name: event.target.value })} placeholder="Nom du contact" />
              <input value={messageForm.email} onChange={(event) => setMessageForm({ ...messageForm, email: event.target.value })} placeholder="Email du contact" />
              <input value={messageForm.subject} onChange={(event) => setMessageForm({ ...messageForm, subject: event.target.value })} placeholder="Sujet de la demande" />
              <button className="button primary" type="submit">Ajouter</button>
            </form>
            <div className="admin-record-list">
              {state.messages.map((message) => (
                <article key={message.id} className="admin-record">
                  <div className="admin-record-fields">
                    <input value={message.name} onChange={(event) => updateMessageField(message.id, "name", event.target.value)} aria-label="Nom message" />
                    <input value={message.email} onChange={(event) => updateMessageField(message.id, "email", event.target.value)} aria-label="Email message" />
                    <input value={message.subject} onChange={(event) => updateMessageField(message.id, "subject", event.target.value)} aria-label="Sujet message" />
                  </div>
                  <select value={message.status} onChange={(event) => updateMessageStatus(message.id, event.target.value as ContactMessage["status"])}>
                    <option>Nouveau</option>
                    <option>En traitement</option>
                    <option>Traité</option>
                  </select>
                  <button type="button" onClick={() => deleteMessage(message.id)}>Supprimer</button>
                </article>
              ))}
            </div>
          </section>

          <section className="admin-panel" id="taches">
            <PanelHead icon="check" title="Tâches administrateur" text="Créez une checklist dynamique pour l’exploitation du site." />
            <form className="admin-inline-form" onSubmit={addTask}>
              <input value={taskTitle} onChange={(event) => setTaskTitle(event.target.value)} placeholder="Nouvelle tâche" />
              <button className="button primary" type="submit">Ajouter</button>
            </form>
            <ul className="admin-task-list dynamic">
              {state.tasks.map((task) => (
                <li key={task.id}>
                  <label>
                    <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
                    <span>{task.title}</span>
                  </label>
                  <button type="button" onClick={() => deleteTask(task.id)}>Supprimer</button>
                </li>
              ))}
            </ul>
            <p className="admin-note">
              Version dynamique locale : les données sont persistées dans LocalStorage. Pour synchroniser tous les administrateurs,
              une base de données ou un CMS devra être connecté ultérieurement.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}

function PanelHead({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="admin-panel-head">
      <Icon name={icon} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
