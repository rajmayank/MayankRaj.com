import React from "react";
import { graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faDocker,
  faJsSquare,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

import BlogListing from "../components/blog-post-listing";
import PageFooter from "../components/footer";
import Seo from "../components/seo";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

import "../styles/main.scss";

import ImgBadgeSAA from "../assets/images/badges/aws-certified-solutions-architect-associate.png";
import ImgBadgeSAP from "../assets/images/badges/aws-certified-solutions-architect-professional.png";
import ImgBadgeCKA from "../assets/images/badges/cka-certified-kubernetes-administrator.png";

const IndexHeader = () => (
  <header>
    <Seo title="Home" />

    <div className="design-container">
      <div className="layer-1"></div>
      <div className="layer-2 --layer-2"></div>
      <div className="layer-3 --layer-3"></div>
    </div>

    <div className="content-container">
      <div className="name-container">
        <div className="name-block">
          <svg
            viewBox="0 0 140 80"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <text
              textAnchor="start"
              x="10"
              y="30"
              className="text text-stroke"
              clipPath="url(#text1)"
            >
              Mayank
            </text>
            <text
              textAnchor="start"
              x="10"
              y="70"
              className="text text-stroke"
              clipPath="url(#text2)"
            >
              Raj
            </text>
            <text
              textAnchor="start"
              x="10"
              y="30"
              className="text text-stroke --stroke-2"
              clipPath="url(#text1)"
            >
              Mayank
            </text>
            <text
              textAnchor="start"
              x="10"
              y="70"
              className="text text-stroke --stroke-2"
              clipPath="url(#text2)"
            >
              Raj
            </text>
            <defs>
              <clipPath id="text1">
                <text textAnchor="start" x="10" y="30" className="text">
                  Mayank
                </text>
              </clipPath>
              <clipPath id="text2">
                <text textAnchor="start" x="10" y="70" className="text">
                  Raj
                </text>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="description-container">
        <div className="row">
          <div className="description-block">
            <span className="row-1 title animate">
              Lead Engineer, Security @ Salesforce
            </span>
          </div>
        </div>

        <div className="badges">
          <OutboundLink
            href="https://www.credly.com/badges/3b0f1aaa-7afd-4fb5-bb83-a1601f642bb2/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ImgBadgeSAA}
              alt="AWS Certified Solutions Architect – Professional"
              className="animate"
            />
          </OutboundLink>
          <OutboundLink
            href="https://www.credly.com/badges/8a486510-a537-48f1-a29e-2643aa626be0/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ImgBadgeSAP}
              alt="AWS Certified Solutions Architect – Professional"
              className="animate professional"
            />
          </OutboundLink>
          <OutboundLink
            href="https://www.credly.com/badges/1d2d51a2-4c93-44d2-869a-d75e367d3845/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ImgBadgeCKA}
              alt="CKA - Certified Kubernetes Administrator"
              className="animate size-bg"
            />
          </OutboundLink>
        </div>
      </div>
    </div>
  </header>
);

const IndexBody = ({ posts }) => (
  <div className="body-container">
    <div className="content-container">
      <div className="text text-justify text-spacers">
        <div className="content-resume">
          <div className="icon">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M369.9 97.98L286.02 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h288.02c26.49 0 47.99-21.5 47.99-47.99V131.97c0-12.69-5.1-24.99-14.1-33.99zM256.03 32.59c2.8.7 5.3 2.1 7.4 4.2l83.88 83.88c2.1 2.1 3.5 4.6 4.2 7.4h-95.48V32.59zM272 480.01H112v-31.15c0-18.38 13.05-32.86 33.25-32.86 12.45 0 20.8 6.99 46.75 6.99 25.5 0 34.56-6.99 46.75-6.99 20.16 0 33.25 14.43 33.25 32.86v31.15zm80.01-16c0 8.8-7.2 16-16 16H304v-31.15c0-13.88-4.21-26.77-11.41-37.48-12.08-17.94-32.67-27.38-53.84-27.38-19.46 0-24.36 6.99-46.75 6.99-22.41 0-27.26-6.99-46.75-6.99-21.17 0-41.76 9.44-53.83 27.38-7.21 10.7-11.42 23.6-11.42 37.48v31.15H47.99c-8.8 0-16-7.2-16-16V48.09c0-8.8 7.2-16.09 16-16.09h176.04v104.07c0 13.3 10.7 23.93 24 23.93h103.98v304.01zM112 288c0 44.18 35.82 80 80 80s80-35.82 80-80c0-44.19-35.82-80-80-80s-80 35.81-80 80zm128 0c0 26.47-21.53 48-48 48s-48-21.53-48-48 21.53-48 48-48 48 21.53 48 48z"
              ></path>
            </svg>
          </div>
          <Link to="/Mayank_Raj_Resume.pdf" target="_blank" rel="noreferrer">
            <span>Resume</span>
          </Link>
        </div>

        <div className="section-top-margin">
          <p>
            Hello, I'm Mayank Raj. Picture this: a violinist who codes, a
            trekker who builds AI systems, and a drone enthusiast who secures
            the digital world. That's me in a nutshell, but let's dive a bit
            deeper, shall we?
          </p>
          <p>
            By day, I'm a Lead Engineer at Salesforce, where I wear the cape of
            a digital locksmith. My mission? To fortify the Salesforce ecosystem
            with unbreakable cryptography. It's like being a secret agent, but
            instead of shaken martinis, I deal with stirred algorithms.
          </p>
          <p>
            But my journey hasn't always been about digital fortresses. I've
            worn many hats in my tech odyssey:
          </p>
          <ul>
            <li>
              At Cactus Communications, I was the ringmaster of a 15+ engineer
              circus, juggling big data and machine learning acts. We built a
              data platform that could swallow 1.5TB of data per week and spit
              out insights faster than you can say "algorithm."
            </li>
            <li>
              As the founder of Apptale.io, I created a monitoring service that
              keeps an eagle eye on systems across all 51 AWS availability
              zones. It's like having a digital guardian angel for your apps,
              but at 1/15th the cost of its competitors.
            </li>
            <li>
              I've also contributed to open-source projects like Firefox. Yes,
              that browser you might be using right now – I've left my
              fingerprints on its code!
            </li>
          </ul>
          <p>
            When I'm not immersed in the digital realm, you might find me
            scaling mountains, coaxing melodies from my violin, or tinkering
            with drones. I believe in the power of diverse experiences to fuel
            creativity and innovation in tech.
          </p>
          <p>
            I'm passionate about bridging the gap between complex technology and
            real-world applications. Whether it's designing systems that process
            terabytes of data or crafting APIs that handle thousands of requests
            with sub-second latency, I love making tech work smarter, not
            harder.
          </p>
          <p>But here's where it gets really interesting:</p>
          <ul>
            <li class="text-hidden">
              I've been known to pull rabbits out of hats – or rather, pull 42%
              performance improvements out of existing systems. At Salesforce, I
              engineered benchmarking tools and caching layers that not only
              boosted system throughput but also slashed costs by 71%. Who says
              you can't have your cake and eat it too?
            </li>
            <li class="text-hidden">
              I'm a firm believer in the "five nines" philosophy. I led efforts
              to improve service availability from 99.99% to 99.999% at
              Salesforce. It's like turning a reliable watch into an atomic
              clock.
            </li>
            <li>
              I've got a knack for turning complex data into actionable
              insights. I architected a graph database engine that can query
              ~8Tb of raw data for under $30 per query, with an average query
              time of just 8 minutes. It's like finding a needle in a haystack,
              if the haystack were the size of Texas and the needle were
              invisible.
            </li>
            <li>
              I'm not just about the tech – I'm about the people too. I've
              mentored teams, judged hackathons, and even built an AR bot
              assisted by LLMs for Salesforce conferences, used by over 450
              unique users across 4 conferences. It's my way of giving back to
              the tech community that's given me so much.
            </li>
          </ul>
          <p className="text-hidden">
            Currently, I'm on the lookout for senior technology leadership roles
            and speaking opportunities at conferences. I'm particularly
            interested in discussing emerging trends like edge computing,
            quantum-resistant cryptography, and the intersection of AI and
            cybersecurity.
          </p>
          <p>
            If you're interested in discussing how we can push the boundaries of
            technology together, or if you just want to chat about the best
            trekking routes or the future of serverless architecture, drop me a
            line!
          </p>
          <p>
            Remember, in the world of tech, as in music, it's not just about
            playing the right notes – it's about making them dance together in
            perfect harmony. And sometimes, it's about knowing when to improvise
            a killer solo.
          </p>
        </div>

        <br />

        <div className="content-block">
          <div className="icons-block">
            <div className="icon">
              <FontAwesomeIcon icon={faJsSquare} />
              <FontAwesomeIcon icon={faPython} />
              <FontAwesomeIcon icon={faAws} />
              <FontAwesomeIcon icon={faDocker} />
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M264 112H24a24 24 0 0 0 0 48h240a24 24 0 0 0 0-48zm352 0H376a24 24 0 0 0 0 48h240a24 24 0 0 0 0-48z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M472 192v45.65l-96.83-29.05a191.93 191.93 0 0 0-110.34 0L168 237.65V192h-48v64.05a32 32 0 0 0 32 32h45.41a179 179 0 0 0-53.33 110.24 16.14 16.14 0 0 0 16 17.71h16.26c8.33 0 14.75-6.58 15.68-14.87a130 130 0 0 1 53.66-91.38l32.93 32.93a32 32 0 0 0 22.62 9.37h37.49a32 32 0 0 0 22.63-9.37l32.93-32.93A130 130 0 0 1 448 401.13c.93 8.29 7.35 14.85 15.68 14.87h16.22a16.13 16.13 0 0 0 16-17.71 178.94 178.94 0 0 0-53.32-110.24H488a32 32 0 0 0 32-32V192zM144 96a23.68 23.68 0 0 0-22.23 16h44.5A23.72 23.72 0 0 0 144 96zm352 0a23.68 23.68 0 0 0-22.23 16h44.5A23.72 23.72 0 0 0 496 96z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="icon" title="and a few more...">
              <span>. . .</span>
            </div>
          </div>
        </div>

        <span style={{ textAlign: "center", display: "block" }}>
          <br />
          <span>
            <FontAwesomeIcon icon={faVideo} />
          </span>
           
          <span>
            Sounds Interesting?
            <OutboundLink href="https://calendly.com/mayank-raj/catch-up">
              Hop on a call with me
            </OutboundLink>
          </span>
        </span>

        <BlogListing posts={posts} is_compact={true} show_bl />
      </div>
    </div>
  </div>
);

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <section>
        <IndexHeader />
        <IndexBody posts={posts} />
        <PageFooter />
      </section>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 20
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            basecolor
            author
            enablecomments
            category
            bgimage
            external_link
            external_site_name
            external_site_link
            page_slug
          }
        }
      }
    }
  }
`;
