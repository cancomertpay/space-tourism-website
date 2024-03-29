"use client";

// next.js
import { useRouter } from "next/router";

// framer-motion
import { AnimatePresence, motion } from "framer-motion";

// custom components
import PageTransition from "../UI/page-transition";

function MainContentContainer({ children }) {
  return (
    <AnimatePresence>
      <motion.div>
        <PageTransition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default MainContentContainer;
