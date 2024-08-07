import React, { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

const Showcase = () => {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const showcaseData = [
    {
      image: "static/images/blog_covers/zero-day-introduction.jpeg",
      title: "Showcase Item 1",
      description: "This is a description for showcase item 1.",
      link: "https://www.example.com/item1",
    },
    {
      image: "./static/images/blog_covers/ephemeral-ports.jpeg",
      title: "Showcase Item 2",
      description: "This is a description for showcase item 2.",
      link: "https://www.example.com/item2",
    },
  ];

  const resetAnimation = () => {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");
      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  };

  const setupInstances = () => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();
    const widthDeficit = parentWidth - width;
    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit > 0) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  };

  useEffect(() => {
    setupInstances();
  }, [looperInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);
    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, []);

  return (
    <div>
      <Marquee autoFill={true} speed={150} pauseOnHover={true} gradient={true}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default Showcase;
