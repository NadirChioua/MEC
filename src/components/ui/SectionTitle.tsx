import { tr } from "@/lib/i18n-server";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
};

export function SectionTitle({ eyebrow, title, text, center = false }: SectionTitleProps) {
  return (
    <div className={`section-title ${center ? "center" : ""}`}>
      {eyebrow ? <p className="eyebrow">{tr(eyebrow)}</p> : null}
      <h2>{tr(title)}</h2>
      {text ? <p className="lead" style={{ marginTop: 14 }}>{tr(text)}</p> : null}
    </div>
  );
}
