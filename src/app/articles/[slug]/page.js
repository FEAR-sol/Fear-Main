import { notFound } from 'next/navigation';
import { ARTICLES } from '../../../data/blogsData';
import ArticlePageClient from '../../../components/ArticlePageClient';

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const post = ARTICLES.find((a) => a.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://fearagency.in/articles/${post.slug}` },
    openGraph: {
      type: 'article',
      url: `https://fearagency.in/articles/${post.slug}`,
      title: post.title,
      description: post.description,
      images: [{ url: `https://fearagency.in${post.image}`, width: 1200, height: 630 }],
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`https://fearagency.in${post.image}`],
    },
  };
}

export default function ArticlePostPage({ params }) {
  const post = ARTICLES.find((a) => a.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `https://fearagency.in${post.image}`,
    author: { '@type': 'Organization', name: 'FEAR Agency' },
    publisher: {
      '@type': 'Organization',
      name: 'FEAR Agency',
      logo: { '@type': 'ImageObject', url: 'https://fearagency.in/fear_logo.png' },
    },
    datePublished: post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://fearagency.in/articles/${post.slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticlePageClient post={post} backPath="/articles" backLabel="All Articles" />
    </>
  );
}
