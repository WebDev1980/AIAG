import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import SectionBanner from "./SectionBanner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const MapModal = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex flex-col w-[90vw] max-w-[1200px] p-0 gap-0 h-[80vh] sm:h-[60vh]">
        <div className="bg-background border-b p-0 m-0 leading-none text-foreground">
          <h2 className="text-lg font-semibold px-4 py-3 m-0 leading-none">
            Nuestra Ubicación
          </h2>
        </div>
        <div className="flex-grow overflow-hidden m-0 p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.633336249927!2d-101.6458126855986!3d21.12723798594518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf0533687a29%3A0x4a1a9f6d6e3d11a7!2sPradera%201017%2C%20Azteca%2C%2037520%20Le%C3%B3n%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1678886655443!5m2!1ses-419!2smx"
            className="w-full h-full rounded-md block"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Ubicación de AIAG"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ContactoSection = ({ expanded, toggleSection }) => {
  const contactCards = [
    {
      icon: Phone,
      title: "Teléfono",
      lines: [
        "+52 1 479 225 0552",
        "Lun - Vie: 9:00 - 17:00",
        "Sábado: 9:00 - 14:00",
      ],
      buttonText: "Llamar Ahora",
      action: () => window.open("tel:+5214792250552", "_self"),
    },
    {
      icon: Mail,
      title: "Correo electrónico",
      lines: [
        "contacto@aiag.mx",
        "Respuesta promedio: +/- 24 horas",
        "Sábado: 9:00 - 14:00",
      ],
      buttonText: "Enviar Email",
      action: () => window.open("mailto:contacto@aiag.mx"),
    },
    {
      icon: MapPin,
      title: "Dirección",
      lines: ["Pradera 1017, Azteca,", "León, Gto.", "Sábado: 9:00 - 14:00"],
      buttonText: "Ver Mapa",
      isMap: true,
    },
  ];

  return (
    <section
      id="contacto"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-background text-foreground transition-colors duration-300 mb-28"
    >
      <div className="max-w-7xl mx-auto">
        <SectionBanner title="Contacto" onClick={toggleSection} />
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="fade-in text-center">
                <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-12 transition-colors duration-300">
                  Nuestro equipo está aquí para ayudarte
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {contactCards.map((card, index) => (
                    <motion.div
                      key={index}
                      className="info-card text-center flex flex-col items-center bg-white dark:bg-[hsl(222,47%,12%)] p-6 rounded-lg shadow-sm transition-colors duration-300"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                    >
                      <card.icon
                        className="w-12 h-12 text-primary mx-auto mb-2"
                        aria-hidden="true"
                        focusable="false"
                      />
                      <h3 className="text-xl font-bold mb-[2px] text-foreground">
                        {card.title}
                      </h3>
                      <div>
                        {card.lines.map((line, i) => {
                          const isInvisible =
                            card.title !== "Teléfono" && i === 2;
                          const isGreyText =
                            line === "Lun - Vie: 9:00 - 17:00" ||
                            line === "Sábado: 9:00 - 14:00" ||
                            line === "Respuesta promedio: +/- 24 horas" ||
                            line === "León, Gto.";
                          const isPhoneNumber =
                            card.title === "Teléfono" &&
                            line === "+52 1 479 225 0552";

                          return (
                            <p
                              key={i}
                              className={`${
                                isInvisible
                                  ? "text-sm text-transparent select-none pointer-events-none"
                                  : isPhoneNumber
                                  ? "text-[15px] text-foreground"
                                  : isGreyText
                                  ? "text-zinc-500 dark:text-zinc-400 text-sm"
                                  : "text-foreground text-base"
                              }`}
                            >
                              {line}
                            </p>
                          );
                        })}
                      </div>
                      {card.isMap ? (
                        <MapModal>
                          <button
                            className="btn-secondary mt-[7px] dark:bg-[#1F2937] dark:text-[#DEB887] dark:border dark:border-[#DEB887] dark:hover:bg-[#273549]"
                            aria-label="Abrir mapa con ubicación AIAG"
                          >
                            {card.buttonText}
                          </button>
                        </MapModal>
                      ) : (
                        <button
                          onClick={card.action}
                          className="btn-secondary mt-[7px] dark:bg-[#1F2937] dark:text-[#DEB887] dark:border dark:border-[#DEB887] dark:hover:bg-[#273549]"
                          aria-label={`Activar contacto por ${card.title.toLowerCase()}`}
                        >
                          {card.buttonText}
                        </button>
                      )}
                    </motion.div>
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

export default React.memo(ContactoSection);
