import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';
import React from 'react';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Angelo Aaron Kalaw',
    template: '%s | Angelo Aaron Kalaw',
  },
  description: 'My Personal Site.',
  keywords: ['Angelo Aaron Kalaw'],
  authors: [{ name: 'Angelo Aaron Kalaw' }],
  creator: 'Angelo Aaron Kalaw',
  metadataBase: new URL('https://akaalaw.github.io'),
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://aakalaw.github.io',
    siteName: 'Angelo Aaron Kalaw',
    title: 'Angelo Aaron Kalaw',
    description: 'My Personal Site.',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Angelo Aaron Kalaw',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
