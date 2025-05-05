import React from "react";
import "../../styles/components/ui/button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  width: string;
  maxWidth?: string;
  icon?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  width,
  icon,
  maxWidth,
}) => {
  return (
    <button
      onClick={onClick}
      className="button"
      style={{ width: width, maxWidth: maxWidth }}
    >
      {text}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;
