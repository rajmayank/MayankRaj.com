import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Icon from "../common/Icon";

/**
 * Blog post listing component
 * Displays a list of blog posts with external link support
 * Uses the existing website's design system and typography
 */
const BlogPostListing = ({ posts, is_compact = false }) => {
  const postsCount = posts.length;
  const displayPosts = is_compact ? posts.slice(0, 4) : posts;

  return (
    <div className="mt-32">
      {is_compact && (
        <div className="mb-16">
          <h2 className="m-0 font-primary text-[2.2rem] font-bold leading-[1.3] text-front md:text-[2.4rem] lg:text-[2.8rem]">
            Recent articles from{" "}
            <Link to="/blog" className="text-accent transition-opacity duration-200 hover:opacity-80">
              blog
            </Link>
          </h2>
        </div>
      )}

      <div className="flex flex-col">
        {displayPosts.map(({ node: post }, index) => (
          <article
            key={index}
            className="border-b border-subtle py-10 first:pt-0 last:border-b-0 transition-all duration-200"
          >
            <h3 className="m-0 mb-4 font-primary text-[1.8rem] font-bold leading-[1.35] text-front sm:text-[2rem] lg:text-[2.4rem]">
              {post.frontmatter.external_link ? (
                <OutboundLink
                  href={post.frontmatter.external_link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-front transition-colors duration-200 hover:text-accent"
                >
                  {post.frontmatter.title}
                  <span className="inline-flex flex-shrink-0 items-center text-[1.4rem] text-accent opacity-70">
                    <Icon name="outboundLink" />
                  </span>
                </OutboundLink>
              ) : (
                <Link
                  to={post.frontmatter.page_slug}
                  className="inline-flex items-center gap-3 text-front transition-colors duration-200 hover:text-accent"
                >
                  {post.frontmatter.title}
                </Link>
              )}
            </h3>

            <div className="flex flex-wrap items-center gap-3 font-primary text-[1.1rem] leading-[1.4] text-front-muted sm:text-[1.2rem] lg:text-[1.3rem]">
              <time>{post.frontmatter.date}</time>
              
              {post.frontmatter.category && (
                <>
                  <span className="mx-[0.2rem] opacity-30 text-subtle-dark">•</span>
                  <span className="text-[1.1rem] font-semibold uppercase tracking-[0.05em] text-front-muted lg:text-[1.2rem]">
                    {post.frontmatter.category}
                  </span>
                </>
              )}

              {post.frontmatter.external_site_name && (
                <>
                  <span className="mx-[0.2rem] opacity-30 text-subtle-dark">•</span>
                  <span>
                    Published at{" "}
                    <OutboundLink
                      href={post.frontmatter.external_site_link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-accent hover:underline"
                    >
                      {post.frontmatter.external_site_name}
                    </OutboundLink>
                  </span>
                </>
              )}
            </div>
          </article>
        ))}
      </div>

      {is_compact && postsCount > 4 && (
        <div className="mt-16 text-center font-primary text-[1.6rem] font-medium lg:text-[1.8rem]">
          <Link to="/blog" className="text-accent underline hover:no-underline">
            View all {postsCount} articles →
          </Link>
        </div>
      )}
    </div>
  );
};

BlogPostListing.propTypes = {
  posts: PropTypes.array.isRequired,
  is_compact: PropTypes.bool,
};

export default BlogPostListing;
