"use client";
// next.js
import Image from "next/image";

// framer motion
import { motion } from "framer-motion";

function DestinationImage({ src, alt, name }) {
  let rotationDuration = 0;

  switch (name) {
    case "moon":
      rotationDuration = 27.32;
      break;

    case "mars":
      rotationDuration = 24.62;
      break;

    case "titan":
      rotationDuration = 15.94;
      break;

    case "europa":
      rotationDuration = 3.55;
      break;
    default:
      break;
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ delay: 0.8, type: "spring" }}
      className="lg:flex-1 overflow-y-hidden"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          delay: 1,
          duration: rotationDuration,
          ease: "linear",
        }}
        className="inline-flex justify-center items-center my-8 md:my-14"
      >
        <Image
          src={src}
          alt={alt}
          width={170}
          height={170}
          className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
          priority
        />
      </motion.div>
    </motion.div>
  );
}

export default DestinationImage;
