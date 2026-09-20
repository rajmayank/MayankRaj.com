const path = require(`path`);
const validateCovers = require("./lib/validate-covers");
const { resolveArtwork } = require("./lib/article-images");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({
  graphql,
  actions,
  getNodesByType,
  reporter,
}) => {
  const invalidCovers = validateCovers(
    getNodesByType("MarkdownRemark"),
    getNodesByType("File")
      .filter((file) => file.relativeDirectory === "images/blog_covers")
      .map((file) => file.name),
  );
  if (invalidCovers.length) {
    reporter.panicOnBuild(invalidCovers.join("\n"));
    return;
  }
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`./src/components/blog/BlogPost.js`);
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              page_slug
              draft
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    if (process.env.NODE_ENV === "production" && node.frontmatter.draft) {
      return;
    }

    createPage({
      path: node.frontmatter.page_slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemarkFrontmatter {
      aiDisclosure: Boolean
      bgimage: String
      ogimage: String
      cover: File
      socialImage: File
    }
  `;
  createTypes(typeDefs);
};

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "develop" || stage === "build-javascript") {
    actions.setWebpackConfig({
      cache: {
        type: "filesystem",
        buildDependencies: {
          config: [__filename],
        },
        cacheDirectory: path.resolve(__dirname, ".cache/webpack"),
        // Handle serialization issues with CSS loaders
        managedPaths: [],
        profile: false,
        maxMemoryGenerations: 1,
      },
      infrastructureLogging: {
        level: "error",
      },
    });
  }
};

// Scope both references to their artwork folders, never Markdown filenames.
exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    MarkdownRemarkFrontmatter: {
      cover: {
        type: "File",
        resolve: (source, args, context) =>
          resolveArtwork(context, source.bgimage, "images/blog_covers"),
      },
      socialImage: {
        type: "File",
        resolve: (source, args, context) =>
          resolveArtwork(context, source.ogimage, "images/blog_og"),
      },
    },
  });
};
