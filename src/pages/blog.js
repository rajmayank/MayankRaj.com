import React from "react";
import {graphql} from "gatsby";
import "../styles/main.scss";

import BlogIndexCover from "../assets/images/blog_covers/blog_index_cover.jpeg";

import CompactHeader from "../components/compact-header";
import BlogListing from "../components/blog-post-listing";
import PageFooter from "../components/footer";

class BlogListPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <div>
        <CompactHeader title="Blog Articles" mood="#fdfdfd" bgUrl={BlogIndexCover}> </CompactHeader>

        <main>
          <div className="post-list-container">
            <BlogListing posts={posts}> </BlogListing>
          </div>
        </main>
        <PageFooter> </PageFooter>

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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 20) {
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
