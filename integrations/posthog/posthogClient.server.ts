import { PostHog } from 'posthog-node';
import { POSTHOG_CLOUD_HOST } from './config';

export default function PostHogClient() {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    throw new Error('PostHog key and host must be defined');
  }

  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: POSTHOG_CLOUD_HOST,
    flushAt: 1,
    flushInterval: 0,
  });
  return posthogClient;
}
