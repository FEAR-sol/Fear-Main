import { Playfair_Display, Inter, Josefin_Slab, Jacques_Francois } from 'next/font/google';
import Script from 'next/script';
import ClientShell from '../components/ClientShell';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const josefinSlab = Josefin_Slab({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-josefin',
  display: 'swap',
});

const jacquesFrancois = Jacques_Francois({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jacques',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://fearagency.in'),
  title: {
    default: 'Web Development & AI Solutions Agency India | FEAR Agency',
    template: '%s | FEAR Agency',
  },
  description:
    "FEAR Agency is a web development, AI solutions & branding studio in India. We build fast, modern digital experiences for ambitious brands. Let's talk.",
  keywords: ['web development', 'app development', 'AI solutions', 'branding', 'digital agency', 'FEAR agency'],
  authors: [{ name: 'FEAR Agency' }],
  creator: 'FEAR Agency',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://fearagency.in/' },
  openGraph: {
    type: 'website',
    url: 'https://fearagency.in/',
    siteName: 'FEAR Agency',
    title: 'Web Development & AI Solutions Agency India | FEAR Agency',
    description:
      'FEAR Agency builds fast, modern digital experiences. Web development, AI solutions & branding for ambitious brands.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'FEAR Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & AI Solutions Agency India | FEAR Agency',
    description:
      'FEAR Agency builds fast, modern digital experiences. Web development, AI solutions & branding for ambitious brands.',
    images: ['/og-image.jpg'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FEAR Agency',
  alternateName: 'Face Everything And Rise',
  url: 'https://fearagency.in',
  logo: 'https://fearagency.in/fear_logo.png',
  description: 'Premium web development, AI solutions, and branding services',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/fear-agency',
    'https://twitter.com/fearagency',
    'https://www.instagram.com/fear.agency',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contact@fearagency.in',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${josefinSlab.variable} ${jacquesFrancois.variable}`}
    >
      <head>
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        style={{
          touchAction: 'auto',
          WebkitOverflowScrolling: 'touch',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <Script src="/scroll-fix.js" strategy="beforeInteractive" />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                window.gtag = gtag;
              `}
            </Script>
          </>
        )}
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
