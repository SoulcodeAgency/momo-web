import { UniformContext } from '@uniformdev/canvas-next-rsc';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { VercelToolbar } from '@vercel/toolbar/next';
import { Suspense } from 'react';
import { initializeComponentsMap } from '@/integrations/uniform/UniformComponentResolver';
import CookiePreferencesIntegration from '@/lib/cookie/components/CookiePreferencesIntegration';
import PostHogPageView from '@/integrations/posthog/PostHogPageView';
import AppProviders from '@/contexts/AppProviders';
import { getLocale, getTranslations } from 'next-intl/server';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

const metadata: Metadata = {
  title: 'Momo',
  description: 'Momo web landing page',
};

export async function generateMetadata() {
  await initializeComponentsMap();
  return metadata;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const t = await getTranslations('Layout');

  return (
    <html lang={locale} className="!scroll-smooth">
      <AppProviders>
        <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
          <Suspense>
            <PostHogPageView />
          </Suspense>

          <UniformContext>{children}</UniformContext>

          <Suspense fallback={<p>{t('VercelToolbar.Loading')}</p>}>
            <VercelToolbar />
          </Suspense>

          <CookiePreferencesIntegration />
        </body>
      </AppProviders>
    </html>
  );
}
