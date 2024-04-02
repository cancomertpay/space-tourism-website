"use client";

// next.js
import { bellafair } from "@/lib/fonts";

// framer motion
import { motion, AnimatePresence } from "framer-motion";

function CrewTitleGroup({ role, name }) {
  return (
    <div className={`${bellafair.className} my-5`}>
      <motion.h2
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
          type: "spring",
        }}
        className="text-pale-blue/50 uppercase tracking-widest mb-1 lg:text-start lg:text-2xl"
      >
        {role}
      </motion.h2>
      <motion.h1
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
          type: "spring",
        }}
        className="text-2xl text-white uppercase tracking-widest lg:text-start lg:text-5xl"
      >
        {name}
      </motion.h1>
    </div>
  );
}

export default CrewTitleGroup;
