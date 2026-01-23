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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center">
            
            <div className="relative w-64 md:w-80 h-auto p-4 overflow-hidden">
              {/* CORRECCIÓN FINAL: Usamos 'style' para forzar el blanco puro sí o sí */}
              <motion.img
                src="/img/logo-mipiel-white.png" 
                alt="Logo MIPIEL"
                className="w-full h-auto object-contain relative z-10"
                style={{ filter: "brightness(0) invert(1)" }} // <--- ESTA ES LA CLAVE
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
              <p className="text-[10px] text-zinc-400 uppercase tracking-[0.4em] font-medium animate-pulse">
                Preparando tu piel...
              </p>
              
              <div className="w-40 h-[2px] bg-zinc-800 rounded-full overflow-hidden border border-white/10">
                <motion.div 
                  className="h-full bg-[#EF5DA8] shadow-[0_0_10px_#EF5DA8]"
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