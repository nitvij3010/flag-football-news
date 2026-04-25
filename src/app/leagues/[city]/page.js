import { notFound } from 'next/navigation'

export const revalidate = 86400

const cities = {
  'dallas-texas': {
    name: 'Dallas',
    state: 'Texas',
    fullName: 'Dallas, Texas',
    description: 'Flag football is booming in Dallas, Texas. From youth NFL FLAG leagues to adult recreational leagues and girls high school varsity programs, the Dallas-Fort Worth metroplex is one of the fastest-growing flag football markets in the USA.',
    leagues: [
      { name: 'NFL FLAG Dallas', url: 'https://nflflag.com', description: 'Official NFL FLAG youth leagues for boys and girls ages 5-17 across the Dallas area.' },
      { name: 'USA Football Texas', url: 'https://usafootball.com', description: 'USA Football sanctioned programs and camps across Texas.' },
      { name: 'Dallas Parks & Recreation', url: 'https://dallascityhall.com', description: 'Adult flag football leagues run by the City of Dallas Parks Department.' },
    ],
    highSchool: 'Texas is one of the leading states for girls high school flag football, with over 400 schools offering varsity programs. Dallas ISD and surrounding districts have established competitive varsity leagues.',
    keywords: ['flag football Dallas', 'flag football Dallas Texas', 'girls flag football Dallas', 'NFL FLAG Dallas', 'adult flag football Dallas TX'],
  },
  'houston-texas': {
    name: 'Houston',
    state: 'Texas',
    fullName: 'Houston, Texas',
    description: 'Houston is home to one of the largest flag football communities in Texas. With dozens of NFL FLAG leagues, adult recreational leagues, and a growing girls high school varsity scene, Houston offers flag football for every age and skill level.',
    leagues: [
      { name: 'NFL FLAG Houston', url: 'https://nflflag.com', description: 'Official NFL FLAG youth leagues across the Houston metro area.' },
      { name: 'USA Football Texas', url: 'https://usafootball.com', description: 'USA Football sanctioned programs across Texas including Houston.' },
      { name: 'Houston Parks & Recreation', url: 'https://www.houstontx.gov', description: 'Adult flag football leagues through Houston Parks and Recreation.' },
    ],
    highSchool: 'Houston ISD and surrounding districts are expanding girls flag football programs rapidly, with new schools joining varsity leagues every season.',
    keywords: ['flag football Houston', 'flag football Houston Texas', 'girls flag football Houston', 'NFL FLAG Houston', 'adult flag football Houston TX'],
  },
  'miami-florida': {
    name: 'Miami',
    state: 'Florida',
    fullName: 'Miami, Florida',
    description: 'Miami has one of the most vibrant flag football scenes in the country. Florida was one of the first states to establish girls varsity high school flag football, and Miami leads the way with competitive leagues at every level.',
    leagues: [
      { name: 'NFL FLAG Miami', url: 'https://nflflag.com', description: 'Official NFL FLAG youth leagues for boys and girls across Miami-Dade County.' },
      { name: 'Florida High School Athletic Association', url: 'https://fhsaa.com', description: 'FHSAA sanctioned girls flag football — Florida is a national leader in the sport.' },
      { name: 'Miami-Dade Parks', url: 'https://www.miamidade.gov', description: 'Adult flag football leagues through Miami-Dade County Parks.' },
    ],
    highSchool: 'Florida has been a pioneer in girls high school flag football. Miami-Dade County schools compete in one of the most competitive girls flag football leagues in the country.',
    keywords: ['flag football Miami', 'flag football Miami Florida', 'girls flag football Miami', 'NFL FLAG Miami', 'adult flag football Miami FL'],
  },
  'los-angeles-california': {
    name: 'Los Angeles',
    state: 'California',
    fullName: 'Los Angeles, California',
    description: 'Los Angeles is set to host the 2028 Olympics where flag football will make its historic debut. The city has a massive flag football community with NFL FLAG leagues, adult leagues, and a growing high school scene across LA County.',
    leagues: [
      { name: 'NFL FLAG Los Angeles', url: 'https://nflflag.com', description: 'Official NFL FLAG youth leagues across Los Angeles County.' },
      { name: 'LA Rams Flag Football', url: 'https://nflflag.com', description: 'LA Rams supported NFL FLAG programs across Southern California.' },
      { name: 'LA Parks & Recreation', url: 'https://www.laparks.org', description: 'Adult flag football leagues through LA Department of Parks and Recreation.' },
    ],
    highSchool: 'California high schools are rapidly expanding girls flag football programs. With the 2028 Olympics coming to LA, interest in the sport is at an all-time high.',
    keywords: ['flag football Los Angeles', 'flag football LA California', 'girls flag football Los Angeles', 'NFL FLAG LA', 'Olympic flag football 2028 Los Angeles'],
  },
  'atlanta-georgia': {
    name: 'Atlanta',
    state: 'Georgia',
    fullName: 'Atlanta, Georgia',
    description: 'Atlanta is one of the South\'s premier flag football cities. Georgia has been expanding girls high school flag football programs rapidly, and Atlanta boasts a strong NFL FLAG youth scene and competitive adult leagues.',
    leagues: [
      { name: 'NFL FLAG Atlanta', url: 'https://nflflag.com', description: 'Official NFL FLAG youth leagues across the Atlanta metro area.' },
      { name: 'Georgia High School Association', url: 'https://ghsa.net', description: 'GHSA sanctioned girls flag football across Georgia high schools.' },
      { name: 'Atlanta Parks & Recreation', url: 'https://www.atlantaga.gov', description: 'Adult flag football leagues through the City of Atlanta.' },
    ],
    highSchool: 'Georgia is one of the fastest-growing states for girls high school flag football. Atlanta-area schools are leading the charge with highly competitive varsity programs.',
    keywords: ['flag football Atlanta', 'flag football Atlanta Georgia', 'girls flag football Atlanta', 'NFL FLAG Atlanta', 'adult flag football Atlanta GA'],
  },
  'chicago-illinois': {
    name: 'Chicago',
    state: 'Illinois',
    fullName: 'Chicago, Illinois',
    description: 'Chicago has a thriving flag football community year-round. With indoor and outdoor leagues, a strong NFL FLAG youth program, and growing high school flag football, the Windy City is a major flag football hub in the Midwest.',
    leagues: [
      { name: 'NFL FLAG Chicago', url: 'https://nflflag.com', description: 'Official NFL FLAG youth leagues across the Chicago area.' },
      { name: 'Chicago Park District', url: 'https://www.chicagoparkdistrict.com', description: 'Flag football leagues run by the Chicago Park District.' },
      { name: 'Illinois High School Association', url: 'https://ihsa.org', description: 'IHSA sanctioned high school flag football programs across Illinois.' },
    ],
    highSchool: 'Illinois high schools are adding girls flag football programs at a growing rate. Chicago Public Schools has been expanding its flag football offerings each year.',
    keywords: ['flag football Chicago', 'flag football Chicago Illinois', 'girls flag football Chicago', 'NFL FLAG Chicago', 'adult flag football Chicago IL'],
  },
  'phoenix-arizona': {
    name: 'Phoenix',
    state: 'Arizona',
    fullName: 'Phoenix, Arizona',
    description: 'Phoenix is one of the fastest-growing flag football markets in the Southwest. With year-round warm weather, outdoor flag football thrives in Phoenix, and the city has a strong NFL FLAG youth program and adult league scene.',
    leagues: [
      { name: 'NFL FLAG Phoenix', url: 'https://nflflag.com', description: 'Official NFL FLAG youth leagues across the Phoenix metro area.' },
      { name: 'Arizona Interscholastic Association', url: 'https://aiaonline.org', description: 'AIA sanctioned flag football programs across Arizona high schools.' },
      { name: 'Phoenix Parks & Recreation', url: 'https://www.phoenix.gov', description: 'Adult flag football leagues through the City of Phoenix.' },
    ],
    highSchool: 'Arizona high schools have embraced girls flag football with competitive programs across the Phoenix metro area and beyond.',
    keywords: ['flag football Phoenix', 'flag football Phoenix Arizona', 'girls flag football Phoenix', 'NFL FLAG Phoenix', 'adult flag football Phoenix AZ'],
  },
  'new-york-new-york': {
    name: 'New York City',
    state: 'New York',
    fullName: 'New York City, New York',
    description: 'New York City has a massive and diverse flag football community. From youth NFL FLAG leagues in all five boroughs to competitive adult leagues, NYC is one of the biggest flag football markets in the United States.',
    leagues: [
      { name: 'NFL FLAG New York', url: 'https://nflflag.com', description: 'Official NFL FLAG youth leagues across New York City\'s five boroughs.' },
      { name: 'NYC Parks Flag Football', url: 'https://www.nycgovparks.org', description: 'Flag football programs through NYC Parks and Recreation.' },
      { name: 'New York State Public High School Athletic Association', url: 'https://nysphsaa.org', description: 'NYSPHSAA sanctioned high school flag football programs.' },
    ],
    highSchool: 'New York City high schools are expanding girls flag football programs across all five boroughs, giving thousands of young athletes new opportunities to compete.',
    keywords: ['flag football New York', 'flag football NYC', 'girls flag football New York', 'NFL FLAG New York City', 'adult flag football NYC'],
  },
  'las-vegas-nevada': {
    name: 'Las Vegas',
    state: 'Nevada',
    fullName: 'Las Vegas, Nevada',
    description: 'Las Vegas is a major flag football hub, hosting national tournaments and boasting one of the most competitive local flag football scenes in the country. Nevada has also been a leader in girls high school flag football.',
    leagues: [
      { name: 'NFL FLAG Las Vegas', url: 'https://nflflag.com', description: 'Official NFL FLAG youth leagues across the Las Vegas Valley.' },
      { name: 'Nevada Interscholastic Activities Association', url: 'https://niaa.com', description: 'NIAA sanctioned girls flag football — Nevada is a national leader in the sport.' },
      { name: 'Las Vegas Flag Football Tournaments', url: 'https://nflflag.com', description: 'Las Vegas hosts major national flag football tournaments throughout the year.' },
    ],
    highSchool: 'Nevada was one of the first states to establish girls varsity flag football. Las Vegas high schools compete in some of the most competitive girls flag football leagues in the country.',
    keywords: ['flag football Las Vegas', 'flag football Las Vegas Nevada', 'girls flag football Las Vegas', 'NFL FLAG Las Vegas', 'flag football tournaments Las Vegas'],
  },
  'seattle-washington': {
    name: 'Seattle',
    state: 'Washington',
    fullName: 'Seattle, Washington',
    description: 'Seattle has a passionate flag football community in the Pacific Northwest. With NFL FLAG youth programs, adult leagues, and growing high school programs, Seattle is an emerging flag football market.',
    leagues: [
      { name: 'NFL FLAG Seattle', url: 'https://nflflag.com', description: 'Official NFL FLAG youth leagues across the Seattle area.' },
      { name: 'Washington Interscholastic Activities Association', url: 'https://wiaa.com', description: 'WIAA sanctioned flag football programs across Washington state.' },
      { name: 'Seattle Parks & Recreation', url: 'https://www.seattle.gov', description: 'Adult flag football leagues through Seattle Parks and Recreation.' },
    ],
    highSchool: 'Washington state high schools are growing their girls flag football programs, with Seattle-area schools leading the expansion in the Pacific Northwest.',
    keywords: ['flag football Seattle', 'flag football Seattle Washington', 'girls flag football Seattle', 'NFL FLAG Seattle', 'adult flag football Seattle WA'],
  },
}

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }))
}

export async function generateMetadata({ params }) {
  const city = cities[params.city]
  if (!city) return {}
  return {
    title: `Flag Football Leagues in ${city.fullName} | Flag Football News`,
    description: `Find flag football leagues in ${city.fullName}. Youth NFL FLAG programs, adult leagues, and girls high school flag football in ${city.name}, ${city.state}.`,
    alternates: {
      canonical: `https://www.theflagfootballhub.com/leagues/${params.city}`,
    },
  }
}

export default function CityPage({ params }) {
  const city = cities[params.city]
  if (!city) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsOrganization',
    name: `Flag Football in ${city.fullName}`,
    description: city.description,
    sport: 'Flag Football',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: 'US',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Header */}
        <div className="mb-10">
          <span className="category-badge mb-3 inline-block">Local Leagues</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Flag Football in {city.fullName}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">{city.description}</p>
        </div>

        {/* Leagues */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Flag Football Leagues in {city.name}</h2>
          <div className="space-y-4">
            {city.leagues.map((league) => (
              <div key={league.name} className="bg-gray-50 rounded-xl p-6 flex items-start gap-4">
                <div className="text-2xl">🏈</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{league.name}</h3>
                  <p className="text-gray-600 text-sm">{league.description}</p>
                  <a
                    href={league.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#003F8A] text-sm font-medium hover:underline mt-2 inline-block"
                  >
                    Visit website →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High School */}
        <div className="mb-12 bg-[#003F8A] text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">🏫 Girls High School Flag Football in {city.name}</h2>
          <p className="text-blue-100 leading-relaxed">{city.highSchool}</p>
        </div>

        {/* How to find leagues */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Find Flag Football in {city.name}</h2>
          <div className="space-y-3 text-gray-600">
            <p>🔍 Visit <a href="https://nflflag.com" target="_blank" rel="noopener noreferrer" className="text-[#003F8A] underline">nflflag.com</a> and use the league finder to search for youth leagues near you.</p>
            <p>🏫 Contact your local school district to ask about girls varsity flag football programs.</p>
            <p>🏙️ Check your city\'s parks and recreation department website for adult flag football leagues.</p>
            <p>📱 Search for "{city.name} flag football" on Facebook Groups to find local adult leagues and pickup games.</p>
          </div>
        </div>

        {/* Keywords / Topics */}
        <div className="mb-12">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Related Topics</p>
          <div className="flex flex-wrap gap-2">
            {city.keywords.map((kw) => (
              <span key={kw} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{kw}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Know Something We Don't?</h2>
          <p className="text-gray-600 mb-4">Help us keep our {city.name} flag football coverage accurate. Send us tips about local leagues, tournaments, or standout players.</p>
          <a
            href="/contact"
            className="inline-block bg-[#003F8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-8">
          <a href="/" className="text-[#003F8A] font-semibold hover:underline">← Back to Flag Football News</a>
        </div>

      </div>
    </>
  )
}
