const { withUniformConfig } = require('@uniformdev/canvas-next-rsc/config');
const withVercelToolbar = require('@vercel/toolbar/plugins/next')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  // experimental: {
  // ppr: "incremental",
  // },
};

module.exports = withVercelToolbar(withUniformConfig(nextConfig));
