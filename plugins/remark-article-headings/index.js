// The article template owns the page H1. Keep section headings in the body.
module.exports = ({ markdownAST }) => {
  const firstContent = markdownAST.children.findIndex(
    (node) => node.type !== "yaml",
  );
  const first = markdownAST.children[firstContent];
  if (first?.type === "heading" && first.depth === 1)
    markdownAST.children.splice(firstContent, 1);
  const visit = (node) => {
    if (node.type === "heading" && node.depth === 1) node.depth = 2;
    node.children?.forEach(visit);
  };
  visit(markdownAST);
  return markdownAST;
};
