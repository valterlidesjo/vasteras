import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const apiKey = import.meta.env.VITE_GOOGLE_API;
if (!apiKey) {
  console.log("ERROR");
  throw new Error("VITE_GOOGLE_API environment variable is not set.");
}

const GoogleMap = () => {
  const position = { lat: 59.6116676, lng: 16.5451908 };
  return (
    <>
      <APIProvider apiKey={apiKey}>
        <div style={{ height: "60vh", width: "100%" }}>
          <Map zoom={15} center={position}></Map>
        </div>
      </APIProvider>
    </>
  );
};

export default GoogleMap;
