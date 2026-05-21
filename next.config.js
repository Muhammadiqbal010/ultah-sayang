/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ultah-sayang',
  assetPrefix: '/ultah-sayang/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Tambahan ini penting
  distDir: 'out',
};

export default nextConfig;