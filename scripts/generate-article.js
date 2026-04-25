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

// Each topic is paired with its correct category
const topicPool = [
  // Match Reports
  { category: 'Match Reports', topic: 'Write a match report about a girls high school flag football championship game in Texas' },
  { category: 'Match Reports', topic: 'Write a match report about an NFL FLAG regional championship tournament in Florida' },
  { category: 'Match Reports', topic: 'Write a match report about a USA Football national flag football tournament final' },
  { category: 'Match Reports', topic: 'Write a match report about a girls varsity flag football rivalry game in California' },

  // Tournament News
  { category: 'Tournament News', topic: 'Write about an upcoming NFL FLAG national championship tournament and what to expect' },
  { category: 'Tournament News', topic: 'Write about a major girls flag football tournament happening in Las Vegas Nevada' },
  { category: 'Tournament News', topic: 'Write about the USA Football flag football national championship tournament schedule' },
  { category: 'Tournament News', topic: 'Write about a spring flag football tournament series for high school girls across the South' },

  // Olympic 2028
  { category: 'Olympic 2028', topic: 'Write about flag football\'s inclusion in the 2028 Los Angeles Olympics and what it means for the sport' },
  { category: 'Olympic 2028', topic: 'Write about the USA national flag football team preparing for the 2028 Olympics' },
  { category: 'Olympic 2028', topic: 'Write about how the 2028 Olympics is driving growth in youth flag football programs across the USA' },

  // Player Spotlight
  { category: 'Player Spotlight', topic: 'Write a player spotlight on a standout girls high school flag football quarterback in Florida' },
  { category: 'Player Spotlight', topic: 'Write a player spotlight on a top girls flag football wide receiver in Texas high schools' },
  { category: 'Player Spotlight', topic: 'Write a player spotlight on a rising NFL FLAG youth flag football star in California' },
  { category: 'Player Spotlight', topic: 'Write a player spotlight on a college-bound girls flag football player from Georgia' },

  // Rules & How To Play
  { category: 'Rules & How To Play', topic: 'Write a beginner\'s guide explaining the basic rules of flag football for new players' },
  { category: 'Rules & How To Play', topic: 'Write about the key differences between flag football rules and tackle football rules' },
  { category: 'Rules & How To Play', topic: 'Write a guide on flag football positions and what each player does on the field' },
  { category: 'Rules & How To Play', topic: 'Write a guide on flag football scoring rules, penalties, and how games are officiated' },

  // USA League News
  { category: 'USA League News', topic: 'Write about the growth of girls flag football leagues in Texas high schools in 2026' },
  { category: 'USA League News', topic: 'Write about NFL FLAG youth league expansion into new cities across the USA' },
  { category: 'USA League News', topic: 'Write about adult flag football league growth in major US cities like Miami and Atlanta' },
  { category: 'USA League News', topic: 'Write about a state high school athletic association adding girls flag football as an official varsity sport' },
  { category: 'USA League News', topic: 'Write about NFL teams supporting local flag football leagues in their home cities' },
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
  const topicItem = getRandomItem(topicPool)
  const category = topicItem.category
  const topic = topicItem.topic

  console.log(`Generating article: ${topic}`)
  console.log(`Category: ${category}`)

  const prompt = `You are an American sports journalist writing for TheFlagFootballHub.com, a USA-focused flag football news website.

Write a complete, SEO-optimized news article about the following topic:
"${topic}"

STRICT RULES:
- Use American English spelling only
- Use yards and feet for all measurements
- Format all dates as Month Day, Year (example: April 15, 2026)
- Reference real organizations like USA Football, NFL FLAG, or IFAF where relevant
- Target long-tail keywords naturally (example: "girls flag football leagues in Texas")
- This article belongs in the "${category}" category — make sure the content matches this category exactly
- Write in the voice of an American sports journalist
- Girls high school flag football should be mentioned when relevant
- Minimum 600 words

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
    model: 'claude-sonnet-4-5',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }],
  })

  const responseText = message.content[0].text.trim()
  const cleaned = responseText.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim()
  const articleData = JSON.parse(cleaned)

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
