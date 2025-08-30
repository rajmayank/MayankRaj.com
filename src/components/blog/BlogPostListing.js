import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Icon from "../common/Icon";

/**
 * Blog post listing component
 * Displays a list of blog posts with external link support
 * Uses Tailwind utilities for consistent typography and spacing
 */
const BlogPostListing = ({ posts, is_compact = false }) => {
  const postsCount = posts.length;
  posts = is_compact ? posts.slice(0, 4) : posts;

  return (
    <div className="mt-16 lg:mt-20">
      {is_compact && (
        <h3 className="mb-8 text-3xl font-bold text-gray-900">
          Recent articles from{" "}
          <Link to="/blog" className="underline hover:no-underline">
            blog
          </Link>
        </h3>
      )}

      {/* Post list with consistent Tailwind typography */}
      <div className={`${is_compact ? "mb-0" : "mb-12"} space-y-6`}>
        {posts.map(({ node: post }, index) => (
          <div className="space-y-2" key={index}>
            <div>
              {post.frontmatter.external_link ? (
                <OutboundLink
                  href={post.frontmatter.external_link}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <span className="block text-4xl lg:text-5xl font-bold uppercase tracking-wide text-gray-900 group-hover:text-blue-600 transition-colors">
                    <div className="flex items-start gap-3 flex-wrap">
                      {post.frontmatter.title}
                      <div className="inline-block w-6 h-6 flex-shrink-0 mt-2">
                        <Icon name="outboundLink" />
                      </div>
                    </div>
                  </span>
                </OutboundLink>
              ) : (
                <Link to={post.frontmatter.page_slug} className="group">
                  <span className="block text-4xl lg:text-5xl font-bold uppercase tracking-wide text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.frontmatter.title}
                  </span>
                </Link>
              )}

              {post.frontmatter.category && (
                <span className="ml-0 sm:ml-5 text-base text-gray-600 block sm:inline mt-2">
                  <span>posted in</span>{" "}
                  <span className="inline-block font-semibold uppercase text-gray-800">
                    {post.frontmatter.category}
                  </span>{" "}
                </span>
              )}

              {post.frontmatter.external_site_name && (
                <span className="text-base text-gray-600 block sm:inline mt-1">
                  at{" "}
                  <OutboundLink
                    href={post.frontmatter.external_site_link}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1"
                  >
                    <span className="text-blue-600 underline font-semibold hover:no-underline">
                      {post.frontmatter.external_site_name}
                    </span>
                  </OutboundLink>
                </span>
              )}

              <br />
              <span className="inline-block ml-0 sm:ml-5 text-base text-gray-500 mt-1">
                {post.frontmatter.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {is_compact && (
        <h4 className="mb-8 text-2xl font-semibold text-gray-900">
          ...read {postsCount} more posts in{" "}
          <Link to="/blog" className="underline hover:no-underline">
            blog
          </Link>
        </h4>
      )}
    </div>
  );
};

BlogPostListing.propTypes = {
  posts: PropTypes.array.isRequired,
  is_compact: PropTypes.bool,
};

export default BlogPostListing;
