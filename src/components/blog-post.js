// File: blog-post.js

import React from "react";
import { graphql } from "gatsby";
import CompactHeader from "./compact-header";
import PageFooter from "./footer";
import Seo from "./seo";
import "../styles/main.scss";

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const site = data.site;

  return (
    <div>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt || post.excerpt}
        pathname={post.frontmatter.page_slug}
      />
      <CompactHeader
        title={post.frontmatter.title}
        mood={post.frontmatter.mood || "#fdfdfd"}
        bgUrl={
          post.frontmatter.bgimage ||
          "/images/blog_covers/blog_index_cover.jpeg"
        }
        category={post.frontmatter.category}
        date={post.frontmatter.date}
      />
      <div className="body-container">
        <div className="content-container">
          <div className="text text-justify text-spacers">
            <article>
              {" "}
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default BlogPostTemplate;

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
