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
    <footer>
      <div className="design-block">
        <div className="wrapper">
          <div className="layer-1"></div>
          <div className="layer-2 --layer-2"></div>
          <div className="layer-3 --layer-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="wrapper">
          <div className="text-block">
            <div className="row">
              <span>
                Built with &nbsp;
                <OutboundLink href="https://www.gatsbyjs.com/" name="gatsbyjs">
                  Gatsby
                </OutboundLink>
                ,
                <div className="loop-icons">
                  &nbsp;
                  <div className="icon">
                    <Icon name="react" />
                  </div>
                  &nbsp; &amp; &nbsp;
                  <div className="icon">
                    <Icon name="heart" />
                  </div>
                </div>
              </span>
              <span>Hosted on Github</span>
            </div>
            <div className="row">
              <span>© 2016 - {new Date().getFullYear()}</span>
              <span>
                <Link to="/" aria-label="Home | MayankRaj.com">
                  Home
                </Link>
              </span>
              <span>
                <Link to="/blog" aria-label="Blog | MayankRaj.com">
                  Blog
                </Link>
              </span>
              <span>
                <OutboundLink
                  href="https://github.com/rajmayank/mayankraj.com"
                  aria-label="Source | MayankRaj.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </OutboundLink>
              </span>
              <span>
                <OutboundLink
                  href="/rss.xml"
                  className="icon"
                  aria-label="RSS Feed"
                >
                  <Icon name="rss" />
                </OutboundLink>
              </span>
            </div>
          </div>
          <div className="icons-block">
            <div className="row">
              {/* Social media icons can be added here */}
            </div>
            <div className="row footer-resume-block">
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
