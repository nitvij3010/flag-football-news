export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.theflagfootballhub.com/sitemap.xml',
    host: 'https://www.theflagfootballhub.com',
  }
}
