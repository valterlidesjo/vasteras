import { stigenImages } from "../assets/stigenImages";
import ExtendText from "../components/ExtendText";
import HorizontalScroll from "../components/HorizontalScroll";
import "../styles/pages/food.scss";
import { useIsMobile } from "../utils/useIsMobile";
import frukost from "/frukost2.jpg";
import frukostW from "/frukost2.webp";
import kitchen from "/guest-kitchen.jpg";
import kitchenW from "/guest-kitchen.webp";

const Food = () => {
  const isMobile = useIsMobile();
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
              <img src={frukost} alt="Frukost" className="breakfast-img" />
            </picture>
            <ExtendText
              header="Gästkök"
              text="För våra gäster som önskar laga egen mat erbjuder vi ett fullt utrustat gästkök – en perfekt lösning för större sällskap som idrottsföreningar eller grupper som vill laga mat tillsammans. Köket är komplett med ugn, spis, mikrovågsugn, kyl och frys samt allt du behöver för matlagning – från kastruller och stekpannor till tallrikar, bestick och andra köksredskap. Här kan ni enkelt skapa egna måltider i en bekväm och praktisk miljö, oavsett om det gäller en gemensam middag eller förberedelser inför dagens aktiviteter. Ett flexibelt och uppskattat alternativ som gör vistelsen ännu smidigare!"
            />
            <picture className="kitchen">
              <source srcSet={kitchenW} type="image/webp" />
              <img src={kitchen} alt="Gästkök" className="kitchen-img" />
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
          <p>
            Vi är stolta över vårt samarbete med restaurangen Stigen, belägen
            precis runt hörnet från hotellet. Med rötterna i Norrlands natur
            erbjuder Stigen smakupplevelser inspirerade av bergen, skogarna och
            vattnet. För våra hungriga gäster rekommenderar vi varmt ett besök
            där ni kan njuta av genuina nordiska smaker och en atmosfär präglad
            av kvalitet och omtanke.
          </p>
        </>
      ) : (
        <>
          <section className="food-section-desktop">
            <h1>Mat & Dryck</h1>
          </section>
        </>
      )}
    </>
  );
};

export default Food;
