import "../styles/components/horizontalScroll.scss";
import enkelStandardW from "/enkelrumstandard.webp";
import enkelStandard from "/enkelrumstandard.jpg";
import dubbelStandardW from "/dubbelrumstandard.webp";
import dubbelStandard from "/dubbelrumstandard.jpg";
import dubbelSuperiorW from "/dubbelrumsuperior.webp";
import dubbelSuperior from "/dubbelrumsuperior.jpg";

export const roomImages = [
  {
    id: 1,
    src: enkelStandard,
    webpSrc: enkelStandardW,
    alt: "Enkelrum standar",
    text: "Våra enkelrum är ett smakfullt alternativ för den som söker en behaglig och bekväm plats att vila. Vi erbjuder en enkelsäng, ett rymligt rum med skrivbord, fåtölj samt toalett med dusch.",
    header: "Enkelrum",
    imagePosition: "80% 50%",
  },
  {
    id: 2,
    src: dubbelStandard,
    webpSrc: dubbelStandardW,
    alt: "Dubbelrum standard",
    text: "Våra dubbelrum standard erbjuder en bekväm dubbelsäng, skrivbord, sittmöbler och badrum med dusch - perfekt för en avkopplande vistelse för två.",
    header: "Dubbelrum",
    imagePosition: "65% 50%",
  },
  {
    id: 3,
    src: dubbelSuperior,
    webpSrc: dubbelSuperiorW,
    alt: "Dubbelrum superior",
    text: "Våra dubbelrum superior har balkong, bekväm dubbelsäng, badkar och extra utrymme - för en lyxigare och mer avslappnad vistelse.",
    header: "Dubbelrum superior",
  },
];

type HorizontalScrollProps = {
  images: {
    id: number;
    src: string;
    webpSrc: string;
    alt: string;
    text: string;
    header: string;
    imagePosition?: string;
  }[];
  imageHeight?: string;
  imagePosition?: string;
  imageWidth?: string;
  backgroundCol?: string;
  enableHoverEffect?: boolean;
  padding?: string;
};

const HorizontalScroll = ({
  images,
  imageHeight = "25rem",
  imageWidth = "12.5rem",
  backgroundCol = "#fff",
  enableHoverEffect = true,
  padding = "1rem",
}: HorizontalScrollProps) => {
  return (
    <div
      className="scroll-container"
      style={{ background: backgroundCol, padding: padding }}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className={`image-container ${
            enableHoverEffect ? "hover-enabled" : ""
          }`}
          style={{ flex: "0 0 auto", background: backgroundCol }}
        >
          <p className="hor-header">{image.header}</p>
          <p className="read-more">Tryck för att läsa mer</p>
          <picture>
            <source srcSet={image.webpSrc} type="image/webp" />
            <img
              src={image.src}
              alt={image.alt}
              className="horizontal-img"
              style={{
                height: imageHeight,
                width: imageWidth,
                objectPosition: image.imagePosition,
              }}
              loading="lazy"
              decoding="async"
            />
          </picture>
          {enableHoverEffect && <p className="overlay-text">{image.text}</p>}
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;
