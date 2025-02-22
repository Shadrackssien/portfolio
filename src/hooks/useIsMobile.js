import { useEffect, useState } from "react";
import { useScreenWidth } from "./useScreenWidth";

export const useIsMobile = () => {
  const { width } = useScreenWidth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 720);
  }, [width]);

  return { isMobile };
};
