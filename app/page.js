import { HomePageClient } from "@/components/HomePageClient";
import { categories, featuredPost, posts, tags } from "@/lib/site-data";

export default function HomePage() {
  return (
    <HomePageClient
      featuredPost={featuredPost}
      posts={posts}
      categories={categories}
      tags={tags}
    />
  );
}
