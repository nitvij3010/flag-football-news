export const metadata = {
  title: 'Terms of Service | Flag Football News',
  description: 'Terms of Service for Flag Football News. Read our terms before using our website.',
  alternates: {
    canonical: 'https://www.flagfootballnews.com/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
      <p className="text-gray-500 mb-10">Last updated: January 1, 2026</p>

      <div className="space-y-8 text-gray-700">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using Flag Football News ("the Site"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Use of Content</h2>
          <p>All content on Flag Football News — including articles, text, graphics, and design — is owned by Flag Football News unless otherwise noted. You may:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Read and share links to our articles</li>
            <li>Quote brief excerpts with proper attribution and a link back to the original article</li>
          </ul>
          <p className="mt-3">You may not:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Republish our full articles without written permission</li>
            <li>Scrape or copy our content for commercial use</li>
            <li>Use our content in a way that misrepresents its source</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Accuracy of Information</h2>
          <p>Flag Football News strives to provide accurate and up-to-date information about flag football. However, we make no warranties or representations about the accuracy, completeness, or reliability of any content on the Site. Sports news and statistics can change rapidly, and we cannot guarantee that all information is current at the time of reading.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. AI-Generated Content</h2>
          <p>Some articles on Flag Football News are assisted by artificial intelligence tools. All AI-assisted content is reviewed for accuracy and edited by our editorial team before publication. We are committed to transparency about our use of AI in our Editorial Policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Links</h2>
          <p>Our Site may contain links to third-party websites including USA Football, NFL FLAG, and IFAF. These links are provided for your convenience. We have no control over the content of those sites and accept no responsibility for them.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Social Media Embeds</h2>
          <p>We embed posts from official social media accounts including Twitter/X, Instagram, and Facebook. These embeds are the property of their respective owners. If an embedded post is removed by its original author, it will no longer appear on our site.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
          <p>Flag Football News shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the Site or reliance on any information provided. Your use of the Site is at your own risk.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any changes constitutes your acceptance of the new terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">9. Governing Law</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of the United States of America.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mt-2"><strong>Email:</strong> legal@flagfootballnews.com</p>
        </section>

      </div>
    </div>
  )
}
