import React from "react";

import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { graphql, Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import {
  BlogPostListing,
  ContentContainer,
  Footer,
  Header,
  Icon,
  Seo,
  Showcase,
} from "../components";

const SKILL_ICONS = ["javascript", "python", "aws", "docker", "drone"];
const HOME_DESCRIPTION =
  "Mayank Raj is a Staff Engineer on Stripe's Core Infra team, writing about infrastructure, reliability, security, AI systems, cloud architecture, and builder communities.";
const HOME_KEYWORDS =
  "Mayank Raj, Staff Engineer, Stripe Core Infra, infrastructure, reliability engineering, security, AI systems, cloud architecture, Sudomeet, OpenAI Codex meetups";
const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mayank Raj",
  url: "https://mayankraj.com",
  jobTitle: "Staff Engineer, Core Infra",
  worksFor: {
    "@type": "Organization",
    name: "Stripe",
    url: "https://stripe.com",
  },
  founder: {
    "@type": "Organization",
    name: "Sudomeet",
    url: "https://sudomeet.com",
  },
  sameAs: [
    "https://www.linkedin.com/in/mayank9856/",
    "https://github.com/rajmayank",
    "https://x.com/mayank9856",
  ],
  knowsAbout: [
    "Core infrastructure",
    "Reliability engineering",
    "Security",
    "AI systems",
    "Cloud architecture",
    "Developer communities",
  ],
};

const IndexBody = ({ posts }) => (
  <>
    <Showcase />

    <ContentContainer as="main" className="content-body text-justify">
      <section aria-labelledby="home-resume-link" className="mt-16 text-center">
        <div className="flex items-center justify-center gap-3 font-primary text-[2rem] font-semibold leading-[1.4]">
          <span className="icon-wrapper" aria-hidden="true">
            <Icon name="resume" />
          </span>
          <Link id="home-resume-link" to="/resume" target="_blank" rel="noreferrer">
            <span>Resume</span>
          </Link>
        </div>
      </section>

      <section className="mt-16 font-primary text-[1.9rem] font-normal leading-[1.6]">
        <p>
          Hello, I'm Mayank Raj. I build infrastructure, security, and data
          systems that are expected to keep their composure when production
          starts throwing furniture. I also play the violin, trek whenever the
          mountains allow it, and occasionally convince drones to behave. Mostly.
        </p>
        <p>
          By day, I'm a Staff Engineer at{" "}
          <OutboundLink href="https://stripe.com/">Stripe</OutboundLink> on the
          Core Infra team. That means I spend a lot of time thinking about the
          boring-looking foundations that quietly decide whether everything
          above them feels fast, safe, and reliable. The glamorous part is
          architecture. The honest part is making sure the floor does not wobble.
        </p>
        <p>
          Before Stripe, my work moved across security, cryptography, big data,
          AI systems, and cloud platforms. Different rooms, same obsession:
          make the complex thing understandable enough that teams can operate it
          without needing a campfire story and three tribal elders.
        </p>
        <ul>
          <li>
            At{" "}
            <OutboundLink href="https://www.salesforce.com/">Salesforce</OutboundLink>
            , I worked on security and cryptography for large-scale enterprise
            systems, including benchmarking, caching, and reliability work that
            improved throughput while cutting cost. Very glamorous if your idea
            of glamour includes threat models and suspicious latency graphs.
          </li>
          <li>
            At{" "}
            <OutboundLink href="https://cactusglobal.com/brands/cactus-labs/">
              Cactus Labs
            </OutboundLink>
            , I led a 15+ engineer team building big data and machine learning
            systems. We built a data platform that handled 1.5TB of data per
            week and turned it into decisions people could actually use, which
            is the part the architecture diagrams often forget.
          </li>
          <li>
            As the founder of{" "}
            <OutboundLink href="https://Apptale.io/">Apptale.io</OutboundLink>,
            I created a monitoring service that watched systems across all 51
            AWS availability zones at roughly 1/15th the cost of comparable
            tools. Infrastructure tends to whisper before it screams. Apptale
            was built to hear the whisper.
          </li>
          <li>
            I've also contributed to open-source projects like{" "}
            <OutboundLink href="https://www.mozilla.org/en-US/firefox/">
              FireFox
            </OutboundLink>
            . Yes, that browser you might be using right now. Tiny fingerprints,
            but fingerprints nonetheless.
          </li>
        </ul>
        <p>
          When I'm not deep in the machinery, you might find me scaling
          mountains, coaxing melodies from my violin, or tinkering with drones.
          The through-line is the same: systems are easier to understand when
          you respect both the theory and the messy physical world they live in.
        </p>

        <Accordion id="IndexAccordianReadMore">
          <AccordionDetails id="IndexAccordianReadMoreDetails">
            <p>
              The work I enjoy most sits at the uncomfortable boundary between
              architecture and operations. The diagram says one thing.
              Production, with its charming lack of respect for diagrams, says
              another.
            </p>
            <p>
              That is where I like to work: reliability problems, security
              boundaries, data systems, cost cliffs, and the small design choices
              that quietly decide whether a system is pleasant to operate or a
              permanent group project with incident management.
            </p>
            <p>A few representative scars:</p>
            <ul>
              <li>
                I've architected a graph database engine that can query ~8TB of
                raw data for under $30 per query, with an average query time of
                8 minutes. That is less "needle in a haystack" and more "the
                haystack is on fire, the needle is invisible, and finance still
                wants the query to be cheap."
              </li>
              <li>
                I've spoken at conferences, hosted OpenAI Codex community meetups,
                judged and organized hackathons, and built an AR bot assisted by LLMs
                for Salesforce conferences, used by over 450 unique users across
                4 conferences. Systems are fun. Rooms full of curious builders
                are better.
              </li>
              <li>
                I also run{" "}
                <OutboundLink href="https://sudomeet.com/">Sudomeet</OutboundLink>,
                a place for builders to meet, share what they are learning, and
                make the lonely parts of technical growth a little less lonely.
                Community work is still infrastructure. The packets are just
                people.
              </li>
            </ul>
            <p>
              If you want to talk about infrastructure, reliability, security,
              cloud architecture, AI systems, trekking routes, or why the violin
              is basically distributed systems with nicer failure modes, drop me
              a line!
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
                display: "inline",
              },
            }}
          >
            <span className="read-more">Read More</span>
            <span className="read-less">Read Less</span>
          </AccordionSummary>
        </Accordion>
      </section>

      <section className="mt-16">
        <div className="icons-block font-primary text-[2.4rem] font-semibold leading-[1.3]">
          {SKILL_ICONS.map((iconName) => (
            <span key={iconName} className="icon-wrapper" aria-hidden="true">
              <Icon name={iconName} />
            </span>
          ))}
          <div className="icon" title="and a few more...">
            <span>. . .</span>
          </div>
        </div>
      </section>

      <section className="my-12 flex items-center justify-center gap-3 text-center font-primary text-[2rem] font-semibold leading-[1.4]">
        <span className="icon-wrapper" aria-hidden="true">
          <Icon name="videocall" />
        </span>
        <span>
          Sounds Interesting?{" "}
          <OutboundLink
            href="https://calendly.com/mayank-raj/catch-up"
            className="whitespace-nowrap font-bold text-accent underline hover:no-underline"
          >
            Hop on a call with me
          </OutboundLink>
        </span>
      </section>

      <BlogPostListing posts={posts} is_compact={true} />
    </ContentContainer>
  </>
);

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <section>
        <Header />
        <IndexBody posts={posts} />
        <Footer />
      </section>
    );
  }
}

export default IndexPage;

export const Head = () => (
  <Seo
    title="Staff Engineer, Core Infra at Stripe"
    description={HOME_DESCRIPTION}
    pathname="/"
    meta={[
      {
        name: "keywords",
        content: HOME_KEYWORDS,
      },
    ]}
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
    />
  </Seo>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { frontmatter: { date: DESC } }
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
