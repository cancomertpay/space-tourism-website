"use client";
// next.js
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";

function DestinationNavigation({ activeParam }) {
  const paramList = [
    { name: "moon", href: "/destination/moon" },
    { name: "mars", href: "/destination/mars" },
    { name: "europa", href: "/destination/europa" },
    { name: "titan", href: "/destination/titan" },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.9,
        duration: 0.9,
        delayChildren: 0.9,
        staggerChildren: 0.4,
      },
    },
  };
  const staggerChildren = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between mx-20"
    >
      {paramList.map((param) => (
        <motion.div
          key={param.name}
          className="flex flex-col items-stretch justify-center gap-2"
          variants={staggerChildren}
        >
          <Link
            href={param.href}
            className={`text-sm uppercase tracking-widest z-20 ${
              activeParam === param.name ? "text-white" : "text-pale-blue"
            }`}
          >
            {param.name}
          </Link>
          <span
            className={`border-b-2 ${
              activeParam === param.name ? "border-white" : "border-transparent"
            }`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default DestinationNavigation;
