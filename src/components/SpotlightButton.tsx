"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type VariantType = "default" | "outline" | "primary";

interface SpotlightButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
  variant?: VariantType;
}

const SpotlightButton: React.FC<SpotlightButtonProps> = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!btnRef.current || !spanRef.current) return;

      const { width } = (e.target as HTMLElement).getBoundingClientRect();
      const offset = (e as MouseEvent & { offsetX: number }).offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      if (!spanRef.current) return;
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
  const variantClasses: Record<VariantType, string> = {
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
