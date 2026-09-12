-- =====================================================================
-- MEC — Analytics auto-hébergée : schéma de base
-- Idempotent : ce fichier peut être rejoué sans erreur.
--
-- Confidentialité (loi 09-08 / CNDP + visiteurs UE) :
--   Aucune IP brute, aucun identifiant personnel n'est stocké ici.
--   `visitor_hash` = sha256(ip + user-agent + sel du jour). Le sel change
--   chaque jour, donc le hash d'un même visiteur change chaque jour :
--   il est impossible de suivre une personne d'un jour à l'autre.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. Événements bruts
-- ---------------------------------------------------------------------
create table if not exists public.analytics_events (
  id            bigserial primary key,
  event_type    text not null check (event_type in ('pageview', 'click')),
  path          text not null,
  element_id    text,
  element_label text,
  visitor_hash  text not null,
  session_id    text not null,
  referrer      text,
  device        text check (device in ('mobile', 'tablet', 'desktop')),
  country       text,
  locale        text,
  created_at    timestamptz not null default now()
);

comment on table public.analytics_events is
  'Événements bruts (pageviews + clics). Aucune donnée personnelle : visitor_hash est anonyme et tourne chaque jour. Purgé à 90 jours par purge_old_events().';
comment on column public.analytics_events.visitor_hash is
  'sha256(ip + user-agent + sel quotidien). L''IP n''est jamais écrite, elle n''existe qu''en mémoire le temps du hash.';

create index if not exists analytics_events_created_at_idx
  on public.analytics_events (created_at desc);
create index if not exists analytics_events_type_created_at_idx
  on public.analytics_events (event_type, created_at desc);
create index if not exists analytics_events_path_idx
  on public.analytics_events (path);
create index if not exists analytics_events_element_id_idx
  on public.analytics_events (element_id);
create index if not exists analytics_events_visitor_created_at_idx
  on public.analytics_events (visitor_hash, created_at);

-- ---------------------------------------------------------------------
-- 2. Agrégat quotidien (garde le projet dans les limites du tier gratuit)
-- ---------------------------------------------------------------------
-- element_id fait partie de la clé primaire : il ne peut donc pas être NULL.
-- Les pageviews utilisent la chaîne vide '' comme valeur sentinelle.
create table if not exists public.analytics_daily (
  day             date not null,
  event_type      text not null check (event_type in ('pageview', 'click')),
  path            text not null,
  element_id      text not null default '',
  element_label   text,
  pageviews       int  not null default 0,
  unique_visitors int  not null default 0,
  sessions        int  not null default 0,
  primary key (day, event_type, path, element_id)
);

comment on table public.analytics_daily is
  'Rollup quotidien alimenté par rollup_analytics(). Le dashboard lit cette table pour les jours passés et analytics_events pour aujourd''hui.';
comment on column public.analytics_daily.element_label is
  'Libellé lisible du bouton, conservé pour le widget "Boutons les plus cliqués" (hors clé primaire).';

create index if not exists analytics_daily_day_idx
  on public.analytics_daily (day desc);
create index if not exists analytics_daily_type_day_idx
  on public.analytics_daily (event_type, day desc);

-- ---------------------------------------------------------------------
-- 3. Administrateurs autorisés à lire le dashboard
-- ---------------------------------------------------------------------
create table if not exists public.admin_users (
  id         uuid primary key references auth.users(id) on delete cascade,
  email      text unique not null,
  role       text not null default 'admin',
  created_at timestamptz not null default now()
);

comment on table public.admin_users is
  'Liste blanche : être authentifié ne suffit pas, il faut figurer ici pour accéder au dashboard.';

-- ---------------------------------------------------------------------
-- 4. RLS — activée partout
-- ---------------------------------------------------------------------
alter table public.analytics_events enable row level security;
alter table public.analytics_daily  enable row level security;
alter table public.admin_users      enable row level security;

-- Le rôle service_role (utilisé côté serveur uniquement) contourne la RLS :
-- aucune policy d'insertion n'est donc nécessaire, et aucune n'est créée.
-- Conséquence : personne ne peut écrire dans ces tables avec la clé anon.

-- Défense en profondeur : on retire les droits au rôle anonyme.
revoke all on public.analytics_events from anon;
revoke all on public.analytics_daily  from anon;
revoke all on public.admin_users      from anon;

-- Lecture réservée aux administrateurs listés dans admin_users.
drop policy if exists analytics_events_admin_select on public.analytics_events;
create policy analytics_events_admin_select
  on public.analytics_events
  for select
  to authenticated
  using (exists (select 1 from public.admin_users a where a.id = auth.uid()));

drop policy if exists analytics_daily_admin_select on public.analytics_daily;
create policy analytics_daily_admin_select
  on public.analytics_daily
  for select
  to authenticated
  using (exists (select 1 from public.admin_users a where a.id = auth.uid()));

-- Un administrateur peut vérifier sa propre appartenance (et rien d'autre).
drop policy if exists admin_users_self_select on public.admin_users;
create policy admin_users_self_select
  on public.admin_users
  for select
  to authenticated
  using (id = auth.uid());
