import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {graphql, useStaticQuery} from "gatsby";

import ImgWebsiteBase from "../assets/images/base.png"
import ImgWebsiteBaseTwitter from "../assets/images/base_2_1.png"

function Seo({description, lang, meta, title}) {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title.trimEnd() + " | Mayank Raj"}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title.trimEnd() + " | Mayank Raj",
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: "og:image",
          content: "https://mayankraj.com" + ImgWebsiteBase
        },
        {
          // <meta name="image" property="og:image" content="[Image URL here]">
          name: "image",
          property: "og:image",
          content: "https://mayankraj.com" + ImgWebsiteBase
        },
        {
          name: "author",
          content: "Mayank Raj | Solutions Architect",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: `twitter:creator`,
          content: "@mayank9856",
        },
        {
          name: `twitter:title`,
          content: "Mayank Raj | Solutions Architect",
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: "https://mayankraj.com" + ImgWebsiteBaseTwitter,
        }
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
