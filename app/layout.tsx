import { UniformContext } from '@uniformdev/canvas-next-rsc';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { VercelToolbar } from '@vercel/toolbar/next';
import { Suspense } from 'react';
import { initializeComponentsMap } from '@/integrations/uniform/UniformComponentResolver';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <UniformContext>{children}</UniformContext>

        <Suspense fallback={<p>Loading Vercel Toolbar ...</p>}>
          <VercelToolbar />
        </Suspense>
      </body>
    </html>
  );
}
