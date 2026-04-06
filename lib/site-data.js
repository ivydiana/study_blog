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
    slug: "sql-study-notes",
    category: "Technology",
    categorySlug: "technology",
    title: "SQL 学习笔记：基础语句、LeetCode 与业务实战",
    excerpt:
      "整理 SQL 学习过程中的核心语法、窗口函数、子查询、多表连接和业务常见写法，把刷题场景和实际分析工作串成一份可回看的学习清单。",
    description:
      "内容涵盖 SQL 基础语句、LeetCode 案例和业务实际应用，适合作为一篇系统复习时反复翻阅的学习笔记。",
    date: "Apr 06, 2026",
    readTime: "10 min read",
    tag: "sql",
    tags: ["SQL", "LeetCode", "Data"],
    image: "/sql-cover.svg"
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

export const postBodies = {
  "sql-study-notes": [
    {
      title: "概览",
      paragraphs: [
        "这份笔记主要整理三部分内容：SQL 基础语句、LeetCode 常见题型，以及在业务分析中真正高频会用到的查询模式。",
        "我希望把零散的语法点收成一篇可以反复翻阅的学习稿，所以内容会从最基本的 SELECT / WHERE 开始，一路走到窗口函数、CTE、索引与事务。"
      ],
      bullets: ["SQL 基础语句使用", "LeetCode 常见案例", "业务实际应用场景"]
    },
    {
      title: "SQL 基础语句",
      paragraphs: [
        "最基础的查询结构通常由 SELECT、FROM 和 WHERE 组成，每次查询都要以分号结尾。",
        "常见语法包括 SELECT 查询全表或指定列、AS 取别名、DISTINCT 去重、LIMIT / OFFSET 分页，以及大于小于等比较操作。"
      ],
      code: `SELECT *
FROM table_name;

SELECT column1, column2
FROM table_name
WHERE price >= 100;

SELECT t.column1 AS new_name
FROM table_name AS t;

SELECT DISTINCT column1
FROM table_name
LIMIT 10 OFFSET 10;`
    },
    {
      title: "日期、空值与字符串函数",
      paragraphs: [
        "实际工作里，日期处理和空值处理几乎天天会遇到。订单发货时间、付款截止日、奖金缺失值、字符串清洗，这些都需要依赖函数来写得稳定。",
        "文档里整理了 CURDATE、DATE_ADD、COALESCE、NULLIF、YEAR、MONTH、UPPER、LOWER、SUBSTRING、TRIM 等常见函数。"
      ],
      code: `SELECT CURDATE();

SELECT DATE_ADD(order_date, INTERVAL 7 DAY) AS due_date
FROM orders;

SELECT COALESCE(bonus, 0) AS effective_bonus
FROM employee;

SELECT YEAR(order_date) AS year, MONTH(order_date) AS month
FROM orders;`
    },
    {
      title: "条件、范围与模糊查询",
      paragraphs: [
        "筛选条件是 SQL 的核心能力。常见写法包括 WHERE、AND、OR、IS NULL、BETWEEN、IN、LIKE、NOT LIKE，以及 CASE WHEN 条件表达式。",
        "这类语法在刷题和业务报表里都特别常见，比如筛选无效推文、区间价格、指定国家、或者前缀匹配。"
      ],
      code: `SELECT column_name1
FROM table_name
WHERE column_name1 = 'apple'
  AND column_name2 > 100;

SELECT *
FROM table_name
WHERE column_name LIKE 'Mr.%';

SELECT name, score,
  CASE
    WHEN score >= 90 THEN 'A'
    WHEN score >= 80 THEN 'B'
    ELSE 'C'
  END AS grade
FROM student;`
    },
    {
      title: "聚合、分组与排序",
      paragraphs: [
        "COUNT、SUM、AVG、MIN、MAX 是分析类 SQL 的基础。配合 GROUP BY、HAVING、ORDER BY，可以快速做出分类统计、分组筛选和排序结果。",
        "文档还强调了先过滤再分组、分组后再 HAVING 的顺序，以及多字段分组和多聚合统计的写法。"
      ],
      code: `SELECT category, COUNT(*) AS cnt, SUM(amount) AS total, AVG(price) AS avg_price
FROM table_name
GROUP BY category
HAVING COUNT(*) > 10
ORDER BY avg_price DESC;`
    },
    {
      title: "多表连接",
      paragraphs: [
        "JOIN 是业务分析中最常见的一类查询。文档整理了 INNER JOIN、LEFT JOIN、RIGHT JOIN、FULL JOIN、CROSS JOIN、多表连接和自连接。",
        "理解不同连接方式返回的结果范围，比死记语法更重要，尤其是在订单、用户、商品三张表联查时。"
      ],
      code: `SELECT
  u.name,
  o.order_id,
  p.product_name
FROM users u
INNER JOIN orders AS o ON u.order_id = o.order_id
INNER JOIN product AS p ON o.order_id = p.order_id;`
    },
    {
      title: "子查询与 CTE",
      paragraphs: [
        "当一个查询需要依赖另一个查询的结果时，就会用到子查询。根据返回内容不同，可以分成标量子查询、行子查询、列子查询和表子查询。",
        "WITH 子句也就是 CTE，会让复杂查询更清晰。对我来说，它特别适合把长 SQL 拆成几个可以单独理解的小步骤。"
      ],
      code: `WITH year_sales AS (
  SELECT year, SUM(amount) AS total
  FROM sales
  GROUP BY year
)
SELECT *
FROM year_sales;

SELECT name, salary
FROM employees
WHERE salary > (
  SELECT AVG(salary) FROM employees
);`
    },
    {
      title: "窗口函数",
      paragraphs: [
        "窗口函数是这份笔记里最重要的一部分。核心区别是：PARTITION BY 不会减少行数，而 GROUP BY 会把多行聚合成更少的结果。",
        "文档重点覆盖了 ROW_NUMBER、RANK、DENSE_RANK、PERCENT_RANK、LAG、LEAD，以及累计求和、同比环比、Top N、去重等典型题型。"
      ],
      code: `SELECT *,
  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS row_num,
  RANK() OVER (ORDER BY sales DESC) AS sales_rank,
  LAG(sales, 1) OVER (ORDER BY date) AS last_month_sales,
  SUM(sales) OVER (ORDER BY date) AS cumulative_sales
FROM products;`
    },
    {
      title: "建表、修改表与常见 DML",
      paragraphs: [
        "除了查询本身，文档也把 CREATE TABLE、ALTER TABLE、DROP TABLE、INSERT、UPDATE、DELETE 等基础操作过了一遍。",
        "这些语句不只是考试内容，也是理解数据库结构和数据流转的基础。"
      ],
      code: `CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(100) UNIQUE,
  birthday DATE,
  age INT CHECK (age >= 18),
  total_amount DECIMAL(10, 2)
);

ALTER TABLE users ADD COLUMN log_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

UPDATE users
SET email = '123456789@gmail.com'
WHERE id = 1;`
    },
    {
      title: "索引、事务与性能分析",
      paragraphs: [
        "最后一部分更偏工程实践。索引的本质是用空间换时间，能显著提升查询速度，但也会带来写入成本。",
        "哪些字段适合建索引、什么时候用 EXPLAIN 看执行计划、事务怎么保证一致性，这些都比背语法更接近真实工作。"
      ],
      bullets: [
        "适合建索引：经常出现在 WHERE、JOIN、ORDER BY 里的高区分度字段",
        "不适合建索引：数据量很小的表、区分度很低的字段",
        "排查慢 SQL 时，优先用 EXPLAIN 看查询计划"
      ],
      code: `CREATE INDEX idx_email ON users(email);

EXPLAIN SELECT *
FROM orders
WHERE user_id = 123;

BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;`
    }
  ]
};

export const allPosts = [featuredPost, ...posts];

export function parsePostDate(dateString) {
  const parsed = new Date(dateString);
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed;
}

export const sortedAllPosts = [...allPosts].sort(
  (left, right) => parsePostDate(right.date).getTime() - parsePostDate(left.date).getTime()
);

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
