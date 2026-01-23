"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnnouncementBar from "./AnnouncementBar";
import { useCart } from "../context/CartContext"; // <--- CONEXIÓN CON EL CARRITO

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Extraemos funciones del carrito
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
            backgroundColor: isScrolled ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0)",
            borderRadius: isScrolled ? "9999px" : "0px",
            borderColor: isScrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0)",
            backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
            y: isScrolled ? 10 : 0
          }}
          transition={{ duration: 0.4, type: "spring", stiffness: 120, damping: 20 }}
          className={`pointer-events-auto flex items-center justify-between px-6 py-3 border border-transparent transition-shadow ${
            isScrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : ""
          }`}
          style={{ maxWidth: isScrolled ? "800px" : "100%" }}
        >
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 relative z-50 shrink-0">
            <img 
               src="/img/logo-mipiel-white.png" 
               alt="MIPIEL"
               className="h-7 md:h-8 w-auto object-contain brightness-0 invert"
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
                  className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-white ${
                    isActive ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* ICONOS */}
          <div className="flex items-center gap-4 text-white relative z-50 shrink-0">
            <Search size={18} className="cursor-pointer hover:text-white text-zinc-300 transition-colors" />
            
            {/* BOLSA DE COMPRAS CON CONTADOR REAL */}
            <div 
              className="relative cursor-pointer group p-1" 
              onClick={openCart} // <--- ABRE EL CARRITO AL HACER CLIC
            >
              <ShoppingBag size={18} className="text-zinc-300 group-hover:text-white transition-colors" />
              
              {/* Solo mostramos el punto si hay productos */}
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-white text-black rounded-full text-[9px] flex items-center justify-center font-bold shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <button 
              className="md:hidden hover:text-white text-zinc-300 transition-colors" 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>

        </motion.header>
      </div>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/40 hover:text-white transition-all"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-6 text-center relative z-10">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 to-zinc-200 hover:to-white transition-all duration-500 py-2"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Opción de Carrito en el Menú Móvil */}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCart();
                }}
                className="mt-4 text-white text-xs uppercase tracking-widest font-bold border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 mx-auto"
              >
                <ShoppingBag size={14} /> Bolsa ({cartCount})
              </motion.button>
            </nav>

            <div className="absolute bottom-12 flex gap-6 text-zinc-600">
               <span className="text-xs uppercase tracking-widest hover:text-zinc-400 transition-colors">Instagram</span>
               <span className="text-xs uppercase tracking-widest hover:text-zinc-400 transition-colors">Tiktok</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}