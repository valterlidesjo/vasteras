import { stigenImages } from "../assets/stigenImages";
import ExtendText from "../components/ExtendText";
import HorizontalScroll from "../components/HorizontalScroll";
import "../styles/pages/food.scss";
import { useIsMobile } from "../utils/useIsMobile";
import frukost from "/frukost2.jpg";
import frukostW from "/frukost2.webp";
import kitchen from "/guest-kitchen.jpg";
import kitchenW from "/guest-kitchen.webp";
import stigenMat2W from "/stigenmat2.webp";
import stigenMat2 from "/stigenmat2.jpg";
import stigenMat3W from "/stigenmat3.webp";
import stigenMat3 from "/stigenmat3.jpg";
import Button from "../components/ui/Button";

const Food = () => {
  const isMobile = useIsMobile(600);
  return (
    <>
      {isMobile ? (
        <>
          <section className="food-section">
            <h1>Mat & Dryck</h1>
            <ExtendText
              header="Frukost"
              text="Varje morgon kan våra gäster njuta av en noggrant utvald frukostbuffé, där kvalitet och fräschör står i fokus. Här väntar en färgstark variation av färska frukter och grönsaker som paprika, gurka, vindruvor och äpplen, tillsammans med yoghurt och filmjölk, ackompanjerade av ett brett utbud av müsli, cornflakes och torkade frukter. Välj bland nybakat bröd – hårt eller mjukt, ljust eller fiberrikt – och komplettera med en mängd olika pålägg. Självklart erbjuder vi också rykande hett kaffe, aromatiska teer, färsk juice, mjölk och uppfriskande ingefärashots. En frukostupplevelse som ger en smakfull start på dagen!"
            />
            <picture className="breakfast">
              <source srcSet={frukostW} type="image/webp" />
              <img
                src={frukost}
                alt="Frukost"
                className="breakfast-img"
                title="Frukost Hotell Västerås"
                loading="eager"
              />
            </picture>
            <ExtendText
              header="Gästkök"
              text="För våra gäster som önskar laga egen mat erbjuder vi ett fullt utrustat gästkök – en perfekt lösning för större sällskap som idrottsföreningar eller grupper som vill laga mat tillsammans. Köket är komplett med ugn, spis, mikrovågsugn, kyl och frys samt allt du behöver för matlagning – från kastruller och stekpannor till tallrikar, bestick och andra köksredskap. Här kan ni enkelt skapa egna måltider i en bekväm och praktisk miljö, oavsett om det gäller en gemensam middag eller förberedelser inför dagens aktiviteter. Ett flexibelt och uppskattat alternativ som gör vistelsen ännu smidigare!"
            />
            <picture className="kitchen">
              <source srcSet={kitchenW} type="image/webp" />
              <img
                src={kitchen}
                alt="Gästkök"
                className="kitchen-img"
                title="Gästkök Hotell Västerås"
                loading="eager"
              />
            </picture>
            <section className="food-stigen-container">
              <h2>Restaurang Stigen</h2>
            </section>
          </section>
          <HorizontalScroll
            images={stigenImages}
            imageHeight="12.5rem"
            enableHoverEffect={false}
            readMore={false}
          />
          <p className="food-stigen-text">
            Vi är stolta över vårt samarbete med restaurangen Stigen, belägen
            precis runt hörnet från hotellet. Med rötterna i Norrlands natur
            erbjuder Stigen smakupplevelser inspirerade av bergen, skogarna och
            vattnet. För våra hungriga gäster rekommenderar vi varmt ett besök
            där ni kan njuta av genuina nordiska smaker och en atmosfär präglad
            av kvalitet och omtanke.
          </p>
          <Button
            text="Stigens hemsida"
            onClick={() => {
              window.open("https://stigenavknut.se/stigen-i-vasteras-2/");
            }}
            width="100%"
          />
        </>
      ) : (
        <>
          <section className="food-section-desktop">
            <h1>Mat & Dryck</h1>
            <article className="food-info-desktop">
              <div className="breakfast-desktop">
                <h2>Frukost</h2>
                <p>
                  Varje morgon kan våra gäster njuta av en noggrant utvald
                  frukostbuffé, där kvalitet och fräschör står i fokus. Här
                  väntar en färgstark variation av färska frukter och grönsaker
                  som paprika, gurka, vindruvor och äpplen, tillsammans med
                  yoghurt och filmjölk, ackompanjerade av ett brett utbud av
                  müsli, cornflakes och torkade frukter. Välj bland nybakat bröd
                  - hårt eller mjukt, ljust eller fiberrikt - och komplettera
                  med en mängd olika pålägg. Självklart erbjuder vi också
                  rykande hett kaffe, aromatiska teer, färsk juice, mjölk och
                  uppfriskande ingefärashots. En frukostupplevelse som ger en
                  smakfull start på dagen!
                </p>
              </div>
              <div className="kitchen-desktop">
                <h2>Gästkök</h2>
                <p>
                  För våra gäster som önskar laga egen mat erbjuder vi ett fullt
                  utrustat gästkök - en perfekt lösning för större sällskap som
                  idrottsföreningar eller grupper som vill laga mat tillsammans.
                  Köket är komplett med ugn, spis, mikrovågsugn, kyl och frys
                  samt allt du behöver för matlagning - från kastruller och
                  stekpannor till tallrikar, bestick och andra köksredskap. Här
                  kan ni enkelt skapa egna måltider i en bekväm och praktisk
                  miljö, oavsett om det gäller en gemensam middag eller
                  förberedelser inför dagens aktiviteter. Ett flexibelt och
                  uppskattat alternativ som gör vistelsen ännu smidigare!
                </p>
              </div>
            </article>
            <article className="restaurang-stigen-desktop">
              <h1>Restaurang Stigen</h1>
              <div className="stigen-images-desktop">
                <picture className="stigen-pizza">
                  <source srcSet={stigenMat2W} type="image/webp" />
                  <img
                    src={stigenMat2}
                    alt="Stigen pizza"
                    className="stigen-img"
                  />
                </picture>
                <picture className="stigen-steak">
                  <source srcSet={stigenMat3W} type="image/webp" />
                  <img
                    src={stigenMat3}
                    alt="Stigen råbiff"
                    className="stigen-img"
                  />
                </picture>
              </div>
            </article>
            <article className="stigen-info-desktop">
              <p>
                Vi är stolta över vårt samarbete med restaurangen Stigen,
                belägen precis runt hörnet från hotellet. Med rötterna i
                Norrlands natur erbjuder Stigen smakupplevelser inspirerade av
                bergen, skogarna och vattnet. För våra hungriga gäster
                rekommenderar vi varmt ett besök där ni kan njuta av genuina
                nordiska smaker och en atmosfär präglad av kvalitet och omtanke.
              </p>
              <h2>Läs mer om Restaurang Stigen nedan</h2>
              <Button
                text="Stigens hemsida"
                onClick={() => {
                  window.open("https://stigenavknut.se/stigen-i-vasteras-2/");
                }}
                width="50%"
                maxWidth="400px"
              />
            </article>
          </section>
        </>
      )}
    </>
  );
};

export default Food;
