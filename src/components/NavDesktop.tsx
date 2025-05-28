import "../styles/components/navDesktop.scss";
import logoW from "/logo.webp";
import logo from "/logo.jpg";
import { NavLink } from "react-router-dom";
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
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                isActive && item.text != "Boka rum" ? "active-link" : "link"
              }
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {item.text}
            </NavLink>
          ))}
        </article>
        <article className="nav-desktop-header">
          <h1 className="nav-desktop-header-text">{text}</h1>
          <picture>
            <source srcSet={logoW} type="image/webp" />
            <img
              src={logo}
              alt="Hotell Västerås Logo"
              className="nav-desktop-img"
              title="Hotell Västerås Logo"
              loading="eager"
              width={50}
              height={50}
            />
          </picture>
          <h1 className="nav-desktop-header-text">{text2}</h1>
        </article>
      </nav>
    </>
  );
};

export default NavDesktop;
