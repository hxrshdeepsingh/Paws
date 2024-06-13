import '../style/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';

import ProgressProvider from '@/components/progress';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pet Adoption Center - Find Your Perfect Pet',
  description:
    'Welcome to the Pet Adoption Center, where you can find your perfect pet companion. Browse our adoptable animals, learn about our adoption process, and make a difference in an animal life.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://paws-xi.vercel.app/assets/logo-transparent.png"
        />
        <meta property="og:url" content="https://paws-xi.vercel.app" />
        <link rel="icon" href="/assets/logo-transparent.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <ProgressProvider>
          {children}
          <SpeedInsights />
          <Analytics />
        </ProgressProvider>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
