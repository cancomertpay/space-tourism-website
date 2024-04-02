"use client";

// next image
import Image from "next/image";

// framer motion
import { motion } from "framer-motion";

function TechnologyImage({ src, alt }) {
  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 1,
        ease: "linear",
      }}
      className="w-full h-[170px] md:h-[310px] relative my-8 lg:w-[515px] lg:h-[527px]"
    >
      <Image src={src} alt={alt} fill />
    </motion.div>
  );
}

export default TechnologyImage;
