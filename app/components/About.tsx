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
    // CAMBIO: Fondo Blanco puro y selección en Púrpura
    <section className="py-32 bg-white overflow-hidden relative selection:bg-secondary selection:text-white">
      
      {/* LUZ AMBIENTAL: Ahora es un degradado Púrpura (secondary) muy sutil */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* BLOQUE DE TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Etiqueta: Magenta (Primary) sobre fondo muy claro */}
            <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-8 backdrop-blur-md">
              Nuestra Filosofía
            </span>

            {/* Título: Oscuro con subtítulo en gris medio */}
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
              Belleza consciente, <br />
              <span className="italic text-zinc-400">resultados reales.</span>
            </h2>
            
            {/* Texto: Gris oscuro para lectura cómoda */}
            <div className="space-y-6 text-zinc-600 text-lg font-light leading-relaxed mb-10">
              <p>
                En <strong className="font-bold text-foreground border-b border-primary">MIPIEL</strong> no solo creamos cosméticos; 
                formulamos experiencias de cuidado basadas en la pureza y la transparencia radical.
              </p>
              <p>
                Fusionamos biotecnología avanzada con activos botánicos de alta pureza, colaborando únicamente 
                con proveedores que protegen el bienestar de tu piel y del planeta.
              </p>
            </div>

            {/* Enlace: Gris oscuro con hover Magenta */}
            <Link href="/nosotros" className="inline-flex items-center gap-2 text-foreground uppercase tracking-widest text-xs font-bold border-b border-zinc-300 pb-1 hover:border-primary hover:text-primary transition-all">
              Leer Manifiesto <ArrowUpRight size={14} />
            </Link>
          </motion.div>

          {/* BLOQUE DE VALORES (TARJETA CLARA) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            // CAMBIO: Fondo gris muy suave (zinc-50) y borde gris
            className="bg-zinc-50 border border-zinc-200 p-10 md:p-12 rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-500"
          >
            {/* Brillo hover sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <ul className="space-y-8 relative z-10">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-6 group/item">
                  {/* ICONO: Fondo blanco, borde gris. Hover se ilumina Magenta */}
                  <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-primary group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(194,30,120,0.2)] transition-all duration-300 shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    {/* Título del item: Oscuro -> Hover Magenta */}
                    <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-foreground mb-1 group-hover/item:text-primary transition-colors">
                      {item.text}
                    </h4>
                    {/* Descripción: Gris medio */}
                    <p className="text-zinc-500 text-sm font-light">
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






