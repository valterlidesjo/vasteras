import { Outlet } from "react-router-dom";
import NavMobile from "../components/NavMobile";
import { useEffect, useState } from "react";
import NavDesktop from "../components/NavDesktop";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isMobile ? (
        <NavMobile text="Hotell" text2="Västerås" />
      ) : (
        <NavDesktop text="Hotell" text2="Västerås" />
      )}

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
