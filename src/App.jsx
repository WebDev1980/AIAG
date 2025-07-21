import React, { useMemo, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import usePageController from "@/hooks/usePageController";

import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NosotrosSection from "@/components/NosotrosSection";
import ServiciosSection from "@/components/ServiciosSection";
import GaleriaSection from "@/components/GaleriaSection";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

const LOGO_URL = "/logo_AIAG.svg";

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { toast } = useToast();
  const pageController = usePageController({ toast });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  const memoizedHeader = useMemo(
    () => (
      <Header
        logoUrl={LOGO_URL}
        handleNavigation={pageController.handleNavigation}
        mobileMenuOpen={pageController.mobileMenuOpen}
        setMobileMenuOpen={pageController.setMobileMenuOpen}
        activeSection={pageController.activeSection}
      />
    ),
    [
      pageController.handleNavigation,
      pageController.mobileMenuOpen,
      pageController.setMobileMenuOpen,
      pageController.activeSection,
    ]
  );

  const memoizedHero = useMemo(
    () => (
      <HeroSection
        logoUrl={LOGO_URL}
        handleNavigation={pageController.handleNavigation}
      />
    ),
    [pageController.handleNavigation]
  );

  const memoizedNosotros = useMemo(
    () => (
      <NosotrosSection
        expanded={pageController.expandedSections.nosotros}
        toggleSection={() => pageController.toggleSection("nosotros")}
        expandedButtons={pageController.expandedButtons}
        toggleButton={pageController.toggleButton}
      />
    ),
    [
      pageController.expandedSections.nosotros,
      pageController.expandedButtons,
      pageController.toggleSection,
      pageController.toggleButton,
    ]
  );

  const memoizedServicios = useMemo(
    () => (
      <ServiciosSection
        expanded={pageController.expandedSections.servicios}
        toggleSection={() => pageController.toggleSection("servicios")}
      />
    ),
    [pageController.expandedSections.servicios, pageController.toggleSection]
  );

  const memoizedGaleria = useMemo(
    () => (
      <GaleriaSection
        expanded={pageController.expandedSections.galeria}
        toggleSection={() => pageController.toggleSection("galeria")}
      />
    ),
    [pageController.expandedSections.galeria, pageController.toggleSection]
  );

  const memoizedContacto = useMemo(
    () => (
      <ContactoSection
        expanded={pageController.expandedSections.contacto}
        toggleSection={() => pageController.toggleSection("contacto")}
      />
    ),
    [pageController.expandedSections.contacto, pageController.toggleSection]
  );

  const memoizedFooter = useMemo(() => <Footer logoUrl={LOGO_URL} />, []);

  const memoizedWidgets = useMemo(
    () => (
      <FloatingWidgets
        showScrollToTop={pageController.showScrollToTop}
        handleScrollToTop={pageController.handleScrollToTop}
        handleScrollToBottom={pageController.handleScrollToBottom}
      />
    ),
    [
      pageController.showScrollToTop,
      pageController.handleScrollToTop,
      pageController.handleScrollToBottom,
    ]
  );

  if (showPreloader) {
    return <Preloader logoUrl={LOGO_URL} />;
  }

  return (
    <>
      <Helmet>
        <title>AIAG</title>
        <meta
          name="description"
          content="AIAG agrupa a los profesionales inmobiliarios en el Estado de Guanajuato acreditados por la Secretaría de Economía. Excelencia en cada paso, éxito en cada transacción."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* 🌙 Botón para alternar modo oscuro */}
        <div className="fixed bottom-4 right-4 z-[999]">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-3 py-2 rounded-full bg-muted text-muted-foreground shadow-md hover:shadow-lg transition text-sm"
            title="Alternar modo"
          >
            {isDarkMode ? "☀️ Claro" : "🌙 Oscuro"}
          </button>
        </div>

        {memoizedHeader}
        <main>
          {memoizedHero}
          {memoizedNosotros}
          {memoizedServicios}
          {memoizedGaleria}
          {memoizedContacto}
        </main>
        {memoizedFooter}
        {memoizedWidgets}
        <Toaster />
      </div>
    </>
  );
};

export default App;
