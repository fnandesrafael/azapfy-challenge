/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.jsdelivr.net',
      }
    ]
  },
  crossOrigin: 'use-credentials'
}

module.exports = nextConfig
