/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'placehold.co',
      'via.placeholder.com',
      'www.homelifemiracle.com',
      'storage.sub-ca.incomrealestate.com'
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig 