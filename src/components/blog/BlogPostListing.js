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
    <div className="section-top-margin">
      {is_compact && (
        <div className="content-block">
          <h3 className="text text-strong">
            Recent articles from{" "}
            <Link to="/blog" className="muted-font">
              blog
            </Link>
          </h3>
        </div>
      )}

      {/* Post list using existing design system */}
      <div className="post-list-wrapper">
        <div className="post-list">
          {displayPosts.map(({ node: post }, index) => (
            <div key={index} className="content-block">
              <div>
                {post.frontmatter.external_link ? (
                  <OutboundLink
                    href={post.frontmatter.external_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="title">
                      <div className="space-left">
                        {post.frontmatter.title}
                        <div className="icon">
                          <Icon name="outboundLink" />
                        </div>
                      </div>
                    </span>
                  </OutboundLink>
                ) : (
                  <Link to={post.frontmatter.page_slug}>
                    <span className="title">
                      {post.frontmatter.title}
                    </span>
                  </Link>
                )}

                {post.frontmatter.category && (
                  <span className="category space-left">
                    <span>posted in</span>{" "}
                    <span className="text-strong text-uppercase">
                      {post.frontmatter.category}
                    </span>{" "}
                  </span>
                )}

                {post.frontmatter.external_site_name && (
                  <span className="external_site space-left">
                    at{" "}
                    <OutboundLink
                      href={post.frontmatter.external_site_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {post.frontmatter.external_site_name}
                    </OutboundLink>
                  </span>
                )}

                <br />
                <span className="date space-left">
                  {post.frontmatter.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {is_compact && postsCount > 4 && (
        <div className="content-block">
          <div className="call-to-action">
            <span>
              ...read {postsCount} more posts in{" "}
              <Link to="/blog" className="muted-font">
                blog
              </Link>
            </span>
          </div>
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
