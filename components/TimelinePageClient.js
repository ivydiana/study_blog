"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { getInitialTheme } from "@/lib/theme";

export function TimelinePageClient({ posts }) {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const filteredPosts = searchValue.trim()
    ? posts.filter((post) =>
        [post.title, post.category, post.excerpt, ...(post.tags || [])]
          .join(" ")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    : posts;

  return (
    <main className="min-h-screen bg-canvas text-ink transition-colors duration-300">
      <Navbar
        isDark={isDark}
        searchOpen={searchOpen}
        searchValue={searchValue}
        resultCount={filteredPosts.length}
        onSearchChange={setSearchValue}
        onToggleSearch={() => setSearchOpen((open) => !open)}
        onToggleTheme={() => setIsDark((dark) => !dark)}
      />

      <div className="mx-auto max-w-[1360px] px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[980px]">
          <section className="surface rounded-card px-6 py-7 md:px-8 md:py-8">
            <div className="max-w-[560px]">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent/90">
                Timeline
              </p>
              <h1 className="editorial-title mt-3 text-[2.2rem] leading-[0.98] text-ink md:text-[2.6rem]">
                Notes arranged in time
              </h1>
              <p className="mt-3 text-[14px] leading-7 text-muted">
                A quieter chronological archive for essays, technical notes, and small returns to writing.
              </p>
            </div>

            <div className="mt-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className={`grid grid-cols-[76px_20px_minmax(0,1fr)] gap-x-4 ${
                    index === filteredPosts.length - 1 ? "" : "pb-8"
                  }`}
                >
                  <div className="pt-0.5 text-right text-[12px] leading-6 text-muted">
                    {post.date}
                  </div>

                  <div className="relative flex justify-center">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-accent/80" />
                    {index !== filteredPosts.length - 1 ? (
                      <span className="absolute top-5 bottom-0 w-px bg-line" />
                    ) : null}
                  </div>

                  <div className="pb-1">
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent/85">
                      {post.category}
                    </p>
                    <Link
                      href={`/posts/${post.slug}`}
                      className="editorial-title mt-2 block text-[1.55rem] leading-[1.08] text-ink transition-colors duration-300 hover:text-accent"
                    >
                      {post.title}
                    </Link>
                    <p className="mt-2 max-w-[58ch] text-[14px] leading-7 text-muted">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}

              {searchValue && filteredPosts.length === 0 ? (
                <p className="pt-2 text-[14px] leading-7 text-muted">
                  No matching entries in the timeline.
                </p>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
