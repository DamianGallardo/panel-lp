"use client"; // Este componente se ejecutará en el cliente
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const AnimatedText = ({ text = "", speed = 0.1 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Deja de observar después de activarse
        }
      },
      { threshold: 0.1 } // Activar cuando el 10% sea visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setDisplayedText(""); // Reiniciar texto al activarse
      let index = 0;
      if (!text) return;
      const interval = setInterval(() => {
        if (index < text.length) {
            setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed * 1000);

      return () => clearInterval(interval);
    }
  }, [isVisible, text, speed]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.span>
  );
};
