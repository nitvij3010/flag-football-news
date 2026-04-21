export const metadata = {
  title: 'Privacy Policy | Flag Football News',
  description: 'Privacy Policy for Flag Football News. Learn how we collect, use, and protect your data.',
  alternates: {
    canonical: 'https://www.flagfootballnews.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-gray-500 mb-10">Last updated: January 1, 2026</p>

      <div className="prose max-w-none space-y-8 text-gray-700">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
          <p>Flag Football News ("we," "us," or "our") operates flagfootballnews.com. This Privacy Policy explains how we collect, use, and protect information when you visit our website. By using our site, you agree to the terms of this policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Usage Data:</strong> Pages visited, time spent on pages, browser type, and referring URLs collected automatically via analytics tools.</li>
            <li><strong>Cookies:</strong> Small files stored on your device to improve your browsing experience.</li>
            <li><strong>Contact Information:</strong> If you contact us via our contact form, we collect your name and email address.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To operate and improve our website</li>
            <li>To analyze traffic and understand how visitors use our site</li>
            <li>To respond to your inquiries</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies</h2>
          <p>We use cookies for analytics purposes. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our site may not function properly.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Services</h2>
          <p>We may use third-party services including:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Google Analytics:</strong> For website traffic analysis. Google's privacy policy applies.</li>
            <li><strong>Supabase:</strong> For secure data storage.</li>
            <li><strong>Vercel:</strong> For website hosting.</li>
            <li><strong>Social Media Embeds:</strong> We embed posts from Twitter/X, Instagram, and Facebook. Their respective privacy policies apply.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
          <p>We retain usage data for up to 26 months. Contact form submissions are retained for up to 12 months. You may request deletion of your data at any time by contacting us.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Children's Privacy</h2>
          <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Your Rights</h2>
          <p>You have the right to access, correct, or delete any personal information we hold about you. To exercise these rights, please contact us at the email below.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2"><strong>Email:</strong> theflagfootballhub@gmail.com</p>
          <p><strong>Website:</strong> flagfootballnews.com/contact</p>
        </section>

      </div>
    </div>
  )
}
