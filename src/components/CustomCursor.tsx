"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 }); // Initial position off-screen
  const cursorRef = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${
        mousePosition.x - 600
      }px, ${mousePosition.y - 600}px, 0)`;
    }
  }, [mousePosition]);

  return (
    <motion.div
      ref={cursorRef}
      className="cursor bg-gradient-to-r from-red-300/20 to-sky-400/20"
      style={{
        position: "fixed",
        width: "1200px",
        height: "1200px",
        pointerEvents: "none",
        zIndex: -1,
        maskImage:
          "radial-gradient(circle, rgba(252,165,165,0.5) 0%, rgba(0,0,0,0) 70%)",
      }}
    />
  );
};

export default CustomCursor;
