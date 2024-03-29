"use client";

import { motion } from "framer-motion";

function BtnContainer({ children }) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring" }}
      className="absolute bottom-0 right-0 left-0"
    >
      {children}
    </motion.div>
  );
}

export default BtnContainer;
