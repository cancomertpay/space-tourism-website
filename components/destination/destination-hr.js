"use client";

import { motion } from "framer-motion";

function DestinationHr() {
  return (
    <motion.hr
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{
        delay: 1,
        duration: 1,
        ease: "linear",
      }}
      className="border-pale-blue/20 mx-6 my-8 lg:mx-0"
    />
  );
}

export default DestinationHr;
