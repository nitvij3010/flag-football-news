/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'pbs.twimg.com',
      'abs.twimg.com',
      'instagram.com',
      'cdninstagram.com',
      'fbcdn.net',
      'scontent.fbom1-1.fna.fbcdn.net',
      'ifzkckewwjbiwzymbutw.supabase.co'
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
