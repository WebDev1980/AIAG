import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Search, RefreshCcw } from "lucide-react";
import SectionBanner from "./SectionBanner";

const Carousel = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const imageRef = useRef(null);

  const galleryImages = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        src: `carrusel (${i + 1}).webp`,
        alt: `Imagen de galería ${i + 1}`,
      })),
    []
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const openImage = (index) => {
    setActiveImageIndex(index);
    setZoom(1);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setActiveImageIndex(null);
    setZoom(1);
    document.body.style.overflow = "";
  };

  const zoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 1));
  };

  const resetZoom = () => {
    setZoom(1);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeImage();
    if (e.key === "ArrowRight") navigateModal(1);
    if (e.key === "ArrowLeft") navigateModal(-1);
  };

  const navigateModal = (direction) => {
    setActiveImageIndex(
      (prev) => (prev + direction + galleryImages.length) % galleryImages.length
    );
    setZoom(1);
  };

  useEffect(() => {
    if (activeImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeImageIndex]);

  return (
    <>
      <div className="carousel-container relative overflow-hidden">
        <div
          className="carousel-track flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="carousel-slide min-w-full flex justify-center items-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index > 2 ? "lazy" : "eager"}
                className="carousel-image w-full h-[500px] object-cover rounded-md shadow-md cursor-pointer"
                onClick={() => openImage(index)}
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="carousel-button prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition z-10"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="carousel-button next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition z-10"
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Modal de imagen ampliada */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
            onWheel={handleWheel}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                ref={imageRef}
                src={galleryImages[activeImageIndex].src}
                alt={galleryImages[activeImageIndex].alt}
                className="rounded-md shadow-lg transition-transform duration-300"
                style={{
                  transform: `scale(${zoom})`,
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                }}
              />

              {/* Cerrar */}
              <button
                onClick={closeImage}
                className="absolute top-2 right-2 bg-white text-black p-1 rounded-full shadow hover:bg-gray-200 transition"
                aria-label="Cerrar imagen ampliada"
              >
                <X size={20} />
              </button>

              {/* Zoom + Reset */}
              <div className="absolute bottom-2 right-2 flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    zoomIn();
                  }}
                  className="bg-white text-black p-1 rounded-full shadow hover:bg-gray-200 transition"
                  aria-label="Zoom in"
                >
                  <Search size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    resetZoom();
                  }}
                  className="bg-white text-black p-1 rounded-full shadow hover:bg-gray-200 transition"
                  aria-label="Restablecer zoom"
                >
                  <RefreshCcw size={20} />
                </button>
              </div>
            </motion.div>

            {/* Flechas ancladas al viewport con stopPropagation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateModal(-1);
              }}
              className="fixed top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition z-[10000]"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateModal(1);
              }}
              className="fixed top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition z-[10000]"
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
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
