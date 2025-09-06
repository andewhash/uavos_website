/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  output: 'export',
  images: { 
    unoptimized: true
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  experimental: {
    esmExternals: true,
  }
};

export default nextConfig;