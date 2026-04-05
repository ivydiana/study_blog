import { CategoriesPageClient } from "@/components/CategoriesPageClient";
import { categories, getPostsByCategory } from "@/lib/site-data";

export default function CategoriesPage() {
  const categoryGroups = categories.map((category) => ({
    ...category,
    posts: getPostsByCategory(category.slug)
  }));

  return <CategoriesPageClient categoryGroups={categoryGroups} />;
}
