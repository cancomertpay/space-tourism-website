"use client";

import { bellafair } from "@/lib/fonts";
import { motion } from "framer-motion";

function TravelContainer({ children }) {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="pb-10"
    >
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="text-sm text-pale-blue"
      >
        Est. travel time
      </motion.p>
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className={`text-white uppercase text-3xl my-2 ${bellafair.className}`}
      >
        {children}
      </motion.h3>
    </motion.div>
  );
}

export default TravelContainer;
