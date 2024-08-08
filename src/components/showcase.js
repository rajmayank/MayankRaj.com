import React from "react";
import Marquee from "react-fast-marquee";
import { graphql, useStaticQuery } from "gatsby";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// TODO: Major cleanup here
// Fix resolutions & video impports
import OSI_2023_Timelapse from "../assets/showcase/360p/OSI_2023_Timelapse.webm";
import GIDS_2024_Timelapse from "../assets/showcase/360p/GIDS_2024_Timelapse.webm";

const showcaseData = [
  {
    type: "image",
    link: "CactusTech_Interview2",
    heading: "Interview @ CactusTech",
    subheading: "An Associate Director talks opportunities",
    banner: "Media Publication",
  },
  {
    type: "video",
    link: "OSI_2023_Timelapse",
    heading: "Open Source India",
    subheading: "GitOps Mastery",
    banner: "Conference",
    image: null,
    video: OSI_2023_Timelapse,
  },
  {
    type: "video",
    link: "GIDS_2024_Timelapse",
    heading: "Developers Summit",
    subheading: "Resilient Cybersecurity Strategies",
    banner: "Summit",
    video: GIDS_2024_Timelapse,
  },
  {
    type: "image",
    link: "AuthO_Jenkins",
    heading: "AuthO by Okta",
    subheading: "CI pipelines",
    banner: "Guest post",
  },
  {
    type: "image",
    link: "DigitalOcean_RXJS",
    heading: "DigitalOcean",
    subheading: "Search Bar with RxJS",
    banner: "Guest post",
  },
  {
    type: "video",
    link: "OSFY_Interview",
    heading: "Open Source For You",
    subheading: "Open Source Ecosystem",
    banner: "Media Publications",
  },
];

const Showcase = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/showcase/360p/.*.png$/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          name
        }
      }
    }
  `);

  const images = data.allFile.nodes.reduce((acc, node) => {
    acc[node.name] = getImage(node.childImageSharp.gatsbyImageData);
    return acc;
  }, {});

  return (
    <div className="section-top-margin">
      <Marquee
        autoFill={true}
        speed={350}
        pauseOnHover={true}
        gradient={true}
        gradientWidth={50}
        style={{
          transform: "skewY(3deg)",
        }}
      >
        <Box
          component="ul"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0,
            p: 0,
            m: 0,
          }}
        >
          {showcaseData.map((item, index) => (
            <Card
              key={index}
              sx={{
                width: 750,
                height: 350,
                flexGrow: 1,
                mx: 1,
              }}
              md={{
                width: 600,
                maxwidth: 600,
              }}
              orientation="horizontal"
            >
              <CardCover>
                {item.type === "image" ? (
                  images[item.link] ? (
                    <GatsbyImage
                      image={images[item.link]}
                      alt={item.heading}
                      style={{ width: "100%", height: "100%" }}
                      imgStyle={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div>{item.heading}</div>
                  )
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    poster={`../assets/showcase/360p/${item.link}.png`}
                  >
                    <source src={item.video} type="video/webm" />
                  </video>
                )}
              </CardCover>

              <CardCover
                sx={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                }}
              />

              <CardContent sx={{ justifyContent: "flex-end" }}>
                <Typography
                  level="h3"
                  component="h4"
                  sx={{ opacity: "70%" }}
                  textColor="#fff"
                >
                  {item.subheading}
                </Typography>

                <Typography
                  level="h1"
                  component="h4"
                  fontWeight="lg"
                  textColor="#fff"
                >
                  {item.heading}
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                color="danger"
                level="h1"
                component="h4"
                sx={{
                  px: 0.4,
                  writingMode: "vertical-rl",
                  justifyContent: "center",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  borderLeft: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography color="danger" level="h3" component="h4">
                  {item.banner}
                </Typography>
              </CardOverflow>
            </Card>
          ))}
        </Box>
      </Marquee>
    </div>
  );
};

export default Showcase;
