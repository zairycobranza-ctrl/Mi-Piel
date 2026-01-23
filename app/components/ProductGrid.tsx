"use client";
import { Plus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext"; // <--- RUTA CORREGIDA

// DATOS INTEGRADOS
const PRODUCTS = [
  { id: "p1", slug: "crema-hidratante", name: "Crema Hidratante Facial", category: "Línea Facial", price: "$25.00", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop" },
  { id: "p2", slug: "crema-limpiadora", name: "Crema Limpiadora", category: "Línea Facial", price: "$22.00", image: "https://images.unsplash.com/photo-1556228720-1957be6a9e2d?q=80&w=1000&auto=format&fit=crop" },
  { id: "p3", slug: "protector-solar", name: "Protector Solar SPF 50+", category: "Línea Facial", price: "$28.00", image: "https://images.unsplash.com/photo-1556228852-6d35a585d566?q=80&w=1000&auto=format&fit=crop" },
  { id: "p4", slug: "jabon-glicerina", name: "Jabón de Glicerina", category: "Línea Facial", price: "$12.00", image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=1000&auto=format&fit=crop" },
  { id: "p5", slug: "talco-antiseptico", name: "Talco Antiséptico", category: "Línea Corporal", price: "$15.00", image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=1000&auto=format&fit=crop" },
  { id: "p6", slug: "pomada-arnica", name: "Pomada de Árnica", category: "Línea Corporal", price: "$18.00", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=1000&auto=format&fit=crop" },
  { id: "p7", slug: "castana-indias", name: "Castaña de Indias", category: "Línea Corporal", price: "$20.00", image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1000&auto=format&fit=crop" },
  { id: "p8", slug: "shampoo-coco", name: "Shampoo Esencia de Coco", category: "Línea Capilar", price: "$18.00", image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1000&auto=format&fit=crop" },
  { id: "p9", slug: "shampoo-romero", name: "Shampoo Extracto Romero", category: "Línea Capilar", price: "$18.00", image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1000&auto=format&fit=crop" },
  { id: "p10", slug: "shampoo-argan", name: "Shampoo Extracto Argán", category: "Línea Capilar", price: "$20.00", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop" }
];

export default function ProductGrid() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {PRODUCTS.map((product, index) => (
        <motion.div 
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 rounded-2xl mb-5 border border-white/10 group-hover:border-white/30 transition-all duration-500">
            <Link href={`/producto/${product.slug}`}>
              <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
            </Link>
            <button 
              onClick={() => addToCart({ ...product, qty: 1 })}
              className="absolute bottom-4 right-4 bg-white text-black p-4 rounded-full shadow-xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            >
              <Plus size={20} />
            </button>
          </div>
          <Link href={`/producto/${product.slug}`} className="space-y-2 px-2 text-left block">
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{product.category}</p>
            <h3 className="text-lg font-serif text-white">{product.name}</h3>
            <p className="text-md font-medium text-white">{product.price}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}