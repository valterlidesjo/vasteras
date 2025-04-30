import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../utils/Router";

const HomePage = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default HomePage;
