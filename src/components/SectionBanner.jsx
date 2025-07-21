import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SectionBanner = ({ title, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const baseColor = "transparent";
  const textColor = "hsl(var(--foreground))"; // adaptado a modo oscuro
  const borderColor = "hsl(var(--primary))"; // adaptado a modo oscuro
  const borderRadius = "8px";
  const paddingY = "0.14rem";
  const marginY = isMobile ? "1.5rem" : "2rem";
  const fontSize = isMobile ? "1.25rem" : "1.4rem";
  const borderSideWidth = isMobile ? "22vw" : "38vw";

  return (
    <motion.div
      className="text-center font-semibold cursor-pointer"
      style={{
        background: baseColor,
        color: textColor,
        fontFamily: '"Inter", sans-serif',
        fontSize: fontSize,
        padding: `${paddingY} 0`,
        margin: `${marginY} 0`,
        borderStyle: "solid",
        borderRadius: borderRadius,
        borderTop: `15px solid ${hovered ? baseColor : borderColor}`,
        borderBottom: `15px solid ${hovered ? baseColor : borderColor}`,
        borderLeftWidth: borderSideWidth,
        borderRightWidth: borderSideWidth,
        borderLeftColor: hovered ? borderColor : baseColor,
        borderRightColor: hovered ? borderColor : baseColor,
        boxShadow: "none",
        transition: "border-color 0.4s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {title}
    </motion.div>
  );
};

export default SectionBanner;
