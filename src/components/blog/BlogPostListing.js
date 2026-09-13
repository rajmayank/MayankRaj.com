import React from "react";
import { graphql, Link } from "gatsby";
import OutboundLink from "../common/OutboundLink";
import Icon from "../common/Icon";
import ArticleMeta from "./ArticleMeta";

export default function BlogPostListing({
  posts,
  compact = false,
  totalCount = posts.length,
}) {
  const Heading = compact ? "h3" : "h2";
  return (
    <section
      className={compact ? "mt-16" : ""}
      aria-label={compact ? "Recent articles" : "All articles"}
    >
      {compact && (
        <h2 className="mb-8 text-section">
          Recent articles from{" "}
          <Link to="/blog/" className="brand-link text-accent">
            the blog
          </Link>
        </h2>
      )}
      <div className="divide-y divide-subtle">
        {posts.map(({ id, frontmatter: post }) => (
          <article key={id} className="py-7 first:pt-0">
            <Heading className="mb-3 text-xl font-semibold leading-snug sm:text-2xl">
              {post.external_link ? (
                <OutboundLink
                  href={post.external_link}
                  target="_blank"
                  className="hover:text-accent"
                >
                  {post.title}{" "}
                  <Icon
                    name="outboundLink"
                    aria-label="External article"
                    className="ml-1 text-sm text-accent"
                  />
                </OutboundLink>
              ) : (
                <Link to={post.page_slug} className="hover:text-accent">
                  {post.title}
                </Link>
              )}
            </Heading>
            <div className="space-y-1 text-meta text-front-muted">
              <ArticleMeta
                date={post.date}
                dateISO={post.dateISO}
                category={post.category}
              />
              {post.external_site_name && (
                <p>
                  Published at{" "}
                  <OutboundLink
                    href={post.external_site_link}
                    className="brand-link"
                  >
                    {post.external_site_name}
                  </OutboundLink>
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
      {compact && totalCount > posts.length && (
        <Link
          to="/blog/"
          className="brand-link mt-6 inline-block py-3 text-body font-semibold text-accent"
        >
          View all {totalCount} articles →
        </Link>
      )}
    </section>
  );
}

export const articleListItem = graphql`
  fragment ArticleListItem on MarkdownRemark {
    id
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      dateISO: date(formatString: "YYYY-MM-DD")
      category
      page_slug
      external_link
      external_site_name
      external_site_link
    }
  }
`;
