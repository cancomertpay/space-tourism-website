"use client";

// framer motion
import { motion } from "framer-motion";

function PageTransition() {
  // framer variants
  const transitionVariants = {
    initial: {
      x: "100%",
      width: "100%",
      opacity: 0,
    },
    animate: {
      x: "0%",
      width: "0%",
      opacity: 1,
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 backdrop-blur-lg bg-white/10"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "easeInOut",
        }}
      ></motion.div>
    </>
  );
}

export default PageTransition;
