"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { assetPath } from "@/lib/assets";
import { postBodies } from "@/lib/site-data";
import { getInitialTheme } from "@/lib/theme";

export function PostDetailPageClient({ post }) {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const contentSections = postBodies[post.slug] ?? [];

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
              <div className="mx-auto max-w-[42rem] space-y-10 text-[15px] leading-8 text-muted md:text-[16px]">
                {contentSections.length > 0 ? (
                  contentSections.map((section) => (
                    <section key={section.title} className="space-y-4">
                      <h2 className="editorial-title text-[1.9rem] leading-[1.02] text-ink md:text-[2.2rem]">
                        {section.title}
                      </h2>

                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}

                      {section.bullets?.length ? (
                        <ul className="space-y-2 pl-5 text-muted marker:text-accent">
                          {section.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}

                      {section.code ? (
                        <pre className="overflow-x-auto rounded-[22px] border border-line/80 bg-black/25 px-5 py-4 text-[13px] leading-6 text-[#f3e7eb] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                          <code>{section.code}</code>
                        </pre>
                      ) : null}
                    </section>
                  ))
                ) : (
                  <>
                    <p>
                      This is a placeholder reading page for{" "}
                      <strong className="text-ink">{post.title}</strong>.
                    </p>
                    <p>
                      The structure is ready for future markdown rendering, section blocks, pull quotes,
                      and richer long-form content.
                    </p>
                  </>
                )}
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}
