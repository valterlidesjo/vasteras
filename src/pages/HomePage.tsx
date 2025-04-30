import { Link } from "react-router-dom";
import vasterasW from "../../public/vasteras-stad.webp";
import vasteras from "../../public/vasteras-stad.jpg";
import stigenMatW from "../../public/stigenmat.webp";
import stigenMat from "../../public/stigenmat.jpg";
import "../styles/pages/homepage.scss";

const HomePage = () => {
  return (
    <>
      <header className="homepage-header">
        <picture>
          <source srcSet={vasterasW} />
          <img src={vasteras} alt="Bild Västerås stad vid ån" />
        </picture>
        <div className="text">
          <h1>Ett charmigt och prisvärt hotell mitt i centrala Västerås</h1>
          <h3>
            Välkommen till vårt hotell i hjärtat av Västerås, beläget precis vid
            Stora Torget med stadens puls utanför dörren. Här möts du av
            stilfullt boende, förstklassig service och närhet till stadens bästa
            shopping, restauranger och nöjen.
          </h3>
        </div>
      </header>
      <section className="homepage-section">
        <Link to={"/vara-rum"} className="homepage-room-btn">
          Upptäck våra rum
        </Link>
        <p>
          Vi är stolta över vårt samarbete med restaurangen Stigen, belägen
          precis runt hörnet från hotellet. Med rötterna i Norrlands natur
          erbjuder Stigen smakupplevelser inspirerade av bergen, skogarna och
          vattnet. För våra hungriga gäster rekommenderar vi varmt ett besök där
          ni kan njuta av genuina nordiska smaker och en atmosfär präglad av
          kvalitet och omtanke.
        </p>
        <a
          href="https://stigenavknut.se/stigen-i-vasteras-2/"
          className="homepage-stigen-btn"
        >
          Se Meny & Boka Bord
        </a>
        <picture>
          <source srcSet={stigenMatW} />
          <img
            src={stigenMat}
            alt="Köttbullar med potatismos från restaurang stigen"
          />
        </picture>
      </section>
    </>
  );
};

export default HomePage;
