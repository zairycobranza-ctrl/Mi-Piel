"use client";

import { Target, Eye, Leaf, ShieldCheck, Award } from "lucide-react";

// CORRECCIÓN DE RUTAS: Usamos "../" para subir un nivel y encontrar la carpeta components
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function QuienesSomosPage() {
  return (
    // Fondo negro Dark Luxury
    <div className="bg-black min-h-screen text-white selection:bg-[#EF5DA8] selection:text-white">
      
      {/* 1. HEADER (Barra de Navegación) */}
      <Header />

      <main>
        {/* HERO SECTION - Título Principal */}
        <section className="pt-40 pb-20 px-6 relative overflow-hidden">
          {/* Luz ambiental de fondo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#EF5DA8]/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-8 backdrop-blur-md">
              Nuestra Identidad
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight">
              El arte de tu piel <br />
              <span className="italic text-zinc-500 font-light">en nuestras manos.</span>
            </h1>
          </div>
        </section>

        {/* MISIÓN */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-900 rounded-full border border-white/10 text-[#EF5DA8]">
                   <Target size={24} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-serif text-white">Misión</h2>
              </div>
              
              <div className="space-y-6 text-lg font-light leading-relaxed">
                <p className="text-zinc-300">
                  Nuestra misión en <span className="font-bold text-white border-b border-[#EF5DA8]">MIPIEL</span> es mejorar la calidad de vida de nuestros clientes, ofreciendo soluciones innovadoras y accesibles para el cuidado personal. 
                </p>
                <p className="text-zinc-500">
                  Nos comprometemos a desarrollar productos de alta calidad, elaborados con ingredientes naturales y respaldados por la ciencia que satisfagan las necesidades específicas de cada persona.
                </p>
              </div>
            </div>
            
            {/* Imagen Misión (Placeholder Oscuro) */}
            <div className="relative group aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-bold uppercase tracking-widest">
                 [Imagen Misión]
              </div>
              {/* Descomenta la linea de abajo si tienes una imagen */}
              {/* <img src="/tu-imagen.jpg" className="object-cover w-full h-full opacity-60 hover:opacity-100 transition-opacity" /> */}
            </div>
          </div>
        </section>

        {/* VISIÓN */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-zinc-900/20 skew-y-3 transform origin-top-left -z-10" />

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
             {/* Imagen Visión (Placeholder Oscuro) */}
            <div className="order-2 md:order-1 relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-bold uppercase tracking-widest">
                 [Imagen Visión]
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-900 rounded-full border border-white/10 text-[#EF5DA8]">
                  <Eye size={24} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-serif text-white">Visión</h2>
              </div>
              
              <div className="space-y-6 text-lg font-light leading-relaxed">
                <p className="text-zinc-300">
                  Ser la marca líder en soluciones para el cuidado personal, reconocida por su compromiso con la salud y el bienestar. 
                </p>
                <div className="border-l-2 border-[#EF5DA8] pl-6 py-2">
                  <p className="text-zinc-400 italic">
                    "Buscamos innovar constantemente, combinando tecnología avanzada para ofrecer resultados eficaces y seguros."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALORES / PILARES */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase block mb-4">
              Nuestros Pilares
            </span>
            <h2 className="text-4xl font-serif text-white">ADN de la Marca</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pilar 1 */}
            <div className="group p-8 rounded-2xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 hover:border-[#EF5DA8]/30 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto text-[#EF5DA8] mb-6 border border-white/10 group-hover:border-[#EF5DA8]">
                <Leaf size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold uppercase tracking-widest text-sm text-white mb-3">Natural</h3>
              <p className="text-zinc-400 text-sm font-light">Ingredientes botánicos puros de alta eficacia y origen trazable.</p>
            </div>

            {/* Pilar 2 */}
            <div className="group p-8 rounded-2xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 hover:border-[#EF5DA8]/30 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto text-[#EF5DA8] mb-6 border border-white/10 group-hover:border-[#EF5DA8]">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold uppercase tracking-widest text-sm text-white mb-3">Responsable</h3>
              <p className="text-zinc-400 text-sm font-light">Comprometidos con el desarrollo sostenible de nuestras comunidades.</p>
            </div>

            {/* Pilar 3 */}
            <div className="group p-8 rounded-2xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 hover:border-[#EF5DA8]/30 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto text-[#EF5DA8] mb-6 border border-white/10 group-hover:border-[#EF5DA8]">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold uppercase tracking-widest text-sm text-white mb-3">Calidad</h3>
              <p className="text-zinc-400 text-sm font-light">Formulaciones certificadas y respaldadas por la ciencia cosmética.</p>
            </div>
          </div>
        </section>
      </main>

      {/* 2. FOOTER */}
      <Footer />
      
    </div>
  );
}

