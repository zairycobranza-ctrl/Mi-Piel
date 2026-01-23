"use client";
import { useState } from "react";
import { ChevronLeft, Plus, Star } from "lucide-react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
// Ruta relativa subiendo dos niveles
import { PRODUCTS } from "../../data/products";

export default function ProductoDetalle({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  if (!product) return <div className="min-h-screen bg-black text-white flex items-center justify-center font-serif text-2xl">Producto no encontrado</div>;

  return (
    <main className="bg-black min-h-screen pt-32 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Link href="/#productos" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold mb-12">
          <ChevronLeft size={14} /> Volver al Catálogo
        </Link>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden border border-white/10">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-90" />
          </div>
          <div className="flex flex-col justify-center text-left">
            <span className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-4">{product.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">{product.name}</h1>
            <p className="text-3xl font-light mb-8">{product.price}</p>
            <p className="text-zinc-400 font-light text-lg mb-10 leading-relaxed">{product.description}</p>
            <div className="flex gap-4 mb-10">
              <div className="flex items-center border border-zinc-800 rounded-lg bg-zinc-900/50">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 hover:text-white">-</button>
                <span className="px-4 py-3 w-12 text-center text-sm font-bold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-3 hover:text-white">+</button>
              </div>
              <button onClick={() => addToCart({ ...product, qty })} className="flex-1 bg-white text-black py-4 px-8 text-xs uppercase tracking-widest font-bold hover:bg-zinc-200 rounded-lg transition-all flex items-center justify-center gap-3">
                <Plus size={20} /> Agregar a la Bolsa
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}