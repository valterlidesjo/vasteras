import { Link } from "react-router-dom";
import vasterasW from "/vasteras-stad.webp";
import vasteras from "/vasteras-stad.jpg";
import stigenMatW from "/stigenmat.webp";
import stigenMat from "/stigenmat.jpg";
import stigenDrinkW from "/stigendrink.webp";
import stigenDrink from "/stigendrink.jpg";
import "../styles/pages/homepage.scss";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="homepage-section">
        <picture>
          <source srcSet={vasterasW} type="image/webp" />
          <img
            src={vasteras}
            alt="Bild Västerås stad vid ån"
            className="homepage-start-img"
          />
        </picture>
        <article className="homepage-article">
          <h1>Ett charmigt och prisvärt hotell - mitt i centrala Västerås</h1>
          {isMobile ? (
            <>
              <h3>
                Välkommen till vårt hotell i hjärtat av Västerås, beläget precis
                vid Stora Torget med stadens puls utanför dörren. Här möts du av
                stilfullt boende, förstklassig service och närhet till stadens
                bästa shopping, restauranger och nöjen.
              </h3>
              <Link to={"/vara-rum"} className="homepage-room-btn">
                Upptäck våra rum
              </Link>
              <p>
                Vi är stolta över vårt samarbete med restaurangen Stigen,
                belägen precis runt hörnet från hotellet. Med rötterna i
                Norrlands natur erbjuder Stigen smakupplevelser inspirerade av
                bergen, skogarna och vattnet. För våra hungriga gäster
                rekommenderar vi varmt ett besök där ni kan njuta av genuina
                nordiska smaker och en atmosfär präglad av kvalitet och omtanke.
              </p>
              <a
                href="https://stigenavknut.se/stigen-i-vasteras-2/"
                className="homepage-stigen-btn"
              >
                Se Meny & Boka Bord
              </a>
              <picture>
                <source srcSet={stigenMatW} type="image/webp" />
                <img
                  src={stigenMat}
                  alt="Köttbullar med potatismos från restaurang stigen"
                  className="stigen-img"
                />
              </picture>
            </>
          ) : (
            <>
              <div className="homepage-desktop-welcome">
                <h3>
                  Välkommen till vårt hotell i hjärtat av Västerås, beläget
                  precis vid Stora Torget med stadens puls utanför dörren. Här
                  möts du av stilfullt boende, förstklassig service och närhet
                  till stadens bästa shopping, restauranger och nöjen.
                </h3>
                <Link to={"/vara-rum"} className="homepage-room-btn">
                  Upptäck våra rum
                </Link>
              </div>
              <div className="homepage-stigen-container">
                <picture>
                  <source srcSet={stigenMatW} type="image/webp" />
                  <img
                    src={stigenMat}
                    alt="Köttbullar med potatismos från restaurang stigen"
                    className="stigen-img"
                  />
                </picture>
                <p className="stigen-text">
                  Vi är stolta över vårt samarbete med restaurangen Stigen,
                  belägen precis runt hörnet från hotellet. Med rötterna i
                  Norrlands natur erbjuder Stigen smakupplevelser inspirerade av
                  bergen, skogarna och vattnet. För våra hungriga gäster
                  rekommenderar vi varmt ett besök där ni kan njuta av genuina
                  nordiska smaker och en atmosfär präglad av kvalitet och
                  omtanke.
                </p>
              </div>
              <div className="homepage-stigen-aw-container">
                <p className="stigen-text">
                  Letar du efter den perfekta platsen för en avslappnad
                  afterwork? I en inbjudande atmosfär och prisvärda happy
                  hour-erbjudanden passar det perfekt för att umgås med kollegor
                  eller vänner. Njut av utsökt mat och svalkande drinkar för att
                  göra din AW till en riktig fullträff!
                </p>
                <picture>
                  <source srcSet={stigenDrinkW} type="image/webp" />
                  <img
                    src={stigenDrink}
                    alt="Köttbullar med potatismos från restaurang stigen"
                    className="stigen-aw-img"
                  />
                </picture>
              </div>
              <div className="homepage-stigen-btn-container">
                <a
                  href="https://stigenavknut.se/stigen-i-vasteras-2/"
                  className="homepage-stigen-btn"
                >
                  Se Meny & Boka Bord
                </a>
                <a
                  href="https://stigenavknut.se/"
                  className="homepage-stigen-btn"
                >
                  Läs mer om vår Mat & Dryck
                </a>
              </div>
            </>
          )}
        </article>
      </section>
    </>
  );
};

export default HomePage;
