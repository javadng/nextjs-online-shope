/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["s6.uupload.ir"],
  },
  env: {
    apiUrl:
      "https://onlineshop-9ab57-default-rtdb.asia-southeast1.firebasedatabase.app",
  },
};

module.exports = nextConfig;
