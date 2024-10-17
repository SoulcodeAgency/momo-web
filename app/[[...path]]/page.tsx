import { resolveComponent } from '@/integrations/uniform/UniformComponentResolver';
import { PageParameters, retrieveRoute, UniformComposition } from '@uniformdev/canvas-next-rsc';
import PostHogClient from "../../integrations/posthog/posthog";
import Link from 'next/link';

// Uncomment to statically render routes at build time
// export { generateStaticParams } from '@uniformdev/canvas-next-rsc';

export default async function Home(props: PageParameters) {
  const route = await retrieveRoute(props);
  const posthog = PostHogClient()
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
      {/* Flag example */}
      {flags['main-cta'] &&
        <Link href="http://posthog.com/">Go to PostHog</Link>
      }
    </>
  );
}
