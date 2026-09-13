import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ArticleMeta from "../blog/ArticleMeta";
import ContentContainer from "./ContentContainer";

export default function CompactHeader({
  title,
  category,
  date,
  dateISO,
  image,
  color,
}) {
  const cover = getImage(image);
  return (
    <header className="article-header" style={{ "--article-color": color }}>
      {cover && (
        <GatsbyImage
          image={cover}
          alt=""
          loading="eager"
          style={{ position: "absolute", inset: 0, zIndex: -2 }}
        />
      )}
      <ContentContainer width="wide">
        <svg aria-hidden="true" width="0" height="0" className="absolute">
          <defs>
            <filter id="article-goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="5"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        <h1 className="article-heading text-article-title">
          <span>{title}</span>
        </h1>
        {(category || date) && (
          <div className="mt-6 inline-block rounded-lg bg-white px-4 py-3 text-front">
            <ArticleMeta category={category} date={date} dateISO={dateISO} />
          </div>
        )}
      </ContentContainer>
    </header>
  );
}
export const articleCover = graphql`
  fragment ArticleCover on File {
    publicURL
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, quality: 70)
    }
  }
`;
