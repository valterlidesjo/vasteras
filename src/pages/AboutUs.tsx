import CircularButton from "../components/ui/CircularButton";
import { useIsMobile } from "../utils/useIsMobile";
import "../styles/pages/aboutus.scss";
import porten from "/porten2.png";
import portenW from "/portenW.webp";

import frukost from "/frukost1.png";
import frukostW from "/frukost1.webp";

import dubbelSuperiorW from "/dubbelrumsuperior2.webp";
import dubbelSuperior from "/dubbelrumsuperior2.jpg";
import BookButton from "../components/BookButton";

const AboutUs = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <section className="aboutus-section">
        {isMobile ? (
          <picture>
            <source srcSet={portenW} type="image/webp" />
            <img
              src={porten}
              alt="Entre till hotell västerås"
              loading="eager"
            />
          </picture>
        ) : (
          <div className="picture-section">
            <div className="upper-picture-section">
              <picture>
                <source srcSet={portenW} type="image/webp" />
                <img
                  src={porten}
                  alt="Entre till hotell västerås"
                  loading="eager"
                />
              </picture>
              <picture>
                <source srcSet={frukostW} type="image/webp" />
                <img src={frukost} alt="Bild på frukostbuffe" loading="eager" />
              </picture>
            </div>
            <div className="lower-picture-section">
              <picture>
                <source srcSet={dubbelSuperiorW} type="image/webp" />
                <img
                  src={dubbelSuperior}
                  alt="Dubbelrum standard"
                  loading="eager"
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

        {isMobile ? <BookButton width="100%" /> : <BookButton width="30%" />}

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
