import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">OFV</span>
          </div>
          <span className="text-lg font-semibold">OFV y Asociados</span>
        </div>
        <p className="text-gray-400">
          © 2025 OFV y Asociados. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;