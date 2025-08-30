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
      {/* Keep complex skewed design elements in SCSS */}
      <div className="design-block">
        <div className="wrapper">
          <div className="layer-1"></div>
          <div className="layer-2 --layer-2"></div>
          <div className="layer-3 --layer-3"></div>
        </div>
      </div>

      {/* Container - restore original SCSS structure */}
      <div className="container relative z-[250] mx-auto">
        <div className="wrapper flex items-start justify-between flex-wrap pt-20 pb-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30">
          {/* Text block - restore original SCSS classes */}
          <div className="text-block">
            <div className="row block mb-3">
              <span className="mr-4 sm:mr-8 inline-block">
                Built with &nbsp;
                <OutboundLink href="https://www.gatsbyjs.com/" name="gatsbyjs">
                  Gatsby
                </OutboundLink>
                ,
                <div className="inline-flex items-center gap-2 flex-wrap">
                  &nbsp;
                  <div className="inline-flex items-center text-footer-icon">
                    <div className="icon">
                      <Icon name="react" />
                    </div>
                  </div>
                  &nbsp; &amp; &nbsp;
                  <div className="inline-flex items-center text-footer-icon">
                    <div className="icon">
                      <Icon name="heart" />
                    </div>
                  </div>
                </div>
              </span>
              <span className="mr-4 sm:mr-8 inline-block">
                Hosted on Github
              </span>
            </div>
            <div className="row block">
              <span className="mr-4 sm:mr-8 inline-block">
                © 2016 - {new Date().getFullYear()}
              </span>
              <span className="mr-4 sm:mr-8 inline-block">
                <Link to="/" aria-label="Home | MayankRaj.com">
                  Home
                </Link>
              </span>
              <span className="mr-4 sm:mr-8 inline-block">
                <Link to="/blog" aria-label="Blog | MayankRaj.com">
                  Blog
                </Link>
              </span>
              <span className="mr-4 sm:mr-8 inline-block">
                <OutboundLink
                  href="https://github.com/rajmayank/mayankraj.com"
                  aria-label="Source | MayankRaj.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </OutboundLink>
              </span>
              <span className="mr-4 sm:mr-8 inline-block">
                <OutboundLink
                  href="/rss.xml"
                  className="inline-block text-footer-icon"
                  aria-label="RSS Feed"
                >
                  <div className="icon">
                    <Icon name="rss" />
                  </div>
                </OutboundLink>
              </span>
            </div>
          </div>

          {/* View Resume - restore original structure with minimal Tailwind */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="row footer-resume-block text-center">
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
