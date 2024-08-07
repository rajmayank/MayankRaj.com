// File: seo.js

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import ImgWebsiteBase from "../assets/images/base.png";
import ImgWebsiteBaseTwitter from "../assets/images/base_2_1.png";

const Seo = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = "Mayank Raj | Solutions Architect"; // Define a default title

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title} // Use the provided title directly
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title || defaultTitle, // Use provided title or default
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
          name: `og:image`, // Use consistent naming for Open Graph image
          content: `https://mayankraj.com${ImgWebsiteBase}`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: `@mayank9856`,
        },
        {
          name: `twitter:title`,
          content: title || defaultTitle, // Use provided title or default
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: `https://mayankraj.com${ImgWebsiteBaseTwitter}`,
        },
      ].concat(meta)}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired, // Title is now required
};

export default Seo;
