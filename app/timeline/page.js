import { TimelinePageClient } from "@/components/TimelinePageClient";
import { sortedAllPosts } from "@/lib/site-data";

export default function TimelinePage() {
  return <TimelinePageClient posts={sortedAllPosts} />;
}
