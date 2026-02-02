"use client";

import HeroSlider from "./components/HeroSlider";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Preloader from "./components/Preloader";

export default function Home() {
  return (
    // CORRECCIÓN 1: Usamos las variables globales (bg-background) en lugar de bg-black
    <div className="min-h-screen bg-background text-foreground">
      
      <Preloader />

      <main>
        {/* Banner principal */}
        <HeroSlider />
        
        {/* Catálogo de productos */}
        <section id="productos" className="py-32 px-6 max-w-7xl mx-auto relative">
           
           {/* CORRECCIÓN 2: El brillo ahora es Púrpura (secondary) suave para que se vea sobre blanco */}
           <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-secondary/15 blur-[100px] rounded-full pointer-events-none" />

           <div className="text-center mb-24 relative z-10">
              {/* Badge actualizado: Borde gris suave y texto gris oscuro */}
              <span className="inline-block py-1 px-3 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-6 backdrop-blur-md">
                Colección Esencial
              </span>
              
              {/* Título actualizado: Texto oscuro y el énfasis en Magenta (Primary) */}
              <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter mt-2">
                El arte de cuidar <span className="text-primary">tu piel</span>
              </h2>
           </div>
           
           {/* Grid de productos */}
           <ProductGrid />
        </section>

        {/* Quiénes somos / Filosofía */}
        <About />
        
        {/* Garantías y beneficios */}
        <Benefits />
      </main>

    </div>
  );
}