import { PHProvider } from '@/integrations/posthog/PostHogProvider';
import { CookiePreferencesProvider } from '@/lib/cookie/CookiePreferencesProvider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

/**
 * This is a wrapper component that provides all the necessary context providers for the app.
 *
 * * CartContextProvider - Provides the cart context.
 *
 * @param children The children to render.
 * @returns The wrapped children.
 */
export default async function AppProviders({ children }: { children: React.ReactNode }) {
  const messages = await getMessages();
  return (
    <PHProvider>
      <NextIntlClientProvider messages={messages}>
        <CookiePreferencesProvider>{children}</CookiePreferencesProvider>
      </NextIntlClientProvider>
    </PHProvider>
  );
}
