"use client";
import { Instagram, Facebook, Twitter, Linkedin, Youtube, Send, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    // CAMBIO: Fondo muy claro (zinc-50) y texto oscuro. Borde superior gris suave.
    <footer className="bg-zinc-50 text-foreground py-16 border-t border-zinc-200 relative overflow-hidden">
      
      {/* Luz ambiental: Ahora usa tu color Secondary (Púrpura) muy sutil */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm relative z-10">
        
        {/* Columna 1: Marca e Identidad */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="inline-block mb-8 group">
             {/* LOGO: Usamos 'invert' para volver NEGRO el logo que es blanco */}
             <img 
               src="/img/logo-mipiel-white.png" 
               alt="MIPIEL"
               className="h-10 w-auto object-contain invert opacity-90 group-hover:opacity-100 transition-all duration-300"
            />
          </Link>
          
          {/* Texto descriptivo en gris medio para lectura cómoda */}
          <p className="text-zinc-600 max-w-sm font-light leading-relaxed mb-8">
            El arte de tu piel en nuestras manos. Combinamos ingredientes naturales 
            con ciencia avanzada para ofrecerte soluciones de cuidado personal.
          </p>
          
          {/* Redes Sociales */}
          <div>
            {/* Título en Primary (Magenta) */}
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Síguenos en Redes
            </h5>
            <div className="flex flex-wrap gap-4 items-center">
              {[
                { icon: <MessageCircle size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Send size={18} />, href: "#" },
                { icon: <Youtube size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  // BOTONES REDES: Fondo blanco, borde gris. Hover se llena de Magenta.
                  className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-primary hover:border-primary hover:shadow-[0_0_15px_rgba(194,30,120,0.4)] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-xs text-foreground">
            Explorar
          </h4>
          <ul className="space-y-4 text-zinc-600 font-light text-sm">
            <li><Link href="/#productos" className="hover:text-primary transition-colors">Productos</Link></li>
            <li><Link href="/nosotros" className="hover:text-primary transition-colors">Quiénes Somos</Link></li>
            <li><Link href="/producto/crema-hidratante" className="hover:text-primary transition-colors">Best Seller</Link></li>
            <li><Link href="/nosotros" className="hover:text-primary transition-colors">Filosofía</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-xs text-foreground">
            Contacto
          </h4>
          <ul className="space-y-4 text-zinc-600 font-light text-sm">
            <li className="flex items-center gap-3">
              <Link href="mailto:info@mipiel.com" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary">info@mipiel.com</Link>
            </li>
            <li className="flex items-center gap-3">
              <span>+58 (XXX) XXX-XXXX</span>
            </li>
            
            <li className="pt-4 text-[10px] text-zinc-500 uppercase tracking-widest font-medium opacity-80">
              RIF: J-41186620-2
            </li>
          </ul>
        </div>
      </div>
      
      {/* Barra Inferior */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-[10px] font-medium tracking-wide uppercase">
        <p className="opacity-90 text-center md:text-left leading-loose">
          Mi Piel Cosméticos Copyright ©2026. All Rights Reserved <span className="mx-2 hidden md:inline">•</span> <br className="md:hidden" /> Dev By{" "}
          <a 
            href="https://www.motostorellc.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-foreground hover:text-primary transition-colors"
          >
            Moto Store LLC
          </a>
        </p>
        <div className="flex gap-8 mt-6 md:mt-0 opacity-80">
          <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
          <a href="#" className="hover:text-primary transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
}








