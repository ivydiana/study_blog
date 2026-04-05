import { PageIntroCard } from "@/components/PageIntroCard";
import { tags } from "@/lib/site-data";

export default function TagsPage() {
  return (
    <main className="min-h-screen bg-canvas px-6 py-8 text-ink md:px-10 md:py-10">
      <div className="mx-auto max-w-[1000px] space-y-6">
        <PageIntroCard
          eyebrow="Tags"
          title="Tag library"
          description="A placeholder tag index page so the homepage tag heading routes somewhere real."
        />

        <section className="surface rounded-card p-6 md:p-7">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="pill px-4 py-2 text-[14px] font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
