"use client";

import { motion } from "framer-motion";

function CrewHr() {
  return (
    <motion.hr
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{
        delay: 1,
        duration: 0.4,
        ease: "linear",
      }}
      className="border-pale-blue/20"
    />
  );
}

export default CrewHr;
