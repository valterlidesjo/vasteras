import "../styles/components/navDesktop.scss";
import logoW from "/logo.webp";
import logo from "/logo.jpg";
import { Link } from "react-router-dom";
import React from "react";

interface NavDescktopProps {
  text: string;
  text2: string;
}

const NavLinks = [
  { text: "Hem", link: "/" },
  { text: "Våra rum", link: "/vara-rum" },
  { text: "Mat & Dryck", link: "/mat-dryck" },
  { text: "Om oss", link: "/om-oss" },
  { text: "Kontakt", link: "/kontakt" },
  { text: "Boka rum", link: "/vara-rum" },
];

const NavDesktop: React.FC<NavDescktopProps> = ({ text, text2 }) => {
  return (
    <>
      <nav className="nav-desktop">
        <article className="nav-desktop-links">
          {NavLinks.map((item, index) => (
            <Link key={index} to={item.link} className="link">
              {item.text}
            </Link>
          ))}
        </article>
        <article className="nav-desktop-header">
          <h1>{text}</h1>
          <picture>
            <source srcSet={logoW} type="image/webp" />
            <img
              src={logo}
              alt="Hotell Västerås Logo"
              className="nav-desktop-img"
            />
          </picture>
          <h1>{text2}</h1>
        </article>
      </nav>
    </>
  );
};

export default NavDesktop;
