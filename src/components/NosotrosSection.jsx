import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, GraduationCap, Shield } from "lucide-react";
import SectionBanner from "./SectionBanner";

const NosotrosSection = ({
  expanded,
  toggleSection,
  expandedButtons,
  toggleButton,
}) => {
  const infoCards = [
    {
      icon: Users,
      title: "Equipo Experto",
      text: "Profesionales certificados con amplia experiencia en el mercado inmobiliario local.",
    },
    {
      icon: GraduationCap,
      title: "Formación de Alto Nivel",
      text: "Impartimos cursos y otorgamos acreditaciones que elevan el estándar de calidad del sector.",
    },
    {
      icon: Shield,
      title: "Confianza Total",
      text: "Transacciones 100% seguras con respaldo legal completo en cada operación.",
    },
  ];

  const detailButtons = [
    {
      key: "historia",
      title: "Historia",
      content:
        "El 18 de Noviembre de 2016 se formalizó la constitución de la Asociación de Agentes Inmobiliarios Acreditados del Estado de Guanajuato, con un total de 32 Asociados, de diversos municipios del Estado de Guanajuato con el interés de encausar la profesionalización de los agentes inmobiliarios de la entidad.",
    },
    {
      key: "mision",
      title: "Misión",
      content:
        "Ser una Agrupación con los más altos estándares de ética, servicio y capacitación en cumplimiento a la ley, el reglamento y el Código de Ética que regula los agentes inmobiliarios del Estado de Guanajuato.",
    },
    {
      key: "vision",
      title: "Visión",
      content:
        "Ser el organismo líder de los agentes inmobiliarios del Estado de Guanajuato al desarrollar una visión compartida basada en un nivel de confianza, para homologar criterios de operación, bajo el código de ética que emana la ley que regula a los agentes inmobiliarios en el Estado de Guanajuato.",
    },
    {
      key: "objetivos",
      title: "Objetivos",
      content: [
        "Profesionalizar y dignificar la actividad inmobiliaria mediante la capacitación y especialización, para obtener el reconocimiento de los sectores público y privado.",
        "Coadyuvar con el Gobierno del Estado y particularmente con la Secretaría de Desarrollo Económico Sustentable en la aplicación de la Ley.",
      ],
    },
  ];

  const alturaFija = typeof window !== "undefined" && window.innerWidth >= 640;

  return (
    <section
      id="nosotros"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-background text-foreground transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <SectionBanner title="Nosotros" onClick={toggleSection} />
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="fade-in">
                <p className="text-lg text-muted-foreground mb-12 text-center max-w-4xl mx-auto leading-relaxed">
                  AIAG agrupa a los profesionales inmobiliarios en el Estado de
                  Guanajuato acreditados por la Secretaría de Economía.
                  Fomentamos e impulsamos la formación profesional promoviendo
                  la acreditación, el reconocimiento de cursos especializados a
                  diferentes niveles con el mayor estándar de calidad.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {infoCards.map((card, index) => (
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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 nosotros-buttons">
                  {detailButtons.map((item) => (
                    <div key={item.key} className="flex flex-col">
                      <button
                        className="btn-secondary w-full dark:bg-[#1F2937] dark:text-[#DEB887] dark:border dark:border-[#DEB887] dark:hover:bg-[#273549]"
                        onClick={() => toggleButton(item.key)}
                      >
                        {item.title}
                      </button>
                      <AnimatePresence>
                        {expandedButtons[item.key] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                              opacity: 1,
                              height: alturaFija ? 300 : "auto",
                            }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-2 p-4 bg-blue-50 dark:bg-muted rounded-lg flex flex-col justify-start transition-colors duration-300 overflow-hidden"
                          >
                            {Array.isArray(item.content) ? (
                              <ul className="list-disc pl-5 space-y-2 text-foreground font-medium leading-relaxed">
                                {item.content.map((point, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.4 + i * 0.1,
                                      ease: "easeOut",
                                    }}
                                  >
                                    {point}
                                  </motion.li>
                                ))}
                              </ul>
                            ) : (
                              <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={`text-foreground font-medium leading-relaxed ${
                                  item.key === "objetivos" ? "" : "text-center"
                                }`}
                              >
                                {item.content}
                              </motion.p>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default React.memo(NosotrosSection);
