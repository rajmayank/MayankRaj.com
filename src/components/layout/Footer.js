import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Icon from "../common/Icon";

/**
 * Page footer component with design layers and navigation links
 * Features social links, copyright info, and decorative background layers
 */
const Footer = () => {
  return (
    <footer className="relative font-primary text-footer overflow-hidden mt-40">
      <div className="design-block">
        <div className="layer-1"></div>
        <div className="layer-2 --layer-2"></div>
        <div className="layer-3 --layer-3"></div>
      </div>

      <div className="relative z-[250] mx-auto">
        <div className="flex flex-wrap items-start justify-between px-4 pb-12 pt-20 sm:px-8 md:px-12 lg:px-20">
          <div>
            <p className="mb-3 flex flex-wrap items-center">
              <span className="mr-4 inline-block sm:mr-8">
                Built with{" "}
                <OutboundLink href="https://www.gatsbyjs.com/" name="gatsbyjs">
                  Gatsby
                </OutboundLink>
                ,{" "}
                <span className="inline-flex items-center gap-2 align-middle">
                  <span className="inline-flex items-center text-footer-icon">
                    <span className="icon">
                      <Icon name="react" />
                    </span>
                  </span>
                  <span>&amp;</span>
                  <span className="inline-flex items-center text-footer-icon">
                    <span className="icon">
                      <Icon name="heart" />
                    </span>
                  </span>
                </span>
              </span>
              <span className="mr-4 inline-block sm:mr-8">Hosted on Github</span>
            </p>
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center"
            >
              <span className="mr-4 inline-block sm:mr-8">
                © 2016 - {new Date().getFullYear()}
              </span>
              <span className="mr-4 inline-block sm:mr-8">
                <Link to="/" aria-label="Home | MayankRaj.com">
                  Home
                </Link>
              </span>
              <span className="mr-4 inline-block sm:mr-8">
                <Link to="/blog" aria-label="Blog | MayankRaj.com">
                  Blog
                </Link>
              </span>
              <span className="mr-4 inline-block sm:mr-8">
                <OutboundLink
                  href="https://github.com/rajmayank/mayankraj.com"
                  aria-label="Source | MayankRaj.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </OutboundLink>
              </span>
              <span className="mr-4 inline-block sm:mr-8">
                <OutboundLink
                  href="/rss.xml"
                  className="inline-block text-footer-icon"
                  aria-label="RSS Feed"
                >
                  <span className="icon">
                    <Icon name="rss" />
                  </span>
                </OutboundLink>
              </span>
            </nav>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="text-center">
              <Link to="/resume" target="_blank" rel="noreferrer">
                <span>View Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
