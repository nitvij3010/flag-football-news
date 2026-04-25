export const metadata = {
  title: 'Flag Football Leagues by City | Flag Football News',
  description: 'Find flag football leagues near you. Browse NFL FLAG youth leagues, adult leagues, and girls high school flag football programs across major US cities.',
  alternates: {
    canonical: 'https://www.theflagfootballhub.com/leagues',
  },
}

const cities = [
  { slug: 'dallas-texas', name: 'Dallas', state: 'Texas', emoji: '🤠' },
  { slug: 'houston-texas', name: 'Houston', state: 'Texas', emoji: '🚀' },
  { slug: 'miami-florida', name: 'Miami', state: 'Florida', emoji: '🌴' },
  { slug: 'los-angeles-california', name: 'Los Angeles', state: 'California', emoji: '🎬' },
  { slug: 'atlanta-georgia', name: 'Atlanta', state: 'Georgia', emoji: '🍑' },
  { slug: 'chicago-illinois', name: 'Chicago', state: 'Illinois', emoji: '🌬️' },
  { slug: 'phoenix-arizona', name: 'Phoenix', state: 'Arizona', emoji: '🌵' },
  { slug: 'new-york-new-york', name: 'New York City', state: 'New York', emoji: '🗽' },
  { slug: 'las-vegas-nevada', name: 'Las Vegas', state: 'Nevada', emoji: '🎰' },
  { slug: 'seattle-washington', name: 'Seattle', state: 'Washington', emoji: '☕' },
]

export default function LeaguesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Flag Football Leagues by City</h1>
      <p className="text-xl text-gray-500 mb-10">
        Find NFL FLAG youth leagues, adult recreational leagues, and girls high school flag football programs in your city.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {cities.map((city) => (
          <a key={city.slug} href={`/leagues/${city.slug}`}>
            <div className="article-card bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex items-center gap-4">
              <div className="text-4xl">{city.emoji}</div>
              <div>
                <h2 className="font-bold text-gray-900 text-lg">{city.name}</h2>
                <p className="text-gray-500 text-sm">{city.state}</p>
                <p className="text-[#003F8A] text-sm font-medium mt-1">View flag football leagues →</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="bg-[#003F8A] text-white rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold mb-2">Don't See Your City?</h2>
        <p className="text-blue-100 mb-4">We are adding new cities regularly. Contact us to suggest your city.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-[#003F8A] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          Suggest a City
        </a>
      </div>

    </div>
  )
}
