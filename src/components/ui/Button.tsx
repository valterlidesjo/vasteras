import React from "react";
import "../../styles/components/ui/button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  icon: string;
}
const Button: React.FC<ButtonProps> = ({ text, onClick, icon }) => {
  return (
    <button onClick={onClick}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
