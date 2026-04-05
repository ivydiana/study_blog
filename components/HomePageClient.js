"use client";

import { useEffect, useMemo, useState } from "react";
import { CategoryCard } from "@/components/CategoryCard";
import { FeaturedPost } from "@/components/FeaturedPost";
import { Navbar } from "@/components/Navbar";
import { PostCard } from "@/components/PostCard";
import { ProfileCard } from "@/components/ProfileCard";
import { TagsCard } from "@/components/TagsCard";
import { getInitialTheme } from "@/lib/theme";

function matchesSearch(post, keyword) {
  const haystack = [
    post.category,
    post.title,
    post.excerpt,
    post.tag,
    ...(post.tags || [])
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(keyword.toLowerCase());
}

export function HomePageClient({ featuredPost, posts, categories, tags }) {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const filteredFeatured = useMemo(() => {
    if (!searchValue.trim()) {
      return featuredPost;
    }

    return matchesSearch(featuredPost, searchValue) ? featuredPost : null;
  }, [featuredPost, searchValue]);

  const filteredPosts = useMemo(() => {
    if (!searchValue.trim()) {
      return posts;
    }

    return posts.filter((post) => matchesSearch(post, searchValue));
  }, [posts, searchValue]);

  const resultCount = (filteredFeatured ? 1 : 0) + filteredPosts.length;
  return (
    <main className="min-h-screen bg-canvas text-ink transition-colors duration-300">
      <Navbar
        isDark={isDark}
        searchOpen={searchOpen}
        searchValue={searchValue}
        resultCount={resultCount}
        onSearchChange={setSearchValue}
        onToggleSearch={() => setSearchOpen((open) => !open)}
        onToggleTheme={() => setIsDark((dark) => !dark)}
      />

      <div className="mx-auto max-w-[1360px] px-6 py-8 md:px-10 md:py-10">
        <div className="grid gap-3 xl:grid-cols-[272px_minmax(0,1fr)_150px]">
          <aside className="space-y-5 xl:max-w-[272px]">
            <ProfileCard />
            <CategoryCard items={categories} />
            <TagsCard tags={tags} />
          </aside>

          <section className="space-y-5 xl:pl-4">
            {filteredFeatured ? <FeaturedPost post={filteredFeatured} /> : null}

            {searchValue && resultCount === 0 ? (
              <section className="surface rounded-card px-7 py-10 text-center">
                <h2 className="editorial-title text-[1.9rem] text-ink">
                  No matching posts
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-muted">
                  Try another keyword like AI, Life, Rust, or design.
                </p>
              </section>
            ) : null}

            <div className="grid gap-4 md:grid-cols-2">
              {filteredPosts.map((post) => (
                <PostCard key={post.title} post={post} />
              ))}
            </div>
          </section>

          <aside className="hidden xl:block" aria-hidden="true" />
        </div>
      </div>
    </main>
  );
}
