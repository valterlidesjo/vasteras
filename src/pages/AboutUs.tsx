import Button from "../components/ui/Button";
import CircularButton from "../components/ui/CircularButton";
import { useIsMobile } from "../utils/useIsMobile";
import "../styles/pages/aboutus.scss";
import porten from "/porten2.png";
import frukost from "/frukost1.png";
import frukostW from "/frukost1.webp";
import dubbelrum from "/dubbelrumsuperior2.webp";

const AboutUs = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <section className="aboutus-section">
        {isMobile ? (
          <picture>
            <source srcSet={porten} type="image/webp" />
            <img src={porten} alt="Entre till hotell västerås" />
          </picture>
        ) : (
          <div className="picture-section">
            <div className="upper-picture-section">
              <picture>
                <source srcSet={porten} type="image/webp" />
                <img
                  src={porten}
                  alt="Köttbullar med potatismos från restaurang stigen"
                />
              </picture>
              <picture>
                <source srcSet={frukostW} type="image/webp" />
                <img
                  src={frukost}
                  alt="Köttbullar med potatismos från restaurang stigen"
                />
              </picture>
            </div>
            <div className="lower-picture-section">
              <picture>
                <source srcSet={dubbelrum} type="image/webp" />
                <img
                  src={dubbelrum}
                  alt="Köttbullar med potatismos från restaurang stigen"
                />
              </picture>
            </div>
          </div>
        )}

        <div className="aboutus-container">
          <p className="aboutus-header">Om Hotell Västerås</p>
          <p className="aboutus-text">
            Upplev en personlig och bekväm vistelse mitt i Västerås pulserande
            hjärta. Vårt familjeägda 3-stjärniga hotell erbjuder 34 unikt
            inredda rum, perfekta för både affärsresenärer och semesterfirare.
          </p>
          <p className="aboutus-text">
            Njut av närheten till stadens sevärdheter och upplev en varm,
            välkomnande atmosfär. Med moderna bekvämligheter och en genuin
            känsla av hemtrevnad är Hotel Västerås mer än bara ett hotell – det
            är din oas i staden.
          </p>
        </div>

        {isMobile ? (
          <Button
            text="Sök Bokning"
            width="100%"
            onClick={() => console.log("balle")}
          />
        ) : (
          <Button
            text="Sök Bokning"
            width="30%"
            onClick={() => console.log("balle")}
          />
        )}

        <div className="aboutus-container">
          <p className="aboutus-header">
            Fler än bara familjen? Vi har plats för er!
          </p>
          <p className="aboutus-text">
            Planerar du en gruppresa, en föreningsträff eller en konferens? På
            Hotel Västerås välkomnar vi alla typer av sällskap! Vårt rymliga
            samlingsrum är perfekt för möten, workshops eller sociala
            tillställningar. Och oavsett om ni är här för arbete eller nöje, kan
            ni alltid räkna med bekvämligheter som fri tillgång till Wi-Fi, ett
            praktiskt gästkök och en tvättstuga.
          </p>
          <p className="aboutus-text">
            Dessutom erbjuder vi parkering på baksidan, i mån av plats. Gör er
            vistelse i Västerås enkel och bekväm – tillsammans.
          </p>
          <p className="aboutus-text">
            För bokningar med större sällskap kontakta oss genom nedan!{" "}
          </p>
        </div>
        <CircularButton />
      </section>
    </>
  );
};

export default AboutUs;
