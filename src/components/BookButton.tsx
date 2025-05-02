import React, { useState } from "react";
import Button from "./ui/Button";

interface BookButtonProps {
  width: string;
}

const BookButton: React.FC<BookButtonProps> = ({ width }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const handleClick = () => {
    setIsBookingOpen(!isBookingOpen);
  };
  return (
    <>
      <Button text="Sök bokning" onClick={handleClick} width={width} />
      {isBookingOpen && <div>Bokningskomponent från sirvoy</div>}
    </>
  );
};

export default BookButton;
