"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white" // Fondo Blanco
        >
          <div className="relative flex flex-col items-center">
            
            {/* Contenedor con ancho fijo para evitar logo gigante */}
            <div className="w-48 md:w-64 h-auto relative z-10">
              <motion.img
                src="/img/logo-mipiel-white.png" 
                alt="Logo MIPIEL"
                className="w-full h-auto object-contain"
                // INVERTIR COLOR: Como el logo es blanco, lo invertimos a negro para verlo en fondo blanco
                style={{ filter: "invert(1)" }} 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <p className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] font-medium animate-pulse">
                Preparando tu piel...
              </p>
              
              {/* Barra de carga: Fondo gris claro y relleno Magenta (primary) */}
              <div className="w-40 h-[2px] bg-zinc-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary shadow-[0_0_10px_rgba(194,30,120,0.5)]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}