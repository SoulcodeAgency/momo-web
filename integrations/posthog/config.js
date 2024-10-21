const POSTHOG_ROUTE = '/ingest';
const POSTHOG_CLOUD_LOCATION = 'eu'; // 'eu' | 'us'
const POSTHOG_CLOUD_HOST = `https://${POSTHOG_CLOUD_LOCATION}.i.posthog.com`; // Note the "i" subdomain
const POSTHOG_UI_HOST = `https://${POSTHOG_CLOUD_LOCATION}.posthog.com`;

const POSTHOG_NEXT_CONFIG_REWRITES = [
  {
    source: `${POSTHOG_ROUTE}/ingest/static/:path*`,
    destination: `https://${POSTHOG_CLOUD_LOCATION}-assets.i.posthog.com/static/:path*`,
  },
  {
    source: `${POSTHOG_ROUTE}/:path*`,
    destination: `${POSTHOG_CLOUD_HOST}/:path*`,
  },
  {
    source: `${POSTHOG_ROUTE}/ingest/decide`,
    destination: `${POSTHOG_CLOUD_HOST}/decide`,
  },
];

module.exports = {
  POSTHOG_ROUTE,
  POSTHOG_CLOUD_LOCATION,
  POSTHOG_CLOUD_HOST,
  POSTHOG_UI_HOST,
  POSTHOG_NEXT_CONFIG_REWRITES,
};
