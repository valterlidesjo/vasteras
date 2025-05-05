import React from "react";
import "../styles/components/horizontalScroll.scss";

type HorizontalScrollProps = {
  images: {
    id: number;
    src: string;
    webpSrc: string;
    alt: string;
    title?: string;
    text?: string;
    header?: string;
    imagePosition?: string;
    htmlHeight?: number;
    htmlWidth?: number;
  }[];
  imageHeight?: string;
  imageWidth?: string;
  backgroundCol?: string;
  enableHoverEffect?: boolean;
  readMore?: boolean;
  padding?: string;
};

const HorizontalScroll = ({
  images,
  imageHeight = "25rem",
  imageWidth = "12.5rem",
  backgroundCol = "#fff",
  enableHoverEffect = true,
  readMore = true,
  padding,
}: HorizontalScrollProps) => {
  return (
    <div
      className="scroll-container"
      style={{ background: backgroundCol, padding: padding }}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className={`image-container ${enableHoverEffect && "hover-enabled"}`}
          style={{ flex: "0 0 auto", background: backgroundCol }}
        >
          {image.header && <p className="hor-header">{image.header}</p>}
          {readMore && <p className="read-more">Tryck för att läsa mer</p>}

          <picture>
            <source srcSet={image.webpSrc} type="image/webp" />
            <img
              src={image.src}
              alt={image.alt}
              title={image.alt}
              width={image.htmlWidth}
              height={image.htmlHeight}
              className="horizontal-img"
              style={{
                height: imageHeight,
                width: imageWidth,
                objectPosition: image.imagePosition,
              }}
              decoding="async"
              loading="eager"
            />
          </picture>
          {enableHoverEffect && <p className="overlay-text">{image.text}</p>}
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;
