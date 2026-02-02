"use client";
import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const announcement = "✨ Envío GRATIS en compras superiores a $60.00 — Solo esta semana";

  useEffect(() => {
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
          initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
          // Fondo Foreground (Gris Oscuro) para contraste con el Header Blanco
          className="bg-foreground text-white w-full z-[100] relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center relative">
            <div className="flex items-center gap-3">
              {/* Icono Primary (Magenta) */}
              <Sparkles size={14} className="text-primary animate-pulse" />
              <p className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-center text-white">
                {announcement}
              </p>
            </div>
            <button onClick={handleClose} className="absolute right-4 p-1 opacity-70 hover:opacity-100 hover:text-primary transition-all">
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}