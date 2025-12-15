/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ...konfigurasi Anda yang lain mungkin ada di sini

  // Tambahkan ini:
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
