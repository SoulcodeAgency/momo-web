import { PHProvider } from '@/integrations/posthog/PostHogProvider';
import { CookiePreferencesProvider } from '@/lib/cookie/CookiePreferencesProvider';

/**
 * This is a wrapper component that provides all the necessary context providers for the app.
 *
 * * CartContextProvider - Provides the cart context.
 *
 * @param children The children to render.
 * @returns The wrapped children.
 */
export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <PHProvider>
      <CookiePreferencesProvider>{children}</CookiePreferencesProvider>
    </PHProvider>
  );
}
