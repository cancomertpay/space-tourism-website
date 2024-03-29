"use client";

// next.js hooks
import { usePathname } from "next/navigation";

// next.js link component
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";

function MainNavbar() {
  // next path hook
  const pathname = usePathname();

  const navLinksList = [
    { href: "/", title: "Home" },
    { href: "/destination", title: "Destination" },
    { href: "/crew", title: "Crew" },
    { href: "/technology", title: "Technology" },
  ];

  // framer motion variant
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  // framer motion variant
  const item = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <nav className="hidden md:block">
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex bg-pale-blue/5 gap-10 px-12"
      >
        {navLinksList.map((links, index) => (
          <motion.li key={index} variants={item}>
            <div
              className={`py-9 transition-all ${
                pathname === links.href ? "border-b-2 border-white" : ""
              }`}
            >
              <Link
                href={links.href}
                className="uppercase tracking-widest text-pale-blue"
              >
                {links.title}
              </Link>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}

export default MainNavbar;
