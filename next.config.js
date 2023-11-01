/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: 'experimental-edge'
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
