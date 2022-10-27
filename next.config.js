/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["s6.uupload.ir"],
  },
};

module.exports = nextConfig;
