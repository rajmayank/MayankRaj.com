import React from "react";
import { Link } from "gatsby";
import "../styles/main.scss";

const BlogListing = ({ posts, is_compact = false }) => {
  const postsCount = posts.length;
  posts = is_compact ? posts.slice(0, 4) : posts;
  return (
    <div class="section-top-margin">
      {is_compact ? (
        <h3 class="--reduced-margin-bottom">
          {" "}
          Recent articles from <Link to="/blog">blog</Link>
        </h3>
      ) : (
        ""
      )}

      <div class={`post-list-wrapper ${is_compact ? "--compact" : ""}`}>
        {posts.map((node) => {
          const post = node.node;
          const externalLinkHeader = post.frontmatter.external_link ? (
            <a
              href={node.node.frontmatter.external_link}
              target="_blank"
              rel="noreferrer"
            >
              <span class="title text-strong text-uppercase">
                <div>
                  {post.frontmatter.title}
                  <div class="icon">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"
                      />
                    </svg>
                  </div>
                </div>
              </span>
            </a>
          ) : (
            <Link to={node.node.frontmatter.page_slug}>
              <span class="title text-strong text-uppercase">
                {post.frontmatter.title}
              </span>
            </Link>
          );

          const postCategory = post.frontmatter.category ? (
            <span class="space-left muted-font">
              <span>posted in</span>&nbsp;
              <span class="category text-strong text-uppercase muted-font">
                {post.frontmatter.category}
              </span>
            </span>
          ) : (
            ""
          );

          const external_site_name = post.frontmatter.external_site_name ? (
            <span className="muted-font">
              {" "}
              at{" "}
              <a
                href={post.frontmatter.external_site_link}
                target="_blank"
                rel="noreferrer"
              >
                <span class="external_site text-strong">
                  {post.frontmatter.external_site_name}
                </span>
              </a>
            </span>
          ) : (
            ""
          );

          return (
            <div class="post-list text">
              <div>
                {externalLinkHeader}
                {postCategory} {external_site_name}
                <br />
                <span class="date space-left muted-font">
                  {post.frontmatter.date}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {is_compact ? (
        <h4 class="--reduced-margin-bottom">
          {" "}
          ...read {postsCount} more posts in <Link to="/blog">blog</Link>
        </h4>
      ) : (
        ""
      )}
    </div>
  );
};
export default BlogListing;
