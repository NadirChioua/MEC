import Link from "next/link";
import { lp, tr } from "@/lib/i18n-server";

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
          <Link href={lp("/")}>{tr("Accueil")}</Link>
          {parent ? <> &gt; <Link href={parent === "Services" ? lp("/services") : "#"}>{tr(parent)}</Link></> : null}
          {" > "}
          <span>{tr(title)}</span>
        </div>
        <h1>{tr(title)}</h1>
        {intro ? <p className="lead" style={{ marginTop: 16 }}>{tr(intro)}</p> : null}
      </div>
    </section>
  );
}
