import React from "react";
import "../../styles/components/ui/button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  width: string;
  icon?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ text, onClick, width, icon }) => {
  return (
    <button onClick={onClick} className="button" style={{ width: width }}>
      {text}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;
