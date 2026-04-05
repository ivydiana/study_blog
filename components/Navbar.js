"use client";

import Link from "next/link";
import { Moon, Search, Sun, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Timeline", href: "/timeline" },
  { label: "Categories", href: "/categories" }
];

export function Navbar({
  isDark,
  searchOpen,
  searchValue,
  resultCount,
  onSearchChange,
  onToggleSearch,
  onToggleTheme
}) {
  return (
    <>
      <header className="border-b border-line/80 bg-canvas/90 backdrop-blur-[2px]">
        <div className="mx-auto flex h-[72px] w-full max-w-[1360px] items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="editorial-title text-[2rem] leading-none text-ink transition-colors duration-300 hover:text-accent"
          >
            Ivy Ding
          </Link>

          <nav className="hidden items-center gap-8 text-[15px] font-medium text-ink/90 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors duration-300 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              onClick={onToggleSearch}
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink/75 transition-colors duration-300 hover:bg-tag hover:text-accent"
            >
              {searchOpen ? (
                <X className="h-[18px] w-[18px] stroke-[1.8]" />
              ) : (
                <Search className="h-[18px] w-[18px] stroke-[1.8]" />
              )}
            </button>
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink/75 transition-colors duration-300 hover:bg-tag hover:text-accent"
            >
              {isDark ? (
                <Sun className="h-[18px] w-[18px] stroke-[1.8]" />
              ) : (
                <Moon className="h-[18px] w-[18px] stroke-[1.8]" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`border-b border-line/70 bg-canvas/75 transition-all duration-300 ${
          searchOpen
            ? "max-h-40 opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1360px] px-6 py-4 md:px-10">
          <label className="sr-only" htmlFor="site-search">
            Search posts
          </label>
          <div className="surface flex items-center gap-3 rounded-[20px] px-4 py-3.5">
            <Search className="h-[18px] w-[18px] shrink-0 text-muted stroke-[1.8]" />
            <input
              id="site-search"
              type="text"
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search posts, categories, tags..."
              className="w-full border-0 bg-transparent text-[15px] text-ink outline-none placeholder:text-muted/90"
            />
            <span className="shrink-0 text-sm text-muted">
              {searchValue ? `${resultCount} results` : "Type to search"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
