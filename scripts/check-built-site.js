const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const output = path.resolve(process.argv[2] || "public");
const walk = (directory) =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
const pages = walk(path.join(output, "page-data"))
  .filter((file) => file.endsWith("/page-data.json"))
  .map((file) => JSON.parse(fs.readFileSync(file, "utf8")));
const home = pages.find((page) => page.path === "/").result.data
  .allMarkdownRemark;
const blog = pages.find((page) => page.path === "/blog/").result.data
  .allMarkdownRemark;
assert.equal(home.nodes.length, Math.min(4, blog.nodes.length));
assert.equal(
  home.totalCount,
  blog.nodes.length,
  "Homepage count must include every published article",
);
let articles = 0;
for (const page of pages) {
  if (!page.result?.data?.markdownRemark) continue;
  const data = page.result.data;
  const post = data.markdownRemark;
  const cover = post.frontmatter.cover || data.fallbackCover;
  assert.ok(
    cover?.childImageSharp?.gatsbyImageData,
    `Missing artwork: ${page.path}`,
  );
  assert.match(
    cover.publicURL,
    /\.(png|jpe?g|webp)$/i,
    `Cover resolved to a non-image: ${page.path}`,
  );
  assert.ok(
    fs.existsSync(path.join(output, cover.publicURL)),
    `Missing output image: ${page.path}`,
  );
  assert.match(post.frontmatter.dateISO, /^\d{4}-\d{2}-\d{2}$/);
  assert.doesNotMatch(
    post.html,
    /<h1(?:\s|>)/i,
    `Body duplicates page H1: ${page.path}`,
  );
  const html = fs.readFileSync(
    path.join(output, page.path, "index.html"),
    "utf8",
  );
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `Expected one page H1: ${page.path}`,
  );
  const meta = html.match(/<meta\b[^>]*property="og:image"[^>]*>/)?.[0];
  assert.ok(
    meta?.includes(`https://mayankraj.com${cover.publicURL}`),
    `Invalid social image: ${page.path}`,
  );
  assert.ok(
    new RegExp(`datetime="${post.frontmatter.dateISO}"`, "i").test(html),
    `Missing machine-readable date: ${page.path}`,
  );
  articles++;
}
for (const file of ["index.html", "blog/index.html", "404.html"]) {
  const html = fs.readFileSync(path.join(output, file), "utf8");
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, file);
}
assert.ok(fs.existsSync(path.join(output, "Mayank_Raj_Resume.pdf")));
for (const page of pages.filter((page) =>
  /resume|schedule-call/.test(page.path),
)) {
  const html = fs.readFileSync(
    path.join(output, page.path, "index.html"),
    "utf8",
  );
  assert.match(html, /http-equiv="refresh"/i);
  assert.match(html, /content="noindex"/);
}
console.log(
  `Verified ${articles} article pages: one H1, image covers, social URLs and ISO dates. Homepage shows 4 of ${blog.nodes.length} articles. Blog, 404, resume and scheduling redirects pass.`,
);
