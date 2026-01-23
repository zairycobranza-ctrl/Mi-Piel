/** @type {import('next').NextConfig} */
const nextConfig = {
  // Evita el warning de "inferred workspace root"
  turbopack: {
    // usa la carpeta actual como raíz del proyecto
    root: process.cwd(),
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" }
      // agrega aquí otros dominios remotos si los usas
      // { protocol: "https", hostname: "tudominio.com" },
      // { protocol: "https", hostname: "cdn.proveedor.com" }
    ],
  },
};

export default nextConfig;



