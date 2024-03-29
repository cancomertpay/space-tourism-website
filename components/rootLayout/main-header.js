"use client";
// react
import { useState } from "react";

// next.js's image component
import Image from "next/image";
// next.js's link component
import Link from "next/link";

// icons
import brandLogo from "@/public/assets/shared/logo.svg";
import hamburgerIcon from "@/public/assets/shared/icon-hamburger.svg";

// framer-motion
import { motion, AnimatePresence } from "framer-motion";

// components
import AsideNavigationBar from "./aside-navigation-bar";

function MainHeader() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const openAsideBar = () => {
    setIsAsideOpen(true);
  };

  const closeAsideBar = () => {
    setIsAsideOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring" }}
      className="z-10 w-full fixed top-0 flex items-center justify-between p-5"
    >
      <motion.div
        whileTap={{
          scale: 0.8,
        }}
      >
        <Link href="/">
          <Image
            src={brandLogo}
            alt="Space tourism's brand logo."
            width="42"
            height="42"
          />
        </Link>
      </motion.div>
      <motion.div
        whileTap={{
          scale: 0.8,
        }}
        onClick={openAsideBar}
      >
        {!isAsideOpen && (
          <Image
            src={hamburgerIcon}
            alt="An icon for to opening aside navigation bar."
            width="32px"
            height="32px"
          />
        )}
      </motion.div>
      <AnimatePresence>
        {isAsideOpen && <AsideNavigationBar onClose={closeAsideBar} />}
      </AnimatePresence>
    </motion.header>
  );
}

export default MainHeader;
