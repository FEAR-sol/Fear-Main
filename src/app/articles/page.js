import ContentListPageClient from '../../components/ContentListPageClient';

export const metadata = {
  title: 'Articles — Design, AI & Digital Trends | FEAR Agency',
  description:
    'Explore in-depth articles on AI, technology, web development, and product building from FEAR Agency experts.',
  alternates: { canonical: 'https://fearagency.in/articles' },
  openGraph: {
    type: 'website',
    url: 'https://fearagency.in/articles',
    title: 'Articles — Design, AI & Digital Trends | FEAR Agency',
    description: 'Explore in-depth articles on AI, technology, web development, and product building from FEAR Agency.',
    images: [{ url: 'https://fearagency.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles — Design, AI & Digital Trends | FEAR Agency',
    description: 'Explore in-depth articles on AI, technology, web development, and product building from FEAR Agency.',
    images: ['https://fearagency.in/og-image.jpg'],
  },
};

export default function ArticlesPage() {
  return <ContentListPageClient type="article" />;
}
