import Link from "next/link";

export function TagsCard({ tags }) {
  return (
    <section className="surface rounded-card p-5">
      <Link
        href="/tags"
        className="editorial-title text-[1.55rem] text-ink transition-colors duration-300 hover:text-accent"
      >
        Tags
      </Link>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="pill px-3 py-1 text-[12px] font-medium text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
