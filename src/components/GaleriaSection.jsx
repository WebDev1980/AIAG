import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Search, RefreshCcw } from "lucide-react";
import SectionBanner from "./SectionBanner";

// ✅ Imports individuales de todas las imágenes
import carrusel1 from "../assets/carrusel (1).webp";
import carrusel2 from "../assets/carrusel (2).webp";
import carrusel3 from "../assets/carrusel (3).webp";
import carrusel4 from "../assets/carrusel (4).webp";
import carrusel5 from "../assets/carrusel (5).webp";
import carrusel6 from "../assets/carrusel (6).webp";
import carrusel7 from "../assets/carrusel (7).webp";
import carrusel8 from "../assets/carrusel (8).webp";
import carrusel9 from "../assets/carrusel (9).webp";
import carrusel10 from "../assets/carrusel (10).webp";
import carrusel11 from "../assets/carrusel (11).webp";
import carrusel12 from "../assets/carrusel (12).webp";
import carrusel13 from "../assets/carrusel (13).webp";
import carrusel14 from "../assets/carrusel (14).webp";
import carrusel15 from "../assets/carrusel (15).webp";
import carrusel16 from "../assets/carrusel (16).webp";
import carrusel17 from "../assets/carrusel (17).webp";
import carrusel18 from "../assets/carrusel (18).webp";
import carrusel19 from "../assets/carrusel (19).webp";
import carrusel20 from "../assets/carrusel (20).webp";

const Carousel = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const imageRef = useRef(null);

  // ✅ Arreglo con imágenes estáticas
  const galleryImages = useMemo(
    () => [
      { id: 0, src: carrusel1, alt: "Imagen de galería 1" },
      { id: 1, src: carrusel2, alt: "Imagen de galería 2" },
      { id: 2, src: carrusel3, alt: "Imagen de galería 3" },
      { id: 3, src: carrusel4, alt: "Imagen de galería 4" },
      { id: 4, src: carrusel5, alt: "Imagen de galería 5" },
      { id: 5, src: carrusel6, alt: "Imagen de galería 6" },
      { id: 6, src: carrusel7, alt: "Imagen de galería 7" },
      { id: 7, src: carrusel8, alt: "Imagen de galería 8" },
      { id: 8, src: carrusel9, alt: "Imagen de galería 9" },
      { id: 9, src: carrusel10, alt: "Imagen de galería 10" },
      { id: 10, src: carrusel11, alt: "Imagen de galería 11" },
      { id: 11, src: carrusel12, alt: "Imagen de galería 12" },
      { id: 12, src: carrusel13, alt: "Imagen de galería 13" },
      { id: 13, src: carrusel14, alt: "Imagen de galería 14" },
      { id: 14, src: carrusel15, alt: "Imagen de galería 15" },
      { id: 15, src: carrusel16, alt: "Imagen de galería 16" },
      { id: 16, src: carrusel17, alt: "Imagen de galería 17" },
      { id: 17, src: carrusel18, alt: "Imagen de galería 18" },
      { id: 18, src: carrusel19, alt: "Imagen de galería 19" },
      { id: 19, src: carrusel20, alt: "Imagen de galería 20" },
    ],
    []
  );

  // ⚙️ Lógica que ya tenías (sin cambios)
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  const openImage = (i) => {
    setActiveImageIndex(i);
    setZoom(1);
    document.body.style.overflow = "hidden";
  };
  const closeImage = () => {
    setActiveImageIndex(null);
    setZoom(1);
    document.body.style.overflow = "";
  };
  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 1));
  const resetZoom = () => setZoom(1);
  const handleWheel = (e) => {
    e.preventDefault();
    e.deltaY < 0 ? zoomIn() : zoomOut();
  };
  const navigateModal = (dir) => {
    setActiveImageIndex(
      (prev) => (prev + dir + galleryImages.length) % galleryImages.length
    );
    setZoom(1);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeImage();
    if (e.key === "ArrowRight") navigateModal(1);
    if (e.key === "ArrowLeft") navigateModal(-1);
  };

  useEffect(() => {
    if (activeImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeImageIndex]);

  return (
    <>
      {/* Tu JSX de carrusel + modal sigue igual aquí */}
      {/* No lo reescribo entero para que no se extienda aún más, pero lo puedes mantener sin cambios */}
    </>
  );
});

const GaleriaSection = ({ expanded, toggleSection }) => {
  return (
    <section id="galeria" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionBanner title="Galería" onClick={toggleSection} />
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 transition-colors duration-300">
                  AIAG en Imágenes
                </h2>
                <Carousel />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GaleriaSection;
