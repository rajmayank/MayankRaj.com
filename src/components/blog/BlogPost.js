import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import CompactHeader from "../layout/CompactHeader";
import Footer from "../layout/Footer";
import Seo from "../common/Seo";

// Centralized AI disclosure text (rendered in italic container, so no need for emphasis tags)
const AI_DISCLOSURE_TEXT = `Rumor has it that this article was crafted by a real human named Mayank (mayankraj.com fame) — but who's to say? 
The artwork, in some cases, took quite a few virtual brushstroke from Bing Image Generator. Claude and Gemini kindly helped in hunting down typos and grammatical oopsies. 
But all the sentences (including this very one), the bad puns, quirky ideas, and alleged human charm? 
That's (probably) all Mayank... if he even exists!`;

/**
 * Blog post template component
 * Renders individual blog post pages with header, content, and footer
 * Uses Tailwind utilities for simple layout alongside SCSS for complex styling
 */
const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const showAiDisclosure = post.frontmatter.aiDisclosure || false;

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
          <div className="text text-justify text-spacers prose prose-lg max-w-none">
            <article>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
            {showAiDisclosure && (
              <div className="ai-disclosure mt-12 p-4 bg-gray-50 border-l-4 border-gray-400 rounded not-prose">
                <p className="italic text-gray-700 m-0">
                  <strong>AI Disclosure:</strong> {AI_DISCLOSURE_TEXT}
                </p>
              </div>
            )}
            <div className="blogEndNav mt-20 pt-8 border-t border-gray-300">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <Link
                  to="/blog"
                  className="text-accent underline hover:no-underline font-medium"
                >
                  Back to Blogs
                </Link>
                <Link
                  to="/"
                  className="text-accent underline hover:no-underline font-medium"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
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
        aiDisclosure
      }
    }
  }
`;
