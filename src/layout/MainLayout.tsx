import { Outlet } from "react-router-dom";
import NavMobile from "../components/NavMobile";
import NavDesktop from "../components/NavDesktop";
import Footer from "../components/Footer";
import { useIsMobile } from "../utils/useIsMobile";
import BookSpinn from "../components/BookSpinn";

const MainLayout = () => {
  const isMobile = useIsMobile();

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
      <BookSpinn />
      <Footer />
    </>
  );
};

export default MainLayout;
