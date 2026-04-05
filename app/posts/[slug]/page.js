import { notFound } from "next/navigation";
import { PostDetailPageClient } from "@/components/PostDetailPageClient";
import { getPostBySlug } from "@/lib/site-data";

export default async function PostDetailPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <PostDetailPageClient post={post} />;
}
