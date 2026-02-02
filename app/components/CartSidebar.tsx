"use client";
import { X, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function CartSidebar() {
  const { isOpen, closeCart, items, removeFromCart, cartTotal } = useCart();

  // Función para generar el mensaje de WhatsApp con TODO el pedido
  const handleCheckout = () => {
    const phoneNumber = "584120000000"; // TU NÚMERO AQUÍ
    
    let message = `Hola *MIPIEL*, quiero realizar el siguiente pedido:\n\n`;
    
    items.forEach((item) => {
      message += `▫️ ${item.qty}x ${item.name} (${item.price})\n`;
    });
    
    message += `\n💰 *TOTAL A PAGAR: $${cartTotal.toFixed(2)}*`;
    message += `\n\n¿Me confirman disponibilidad y método de pago?`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. OVERLAY OSCURO (Mantenemos el fondo oscuro para contraste) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
          />

          {/* 2. PANEL LATERAL (Sidebar) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            // CAMBIO: bg-white (Blanco) y border-zinc-200 (Gris claro)
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white border-l border-zinc-200 shadow-2xl z-[1000] flex flex-col"
          >
            
            {/* CABECERA */}
            <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
              {/* Texto Foreground (Oscuro) */}
              <h2 className="text-xl font-serif text-foreground flex items-center gap-3">
                <ShoppingBag size={20} />
                Tu Bolsa ({items.length})
              </h2>
              <button onClick={closeCart} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                <X size={24} className="text-zinc-400 hover:text-primary" />
              </button>
            </div>

            {/* LISTA DE PRODUCTOS */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50 text-zinc-500">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="text-sm uppercase tracking-widest">Tu bolsa está vacía</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    {/* Imagen Miniatura: Fondo gris muy claro */}
                    <div className="w-20 h-24 bg-zinc-50 rounded-lg overflow-hidden border border-zinc-200 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        {/* Nombre del producto en oscuro */}
                        <h3 className="text-sm font-bold text-foreground leading-tight mb-1">{item.name}</h3>
                        <p className="text-xs text-zinc-500">Cantidad: {item.qty}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        {/* Precio: Color Primary (Magenta) en lugar de Dorado */}
                        <span className="text-sm font-bold text-primary">{item.price}</span>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-zinc-400 hover:text-red-500 transition-colors text-xs flex items-center gap-1"
                        >
                          <Trash2 size={14} /> Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER (Checkout) */}
            {items.length > 0 && (
              // CAMBIO: Fondo gris muy suave (zinc-50) para diferenciar el footer
              <div className="p-6 border-t border-zinc-100 bg-zinc-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-zinc-500 uppercase tracking-widest">Subtotal</span>
                  <span className="text-2xl font-serif text-foreground font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                
                {/* BOTÓN: Fondo Magenta (Primary) con hover oscurecido */}
                <button 
                  onClick={handleCheckout}
                  className="w-full py-4 bg-primary text-white font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 group rounded-lg"
                >
                  Finalizar Pedido
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-center text-[10px] text-zinc-500 mt-4 uppercase tracking-wider">
                  Pago seguro vía WhatsApp
                </p>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}