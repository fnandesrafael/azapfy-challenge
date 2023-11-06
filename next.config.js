/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.jsdelivr.net',
      }
    ]
  },
  crossOrigin: 'anonymous'
}

module.exports = nextConfig
