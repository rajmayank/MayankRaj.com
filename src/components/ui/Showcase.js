import React, { memo, useMemo } from "react";
import Marquee from "react-fast-marquee";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

// Import video posters
import OSI_2023_Timelapse_Poster from "../../assets/showcase/360p/OSI_2023_Timelapse.png";
import GIDS_2024_Timelapse_Poster from "../../assets/showcase/360p/GIDS_2024_Timelapse.png";

import OSI_2023_Timelapse from "../../assets/showcase/360p/OSI_2023_Timelapse.webm";
import GIDS_2024_Timelapse from "../../assets/showcase/360p/GIDS_2024_Timelapse.webm";

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
    video: OSI_2023_Timelapse,
    poster: OSI_2023_Timelapse_Poster,
  },
  {
    type: "video",
    link: "GIDS_2024_Timelapse",
    heading: "Developers Summit",
    subheading: "Resilient Cybersecurity Strategies",
    banner: "Summit",
    video: GIDS_2024_Timelapse,
    poster: GIDS_2024_Timelapse_Poster,
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
    type: "image",
    link: "OSFY_Interview",
    heading: "Open Source For You",
    subheading: "Open Source Ecosystem",
    banner: "Media Publications",
  },
];

/**
 * Showcase component displaying portfolio items in a scrolling marquee
 * Features both image and video content with overlay text
 */
const Showcase = memo(() => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/showcase/360p/.*.png$/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 500)
          }
          name
        }
      }
    }
  `);

  const images = useMemo(
    () =>
      data.allFile.nodes.reduce((acc, node) => {
        acc[node.name] = getImage(node.childImageSharp.gatsbyImageData);
        return acc;
      }, {}),
    [data.allFile.nodes]
  );

  return (
    <div
      className="section-top-margin"
      style={{
        minHeight: "300px",
        transition: "height 0.3s ease-in-out",
      }}
    >
      <Marquee
        autoFill={true}
        speed={275}
        pauseOnHover={true}
        gradient={true}
        gradientWidth={50}
        style={{
          transform: "skewY(3deg)",
          minHeight: "150px",
          transition: "height 0.3s ease-in-out",
        }}
      >
        {showcaseData.map((item, index) => (
          <Card
            key={index}
            sx={{
              minWidth: { xs: "250px", md: "450px" },
              width: { xs: "250px", md: "450px" },
              minHeight: { xs: "150px", md: "250px" },
              height: { xs: "150px", md: "250px" },
              flexGrow: 1,
              mx: 1,
              transform: `skewX(-3deg)`,
            }}
            orientation="horizontal"
            style={{ transform: "skewX(-3deg)" }}
          >
            <CardCover>
              {item.type === "image" ? (
                images[item.link] ? (
                  <GatsbyImage
                    image={images[item.link]}
                    alt={item.heading}
                    style={{
                      width: "100%",
                      height: "100%",
                      verticalAlign: "unset",
                      position: "unset",
                    }}
                    imgStyle={{
                      objectFit: "cover",
                      objectPosition: "bottom",
                    }}
                    loading="eager"
                  />
                ) : (
                  <div>{item.heading}</div>
                )
              ) : (
                <video autoPlay loop muted poster={item.poster}>
                  <source src={item.video} type="video/webm" />
                </video>
              )}
            </CardCover>

            <CardCover
              sx={{
                background:
                  "linear-gradient(to top right, #ff999926, rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />

            <CardContent
              sx={{
                justifyContent: "flex-end",
                transform: "rotate(-3deg)",
                marginBottom: "10px",
              }}
            >
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
              sx={{
                px: 0.4,
                writingMode: "vertical-rl",
                justifyContent: "center",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderLeft: "1px solid",
                borderColor: "divider",
                marginRight: "-12px",
              }}
            >
              <Typography color="danger" level="h3" component="h4">
                {item.banner}
              </Typography>
            </CardOverflow>
          </Card>
        ))}
      </Marquee>
    </div>
  );
});

export default Showcase;
