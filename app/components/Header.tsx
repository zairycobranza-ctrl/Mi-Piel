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
            width: isScrolled ? "min(95%, 700px)" : "100%",
            // CAMBIO: Fondo Blanco translúcido al hacer scroll
            backgroundColor: isScrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0)",
            borderRadius: isScrolled ? "9999px" : "0px",
            // Sombra suave en lugar de borde blanco
            boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
            backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
            y: isScrolled ? 10 : 0
          }}
          transition={{ duration: 0.4, type: "spring", stiffness: 120, damping: 20 }}
          className="pointer-events-auto flex items-center justify-between px-6 py-3 transition-all"
          style={{ maxWidth: isScrolled ? "800px" : "100%" }}
        >
          
          {/* LOGO: Invertido a negro (brightness-0) para verse en fondo claro */}
          <Link href="/" className="flex items-center gap-2 relative z-50 shrink-0">
            <img 
               src="/img/logo-mipiel-white.png" 
               alt="MIPIEL"
               className="h-7 md:h-8 w-auto object-contain brightness-0 opacity-90"
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
                  // CAMBIO: Textos en gris oscuro (zinc-600) y negro al hacer hover
                  className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-black ${
                    isActive ? "text-black font-extrabold" : "text-zinc-500"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* ICONOS: Color oscuro (text-zinc-800) */}
          <div className="flex items-center gap-4 text-zinc-800 relative z-50 shrink-0">
            <Search size={18} className="cursor-pointer hover:text-primary transition-colors" />
            
            <div className="relative cursor-pointer group p-1" onClick={openCart}>
              <ShoppingBag size={18} className="text-zinc-800 group-hover:text-primary transition-colors" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    // Badge: Fondo Primary (Magenta) y texto blanco
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white rounded-full text-[9px] flex items-center justify-center font-bold shadow-md"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <button className="md:hidden hover:text-primary text-zinc-800 transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={22} />
            </button>
          </div>

        </motion.header>
      </div>

      {/* MENÚ MÓVIL: Fondo Blanco */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center text-foreground"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 p-3 hover:text-primary transition-all">
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-6 text-center relative z-10">
              {menuItems.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + (i * 0.1) }}>
                  <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-4xl font-serif text-zinc-800 hover:text-primary transition-all py-2">
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