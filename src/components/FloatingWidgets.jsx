import React, { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const FloatingWidgets = ({
  showScrollToTop,
  handleScrollToTop,
  handleScrollToBottom,
}) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;
      const reachedBottom = Math.ceil(scrollY + windowHeight) >= bodyHeight;

      setIsAtBottom(reachedBottom);
    };

    handleScroll(); // ⚡ Evalúa al montar
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-controls">
      <button
        className={`scroll-button ${showScrollToTop ? "" : "invisible-button"}`}
        onClick={handleScrollToTop}
        aria-label="Ir al inicio"
      >
        <ArrowUp size={20} />
      </button>

      <button
        className={`scroll-button ${isAtBottom ? "invisible-button" : ""}`}
        onClick={handleScrollToBottom}
        aria-label="Ir al fondo"
      >
        <ArrowDown size={20} />
      </button>
    </div>
  );
};

export default React.memo(FloatingWidgets);
