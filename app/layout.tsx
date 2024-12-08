import type { Metadata } from 'next';

import { Montserrat } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { Toaster } from '@/components/ui';

import Providers from './providers';

import './globals.css';

const inter = Montserrat({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Unsplash',
  description: 'The internet’s source of freely-usable images.',
  icons: ['logo.svg'],
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
          <NuqsAdapter>{children}</NuqsAdapter>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
