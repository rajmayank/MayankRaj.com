import React from "react";
import { graphql } from "gatsby";
import "../styles/main.scss";

import BlogIndexCover from "../assets/images/blog_covers/blog_index_cover.jpeg";

import { CompactHeader, BlogPostListing, Footer, Seo } from "../components";

class BlogListPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <div>
        <Seo title="Blog" /> {/* Added SEO component for blog page */}
        <CompactHeader
          title="Blog Articles"
          mood="#fdfdfd"
          bgUrl={BlogIndexCover}
        />
        <main>
          <div className="post-list-container">
            <BlogPostListing posts={posts} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default BlogListPage;

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
