// File: footer.js

import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faFileVideo,
  faHeart,
  faRss,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faReact,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const PageFooter = () => {
  return (
    <footer>
      <div className="design-block">
        <div className="wrapper">
          <div className="layer-1"></div>
          <div className="layer-2 --layer-2"></div> {/* Added BEM-like class */}
          <div className="layer-3 --layer-3"></div> {/* Added BEM-like class */}
        </div>
      </div>

      <div className="container">
        <div className="wrapper">
          <div className="text-block">
            <div className="row">
              <span>
                {" "}
                Built with  
                <OutboundLink href="https://www.gatsbyjs.com/" name="gatsbyjs">
                  Gatsby
                </OutboundLink>
                ,
                <div className="loop-icons">
                  <div className="icon">
                     
                    <FontAwesomeIcon icon={faReact} title="React" /> &  
                    <FontAwesomeIcon icon={faHeart} />  .
                  </div>
                </div>
              </span>
              <span>Hosted on Github</span>
            </div>
            <div className="row">
              <span>© 2016 - {new Date().getFullYear()}</span>
              <span>
                {" "}
                <Link to="/" aria-label="Home | MayankRaj.com">
                  {" "}
                  Home{" "}
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link to="/blog" aria-label="Blog | MayankRaj.com">
                  {" "}
                  Blog{" "}
                </Link>{" "}
              </span>
              <span>
                {" "}
                <OutboundLink
                  href="https://github.com/rajmayank/mayankraj.com"
                  aria-label="Source | MayankRaj.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Source{" "}
                </OutboundLink>
              </span>
              <span>
                <OutboundLink
                  href="/rss.xml"
                  className="icon"
                  aria-label="RSS Feed"
                >
                  <FontAwesomeIcon icon={faRss} />
                </OutboundLink>
              </span>
            </div>
          </div>
          <div className="icons-block">
            <div className="row">
              {/* Social media icons remain the same */}
            </div>
            <div className="row footer-resume-block">
              <Link
                to="/Mayank_Raj_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <span>View Resume</span>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
