export const metadata = {
  title: 'Editorial Policy | Flag Football News',
  description: 'Learn how Flag Football News researches, writes, and fact-checks our flag football coverage.',
  alternates: {
    canonical: 'https://www.flagfootballnews.com/editorial',
  },
}

export default function EditorialPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Editorial Policy</h1>
      <p className="text-gray-500 mb-10">Last updated: January 1, 2026</p>

      <div className="space-y-8 text-gray-700">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Commitment to Accuracy</h2>
          <p>Flag Football News is committed to providing accurate, timely, and fair coverage of flag football across the United States. We hold ourselves to the standards of professional sports journalism. When we make errors, we correct them promptly and transparently.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Use of Artificial Intelligence</h2>
          <p>We are transparent about our use of AI tools in our editorial process. Here is exactly how we use AI:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Article Drafting:</strong> Some articles on Flag Football News are initially drafted with the assistance of Claude AI by Anthropic. These drafts are based on prompts written by our editorial team that include specific facts, categories, and guidelines.</li>
            <li><strong>Editorial Review:</strong> All AI-assisted content is reviewed by our editorial team for accuracy, tone, and factual correctness before publication.</li>
            <li><strong>Source Verification:</strong> We verify all factual claims against official sources including USA Football, NFL FLAG, IFAF, and state athletic associations.</li>
            <li><strong>Human Voice:</strong> Our writers add their expertise, regional knowledge, and sports journalism experience to ensure every article reflects real understanding of the sport.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Sources</h2>
          <p>Flag Football News relies on the following primary sources for our reporting:</p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>USA Football (usafootball.com) — the national governing body for football in the USA</li>
            <li>NFL FLAG (nflflag.com) — the official youth flag football program of the NFL</li>
            <li>IFAF (ifaf.org) — the International Federation of American Football</li>
            <li>State high school athletic associations</li>
            <li>Official team and league social media accounts</li>
            <li>Press releases from tournaments and leagues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Independence & Sponsored Content</h2>
          <p>Flag Football News maintains full editorial independence. We do not accept payment for editorial coverage. If we ever publish sponsored content or paid partnerships, it will be clearly labeled as "Sponsored" or "Advertisement" at the top of the article.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Corrections Policy</h2>
          <p>If you spot an error in any of our articles, please contact us at <strong>theflagfootballhub@gmail.com</strong>. We review all correction requests and update articles promptly when errors are confirmed. Significant corrections are noted at the bottom of the affected article.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Images & Embeds</h2>
          <p>Flag Football News does not download or repost images from social media. All match and event images on our site are embedded directly from official social media accounts including NFL FLAG, USA Football, IFAF, and verified team accounts. We link back to the original source for every embed. If an embedded post is deleted by its original author, it will no longer appear on our site.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Our Editorial Team</h2>
          <p>For story tips, corrections, or editorial inquiries:</p>
          <p className="mt-2"><strong>Email:</strong> theflagfootballhub@gmail.com</p>
          <p><strong>Contact Form:</strong> <a href="/contact" className="text-[#003F8A] underline">flagfootballnews.com/contact</a></p>
        </section>

      </div>
    </div>
  )
}
