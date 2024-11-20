import type { NextConfig } from 'next';

const { withUniformConfig } = require('@uniformdev/canvas-next-rsc/config');
const withVercelToolbar = require('@vercel/toolbar/plugins/next')();

const { POSTHOG_NEXT_CONFIG_REWRITES } = require('./integrations/posthog/config');

const nextConfig: NextConfig = {
  images: {
    domains: ['img.uniform.global'],
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

export default withVercelToolbar(withUniformConfig(nextConfig));
