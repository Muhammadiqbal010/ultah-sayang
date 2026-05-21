/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ultah-sayang',
  assetPrefix: '/ultah-sayang/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;