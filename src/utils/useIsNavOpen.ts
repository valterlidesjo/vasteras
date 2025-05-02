import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useIsNavOpen = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavOpen(false);
  }, [location.pathname]);
  return { isNavOpen, setIsNavOpen };
};
