"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  const announcement = "✨ Envío GRATIS en compras superiores a $60.00 — Solo esta semana";

  useEffect(() => {
    // Verificamos si ya se cerró en esta sesión
    const dismissed = sessionStorage.getItem("announcement-dismissed");
    if (dismissed) setIsVisible(false);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcement-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-zinc-950 border-b border-white/10 text-white w-full z-[100] relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center relative">
            
            {/* TEXTO DE LA PROMOCIÓN */}
            <div className="flex items-center gap-3">
              {/* Icono Rosa Neón con animación suave */}
              <Sparkles size={14} className="text-[#EF5DA8] animate-pulse" />
              
              {/* CAMBIO: Texto cambiado a 'text-white' para máxima legibilidad */}
              <p className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-center text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
                {announcement}
              </p>
            </div>

            {/* BOTÓN CERRAR */}
            <button 
              onClick={handleClose}
              // Aclaré un poco la opacidad inicial (de 50 a 70) para que se vea mejor
              className="absolute right-4 p-1 opacity-70 hover:opacity-100 hover:text-[#EF5DA8] transition-all"
              aria-label="Cerrar aviso"
            >
              <X size={14} />
            </button>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
