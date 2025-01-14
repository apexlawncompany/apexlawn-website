/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  optimizeFonts: false,
  distDir: 'dist',
  basePath: isProd ? '/apexlawn-website' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
