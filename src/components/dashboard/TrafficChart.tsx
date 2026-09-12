"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import type { TimeseriesRow } from "@/lib/supabase/types";

/**
 * Courbe visiteurs + pages vues.
 *
 * Les couleurs reprennent les tokens du site public (--color-secondary et
 * --color-accent) plutôt que la palette par défaut de recharts, pour que
 * le dashboard reste visuellement dans la même famille que le site.
 */

const VISITORS_COLOR = "#1f6f62";
const PAGEVIEWS_COLOR = "#c7923e";

function formatDay(day: string, compact: boolean) {
  const date = new Date(`${day}T00:00:00Z`);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: compact ? "2-digit" : "short",
    timeZone: "UTC"
  }).format(date);
}

export function TrafficChart({ data }: { data: TimeseriesRow[] }) {
  const compact = data.length > 31;
  const rows = data.map((row) => ({ ...row, label: formatDay(row.day, compact) }));

  return (
    <div className="dash-chart">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={rows} margin={{ top: 8, right: 8, bottom: 0, left: -18 }}>
          <defs>
            <linearGradient id="visitorsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={VISITORS_COLOR} stopOpacity={0.28} />
              <stop offset="100%" stopColor={VISITORS_COLOR} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="pageviewsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={PAGEVIEWS_COLOR} stopOpacity={0.24} />
              <stop offset="100%" stopColor={PAGEVIEWS_COLOR} stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#dbe4e1" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 12, fill: "#5d6d70" }}
            axisLine={{ stroke: "#dbe4e1" }}
            tickLine={false}
            interval="preserveStartEnd"
            minTickGap={18}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#5d6d70" }}
            axisLine={false}
            tickLine={false}
            allowDecimals={false}
            width={52}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              border: "1px solid #dbe4e1",
              boxShadow: "0 12px 30px rgba(16, 35, 39, 0.08)",
              fontSize: 13
            }}
            labelStyle={{ color: "#102327", fontWeight: 700 }}
          />
          <Legend wrapperStyle={{ fontSize: 13, paddingTop: 8 }} />

          <Area
            type="monotone"
            dataKey="visitors"
            name="Visiteurs uniques"
            stroke={VISITORS_COLOR}
            strokeWidth={2}
            fill="url(#visitorsFill)"
          />
          <Area
            type="monotone"
            dataKey="pageviews"
            name="Pages vues"
            stroke={PAGEVIEWS_COLOR}
            strokeWidth={2}
            fill="url(#pageviewsFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
