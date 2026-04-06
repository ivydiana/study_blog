import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { PostDetailPageClient } from "@/components/PostDetailPageClient";
import { allPosts, getPostBySlug } from "@/lib/site-data";

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug
  }));
}

export default async function PostDetailPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  let rawBody = "";

  if (slug === "sql-study-notes") {
    const contentPath = path.join(process.cwd(), "content", "sql-study-notes.txt");
    rawBody = await readFile(contentPath, "utf8");
  }

  return <PostDetailPageClient post={post} rawBody={rawBody} />;
}
