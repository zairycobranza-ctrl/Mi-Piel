import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // ⚠️ IMPORTANTE: Cuando compres tu dominio real, cámbialo aquí.
  // Mientras estés en local, esto no afecta, pero para producción es vital.
  const baseUrl = 'https://mipielcosmeticos.com' 

  // Lista de tus productos (Deben coincidir con los slugs de tu base de datos)
  const products = [
    'crema-hidratante',
    'talco-antiseptico',
    'jabon-glicerina',
    'shampoo-coco'
  ]

  // Generamos automáticamente las URLs para cada producto
  const productUrls = products.map((slug) => ({
    url: `${baseUrl}/producto/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8, // Alta prioridad, son tus ventas
  }))

  return [
    // 1. PÁGINA DE INICIO
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, // La más importante
    },
    // 2. PÁGINA QUIÉNES SOMOS (La ruta real que creamos)
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // 3. INCLUIMOS TUS PRODUCTOS AUTOMÁTICAMENTE
    ...productUrls, 
  ]
}
