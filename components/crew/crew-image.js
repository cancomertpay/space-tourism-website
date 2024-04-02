"use client";
// next.js
import Image from "next/image";

// framer motion
import { motion } from "framer-motion";

function CrewImage({ src, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 1.5, type: "spring" }}
      className="flex items-center justify-center lg:flex-1"
    >
      <Image
        src={src}
        alt={alt}
        width={177.12}
        height={222}
        className="w-auto h-auto md:w-[457px] md:h-[572px] lg:w-[568px] lg:h-[712px]"
        priority
      />
    </motion.div>
  );
}

export default CrewImage;
