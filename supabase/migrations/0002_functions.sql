-- =====================================================================
-- MEC — Fonctions d'agrégation et de purge
-- Idempotent : create or replace.
-- =====================================================================

-- ---------------------------------------------------------------------
-- rollup_analytics(target_day)
--   Agrège analytics_events -> analytics_daily pour un jour donné (UTC).
--   Rejouable : le jour ciblé est d'abord effacé, donc relancer la
--   fonction deux fois ne double pas les chiffres.
-- ---------------------------------------------------------------------
create or replace function public.rollup_analytics(target_day date)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  inserted_count integer;
  day_start timestamptz := (target_day::timestamp at time zone 'UTC');
  day_end   timestamptz := ((target_day + 1)::timestamp at time zone 'UTC');
begin
  delete from analytics_daily where day = target_day;

  insert into analytics_daily (
    day, event_type, path, element_id, element_label,
    pageviews, unique_visitors, sessions
  )
  select
    target_day,
    e.event_type,
    e.path,
    coalesce(e.element_id, ''),
    max(e.element_label),
    count(*)::int,
    count(distinct e.visitor_hash)::int,
    count(distinct e.session_id)::int
  from analytics_events e
  where e.created_at >= day_start
    and e.created_at <  day_end
  group by e.event_type, e.path, coalesce(e.element_id, '');

  get diagnostics inserted_count = row_count;
  return inserted_count;
end;
$$;

comment on function public.rollup_analytics(date) is
  'Agrège les événements bruts d''un jour (UTC) dans analytics_daily. Rejouable sans doublon.';

-- ---------------------------------------------------------------------
-- purge_old_events()
--   Supprime les événements de plus de 90 jours. Les agrégats
--   quotidiens, eux, sont conservés (ils ne contiennent aucun hash).
-- ---------------------------------------------------------------------
create or replace function public.purge_old_events()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  deleted_count integer;
begin
  delete from analytics_events
  where created_at < now() - interval '90 days';

  get diagnostics deleted_count = row_count;
  return deleted_count;
end;
$$;

comment on function public.purge_old_events() is
  'Supprime les événements bruts de plus de 90 jours (rétention CNDP / RGPD).';

-- ---------------------------------------------------------------------
-- Ces fonctions ne doivent être appelables que par le serveur.
-- ---------------------------------------------------------------------
revoke all on function public.rollup_analytics(date) from public, anon, authenticated;
revoke all on function public.purge_old_events()     from public, anon, authenticated;
grant execute on function public.rollup_analytics(date) to service_role;
grant execute on function public.purge_old_events()     to service_role;
