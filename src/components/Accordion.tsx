import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/components/accordion.scss";

interface AccordionProps {
  header: string;
  children: React.ReactNode;
}

const Accordion = ({ header, children }: AccordionProps) => {
  const [accordion, setAccordion] = useState(false);

  const handleOpen = () => {
    setAccordion((prev) => !prev);
  };
  return (
    <div className="accordion-container" onClick={handleOpen}>
      <div className="accordion-header">
        <p>{header}</p>
        <IoChevronForward className={accordion ? "icon-active" : "icon"} />
      </div>
      <AnimatePresence initial={false}>
        {accordion && (
          <motion.div
            className="accordion-content"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
