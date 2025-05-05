import logoW from "/logo.webp";
import logo from "/logo.jpg";
import "../styles/components/bookSpinn.scss";
import { Link } from "react-router-dom";

const BookSpinn = () => {
  return (
    <>
      <Link
        to={"/vara-rum"}
        className="book-spinn-container"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="spinn"></div>
        <picture>
          <source srcSet={logoW} type="image/webp" />
          <img
            src={logo}
            alt="Hotell Västerås Logo"
            className="spinn-img"
            title="Hotell Västerås Logo"
            loading="eager"
            height={65}
            width={65}
          />
        </picture>
      </Link>
    </>
  );
};

export default BookSpinn;
