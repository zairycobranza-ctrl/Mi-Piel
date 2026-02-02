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

// 1. BARRA DE NAVEGADOR (Actualizada para modo claro)
export const viewport: Viewport = {
  themeColor: "#FFFFFF", // Antes era negro, ahora blanco para combinar con el fondo
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// 2. TÍTULO Y METADATOS
export const metadata: Metadata = {
  title: {
    template: "%s | MIPIEL",
    default: "MIPIEL | Cosmético",
  },
  description: "Cosmética biotecnológica y natural. Cuidado de la piel con ingredientes puros y ciencia avanzada.",
  icons: {
    // OJO: Como ahora el fondo es blanco, asegúrate de que este icono se vea bien.
    // Si es blanco transparente, quizás no se vea. Deberías usar el logo negro aquí si es necesario.
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
      {/* CAMBIOS AQUÍ:
         - bg-background: Usa tu variable blanca
         - text-foreground: Usa tu variable gris oscura
         - selection:bg-secondary: Usa tu variable púrpura al seleccionar texto
      */}
      <body className="bg-background text-foreground antialiased selection:bg-secondary selection:text-white font-sans">
        
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

