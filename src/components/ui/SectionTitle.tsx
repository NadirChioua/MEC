type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
};

export function SectionTitle({ eyebrow, title, text, center = false }: SectionTitleProps) {
  return (
    <div className={`section-title ${center ? "center" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p className="lead" style={{ marginTop: 14 }}>{text}</p> : null}
    </div>
  );
}
