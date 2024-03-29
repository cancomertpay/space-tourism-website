"use client";

// next.js
import { useRouter } from "next/router";

// framer-motion
import { motion } from "framer-motion";

function Template({ children }) {
  const transitionVariants = {
    initial: {
      x: 20,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: 20,
      opacity: 0,
    },
  };
  return (
    <motion.div
      className="w-screen h-screen backdrop-blur-lg bg-primary-black"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Template;
