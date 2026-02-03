"use client";

import { Target, Eye, Leaf, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

// NOTA: Borramos Header y Footer de aquí porque ya cargan en el layout.tsx
// Si los dejamos, saldrán duplicados.

export default function QuienesSomosPage() {
  return (
    // Mantenemos el fondo blanco y la selección fucsia
    <div className="bg-white min-h-screen text-zinc-800 selection:bg-[#E5007E] selection:text-white">
      
      <main>
        {/* HERO SECTION */}
        <section className="pt-40 pb-20 px-6 relative overflow-hidden">
          {/* Mancha de luz fucsia ambiental */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E5007E]/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full border border-[#E5007E]/20 bg-white text-[#E5007E] text-[10px] font-bold tracking-[0.4em] uppercase mb-8 shadow-sm">
                Nuestra Identidad
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-6 tracking-tight">
                El arte de tu piel <br />
                <span className="italic text-[#E5007E] font-light">en buenas manos.</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* SECCIÓN MISIÓN */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full border border-zinc-100 shadow-lg text-[#E5007E]">
                   <Target size={28} strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-serif text-zinc-900 font-bold">Misión</h2>
              </div>
              
              <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-zinc-600 text-justify">
                <p>
                  Nuestra misión en <strong className="text-[#E5007E]">MIPIEL</strong> es mejorar la calidad de vida de nuestros clientes, ofreciendo soluciones innovadoras y accesibles para el cuidado personal.
                </p>
                <p>
                  Nos comprometemos a desarrollar productos de alta calidad, elaborados con ingredientes naturales y respaldados por la ciencia que satisfagan las necesidades específicas de cada persona. Buscamos fomentar la confianza y el bienestar promoviendo hábitos de cuidado personal saludables y sostenibles.
                </p>
                <p>
                  Nos esforzamos por ser una empresa responsable y comprometida con el medio ambiente, minimizando nuestro impacto y contribuyendo al desarrollo de las comunidades donde operamos. En MIPIEL, creemos que todos merecen sentirse bien consigo mismos, y trabajamos cada día para hacerlo posible.
                </p>
              </div>
            </motion.div>
            
            {/* IMAGEN MISIÓN: Bodegón de productos y naturaleza */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden bg-zinc-100 shadow-2xl shadow-pink-500/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop" 
                alt="Nuestra Misión - Productos MIPIEL" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </section>

        {/* SECCIÓN VISIÓN */}
        <section className="py-20 px-6 relative bg-zinc-50/80">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
             
            {/* IMAGEN VISIÓN: Textura de serum */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden bg-white shadow-2xl shadow-pink-500/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1974&auto=format&fit=crop" 
                alt="Nuestra Visión - Tecnología y Pureza" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full border border-zinc-100 shadow-lg text-[#E5007E]">
                  <Eye size={28} strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-serif text-zinc-900 font-bold">Visión</h2>
              </div>
              
              <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-zinc-600 text-justify">
                <p>
                  Nuestra visión en <strong className="text-[#E5007E]">MIPIEL</strong> es ser la marca líder en soluciones para el cuidado personal, reconocida por su compromiso con la salud y el bienestar de nuestros clientes.
                </p>
                <p>
                  Buscamos innovar constantemente, desarrollando productos de alta calidad que combinen ingredientes naturales y tecnología avanzada para ofrecer resultados eficaces y seguros. Aspiramos a construir una comunidad de personas que confían en Mipiel para sentirse bien consigo mismas.
                </p>
                <div className="border-l-4 border-[#E5007E] pl-6 py-2 bg-white rounded-r-lg shadow-sm">
                  <p className="text-zinc-500 italic text-sm">
                    "Creemos que el cuidado personal es un derecho, no un lujo, y trabajamos cada día para hacerlo accesible a todos."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* VALORES / PILARES */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#E5007E] uppercase block mb-4">
              Nuestros Pilares
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900">ADN de la Marca</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pilar 1: Natural */}
            <div className="group p-10 rounded-2xl bg-white border border-zinc-100 hover:border-[#E5007E]/30 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto text-[#E5007E] mb-6 group-hover:scale-110 transition-transform">
                <Leaf size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold uppercase tracking-widest text-sm text-zinc-900 mb-3">Natural</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Ingredientes botánicos puros de alta eficacia y origen trazable, respetando la naturaleza de tu piel.
              </p>
            </div>

            {/* Pilar 2: Responsable */}
            <div className="group p-10 rounded-2xl bg-white border border-zinc-100 hover:border-[#E5007E]/30 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto text-[#E5007E] mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold uppercase tracking-widest text-sm text-zinc-900 mb-3">Responsable</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Comprometidos con el desarrollo sostenible, minimizando nuestro impacto ambiental y social.
              </p>
            </div>

            {/* Pilar 3: Calidad */}
            <div className="group p-10 rounded-2xl bg-white border border-zinc-100 hover:border-[#E5007E]/30 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto text-[#E5007E] mb-6 group-hover:scale-110 transition-transform">
                <Award size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold uppercase tracking-widest text-sm text-zinc-900 mb-3">Calidad</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Formulaciones certificadas y respaldadas por la ciencia para ofrecerte resultados seguros y visibles.
              </p>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}
