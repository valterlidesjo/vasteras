import React from "react";
import "../styles/components/footerCard.scss";

interface FooterCard {
  value: string;
  beforeLink: string;
  link?: string;
  icon: React.ReactElement<any>;
}

const FooterCard = ({ value, beforeLink, link, icon }: FooterCard) => {
  return (
    <div className="footerCard-container">
      <div className="footerCard-icon">
        {React.cloneElement(icon, {
          className: "nav-icon",
        } as React.Attributes)}
      </div>
      <a className="footerCard-text" href={beforeLink + link} target="_blank">
        {value}
      </a>
    </div>
  );
};

export default FooterCard;
