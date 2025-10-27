import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const MultilayerParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const cut1Y = useTransform(scrollYProgress, [0, 1], ["0%", "130%"]);
  const cut2Y = useTransform(scrollYProgress, [0, 1], ["0%", "170%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="relative w-full h-screen overflow-hidden grid place-items-center bg-black"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/Background.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(/cut-1.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: cut1Y,
        }}
      />

      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(/cut-2.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: cut2Y,
        }}
      />

      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-20 pointer-events-none"
      >
        PARALLAX
      </motion.h1>
    </div>
  );
};

export default MultilayerParallax;
