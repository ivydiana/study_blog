import Link from "next/link";

export function PageIntroCard({ eyebrow, title, description, backHref = "/", backLabel = "Back home" }) {
  return (
    <section className="surface rounded-card p-6 md:p-7">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent/90">
        {eyebrow}
      </p>
      <h1 className="editorial-title mt-3 text-[2.6rem] leading-[0.96] text-ink md:text-[3rem]">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
        {description}
      </p>
      <Link
        href={backHref}
        className="mt-5 inline-flex text-sm font-medium text-accent transition-colors duration-300 hover:text-ink"
      >
        {backLabel}
      </Link>
    </section>
  );
}
