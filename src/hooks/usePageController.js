import { useState, useEffect, useCallback } from "react";

const usePageController = ({ toast }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("inicio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedButtons, setExpandedButtons] = useState({});
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }

    const sections = ["inicio", "nosotros", "servicios", "galeria", "contacto"];
    let current = "inicio";
    for (const section of sections) {
      const element = document.getElementById(section);
      if (
        element &&
        element.getBoundingClientRect().top < window.innerHeight / 2
      ) {
        current = section;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const openSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: true,
    }));
  };

  const toggleButton = (button) => {
    setExpandedButtons((prev) => ({
      ...prev,
      [button]: !prev[button],
    }));
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleNavigation = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);

    if (
      ["nosotros", "servicios", "galeria", "contacto"].includes(sectionId) &&
      !expandedSections[sectionId]
    ) {
      openSection(sectionId);
    }
  };

  return {
    isLoading,
    activeSection,
    mobileMenuOpen,
    expandedSections,
    expandedButtons,
    showScrollToTop,
    toggleSection,
    openSection,
    toggleButton,
    scrollToSection,
    setMobileMenuOpen,
    handleScrollToTop,
    handleScrollToBottom,
    handleNavigation,
  };
};

export default usePageController;
