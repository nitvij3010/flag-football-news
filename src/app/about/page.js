export const metadata = {
  title: 'About Us | Flag Football News',
  description: 'Learn about Flag Football News — the leading source for USA flag football coverage, tournament news, and high school flag football updates.',
  alternates: {
    canonical: 'https://www.flagfootballnews.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* Hero */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Flag Football News</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          The United States' dedicated source for flag football news, tournament coverage, league updates, and the growing world of girls high school flag football.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-[#003F8A] text-white rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-blue-100 text-lg leading-relaxed">
          Flag Football News exists to grow the sport of flag football across America. We cover every level — from youth NFL FLAG leagues to girls varsity high school programs to the road to the 2028 Los Angeles Olympics. Our goal is to give flag football the serious sports journalism it deserves.
        </p>
      </div>

      {/* What We Cover */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Cover</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Match Reports', desc: 'Game-by-game coverage of flag football tournaments and league play across the USA.' },
            { title: 'Girls High School Flag Football', desc: 'Dedicated coverage of the fastest-growing sport in American high schools.' },
            { title: 'Tournament News', desc: 'Updates from NFL FLAG, USA Football, and IFAF sanctioned tournaments.' },
            { title: 'Olympic 2028', desc: 'Following flag football\'s historic debut at the Los Angeles 2028 Olympics.' },
            { title: 'Player Spotlights', desc: 'Profiles of standout players at every level of the game.' },
            { title: 'USA League News', desc: 'Coverage of adult flag football leagues in cities across the country.' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: 'Marcus J. Thompson',
              role: 'Senior Sports Writer',
              bio: 'Based in Dallas, Texas, Marcus has covered flag football for over a decade. He follows USA Football events nationwide and is passionate about the sport\'s growth at every level.',
            },
            {
              name: 'Brittany Callahan',
              role: 'Girls Flag Football Correspondent',
              bio: 'Based in Atlanta, Brittany specializes in girls and women\'s flag football. She has been instrumental in bringing attention to high school varsity programs across the South.',
            },
            {
              name: 'Derek Okafor',
              role: 'West Coast Editor',
              bio: 'A former flag football player turned journalist based in Los Angeles, Derek covers NFL FLAG leagues, tournaments, and Olympic flag football developments.',
            },
            {
              name: 'Sarah Montoya',
              role: 'Tournament & League Reporter',
              bio: 'Based in Miami, Sarah specializes in flag football tournaments and the growing flag football scene across Florida and the Sun Belt states.',
            },
          ].map((author) => (
            <div key={author.name} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#003F8A] flex items-center justify-center text-white font-bold text-lg mb-4">
                {author.name.charAt(0)}
              </div>
              <h3 className="font-bold text-gray-900">{author.name}</h3>
              <p className="text-[#003F8A] text-sm font-medium mb-2">{author.role}</p>
              <p className="text-gray-600 text-sm">{author.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Sources</h2>
        <p className="text-gray-600 mb-4">
          Flag Football News references official sources including:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>USA Football (usafootball.com) — the national governing body for football in the USA</li>
          <li>NFL FLAG (nflflag.com) — the official youth flag football program of the NFL</li>
          <li>IFAF (ifaf.org) — the International Federation of American Football</li>
          <li>State high school athletic associations across the USA</li>
          <li>Official team and league social media accounts</li>
        </ul>
      </div>

      {/* Contact CTA */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Get In Touch</h2>
        <p className="text-gray-600 mb-4">Have a tip, story idea, or want to be featured? We'd love to hear from you.</p>
        <a
          href="/contact"
          className="inline-block bg-[#003F8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Contact Us
        </a>
      </div>

    </div>
  )
}
