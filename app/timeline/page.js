import { TimelinePageClient } from "@/components/TimelinePageClient";
import { allPosts } from "@/lib/site-data";

export default function TimelinePage() {
  return <TimelinePageClient posts={allPosts} />;
}
