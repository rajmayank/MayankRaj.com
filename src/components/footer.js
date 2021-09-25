import React from "react";
import {Link} from "gatsby";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen, faHeart, faRss} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faLinkedinIn, faReact, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {OutboundLink} from "gatsby-plugin-google-analytics";

const PageFooter = () => {

  return (
    <footer>
      <div class="design-block">
        <div class="wrapper">
          <div class="layer-1"></div>
          <div class="layer-2"></div>
          <div class="layer-3"></div>
          <div class="layer-4"></div>
        </div>
      </div>

      <div class="container">
        <div class="wrapper">
          <div class="text-block">
            <div class="row">
              <span> Built with &nbsp;
                <a href="https://www.gatsbyjs.com/" name="gatsbyjs">Gatsby</a>,
                <div class="loop-icons">
                  <div class="icon">
                    &nbsp;
                    <FontAwesomeIcon icon={faReact} title="React"/> &amp; &nbsp;
                    <FontAwesomeIcon icon={faHeart}/> &nbsp;.
                  </div>
                </div>
              </span>
              <span>Hosted on Github</span>
            </div>
            <div className="row">
              <span>© 2016 - {new Date().getFullYear()}</span>
              <span> <Link to="/" aria-label="Home | MayankRaj.com"> Home </Link> </span>
              <span> <Link to="/blog" aria-label="Blog | MayankRaj.com"> Blog </Link> </span>
              <span> <OutboundLink href="https://github.com/rajmayank/mayankraj.com"
                                   aria-label="Source | MayankRaj.com"
                                   target="_blank"
                                   rel="noreferrer"> Source </OutboundLink>
              </span>
              <span>
                <OutboundLink href="/rss.xml" className="icon" aria-label="RSS Feed">
                  <FontAwesomeIcon icon={faRss}/>
                </OutboundLink>
              </span>
            </div>
          </div>
          <div className={"icons-block"}>
            <div className={"row"}>
              <OutboundLink href="https://twitter.com/Mayank9856" target="_blank" className="icon" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="lg"/>
              </OutboundLink>
              <OutboundLink href="https://www.linkedin.com/in/mayank9856/" class="icon" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn}/>
              </OutboundLink>
              <OutboundLink href="https://www.facebook.com/mayank9856" class="icon" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook}/>
              </OutboundLink>
              <OutboundLink href="https://github.com/rajmayank" class="icon" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub}/>
              </OutboundLink>
              <OutboundLink href="mailto:hello@mayankraj.com" class="icon" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelopeOpen}/>
              </OutboundLink>
            </div>
            <div class="row footer-resume-block">

              {/*TODO: Update this to track it*/}
              <Link to="/Mayank_Raj_Resume.pdf" target="_blank" rel="noreferrer"> <span>View Resume</span> </Link>
              {/*<a href="/resume?src=footer" target="_blank" rel="noreferrer"> <span>View Resume</span> </a>*/}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

};
export default PageFooter;

