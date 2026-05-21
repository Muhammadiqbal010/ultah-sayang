/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ultah-sayang',
  assetPrefix: '/ultah-sayang/',
};

module.exports = nextConfig;