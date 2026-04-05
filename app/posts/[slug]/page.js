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

  return <PostDetailPageClient post={post} />;
}
