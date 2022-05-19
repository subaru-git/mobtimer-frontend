/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_HTTP_URL: process.env.SERVER_HTTP_URL,
    SERVER_WS_URL: process.env.SERVER_WS_URL,
  },
};

module.exports = nextConfig;
