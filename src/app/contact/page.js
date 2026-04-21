export const metadata = {
  title: 'Contact Us | Flag Football News',
  description: 'Get in touch with the Flag Football News editorial team. Send us tips, story ideas, or corrections.',
  alternates: {
    canonical: 'https://www.flagfootballnews.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-gray-500 text-lg mb-10">
        Have a tip, story idea, or correction? We want to hear from you. Reach out directly by email and we will get back to you within 2 business days.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">📰</div>
          <h3 className="font-bold text-gray-900 mb-1">Editorial</h3>
          <p className="text-sm text-gray-500 mb-2">Story tips & corrections</p>
          <a href="mailto:editorial@flagfootballnews.com" className="text-[#003F8A] text-sm font-medium hover:underline">
            editorial@flagfootballnews.com
          </a>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">🤝</div>
          <h3 className="font-bold text-gray-900 mb-1">Partnerships</h3>
          <p className="text-sm text-gray-500 mb-2">Sponsorships & collaborations</p>
          <a href="mailto:partnerships@flagfootballnews.com" className="text-[#003F8A] text-sm font-medium hover:underline">
            partnerships@flagfootballnews.com
          </a>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">⚖️</div>
          <h3 className="font-bold text-gray-900 mb-1">Legal</h3>
          <p className="text-sm text-gray-500 mb-2">Privacy & legal inquiries</p>
          <a href="mailto:legal@flagfootballnews.com" className="text-[#003F8A] text-sm font-medium hover:underline">
            legal@flagfootballnews.com
          </a>
        </div>
      </div>

      <div className="bg-[#003F8A] text-white rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold mb-2">General Inquiries</h2>
        <p className="text-blue-100 mb-4">For anything else, email us at:</p>
        <a
          href="mailto:hello@flagfootballnews.com"
          className="text-white text-xl font-bold hover:underline"
        >
          hello@flagfootballnews.com
        </a>
        <p className="text-blue-200 text-sm mt-4">We typically respond within 2 business days.</p>
      </div>

    </div>
  )
}
