import Link from "next/link";

export function CategoryCard({ items }) {
  return (
    <section className="surface rounded-card p-5">
      <Link
        href="/categories"
        className="editorial-title text-[1.55rem] text-ink transition-colors duration-300 hover:text-accent"
      >
        Categories
      </Link>

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <Link
            key={item.name}
            href={`/categories/${item.slug}`}
            className="flex items-center justify-between gap-3 text-[16px] text-ink/85"
          >
            <span className="transition-colors duration-300 hover:text-accent">
              {item.name}
            </span>
            <span className="pill min-w-8 px-2.5 py-0.5 text-center text-[12px] text-muted">
              {item.count}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
