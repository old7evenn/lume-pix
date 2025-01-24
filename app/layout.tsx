import type { Metadata } from 'next';

import { Montserrat } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { Toaster } from '@/components/ui';

import { BackToTop } from './(components)';
import Providers from './providers';

import '../assets/styles/globals.css';

const inter = Montserrat({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'LumePix - The Internet\'s Source of Freely-Usable Images',
  description: 'LumePix is a platform that provides a vast collection of high-quality, freely-usable images for personal and commercial use.',
  keywords: ['images', 'free images', 'stock photos', 'creative assets', 'media', 'design'],
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/logo.svg',
      url: '/logo.svg'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lume-pix.vercel.app/',
    title: 'LumePix - The Internet\'s Source of Freely-Usable Images',
    description: 'LumePix is a platform that provides a vast collection of high-quality, freely-usable images for personal and commercial use.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LumePix - The Internet\'s Source of Freely-Usable Images'
      }
    ],
    siteName: 'LumePix'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`min-h-screen flex flex-col items-center px-4 py-8 md:p-8 max-w-7xl mx-auto bg-background text-muted-foreground font-sans antialiased ${inter.className} `}
      >
        <Providers>
          <NuqsAdapter>
            {children}
          </NuqsAdapter>
          <Toaster />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}