import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import "../styles/components/bookButton.scss";

interface BookButtonProps {
  width: string;
}

const BookButton: React.FC<BookButtonProps> = ({ width }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const sirvoy = import.meta.env.VITE_SIRVOY_ID;
  const handleClick = () => {
    setIsBookingOpen(!isBookingOpen);
  };
  useEffect(() => {
    if (isBookingOpen) {
      const script = document.createElement("script");
      script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
      script.async = true;
      script.setAttribute("data-form-id", sirvoy);
      document.getElementById("sirvoy-container")?.appendChild(script);
    }
  }, [isBookingOpen]);

  return (
    <>
      <Button text="Sök datum" onClick={handleClick} width={width} />
      {isBookingOpen && <div id="sirvoy-container" style={{ width: "100%" }} />}
    </>
  );
};

export default BookButton;
