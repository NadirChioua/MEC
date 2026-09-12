-- =====================================================================
-- MEC — Fonctions de lecture du dashboard
--
-- Toutes ces fonctions sont en SECURITY INVOKER (comportement par défaut) :
-- elles s'exécutent avec les droits de l'appelant, donc la RLS s'applique
-- pleinement. Un compte authentifié absent de admin_users obtient zéro
-- ligne, exactement comme s'il interrogeait les tables directement.
--
-- Stratégie de lecture (exigence Phase 5) :
--   jours passés  -> analytics_daily (agrégat compact)
--   aujourd'hui   -> analytics_events (chiffres en direct)
--
-- Note de nommage : dans analytics_daily, la colonne `pageviews` porte le
-- nombre d'événements de la ligne. Pour une ligne event_type='click', elle
-- contient donc un nombre de CLICS, pas de pages vues.
--
-- Note "visiteurs uniques" : visitor_hash change chaque jour par
-- construction (sel quotidien). Additionner les uniques journaliers est
-- donc la seule lecture cohérente possible — et c'est aussi la plus
-- honnête vis-à-vis de la promesse de non-traçabilité.
-- =====================================================================

-- ---------------------------------------------------------------------
-- Vue interne : fusionne agrégats passés + événements du jour.
-- ---------------------------------------------------------------------
create or replace function public.dashboard_merged(range_start date, range_end date)
returns table (
  day date,
  event_type text,
  path text,
  element_id text,
  element_label text,
  events int,
  unique_visitors int,
  sessions int
)
language sql
stable
as $$
  with bounds as (
    select
      range_start as d0,
      range_end   as d1,
      (now() at time zone 'utc')::date as today
  )
  select d.day, d.event_type, d.path, d.element_id, d.element_label,
         d.pageviews, d.unique_visitors, d.sessions
  from analytics_daily d, bounds b
  where d.day >= b.d0
    and d.day <= least(b.d1, b.today - 1)

  union all

  select
    b.today,
    e.event_type,
    e.path,
    coalesce(e.element_id, ''),
    max(e.element_label),
    count(*)::int,
    count(distinct e.visitor_hash)::int,
    count(distinct e.session_id)::int
  from analytics_events e, bounds b
  where b.d1 >= b.today
    and e.created_at >= (b.today::timestamp at time zone 'utc')
  group by b.today, e.event_type, e.path, coalesce(e.element_id, '');
$$;

comment on function public.dashboard_merged(date, date) is
  'Source unique du dashboard : agrégats quotidiens pour les jours passés, événements bruts pour aujourd''hui.';

-- ---------------------------------------------------------------------
-- 1. KPI de tête
-- ---------------------------------------------------------------------
create or replace function public.dashboard_kpis(range_start date, range_end date)
returns table (
  pageviews bigint,
  unique_visitors bigint,
  sessions bigint,
  form_submits bigint
)
language sql
stable
as $$
  with m as (select * from dashboard_merged(range_start, range_end))
  select
    coalesce(sum(events)           filter (where event_type = 'pageview'), 0)::bigint,
    coalesce(sum(unique_visitors)  filter (where event_type = 'pageview'), 0)::bigint,
    coalesce(sum(sessions)         filter (where event_type = 'pageview'), 0)::bigint,
    coalesce(sum(events)           filter (where event_type = 'click'
                                             and element_id = 'contact-form-submit'), 0)::bigint
  from m;
$$;

comment on function public.dashboard_kpis(date, date) is
  'Visiteurs uniques, pages vues, sessions et formulaires envoyés (clics sur contact-form-submit).';

-- ---------------------------------------------------------------------
-- 2. Courbe : visiteurs + pages vues par jour
-- ---------------------------------------------------------------------
create or replace function public.dashboard_timeseries(range_start date, range_end date)
returns table (
  day date,
  pageviews bigint,
  visitors bigint
)
language sql
stable
as $$
  -- generate_series garantit une courbe continue : les jours sans trafic
  -- apparaissent à zéro au lieu d'être absents du graphique.
  select
    series.day::date,
    coalesce(sum(m.events)          filter (where m.event_type = 'pageview'), 0)::bigint,
    coalesce(sum(m.unique_visitors) filter (where m.event_type = 'pageview'), 0)::bigint
  from generate_series(range_start, range_end, interval '1 day') as series(day)
  left join dashboard_merged(range_start, range_end) m
    on m.day = series.day::date
  group by series.day
  order by series.day;
$$;

-- ---------------------------------------------------------------------
-- 3. Pages les plus vues
-- ---------------------------------------------------------------------
create or replace function public.dashboard_top_pages(range_start date, range_end date, max_rows int default 15)
returns table (
  path text,
  pageviews bigint,
  unique_visitors bigint
)
language sql
stable
as $$
  select
    m.path,
    sum(m.events)::bigint,
    sum(m.unique_visitors)::bigint
  from dashboard_merged(range_start, range_end) m
  where m.event_type = 'pageview'
  group by m.path
  order by 2 desc
  limit max_rows;
$$;

-- ---------------------------------------------------------------------
-- 4. Boutons les plus cliqués  (widget central)
--
-- Le taux de clic rapporte les clics d'un bouton aux pages vues des pages
-- où ce bouton a effectivement été cliqué. Un bouton présent partout (ex.
-- le WhatsApp flottant) est donc comparé à l'audience réelle qu'il a vue,
-- et non au trafic total du site.
-- ---------------------------------------------------------------------
create or replace function public.dashboard_top_buttons(range_start date, range_end date, max_rows int default 20)
returns table (
  element_id text,
  element_label text,
  clicks bigint,
  unique_clickers bigint,
  exposure_pageviews bigint,
  click_through_rate numeric
)
language sql
stable
as $$
  with m as (select * from dashboard_merged(range_start, range_end)),
  clicks as (
    select
      m.element_id,
      max(m.element_label) as element_label,
      sum(m.events)::bigint as clicks,
      sum(m.unique_visitors)::bigint as unique_clickers,
      array_agg(distinct m.path) as paths
    from m
    where m.event_type = 'click' and m.element_id <> ''
    group by m.element_id
  ),
  page_views as (
    select m.path, sum(m.events)::bigint as pageviews
    from m
    where m.event_type = 'pageview'
    group by m.path
  ),
  exposure as (
    select
      c.element_id,
      coalesce(sum(p.pageviews), 0)::bigint as exposure_pageviews
    from clicks c
    left join page_views p on p.path = any (c.paths)
    group by c.element_id
  )
  select
    c.element_id,
    c.element_label,
    c.clicks,
    c.unique_clickers,
    e.exposure_pageviews,
    case
      when e.exposure_pageviews > 0
        then round((c.clicks::numeric / e.exposure_pageviews) * 100, 1)
      else null
    end
  from clicks c
  join exposure e on e.element_id = c.element_id
  order by c.clicks desc
  limit max_rows;
$$;

comment on function public.dashboard_top_buttons(date, date, int) is
  'Boutons triés par clics. click_through_rate = clics / pages vues des pages où le bouton a été cliqué.';

-- ---------------------------------------------------------------------
-- 5. Répartitions (appareil, pays, langue, source)
--
-- Ces dimensions n'existent pas dans analytics_daily : elles sont lues
-- directement dans analytics_events, disponible sur toute la fenêtre de
-- rétention de 90 jours — ce qui couvre la période maximale du dashboard.
-- ---------------------------------------------------------------------
create or replace function public.dashboard_breakdowns(range_start date, range_end date)
returns table (
  dimension text,
  value text,
  visitors bigint,
  events bigint
)
language sql
stable
as $$
  with scoped as (
    select *
    from analytics_events e
    where e.created_at >= (range_start::timestamp at time zone 'utc')
      and e.created_at <  ((range_end + 1)::timestamp at time zone 'utc')
      and e.event_type = 'pageview'
  )
  select 'device', coalesce(device, 'inconnu'),
         count(distinct visitor_hash)::bigint, count(*)::bigint
  from scoped group by 2
  union all
  select 'country', coalesce(country, 'inconnu'),
         count(distinct visitor_hash)::bigint, count(*)::bigint
  from scoped group by 2
  union all
  select 'locale', coalesce(locale, 'inconnu'),
         count(distinct visitor_hash)::bigint, count(*)::bigint
  from scoped group by 2
  union all
  select 'referrer', coalesce(nullif(referrer, ''), 'direct'),
         count(distinct visitor_hash)::bigint, count(*)::bigint
  from scoped group by 2;
$$;

-- ---------------------------------------------------------------------
-- 6. Parcours vers le contact (remplace la section "Leads")
--
-- Pas de table de leads : les demandes restent dans la boîte email. On ne
-- mesure ici que le chemin qui y mène.
-- ---------------------------------------------------------------------
create or replace function public.dashboard_contact_funnel(range_start date, range_end date)
returns table (
  contact_pageviews bigint,
  contact_visitors bigint,
  submit_clicks bigint,
  conversion_rate numeric
)
language sql
stable
as $$
  with m as (select * from dashboard_merged(range_start, range_end)),
  views as (
    select
      coalesce(sum(events), 0)::bigint as pv,
      coalesce(sum(unique_visitors), 0)::bigint as uv
    from m
    where event_type = 'pageview' and path = '/contact'
  ),
  submits as (
    select coalesce(sum(events), 0)::bigint as clicks
    from m
    where event_type = 'click' and element_id = 'contact-form-submit'
  )
  select
    views.pv,
    views.uv,
    submits.clicks,
    case
      when views.pv > 0 then round((submits.clicks::numeric / views.pv) * 100, 1)
      else null
    end
  from views, submits;
$$;

-- ---------------------------------------------------------------------
-- Droits : lecture réservée aux comptes authentifiés. La RLS fait le
-- reste du travail (seuls les membres de admin_users voient des lignes).
-- ---------------------------------------------------------------------
revoke all on function public.dashboard_merged(date, date)                from public, anon;
revoke all on function public.dashboard_kpis(date, date)                  from public, anon;
revoke all on function public.dashboard_timeseries(date, date)            from public, anon;
revoke all on function public.dashboard_top_pages(date, date, int)        from public, anon;
revoke all on function public.dashboard_top_buttons(date, date, int)      from public, anon;
revoke all on function public.dashboard_breakdowns(date, date)            from public, anon;
revoke all on function public.dashboard_contact_funnel(date, date)        from public, anon;

grant execute on function public.dashboard_merged(date, date)             to authenticated;
grant execute on function public.dashboard_kpis(date, date)               to authenticated;
grant execute on function public.dashboard_timeseries(date, date)         to authenticated;
grant execute on function public.dashboard_top_pages(date, date, int)     to authenticated;
grant execute on function public.dashboard_top_buttons(date, date, int)   to authenticated;
grant execute on function public.dashboard_breakdowns(date, date)         to authenticated;
grant execute on function public.dashboard_contact_funnel(date, date)     to authenticated;
