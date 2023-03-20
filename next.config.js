/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  compiler: {
    styledComponents: true,
  },
  assetPrefix: '.',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
