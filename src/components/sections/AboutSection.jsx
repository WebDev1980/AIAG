import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Clock } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Equipo Experto",
      description: "Profesionales certificados con amplia experiencia en el mercado inmobiliario local."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Confianza Total",
      description: "Transacciones 100% seguras con respaldo legal completo en cada operación."
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-600" />,
      title: "Atención 24/7",
      description: "Estamos disponibles cuando nos necesites, con respuesta rápida y eficiente."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Nosotros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una empresa familiar con más de 15 años de experiencia en el sector inmobiliario, 
            comprometidos con brindar el mejor servicio y asesoría personalizada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;