import React from "react";
import { graphql } from "gatsby";
import {
  CompactHeader,
  BlogPostListing,
  ContentContainer,
  Seo,
} from "../components";
import PageLayout from "../components/layout/PageLayout";

export default function BlogListPage({ data }) {
  return (
    <PageLayout
      header={<CompactHeader title="Blog articles" image={data.file} />}
    >
      <ContentContainer className="mt-12 sm:mt-16">
        <BlogPostListing posts={data.allMarkdownRemark.nodes} />
      </ContentContainer>
    </PageLayout>
  );
}
export const Head = () => (
  <Seo
    title="Blog"
    description="Insights on technology, security, and software development"
    pathname="/blog/"
  />
);
export const pageQuery = graphql`
  query BlogArticles {
    file(name: { eq: "blog_index_cover" }) {
      ...ArticleCover
    }
    allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        ...ArticleListItem
      }
    }
  }
`;
