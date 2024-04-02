"use client";

// framer motion
import { motion } from "framer-motion";

function PagesHeader({ title, index }) {
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
      animate="visible"
      transition={{ delay: 0.8, type: "spring" }}
      className="uppercase tracking-widest flex items-center justify-center gap-5 md:justify-start md:pl-10 md:text-2xl"
    >
      <span className="font-bold text-white/20 ">{index}</span>
      <h1 className="text-white">{title}</h1>
    </motion.header>
  );
}

export default PagesHeader;
