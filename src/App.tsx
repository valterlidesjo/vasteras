import { RouterProvider } from "react-router-dom";
import { router } from "./utils/Router";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/Router";
import "./styles/global/global.scss";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
