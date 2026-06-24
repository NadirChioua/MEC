import Link from "next/link";

type PageHeroProps = {
  title: string;
  intro?: string;
  parent?: string;
};

export function PageHero({ title, intro, parent }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumbs">
          <Link href="/">Accueil</Link>
          {parent ? <> &gt; <Link href={parent === "Services" ? "/services" : "#"}>{parent}</Link></> : null}
          {" > "}
          <span>{title}</span>
        </div>
        <h1>{title}</h1>
        {intro ? <p className="lead" style={{ marginTop: 16 }}>{intro}</p> : null}
      </div>
    </section>
  );
}
