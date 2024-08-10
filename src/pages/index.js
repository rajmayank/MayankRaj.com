import React from "react";

import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { graphql, Link } from "gatsby";

import BlogListing from "../components/blog-post-listing";
import PageFooter from "../components/footer";
import Seo from "../components/seo";
import Showcase from "../components/showcase";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import "../styles/main.scss";

import { StaticImage } from "gatsby-plugin-image";
import Icon from "../components/Icon";

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
          <Icon name="headerName" />
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
            <StaticImage
              src="../assets/images/badges/aws-certified-solutions-architect-associate.png"
              alt="AWS Certified Solutions Architect – Associate"
              className="animate"
              width={150}
              placeholder="blurred"
            />
          </OutboundLink>
          <OutboundLink
            href="https://www.credly.com/badges/8a486510-a537-48f1-a29e-2643aa626be0/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../assets/images/badges/aws-certified-solutions-architect-professional.png"
              alt="AWS Certified Solutions Architect – Professional"
              className="animate professional"
              width={150}
              placeholder="blurred"
            />
          </OutboundLink>
          <OutboundLink
            href="https://www.credly.com/badges/1d2d51a2-4c93-44d2-869a-d75e367d3845/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../assets/images/badges/cka-certified-kubernetes-administrator.png"
              alt="CKA - Certified Kubernetes Administrator"
              className="animate size-bg"
              width={150}
              placeholder="blurred"
            />
          </OutboundLink>
        </div>
      </div>
    </div>
  </header>
);

const IndexBody = ({ posts }) => (
  <div>
    <div>
      <Showcase />
    </div>

    <div className="body-container">
      <div className="content-container">
        <div className="text text-justify text-spacers">
          <div className="content-resume section-top-margin --tight">
            <div className="icon">
              <Icon name="resume" />
            </div>
            <Link to="/resume" target="_blank" rel="noreferrer">
              <span>Resume</span>
            </Link>
          </div>

          <div className="section-top-margin --tight">
            <p>
              Hello, I'm Mayank Raj. Picture this: a violinist who codes, a
              trekker who builds AI systems, and a drone enthusiast who secures
              the digital world. That's me in a nutshell, but let's dive a bit
              deeper, shall we?
            </p>
            <p>
              By day, I'm a Lead Engineer at{" "}
              <OutboundLink href="https://www.salesforce.com/">
                Salesforce
              </OutboundLink>{" "}
              , where I wear the cape of a digital locksmith. My mission? To
              fortify the Salesforce ecosystem with unbreakable cryptography.
              It's like being a secret agent, but instead of shaken martinis, I
              deal with stirred algorithms.
            </p>
            <p>
              But my journey hasn't always been about digital fortresses. I've
              worn many hats in my tech odyssey:
            </p>
            <ul>
              <li>
                At{" "}
                <OutboundLink href="https://cactusglobal.com/brands/cactus-labs/">
                  Cactus Labs
                </OutboundLink>{" "}
                , I was the ringmaster of a 15+ engineer circus, juggling big
                data and machine learning acts. We built a data platform that
                could swallow 1.5TB of data per week and spit out insights
                faster than you can say "algorithm."
              </li>
              <li>
                As the founder of{" "}
                <OutboundLink href="https://Apptale.io/">
                  Apptale.io
                </OutboundLink>
                , I created a monitoring service that keeps an eagle eye on
                systems across all 51 AWS availability zones. It's like having a
                digital guardian angel for your apps, but at 1/15th the cost of
                its competitors.
              </li>
              <li>
                I've also contributed to open-source projects like{" "}
                <OutboundLink href="https://www.mozilla.org/en-US/firefox/">
                  FireFox
                </OutboundLink>
                . Yes, that browser you might be using right now – I've left my
                fingerprints on its code!
              </li>
            </ul>
            <p>
              When I'm not immersed in the digital realm, you might find me
              scaling mountains, coaxing melodies from my violin, or tinkering
              with drones. I believe in the power of diverse experiences to fuel
              creativity and innovation in tech.
            </p>

            <Accordion id="IndexAccordianReadMore">
              <AccordionDetails id="IndexAccordianReadMoreDetails">
                <p>
                  Remember, in the world of tech, as in music, it's not just
                  about playing the right notes – it's about making them dance
                  together in perfect harmony. And sometimes, it's about knowing
                  when to improvise a killer solo.
                </p>
                <p>
                  I'm passionate about bridging the gap between complex
                  technology and real-world applications. Whether it's designing
                  systems that process terabytes of data or crafting APIs that
                  handle thousands of requests with sub-second latency, I love
                  making tech work smarter, not harder.
                </p>
                <p>But here's where it gets really interesting:</p>
                <ul>
                  <li className="text-hidden">
                    I've been known to pull rabbits out of hats – or rather,
                    pull 42% performance improvements out of existing systems.
                    At Salesforce, I engineered benchmarking tools and caching
                    layers that not only boosted system throughput but also
                    slashed costs by 71%. Who says you can't have your cake and
                    eat it too?
                  </li>
                  <li className="text-hidden">
                    I'm a firm believer in the "five nines" philosophy. I led
                    efforts to improve service availability from 99.99% to
                    99.999% at Salesforce. It's like turning a reliable watch
                    into an atomic clock.
                  </li>
                  <li>
                    I've got a knack for turning complex data into actionable
                    insights. I architected a graph database engine that can
                    query ~8Tb of raw data for under $30 per query, with an
                    average query time of just 8 minutes. It's like finding a
                    needle in a haystack, if the haystack were the size of Texas
                    and the needle were invisible.
                  </li>
                  <li>
                    I'm not just about the tech – I'm about the people too. I've
                    mentored teams, judged hackathons, and even built an AR bot
                    assisted by LLMs for Salesforce conferences, used by over
                    450 unique users across 4 conferences. It's my way of giving
                    back to the tech community that's given me so much.
                  </li>
                </ul>
                <p className="text-hidden">
                  Currently, I'm on the lookout for senior technology leadership
                  roles and speaking opportunities at conferences. I'm
                  particularly interested in discussing emerging trends like
                  edge computing, quantum-resistant cryptography, and the
                  intersection of AI and cybersecurity.
                </p>
                <p>
                  If you're interested in discussing how we can push the
                  boundaries of technology together, or if you just want to chat
                  about the best trekking routes or the future of serverless
                  architecture, drop me a line!
                </p>
              </AccordionDetails>
              <AccordionSummary
                id="IndexAccordianReadMoreSumary"
                sx={{
                  borderTop: "1px solid #ccc",
                  "& .read-less": {
                    display: "none",
                  },
                  "&.Mui-expanded .read-more": {
                    display: "none",
                  },
                  "&.Mui-expanded .read-less": {
                    display: "inline", // or "block" depending on your desired display
                  },
                }}
              >
                <span className="read-more">Read More</span>
                <span className="read-less">Read Less</span>
              </AccordionSummary>
            </Accordion>
          </div>

          <br />

          <div className="content-block">
            <div className="icons-block">
              <div className="icon">
                <Icon name="javascript" />
                <Icon name="python" />
                <Icon name="aws" />
                <Icon name="docker" />
                <Icon name="drone" />
              </div>
              <div className="icon" title="and a few more...">
                <span>. . .</span>
              </div>
            </div>
          </div>

          <span style={{ textAlign: "center", display: "block" }}>
            <br />
            <span>
              <Icon
                name="videocall"
                style={{
                  height: "1em",
                  overflow: "hidden",
                  verticalAlign: "-0.125em",
                }}
              />
            </span>
            &nbsp;
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
  </div>
);

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 20) {
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
