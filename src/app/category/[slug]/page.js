import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 3600

const categoryConfig = {
  'match-reports': {
    title: 'Match Reports',
    description: 'Game-by-game coverage of flag football tournaments and league play across the USA.',
    dbValue: 'Match Reports',
  },
  'tournament-news': {
    title: 'Tournament News',
    description: 'Latest updates from NFL FLAG, USA Football, and IFAF sanctioned tournaments.',
    dbValue: 'Tournament News',
  },
  'olympic-2028': {
    title: 'Olympic 2028',
    description: 'Following flag football\'s historic journey to the Los Angeles 2028 Olympics.',
    dbValue: 'Olympic 2028',
  },
  'player-spotlight': {
    title: 'Player Spotlight',
    description: 'Profiles of standout flag football players at every level of the game.',
    dbValue: 'Player Spotlight',
  },
  'usa-league-news': {
    title: 'USA League News',
    description: 'Coverage of flag football leagues in cities across the United States.',
    dbValue: 'USA League News',
  },
  'rules-how-to-play': {
    title: 'Rules & How To Play',
    description: 'Everything you need to know about flag football rules, tips, and how to get started.',
    dbValue: 'Rules & How To Play',
  },
}

async function getArticlesByCategory(dbValue) {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('is_published', true)
    .eq('category', dbValue)
    .order('published_at', { ascending: false })
    .limit(20)

  if (error) return []
  return data
}

export async function generateMetadata({ params }) {
  const config = categoryConfig[params.slug]
  if (!config) return {}
  return {
    title: `${config.title} | Flag Football News`,
    description: config.description,
    alternates: {
      canonical: `https://www.theflagfootballhub.com/category/${params.slug}`,
    },
  }
}

export default async function CategoryPage({ params }) {
  const config = categoryConfig[params.slug]
  if (!config) notFound()

  const articles = await getArticlesByCategory(config.dbValue)

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="mb-10 border-b border-gray-100 pb-6">
        <span className="category-badge mb-3 inline-block">{config.title}</span>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{config.title}</h1>
        <p className="text-gray-500">{config.description}</p>
      </div>

      {/* Articles */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
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
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-400 text-xl mb-2">No articles yet in this category.</p>
          <p className="text-gray-400">Check back soon — we publish new articles daily!</p>
        </div>
      )}

      {/* Back home */}
      <div className="mt-12">
        <a href="/" className="text-[#003F8A] font-semibold hover:underline">
          ← Back to all news
        </a>
      </div>

    </div>
  )
}
