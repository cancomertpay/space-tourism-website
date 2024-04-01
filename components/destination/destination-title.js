"use client";

import { bellafair } from "@/lib/fonts";
// framer motion
import { motion } from "framer-motion";

function DestinationTitle({ children }) {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.9,
        duration: 0.9,
        delayChildren: 0.8,
        staggerChildren: 0.4,
      },
    },
  };
  const staggerChildren = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.h1
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={`my-8 text-6xl md:text-8xl uppercase text-white tracking-widest ${bellafair.className}`}
    >
      {Array.from(children).map((letter, index) => (
        <motion.span variants={staggerChildren} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default DestinationTitle;
