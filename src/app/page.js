import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export const revalidate = 3600

async function getArticles() {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(20)

  if (error) {
    console.error('Error fetching articles:', error)
    return []
  }
  return data
}

export default async function HomePage() {
  const articles = await getArticles()
  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Hero Section */}
      {featured ? (
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#003F8A] mb-2">Featured</p>
          <Link href={`/article/${featured.slug}`}>
            <div className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="p-8">
                <span className="category-badge mb-3 inline-block">{featured.category}</span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-[#003F8A] transition mb-4">
                  {featured.title}
                </h1>
                <p className="text-gray-600 text-lg mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span>{featured.author_name}</span>
                  <span>·</span>
                  <span>{new Date(featured.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>·</span>
                  <span>{featured.read_time} min read</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="mb-12 bg-gray-50 rounded-2xl p-12 text-center">
          <h1 className="text-3xl font-bold text-gray-400">Articles coming soon...</h1>
          <p className="text-gray-400 mt-2">Check back shortly for the latest flag football news.</p>
        </div>
      )}

      {/* Article Grid */}
      {rest.length > 0 && (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link key={article.id} href={`/article/${article.slug}`}>
                <div className="article-card bg-white border border-gray-100 rounded-xl p-5 shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <span className="category-badge mb-3 inline-block">{article.category}</span>
                    <h2 className="text-lg font-bold text-gray-900 mb-2 hover:text-[#003F8A] transition">
                      {article.title}
                    </h2>
                    <p className="text-gray-500 text-sm">{article.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-4">
                    <span>{article.author_name}</span>
                    <span>·</span>
                    <span>{new Date(article.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>·</span>
                    <span>{article.read_time} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
