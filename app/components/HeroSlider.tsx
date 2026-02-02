"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; 

// ESTRATEGIA VISUAL CORREGIDA (Solo Cosmética/Texturas):
const slides = [
  {
    id: 1,
    // Textura de crema suave/rosa (Sensorial)
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2574&auto=format&fit=crop",
    alt: "Textura crema hidratante"
  },
  {
    id: 2,
    // Frascos/Envases minimalistas (Producto puro)
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2574&auto=format&fit=crop",
    alt: "Colección de cuidado de la piel"
  },
  {
    id: 3,
    // Ingredientes/Frescura (Aloe/Agua)
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2576&auto=format&fit=crop",
    alt: "Ingredientes naturales y pureza"
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Rotación automática cada 5 segundos
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-white flex items-center justify-center">
      
      {/* 1. SLIDER DE FONDO (Efecto Ken Burns suave) */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, scale: 1.1 }} 
          animate={{ opacity: 1, scale: 1 }}   
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={slides[index].image} 
            alt={slides[index].alt}
            className="w-full h-full object-cover"
          />
          
          {/* OVERLAY: Velo blanco semitransparente para que el texto se lea perfecto */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-white/80" />
        </motion.div>
      </AnimatePresence>

      {/* 2. TEXTURA DIGITAL SUTIL */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply z-10 pointer-events-none"></div>

      {/* 3. CONTENIDO (Marketing) */}
      <div className="relative z-20 text-center px-6 max-w-4xl mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          
          <span className="inline-block py-1.5 px-4 rounded-full border border-primary/20 bg-white/80 text-primary text-[10px] uppercase tracking-[0.4em] mb-6 backdrop-blur-md shadow-sm font-bold">
            Dermatología Avanzada
          </span>
          
          {/* TÍTULO */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-8 tracking-tighter leading-none drop-shadow-sm">
            EL FUTURO DE<br />
            <span className="italic font-light text-primary">TU PIEL</span>
          </h1>
          
          <p className="text-zinc-700 text-sm md:text-lg font-light tracking-wide max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Fórmulas maestras diseñadas para nutrir y reparar. <br className="hidden md:block"/>
            Sin rellenos. Solo <strong className="font-medium text-foreground">ciencia y pureza.</strong>
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
             {/* BOTÓN 1: Magenta (Primary) */}
             <Link href="/#productos">
               <button className="group relative px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all hover:bg-primary/90 rounded-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 duration-300">
                  <span className="relative z-10">Ver Tratamientos</span>
                  <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-white z-20" />
               </button>
             </Link>
             
             {/* BOTÓN 2: Transparente */}
             <Link href="/nosotros">
               <button className="px-8 py-4 border border-zinc-400 text-foreground text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:border-transparent hover:shadow-lg transition-all rounded-sm backdrop-blur-sm">
                  Nuestra Fórmula
               </button>
             </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}