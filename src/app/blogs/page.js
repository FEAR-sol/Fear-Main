import ContentListPageClient from '../../components/ContentListPageClient';

export const metadata = {
  title: 'Blog — Web Dev, AI & Branding Insights | FEAR Agency',
  description:
    'Read thoughts, opinions, and behind-the-scenes stories from the FEAR Agency team about design, development, and digital innovation.',
  alternates: { canonical: 'https://fearagency.in/blogs' },
  openGraph: {
    type: 'website',
    url: 'https://fearagency.in/blogs',
    title: 'Blog — Web Dev, AI & Branding Insights | FEAR Agency',
    description: 'Read thoughts, opinions, and behind-the-scenes stories from the FEAR Agency team.',
    images: [{ url: 'https://fearagency.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Web Dev, AI & Branding Insights | FEAR Agency',
    description: 'Read thoughts, opinions, and behind-the-scenes stories from the FEAR Agency team.',
    images: ['https://fearagency.in/og-image.jpg'],
  },
};

export default function BlogsPage() {
  return <ContentListPageClient type="blog" />;
}
