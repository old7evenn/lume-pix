import type { Metadata } from 'next';

import { Montserrat } from 'next/font/google';
import { cookies } from 'next/headers';

import type { Theme } from '@/utils/contexts';

import { Toaster } from '@/components/ui';
import { getMessagesByLocale } from '@/utils/contexts/i18n/helpers';

import { BackToTop } from './(components)';
import Providers from './providers';

import '../assets/styles/globals.css';

const inter = Montserrat({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "LumePix - The Internet's Source of Freely-Usable Images",
  description:
    'LumePix is a platform that provides a vast collection of high-quality, freely-usable images for personal and commercial use.',
  keywords: ['images', 'free images', 'stock photos', 'creative assets', 'media', 'design'],
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/logo.svg',
      url: '/logo.svg',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lume-pix.vercel.app/',
    title: "LumePix - The Internet's Source of Freely-Usable Images",
    description:
      'LumePix is a platform that provides a vast collection of high-quality, freely-usable images for personal and commercial use.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "LumePix - The Internet's Source of Freely-Usable Images",
      },
    ],
    siteName: 'LumePix',
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const themeCookie = (await cookies()).get('theme');
  const defaultTheme = (themeCookie?.value as Theme) ?? 'dark';

  const locale = 'en';
  const messages = getMessagesByLocale(locale);

  return (
    <html className={`scroll-smooth ${defaultTheme}`} lang="en">
      <body>
        <Providers i18n={{ locale, messages }} theme={{ defaultTheme }}>
          <main
            className={`flex flex-col container items-center px-4 py-8 md:p-8 mx-auto bg-background text-muted-foreground font-sans antialiased ${inter.className} `}
          >
            {children}
          </main>
          <Toaster />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
