import HorizontalScroll, { roomImages } from "../components/HorizontalScroll";
import "../styles/pages/rooms.scss";

const Rooms = () => {
  return (
    <>
      <header className="rooms-header">
        <h1>Våra rum</h1>
        <p>
          Upplev en harmonisk kombination av komfort och elegans i våra
          omsorgsfullt inredda rum. Här väntar sköna sängar från Sängfabriken,
          moderna badrum och bekvämligheter som gratis WiFi och TV.
        </p>
        <p>
          Vi erbjuder tre typer av boende, var och en noggrant utformad för att
          tillfredsställa olika behov och önskemål. Vårt Enkelrum är ett
          smakfullt alternativ för den som söker en behaglig och bekväm plats
          att vila. För de som vill unna sig lite extra komfort, erbjuder vi
          våra Dubbelrum Standard, med en rymlig dubbelsäng - perfekt för både
          par och den som uppskattar gott om utrymme. För den ultimata
          upplevelsen rekommenderar vi vårt Dubbelrum Superior - en svit med
          generösa ytor, egen balkong och badkar, som förvandlar varje vistelse
          till något alldeles särskilt.
        </p>
      </header>
      <section className="rooms-section">
        <h2>Se mer av våra rum</h2>
      </section>
      <HorizontalScroll images={roomImages} />
      <section className="rooms-section">
        <p className="dog-text">
          Hundar är välkomna hos oss! Det tillkommer en tillägsavgift på 150kr
        </p>
        <h1 className="discount">
          Boka din vistelse hos oss och få 10% rabatt på din bokning!
        </h1>
      </section>
    </>
  );
};

export default Rooms;
