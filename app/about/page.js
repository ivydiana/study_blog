import { PageIntroCard } from "@/components/PageIntroCard";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-canvas px-6 py-8 text-ink md:px-10 md:py-10">
      <div className="mx-auto max-w-[900px] space-y-6">
        <PageIntroCard
          eyebrow="About"
          title="Ivy Ding"
          description="A placeholder about page for the profile card. You can later replace this with bio, work, writing philosophy, and selected links."
        />
      </div>
    </main>
  );
}
