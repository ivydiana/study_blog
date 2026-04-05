import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, Folder } from "lucide-react";
import { assetPath } from "@/lib/assets";

export function FeaturedPost({ post }) {
  return (
    <article className="surface grid overflow-hidden rounded-card lg:grid-cols-[1.05fr_1.5fr]">
      <div className="relative min-h-[210px] lg:min-h-[258px]">
        <Image
          src={assetPath(post.image)}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col justify-center p-4.5 md:p-5 xl:p-6">
        <div className="mb-3 flex items-center gap-2 text-[12px] font-semibold text-accent">
          <Folder className="h-4 w-4 stroke-[1.8]" />
          <Link href={`/categories/${post.categorySlug}`} className="hover:text-ink">
            {post.category}
          </Link>
        </div>

        <Link
          href={`/posts/${post.slug}`}
          className="editorial-title max-w-[12ch] text-[2.15rem] leading-[0.98] text-ink transition-colors duration-300 hover:text-accent md:text-[2.55rem]"
        >
          {post.title}
        </Link>
        <p className="mt-2.5 max-w-2xl text-[14px] text-muted md:text-[1.02rem] md:leading-[1.36]">
          {post.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-muted">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 stroke-[1.8]" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4 stroke-[1.8]" />
            {post.readTime}
          </span>
        </div>

        <div className="mt-3">
          <span className="pill inline-flex px-3 py-1 text-[12px] font-medium text-muted">
            #{post.tag}
          </span>
        </div>
      </div>
    </article>
  );
}
