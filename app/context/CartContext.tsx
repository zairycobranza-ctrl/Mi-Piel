"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Definimos cómo se ve un producto en el carrito
type CartItem = {
  id: string;
  name: string;
  price: string; // Ej: "$25.00"
  image: string;
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  cartCount: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // -- LOGICA: Añadir al carrito --
  const addToCart = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id);
      if (existing) {
        // Si ya existe, sumamos la cantidad
        return prev.map((i) => 
          i.id === newItem.id ? { ...i, qty: i.qty + newItem.qty } : i
        );
      }
      // Si no existe, lo agregamos
      return [...prev, newItem];
    });
    setIsOpen(true); // Abrimos el carrito automáticamente al añadir
  };

  // -- LOGICA: Eliminar --
  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  // -- LOGICA: Totales --
  // Convertimos "$25.00" a numero 25.00 para sumar
  const cartCount = items.reduce((acc, item) => acc + item.qty, 0);
  const cartTotal = items.reduce((acc, item) => {
    const priceNumber = parseFloat(item.price.replace("$", ""));
    return acc + (priceNumber * item.qty);
  }, 0);

  return (
    <CartContext.Provider value={{ 
      items, 
      isOpen, 
      openCart: () => setIsOpen(true), 
      closeCart: () => setIsOpen(false), 
      addToCart, 
      removeFromCart,
      cartCount,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar el carrito en cualquier parte
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
};