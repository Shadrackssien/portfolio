import { useState } from "react";
import { useEffect } from "react";

export const useScreenWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Set initial width after component mounts
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
