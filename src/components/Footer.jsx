import React from "react";
import { motion } from "framer-motion";
import logoAIAG from "../assets/logo_AIAG.svg"; // ✅ Import directo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gray-800 dark:bg-muted text-white py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <img className="w-16 h-16" alt="Logo AIAG footer" src={logoAIAG} />
          <span className="text-3xl font-bold">AIAG</span>
        </div>
        <p className="text-[burlywood] text-base sm:text-lg mb-4">
          Asociación de Agentes Inmobiliarios Acreditados del Estado de
          Guanajuato
        </p>
        <p className="text-gray-400 text-xs sm:text-sm">
          © {currentYear} AIAG. Todos los derechos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
