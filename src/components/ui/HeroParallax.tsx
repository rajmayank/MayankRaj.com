// Thanks to https://ui.aceternity.com/

import React from "react";
import { cn } from "@/utils";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

const HeroParallax = ({
  showcases,
}: {
  showcases: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = showcases.slice(0, 5);
  const secondRow = showcases.slice(5, 10);
  const thirdRow = showcases.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] w-screen"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((showcase) => (
            <ShowcaseCard
              showcase={showcase}
              translate={translateX}
              key={showcase.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((showcase) => (
            <ShowcaseCard
              showcase={showcase}
              translate={translateXReverse}
              key={showcase.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((showcase) => (
            <ShowcaseCard
              showcase={showcase}
              translate={translateX}
              key={showcase.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="w-full relative py-20 md:py-40 px-4 left-0 top-0">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
          Mayank Raj <br />
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          Hello, I'm Mayank Raj. Picture this: a violinist who codes, a trekker
          who builds AI systems, and a drone enthusiast who secures the digital
          world. That's me in a nutshell, but let's dive a bit deeper, shall we?
        </p>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          By day, I'm a Lead Engineer at Salesforce , where I wear the cape of a
          digital locksmith. My mission? To fortify the Salesforce ecosystem with
          unbreakable cryptography. It's like being a secret agent, but instead of
          shaken martinis, I deal with stirred algorithms.
        </p>
      </div>
    </div>
  );
};

const ShowcaseCard = ({
  showcase,
  translate,
}: {
  showcase: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={showcase.title}
      className="group/showcase h-96 w-[30rem] relative flex-shrink-0"
    >
      <a
        href={showcase.link}
        className={cn("block group-hover/showcase:shadow-2xl")}
      >
        <img
          src={showcase.thumbnail}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={showcase.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/showcase:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/showcase:opacity-100 text-white">
        {showcase.title}
      </h2>
    </motion.div>
  );
};
export default HeroParallax;
