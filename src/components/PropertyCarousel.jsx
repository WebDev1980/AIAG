import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Bed, Bath, Square } from 'lucide-react';

const PropertyCarousel = ({ properties, currentPropertyIndex, setCurrentPropertyIndex, handleContactClick }) => {
  
  const nextProperty = () => {
    setCurrentPropertyIndex((prev) => (prev + 1) % properties.length);
  };

  const prevProperty = () => {
    setCurrentPropertyIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Propiedades Destacadas</h3>
      
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPropertyIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <img  
                alt={`Propiedad ${properties[currentPropertyIndex].title}`}
                className="w-full h-64 object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1634634465913-5bb5600942f2" />
            </div>
            
            <div>
              {properties[currentPropertyIndex].featured && (
                <div className="flex items-center space-x-2 mb-3">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-yellow-600">Destacada</span>
                </div>
              )}
              
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                {properties[currentPropertyIndex].title}
              </h4>
              
              <p className="text-3xl font-bold text-blue-600 mb-4">
                {properties[currentPropertyIndex].price}
              </p>
              
              <div className="flex items-center space-x-2 text-gray-600 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{properties[currentPropertyIndex].location}</span>
              </div>
              
              <div className="flex items-center space-x-6 mb-6">
                {properties[currentPropertyIndex].beds > 0 && (
                  <div className="flex items-center space-x-2">
                    <Bed className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{properties[currentPropertyIndex].beds} hab</span>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <Bath className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{properties[currentPropertyIndex].baths} baños</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Square className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{properties[currentPropertyIndex].area}</span>
                </div>
              </div>
              
              <Button 
                onClick={handleContactClick}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Más Información
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex justify-center space-x-4 mt-8">
          <Button 
            variant="outline" 
            onClick={prevProperty}
            className="w-12 h-12 rounded-full"
          >
            ←
          </Button>
          <Button 
            variant="outline" 
            onClick={nextProperty}
            className="w-12 h-12 rounded-full"
          >
            →
          </Button>
        </div>
        
        <div className="flex justify-center space-x-2 mt-4">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPropertyIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentPropertyIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCarousel;