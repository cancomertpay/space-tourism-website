"use client";

// framer motion
import { motion } from "framer-motion";

function CrewBio({ bio }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -30, opacity: 0 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <p className="leading-6 text-center text-pale-blue my-2 text-[15px] md:mx-10 md:text-lg lg:text-start lg:mx-0 lg:text-xl">{bio}</p>
    </motion.div>
  );
}

export default CrewBio;
