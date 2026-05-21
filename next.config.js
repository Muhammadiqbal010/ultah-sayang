/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // Ini yang paling penting
  basePath: '/ultah-sayang',  // Nama repository kamu
  assetPrefix: '/ultah-sayang/',
  trailingSlash: true,
  images: {
    unoptimized: true,        // Penting untuk GitHub Pages
  },
};

export default nextConfig;