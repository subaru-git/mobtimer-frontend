/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_HTTP_URL: process.env.SERVER_HTTP_URL,
    SERVER_WS_URL: process.env.SERVER_WS_URL,
    COPY_RIGHT: process.env.COPY_RIGHT,
    GITHUB_URL: process.env.GITHUB_URL,
    TWITTER_URL: process.env.TWITTER_URL,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
