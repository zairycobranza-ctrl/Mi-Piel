"use client";
import { useState } from "react";
import { ChevronLeft, Plus } from "lucide-react";
import Link from "next/link";

import { useCart } from "@/app/context/CartContext"; 
import { PRODUCTS } from "@/data/products";

export default function ProductoDetalle({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  if (!product) return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center font-serif text-2xl">
      Producto no encontrado
    </div>
  );

  return (
    <main className="bg-background min-h-screen pt-32 pb-20 text-foreground">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <Link href="/#productos" className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors text-[10px] uppercase tracking-widest font-bold mb-12">
          <ChevronLeft size={14} /> Volver al Catálogo
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="aspect-[4/5] bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-center text-left">
            <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
              COSMÉTICA NATURAL
            </span>
            
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-3xl font-light mb-8 text-zinc-800">${product.price}</p>
            
            <p className="text-zinc-600 font-light text-lg mb-10 leading-relaxed">
              {product.description}
            </p>

            <div className="flex gap-4 mb-10">
              <div className="flex items-center border border-zinc-300 rounded-lg bg-white">
                <button 
                  onClick={() => setQty(Math.max(1, qty - 1))} 
                  className="px-4 py-3 hover:text-primary transition-colors"
                >-</button>
                <span className="px-4 py-3 w-12 text-center text-sm font-bold">{qty}</span>
                <button 
                  onClick={() => setQty(qty + 1)} 
                  className="px-4 py-3 hover:text-primary transition-colors"
                >+</button>
              </div>

              {/* CORRECCIÓN FINAL: Convertimos ID y PRECIO a string */}
              <button 
                onClick={() => addToCart({ 
                  ...product, 
                  id: product.id.toString(),       // Número -> Texto
                  price: product.price.toString(), // Número -> Texto (NUEVO ARREGLO)
                  qty 
                })} 
                className="flex-1 bg-primary text-white py-4 px-8 text-xs uppercase tracking-widest font-bold hover:bg-primary/90 rounded-lg transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
              >
                <Plus size={20} /> Agregar a la Bolsa
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}