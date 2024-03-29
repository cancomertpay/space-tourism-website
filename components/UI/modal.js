"use client";

// next.js hooks
import { usePathname } from "next/navigation";

// next.js link component
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";

// react
import { useRef } from "react";
import ReactDOM from "react-dom";

// next.js image component
import Image from "next/image";

// close icon
import closeIcon from "@/public/assets/shared/icon-close.svg";

function Modal({ onClose }) {
  // next path hook
  const pathname = usePathname();

  // Close on click outside of modal
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const modalRef = useRef(null);

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

  return ReactDOM.createPortal(
    <div
      className="h-[100vh] w-full bg-transparent fixed top-0 right-0 flex justify-end z-20"
      onClick={handleClickOutside}
    >
      <motion.div
        className="w-2/3 h-[100vh] backdrop-blur-lg bg-white/10 pt-7 pl-7"
        ref={modalRef}
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 10, opacity: 0 }}
      >
        <div className="flex justify-end pr-5 mb-20">
          <motion.span
            onClick={onClose}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ rotate: 360, scale: 1, opacity: 1 }}
            whileTap={{
              scale: 0.8,
            }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <Image
              src={closeIcon}
              alt="Aside bar close icon."
              width="24"
              height="24"
            />
          </motion.span>
        </div>

        <motion.ul variants={container} initial="hidden" animate="visible">
          {navLinksList.map((links, index) => (
            <motion.li
              key={index}
              variants={item}
              className="flex justify-between"
              onClick={onClose}
            >
              <div>
                <Link href={links.href} className="flex mb-5">
                  <span className="w-[15px] mr-4 font-extrabold text-white">
                    0{index}
                  </span>
                  <span className="uppercase tracking-widest font-light text-pale-blue">
                    {links.title}
                  </span>
                </Link>
              </div>
              <span
                className={`uppercase mb-5 transition-all ${
                  pathname === links.href ? "border-r-2 border-white" : ""
                }`}
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>,
    document.getElementById("aside")
  );
}

export default Modal;
