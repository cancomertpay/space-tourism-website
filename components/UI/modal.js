"use client";

// react
import { useRef } from "react";
import ReactDOM from "react-dom";

// next.js image component
import Image from "next/image";

// framer-motion
import { motion } from "framer-motion";

// close icon
import closeIcon from "@/public/assets/shared/icon-close.svg";

function Modal({ children, onClose }) {
  // Close on click outside of modal
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const modalRef = useRef(null);

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

        {children}
      </motion.div>
    </div>,
    document.getElementById("aside")
  );
}

export default Modal;
