-- =====================================================================
-- MEC — Indicateurs de contact (WhatsApp, appels, emails, formulaires)
--
-- Aucun nouveau stockage : ces fonctions relisent les clics déjà
-- enregistrés (analytics_daily + analytics_events) et les classent par
-- canal de contact d'après leur identifiant data-track :
--
--   whatsapp : identifiant contenant "whatsapp"   (ex. floating-whatsapp)
--   phone    : identifiant contenant phone / tel / call (ex. footer-phone)
--   email    : identifiant contenant email / mail       (ex. topbar-email)
--   form     : contact-form-success (envoi réussi du formulaire)
--
-- Le tracker attribue aussi automatiquement auto-whatsapp, auto-phone et
-- auto-email aux liens wa.me / tel: / mailto: sans data-track.
--
-- Comme 0003 : SECURITY INVOKER, la RLS s'applique, lecture réservée aux
-- comptes présents dans admin_users.
-- =====================================================================

-- ---------------------------------------------------------------------
-- Canal de contact d'un identifiant de clic (null = pas un contact)
-- ---------------------------------------------------------------------
create or replace function public.contact_channel(element_id text)
returns text
language sql
immutable
as $$
  select case
    when element_id is null or element_id = '' then null
    when element_id = 'contact-form-success' then 'form'
    when element_id ~* 'whatsapp' then 'whatsapp'
    when element_id ~* '(^|-)(phone|tel|call)(-|$)' then 'phone'
    when element_id ~* '(^|-)(e?mail)(-|$)' then 'email'
    else null
  end;
$$;

comment on function public.contact_channel(text) is
  'Classe un identifiant data-track en canal de contact : whatsapp, phone, email, form, ou null.';

-- ---------------------------------------------------------------------
-- 1. Contacts par canal (pour les KPI)
-- ---------------------------------------------------------------------
create or replace function public.dashboard_contact_channels(range_start date, range_end date)
returns table (
  channel text,
  contacts bigint,
  unique_contacts bigint
)
language sql
stable
as $$
  select
    contact_channel(m.element_id) as channel,
    sum(m.events)::bigint,
    sum(m.unique_visitors)::bigint
  from dashboard_merged(range_start, range_end) m
  where m.event_type = 'click'
    and contact_channel(m.element_id) is not null
  group by 1;
$$;

-- ---------------------------------------------------------------------
-- 2. Pages qui génèrent des contacts
-- ---------------------------------------------------------------------
create or replace function public.dashboard_contact_pages(range_start date, range_end date, max_rows int default 15)
returns table (
  path text,
  whatsapp bigint,
  phone bigint,
  email bigint,
  form bigint,
  total bigint
)
language sql
stable
as $$
  with c as (
    select m.path, contact_channel(m.element_id) as channel, m.events
    from dashboard_merged(range_start, range_end) m
    where m.event_type = 'click'
      and contact_channel(m.element_id) is not null
  )
  select
    c.path,
    coalesce(sum(c.events) filter (where c.channel = 'whatsapp'), 0)::bigint,
    coalesce(sum(c.events) filter (where c.channel = 'phone'), 0)::bigint,
    coalesce(sum(c.events) filter (where c.channel = 'email'), 0)::bigint,
    coalesce(sum(c.events) filter (where c.channel = 'form'), 0)::bigint,
    sum(c.events)::bigint
  from c
  group by c.path
  order by 6 desc
  limit max_rows;
$$;

-- ---------------------------------------------------------------------
-- 3. Contacts par langue, pays et appareil
--    (dimensions disponibles uniquement dans analytics_events, 90 jours)
-- ---------------------------------------------------------------------
create or replace function public.dashboard_contact_breakdowns(range_start date, range_end date)
returns table (
  dimension text,
  value text,
  contacts bigint
)
language sql
stable
as $$
  with scoped as (
    select *
    from analytics_events e
    where e.created_at >= (range_start::timestamp at time zone 'utc')
      and e.created_at <  ((range_end + 1)::timestamp at time zone 'utc')
      and e.event_type = 'click'
      and contact_channel(e.element_id) is not null
  )
  select 'locale', coalesce(locale, 'inconnu'), count(*)::bigint from scoped group by 2
  union all
  select 'country', coalesce(country, 'inconnu'), count(*)::bigint from scoped group by 2
  union all
  select 'device', coalesce(device, 'inconnu'), count(*)::bigint from scoped group by 2;
$$;

-- ---------------------------------------------------------------------
-- Droits
-- ---------------------------------------------------------------------
revoke all on function public.contact_channel(text)                          from public, anon;
revoke all on function public.dashboard_contact_channels(date, date)         from public, anon;
revoke all on function public.dashboard_contact_pages(date, date, int)       from public, anon;
revoke all on function public.dashboard_contact_breakdowns(date, date)       from public, anon;

grant execute on function public.contact_channel(text)                       to authenticated;
grant execute on function public.dashboard_contact_channels(date, date)      to authenticated;
grant execute on function public.dashboard_contact_pages(date, date, int)    to authenticated;
grant execute on function public.dashboard_contact_breakdowns(date, date)    to authenticated;
