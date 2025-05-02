import "../styles/components/navMobile.scss";
import logoW from "/logo.webp";
import logo from "/logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useIsNavOpen } from "../utils/useIsNavOpen";

interface NavMobileProps {
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

const NavMobile: React.FC<NavMobileProps> = ({ text, text2 }) => {
  const { isNavOpen, setIsNavOpen } = useIsNavOpen();
  if (isNavOpen) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <nav className="nav-mobile">
        <Link to={"/"} className="nav-mobile-header">
          <h1>{text}</h1>
          <h1>{text2}</h1>
        </Link>
        <picture>
          <source srcSet={logoW} type="image/webp" />
          <img
            src={logo}
            alt="Hotell Västerås Logo"
            className="nav-mobile-img"
          />
        </picture>
        <button
          className={isNavOpen ? "hamburger active" : "hamburger"}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      {isNavOpen && (
        <section className="open-nav-container">
          {NavLinks.map((item, index) => (
            <Link key={index} to={item.link} className="link">
              {item.text}
            </Link>
          ))}
        </section>
      )}
    </>
  );
};

export default NavMobile;
