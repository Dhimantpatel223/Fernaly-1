import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BotanicalLeaves from '@/components/BotanicalLeaves';
import GlobalScripts from '@/components/GlobalScripts';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.fernaly.com'),
  title: {
    default: 'Fernaly | Premium Nature-Inspired Skincare & Beauty',
    template: '%s | Fernaly'
  },
  icons: {
    icon: "/Fernaly-logo.svg",  // .svg likho
  },
  description: 'Fernaly crafts premium, nature-inspired skincare and beauty products rooted in quiet confidence. Experience botanical rituals designed for skin that speaks softly and glows quietly.',
  keywords: ['skincare', 'premium skincare', 'natural ingredients', 'botanical skincare', 'Fernaly beauty', 'cruelty-free', 'glow cream', 'botanical toner', 'organic beauty'],
  authors: [{ name: 'Fernaly' }],
  creator: 'Fernaly',
  publisher: 'Fernaly',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Fernaly | Premium Nature-Inspired Skincare',
    description: 'Discover Fernaly\'s luxurious skincare formulated with pure botanical ingredients for healthy, quietly glowing skin.',
    url: 'https://www.fernaly.com',
    siteName: 'Fernaly',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernaly | Premium Nature-Inspired Skincare',
    description: 'Discover Fernaly\'s luxurious skincare formulated with pure botanical ingredients.',
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
  alternates: {
    canonical: 'https://www.fernaly.com',
  },
  verification: {
    google: '0ovrZg_nP2UKkqgcu72w20g6oy7DY7HIYv2HYtyX_-k',
  },
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8MBCMBWGCL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8MBCMBWGCL');
          `}
        </Script>
      </head>
      <body>
        <GlobalScripts />
        <Navbar />
        {children}
        <Footer />
        <BotanicalLeaves />
      </body>
    </html>
  );
}
