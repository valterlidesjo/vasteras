import { Outlet } from "react-router-dom";
import NavMobile from "../components/NavMobile";

const MainLayout = () => {
  return (
    <>
      <NavMobile text="HOTELL" text2="VÄSTERÅS" />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
