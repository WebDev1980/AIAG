import React from "react";
import { motion } from "framer-motion";
import logoPreloader from "../assets/logo_AIAG_preloader.svg";
import circleText from "../assets/circle-text.svg";

const Preloader = () => {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* 🔘 Contenedor central */}
      <motion.div
        className="logo-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* 🧩 Logo sin letras */}
        <img className="logo-large" alt="Logo AIAG" src={logoPreloader} />

        {/* 🌀 Texto circular SVG encapsulado para escalar */}
        <div className="text-ring-wrapper">
          <img
            className="text-ring"
            alt="Corona de texto giratoria"
            src={circleText}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
