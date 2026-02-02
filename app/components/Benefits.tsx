"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "Pago seguro",
      description: "Protegemos tus datos con cifrado de grado militar y proveedores confiables.",
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    },
    {
      title: "Envíos rápidos",
      description: "Entrega 24–72h con seguimiento en tiempo real de tu pedido.",
      icon: <Truck size={28} strokeWidth={1.5} />,
    },
    {
      title: "Garantía Total",
      description: "30 días para cambios o devoluciones si tu piel no está feliz.",
      icon: <RotateCcw size={28} strokeWidth={1.5} />,
    },
  ];

  return (
    // CAMBIO: Fondo gris muy claro (zinc-50) y borde gris suave (zinc-200)
    <section className="py-24 border-t border-zinc-200 bg-zinc-50 relative overflow-hidden">
      
      {/* Decoración de fondo: Línea degradada en color Primary (Magenta) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center md:items-start md:text-left group cursor-default"
            >
              {/* ICONO: 
                  - Fondo blanco (bg-white)
                  - Borde gris suave (border-zinc-200)
                  - Icono gris (text-zinc-400) -> Hover Magenta (text-primary)
              */}
              <div className="mb-6 p-5 rounded-2xl bg-white border border-zinc-200 text-zinc-400 group-hover:text-primary group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(194,30,120,0.15)] transition-all duration-500 ease-out shadow-sm">
                {benefit.icon}
              </div>

              {/* TÍTULO: Color oscuro (text-foreground) -> Hover Magenta */}
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h4>
              
              {/* DESCRIPCIÓN: Gris intermedio para lectura (text-zinc-600) */}
              <p className="text-sm text-zinc-600 leading-relaxed max-w-[280px] font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}