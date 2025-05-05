import "../styles/components/navMobile.scss";
import logoW from "/logo.webp";
import logo from "/logo.jpg";
import { Link } from "react-router-dom";
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
          <h2>{text}</h2>
          <h2>{text2}</h2>
        </Link>
        <picture>
          <source srcSet={logoW} type="image/webp" />
          <img
            src={logo}
            alt="Hotell Västerås Logo"
            className="nav-mobile-img"
            title="Hotell Västerås Logo"
            loading="eager"
            width={50}
            height={50}
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
