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
            width: isScrolled ? "min(95%, 800px)" : "100%", // Un poco más ancho para elegancia
            // CAMBIO CLAVE: Degradado Fucsia Metalizado en lugar de blanco plano
            background: isScrolled 
              ? "linear-gradient(135deg, #E5007E 0%, #FF2E9B 50%, #E5007E 100%)" 
              : "rgba(255,255,255,0)",
            borderRadius: isScrolled ? "9999px" : "0px",
            // Sombra con brillo fucsia + brillo interno blanco (Efecto Metal)
            boxShadow: isScrolled 
              ? "0 10px 25px -5px rgba(229,0,126,0.4), inset 0 2px 4px rgba(255,255,255,0.3)" 
              : "none",
            backdropFilter: isScrolled ? "blur(8px)" : "blur(0px)",
            y: isScrolled ? 10 : 0
          }}
          transition={{ duration: 0.4, type: "spring", stiffness: 120, damping: 20 }}
          className="pointer-events-auto flex items-center justify-between px-8 py-3 transition-all border border-transparent"
        >
          
          {/* LOGO: 
              - Top: Negro (brightness-0)
              - Scroll: Blanco original (sin filtro) para resaltar sobre fucsia 
          */}
          <Link href="/" className="flex items-center gap-2 relative z-50 shrink-0">
            <img 
               src="/img/logo-mipiel-white.png" 
               alt="MIPIEL"
               className={`h-7 md:h-8 w-auto object-contain transition-all duration-300 ${
                 isScrolled ? "opacity-100" : "brightness-0 opacity-90"
               }`}
            />
          </Link>

          {/* NAV ESCRITORIO */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || (item.href === "/#productos" && pathname === "/");
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  // CAMBIO: Texto blanco al hacer scroll, gris/negro al estar arriba
                  className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                    isScrolled 
                      ? "text-white hover:text-white/80" 
                      : `hover:text-black ${isActive ? "text-black font-extrabold" : "text-zinc-500"}`
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* ICONOS */}
          <div className={`flex items-center gap-5 transition-colors duration-300 relative z-50 shrink-0 ${
             isScrolled ? "text-white" : "text-zinc-800"
          }`}>
            <Search size={18} className="cursor-pointer hover:scale-110 transition-transform" />
            
            <div className="relative cursor-pointer group p-1" onClick={openCart}>
              <ShoppingBag size={18} className="hover:scale-110 transition-transform" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    // CAMBIO: Badge invertido. Si el fondo es fucsia, el badge es blanco.
                    className={`absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold shadow-md ${
                      isScrolled 
                        ? "bg-white text-[#E5007E]" // Badge blanco sobre fondo fucsia
                        : "bg-[#E5007E] text-white" // Badge fucsia sobre fondo blanco
                    }`}
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <button className="md:hidden hover:scale-110 transition-transform" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={22} />
            </button>
          </div>

        </motion.header>
      </div>

      {/* MENÚ MÓVIL: Mantenemos fondo blanco limpio */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center text-foreground"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 p-3 text-zinc-800 hover:text-[#E5007E] transition-all">
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-6 text-center relative z-10">
              {menuItems.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + (i * 0.1) }}>
                  <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-4xl font-serif text-zinc-800 hover:text-[#E5007E] transition-all py-2">
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