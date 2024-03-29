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
      <div className="hover:bg-white/30 hover:backdrop-blur-sm rounded-full p-10 transition-all duration-500">
        <Link href={"/destination"}>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{
              scale: 0.9,
              rotate: -360,
            }}
            transition={{ duration: 1, type: "spring" }}
            className={`${bellafair.className} bg-white rounded-full text-center text-lg md:text-2xl tracking-widest uppercase px-8 md:px-10 py-16 md:py-20 text-primary-black`}
          >
            Explore
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default ExploreButton;
