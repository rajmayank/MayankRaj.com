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
    <div className="blog-listing-section">
      {is_compact && (
        <div className="blog-section-header">
          <h2 className="blog-section-title">
            Recent articles from{" "}
            <Link to="/blog" className="blog-link-accent">
              blog
            </Link>
          </h2>
        </div>
      )}

      <div className="blog-posts-container">
        {displayPosts.map(({ node: post }, index) => (
          <article key={index} className="blog-post-card">
            {/* Title */}
            <h3 className="blog-card-title">
              {post.frontmatter.external_link ? (
                <OutboundLink
                  href={post.frontmatter.external_link}
                  target="_blank"
                  rel="noreferrer"
                  className="blog-card-link"
                >
                  {post.frontmatter.title}
                  <span className="blog-external-icon">
                    <Icon name="outboundLink" />
                  </span>
                </OutboundLink>
              ) : (
                <Link to={post.frontmatter.page_slug} className="blog-card-link">
                  {post.frontmatter.title}
                </Link>
              )}
            </h3>

            {/* Metadata */}
            <div className="blog-card-meta">
              <time className="blog-meta-date">
                {post.frontmatter.date}
              </time>
              
              {post.frontmatter.category && (
                <>
                  <span className="blog-meta-separator">•</span>
                  <span className="blog-meta-category">
                    {post.frontmatter.category}
                  </span>
                </>
              )}

              {post.frontmatter.external_site_name && (
                <>
                  <span className="blog-meta-separator">•</span>
                  <span className="blog-meta-external">
                    Published at{" "}
                    <OutboundLink
                      href={post.frontmatter.external_site_link}
                      target="_blank"
                      rel="noreferrer"
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
        <div className="blog-view-more">
          <Link to="/blog">
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
