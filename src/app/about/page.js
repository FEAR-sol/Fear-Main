import About from '../../components/About';

export const metadata = {
  title: 'About FEAR Agency — Web Dev & Branding Studio India',
  description:
    "Learn about FEAR Agency's journey, mission to empower brands through design and technology, and meet our talented team of developers, designers, and strategists.",
  alternates: { canonical: 'https://fearagency.in/about' },
  openGraph: {
    type: 'website',
    url: 'https://fearagency.in/about',
    title: 'About FEAR Agency — Web Dev & Branding Studio India',
    description:
      "Learn about FEAR Agency's journey, mission to empower brands through design and technology, and meet our talented team.",
    images: [{ url: 'https://fearagency.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About FEAR Agency — Web Dev & Branding Studio India',
    description:
      "Learn about FEAR Agency's journey, mission to empower brands through design and technology, and meet our talented team.",
    images: ['https://fearagency.in/og-image.jpg'],
  },
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <About />
    </div>
  );
}
