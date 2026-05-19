// 28 Cylinders — Project CMS
// ─────────────────────────────────────────────────
// To add a new project:
//   1. Add a new object to the PROJECTS array below
//   2. Create a subfolder in /images/<project-id>/ and drop assets there
//   3. Save — both the home page and work page update automatically
//
// Optional fields:
//   beforeAfter: { before, beforeLabel, after, afterLabel }
//   — renders an interactive before/after slider for rebrand projects
//   labels: { 'filename.ext': 'Display Title' }
//   — overlays a title on gallery items (especially useful for video)
//   iconRow: ['path1', 'path2', ...]
//   — renders a row of small icons before the main gallery
// ─────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 'ingeoambiente',
    title: 'Ingeoambiente Brand Refresh',
    subtitle: 'Full rebrand for an established environmental consulting firm',
    category: 'Brand Identity',
    tagLabel: 'Branding',
    color: 'var(--cobalt)',
    tagTextColor: '#fff',
    year: '2024',
    thumbnail: 'images/ingeoambiente/home.png',
    hero: 'images/ingeoambiente/home.png',
    images: [
      'images/ingeoambiente/branding.png',
      'images/ingeoambiente/business-cards.png',
      'images/ingeoambiente/polo.png',
      'images/ingeoambiente/polo-2.png',
      'images/ingeoambiente/hat-2.png',
      'images/ingeoambiente/hat-3.png',
      'images/ingeoambiente/tshirt.png',
      'images/ingeoambiente/logo-navy.png',
      'images/ingeoambiente/website-1.png',
      'images/ingeoambiente/website-2.png',
      'images/ingeoambiente/website-3.png'
    ],
    beforeAfter: {
      before: 'images/ingeoambiente/logo-on-white.png',
      beforeLabel: 'Before',
      after: 'images/ingeoambiente/logo-before.jpg',
      afterLabel: 'After'
    },
    client: 'Ingeoambiente C.A. is an environmental consulting firm established in 2007, headquartered in Caracas, Venezuela, with national reach throughout the country. Seventeen years of credibility in a field where credibility is everything. They came to us with a brand that no longer reflected who they had become.',
    challenge: 'Modernize without erasing. The company had seventeen years of trust built into its name and that had to survive the rebrand. The new identity needed to feel contemporary and precise while honoring the longevity and authority the firm had spent two decades building.',
    description: 'We rebuilt the identity from the ground up. New mark, new color system, new typography, all grounded in the technical discipline the firm is known for and the credibility it has spent seventeen years earning.\n\nThe system extended to every client touchpoint: business cards, polo shirts, branded hats, and a complete document template suite that carries the new identity into everyday operations.\n\nThe before and after tells the story. The old mark had done its job. The new one is built for the next chapter.',
    outcome: '',
    note: '',
    deliverables: [
      'Brand Strategy',
      'Logo Redesign',
      'Visual Identity',
      'Color Palette',
      'Typography System',
      'Brand Guidelines',
      'Business Cards',
      'Merch Design',
      'Document Templates'
    ]
  },
  {
    id: 'optimal-packaging',
    title: 'Optimal Packaging Suite',
    subtitle: 'Complete packaging and welcome system for a modern home appliance brand',
    category: 'Print Design',
    tagLabel: 'Graphic Design',
    color: 'var(--teal)',
    tagTextColor: '#fff',
    year: '2023–2026',
    thumbnail: 'images/optimal-packaging/thumb.png',
    hero: 'images/optimal-packaging/thumb.png',
    images: [
      'images/optimal-packaging/hero.png',
      'images/optimal-packaging/2.png',
      'images/optimal-packaging/3.jpg',
      'images/optimal-packaging/video.mp4',
      'images/optimal-packaging/anim.gif'
    ],
    galleryLayout: [
      ['images/optimal-packaging/anim.gif', 'images/optimal-packaging/hero.png'],
      ['images/optimal-packaging/3.jpg', 'images/optimal-packaging/2.png'],
      ['images/optimal-packaging/video.mp4', 'images/optimal-packaging/opti-18-packaging.jpg']
    ],
    client: 'Optimal makes electric tankless water heaters for the modern home. Design-forward, technically precise, and built for a category that has historically looked purely industrial.',
    challenge: 'Own every inch of the unboxing moment from the first touch to the final step\nDesign every insert, manual, and card as part of one cohesive system\nMake a technically complex product feel approachable without losing accuracy\nDeliver a fully bilingual experience: EN and ES, equal in quality, not just translated\nBalance two audiences simultaneously: the installer who needs precision and the homeowner who needs reassurance',
    description: 'We designed the full packaging system for Optimal\'s electric tankless water heater line. Outer box, wholesaler boxes, every interior insert, and every version that has followed since. Welcome envelope, welcome letter, installation manuals in English and Spanish, mounting templates, stamps, variants across the growing product line. All of it.\n\nWorking closely with Optimal\'s team and their manufacturer, every decision balanced two audiences at once. The design language is clean and line-forward: airy and technical without ever feeling industrial. This is a category that has historically looked like a utility closet. This one does not.\n\nPrint is where craft lives in the details. This project has plenty of them.',
    outcome: '',
    note: '',
    deliverables: [
      'Outer Box Design',
      'Wholesaler Box Design',
      'Box Variants + Versioning',
      'Welcome Envelope',
      'Welcome Letter',
      'Installation Manual (EN + ES)',
      'Mounting Templates',
      'Packaging Inserts',
      'Stamps + Box Stamps',
      'Business Cards'
    ]
  },
  {
    id: 'sizing-calculator',
    title: 'Sizing Calculator',
    subtitle: 'UX design and visual system for a live product tool',
    category: 'UX and Product Design',
    tagLabel: 'Digital',
    color: 'var(--sky)',
    tagTextColor: '#000',
    year: '2024',
    thumbnail: 'images/sizing-calculator/optimal sizing calculator thumbnail.png',
    hero: 'images/sizing-calculator/optimal sizing calculator thumbnail.png',
    images: [
      'images/sizing-calculator/optimal sizing calculator.mp4',
      'images/sizing-calculator/optimal sizing calculator thumbnail.png'
    ],
    link: 'https://itsoptimal.com/pages/calculator',
    linkLabel: 'Try it yourself',
    client: 'Optimal makes electric tankless water heaters for the modern home. A technically complex product sold to homeowners who do not speak contractor. The goal was to give them a tool that answered the one question they all have: what do I actually need?',
    description: 'The calculator runs on math provided by the client\'s engineering team and validated against official US groundwater temperature data, so every recommendation accounts for real conditions in the user\'s location. It follows Optimal\'s brand guidelines precisely, down to the type and color system.\n\nOn the backend, every session captures usage habits, preferences, and input patterns. That data improves product recommendations over time and feeds directly into the sales funnel. Every person who uses the tool is a lead.\n\nPractically useful and strategically built. A beautifully designed product that earns its place in this portfolio twice over.',
    challenge: 'Build a sizing calculator that closes the sales conversation before it starts. Homeowners answer a short series of questions about their home, electrical setup, and usage and get accurate size recommendations and electrical requirements without a phone call or a contractor visit.',
    outcome: '',
    note: '',
    deliverables: [
      'UX Strategy',
      'Information Architecture',
      'Interaction Design',
      'Visual Design',
      'Prototype',
      'Development Handoff'
    ]
  },
  {
    id: 'treysta',
    title: 'Treysta Group',
    subtitle: 'Full brand identity for a modern real estate team operating under Compass',
    category: 'Brand Identity',
    tagLabel: 'Branding',
    color: 'var(--cobalt)',
    tagTextColor: '#fff',
    year: '2025',
    thumbnail: 'images/treysta/treysta mockup.png',
    hero: 'images/treysta/treysta mockup.png',
    images: [
      'images/treysta/treysta mockup.png',
      'images/treysta/Treysta Branding.png',
      'images/treysta/logo-white.png',
      'images/treysta/banner-01.png',
      'images/treysta/banner-04.png'
    ],
    iconRow: [
      'images/treysta/mark-02.png',
      'images/treysta/mark-06.png',
      'images/treysta/mark-14.png',
      'images/treysta/mark-22.png'
    ],
    client: 'Treysta Group is a real estate team operating under Compass in Orlando, Florida. They came to us with a name and the ambition to build something that felt premium, multicultural, and distinctly their own alongside one of the most recognizable nameplates in real estate.',
    challenge: 'Build a full brand identity from scratch with no existing visual direction\nDesign a logo system that holds its own alongside Compass without competing with it\nDeliver an identity that felt elevated and multicultural: clean, serif-forward, and built to last\nCreate versions that worked in pure black, pure white, and every format they would actually use',
    description: 'They came with a name. We built everything else.\n\nBrand strategy, logo mark, icon, typography system, color palette, and brand guidelines: all delivered as a focused one-pager built to be used, not filed away. Final files in every size, color, and format.\n\nThe suite extended to a banner and social media post design. Clean, authoritative, and designed to work in lockstep with Compass without being absorbed by it.',
    outcome: '',
    note: '',
    deliverables: [
      'Brand Strategy',
      'Logo Design',
      'Icon Mark',
      'Typography System',
      'Color Palette',
      'Brand Guidelines',
      'Banner Design',
      'Social Media Post Design',
      'Final Files: All Sizes + Formats'
    ]
  },
  {
    id: 'ibs-tradeshow',
    title: 'Optimal at IBS',
    subtitle: 'Trade show presence for one of the largest construction events in the country',
    category: 'Print and Trade Show Design',
    tagLabel: 'Graphic Design',
    color: 'var(--teal)',
    tagTextColor: '#fff',
    year: '2024',
    thumbnail: 'images/ibs-tradeshow/loop.mp4',
    hero: 'images/ibs-tradeshow/loop.mp4',
    images: [
      'images/ibs-tradeshow/loop.mp4',
      'images/ibs-tradeshow/banner-1.jpg',
      'images/ibs-tradeshow/banner-2.jpg',
      'images/ibs-tradeshow/thumb.jpg',
      'images/ibs-tradeshow/show-logo.jpg'
    ],
    iconRow: [
      'images/ibs-tradeshow/Optimal Stickers-01.png',
      'images/ibs-tradeshow/Optimal Stickers-03.png',
      'images/ibs-tradeshow/opti stickers 2025-01.png',
      'images/ibs-tradeshow/opti stickers 2025-02.png',
      'images/ibs-tradeshow/opti stickers 2025-03.png',
      'images/ibs-tradeshow/opti stickers 2025-04.png',
      'images/ibs-tradeshow/opti stickers 2025-06.png',
      'images/ibs-tradeshow/opti stickers 2025-07.png',
      'images/ibs-tradeshow/opti stickers 2025-08.png'
    ],
    iconRowScroll: true,
    labels: {
      'banner-1.jpg': 'Large-Format Banner: Save Space',
      'banner-2.jpg': 'Large-Format Banner: Size Matters',
      'loop.mp4': 'Trade Show Loop Video',
      'Optimal Stickers-01.png': 'Stickers',
      'opti stickers 2025-01.png': 'Sticker Collection 2025'
    },
    client: 'Optimal makes electric tankless water heaters for the modern home. The International Builders Show is one of the largest construction industry trade events in the country. Optimal had a booth. It needed to look like a brand, not a vendor.',
    challenge: 'Design large-format banners that stop traffic on a crowded trade show floor\nBuild a presentation deck that closes the conversation the banners start\nCreate stickers worth taking: the kind that leave the booth and keep working',
    description: 'Two large-format banners, a full presentation deck, and stickers: one consistent visual system across every touchpoint at IBS.\n\nThe banners were built to work at distance first and up close second. The deck followed the same design standard as every other Optimal piece: clean, technical, and never overwhelming. The stickers were the kind of thing people actually take home.\n\nA trade show booth is a brand moment that lasts about three seconds. These were built for that.',
    outcome: '',
    note: '',
    deliverables: [
      'Large-Format Banners (x2)',
      'Presentation Deck',
      'Stickers',
      'Trade Show Art Direction'
    ]
  },
  {
    id: 'think-twice',
    title: 'Think Twice Media: Email Marketing',
    link: 'https://mailchi.mp/b0ad48a1d746/a-year-of-creativity-and-collaboration-12755474',
    linkLabel: 'View the email',
    subtitle: 'Three Plays. No Misses.',
    category: 'Email Marketing',
    tagLabel: 'Digital',
    color: 'var(--sky)',
    tagTextColor: '#000',
    year: '2026',
    thumbnail: 'images/think-twice/1.png',
    hero: 'images/think-twice/1.png',
    images: [
      'images/think-twice/1.png',
      'images/think-twice/5.png',
      'images/think-twice/8.png',
      'images/think-twice/9.png',
      'images/think-twice/10.png'
    ],
    client: 'Think Twice Media is a Miami-based production company producing for the Super Bowl, the World Cup, and everything in between. Their client list includes Gillette + Walmart + NBCU, FIFA + NBCUniversal, and AIAA.',
    challenge: 'Design and write a campaign email that showcased three of their productions and drove engagement from a curated industry list. The email needed to feel as polished as the work it was promoting, with copy that matched Think Twice\'s editorial voice and a strategy behind what to show and in what order.',
    description: 'The work speaks for itself. But only if the right people see it.\n\nWe built their email campaign from scratch: concept, copy, strategy, and design. The "Three Plays. No Misses." framework was ours: a sports playbook structure that matched exactly who they are and what they do. Every headline, every section, every CTA written and designed by us in Mailchimp end to end.',
    outcome: '34.7% open rate against a 24.3% industry benchmark for creative services agencies, more than 10 points above average on a list of 229 recipients. Two clients reached out directly from this campaign to schedule projects.\n\nThe results belong to the email.',
    stats: [
      { label: 'Open Rate', value: '34.7%', benchmark: 'Industry avg. 24.3%' },
      { label: 'Recipients', value: '229', benchmark: '' },
      { label: 'New Client Inquiries', value: '2', benchmark: 'Generated directly from the campaign' }
    ],
    note: '',
    deliverables: [
      'Campaign Concept + Creative Direction',
      'Full Copy: Headlines, Body, CTAs',
      'Email Design + Deployment via Mailchimp',
      'Campaign Strategy'
    ]
  },
  {
    id: 'coco',
    title: 'Coco Media Productions',
    subtitle: 'Full rebrand for a Miami-based video production company',
    category: 'Brand Identity',
    tagLabel: 'Branding',
    color: 'var(--cobalt)',
    tagTextColor: '#fff',
    year: '2024',
    thumbnail: 'images/coco/thumb.png',
    hero: 'images/coco/thumb.png',
    images: [
      'images/coco/brand-02.png',
      'images/coco/process-04.png',
      'images/coco/process-02.png',
      'images/coco/process-03.png',
      'images/coco/process-05.png',
      'images/coco/process-06.png',
      'images/coco/process-07.png',
      'images/coco/process-08.png',
      'images/coco/process-09.png',
      'images/coco/process-10.png',
      'images/coco/process-11.png'
    ],
    iconRow: [
      'images/coco/brand-11.png',
      'images/coco/brand-12.png',
      'images/coco/brand-13.png'
    ],
    beforeAfter: {
      before: 'images/coco/logo-before.png',
      beforeLabel: 'Before',
      after: 'images/coco/brand-02.png',
      afterLabel: 'After'
    },
    client: 'Coco Media Productions is a Miami and Chicago-based video production company with ten years in the industry. The brand had not kept pace with the work.',
    challenge: 'Conduct a full visual identity audit, identify what was worth keeping, and rebuild the system around it, without abandoning the equity the brand had already built.',
    description: 'Ten years in, Coco Media had outgrown their brand. The logo was outdated. The palette had no range. Typography was inconsistent across touchpoints. The brand did not match the work anymore.\n\nWe started with a full visual identity audit. Every element named, every gap diagnosed. Then we rebuilt the system around what was worth keeping.\n\nRetained the logo mark structure and hot pink as core brand equity. Replaced the grey dots with violet and turquoise, bringing the full palette to life. Tightened the typography system. Full brand guidelines delivered.\n\nTen year anniversary. Ready to grow into themselves. Exactly the kind of brief we love.',
    outcome: '',
    note: '',
    deliverables: [
      'Visual Identity Audit',
      'Logo Redesign',
      'Color System',
      'Typography System',
      'Brand Guidelines'
    ]
  },
  {
    id: 'optimal-ads',
    title: 'Optimal Meta Ad Campaigns',
    subtitle: 'Full campaign from script and creative to targeting and results',
    category: 'Paid Advertising',
    tagLabel: 'Paid Ads',
    color: 'var(--pink)',
    tagTextColor: '#fff',
    year: '2025',
    thumbnail: 'images/optimal-ads/thumbnail.png',
    hero: 'images/optimal-ads/thumbnail.png',
    images: [
      'yt-v:pzrKeXrmLeI',
      'images/optimal-ads/moodboard.png',
      'images/optimal-ads/landing-page.png'
    ],
    labels: {
      'pzrKeXrmLeI': 'Campaign Creative'
    },
    link: 'https://itsoptimal.com/pages/naked-trust-sale',
    linkLabel: 'View the campaign page',
    stats: [
      { label: 'Landing Page Views', value: '9,615', benchmark: 'Industry avg. ~194 at same spend' },
      { label: 'Cost Per Landing Page View', value: '$0.03', benchmark: 'Industry avg. ~$1.50' },
      { label: 'Total Spent', value: '$291', benchmark: '' }
    ],
    script: [
      { type: 'direction', text: 'Setting: Bathroom or bedroom. Casual, comfortable.' },
      { type: 'line', text: '"Your water heater is the only appliance in your house you use when you\'re naked."' },
      { type: 'direction', text: 'Pause' },
      { type: 'line', text: '"Think about that. When you step into the shower, at your most vulnerable, you\'re trusting a box in your garage to deliver consistent hot water."' },
      { type: 'direction', text: 'Casual gestures' },
      { type: 'line', text: '"Dishwasher breaks? Annoying. Dryer dies? Inconvenient."' },
      { type: 'direction', text: 'Leaning in' },
      { type: 'line', text: '"Water heater fails mid-shower?"' },
      { type: 'direction', text: 'Emphatic' },
      { type: 'line', text: '"Ruins. Your. Entire. Day."' },
      { type: 'direction', text: 'Direct to camera' },
      { type: 'line', text: '"So why would you settle for technology that wears out, companies with overseas call centers, warranties full of fine print?"' },
      { type: 'direction', text: 'Confident' },
      { type: 'line', text: '"You\'re vulnerable every time you shower. Your water heater shouldn\'t be."' },
      { type: 'line', text: '"Switch to Optimal."' }
    ],
    client: 'Optimal makes electric tankless water heaters for the modern home. A technically sophisticated product with a real story to tell and a market that needed educating. The question was how to make that story land at scale on the platforms where the buyer actually lives.',
    challenge: 'Build and run a full Meta advertising campaign around a single insight: your water heater is the only appliance you use naked, so the brand you choose should be one you trust completely. Take that concept from the first line of the script through targeting and results.',
    description: 'The creative direction was built around trust. One insight drove the whole campaign: your water heater is the only appliance you use naked. You should trust it.\n\nWe wrote the concept, wrote the script, and produced the creative as UGC-style vertical video built for the format. The Naked Trust campaign ran as a seasonal winter promotion with a dedicated landing page built to close.\n\nEvery piece of the campaign was built in house at 28 Cylinders: the original insight, the script, the talent direction, the ad build, the targeting strategy, and the month over month reporting.',
    outcome: '',
    note: '',
    deliverables: [
      'Campaign Strategy',
      'Script Writing',
      'Ad Creative',
      'Audience Targeting',
      'Campaign Build',
      'Monthly Management',
      'Performance Reporting'
    ]
  },
  {
    id: 'telemundo',
    title: 'Telemundo: Secretos de Sangre',
    subtitle: 'Broadcast-to-social video adaptation across four formats and multiple airing dates',
    category: 'Social Video',
    tagLabel: 'Video',
    color: 'var(--purple)',
    tagTextColor: '#fff',
    year: '2024',
    thumbnail: 'images/telemundo/thumb.png',
    hero: 'images/telemundo/thumb.png',
    clickableThumb: {
      src: 'images/telemundo/thumb.png',
      url: 'https://www.instagram.com/reel/CrCUr5VM2Gn/',
      label: 'Watch on Instagram'
    },
    images: [
      'images/telemundo/1.png',
      'images/telemundo/2.png'
    ],
    client: 'Telemundo is one of the largest Spanish-language television networks in the United States. This project came through our partnership with Coco Media Productions, who handled the original edit. The bar for every deliverable was broadcast quality, adapted for the platforms where the audience actually lives.',
    challenge: 'Take broadcast-ready video content and adapt it for every major social format across multiple airing dates. Each version needed to work in 1:1, 4:5, 9:16, and 16:9. End graphics had to be updated per date, shifting the tagline from tonight to tomorrow and beyond depending on when the content would run.',
    description: 'This is the kind of work that looks simple from the outside and is anything but. Reframing broadcast footage for vertical and square formats without losing the visual story takes real editorial judgment. Multiply that across four aspect ratios and multiple date variations and you have a production versioning system: not just a resize job.\n\nWe worked within Coco Media\'s edit, respecting the original creative direction while making each format feel native to the platform it was built for. The result was a full suite of social-ready assets across formats and dates, ready to deploy.\n\nSecretos de Sangre is one of several productions we have versioned for Telemundo through this partnership.',
    link: 'https://www.instagram.com/reel/CrCUr5VM2Gn/',
    linkLabel: 'View on Instagram',
    outcome: '',
    note: '',
    deliverables: [
      'Social Video: 1:1',
      'Social Video: 4:5',
      'Social Video: 9:16',
      'Social Video: 16:9',
      'Date-Specific End Graphics',
      'Broadcast to Social Adaptation'
    ]
  },
  {
    id: 'tse',
    title: 'The Studio Essentials',
    subtitle: 'Premium brand identity for a boutique wellness brand',
    category: 'Brand Identity',
    tagLabel: 'Branding',
    color: 'var(--cobalt)',
    tagTextColor: '#fff',
    year: '2024',
    thumbnail: 'images/tse/thumb.png',
    hero: 'images/tse/thumb.png',
    images: [
      'images/tse/brand-elements.png',
      'images/tse/brand-web.jpg',
      'images/tse/guidelines-page.png',
      'images/tse/guidelines-1.png',
      'images/tse/guidelines-2.png',
      'images/tse/guidelines-3.png',
      'images/tse/guidelines-4.png',
      'images/tse/guidelines-5.png',
      'images/tse/guidelines-6.png',
      'images/tse/logo-icon.jpg'
    ],
    client: 'The Studio Essentials is a boutique wellness brand built around a premise we helped define: the things you use every day should be worth keeping. Premium sourcing, sustainable materials, and elevated design across a line of fitness essentials made for people who take their practice seriously.',
    challenge: 'Build a brand from the ground up for a product that does not exist in the market yet. No reference point, no competitor to borrow from. The identity had to establish premium positioning and communicate quality at first glance, before anyone had ever touched the product.',
    description: 'We built the full visual system: brand strategy, logo, icon mark, typography, color palette, brand guidelines, photography direction, social templates, and applications. Every decision was made to signal quality without announcing it. The kind of brand that lets the product speak and makes the product look better for doing so.\n\nThe guidelines document is designed to scale. As the line grows and the team grows with it, the system holds.',
    outcome: '',
    note: '',
    deliverables: [
      'Brand Strategy',
      'Logo Design',
      'Icon Design',
      'Typography System',
      'Color Palette',
      'Brand Guidelines',
      'Photography Direction',
      'Social Templates',
      'Applications'
    ]
  },
  {
    id: 'optimal-flyers',
    title: 'Optimal Comparative Flyers',
    subtitle: 'Three print pieces that make technical decisions feel easy',
    category: 'Print Collateral',
    tagLabel: 'Graphic Design',
    color: 'var(--teal)',
    tagTextColor: '#fff',
    year: '2023–2026',
    thumbnail: 'images/optimal-flyers/enduser-front-hires.png',
    hero: 'images/optimal-flyers/enduser-front-hires.png',
    images: [
      'images/optimal-flyers/enduser-front-hires.png',
      'images/optimal-flyers/enduser-back-hires.png',
      'images/optimal-flyers/chart-front.png',
      'images/optimal-flyers/chart-back.png',
      'images/optimal-flyers/sheet-1.jpg',
      'images/optimal-flyers/sheet-2.jpg'
    ],
    client: 'Optimal makes electric tankless water heaters for the modern home. A technically sophisticated product sold into a market that includes contractors, builders, retailers, and everyday homeowners. At trade shows and in stores, the pitch has to work on all of them at once.',
    challenge: 'Three audiences walk up to a trade show booth. One is a homeowner. One is a contractor. One is a retail buyer. Each one needs a completely different argument for the same product.',
    description: 'Each flyer was built around that reality. The consumer version leads with a full custom illustration built in house: the kind of piece that earns a second look and leaves the booth with someone. The contractor and builder version speaks spec. The retail buyer version speaks line. Same product data, three completely different arguments.\n\nEvery version was printed with local Miami printers, chosen for quality, deal, and quantity. These have been field-tested at trade shows and in stores. They work.\n\nThe challenge throughout: a technically complex product in a category full of jargon. Making that information digestible without dumbing it down is the whole job.',
    outcome: '',
    note: '',
    deliverables: [
      'Consumer Flyer',
      'Contractor and Builder Flyer',
      'Retail Buyer Flyer',
      'Custom Illustration',
      'Copywriting',
      'Print Ready Files'
    ]
  },
  {
    id: 'optimal-social',
    title: 'Optimal Organic Social Videos',
    subtitle: 'Full production, no handoffs. Scripted, recorded, and edited for the feed',
    category: 'Short-Form Video',
    tagLabel: 'Video',
    color: 'var(--teal)',
    tagTextColor: '#fff',
    year: '2025',
    thumbnail: 'images/optimal-social/optimal social media thumbnail.png',
    hero: 'images/optimal-social/optimal social media thumbnail.png',
    images: [
      'yt-v:isx1GFGtXtU',
      'yt-v:avHr-N01k8g'
    ],
    labels: {
      'isx1GFGtXtU': 'Oklahoma Reel',
      'avHr-N01k8g': 'Why People Switch'
    },
    client: 'Optimal makes electric tankless water heaters for the modern home.',
    challenge: 'Produce short-form video content that performs natively on social. Built for the feed, not adapted to it.',
    description: 'Full production, no handoffs. Every video scripted, recorded, and edited by us. Built for Optimal\'s organic feed and designed to perform natively on social.',
    outcome: '',
    note: '',
    deliverables: [
      'Original Script',
      'Short-Form Production',
      'Video Editing',
      'Social Strategy'
    ]
  },
  {
    id: 'cottontail',
    title: 'The Cottontail Club',
    subtitle: 'Event identity for a one night only wedding speakeasy',
    category: 'Brand Identity and Design',
    tagLabel: 'Branding',
    color: 'var(--lavender)',
    tagTextColor: '#000',
    year: '2024',
    thumbnail: 'images/cottontail/shirt-back.png',
    hero: 'images/cottontail/shirt-back.png',
    clickableThumb: {
      src: 'images/cottontail/shirt-back.png',
      url: 'https://www.tiktok.com/@unveiledcontentco/video/7625744073944468766',
      label: 'Watch on TikTok'
    },
    images: [
      'images/cottontail/magazine-cover.png',
      'images/cottontail/napkin-mockup.png',
      'images/cottontail/shirt-front.png',
      'images/cottontail/shirt-back.png',
      'images/cottontail/magazine.png',
      'images/cottontail/napkin.png',
      'images/cottontail/logo-icon-white.png',
      'images/cottontail/sticker-oval.png'
    ],
    link: 'https://www.tiktok.com/@unveiledcontentco/video/7625744073944468766',
    linkLabel: 'Watch the film',
    client: 'The Cottontail Club was a one night only wedding speakeasy held at Gold Heart Ranch in Chappell Hill, Texas. The event had a vision, a setting, and a feeling that needed to exist before a single guest arrived. Our job was to build the world.',
    challenge: 'Design a complete event identity for a one of a kind occasion where nothing could feel generic. Every touchpoint had to feel like it had always existed. Like it was found, not made.',
    description: 'We designed the full event identity from concept through production: the logo and crest illustration, brand identity, merch, event flag, napkin design, magazine and event program, oval sticker, and full art direction across every physical element.\n\nThe crest illustration was built in house at 28 Cylinders. Custom, detailed, and designed to live on beyond the event as a keepsake. The kind of piece guests actually keep.',
    outcome: '',
    note: '',
    deliverables: [
      'Logo + Crest Design',
      'Brand Identity',
      'Merch Design',
      'Event Flag',
      'Napkin Design',
      'Magazine / Program',
      'Oval Sticker',
      'Art Direction'
    ]
  },
  {
    id: 'optimal-intro',
    title: 'Optimal Brand Video',
    subtitle: 'Built from the ground up. Sourcing, scripting, production, and multi-format delivery',
    category: 'Brand Film',
    tagLabel: 'Video',
    color: 'var(--teal)',
    tagTextColor: '#fff',
    year: '2024',
    thumbnail: 'images/optimal-intro/thumb-still.png',
    hero: 'images/optimal-intro/thumb-still.png',
    images: [
      'yt:XQZqRFUK7D8',
      'yt-v:dUi3fKE--qY'
    ],
    labels: {
      'XQZqRFUK7D8': 'Horizontal: 16:9',
      'dUi3fKE--qY': 'Vertical: 9:16'
    },
    client: 'Optimal makes electric tankless water heaters for the modern home. They are competing against Big Water. Winning that fight starts with trust, and trust starts with story.',
    challenge: 'Build a brand video from zero. No existing footage, no agency archive. Source personal imagery from the founding team\'s launch journey, reach out to the manufacturer for behind the scenes production footage, and assemble a film that communicates who they are, what they are building, and their why.',
    description: 'We sourced personal imagery from the founding team\'s launch journey, reached out to the manufacturer directly for behind the scenes production footage, and built a brand video from the ground up.\n\nThe video has been adapted for social formats and retailer specs for platforms like Home Depot + Lowe\'s, has run as a paid ad with direct sales results, and has been played at trade shows and presentations since launch.',
    outcome: '',
    stats: [
      { label: 'Views', value: '7,000+', benchmark: '' },
      { label: 'Formats Produced', value: '4+', benchmark: '' },
      { label: 'Platforms', value: 'Social, Retail + Trade Shows', benchmark: '' }
    ],
    note: '',
    deliverables: [
      'Source + Curate Founding Footage',
      'Scripting + Creative Direction',
      'Full Video Production + Editing',
      'Social Format Adaptation',
      'Retailer Specs: Home Depot + Lowe\'s',
      'Paid Ad Version'
    ]
  },
  {
    id: 'optimal-landing',
    title: 'Optimal Spring Sale Landing Page',
    subtitle: 'Seasonal conversion landing page built around one goal',
    category: 'Web Design and Strategy',
    tagLabel: 'Digital',
    color: 'var(--sky)',
    tagTextColor: '#000',
    year: '2026',
    thumbnail: 'images/optimal-landing/optimal landing page images - thumbnail.png',
    hero: 'images/optimal-landing/optimal landing page images - thumbnail.png',
    images: [
      'images/optimal-landing/1.png',
      'images/optimal-landing/3.png',
      'images/optimal-landing/4.png',
      'images/optimal-landing/5.png',
      'images/optimal-landing/6.png',
      'images/optimal-landing/7.png',
      'images/optimal-landing/8.png',
      'images/optimal-landing/9.png'
    ],
    galleryColumns: 1,
    client: 'Optimal makes electric tankless water heaters for the modern home. The Spring Sale was a time-limited promotion with one job: convert browsers into buyers. The landing page was the entire sales argument.',
    challenge: 'Design a seasonal landing page that makes a single, clear argument for one action. No distractions, no generic layout, no copy that sounds like a template. Every element built to close.',
    description: 'We designed the page from the ground up: layout hierarchy, visual design, and conversion copywriting, all from one studio. The page follows the brand precisely while being engineered for one outcome.\n\nLayout decisions were driven by conversion logic: what the buyer sees first, what earns the click, where trust gets established, and where urgency gets introduced. Copy and design were built together, not handed off separately.',
    outcome: '',
    note: '',
    deliverables: [
      'Landing Page Design',
      'Conversion Copywriting',
      'Layout Strategy',
      'Visual Design',
      'Development Handoff'
    ]
  }
];
