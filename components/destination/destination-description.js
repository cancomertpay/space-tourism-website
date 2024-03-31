"use client";

import { motion } from "framer-motion";

function DestinationDescription({ children }) {
  return (
    <motion.p
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.8,
        type: "spring",
      }}
      className="mx-6 text-center leading-loose text-pale-blue"
    >
      {children}
    </motion.p>
  );
}

export default DestinationDescription;
