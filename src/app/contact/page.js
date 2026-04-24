import Contact from '../../components/Contact';

export const metadata = {
  title: "Contact FEAR Agency — Let's Build Something",
  description:
    "Get in touch with FEAR Agency for web development, app development, AI solutions, and branding services. Let's transform your digital presence together.",
  alternates: { canonical: 'https://fearagency.in/contact' },
  openGraph: {
    type: 'website',
    url: 'https://fearagency.in/contact',
    title: "Contact FEAR Agency — Let's Build Something",
    description:
      "Get in touch with FEAR Agency for web development, AI solutions, and branding. We respond within 48 hours.",
    images: [{ url: 'https://fearagency.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact FEAR Agency — Let's Build Something",
    description:
      "Get in touch with FEAR Agency for web development, AI solutions, and branding. We respond within 48 hours.",
    images: ['https://fearagency.in/og-image.jpg'],
  },
};

export default function ContactPage() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Contact />
    </div>
  );
}
