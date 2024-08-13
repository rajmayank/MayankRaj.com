import React from "react";
import { Link } from "gatsby";
import "../styles/main.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics"; // Import for external links
import Icon from "./Icon";

const BlogListing = ({ posts, is_compact = false }) => {
  const postsCount = posts.length;
  posts = is_compact ? posts.slice(0, 4) : posts;

  return (
    <div className="section-top-margin">
      {is_compact && (
        <h3 className="--reduced-margin-bottom">
          Recent articles from <Link to="/blog">blog</Link>
        </h3>
      )}

      <div className={`post-list-wrapper ${is_compact ? "--compact" : ""}`}>
        {posts.map(({ node: post }, index) => (
          <div className="post-list text" key={index}>
            <div>
              {post.frontmatter.external_link ? (
                <OutboundLink // Use OutboundLink for external links
                  href={post.frontmatter.external_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="title text-strong text-uppercase">
                    <div>
                      {post.frontmatter.title}
                      <div className="icon">
                        <Icon name="outboundLink" />
                      </div>
                    </div>
                  </span>
                </OutboundLink>
              ) : (
                <Link to={post.frontmatter.page_slug}>
                  <span className="title text-strong text-uppercase">
                    {post.frontmatter.title}
                  </span>
                </Link>
              )}

              {post.frontmatter.category && (
                <span className="space-left muted-font">
                  <span>posted in</span> {" "}
                  <span className="category text-strong text-uppercase muted-font">
                    {post.frontmatter.category}
                  </span>{" "}
                </span>
              )}

              {post.frontmatter.external_site_name && (
                <span className="muted-font">
                  at
                  <OutboundLink // Use OutboundLink for external links
                    href={post.frontmatter.external_site_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="external_site text-strong">
                      {post.frontmatter.external_site_name}
                    </span>
                  </OutboundLink>
                </span>
              )}

              <br />
              <span className="date space-left muted-font">
                {post.frontmatter.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {is_compact && (
        <h4 className="--reduced-margin-bottom">
          ...read {postsCount} more posts in <Link to="/blog">blog</Link>
        </h4>
      )}
    </div>
  );
};

export default BlogListing;
