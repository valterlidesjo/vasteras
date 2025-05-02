import React from "react";
import { IoChevronDown } from "react-icons/io5";
import "../../styles/components/ui/circularButton.scss";
const CircularButton = () => {
  return (
    <div className="circular-button-container">
      <IoChevronDown className="icon" size={20} />
    </div>
  );
};

export default CircularButton;
