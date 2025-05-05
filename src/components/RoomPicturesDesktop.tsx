import React from "react";
import "../styles/components/roomPictureDesktop.scss";

interface RoomPictureDesktopProps {
  src: string;
  srcW: string;
  roomName: string;
  roomText: string;
  height: string;
  width: string;
  alt: string;
  htmlHeight?: number;
  htmlWidth?: number;
  title?: string;
  imagePosition?: string;
}

const RoomPicturesDesktop: React.FC<RoomPictureDesktopProps> = ({
  src,
  srcW,
  alt,
  roomName,
  roomText,
  height,
  width,
  title,
  htmlHeight,
  htmlWidth,
  imagePosition,
}) => {
  return (
    <div
      className="room-picture-fade-container"
      style={{ height: height, width: width }}
    >
      <picture className="room-picture">
        <source srcSet={srcW} type="image/webp" />
        <img
          src={src}
          className="room-image"
          loading="eager"
          decoding="async"
          alt={alt}
          title={alt}
          width={htmlWidth}
          height={htmlHeight}
          style={{
            objectPosition: imagePosition,
          }}
        />
      </picture>
      <p className="room-image-header">{roomName}</p>
      <p className="room-image-text">{roomText}</p>
    </div>
  );
};

export default RoomPicturesDesktop;
