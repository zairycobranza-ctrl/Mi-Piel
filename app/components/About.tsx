"use client";
import { motion } from "framer-motion";
import { Leaf, FlaskConical, Recycle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  const features = [
    { icon: <Leaf size={20} strokeWidth={1.5} />, text: "Cruelty-free", desc: "Respeto total por la vida." },
    { icon: <FlaskConical size={20} strokeWidth={1.5} />, text: "Tests dermatológicos", desc: "Seguridad clínica probada." },
    { icon: <Recycle size={20} strokeWidth={1.5} />, text: "Compromiso sostenible", desc: "Envases 100% reciclables." },
  ];

  return (
    <section className="py-32 bg-black overflow-hidden relative selection:bg-[#EF5DA8] selection:text-white">
      
      {/* LUZ AMBIENTAL DE FONDO */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#EF5DA8]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* BLOQUE DE TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Etiqueta */}
            <span className="inline-block py-1 px-3 rounded-full border border-[#EF5DA8]/50 bg-[#EF5DA8]/10 text-[#EF5DA8] text-[10px] font-bold tracking-[0.4em] uppercase mb-8 backdrop-blur-md">
              Nuestra Filosofía
            </span>

            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Belleza consciente, <br />
              {/* CAMBIO: Aclarado a zinc-400 para mejor lectura */}
              <span className="italic text-zinc-400">resultados reales.</span>
            </h2>
            
            {/* CAMBIO: Texto de párrafos más claro (zinc-300) */}
            <div className="space-y-6 text-zinc-300 text-lg font-light leading-relaxed mb-10">
              <p>
                En <strong className="font-bold text-white border-b border-[#EF5DA8]">MIPIEL</strong> no solo creamos cosméticos; 
                formulamos experiencias de cuidado basadas en la pureza y la transparencia radical.
              </p>
              <p>
                Fusionamos biotecnología avanzada con activos botánicos de alta pureza, colaborando únicamente 
                con proveedores que protegen el bienestar de tu piel y del planeta.
              </p>
            </div>

            {/* Enlace */}
            <Link href="/nosotros" className="inline-flex items-center gap-2 text-white uppercase tracking-widest text-xs font-bold border-b border-white/30 pb-1 hover:border-[#EF5DA8] hover:text-[#EF5DA8] transition-all">
              Leer Manifiesto <ArrowUpRight size={14} />
            </Link>
          </motion.div>

          {/* BLOQUE DE VALORES (TARJETA DE CRISTAL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-10 md:p-12 rounded-3xl relative overflow-hidden group"
          >
            {/* Brillo hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <ul className="space-y-8 relative z-10">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-6 group/item">
                  <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-[#EF5DA8] group-hover/item:border-[#EF5DA8] group-hover/item:shadow-[0_0_15px_rgba(239,93,168,0.3)] transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-white mb-1 group-hover/item:text-[#EF5DA8] transition-colors">
                      {item.text}
                    </h4>
                    {/* CAMBIO: Descripción aclarada a zinc-300 */}
                    <p className="text-zinc-300 text-sm font-light">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}






