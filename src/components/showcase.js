import React from "react";
import Marquee from "react-fast-marquee";

import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

const showcaseData = [
  {
    type: "image",
    link: "showcase/360p/CactusTech_Interview2",
    heading: "Interview @ CactusTech",
    subheading: "An Associate Director talks opportunities",
    banner: "Media Publication",
  },
  {
    type: "video",
    link: "showcase/360p/OSI_2023_Timelapse",
    heading: "Open Source India",
    subheading: "GitOps Mastery",
    banner: "Conference",
  },
  {
    type: "video",
    link: "showcase/360p/GIDS_2024_Timelapse",
    heading: "Developers Summit",
    subheading: "Resilient Cybersecurity Strategies",
    banner: "Summit",
  },

  {
    type: "image",
    link: "showcase/360p/AuthO_Jenkins",
    heading: "AuthO by Okta",
    subheading: "CI pipelines",
    banner: "Guest post",
  },
  {
    type: "image",
    link: "showcase/360p/DigitalOcean_RXJS",
    heading: "DigitalOcean",
    subheading: "Search Bar with RxJS",
    banner: "Guest post",
  },
  {
    type: "video",
    link: "showcase/360p/OSFY_Interview",
    heading: "Open Source For You",
    subheading: "Open Source Ecosystem",
    banner: "Media Publications",
  },
];

const Showcase = () => {
  return (
    <div className="section-top-margin --tight">
      <Marquee
        autoFill={true}
        speed={250}
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
                minWidth: 600,
                maxwidth: 600,
                height: 400,
                flexGrow: 1,
                mx: 1,
              }}
              orientation="horizontal"
            >
              <CardCover>
                {item.type === "image" ? (
                  <img
                    src={item.link + ".png"}
                    loading="lazy"
                    alt={item.title}
                  />
                ) : (
                  <video autoPlay loop muted poster={item.link + ".png"}>
                    <source src={item.link + ".webm"} type="video/mp4" />
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
