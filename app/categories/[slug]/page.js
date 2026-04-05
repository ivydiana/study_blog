import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntroCard } from "@/components/PageIntroCard";
import { getCategoryBySlug, getPostsByCategory } from "@/lib/site-data";

export default async function CategoryDetailPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(slug);

  return (
    <main className="min-h-screen bg-canvas px-6 py-8 text-ink md:px-10 md:py-10">
      <div className="mx-auto max-w-[1000px] space-y-6">
        <PageIntroCard
          eyebrow="Category"
          title={category.name}
          description={`Posts grouped under ${category.name}. This placeholder page is ready to be expanded into a real category archive.`}
          backHref="/categories"
          backLabel="View all categories"
        />

        <section className="surface rounded-card p-6 md:p-7">
          <div className="space-y-5">
            {posts.length ? (
              posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="block border-b border-line/70 pb-5 transition-colors duration-300 last:border-0 last:pb-0 hover:text-accent"
                >
                  <p className="text-sm text-muted">{post.date}</p>
                  <h2 className="editorial-title mt-1 text-[2rem] text-ink">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-7 text-muted">{post.excerpt}</p>
                </Link>
              ))
            ) : (
              <p className="text-[15px] text-muted">No posts in this category yet.</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
