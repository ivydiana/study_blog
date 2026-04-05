"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { getInitialTheme } from "@/lib/theme";

export function CategoriesPageClient({ categoryGroups }) {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const filteredGroups = searchValue.trim()
    ? categoryGroups.filter((group) =>
        [group.name, ...group.posts.map((post) => `${post.title} ${post.excerpt}`)]
          .join(" ")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    : categoryGroups;

  return (
    <main className="min-h-screen bg-canvas text-ink transition-colors duration-300">
      <Navbar
        isDark={isDark}
        searchOpen={searchOpen}
        searchValue={searchValue}
        resultCount={filteredGroups.length}
        onSearchChange={setSearchValue}
        onToggleSearch={() => setSearchOpen((open) => !open)}
        onToggleTheme={() => setIsDark((dark) => !dark)}
      />

      <div className="mx-auto max-w-[1360px] px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[980px]">
          <section className="surface rounded-card px-6 py-7 md:px-8 md:py-8">
            <div className="max-w-[560px]">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent/90">
                Categories
              </p>
              <h1 className="editorial-title mt-3 text-[2.2rem] leading-[0.98] text-ink md:text-[2.6rem]">
                Browse by category
              </h1>
              <p className="mt-3 text-[14px] leading-7 text-muted">
                A quieter category archive with small previews, arranged in the same refined rhythm as the timeline.
              </p>
            </div>

            <div className="mt-8">
              {filteredGroups.map((group, index) => (
                <section
                  key={group.slug}
                  className={`${index === filteredGroups.length - 1 ? "" : "border-b border-line/70 pb-8"} ${
                    index > 0 ? "pt-8" : ""
                  }`}
                >
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent/85">
                        {group.count} post{group.count > 1 ? "s" : ""}
                      </p>
                      <h2 className="editorial-title mt-2 text-[1.9rem] leading-[1.04] text-ink">
                        {group.name}
                      </h2>
                    </div>

                    <Link
                      href={`/categories/${group.slug}`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent transition-colors duration-300 hover:text-ink"
                    >
                      View all
                      <ArrowUpRight className="h-3.5 w-3.5 stroke-[1.8]" />
                    </Link>
                  </div>

                  <div className="mt-6 space-y-5">
                    {group.posts.slice(0, 3).map((post, postIndex) => (
                      <article
                        key={post.slug}
                        className={`grid grid-cols-[76px_20px_minmax(0,1fr)] gap-x-4 ${
                          postIndex === group.posts.slice(0, 3).length - 1 ? "" : "pb-5"
                        }`}
                      >
                        <div className="pt-0.5 text-right text-[12px] leading-6 text-muted">
                          {post.date}
                        </div>

                        <div className="relative flex justify-center">
                          <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-accent/80" />
                          {postIndex !== group.posts.slice(0, 3).length - 1 ? (
                            <span className="absolute top-5 bottom-0 w-px bg-line" />
                          ) : null}
                        </div>

                        <div>
                          <Link
                            href={`/posts/${post.slug}`}
                            className="editorial-title block text-[1.45rem] leading-[1.08] text-ink transition-colors duration-300 hover:text-accent"
                          >
                            {post.title}
                          </Link>
                          <p className="mt-2 max-w-[58ch] text-[14px] leading-7 text-muted">
                            {post.excerpt}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}

              {searchValue && filteredGroups.length === 0 ? (
                <p className="pt-2 text-[14px] leading-7 text-muted">
                  No matching categories.
                </p>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
