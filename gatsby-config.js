module.exports = {
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
  },
  siteMetadata: {
    siteUrl: "https://mayankraj.com",
    title: "Mayank Raj",
    description:
      "Solutions Architect with experience in building at scale in applied AI/ML, Big Data, Serverless and more. AWS Certified Solutions Architect Professional.",
    author: "Mayank Raj",
    social: {
      twitter: "@mayank9856",
      linkedin: "https://www.linkedin.com/in/mayank9856/",
      github: "https://github.com/rajmayank",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-89686348-1",
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon.png",
        name: "Mayank Raj",
        short_name: "MayankRaj",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {},
        failOnError: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
      __key: "blogs",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
      __key: "assets",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Marck+Script|Patua+One|Righteous|Overpass|Fredoka+One|Courgette|Monoton|Cabin+Sketch|Playball`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl + edge.node.frontmatter.page_slug,
                  guid:
                    site.siteMetadata.siteUrl + edge.node.frontmatter.page_slug,
                  custom_elements: [{ "content:encoded": edge.node.html }], // Fixed typo in key
                });
              });
            },
            query: `
              {
                allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter { title
                        date
                        page_slug
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "RSS Feed | Mayank Raj",
          },
        ],
      },
    },
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-schema-snapshot",
  ],
};
