"use client";

import { motion } from "framer-motion";

import { bellafair } from "@/lib/fonts";

function TechnologyBody({ name, description }) {
  return (
    <div className="mx-10">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="mb-4"
      >
        <h3 className="uppercase text-pale-blue/50 text-sm tracking-widest md:text-sm lg:text-start lg:mb-4">
          The Terminology...
        </h3>
        <h2
          className={`uppercase mt-2 text-2xl md:text-4xl tracking-widest text-white lg:text-start lg:text-5xl ${bellafair.className}`}
        >
          {name}
        </h2>
      </motion.div>
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center leading-6 text-pale-blue md:px-32 md:text-lg lg:px-0 lg:text-start lg:text-lg lg:pr-32"
      >
        {description}
      </motion.p>
    </div>
  );
}

export default TechnologyBody;
