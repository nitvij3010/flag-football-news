const Anthropic = require('@anthropic-ai/sdk')
const { createClient } = require('@supabase/supabase-js')

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

const authors = [
  {
    name: 'Marcus J. Thompson',
    bio: 'Marcus is a sports journalist based in Dallas, Texas, covering flag football at every level from youth leagues to the national stage. He has followed USA Football for over a decade.',
    avatar: '',
  },
  {
    name: 'Brittany Callahan',
    bio: 'Brittany covers girls and womens flag football across the United States. Based in Atlanta, she is passionate about growing the sport at the high school level.',
    avatar: '',
  },
  {
    name: 'Derek Okafor',
    bio: 'Derek is a former flag football player turned journalist. He covers NFL FLAG leagues, tournaments, and Olympic flag football developments from Los Angeles.',
    avatar: '',
  },
  {
    name: 'Sarah Montoya',
    bio: 'Sarah is a sports writer from Miami specializing in flag football tournaments, player spotlights, and the growing flag football scene in the Sun Belt states.',
    avatar: '',
  },
]

const categories = [
  'Match Reports',
  'Tournament News',
  'Olympic 2028',
  'Player Spotlight',
  'Rules & How To Play',
  'USA League News',
]

const topicPrompts = [
  'Write about a recent girls high school flag football tournament in Texas',
  'Write about NFL FLAG youth league updates in California',
  'Write about flag football being included in the 2028 Los Angeles Olympics',
  'Write about a top girls high school flag football player to watch',
  'Write about how flag football rules differ from tackle football for beginners',
  'Write about flag football league growth in Florida high schools',
  'Write about a USA Football national flag football championship',
  'Write about flag football opportunities for girls in the Midwest',
  'Write about NFL teams supporting local flag football leagues',
  'Write about flag football equipment and gear guide for beginners',
]

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function estimateReadTime(content) {
  const wordCount = content.replace(/<[^>]+>/g, '').split(/\s+/).length
  return Math.max(3, Math.ceil(wordCount / 200))
}

async function generateArticle() {
  const author = getRandomItem(authors)
  const category = getRandomItem(categories)
  const topic = getRandomItem(topicPrompts)

  console.log(`Generating article: ${topic}`)

  const prompt = `You are an American sports journalist writing for FlagFootballNews.com, a USA-focused flag football news website.

Write a complete, SEO-optimized news article about the following topic:
"${topic}"

STRICT RULES:
- Use American English spelling only
- Use yards and feet for all measurements
- Format all dates as Month Day, Year (example: April 15, 2026)
- Reference real organizations like USA Football, NFL FLAG, or IFAF where relevant
- Target long-tail keywords naturally (example: "girls flag football leagues in Texas")
- Category for this article: ${category}
- Write in the voice of an American sports journalist
- Girls high school flag football should be mentioned when relevant

OUTPUT FORMAT — return only valid JSON, no markdown, no explanation:
{
  "title": "Article title here",
  "slug": "url-friendly-slug-here",
  "excerpt": "One sentence summary under 160 characters",
  "content": "<p>Full HTML article content here with h2, h3, p, ul, li tags. Minimum 600 words. Do not include any image placeholders or embed placeholders.</p>",
  "meta_title": "SEO meta title under 60 characters",
  "meta_desc": "SEO meta description under 155 characters",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"]
}`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }],
  })

  const responseText = message.content[0].text.trim()
  const articleData = JSON.parse(responseText)

  const slug = articleData.slug || slugify(articleData.title)
  const readTime = estimateReadTime(articleData.content)

  const { error } = await supabase.from('articles').insert({
    title: articleData.title,
    slug: slug,
    category: category,
    excerpt: articleData.excerpt,
    content: articleData.content,
    author_name: author.name,
    author_bio: author.bio,
    author_avatar: author.avatar,
    hero_image: '',
    hero_image_alt: '',
    photo_credit_name: '',
    photo_credit_url: '',
    meta_title: articleData.meta_title,
    meta_desc: articleData.meta_desc,
    keywords: articleData.keywords,
    read_time: readTime,
    published_at: new Date().toISOString(),
    is_published: true,
  })

  if (error) {
    console.error('Supabase insert error:', error)
    process.exit(1)
  }

  console.log(`Article published: ${articleData.title}`)
}

generateArticle().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
