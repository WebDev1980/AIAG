import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactDetails = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Teléfono",
      info: "+52 55 1234 5678",
      subtitle: "Lun - Vie: 9:00 - 18:00"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      info: "info@ofvyasociados.com",
      subtitle: "Respuesta en 24 horas"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Oficina",
      info: "Av. Reforma 123, CDMX",
      subtitle: "Col. Juárez, CP 06600"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Contáctanos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Listo para encontrar tu propiedad ideal? Nuestro equipo está aquí para ayudarte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactDetails.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4 flex justify-center">{contact.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
              <p className="text-blue-400 font-medium mb-1">{contact.info}</p>
              <p className="text-gray-400 text-sm">{contact.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;