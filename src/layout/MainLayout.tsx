import { Outlet } from "react-router-dom";
import NavMobile from "../components/NavMobile";
import NavDesktop from "../components/NavDesktop";
import { useIsMobile } from "../utils/useIsMobile";

const MainLayout = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <NavMobile text="Hotell" text2="Västerås" />
      ) : (
        <NavDesktop text="Hotell" text2="Västerås" />
      )}

      <main
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   flexDirection: "column",
      //   width: "100%",
      // }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
