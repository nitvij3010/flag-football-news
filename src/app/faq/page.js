export const metadata = {
  title: 'Flag Football FAQ | Frequently Asked Questions | Flag Football News',
  description: 'Answers to the most common questions about flag football — rules, leagues, high school programs, and the 2028 Olympics.',
  alternates: {
    canonical: 'https://www.flagfootballnews.com/faq',
  },
}

const faqs = [
  {
    question: 'What is flag football?',
    answer: 'Flag football is a non-contact version of American football where players wear flags attached to their waist. Instead of tackling, the defensive team stops a play by pulling the ball carrier\'s flag. It is played at all levels — from youth leagues to high school varsity programs to the international stage.',
  },
  {
    question: 'How is flag football different from tackle football?',
    answer: 'The main difference is that flag football has no tackling, blocking, or physical contact. Players wear flags on a belt around their waist, and defenders must pull a flag to end a play. Flag football uses the same basic rules as tackle football — first downs, touchdowns, and scoring — but is safer and faster-paced.',
  },
  {
    question: 'Is flag football in the 2028 Olympics?',
    answer: 'Yes! Flag football will make its historic Olympic debut at the Los Angeles 2028 Summer Olympics. This is a massive milestone for the sport and is expected to significantly grow its popularity worldwide, especially in the United States.',
  },
  {
    question: 'How many players are on a flag football team?',
    answer: 'Most flag football formats are played 5-on-5 or 7-on-7, depending on the league and age group. NFL FLAG, the most popular youth league in the USA, primarily uses a 5-on-5 format. High school varsity flag football typically uses 7-on-7.',
  },
  {
    question: 'What are the field dimensions in flag football?',
    answer: 'Field sizes vary by league. NFL FLAG youth games are typically played on a 30-yard by 70-yard field with 10-yard end zones. High school varsity flag football is often played on a standard 53-yard wide field, 80 yards long with 10-yard end zones.',
  },
  {
    question: 'Is there girls flag football in high schools?',
    answer: 'Yes, and it is one of the fastest-growing sports in American high schools! States like Florida, Texas, California, Georgia, and Nevada have established varsity girls flag football programs. Many more states are adding programs every year. Flag Football News covers girls high school flag football extensively.',
  },
  {
    question: 'How do I find a flag football league near me?',
    answer: 'The best way to find a local league is through NFL FLAG\'s league finder at nflflag.com, or through USA Football at usafootball.com. Many parks and recreation departments also run adult flag football leagues. Search for "[your city] flag football league" to find local options.',
  },
  {
    question: 'What equipment do I need to play flag football?',
    answer: 'Flag football requires very little equipment compared to tackle football. You need a flag belt (usually provided by the league), athletic shoes or cleats, comfortable athletic clothing, and a mouthguard is recommended. Most leagues provide the flags and footballs.',
  },
  {
    question: 'What is NFL FLAG?',
    answer: 'NFL FLAG is the official youth flag football program of the National Football League. It is the largest youth flag football organization in the USA, with over 800,000 players across thousands of leagues nationwide. NFL FLAG offers programs for boys and girls ages 5 through 17.',
  },
  {
    question: 'What is USA Football?',
    answer: 'USA Football is the national governing body for American football in the United States, including flag football. It is recognized by the US Olympic & Paralympic Committee and sets the standards for player safety, coaching education, and youth football across the country.',
  },
  {
    question: 'Can girls play flag football?',
    answer: 'Absolutely! Flag football is one of the fastest-growing sports for girls in the United States. Many states now offer varsity girls flag football at the high school level, and NFL FLAG has dedicated girls programs. The sport is inclusive and welcoming to players of all backgrounds.',
  },
  {
    question: 'How do I submit a story tip to Flag Football News?',
    answer: 'We love hearing from the flag football community! If you have a story tip, game result, or player to spotlight, email us at editorial@flagfootballnews.com. We cover flag football at every level across the USA.',
  },
]

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-12">

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Flag Football FAQ</h1>
        <p className="text-gray-500 text-lg mb-10">
          Everything you need to know about flag football — rules, leagues, high school programs, and more.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h2>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#003F8A] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Still Have Questions?</h2>
          <p className="text-blue-100 mb-4">Our team is happy to help.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#003F8A] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Contact Us
          </a>
        </div>

      </div>
    </>
  )
}
