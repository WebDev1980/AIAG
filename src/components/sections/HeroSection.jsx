import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award } from 'lucide-react';

const HeroSection = ({ scrollToSection, handleContactClick }) => {
  return (
    <section id="inicio" className="pt-20 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Tu Hogar <span className="gradient-text">Perfecto</span> Te Espera
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              En OFV y Asociados transformamos sueños en realidad. Somos especialistas 
              en el mercado inmobiliario con más de 15 años de experiencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('servicios')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                Ver Propiedades
              </Button>
              <Button 
                variant="outline" 
                onClick={handleContactClick}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                Contactar Ahora
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img  
              alt="Casa moderna de lujo con jardín y piscina"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              src="https://images.unsplash.com/photo-1687949395814-84675a8042f3" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="font-semibold text-gray-800">+500</p>
                  <p className="text-sm text-gray-600">Propiedades Vendidas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;