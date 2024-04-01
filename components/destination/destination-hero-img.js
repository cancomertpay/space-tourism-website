"use client";
// next.js
import Image from "next/image";

// framer motion
import { motion } from "framer-motion";

function DestinationImage({ src, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ delay: 0.8, type: "spring" }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          delay: 1,
          duration: 12,
          ease: "linear",
        }}
        className="inline-flex justify-center items-center my-8"
      >
        <Image src={src} alt={alt} width={170} height={170} />
      </motion.div>
    </motion.div>
  );
}

export default DestinationImage;
