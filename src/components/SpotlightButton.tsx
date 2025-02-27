"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SpotlightButton = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    const btn = btnRef.current;

    if (btn) {
      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        btn.removeEventListener("mousemove", handleMouseMove);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  // Base classes shared by all variants
  const baseClasses = "relative overflow-hidden rounded-xl font-semibold";

  // Variant specific classes
  const variantClasses = {
    default: "bg-slate-950 text-white",
    outline: "border border-white/15 text-white",
    primary: "bg-white text-gray-900",
  };

  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <motion.button
      whileTap={{ scale: 0.885 }}
      ref={btnRef}
      className={buttonClasses}
      {...props}
    >
      <span className="pointer-events-none relative z-10 text-gray-900">
        {children}
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-gradient-to-r from-red-300 to-sky-300"
      />
    </motion.button>
  );
};

export default SpotlightButton;
