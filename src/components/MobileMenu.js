'use client'

import { useState } from 'react'

const navLinks = [
  { href: '/category/match-reports', label: 'Match Reports' },
  { href: '/category/tournament-news', label: 'Tournaments' },
  { href: '/category/olympic-2028', label: 'Olympic 2028' },
  { href: '/category/player-spotlight', label: 'Players' },
  { href: '/category/usa-league-news', label: 'Leagues' },
  { href: '/category/rules-how-to-play', label: 'Rules' },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#003F8A] z-50 shadow-lg border-t border-blue-700">
          <nav className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white py-3 border-b border-blue-700 last:border-0 font-medium hover:text-yellow-300 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
