module.exports = function validateCovers(posts, coverNames) {
  const names = new Set(coverNames);
  return posts.flatMap(({ frontmatter, fileAbsolutePath }) => {
    const name = frontmatter.bgimage;
    return name && !names.has(name)
      ? [`${fileAbsolutePath}: missing cover "${name}"`]
      : [];
  });
};
