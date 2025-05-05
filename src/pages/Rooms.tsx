import BookButton from "../components/BookButton";
import HorizontalScroll from "../components/HorizontalScroll";
import RoomPicturesDesktop from "../components/RoomPicturesDesktop";
import "../styles/pages/rooms.scss";
import { useIsMobile } from "../utils/useIsMobile";
import enkelStandardW from "/enkelrumstandard.webp";
import enkelStandard from "/enkelrumstandard.jpg";
import dubbelStandardW from "/dubbelrumstandard.webp";
import dubbelStandard from "/dubbelrumstandard.jpg";
import dubbelSuperiorW from "/dubbelrumsuperior2.webp";
import dubbelSuperior from "/dubbelrumsuperior2.jpg";
import { roomImages } from "../assets/roomImages";

const Rooms = () => {
  const isMobile = useIsMobile(600);
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
          tillfredsställa olika behov och önskemål. Vårt{" "}
          <strong>Enkelrum</strong> är ett smakfullt alternativ för den som
          söker en behaglig och bekväm plats att vila. För de som vill unna sig
          lite extra komfort, erbjuder vi våra{" "}
          <strong>Dubbelrum Standard</strong>, med en rymlig dubbelsäng -
          perfekt för både par och den som uppskattar gott om utrymme. För den
          ultimata upplevelsen rekommenderar vi vårt{" "}
          <strong>Dubbelrum Superior</strong> - en svit med generösa ytor, egen
          balkong och badkar, som förvandlar varje vistelse till något alldeles
          särskilt.
        </p>
      </header>
      {isMobile ? (
        <>
          <section className="rooms-section">
            <h2>Se mer av våra rum</h2>
          </section>
          <HorizontalScroll images={roomImages} />
          <section className="rooms-section">
            <p className="dog-text">
              Hundar är välkomna hos oss! Det tillkommer en tillägsavgift på
              150kr
            </p>
            <h3 className="discount">
              Boka din vistelse hos oss och få 10% rabatt på din bokning!
            </h3>
            <BookButton width="100%" />
          </section>
        </>
      ) : (
        <>
          <div className="desktop-rooms-container">
            <article className="desktop-booking">
              <h3 className="desktop-discount">
                Boka din vistelse hos oss och få 10% rabatt på din bokning!
              </h3>
              <BookButton width="40%" />
            </article>
            <div className="desktop-rooms">
              <RoomPicturesDesktop
                src={enkelStandard}
                srcW={enkelStandardW}
                roomName="Enkelrum"
                roomText="Våra enkelrum är ett smakfullt alternativ för den som söker en behaglig och bekväm plats att vila. Vi erbjuder en enkelsäng, ett rymligt rum med skrivbord, fåtölj samt toalett med dusch."
                height="300px"
                width="calc(50% - 1rem)"
                htmlWidth={438}
                htmlHeight={300}
                alt="Enkelrum"
              />
              <RoomPicturesDesktop
                src={dubbelStandard}
                srcW={dubbelStandardW}
                roomName="Dubbelrum"
                roomText="Våra dubbelrum standard erbjuder en bekväm dubbelsäng, skrivbord, sittmöbler och badrum med dusch - perfekt för en avkopplande vistelse för två."
                height="300px"
                width="calc(50% - 1rem)"
                htmlWidth={438}
                htmlHeight={300}
                alt="Dubbelrum standard"
              />
            </div>
            <div className="desktop-rooms-sec">
              <RoomPicturesDesktop
                src={dubbelSuperior}
                srcW={dubbelSuperiorW}
                roomName="Dubbelrum superior"
                roomText="Våra dubbelrum superior har balkong, bekväm dubbelsäng, badkar och extra utrymme - för en lyxigare och mer avslappnad vistelse."
                height="300px"
                width="100%"
                imagePosition="50% 65%"
                htmlWidth={908}
                htmlHeight={300}
                alt="Dubbelrum superior"
              />
              <p className="dog-text-desktop">
                Hundar är välkomna hos oss! Det tillkommer en tillägsavgift på
                150kr.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Rooms;
