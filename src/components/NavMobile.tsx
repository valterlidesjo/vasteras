import "../styles/components/navMobile.scss";
import logoW from "../../public/logo.webp";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav>
        <div className="header">
          <h1>{text}</h1>
          <h1>{text2}</h1>
        </div>
        <picture>
          <source srcSet={logoW} type="image/webp" />
          <img src={logo} alt="Logo Hotell Västerås" />
        </picture>
        <button
          className={isActive ? "hamburger active" : "hamburger"}
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      {isActive && (
        <section>
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
