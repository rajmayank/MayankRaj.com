import React from "react";
import {graphql} from "gatsby";
import CompactHeader from "./compact-header";
import PageFooter from "./footer";
import Seo from "./seo";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    // const siteTitle = this.props.data.site.siteMetadata.title;
    // const {previous, next} = this.props.pageContext;

    return (
      <div>
        <Seo title="Blog" />

        <CompactHeader title={post.frontmatter.title}
                       mood={post.frontmatter.mood ? post.frontmatter.mood : "#fdfdfd"}
                       bgUrl={post.frontmatter.bgimage ? post.frontmatter.bgimage : "/images/blog_covers/blog_index_cover.jpeg"}
                       category={post.frontmatter.category}
                       date={post.frontmatter.date}> </CompactHeader>

        {/*TODO: ADD Mood here*/}
        <div className="body-container">
          <div className="content-container">
            <div className="text text-justify text-spacers">
              <section dangerouslySetInnerHTML={{__html: post.html}}/>
            </div>
          </div>

        </div>
        <PageFooter> </PageFooter>

      </div>
    );
  }
}

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
