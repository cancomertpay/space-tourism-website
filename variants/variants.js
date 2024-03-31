// framer motion variants
export const staggerContainer = {
  hidden: { opacity: 0, width: "0%" },
  visible: {
    opacity: 1,
    width: "100%",
    transition: {
      delay: 0.9,
      duration: 0.9,
      delayChildren: 0.8,
      staggerChildren: 0.4,
    },
  },
};
export const staggerChildren = {
  hidden: { y: 5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
