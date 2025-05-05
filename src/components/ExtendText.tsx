import React, { useState } from "react";
import "../styles/components/extendText.scss";

interface ExtendTextProps {
  header: string;
  text: string;
}

const ExtendText: React.FC<ExtendTextProps> = ({ header, text }) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  return (
    <div className="text-extender">
      <h1 className="extender-header">{header}</h1>
      {isReadMoreOpen ? (
        <>
          <p className="full-text">{text}</p>
          <button
            className="read-less"
            onClick={() => setIsReadMoreOpen(false)}
          >
            Läs mindre
          </button>
        </>
      ) : (
        <>
          <p className="half-text">{text}</p>
          <button className="read-more" onClick={() => setIsReadMoreOpen(true)}>
            Läs mer
          </button>
        </>
      )}
    </div>
  );
};

export default ExtendText;
