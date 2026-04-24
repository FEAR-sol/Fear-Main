import Hero from '../components/Hero';
import WhyChooseFear from '../components/WhyChooseFear';
import WhatWeBuild from '../components/WhatWeBuild';
import ParallaxServices from '../components/ParallaxServices';
import StartupFriendly from '../components/StartupFriendly';

export const metadata = {
  title: 'Web Development & AI Solutions Agency India | FEAR Agency',
  description:
    "FEAR Agency is a web development, AI solutions & branding studio in India. We build fast, modern digital experiences for ambitious brands. Let's talk.",
  alternates: { canonical: 'https://fearagency.in/' },
  openGraph: {
    type: 'website',
    url: 'https://fearagency.in/',
    title: 'Web Development & AI Solutions Agency India | FEAR Agency',
    description:
      'FEAR Agency builds fast, modern digital experiences. Web development, AI solutions & branding for ambitious brands.',
    images: [{ url: 'https://fearagency.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & AI Solutions Agency India | FEAR Agency',
    description:
      'FEAR Agency builds fast, modern digital experiences. Web development, AI solutions & branding for ambitious brands.',
    images: ['https://fearagency.in/og-image.jpg'],
  },
};

export default function HomePage() {
  return (
    <div
      className="viewport-safe no-horizontal-scroll"
      style={{ touchAction: 'auto', WebkitOverflowScrolling: 'touch', overflowY: 'auto', overflowX: 'hidden', height: 'auto' }}
    >
      <Hero />
      <WhyChooseFear />
      <WhatWeBuild />
      <ParallaxServices />
      <StartupFriendly />
    </div>
  );
}
