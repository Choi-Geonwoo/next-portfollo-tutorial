/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      'image.yes24.com',
      'contents.kyobobook.co.kr',
      'image.aladin.co.kr',
      'https://image.yes24.com/goods/4344801/XL'
    ]
  }
}

module.exports = nextConfig
