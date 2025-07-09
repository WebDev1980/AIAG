
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Facebook, Twitter } from 'lucide-react';

const socialLinks = {
  whatsapp: 'https://wa.me/5215512345678', // Número de México de ejemplo
  facebook: 'https://www.facebook.com/profile.php?id=100008324295613', // Enlace de ejemplo
  twitter: 'https://twitter.com/elonmusk' // Enlace de ejemplo
};

const FloatingWidgets = () => {
  return (
    <div className="floating-widget bottom-6 left-6 flex flex-col space-y-3">
      <motion.a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
      
      <motion.a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visitar nuestra página de Facebook"
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Facebook className="w-6 h-6" />
      </motion.a>
      
      <motion.a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Seguirnos en X (antes Twitter)"
        className="w-14 h-14 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center text-white shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Twitter className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default FloatingWidgets;
