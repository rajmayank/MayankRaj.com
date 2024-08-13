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
    // "gatsby-plugin-preact",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [100, 150, 200, 250, 750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
      resolve: "gatsby-plugin-sharp",
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
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
      __key: "blogs",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`,
      },
      __key: "assets",
    },
    {
      // resolve: "gatsby-plugin-google-fonts-v2",
      resolve: "gatsby-plugin-google-fonts-with-attributes",
      options: {
        fonts: ["Overpass|Fredoka+One|Courgette"],
        display: "swap",
        attributes: {
          rel: "stylesheet preload prefetch",
          as: "style",
        },
      },
    },
    {
      resolve: "gatsby-plugin-feed",
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
    // "gatsby-plugin-preload-fonts",
    // "gatsby-plugin-perf-budgets",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
  ],
};
