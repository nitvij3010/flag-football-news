import { DM_Sans, DM_Mono } from 'next/font/google'
import Image from 'next/image'
import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import MobileMenu from '@/components/MobileMenu'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
})

export const metadata = {
  title: 'Flag Football News | USA Flag Football Updates',
  description: 'The latest flag football news, tournament updates, match reports, and league coverage across the USA. Your #1 source for flag football.',
  metadataBase: new URL('https://www.theflagfootballhub.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'XVbOmpmac4Zq_UjqN1o1ffQIsPtl31Xajg4MaXxXRp0',
  },
  openGraph: {
    siteName: 'Flag Football News',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body className={`${dmSans.variable} ${dmMono.variable} font-sans bg-white text-gray-900`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QR478VP32J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QR478VP32J');
          `}
        </Script>
        <header className="bg-[#003F8A] text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="The Flag Football Hub"
                width={180}
                height={68}
                priority
                className="rounded-lg"
              />
            </a>
            {/* Desktop nav */}
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="/category/match-reports" className="hover:text-yellow-300 transition">Match Reports</a>
              <a href="/category/tournament-news" className="hover:text-yellow-300 transition">Tournaments</a>
              <a href="/category/olympic-2028" className="hover:text-yellow-300 transition">Olympic 2028</a>
              <a href="/category/player-spotlight" className="hover:text-yellow-300 transition">Players</a>
              <a href="/category/usa-league-news" className="hover:text-yellow-300 transition">Leagues</a>
              <a href="/category/rules-how-to-play" className="hover:text-yellow-300 transition">Rules</a>
            </nav>
            {/* Mobile hamburger */}
            <MobileMenu />
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <Analytics />
        <footer className="bg-gray-900 text-gray-400 text-sm py-10 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="mb-2">© {new Date().getFullYear()} Flag Football News. All rights reserved.</p>
            <p>Coverage of USA flag football leagues, tournaments, and high school flag football.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-6">
              <a href="/leagues" className="hover:text-white transition">Find Leagues</a>
              <a href="/about" className="hover:text-white transition">About</a>
              <a href="/contact" className="hover:text-white transition">Contact</a>
              <a href="/editorial" className="hover:text-white transition">Editorial Policy</a>
              <a href="/faq" className="hover:text-white transition">FAQ</a>
              <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition">Terms of Service</a>
              <a href="/sitemap.xml" className="hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
