import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const GooFilter = () => (
  <svg
    style={{ visibility: "hidden", position: "absolute" }}
    width="0"
    height="0"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
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
);

const CompactHeader = ({
  title,
  category,
  date,
  bgImageName,
  mood = "#fdfdfd",
  readingTime,
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "images/blog_covers" } }) {
        edges {
          node {
            base
            name
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  const imageData = data.allFile.edges.find(
    (edge) => edge.node.name === bgImageName
  );

  const gatsbyImageData = imageData
    ? getImage(imageData.node.childImageSharp.gatsbyImageData)
    : getImage(
        data.allFile.edges.find((edge) => edge.node.name === "blog_index_cover")
          .node.childImageSharp.gatsbyImageData
      );

  return (
    <header className="compact" style={{ "--mood": mood }}>
      {gatsbyImageData && (
        <GatsbyImage
          image={gatsbyImageData}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      )}
      <div className="compact-header-container">
        <GooFilter />
        <div className="text-container">
          <div className="merged-bg-container title">
            <span>{title}</span>
          </div>
          {(category || date) && (
            <div className="merged-bg-container meta-data">
              <span>
                {category}
                {category && date && <br />}
                {date}
                {readingTime && ` | ${readingTime}`}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

CompactHeader.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  date: PropTypes.string,
  bgImageName: PropTypes.string,
  mood: PropTypes.string,
  readingTime: PropTypes.string,
};

export default CompactHeader;
