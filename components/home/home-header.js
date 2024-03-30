"use client";

import { motion } from "framer-motion";

function HomeHeader({ children }) {
  return (
    <motion.header
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring" }}
    >
      {children}
    </motion.header>
  );
}

export default HomeHeader;
