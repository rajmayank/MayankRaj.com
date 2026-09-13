import React, { useEffect, useRef, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { showcaseData } from "../../data/showcase";
import useMotion from "../../hooks/useMotion";
import ContentContainer from "../layout/ContentContainer";
import ShowcaseCard from "./ShowcaseCard";

export default function Showcase() {
  const data = useStaticQuery(graphql`
    query ShowcaseImages {
      allFile(filter: { relativePath: { regex: "/showcase/360p/.*.png$/" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 500)
          }
        }
      }
    }
  `);
  const images = Object.fromEntries(
    data.allFile.nodes.map((node) => [node.name, getImage(node)]),
  );
  const section = useRef(null);
  const [exploring, setExploring] = useState(false);
  const [inView, setInView] = useState(false);
  const { reduced, visible } = useMotion();
  const playing = !exploring && !reduced && visible && inView;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={section}
      aria-labelledby="showcase-heading"
      className="mt-16 sm:mt-20"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setExploring(true);
      }}
      onPointerLeave={() => setExploring(false)}
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse") setExploring(true);
      }}
      onPointerUp={(event) => {
        if (event.pointerType !== "mouse") setExploring(false);
      }}
      onPointerCancel={() => setExploring(false)}
    >
      <h2 id="showcase-heading" className="sr-only">
        Speaking and media appearances
      </h2>
      <div className="showcase-slant motion-reduce:hidden" aria-hidden="true">
        <div
          className="showcase-track"
          style={{
            animationPlayState: playing ? "running" : "paused",
            "--showcase-duration": `${(showcaseData.length * 266) / 160}s`,
            "--showcase-duration-wide": `${(showcaseData.length * 466) / 160}s`,
          }}
        >
          {[...showcaseData, ...showcaseData].map((item, index) => (
            <ShowcaseCard
              key={`${item.link}-${index}`}
              item={item}
              image={images[item.link]}
              playing={playing}
            />
          ))}
        </div>
      </div>
      <ul className="sr-only motion-reduce:hidden">
        {showcaseData.map((item) => (
          <li key={item.link}>
            <h3>{item.heading}</h3>
            <p>
              {item.subheading}. {item.banner}.
            </p>
          </li>
        ))}
      </ul>
      <ContentContainer
        width="wide"
        className="hidden grid-cols-1 gap-5 motion-reduce:grid sm:grid-cols-2 lg:grid-cols-3"
      >
        {showcaseData.map((item) => (
          <ShowcaseCard
            key={item.link}
            item={item}
            image={images[item.link]}
            playing={false}
            staticCard
          />
        ))}
      </ContentContainer>
    </section>
  );
}
