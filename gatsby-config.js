module.exports = {
  siteMetadata: {
    siteUrl: "https://mayankraj.com",
    title: "MayankRaj",
    description: "Solutions architect lorem ipsum", // TODO: update this
    author: "Mayank Raj"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-feed",
    "gatsby-transformer-sharp",
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
      },
    },
    // "gatsby-plugin-mdx",

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // icon: "src/assets/images/favicon.png",
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
      },
    },

    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
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
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
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
            serialize: ({query: {site, allMarkdownRemark}}) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.page_slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.page_slug,
                  custom_elements: [{"content:encoded": edge.node.html}],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        page_slug
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Rss | Mayank Raj",
          },
        ],
      }
    }
  ],
};
