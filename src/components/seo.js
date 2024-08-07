import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import ImgWebsiteBase from "../assets/images/base.png";
import ImgWebsiteBaseTwitter from "../assets/images/base_2_1.png";

const Seo = ({ description, lang, meta, title, pathname }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          social {
            twitter
            linkedin
            github
          }
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = "Mayank Raj | Solutions Architect";
  const canonicalUrl = pathname
    ? `${site.siteMetadata.siteUrl}${pathname}`
    : site.siteMetadata.siteUrl;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={"%s | ${site.siteMetadata.title}"}
      link={[
        {
          rel: "canonical",
          href: canonicalUrl,
        },
      ]}
      meta={[
        {
          "http-equiv": "Content-Language",
          content: lang,
        },
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title || defaultTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "og:url",
          content: canonicalUrl,
        },
        {
          name: "og:image",
          content: `https://mayankraj.com${ImgWebsiteBase}`,
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.social.twitter,
        },
        {
          name: "twitter:title",
          content: title || defaultTitle,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: "https://mayankraj.com${ImgWebsiteBaseTwitter}",
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mayank Raj",
          "jobTitle": "Solutions Architect",
          "url": "${site.siteMetadata.siteUrl}",
          "image": "${site.siteMetadata.siteUrl}/static/profile-pic-square-250-50b026f8783002259b57b024497687c7.jpg",
          "sameAs": [
            "${site.siteMetadata.social.twitter}",
            "${site.siteMetadata.social.linkedin}",
            "${site.siteMetadata.social.github}"
          ]
        }
      `}</script>
    </Helmet>
  );
};

Seo.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
  pathname: "",
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string,
};

export default Seo;
