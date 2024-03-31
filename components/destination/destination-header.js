"use client";

// framer motion
import { motion } from "framer-motion";

function DestinationHeader() {
  const headerVariants = {
    hidden: {
      x: 10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: 0.8, type: "spring" }}
      className="uppercase tracking-widest flex items-center justify-center gap-5"
    >
      <span className="font-bold text-white/20 ">01</span>
      <h1 className="text-white">Pick your destination</h1>
    </motion.header>
  );
}

export default DestinationHeader;
