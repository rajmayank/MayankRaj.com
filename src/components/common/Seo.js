import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import ImgWebsiteBase from "../../assets/images/base.png";

/**
 * SEO component for managing document head using Gatsby Head API
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
  children,
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

  const seoTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : defaultTitle;

  return (
    <>
      <html lang={lang} key="html" />
      <title key="title">{seoTitle}</title>
      <meta key="description" name="description" content={metaDescription} />
      <meta key="og:title" property="og:title" content={title || defaultTitle} />
      <meta key="og:description" property="og:description" content={metaDescription} />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:url" property="og:url" content={canonicalUrl} />
      <meta key="og:image" property="og:image" content={ogImage} />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={site.siteMetadata.social?.twitter || ""}
      />
      <meta key="twitter:title" name="twitter:title" content={title || defaultTitle} />
      <meta key="twitter:description" name="twitter:description" content={metaDescription} />
      <meta key="twitter:image" name="twitter:image" content={twitterImage} />
      <link key="canonical" rel="canonical" href={canonicalUrl} />
      {meta.map((item, index) => (
        <meta key={`meta-${index}`} {...item} />
      ))}
      <script key="schema-json" type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      {children}
    </>
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
  children: PropTypes.node,
};

export default Seo;
