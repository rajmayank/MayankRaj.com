const { test } = require("node:test");
const assert = require("node:assert/strict");
const headings = require("../plugins/remark-article-headings");
const validateCovers = require("../lib/validate-covers");
const heading = (depth, text) => ({
  type: "heading",
  depth,
  children: [{ type: "text", value: text }],
});

test("article title is owned by the cover, while meaningful body headings and code survive", () => {
  const ast = {
    type: "root",
    children: [
      { type: "yaml", value: "title: Example" },
      heading(1, "Example"),
      { type: "paragraph", children: [{ type: "text", value: "Intro" }] },
      heading(1, "First section"),
      heading(2, "Second section"),
      { type: "code", lang: "python", value: "# A comment, not a heading" },
    ],
  };
  headings({ markdownAST: ast });
  assert.deepEqual(
    ast.children
      .filter((n) => n.type === "heading")
      .map((n) => [n.depth, n.children[0].value]),
    [
      [2, "First section"],
      [2, "Second section"],
    ],
  );
  assert.equal(ast.children.at(-1).value, "# A comment, not a heading");
});
test("does not discard an H1 that follows introductory text", () => {
  const ast = {
    type: "root",
    children: [{ type: "paragraph", children: [] }, heading(1, "What is COM?")],
  };
  headings({ markdownAST: ast });
  assert.equal(ast.children.length, 2);
  assert.equal(ast.children[1].depth, 2);
});
test("accepts existing artwork and absent optional covers; reports broken references with their file", () => {
  const posts = [
    { frontmatter: { bgimage: "valid" }, fileAbsolutePath: "/valid.md" },
    { frontmatter: {}, fileAbsolutePath: "/external.md" },
    { frontmatter: { bgimage: "typo" }, fileAbsolutePath: "/broken.md" },
  ];
  assert.deepEqual(validateCovers(posts, ["valid"]), [
    '/broken.md: missing cover "typo"',
  ]);
});
