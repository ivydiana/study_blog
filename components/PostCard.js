import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, Folder } from "lucide-react";

export function PostCard({ post }) {
  return (
    <article className="surface group overflow-hidden rounded-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover">
      <div className="relative aspect-[1.8/1] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-3.5 md:p-4">
        <div className="mb-2 flex items-center gap-2 text-[12px] font-medium text-accent">
          <Folder className="h-4 w-4 stroke-[1.8]" />
          <Link href={`/categories/${post.categorySlug}`} className="hover:text-ink">
            {post.category}
          </Link>
        </div>

        <Link
          href={`/posts/${post.slug}`}
          className="editorial-title block text-[1.38rem] leading-[1.08] text-ink transition-colors duration-300 hover:text-accent"
        >
          {post.title}
        </Link>
        <p className="line-clamp-3 mt-2 text-[12px] leading-6 text-muted">
          {post.excerpt}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-[12px] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 stroke-[1.8]" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 stroke-[1.8]" />
            {post.readTime}
          </span>
        </div>

        <div className="mt-2.5">
          <span className="pill inline-flex px-3 py-1 text-[12px] font-medium text-muted">
            #{post.tag}
          </span>
        </div>
      </div>
    </article>
  );
}
