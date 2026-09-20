import React from "react";
import { graphql, Link } from "gatsby";
import CompactHeader from "../layout/CompactHeader";
import ContentContainer from "../layout/ContentContainer";
import PageLayout from "../layout/PageLayout";
import Prose from "../common/Prose";
import Seo from "../common/Seo";
import { selectSocialImage } from "../../../lib/article-images";

const AI_DISCLOSURE_TEXT = `Rumor has it that this article was crafted by a real human named Mayank (mayankraj.com fame)! But who's to say? The artwork, in some cases, took quite a few virtual brushstroke from Bing Image Generator. Claude and Gemini kindly helped in hunting down typos and grammatical oopsies. But all the sentences (including this very one), the bad puns, quirky ideas, and alleged human charm? That's (probably) all Mayank... if he even exists!`;

export default function BlogPost({ data }) {
  const { html, frontmatter: post } = data.markdownRemark;
  return (
    <PageLayout
      header={
        <CompactHeader
          title={post.title}
          image={post.cover || data.fallbackCover}
          color={post.basecolor}
          category={post.category}
          date={post.date}
          dateISO={post.dateISO}
        />
      }
    >
      <ContentContainer className="mt-12 sm:mt-16">
        <Prose as="article" dangerouslySetInnerHTML={{ __html: html }} />
        {post.aiDisclosure && (
          <aside className="mt-12 rounded-lg border-l-4 border-subtle bg-zinc-50 p-5 text-meta text-front-muted">
            <p>
              <strong>AI Disclosure:</strong> {AI_DISCLOSURE_TEXT}
            </p>
          </aside>
        )}
        <nav
          aria-label="Blog post navigation"
          className="mt-12 flex flex-wrap justify-between gap-4 border-t border-subtle pt-6 text-body"
        >
          <Link to="/blog/" className="brand-link py-3 text-accent">
            Back to blogs
          </Link>
          <Link to="/" className="brand-link py-3 text-accent">
            Home
          </Link>
        </nav>
      </ContentContainer>
    </PageLayout>
  );
}
export const Head = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.excerpt}
      pathname={post.frontmatter.page_slug}
      image={selectSocialImage(post.frontmatter, data.fallbackCover)}
      article
      datePublished={post.frontmatter.dateISO}
    />
  );
};
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    fallbackCover: file(name: { eq: "default-blog-cover" }) {
      ...ArticleCover
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        dateISO: date(formatString: "YYYY-MM-DD")
        basecolor
        category
        socialImage {
          publicURL
        }
        cover {
          ...ArticleCover
        }
        page_slug
        aiDisclosure
      }
    }
  }
`;
