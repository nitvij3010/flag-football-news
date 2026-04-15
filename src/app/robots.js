export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.flagfootballnews.com/sitemap.xml',
    host: 'https://www.flagfootballnews.com',
  }
}
