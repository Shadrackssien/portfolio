"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 }); // Initial position off-screen
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
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
        mousePosition.x - 12
      }px, ${mousePosition.y - 12}px, 0)`;
    }
  }, [mousePosition]);

  return (
    <motion.div
      ref={cursorRef}
      className="cursor bg-white/40 rounded-full"
      style={{
        position: "fixed",
        width: "24px",
        height: "24px",
        pointerEvents: "none",
        zIndex: 1,
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CustomCursor;
