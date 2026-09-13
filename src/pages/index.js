import React from "react";

import Disclosure from "../components/ui/Disclosure";
import Prose from "../components/common/Prose";
import PageLayout from "../components/layout/PageLayout";
import { graphql, Link } from "gatsby";
import OutboundLink from "../components/common/OutboundLink";

import {
  BlogPostListing,
  ContentContainer,
  Header,
  Icon,
  Seo,
  Showcase,
} from "../components";

const SKILL_ICONS = ["javascript", "python", "aws", "docker", "drone"];
const HOME_DESCRIPTION =
  "Mayank Raj is a Staff Engineer on Stripe's Infrastructure team, writing about infrastructure, reliability, security, AI systems, cloud architecture, and builder communities.";
const HOME_KEYWORDS =
  "Mayank Raj, Staff Engineer, Stripe Infrastructure, infrastructure, reliability engineering, security, AI systems, cloud architecture, Sudomeet, OpenAI Codex meetups";
const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mayank Raj",
  url: "https://mayankraj.com",
  jobTitle: "Staff Engineer, Infrastructure",
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

const IndexBody = ({ posts, totalCount }) => (
  <>
    <Showcase />

    <ContentContainer>
      <section aria-labelledby="home-resume-link" className="mt-12 text-center">
        <div className="flex items-center justify-center gap-3 text-body font-semibold">
          <span className="inline-flex items-center" aria-hidden="true">
            <Icon name="resume" />
          </span>
          <Link
            id="home-resume-link"
            to="/resume"
            target="_blank"
            rel="noreferrer"
          >
            <span>Resume</span>
          </Link>
        </div>
      </section>

      <Prose as="section" className="mt-10">
        <p>
          Hello, I'm Mayank Raj. I build infrastructure, security, and data
          systems that are expected to keep their composure when production
          starts throwing furniture. I also play the violin, trek whenever the
          mountains allow it, and occasionally convince drones to behave.
          Mostly.
        </p>
        <p>
          By day, I'm a Staff Engineer at{" "}
          <OutboundLink href="https://stripe.com/">Stripe</OutboundLink> on the
          Infrastructure team. That means I spend a lot of time thinking about the
          boring-looking foundations that quietly decide whether everything
          above them feels fast, safe, and reliable. The glamorous part is
          architecture. The honest part is making sure the floor does not
          wobble.
        </p>
        <p>
          Before Stripe, my work moved across security, cryptography, big data,
          AI systems, and cloud platforms. Different rooms, same obsession: make
          the complex thing understandable enough that teams can operate it
          without needing a campfire story and three tribal elders.
        </p>
        <ul>
          <li>
            At{" "}
            <OutboundLink href="https://www.salesforce.com/">
              Salesforce
            </OutboundLink>
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

        <Disclosure>
          <p>
            The work I enjoy most sits at the uncomfortable boundary between
            architecture and operations. The diagram says one thing. Production,
            with its charming lack of respect for diagrams, says another.
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
              raw data for under $30 per query, with an average query time of 8
              minutes. That is less "needle in a haystack" and more "the
              haystack is on fire, the needle is invisible, and finance still
              wants the query to be cheap."
            </li>
            <li>
              I've spoken at conferences, hosted OpenAI Codex community meetups,
              judged and organized hackathons, and built an AR bot assisted by
              LLMs for Salesforce conferences, used by over 450 unique users
              across 4 conferences. Systems are fun. Rooms full of curious
              builders are better.
            </li>
            <li>
              I also run{" "}
              <OutboundLink href="https://sudomeet.com/">Sudomeet</OutboundLink>
              , a place for builders to meet, share what they are learning, and
              make the lonely parts of technical growth a little less lonely.
              Community work is still infrastructure. The packets are just
              people.
            </li>
          </ul>
          <p>
            If you want to talk about infrastructure, reliability, security,
            cloud architecture, AI systems, trekking routes, or why the violin
            is basically distributed systems with nicer failure modes, drop me a
            line!
          </p>
        </Disclosure>
      </Prose>

      <section className="mt-16">
        <div className="flex flex-wrap items-center justify-center gap-4 text-2xl">
          {SKILL_ICONS.map((iconName) => (
            <span
              key={iconName}
              className="inline-flex items-center"
              aria-hidden="true"
            >
              <Icon name={iconName} />
            </span>
          ))}
          <div className="icon" title="and a few more...">
            <span>. . .</span>
          </div>
        </div>
      </section>

      <section className="my-12 flex flex-col items-center gap-2 text-center text-body font-semibold">
        <p className="flex items-center justify-center gap-3">
          <span className="inline-flex items-center" aria-hidden="true">
            <Icon name="videocall" />
          </span>
          Sounds Interesting?
        </p>
        <OutboundLink
          href="https://calendly.com/mayank-raj/catch-up"
          className="brand-link font-semibold text-accent"
        >
          Hop on a call with me
        </OutboundLink>
      </section>

      <BlogPostListing posts={posts} compact totalCount={totalCount} />
    </ContentContainer>
  </>
);

function IndexPage({ data }) {
  return (
    <PageLayout header={<Header />}>
      <IndexBody
        posts={data.allMarkdownRemark.nodes}
        totalCount={data.allMarkdownRemark.totalCount}
      />
    </PageLayout>
  );
}

export default IndexPage;

export const Head = () => (
  <Seo
    title="Staff Engineer, Infrastructure at Stripe"
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
  query HomeArticles {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { frontmatter: { date: DESC } }
      limit: 4
    ) {
      totalCount
      nodes {
        ...ArticleListItem
      }
    }
  }
`;
