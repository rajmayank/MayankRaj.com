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
    type: "video",
    link: "showcase/OSI_2023_Timelapse.mp4",
    title: "GitOps Mastery",
    banner: "Open Source India",
  },
  {
    type: "video",
    link: "showcase/GIDS_2024_Timelapse.mp4",
    title: "Resilient Cybersecurity Strategies",
    banner: "GIDS 2024",
  },
  {
    type: "video",
    link: "showcase/CactusTech_Interview2.mp4",
    title: "An Associate Director talks opportunities",
    banner: "Interview @ CactusTech",
  },
  {
    type: "video",
    link: "showcase/AuthO_Jenkins.mp4",
    title: "Managing Continuous Integration Pipelines with Jenkins",
    banner: "AuthoO by Okta",
  },
  {
    type: "video",
    link: "showcase/DigitalOcean_RXJS.mp4",
    title: "How To Build a Search Bar with RxJS",
    banner: "DigitalOcean",
  },
  {
    type: "video",
    link: "showcase/OSFY_Interview.mp4",
    title: "Interview",
    banner: "Interview @ Open Source For You",
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
        gradientWidth={100}
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
              component="li"
              sx={{ width: 400, flexGrow: 1 }}
              orientation="horizontal"
            >
              <CardCover
                sx={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                }}
              >
                {item.type === "image" ? (
                  <img src={item.link} loading="lazy" alt={item.title} />
                ) : (
                  <video autoPlay loop muted poster={item.image}>
                    <source src={item.link} type="video/mp4" />
                  </video>
                )}
              </CardCover>
              <CardContent sx={{ justifyContent: "flex-end" }}>
                <Typography
                  level="title-lg"
                  fontWeight="lg"
                  textColor="#fff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  {item.title}
                </Typography>
                <Typography level="body-lg" textColor="#fff">
                  {item.description}
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                color="primary"
                sx={{
                  px: 0.2,
                  writingMode: "vertical-rl",
                  justifyContent: "center",
                  fontSize: "xs",
                  fontWeight: "xl",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  borderLeft: "1px solid",
                  borderColor: "divider",
                }}
              >
                {item.banner}
              </CardOverflow>
            </Card>
          ))}
        </Box>
      </Marquee>
    </div>
  );
};

export default Showcase;
