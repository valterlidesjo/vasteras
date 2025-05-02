import React from "react";
import "../styles/components/roomPictureDesktop.scss";

interface RoomPictureDesktopProps {
  src: string;
  srcW: string;
  roomName: string;
  roomText: string;
  height: string;
  width: string;
  imagePosition?: string;
}

const RoomPicturesDesktop: React.FC<RoomPictureDesktopProps> = ({
  src,
  srcW,
  roomName,
  roomText,
  height,
  width,
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
          loading="lazy"
          decoding="async"
          alt="fade-pictures"
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
