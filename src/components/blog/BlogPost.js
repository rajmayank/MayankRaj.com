import React from "react";
import { graphql, Link } from "gatsby";
import CompactHeader from "../layout/CompactHeader";
import Footer from "../layout/Footer";
import Seo from "../common/Seo";

/**
 * Blog post template component
 * Renders individual blog post pages with header, content, and footer
 */
const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      <CompactHeader
        title={post.frontmatter.title}
        mood={post.frontmatter.mood}
        bgImageName={post.frontmatter.bgimage}
        category={post.frontmatter.category}
        date={post.frontmatter.date}
      />
      <div className="body-container">
        <div className="content-container">
          <div className="text text-justify text-spacers">
            <article>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
            <div className="blogEndNav">
              <hr
                className="page-theme-hr"
                style={{
                  border: null,
                  borderTop: "1px solid #ccc",
                  marginTop: "5rem",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/blog">Back to Blogs</Link>
                <Link to="/">Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;

export const Head = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.excerpt || post.excerpt}
      pathname={post.frontmatter.page_slug}
      image={post.frontmatter.bgimage}
      article={true}
      datePublished={post.frontmatter.date}
    />
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        basecolor
        author
        enablecomments
        category
        bgimage
        external_link
        external_site_name
        external_site_link
        page_slug
      }
    }
  }
`;
