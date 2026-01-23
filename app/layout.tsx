import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// IMPORTAMOS LOS COMPONENTES GLOBALES
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext"; // Lógica del carrito
import CartSidebar from "./components/CartSidebar";    // Panel visual del carrito

// Configuramos las fuentes
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

// 1. BARRA DE NAVEGADOR NEGRA (Móviles)
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Evita zoom indeseado en inputs en iOS
};

// 2. TÍTULO Y METADATOS
export const metadata: Metadata = {
  title: {
    template: "%s | MIPIEL",
    default: "MIPIEL | Cosmético",
  },
  description: "Cosmética biotecnológica y natural. Cuidado de la piel con ingredientes puros y ciencia avanzada.",
  icons: {
    icon: "/img/logo-mipiel-white.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${serif.variable}`}>
      <body className="bg-black text-white antialiased selection:bg-[#EF5DA8] selection:text-white font-sans">
        
        {/* ENVOLVEMOS TODA LA APP CON EL CART PROVIDER */}
        <CartProvider>
          
          {/* El Header aparece en todas las páginas */}
          <Header />
          
          {/* El Carrito Lateral (oculto por defecto) */}
          <CartSidebar />
          
          {/* El contenido de cada página (Home, Producto, etc) */}
          {children}
          
          {/* El Footer aparece en todas las páginas */}
          <Footer />

        </CartProvider>

      </body>
    </html>
  );
}

