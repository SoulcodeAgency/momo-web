import { resolveComponent } from '@/integrations/uniform/UniformComponentResolver';
import { retrieveRoute, UniformComposition } from '@uniformdev/canvas-next-rsc';
import PostHogClient from '@/integrations/posthog/posthogClient.server';
import Link from 'next/link';
import { type PageParameters } from '@uniformdev/canvas-next-rsc';
import { type AsyncProps, extractProps } from '@/lib/nextjs/typeHelpers';

// Uncomment to statically render routes at build time
// export { generateStaticParams } from '@uniformdev/canvas-next-rsc';

export default async function Home(asyncProps: AsyncProps<PageParameters>) {
  const props = await extractProps(asyncProps);

  const route = await retrieveRoute(props);

  // TODO: Posthog flags integration is just an example for now:
  const posthog = PostHogClient();
  const flags = await posthog.getAllFlags(
    'user_distinct_id' // replace with a user's distinct ID
  );
  await posthog.shutdown();

  return (
    <>
      <UniformComposition
        {...props}
        resolveComponent={resolveComponent}
        route={route}
        // this is the setting for SSR and Edge-side rendering
        // for the static mode (SSG) use mode="static"
        mode="server"
      />

      {/* Posthog server side Flag example */}
      {flags['main-cta'] && <Link href="http://posthog.com/">Go to PostHog</Link>}
    </>
  );
}
