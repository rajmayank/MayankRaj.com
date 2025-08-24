import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import ImgWebsiteBase from "../../assets/images/base.png";

/**
 * SEO component for managing document head
 * Handles meta tags, Open Graph, Twitter Cards, and structured data
 */
const Seo = ({
  description = ``,
  lang = `en`,
  meta = [],
  title,
  pathname = ``,
  image,
  article = false,
  datePublished,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;
  const canonicalUrl = pathname
    ? `${site.siteMetadata.siteUrl}${pathname}`
    : site.siteMetadata.siteUrl;
  const ogImage = `${site.siteMetadata.siteUrl}${image || ImgWebsiteBase}`;
  const twitterImage = `${site.siteMetadata.siteUrl}${image || ImgWebsiteBase}`;

  // Create schema.org JSONLD
  const schemaOrgJSONLD = [
    {
      "@context": "https://schema.org",
      "@type": article ? "BlogPosting" : "Website",
      headline: title || defaultTitle,
      image: ogImage,
      author: {
        "@type": "Person",
        name: site.siteMetadata.author,
      },
      publisher: {
        "@type": "Organization",
        name: site.siteMetadata.author,
        logo: {
          "@type": "ImageObject",
          url: ogImage,
        },
      },
      url: canonicalUrl,
      description: metaDescription,
      datePublished,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[{ rel: "canonical", href: canonicalUrl }]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title || defaultTitle,
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
          property: `og:url`,
          content: canonicalUrl,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title || defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: twitterImage,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  datePublished: PropTypes.string,
};

export default Seo;
