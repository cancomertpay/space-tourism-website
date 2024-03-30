"use client";

// next.js's link component
import Link from "next/link";
// next.js fonts
import { bellafair } from "@/lib/fonts";

// framer motion
import { motion } from "framer-motion";

function ExploreButton() {
  return (
    <div className={"flex items-center justify-center"}>
      <div className="hover:bg-white/30 hover:backdrop-blur-sm rounded-full p-10 lg:p-14 transition-all duration-500 motion-safe:animate-pulse">
        <Link href={"/destination"}>
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            transition={{ duration: 1, type: "spring" }}
            className={`${bellafair.className} bg-white rounded-full text-center text-lg md:text-2xl lg:text-3xl tracking-widest uppercase px-8 md:px-10 lg:px12 py-16 md:py-20 lg:py-24 text-primary-black`}
          >
            Explore
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default ExploreButton;
