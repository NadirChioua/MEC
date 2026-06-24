type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, string[]> = {
  strategy: ["M4 19V5l6 4 6-4 4 3v11l-6-4-6 4-4-3Z", "M10 9v10", "M16 5v10"],
  consulting: ["M6 18v-5", "M12 18V6", "M18 18v-9", "M4 18h16"],
  finance: ["M4 17l5-5 4 4 7-8", "M16 8h4v4"],
  document: ["M7 3h7l4 4v14H7V3Z", "M14 3v5h5", "M10 13h6", "M10 17h6"],
  growth: ["M4 18h16", "M7 15l4-4 3 3 5-7", "M16 7h3v3"],
  globe: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", "M3 12h18", "M12 3c3 3 3 15 0 18", "M12 3c-3 3-3 15 0 18"],
  shield: ["M12 22s7-3 7-10V5l-7-3-7 3v7c0 7 7 10 7 10Z", "M9 12l2 2 4-5"],
  partnership: ["M8 12l3 3 5-6", "M4 14l4-4 4 4 8-8", "M4 20h16"],
  market: ["M4 17V7", "M8 17v-5", "M12 17V4", "M16 17v-8", "M20 17v-2", "M3 20h18"],
  phone: ["M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z"],
  email: ["M4 5h16v14H4V5Z", "m4 7 8 6 8-6"],
  location: ["M12 21s7-5.3 7-11a7 7 0 0 0-14 0c0 5.7 7 11 7 11Z", "M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"],
  time: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", "M12 7v5l3 2"],
  check: ["M20 6 9 17l-5-5"],
  arrow: ["M5 12h14", "m13 6 6 6-6 6"],
  menu: ["M4 7h16", "M4 12h16", "M4 17h16"],
  close: ["M6 6l12 12", "M18 6 6 18"],
  search: ["M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z", "m16 16 4 4"]
};

export function Icon({ name, className = "" }: IconProps) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[name]?.map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}
