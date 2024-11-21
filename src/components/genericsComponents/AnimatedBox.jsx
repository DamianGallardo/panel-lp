"use client"; // Este componente se ejecutará en el cliente

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedBox = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Deja de observar una vez que el elemento es visible
        }
      },
      { threshold: 0.1 } // 10% del elemento debe estar visible
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }} // Estado inicial
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Estado al entrar
      transition={{ duration: 1 }} // Duración de la transición
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;
