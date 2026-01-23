"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; 

const backgrounds = [
  {
    id: 1,
    // Tonos Gris Acero / Azul Noche (Mucho menos brillante)
    bg1: "conic-gradient(from 90deg at 50% 50%,#000000 0%,#0f172a 50%,#334155 100%)",
    bg2: "conic-gradient(from 0deg at 50% 50%,#000000 0%,#1e293b 50%,#475569 100%)",
  },
  {
    id: 2,
    // Tonos Plata Oscura
    bg1: "conic-gradient(from 90deg at 50% 50%,#000000 0%,#18181b 50%,#52525b 100%)",
    bg2: "conic-gradient(from 0deg at 50% 50%,#000000 0%,#27272a 50%,#71717a 100%)",
  },
  {
    id: 3,
    // Tonos Deep Ocean (Sutil)
    bg1: "conic-gradient(from 90deg at 50% 50%,#000000 0%,#020617 50%,#1e293b 100%)",
    bg2: "conic-gradient(from 0deg at 50% 50%,#000000 0%,#0f172a 50%,#334155 100%)",
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentBg = backgrounds[index];

  return (
    // CAMBIO MAESTRO: h-[100dvh] asegura que se vea perfecto en móviles
    // evitando que la barra del navegador tape el contenido.
    <div className="relative h-[100dvh] w-full overflow-hidden bg-black flex items-center justify-center">
      
      {/* 1. FONDO ANIMADO */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentBg.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Opacidad reducida al 40% para que no moleste */}
          <div 
            className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow opacity-40 mix-blend-screen blur-[100px]"
            style={{ backgroundImage: currentBg.bg1 }} 
          />
          <div 
            className="absolute bottom-[-50%] right-[-50%] w-[200%] h-[200%] animate-spin-reverse opacity-30 mix-blend-screen blur-[120px]"
            style={{ backgroundImage: currentBg.bg2 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. CAPA DE RUIDO */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 z-0"></div>

      {/* 3. CONTENIDO */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
        >
          {/* Etiqueta más discreta (borde white/30) */}
          <span className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/5 text-zinc-300 text-[10px] uppercase tracking-[0.4em] mb-6 backdrop-blur-md">
            Cosmética de Nueva Generación
          </span>
          
          {/* Título: Sin drop-shadow, degradado suave a gris */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 mb-8 tracking-tighter leading-tight">
            EL FUTURO DE<br />TU PIEL
          </h1>
          
          <p className="text-zinc-400 text-sm md:text-lg font-light tracking-wide max-w-xl mx-auto mb-10 leading-relaxed">
            Cosmética biotecnológica diseñada para fusionarse con tu ADN. 
            Sin rellenos. Solo ciencia y pureza.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
             {/* BOTÓN 1: Hover limpio sin glow excesivo */}
             <Link href="/#productos">
               <button className="group relative px-8 py-4 bg-transparent border border-white/40 text-white text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all hover:pr-12 hover:bg-white hover:text-black hover:border-white">
                  <span className="relative z-10">Explorar Lab</span>
                  <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-black z-20" />
               </button>
             </Link>
             
             {/* BOTÓN 2: Más sutil */}
             <Link href="/nosotros">
               <button className="px-8 py-4 border border-white/10 text-zinc-300 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/5 hover:text-white hover:border-white/30 backdrop-blur-md transition-all">
                  Ver Manifiesto
               </button>
             </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}