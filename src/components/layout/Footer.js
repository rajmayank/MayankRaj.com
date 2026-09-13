import React from "react";
import { Link } from "gatsby";
import Icon from "../common/Icon";
import OutboundLink from "../common/OutboundLink";
import ContentContainer from "./ContentContainer";

export default function Footer() {
  return (
    <footer className="site-footer relative mt-24 overflow-hidden pb-8 pt-20 text-meta text-front-muted">
      <div className="design-block" aria-hidden="true">
        <div className="layer-1" />
        <div className="layer-2" />
        <div className="layer-3" />
      </div>
      <ContentContainer
        width="wide"
        className="relative flex flex-wrap items-center justify-between gap-x-8 gap-y-4"
      >
        <div>
          <p className="mb-2 flex flex-wrap items-center gap-2">
            Built with{" "}
            <OutboundLink
              href="https://www.gatsbyjs.com/"
              className="brand-link"
            >
              Gatsby
            </OutboundLink>
            , <Icon name="react" aria-label="React" /> &amp;{" "}
            <Icon name="heart" aria-label="love" />{" "}
            <span>Hosted on GitHub</span>
          </p>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-5"
          >
            <span>© 2016 - {new Date().getFullYear()}</span>
            <Link className="brand-link py-3" to="/">
              Home
            </Link>
            <Link className="brand-link py-3" to="/blog/">
              Blog
            </Link>
            <OutboundLink
              className="brand-link py-3"
              href="https://github.com/rajmayank/mayankraj.com"
            >
              Source
            </OutboundLink>
            <a
              href="/rss.xml"
              aria-label="RSS feed"
              className="inline-flex min-h-11 min-w-11 items-center justify-center"
            >
              <Icon name="rss" aria-hidden="true" />
            </a>
          </nav>
        </div>
        <Link
          to="/resume/"
          className="brand-link py-3"
          target="_blank"
          rel="noreferrer"
        >
          View resume
        </Link>
      </ContentContainer>
    </footer>
  );
}
