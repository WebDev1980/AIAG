import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import portadaImage from "../assets/real_estate.webp"; // ✅ portada
import logoAIAG from "../assets/logo_AIAG.svg"; // ✅ logo único

const textVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 8,
      staggerChildren: 0.5,
    },
  },
};

const HeroSection = ({ handleNavigation }) => {
  return (
    <motion.section
      id="inicio"
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center hero-content">
          {/* 🔵 Columna izquierda */}
          <motion.div
            className="hero-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="text-center relative min-h-[280px]"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                AIAG
              </h1>

              <motion.img
                src={logoAIAG}
                alt="Logo AIAG"
                className="absolute top-[4.9rem] left-0 right-0 mx-auto w-[min(50vw,180px)] h-auto"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 7.6, duration: 0.8 }}
              />

              <motion.h2
                className="text-4xl lg:text-5xl font-semibold text-[#1877f2] mb-2"
                variants={textVariants}
              >
                Capacitamos Expertos
              </motion.h2>
              <motion.h2
                className="text-4xl lg:text-5xl font-semibold text-foreground mb-2"
                variants={textVariants}
              >
                Construimos Confianza
              </motion.h2>
              <motion.h2
                className="text-4xl lg:text-5xl font-semibold text-[#1877f2] mb-8"
                variants={textVariants}
              >
                Acreditamos el Futuro
              </motion.h2>
            </motion.div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Excelencia en cada paso, éxito en cada transacción. Somos
              especialistas en el mercado inmobiliario. Una amplia experiencia,
              entrega y profesionalismo nos respaldan.
            </p>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 9.6,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="inline-flex gap-4 flex-wrap justify-center">
                <button
                  className="btn-primary text-lg"
                  onClick={() => handleNavigation("nosotros")}
                >
                  Conócenos
                </button>
                <button
                  className="btn-primary text-lg"
                  onClick={() => handleNavigation("contacto")}
                >
                  Contáctanos
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* 🟣 Columna derecha con imagen y cintilla */}
          <motion.div
            className="relative w-full max-w-full mx-auto"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-image relative overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="w-full h-96 object-cover"
                alt="Imagen Portada de AIAG"
                src={portadaImage}
              />
              <img
                className="watermark"
                alt="Marca de agua AIAG"
                src={logoAIAG}
              />
            </div>

            <div className="absolute -bottom-6 left-6 right-6">
              <motion.div
                className="badge"
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 10, duration: 1, ease: "easeOut" }}
              >
                <Award className="w-8 h-8 sm:w-7 sm:h-7 md:w-[22px] md:h-[22px]" />
                <motion.span
                  className="text-[16px] sm:text-base md:text-lg lg:text-xl font-semibold"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 11, duration: 0.8, ease: "easeOut" }}
                >
                  Excelencia en el Negocio Inmobiliario
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
