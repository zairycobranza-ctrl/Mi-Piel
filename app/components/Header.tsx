"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnnouncementBar from "./AnnouncementBar";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCart, cartCount } = useCart();
  const pathname = usePathname(); 

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/#productos" }, 
    { name: "Quiénes Somos", href: "/nosotros" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnnouncementBar />
      
      <div className="fixed top-2 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        
        <motion.header 
          layout
          initial={{ width: "100%", borderRadius: "0px", y: 0 }}
          animate={{ 
            width: isScrolled ? "min(95%, 900px)" : "100%",
            // ELEGANCIA: Fondo blanco translúcido (efecto vidrio)
            backgroundColor: isScrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0)",
            borderRadius: isScrolled ? "9999px" : "0px",
            // DETALLE DE LUJO: Sombra suave rosada + Borde inferior sutil
            boxShadow: isScrolled 
              ? "0 8px 32px -4px rgba(229, 0, 126, 0.15), 0 0 0 1px rgba(255,255,255,0.4)" 
              : "none",
            backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
            y: isScrolled ? 10 : 0
          }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
          className="pointer-events-auto flex items-center justify-between px-8 py-4 transition-all relative overflow-hidden"
        >
          
          {/* LÍNEA METALIZADA INFERIOR (Solo aparece al hacer scroll) */}
          <motion.div 
            animate={{ opacity: isScrolled ? 1 : 0 }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5007E] to-transparent opacity-0"
          />

          {/* LOGO (Siempre Negro para contraste perfecto en fondo claro) */}
          <Link href="/" className="flex items-center gap-2 relative z-50 shrink-0">
            <img 
               src="/img/logo-mipiel-white.png" 
               alt="MIPIEL"
               className="h-7 md:h-8 w-auto object-contain brightness-0 opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* NAV ESCRITORIO */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || (item.href === "/#productos" && pathname === "/");
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  // TEXTOS: Gris oscuro elegante (Zinc-600) -> Hover Fucsia (#E5007E)
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                    isActive ? "text-[#E5007E]" : "text-zinc-600 hover:text-[#E5007E]"
                  }`}
                >
                  {item.name}
                  {/* Pequeño punto indicador al hacer hover */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E5007E] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              );
            })}
          </nav>

          {/* ICONOS */}
          <div className="flex items-center gap-6 text-zinc-800 relative z-50 shrink-0">
            <Search size={18} className="cursor-pointer hover:text-[#E5007E] transition-colors" />
            
            <div className="relative cursor-pointer group" onClick={openCart}>
              <ShoppingBag size={18} className="group-hover:text-[#E5007E] transition-colors" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    // Badge: Fucsia vibrante con texto blanco
                    className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#E5007E] text-white rounded-full text-[9px] flex items-center justify-center font-bold shadow-lg shadow-pink-500/30"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <button className="md:hidden hover:text-[#E5007E] transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={22} />
            </button>
          </div>

        </motion.header>
      </div>

      {/* MENÚ MÓVIL (Limpio y blanco) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center text-foreground"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 p-3 text-zinc-400 hover:text-[#E5007E] transition-all">
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-8 text-center relative z-10">
              {menuItems.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + (i * 0.1) }}>
                  <Link 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="block text-3xl font-serif text-zinc-800 hover:text-[#E5007E] transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}