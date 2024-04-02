"use client";

import Link from "next/link";

// framer motion
import { motion } from "framer-motion";
import { bellafair } from "@/lib/fonts";

function TechnologyNavigation({ currentParam }) {
  const techList = [
    { name: "launch-vehicle", href: "/technology/launch-vehicle" },
    { name: "spaceport", href: "/technology/spaceport" },
    { name: "space-capsule", href: "/technology/space-capsule" },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.9,
        duration: 0.9,
        delayChildren: 0.9,
        staggerChildren: 0.1,
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
    <nav className="my-8 lg:my-0">
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex gap-5 items-center justify-center lg:flex-col"
      >
        {techList.map((tech, index) => (
          <motion.li
            key={index}
            variants={staggerChildren}
            className="inline-flex"
          >
            <Link
              href={tech.href}
              className={`h-10 w-10 rounded-full border-2 flex items-center justify-center text-xl p-5 md:text-2xl md:p-7 lg:p-9 ${
                currentParam === tech.name
                  ? "bg-white text-primary-black"
                  : "bg-transparent text-pale-blue border-pale-blue/50"
              }`}
            >
              <span className={bellafair.className}>{index + 1}</span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}

export default TechnologyNavigation;
