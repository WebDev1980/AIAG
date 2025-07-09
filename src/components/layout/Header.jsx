import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Building, Phone, Menu, X } from 'lucide-react';

const Header = ({ scrollY, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: <Home className="w-5 h-5" /> },
    { id: 'nosotros', label: 'Nosotros', icon: <Users className="w-5 h-5" /> },
    { id: 'servicios', label: 'Servicios', icon: <Building className="w-5 h-5" /> },
    { id: 'contacto', label: 'Contacto', icon: <Phone className="w-5 h-5" /> }
  ];

  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 || isMenuOpen ? 'glass-effect shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleLinkClick('inicio')}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">OFV</span>
              </div>
              <span className="text-xl font-bold text-gray-800">OFV y Asociados</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:bg-blue-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 focus:outline-none"
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white/80 backdrop-blur-md pb-4"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col items-center space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`flex items-center w-full justify-center space-x-3 py-3 text-lg transition-all ${
                      activeSection === item.id 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-800 hover:bg-blue-100'
                    }`}
                    variants={menuItemVariants}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Header;