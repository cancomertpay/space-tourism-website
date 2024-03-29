"use client";

import { motion } from "framer-motion";

function HomeHeader({ children }) {
  return (
    <motion.header
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.header>
  );
}

export default HomeHeader;
