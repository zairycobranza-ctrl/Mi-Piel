import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // ⚠️ Asegúrate de que este dominio sea EL MISMO que pusiste en sitemap.ts
  const baseUrl = 'https://mipielcosmeticos.com' 

  return {
    rules: {
      userAgent: '*', // Aplica para todos los robots (Googlebot, Bingbot, etc.)
      allow: '/',     // Les permitimos leer toda la página
      disallow: '/private/', // (Opcional) Si tuvieras un panel de admin, lo bloquearías aquí
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Le decimos dónde está el mapa del sitio
  }
}