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

// custom components
import AsideNavigationBar from "./aside-navigation-bar";
import MainNavbar from "./main-navbar";

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
      transition={{ delay: 0.9, type: "tween" }}
      className="z-10 w-full fixed top-0 lg:top-10 flex items-center justify-between p-5 md:p-0 bg-primary-black/40 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
    >
      {/* brand logo */}
      <motion.div
        whileTap={{
          scale: 0.8,
        }}
        className="md:mx-10 flex items-center justify-center"
      >
        <Link href="/">
          <Image
            src={brandLogo}
            alt="Space tourism's brand logo."
            width="42"
            height="42"
            className="md:w-[52px] md:h-[52px]"
          />
        </Link>
      </motion.div>
      {/* underline for only lg devices */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="hidden lg:block border-b-2 border-pale-blue/30 w-1/3 -mr-28 z-20"
      />
      {/* hamburger icon for only sm devices */}
      {!isAsideOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{
            scale: 0.8,
          }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.4 }}
          onClick={openAsideBar}
          className="md:hidden"
        >
          <Image
            src={hamburgerIcon}
            alt="An icon for to opening aside navigation bar."
            width="32px"
            height="32px"
          />
        </motion.div>
      )}
      {/* main navigation bar for md devices */}
      <MainNavbar />
      {/* aside navigation bar for only sm devices */}
      <AnimatePresence>
        {isAsideOpen && <AsideNavigationBar onClose={closeAsideBar} />}
      </AnimatePresence>
    </motion.header>
  );
}

export default MainHeader;
