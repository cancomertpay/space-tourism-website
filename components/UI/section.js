"use client";

import { motion } from "framer-motion";

function Section({ children, background, overflow }) {
  let pickedBg;

  switch (background) {
    case "home":
      pickedBg =
        "bg-[url(/assets/home/background-home-mobile.jpg)] md:bg-[url(/assets/home/background-home-tablet.jpg)] lg:bg-[url(/assets/home/background-home-desktop.jpg)]";
      break;
    case "destination":
      pickedBg =
        "bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/assets/destination/background-destination-desktop.jpg)]";
      break;
    case "crew":
      pickedBg =
        "bg-[url(/assets/crew/background-crew-mobile.jpg)] md:bg-[url(/assets/crew/background-crew-tablet.jpg)] lg:bg-[url(/assets/crew/background-crew-desktop.jpg)]";
      break;
    case "technology":
      pickedBg =
        "bg-[url(/assets/technology/background-technology-mobile.jpg)] md:bg-[url(/assets/technology/background-technology-tablet.jpg)] lg:bg-[url(/assets/technology/background-technology-desktop.jpg)]";
      break;

    default:
      break;
  }

  const transitionVariants = {
    initial: {
      x: "100%",
      width: "100%",
      opacity: 0,
    },
    animate: {
      x: "0",
      width: "100%",
      opacity: 1,
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };

  return (
    <motion.section
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        delay: 0.2,
        duration: 0.9,
        ease: "easeInOut",
      }}
      className={`h-screen w-full relative bg-cover ${
        pickedBg ? pickedBg : "bg-primary-black"
      } ${overflow === "hidden" && "overflow-hidden"} ${
        overflow === "auto" && "overflow-auto"
      }`}
    >
      {children}
    </motion.section>
  );
}

export default Section;
