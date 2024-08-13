const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`./src/components/blog-post.js`);
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

  posts.forEach(({ node }, index) => {
    if (process.env.NODE_ENV === "production" && node.frontmatter.draft) {
      console.log(
        `==== ==== ==== ====> Skipping draft blog: ${node.frontmatter.page_slug}`
      );
      return;
    }

    node.frontmatter.draft;
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
