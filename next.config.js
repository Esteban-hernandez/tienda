/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true
  },
  images: {
    domains: ['picsum.photos'],
  }
}

module.exports = nextConfig
