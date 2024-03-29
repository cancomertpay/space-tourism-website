// next.js hooks
import { usePathname } from "next/navigation";

// next.js link component
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";

// custom components
import Modal from "../UI/modal";

function AsideNavigationBar({ onClose }) {
  // next path hook
  const pathname = usePathname();

  // nav items list
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Modal onClose={onClose}>
      <motion.ul variants={container} initial="hidden" animate="visible">
        {navLinksList.map((links, index) => (
          <motion.li
            key={index}
            variants={item}
            className="flex justify-between"
          >
            <div>
              <Link href={links.href} className="flex mb-5">
                <span className="w-[15px] mr-4 font-extrabold text-white">
                  0{index}
                </span>
                <span className="uppercase tracking-widest font-extralight text-pale-blue">
                  {links.title}
                </span>
              </Link>
            </div>
            <span
              className={`uppercase mb-5 ${
                pathname === links.href ? "border-r-2 border-white" : ""
              }`}
            />
          </motion.li>
        ))}
      </motion.ul>
    </Modal>
  );
}

export default AsideNavigationBar;
