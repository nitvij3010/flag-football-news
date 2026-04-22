export const metadata = {
  title: 'Contact Us | Flag Football News',
  description: 'Get in touch with the Flag Football News team. Send us tips, story ideas, or corrections.',
  alternates: {
    canonical: 'https://www.theflagfootballhub.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-gray-500 text-lg mb-10">
        Have a tip, story idea, correction, or partnership inquiry? We want to hear from you. Email us directly and we will get back to you within 2 business days.
      </p>

      <div className="bg-[#003F8A] text-white rounded-2xl p-10 text-center">
        <div className="text-5xl mb-4">🏈</div>
        <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
        <p className="text-blue-100 mb-6">For all inquiries including story tips, corrections, and partnerships:</p>
        <a
          href="mailto:theflagfootballhub@gmail.com"
          className="inline-block bg-white text-[#003F8A] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition"
        >
          theflagfootballhub@gmail.com
        </a>
        <p className="text-blue-200 text-sm mt-6">We typically respond within 2 business days.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 rounded-xl p-5">
          <div className="text-2xl mb-2">📰</div>
          <p className="font-semibold text-gray-800 text-sm">Story Tips</p>
          <p className="text-gray-500 text-xs mt-1">Share game results or player spotlights</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-5">
          <div className="text-2xl mb-2">✏️</div>
          <p className="font-semibold text-gray-800 text-sm">Corrections</p>
          <p className="text-gray-500 text-xs mt-1">Help us keep our reporting accurate</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-5">
          <div className="text-2xl mb-2">🤝</div>
          <p className="font-semibold text-gray-800 text-sm">Partnerships</p>
          <p className="text-gray-500 text-xs mt-1">Sponsorships and collaborations</p>
        </div>
      </div>

    </div>
  )
}
