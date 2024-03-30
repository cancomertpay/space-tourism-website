"use client";

// router
import { useRouter } from "next/navigation";

// framer motion
import { AnimatePresence, motion } from "framer-motion";

// custom components
import PageTransition from "@/components/UI/page-transition";

export default function Template({ children }) {
  const router = useRouter();

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <PageTransition />
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
