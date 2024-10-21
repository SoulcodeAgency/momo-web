const { withUniformConfig } = require('@uniformdev/canvas-next-rsc/config');
const withVercelToolbar = require('@vercel/toolbar/plugins/next')();

const { POSTHOG_NEXT_CONFIG_REWRITES } = require('./integrations/posthog/config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async rewrites() {
    return [...POSTHOG_NEXT_CONFIG_REWRITES];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
  // experimental: {
  // ppr: "incremental",
  // },
};

module.exports = withVercelToolbar(withUniformConfig(nextConfig));
