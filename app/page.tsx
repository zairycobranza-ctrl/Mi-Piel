"use client";

import HeroSlider from "./components/HeroSlider";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Preloader from "./components/Preloader";

export default function Home() {
  return (
    // Hemos quitado Header y Footer de aquí porque ya están en el layout.tsx
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      <Preloader />

      <main>
        {/* Banner principal */}
        <HeroSlider />
        
        {/* Catálogo de productos */}
        <section id="productos" className="py-32 px-6 max-w-7xl mx-auto relative">
           
           {/* EFECTO DE LUZ: Brillo sutil blanco/platino para combinar con el nuevo estilo */}
           <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

           <div className="text-center mb-24 relative z-10">
              <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-6 backdrop-blur-md">
                Colección Esencial
              </span>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mt-2">
                El arte de cuidar <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">tu piel</span>
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