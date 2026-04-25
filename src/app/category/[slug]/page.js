import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 3600

const categoryConfig = {
  'match-reports': {
    title: 'Match Reports',
    description: 'Game-by-game coverage of flag football tournaments and league play across the USA.',
    dbValue: 'Match Reports',
    showCities: false,
  },
  'tournament-news': {
    title: 'Tournament News',
    description: 'Latest updates from NFL FLAG, USA Football, and IFAF sanctioned tournaments.',
    dbValue: 'Tournament News',
    showCities: false,
  },
  'olympic-2028': {
    title: 'Olympic 2028',
    description: 'Following flag football\'s historic journey to the Los Angeles 2028 Olympics.',
    dbValue: 'Olympic 2028',
    showCities: false,
  },
  'player-spotlight': {
    title: 'Player Spotlight',
    description: 'Profiles of standout flag football players at every level of the game.',
    dbValue: 'Player Spotlight',
    showCities: false,
  },
  'usa-league-news': {
    title: 'USA League News',
    description: 'Coverage of flag football leagues in cities across the United States.',
    dbValue: 'USA League News',
    showCities: true,
  },
  'rules-how-to-play': {
    title: 'Rules & How To Play',
    description: 'Everything you need to know about flag football rules, tips, and how to get started.',
    dbValue: 'Rules & How To Play',
    showCities: false,
  },
}

const cities = [
  { slug: 'dallas-texas', name: 'Dallas', state: 'TX', emoji: '🤠' },
  { slug: 'houston-texas', name: 'Houston', state: 'TX', emoji: '🚀' },
  { slug: 'miami-florida', name: 'Miami', state: 'FL', emoji: '🌴' },
  { slug: 'los-angeles-california', name: 'Los Angeles', state: 'CA', emoji: '🎬' },
  { slug: 'atlanta-georgia', name: 'Atlanta', state: 'GA', emoji: '🍑' },
  { slug: 'chicago-illinois', name: 'Chicago', state: 'IL', emoji: '🌬️' },
  { slug: 'phoenix-arizona', name: 'Phoenix', state: 'AZ', emoji: '🌵' },
  { slug: 'new-york-new-york', name: 'New York City', state: 'NY', emoji: '🗽' },
  { slug: 'las-vegas-nevada', name: 'Las Vegas', state: 'NV', emoji: '🎰' },
  { slug: 'seattle-washington', name: 'Seattle', state: 'WA', emoji: '☕' },
]

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

      {/* City leagues section — only for USA League News */}
      {config.showCities && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Find Flag Football Leagues Near You</h2>
          <p className="text-gray-500 text-sm mb-6">Browse local leagues, youth programs, and girls high school flag football by city.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
            {cities.map((city) => (
              <a key={city.slug} href={`/leagues/${city.slug}`}>
                <div className="article-card bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center">
                  <div className="text-2xl mb-1">{city.emoji}</div>
                  <p className="font-bold text-gray-900 text-sm">{city.name}</p>
                  <p className="text-gray-400 text-xs">{city.state}</p>
                </div>
              </a>
            ))}
          </div>
          <a href="/leagues" className="text-[#003F8A] text-sm font-semibold hover:underline">
            View all cities →
          </a>
          <div className="border-t border-gray-100 mt-8 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Latest League News</h2>
          </div>
        </div>
      )}

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
