import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import MainLayout from "../layout/MainLayout";
import Rooms from "../pages/Rooms";
import Food from "../pages/Food";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/vara-rum",
        element: <Rooms />,
      },
      {
        path: "/mat-dryck",
        element: <Food />,
      },
    ],
  },
]);
