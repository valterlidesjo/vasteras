import { Link } from "react-router-dom";
import vasterasW from "/vasteras-stad.webp";
import vasteras from "/vasteras-stad.jpg";
import stigenMatW from "/stigenmat.webp";
import stigenMat from "/stigenmat.jpg";
import stigenDrinkW from "/stigendrink.webp";
import stigenDrink from "/stigendrink.jpg";
import "../styles/pages/homepage.scss";
import { useIsMobile } from "../utils/useIsMobile";

const HomePage = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <section className="homepage-section">
        <picture>
          <source srcSet={vasterasW} type="image/webp" />
          <img
            src={vasteras}
            alt="Bild Västerås stad vid ån"
            className="homepage-start-img"
            title="Hotell Västerås Stad"
            loading="eager"
            width={908}
            height={538}
          />
        </picture>
        <article className="homepage-article">
          <h1>Ett charmigt och prisvärt hotell - mitt i centrala Västerås</h1>
          {isMobile ? (
            <>
              <h2>
                Välkommen till vårt hotell i hjärtat av Västerås, beläget precis
                vid Stora Torget med stadens puls utanför dörren. Här möts du av
                stilfullt boende, förstklassig service och närhet till stadens
                bästa shopping, restauranger och nöjen.
              </h2>
              <Link
                to={"/vara-rum"}
                className="homepage-room-btn"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
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
                  title="Restaurang Stigen Köttbullar med mos"
                  loading="lazy"
                  width={935}
                  height={493}
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
                <Link
                  to={"/vara-rum"}
                  className="homepage-room-btn"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
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
                    title="Restaurang Stigen Köttbullar med mos"
                    loading="lazy"
                    width={422}
                    height={230}
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
                    alt="AW efterätt från restaurang stigen"
                    className="stigen-aw-img"
                    title="Restaurang Stigen efterätt"
                    loading="lazy"
                    width={422}
                    height={230}
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
                <Link
                  to={"/mat-dryck"}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="homepage-stigen-btn"
                >
                  Läs mer om vår Mat & Dryck
                </Link>
              </div>
            </>
          )}
        </article>
      </section>
    </>
  );
};

export default HomePage;
