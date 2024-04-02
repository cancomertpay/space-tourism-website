"use client";

// next.js
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";

function CrewNavigation({ activeParam }) {
  const paramList = [
    { name: "douglas-hurley", href: "/crew/douglas-hurley" },
    { name: "mark-shuttleworth", href: "/crew/mark-shuttleworth" },
    { name: "victor-glover", href: "/crew/victor-glover" },
    { name: "anousheh-ansari", href: "/crew/anousheh-ansari" },
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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center gap-5 mx-20 md:mx-52 lg:mx-0 lg:justify-start"
    >
      {paramList.map((param) => (
        <motion.div key={param.href} variants={staggerChildren} className="mt-5">
          <Link href={param.href}>
            <div
              className={`z-20 w-2 h-2 rounded-full ${
                activeParam === param.name ? "bg-white" : "bg-pale-blue/20"
              }`}
            />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default CrewNavigation;
