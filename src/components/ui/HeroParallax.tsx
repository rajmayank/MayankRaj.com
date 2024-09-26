// Thanks to https://ui.aceternity.com/

import React, { useMemo } from "react";
import { cn } from "@/utils";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  AnimatePresence,
} from "framer-motion";
import CertificationBadges from "../CertificationBadges";
import { badges } from "../../utils/badges";

// Seeded random number generator
const seededRandom = (seed: number) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

const HeroParallax = ({
  showcases,
}: {
  showcases: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const getRow = (rowLength: number, seed: number) => {
    const row = [];
    const indices = [...Array(showcases.length)].map((_, i) => i);
    for (let i = 0; i < rowLength; i++) {
      const randomIndex = Math.floor(seededRandom(seed + i) * indices.length);
      row.push(showcases[indices[randomIndex]]);
      indices.splice(randomIndex, 1);
    }
    return row;
  };

  const firstRow = useMemo(() => getRow(5, 1), [showcases]);
  const secondRow = useMemo(() => getRow(5, 2), [showcases]);
  const thirdRow = useMemo(() => getRow(5, 3), [showcases]);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  const translateX = useSpring(scrollYProgress, springConfig);
  const translateXReverse = useSpring(scrollYProgress, springConfig);
  const rotateX = useSpring(scrollYProgress, springConfig);
  const opacity = useSpring(scrollYProgress, springConfig);
  const rotateZ = useSpring(scrollYProgress, springConfig);
  const translateY = useSpring(scrollYProgress, springConfig);

  const animatedStyles = useMemo(
    () => ({
      translateX: useTransform(translateX, [0, 1], [0, 1000]),
      translateXReverse: useTransform(translateXReverse, [0, 1], [0, -1000]),
      rotateX: useTransform(rotateX, [0, 0.2], [15, 0]),
      opacity: useTransform(opacity, [0, 0.2], [0.2, 1]),
      rotateZ: useTransform(rotateZ, [0, 0.2], [20, 0]),
      translateY: useTransform(translateY, [0, 0.2], [-700, 500]),
    }),
    [translateX, translateXReverse, rotateX, opacity, rotateZ, translateY]
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] w-screen"
    >
      <Header />
      <motion.div
        style={{
          rotateX: animatedStyles.rotateX,
          rotateZ: animatedStyles.rotateZ,
          translateY: animatedStyles.translateY,
          opacity: animatedStyles.opacity,
        }}
        className="z-0"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((showcase) => (
            <ShowcaseCard
              showcase={showcase}
              translate={animatedStyles.translateX}
              key={showcase.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((showcase) => (
            <ShowcaseCard
              showcase={showcase}
              translate={animatedStyles.translateXReverse}
              key={showcase.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((showcase) => (
            <ShowcaseCard
              showcase={showcase}
              translate={animatedStyles.translateX}
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
    <div className="w-full relative py-20 md:py-40 px-4 left-0 top-10 z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <AnimatePresence>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-9xl font-bold text-black dark:text-white"
          >
            Mayank Raj
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl text-2xl md:text-4xl text-gray-800 dark:text-gray-200"
          >
            Engineering the future of secure systems
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CertificationBadges client:load badges={badges} />
          </motion.div>
        </AnimatePresence>
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
        className={cn("block group-hover/showcase:shadow-2xl h-full w-full")}
      >
        <img
          src={showcase.thumbnail}
          alt={showcase.title}
          className="h-full w-full object-cover object-left-top"
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/showcase:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/showcase:opacity-100 text-white dark:text-white">
        {showcase.title}
      </h2>
    </motion.div>
  );
};
export default HeroParallax;
