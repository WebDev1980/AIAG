import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import FloatingWidgets from '@/components/FloatingWidgets';
import ScrollControls from '@/components/ScrollControls';
import { propertiesData } from '@/data/properties';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrollY, setScrollY] = useState(0);
  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['inicio', 'nosotros', 'servicios', 'contacto'];
      const current = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  const showToast = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>OFV y Asociados - Especialistas en Bienes Raíces</title>
        <meta name="description" content="OFV y Asociados, tu socio de confianza en el mercado inmobiliario. Especialistas en venta, renta e inversión de propiedades." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header 
          scrollY={scrollY}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <main>
          <HeroSection 
            scrollToSection={scrollToSection} 
            handleContactClick={showToast}
            image={propertiesData[0].image}
          />
          <AboutSection />
          <ServicesSection 
            properties={propertiesData}
            currentPropertyIndex={currentPropertyIndex}
            setCurrentPropertyIndex={setCurrentPropertyIndex}
            handleContactClick={showToast}
          />
          <ContactSection />
        </main>
        
        <Footer />
        <FloatingWidgets />
        <ScrollControls scrollToTop={scrollToTop} scrollToBottom={scrollToBottom} />
        <Toaster />
      </div>
    </>
  );
}

export default App;