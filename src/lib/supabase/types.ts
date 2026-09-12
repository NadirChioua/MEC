/**
 * Types de la base analytics MEC.
 * Écrits à la main et alignés sur /supabase/migrations/0001_analytics.sql.
 */

export type EventType = "pageview" | "click";
export type Device = "mobile" | "tablet" | "desktop";

export type AnalyticsEventRow = {
  id: number;
  event_type: EventType;
  path: string;
  element_id: string | null;
  element_label: string | null;
  visitor_hash: string;
  session_id: string;
  referrer: string | null;
  device: Device | null;
  country: string | null;
  locale: string | null;
  created_at: string;
};

export type AnalyticsEventInsert = Omit<AnalyticsEventRow, "id" | "created_at">;

export type AnalyticsDailyRow = {
  day: string;
  event_type: EventType;
  path: string;
  element_id: string;
  element_label: string | null;
  pageviews: number;
  unique_visitors: number;
  sessions: number;
};

export type AdminUserRow = {
  id: string;
  email: string;
  role: string;
  created_at: string;
};

/* ------------------------------------------------------------------ */
/* Retours des fonctions de lecture du dashboard (0003_dashboard_api)  */
/* ------------------------------------------------------------------ */

export type DateRangeArgs = { range_start: string; range_end: string };

export type KpiRow = {
  pageviews: number;
  unique_visitors: number;
  sessions: number;
  form_submits: number;
};

export type TimeseriesRow = {
  day: string;
  pageviews: number;
  visitors: number;
};

export type TopPageRow = {
  path: string;
  pageviews: number;
  unique_visitors: number;
};

export type TopButtonRow = {
  element_id: string;
  element_label: string | null;
  clicks: number;
  unique_clickers: number;
  exposure_pageviews: number;
  click_through_rate: number | null;
};

export type BreakdownRow = {
  dimension: "device" | "country" | "locale" | "referrer";
  value: string;
  visitors: number;
  events: number;
};

export type ContactFunnelRow = {
  contact_pageviews: number;
  contact_visitors: number;
  submit_clicks: number;
  conversion_rate: number | null;
};

export type Database = {
  public: {
    Tables: {
      analytics_events: {
        Row: AnalyticsEventRow;
        Insert: AnalyticsEventInsert;
        Update: Partial<AnalyticsEventInsert>;
        Relationships: [];
      };
      analytics_daily: {
        Row: AnalyticsDailyRow;
        Insert: AnalyticsDailyRow;
        Update: Partial<AnalyticsDailyRow>;
        Relationships: [];
      };
      admin_users: {
        Row: AdminUserRow;
        Insert: Omit<AdminUserRow, "created_at"> & { created_at?: string };
        Update: Partial<AdminUserRow>;
        Relationships: [];
      };
    };
    Views: Record<never, never>;
    Functions: {
      rollup_analytics: {
        Args: { target_day: string };
        Returns: number;
      };
      purge_old_events: {
        Args: Record<never, never>;
        Returns: number;
      };
      dashboard_kpis: {
        Args: DateRangeArgs;
        Returns: KpiRow[];
      };
      dashboard_timeseries: {
        Args: DateRangeArgs;
        Returns: TimeseriesRow[];
      };
      dashboard_top_pages: {
        Args: DateRangeArgs & { max_rows?: number };
        Returns: TopPageRow[];
      };
      dashboard_top_buttons: {
        Args: DateRangeArgs & { max_rows?: number };
        Returns: TopButtonRow[];
      };
      dashboard_breakdowns: {
        Args: DateRangeArgs;
        Returns: BreakdownRow[];
      };
      dashboard_contact_funnel: {
        Args: DateRangeArgs;
        Returns: ContactFunnelRow[];
      };
    };
    Enums: Record<never, never>;
    CompositeTypes: Record<never, never>;
  };
};
