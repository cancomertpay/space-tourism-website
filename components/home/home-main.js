"use client";


import { motion } from "framer-motion";

function HomeMain({ children }) {
  return (
    <motion.main
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.main>
  );
}

export default HomeMain;
