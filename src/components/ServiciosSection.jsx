import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, GraduationCap, TrendingUp, Scale } from "lucide-react";
import SectionBanner from "./SectionBanner";

const ServiciosSection = ({ expanded, toggleSection }) => {
  const serviceCards = [
    {
      icon: Home,
      title: "Bolsa Inmobiliaria",
      text: "Amplio catálogo de casas, departamentos y terrenos en las mejores ubicaciones.",
    },
    {
      icon: GraduationCap,
      title: "Acreditaciones",
      text: "Impartición de Cursos y talleres especializados que te forman como profesional inmobiliario.",
    },
    {
      icon: TrendingUp,
      title: "Inversión Inmobiliaria",
      text: "Asesoría especializada para maximizar tu inversión en bienes raíces.",
    },
    {
      icon: Scale,
      title: "Asesoría Legal",
      text: "Acompañamiento legal completo en todos tus procesos inmobiliarios.",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-background text-foreground transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <SectionBanner title="Servicios" onClick={toggleSection} />
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
                {serviceCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="info-card text-center bg-white dark:bg-[hsl(222,47%,12%)] p-6 rounded-lg shadow-sm transition-colors duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                  >
                    <card.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground">{card.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServiciosSection;
