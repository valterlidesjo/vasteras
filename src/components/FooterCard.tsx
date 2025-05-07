import React from "react";
import "../styles/components/footerCard.scss";

interface FooterCardProps {
  value: string;
  beforeLink: string;
  link?: string;
  icon: React.ReactElement;
}

const FooterCard = ({ value, beforeLink, link, icon }: FooterCardProps) => {
  return (
    <div className="footerCard-container">
      <div className="footerCard-icon">{icon}</div>
      <a
        className="footerCard-text"
        href={beforeLink + link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {value}
      </a>
    </div>
  );
};

export default FooterCard;
