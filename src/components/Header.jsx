import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoAIAG from "../assets/logo_AIAG.svg"; // ✅ Import directo desde src/assets

const Header = ({
  activeSection,
  handleNavigation,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const navItems = ["inicio", "nosotros", "servicios", "galeria", "contacto"];

  return (
    <>
      {/* 🔷 Barra de navegación principal */}
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 🔘 Logo y marca vinculados a raíz */}
            <a href="/AIAG/" className="flex items-center space-x-3 cursor-pointer">
              <img className="w-14 h-14" alt="Logo AIAG" src={logoAIAG} />
              {/* ✅ Aquí se usa el logo importado */}
              <span className="text-3xl font-bold text-[#16295C] dark:text-white">
                AIAG
              </span>
            </a>

            {/* 🟦 Navegación escritorio */}
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className={`navbar-label capitalize ${
                    activeSection === item ? "navbar-label-active" : ""
                  }`}
                >
                  {item === "galeria"
                    ? "Galería"
                    : item === "contacto"
                    ? "Contacto"
                    : item}
                </button>
              ))}
            </div>

            {/* 🔘 Icono móvil */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* 🟡 Overlay móvil */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* 🟢 Menú móvil vertical */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="flex flex-col space-y-4 pt-0">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item)}
              className={`menu-button ${
                activeSection === item ? "menu-button-active" : ""
              }`}
            >
              {item === "galeria"
                ? "Galería"
                : item === "contacto"
                ? "Contacto"
                : item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
