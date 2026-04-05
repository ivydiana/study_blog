export const featuredPost = {
  slug: "yet-another-start",
  category: "Life",
  categorySlug: "life",
  title: "Yet another start",
  excerpt: "A long while after I stopped writing",
  description:
    "A quiet return to writing, memory, and the slower rhythm of keeping a personal corner on the internet.",
  date: "Jun 29, 2025",
  readTime: "1 min read",
  tag: "Life",
  tags: ["life", "writing", "journal"],
  image: "/featured-cover.svg"
};

export const posts = [
  {
    slug: "warm-editorial-design-system",
    category: "Thoughts",
    categorySlug: "thoughts",
    title: "从冷灰到暖褐：一次博客设计系统的进化",
    excerpt:
      "为什么我把博客的冷调灰白，慢慢替换成更有温度的米色与暖棕？这次重构不是换皮，而是重新整理阅读节奏、排版层级与视觉情绪的一次系统性设计。",
    description:
      "记录一次从冷感界面到暖调 editorial 设计系统的迁移过程，聚焦色板、排版和阅读情绪的变化。",
    date: "Jul 08, 2025",
    readTime: "4 min read",
    tag: "design",
    tags: ["design", "thoughts", "editorial"],
    image: "/design-cover.svg"
  },
  {
    slug: "qcore-rust-agent-runtime",
    category: "Technology",
    categorySlug: "technology",
    title: "QCore：用 Rust 重新定义 AI Agent 运行时",
    excerpt:
      "一个面向 AI Native 场景的高性能 Rust Agent 框架，把执行、调度与工具调用做成更统一的运行时抽象，让模型应用真正具备稳定可扩展的工程边界。",
    description:
      "围绕 Rust、AI Agent 和 runtime abstraction 的一次工程化探索，强调稳定性、调度和工具调用的一致接口。",
    date: "Jul 14, 2025",
    readTime: "6 min read",
    tag: "agent",
    tags: ["AI", "Agent", "Rust"],
    image: "/qcore-cover.svg"
  }
];

export const tags = ["AI", "Agent", "side-project"];

export const allPosts = [featuredPost, ...posts];

function normalizeCategory(post) {
  if (post.category && post.categorySlug) {
    return {
      name: post.category,
      slug: post.categorySlug
    };
  }

  const fallbackName = post.category || "Uncategorized";

  return {
    name: fallbackName,
    slug: fallbackName.toLowerCase().replace(/\s+/g, "-")
  };
}

export const categories = allPosts.reduce((accumulator, post) => {
  const normalized = normalizeCategory(post);
  const existing = accumulator.find((category) => category.slug === normalized.slug);

  if (existing) {
    existing.count += 1;
    return accumulator;
  }

  accumulator.push({
    name: normalized.name,
    slug: normalized.slug,
    count: 1
  });

  return accumulator;
}, []);

export function getPostBySlug(slug) {
  return allPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(slug) {
  return allPosts.filter((post) => normalizeCategory(post).slug === slug);
}

export function getCategoryBySlug(slug) {
  return categories.find((category) => category.slug === slug);
}
