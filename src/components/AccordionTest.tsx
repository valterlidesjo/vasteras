import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronForward } from "react-icons/io5";
import "../styles/components/accordionTest.scss";

interface AccordionContextType {
  isActive: boolean;
  index: number;
  onChangeIndex: (index: number) => void;
}

const AccordionContext = React.createContext<AccordionContextType>({
  isActive: false,
  index: -1,
  onChangeIndex: () => {},
});

const useAccordion = () => React.useContext(AccordionContext);

interface AccordionProps {
  children: React.ReactNode;
  multiple?: boolean;
  defaultIndex?: number | number[];
}

const Accordion = ({ children, multiple }: AccordionProps) => {
  type OnChangeIndexFn = (index: number) => void;

  const [activeIndex, setActiveIndex] = useState<number | number[]>(
    multiple ? [] : -1
  );

  const onChangeIndex: OnChangeIndexFn = (index: number) => {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple && typeof currentActiveIndex === "number") {
        return index === currentActiveIndex ? -1 : index;
      }

      if (
        Array.isArray(currentActiveIndex) &&
        currentActiveIndex.includes(index)
      ) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return Array.isArray(currentActiveIndex)
        ? [...currentActiveIndex, index]
        : [index];
    });
  };

  return React.Children.map(children, (child, index) => {
    const isActive =
      multiple && Array.isArray(activeIndex)
        ? activeIndex.includes(index)
        : activeIndex === index;

    return (
      <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
};

const AccordionItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="AccordionItem">{children}</div>;
};

const AccordionHeader = ({ children }: { children: React.ReactNode }) => {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`AccordionHeader ${isActive ? "active" : ""}`}
      onClick={() => onChangeIndex(index)}
    >
      <p>{children}</p>
      <IoChevronForward className={`icon ${isActive ? "active" : ""}`} />
    </motion.div>
  );
};

const AccordionPanel = ({ children }: { children: React.ReactNode }) => {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <div className="AccordionPanel" onClick={() => onChangeIndex(index)}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface AccordionComponentProps {
  header: string;
  children: React.ReactNode;
}

const AccordionTest = ({ header, children }: AccordionComponentProps) => {
  return (
    <>
      <Accordion multiple>
        {[...Array(1)].map((_, i) => (
          <AccordionItem key={i}>
            <AccordionHeader>{header}</AccordionHeader>
            <AccordionPanel>{children}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default AccordionTest;
