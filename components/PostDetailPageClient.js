"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { assetPath } from "@/lib/assets";
import { getInitialTheme } from "@/lib/theme";

export function PostDetailPageClient({ post }) {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <main className="min-h-screen bg-canvas text-ink transition-colors duration-300">
      <Navbar
        isDark={isDark}
        searchOpen={searchOpen}
        searchValue={searchValue}
        resultCount={1}
        onSearchChange={setSearchValue}
        onToggleSearch={() => setSearchOpen((open) => !open)}
        onToggleTheme={() => setIsDark((dark) => !dark)}
      />

      <div className="px-6 pb-12 pt-8 md:px-10 md:pb-16 md:pt-10">
        <div className="mx-auto max-w-[1180px]">
          <section className="mx-auto max-w-[760px]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.08em] text-muted transition-colors duration-300 hover:text-accent"
            >
              <ArrowLeft className="h-3.5 w-3.5 stroke-[1.8]" />
              Back to Home
            </Link>

            <div className="mt-7">
              <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-accent/90">
                {post.category}
              </p>
              <h1 className="editorial-title mt-4 text-[2.9rem] leading-[0.96] text-ink md:text-[3.7rem]">
                {post.title}
              </h1>
              <p className="mt-4 max-w-[42rem] text-[15px] leading-7 text-muted md:text-[16px]">
                {post.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 stroke-[1.8]" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 stroke-[1.8]" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <div className="mt-8 w-full">
              <section className="surface overflow-hidden rounded-card">
                <div className="relative aspect-[2.18/1] w-full">
                  <Image
                    src={assetPath(post.image)}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </section>
            </div>

            <article className="mt-8 border-t border-line/70 pt-8">
              <div className="mx-auto max-w-[42rem] space-y-6 text-[16px] leading-8 text-muted">
                <p>
                  This is a placeholder reading page for <strong className="text-ink">{post.title}</strong>,
                  designed to feel cinematic, quiet, and editorial rather than template-like.
                </p>
                <p>
                  The structure is now ready for rich article content: markdown rendering, section blocks,
                  image inserts, pull quotes, or footnotes can all be layered in without changing the
                  overall rhythm of the page.
                </p>
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}
