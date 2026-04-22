import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'

export const revalidate = 3600

async function getArticle(slug) {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  if (error || !data) return null
  return data
}

export async function generateMetadata({ params }) {
  const article = await getArticle(params.slug)
  if (!article) return {}

  return {
    title: article.meta_title || article.title,
    description: article.meta_desc || article.excerpt,
    keywords: article.keywords?.join(', '),
    alternates: {
      canonical: `https://www.theflagfootballhub.com/article/${article.slug}`,
    },
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_desc || article.excerpt,
      type: 'article',
      publishedTime: article.published_at,
      authors: [article.author_name],
    },
  }
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug)

  if (!article) notFound()

  const publishedDate = new Date(article.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.published_at,
    author: {
      '@type': 'Person',
      name: article.author_name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Flag Football News',
      url: 'https://www.theflagfootballhub.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">

        {/* Category */}
        <div className="mb-4">
          <span className="category-badge">{article.category}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-500 mb-6 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Author + Date */}
        <div className="flex items-center gap-4 border-y border-gray-100 py-4 mb-8">
          <div>
            <p className="font-semibold text-gray-800 text-sm">{article.author_name}</p>
            <p className="text-gray-400 text-xs">{publishedDate} · {article.read_time} min read</p>
          </div>
        </div>

        {/* Article Content */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Keywords */}
        {article.keywords && article.keywords.length > 0 && (
          <div className="mt-12 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Topics</p>
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((kw) => (
                <span key={kw} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        {article.author_bio && (
          <div className="mt-10 bg-gray-50 rounded-xl p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">About the Author</p>
            <p className="font-bold text-gray-800">{article.author_name}</p>
            <p className="text-gray-600 text-sm mt-1">{article.author_bio}</p>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-10">
          <a href="/" className="text-[#003F8A] text-sm font-semibold hover:underline">
            ← Back to Flag Football News
          </a>
        </div>

      </article>
    </>
  )
}
