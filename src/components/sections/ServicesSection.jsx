import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building, TrendingUp, Shield } from 'lucide-react';
import PropertyCarousel from '@/components/PropertyCarousel';

const ServicesSection = ({ properties, currentPropertyIndex, setCurrentPropertyIndex, handleContactClick }) => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Venta de Propiedades",
      description: "Amplio catálogo de casas, departamentos y terrenos en las mejores ubicaciones."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Renta de Inmuebles",
      description: "Opciones de renta para vivienda y espacios comerciales con contratos seguros."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Inversión Inmobiliaria",
      description: "Asesoría especializada para maximizar tu inversión en bienes raíces."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Asesoría Legal",
      description: "Acompañamiento legal completo en todos tus procesos inmobiliarios."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios inmobiliarios para satisfacer todas tus necesidades.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <PropertyCarousel
          properties={properties}
          currentPropertyIndex={currentPropertyIndex}
          setCurrentPropertyIndex={setCurrentPropertyIndex}
          handleContactClick={handleContactClick}
        />
      </div>
    </section>
  );
};

export default ServicesSection;