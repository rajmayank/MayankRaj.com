import React from "react";
import { graphql } from "gatsby";

import BlogIndexCover from "../assets/images/blog_covers/blog_index_cover.jpeg";

import { CompactHeader, BlogPostListing, Footer } from "../components";

class BlogListPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <div>
        <CompactHeader
          title="Blog Articles"
          mood="#fdfdfd"
          bgUrl={BlogIndexCover}
        />
        <main>
          <div className="body-container">
            <div className="content-container">
              <div className="text text-justify text-spacers">
                <BlogPostListing posts={posts} />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default BlogListPage;

export const Head = () => {
  const { Seo } = require("../components");
  return (
    <Seo
      title="Blog"
      description="Insights on technology, security, and software development"
      pathname="/blog"
    />
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { frontmatter: { date: DESC } }
      limit: 200
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
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
    }
  }
`;
