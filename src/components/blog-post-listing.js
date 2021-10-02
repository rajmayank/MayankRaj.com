import React from "react";
import {Link} from "gatsby";
import "../styles/main.scss";

const BlogListing = ({posts, is_compact = false}) => {
  return (
    <div className="section-top-margin">

      {(is_compact) ? (<h3 className="--reduced-margin-bottom"> Recent articles from <Link to="/blog"> blog </Link></h3>) : ""}

      <div className={`post-list-wrapper ${is_compact ? "--compact": ""}`}>

        {posts.map((node) => {
          const post = node.node;

          let externalLinkHeader = (post.frontmatter.external_link != null) ? (
            <a href={node.node.frontmatter.external_link} target="_blank" rel="noreferrer">
                <span className="title text-strong text-uppercase">
                    <div>
                       {post.frontmatter.title}
                      <div className="icon">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                      d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z">

                                </path>
                            </svg>
                        </div>
                    </div>
                </span>
            </a>
          ) : (
            <Link to={node.node.frontmatter.page_slug}>
              <span className="title text-strong text-uppercase">{post.frontmatter.title}</span>
            </Link>
          );

          let postCategory = post.frontmatter.category ? (
            <span> <span>posted in</span>&nbsp;
              <span className="category text-strong text-uppercase"> {post.frontmatter.category}</span>
                </span>
          ) : "";

          let external_site_name = post.frontmatter.external_site_name ? (
            <span> at <a href={post.frontmatter.external_site_link} target="_blank" rel="noreferrer">
                    <span className="external_site text-strong"> {post.frontmatter.external_site_name}</span></a>
                </span>
          ) : "";

          return (
            <div className="post-list text">

              <div>
                {externalLinkHeader}
                {postCategory} {external_site_name}
                <br/>
                <span class="date">{post.frontmatter.date} </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>

  );
};
export default BlogListing;
