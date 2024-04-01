"use client";

// next.js hooks
import { usePathname } from "next/navigation";

// next.js link component
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";
import { staggerChildren, staggerContainer } from "@/variants/variants";

function MainNavbar() {
  // next path hook
  const pathname = usePathname();

  const navLinksList = [
    { href: "/", title: "Home" },
    { href: "/destination", title: "Destination" },
    { href: "/crew", title: "Crew" },
    { href: "/technology", title: "Technology" },
  ];

  return (
    <nav className="hidden md:block">
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex bg-primary-black/40 lg:bg-primary-black/80 backdrop-blur gap-10 px-12 lg:px-36 lg:pr-48"
      >
        {navLinksList.map((links, index) => (
          <motion.li key={index} variants={staggerChildren}>
            <div
              className={`py-9 transition-all ${
                pathname === links.href ? "border-b-2 border-white" : ""
              }`}
            >
              <Link
                href={links.href}
                className="uppercase tracking-widest text-pale-blue flex lg:text-lg"
              >
                <span className="w-[15px] mr-4 font-extrabold text-white md:hidden lg:block">
                  0{index}
                </span>
                <span>{links.title}</span>
              </Link>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}

export default MainNavbar;
