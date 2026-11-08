/**
 * Portfolio Data for Mridul Hassan
 * Professional WordPress Website Designer & Social Media Manager
 * 
 * Note: All contact links, sample projects, testimonials, and packages are fully customizable.
 */

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface ServiceCategory {
  id: string;
  category: string;
  tagline: string;
  description: string;
  services: ServiceItem[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Business Websites' | 'E-commerce Websites' | 'Beauty & Salon Websites' | 'Fashion & Jewelry Websites' | 'Instagram Post Designs' | 'Facebook Marketing Creatives' | 'Reels & Product Videos';
  industry: string;
  description: string;
  tools: string[];
  results: string;
  isSample: boolean;
  accentColor: string;
  aspect: '16:9' | '4:3' | '9:16' | '1:1';
  imageUrl?: string;
  videoUrl?: string;
  imagePlaceholderText: string;
  previewUrl?: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  projectType: string;
  feedback: string;
  avatarInitials: string;
  isSample: boolean;
}

export interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  idealFor: string;
  features: string[];
  deliverablesSummary: string;
  turnaroundTime: string;
  revisions: string;
}

export const PROFILE_DATA = {
  name: 'Mridul Hassan',
  title: 'WordPress Website Designer | Elementor Expert | Social Media Manager',
  tagline: 'WordPress Designer & Social Media Strategist',
  headline: 'I Build Websites & Manage Social Media That Help Businesses Grow.',
  subtitle: 'Helping businesses build a strong online presence through professional website design, creative content and strategic social media management.',
  experience: '6+ Years',
  status: 'Fiverr Level 2 Seller',
  avatarImage: '/assets/aistudio/IMG_20260615_165353_d3e75d48.png',
  email: 'mridulhassan2014@gmail.com',
  whatsapp: '+8801540638884',
  whatsappDisplay: '+880 1540-638884',
  whatsappPrefillMessage: 'Hello Mridul! I saw your portfolio and would like to discuss a website and social media project for my business.',
  fiverrProfileUrl: 'https://www.fiverr.com', // Replace with exact profile username
  instagramUrl: 'https://instagram.com',
  facebookUrl: 'https://facebook.com',
  linkedinUrl: 'https://www.linkedin.com/in/mridul-hossain-31039b248?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  location: 'Available for Worldwide Remote Projects',
  stats: [
    { label: 'Years Experience', value: '6+', description: 'Proven digital expertise' },
    { label: 'Completed Projects', value: '150+', description: 'Across websites & social campaigns' },
    { label: 'Fiverr Seller Status', value: 'Level 2', description: 'Top rated with 5.0★ feedback' },
    { label: 'Client Satisfaction', value: '99%', description: 'Long-term client relationships' },
    { label: 'Countries Served', value: '25+', description: 'USA, UK, Canada, Australia & Europe' },
  ],
  targetIndustries: [
    'Small Businesses & Startups',
    'Online Shops & WooCommerce Stores',
    'Beauty Salons, Spas & Aesthetic Clinics',
    'Restaurants, Cafés & Food Brands',
    'Jewelry Stores & Luxury Accessories',
    'Fashion Boutiques & Apparel Brands',
    'Service-Based Agencies & Consultants',
  ],
  coreSkills: [
    'WordPress CMS',
    'Elementor & Elementor Pro',
    'WooCommerce',
    'Wix Studio & Editor',
    'Website Redesign & Revamp',
    'Speed & SEO Optimization',
    'Instagram Feed Strategy',
    'Facebook Page Growth',
    'Canva & Photoshop Design',
    'Reels & Video Content',
    'Content Calendar Planning',
    'Hashtag Research & Analytics',
  ],
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'web-design',
    category: 'Website Design & Development',
    tagline: 'Modern, responsive, high-converting websites tailored to your brand identity.',
    description: 'Specializing in clean WordPress and Elementor architectures that load quickly, look breathtaking on mobile, and turn visitors into paying customers.',
    services: [
      {
        id: 'wp-design',
        name: 'WordPress Website Design',
        description: 'Complete custom WordPress websites developed from wireframe to launch, built with clean code and modern aesthetics.',
        deliverables: ['Custom design matching brand guidelines', 'Mobile & tablet responsive layouts', 'Fast page loading optimization', 'Basic on-page SEO integration'],
        icon: 'Layout',
      },
      {
        id: 'elementor-design',
        name: 'Elementor Website Design',
        description: 'Pixel-perfect website creation using Elementor Pro, providing you with a drag-and-drop dashboard you can edit anytime.',
        deliverables: ['Dynamic page templates', 'Custom headers & footers', 'Interactive motion effects & forms', 'Client video editing tutorial'],
        icon: 'Sparkles',
      },
      {
        id: 'wix-design',
        name: 'Wix Website Design',
        description: 'Contemporary Wix websites designed with seamless booking systems, menus, or portfolio showcases.',
        deliverables: ['Full Wix Studio/Editor setup', 'Domain & app integrations', 'Mobile optimization', 'Form & booking connection'],
        icon: 'Globe',
      },
      {
        id: 'website-redesign',
        name: 'Website Redesign & Revamp',
        description: 'Transform outdated, clunky websites into sleek, modern, international-standard digital storefronts that rebuild credibility.',
        deliverables: ['Brand aesthetic facelift', 'UX/UI restructuring', 'Conversion rate optimization (CRO)', 'Zero downtime migration'],
        icon: 'RefreshCw',
      },
      {
        id: 'woocommerce-stores',
        name: 'WooCommerce Online Stores',
        description: 'Full-featured online shops for fashion boutiques, cosmetics, jewelry, and physical goods with secure checkout.',
        deliverables: ['Product catalog & variable setup', 'Payment gateways (Stripe, PayPal)', 'Shipping & tax calculation rules', 'Cart drawer & one-click checkout'],
        icon: 'ShoppingBag',
      },
      {
        id: 'website-maintenance',
        name: 'Website Maintenance',
        description: 'Keep your website secure, running smooth, and bug-free with proactive monthly upkeep and security scans.',
        deliverables: ['Core & plugin updates', 'Daily/weekly cloud backups', 'Malware & security hardening', 'Broken link & error fixing'],
        icon: 'ShieldCheck',
      },
      {
        id: 'website-updates',
        name: 'Website Content Updates',
        description: 'Quick, reliable updates whenever you need new banner images, updated prices, blog posts, or service additions.',
        deliverables: ['Rapid 24-48h turnaround', 'Banner & typography adjustments', 'New product/page uploads', 'Promotional popups & banners'],
        icon: 'FileEdit',
      },
    ],
  },
  {
    id: 'social-media',
    category: 'Social Media Management',
    tagline: 'Strategic content, aesthetic feeds, and consistent community growth.',
    description: 'Transform your social channels into engaged communities that consistently generate inquiries, bookings, and sales.',
    services: [
      {
        id: 'instagram-management',
        name: 'Instagram Management',
        description: 'Complete management of your Instagram account: cohesive aesthetic, stories, grid planning, and active outreach.',
        deliverables: ['Cohesive visual grid design', 'Daily active story engagement', 'Bio & Highlights overhaul', 'Monthly analytics report'],
        icon: 'Instagram',
      },
      {
        id: 'facebook-management',
        name: 'Facebook Page Management',
        description: 'Professional Facebook presence that boosts brand trust, answers customer messages, and grows your local reach.',
        deliverables: ['Branded cover banner & avatar', 'Strategic post scheduling', 'Group & comment moderation', 'Page info optimization'],
        icon: 'Facebook',
      },
      {
        id: 'content-planning',
        name: 'Social Media Content Planning',
        description: 'Strategic monthly content blueprints balancing education, social proof, entertainment, and direct sales hooks.',
        deliverables: ['4-Pillar content strategy', 'Target audience personas', 'Weekly thematic planning', 'Campaign launch roadmap'],
        icon: 'Calendar',
      },
      {
        id: 'post-design',
        name: 'Post Design & Publishing',
        description: 'High-end branded single images and multi-slide carousels tailored for maximum retention and saves.',
        deliverables: ['Canva/Photoshop high-res designs', 'Brand color & typography consistency', 'Engaging visual hooks', 'Timed peak-hour publishing'],
        icon: 'Image',
      },
      {
        id: 'reels-creation',
        name: 'Reels Creation & Publishing',
        description: 'Short-form vertical video editing using trending sounds, snappy typography captions, and dynamic cuts.',
        deliverables: ['9:16 vertical video formatting', 'On-screen subtitles & sound syncing', 'Custom reel cover thumbnails', 'High-retention video hooks'],
        icon: 'Video',
      },
      {
        id: 'caption-writing',
        name: 'Captions Writing',
        description: 'Story-driven and persuasive captions that start conversations and drive followers to click your bio link.',
        deliverables: ['Hook-first copywriting', 'Clear Call-To-Action (CTA)', 'Brand tone matching', 'Emoji & spacing formatting'],
        icon: 'PenTool',
      },
      {
        id: 'hashtag-research',
        name: 'Hashtag Research',
        description: 'Data-backed hashtag sets categorized by volume to avoid shadowbans and maximize non-follower organic reach.',
        deliverables: ['Low, medium & high competition sets', 'Niche-specific keyword tags', 'Banned tag audit', 'Copy-paste organized sets'],
        icon: 'Hash',
      },
      {
        id: 'calendar-creation',
        name: 'Content Calendar Creation',
        description: 'Shared interactive monthly Google Sheets / Notion calendar with dates, captions, creatives, and approval status.',
        deliverables: ['Full 30-day post schedule', 'Pre-approval dashboard', 'Festive & holiday campaigns', 'Publishing status tracking'],
        icon: 'CheckSquare',
      },
      {
        id: 'scheduling-publishing',
        name: 'Scheduling & Publishing',
        description: 'Automated hands-off publishing via Meta Business Suite, Buffer, or Metricool during your audience peak activity hours.',
        deliverables: ['Meta Business Suite configuration', 'Timezone-optimized publishing', 'Story & reel scheduling', 'Zero missed deadlines'],
        icon: 'Clock',
      },
      {
        id: 'profile-optimization',
        name: 'Profile Optimization',
        description: 'Turn your profile from a passive business card into an active sales funnel that clearly tells visitors why to follow & buy.',
        deliverables: ['Keyword-optimized profile name & bio', 'Branded story highlight covers', 'Custom link-in-bio hub setup', 'Profile photo & banner enhancement'],
        icon: 'UserCheck',
      },
      {
        id: 'community-engagement',
        name: 'Community Engagement',
        description: 'Authentic interactions with comments, DMs, and target industry accounts to build genuine community goodwill.',
        deliverables: ['Comment replies within active hours', 'Warm DM lead greeting', 'Target account interaction', 'Spam/bot cleanup'],
        icon: 'MessageCircle',
      },
    ],
  },
  {
    id: 'creative-content',
    category: 'Creative Content & Design',
    tagline: 'Catchy marketing assets designed to stand out in crowded feeds.',
    description: 'Eye-catching graphic design and promotional assets tailored for social media advertising and brand identity.',
    services: [
      {
        id: 'promo-videos',
        name: 'Product Promotional Videos',
        description: 'Sleek promotional video teasers showcasing online store products, restaurant dishes, or beauty treatments.',
        deliverables: ['Dynamic kinetic typography', 'Sound design & royalty-free music', 'High-res export (1080p/4K)', 'Ad-ready aspect ratios'],
        icon: 'PlayCircle',
      },
      {
        id: 'social-posters',
        name: 'Social Media Posters',
        description: 'Striking promotional posters for festive discounts, grand openings, seasonal sales, and holiday announcements.',
        deliverables: ['Print & digital ready graphics', 'High contrast headline design', 'Brand color harmony', 'Editable Canva source link option'],
        icon: 'Layers',
      },
      {
        id: 'canva-graphic-design',
        name: 'Canva Graphic Design',
        description: 'Custom, reusable Canva templates your team can easily update with your own photos and text anytime.',
        deliverables: ['Fully organized Canva master file', 'Custom brand kit setup', 'Reusable layout templates', 'Quick video guide'],
        icon: 'Palette',
      },
      {
        id: 'ai-assisted-content',
        name: 'AI-Assisted Content Creation',
        description: 'Leveraging cutting-edge AI tools to generate engaging topic ideas, draft hook variations, and create custom background visuals.',
        deliverables: ['50+ Content angle brainstorms', 'High-converting ad copy variations', 'Visual enhancement & upscaling', 'Efficiency & fast turnaround'],
        icon: 'Cpu',
      },
    ],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'apex-capital',
    title: 'Apex Capital Advisors',
    category: 'Business Websites',
    industry: 'Financial Advisory & Consulting',
    description: 'Corporate multi-page WordPress website with Elementor Pro. Built with interactive ROI calculators, appointment calendar, and corporate trust signals.',
    tools: ['WordPress', 'Elementor Pro', 'WP Rocket', 'RankMath SEO'],
    results: '42% increase in consultation booking requests within 60 days of launch.',
    isSample: false,
    accentColor: '#1E3A8A',
    aspect: '16:9',
    imageUrl: '/src/assets/images/web_corporate_apex_1794140853051.jpg',
    imagePlaceholderText: 'Apex Capital — Corporate Advisory',
    tags: ['WordPress', 'Elementor Pro', 'Corporate', 'Lead Gen'],
  },
  {
    id: 'lumiere-botanicals',
    title: 'Lumière Organic Skincare',
    category: 'E-commerce Websites',
    industry: 'Beauty & Cosmetics Store',
    description: 'Clean luxury WooCommerce store featuring custom product bundle builder, slide-out cart drawer, customer reviews integration, and Stripe payments.',
    tools: ['WordPress', 'WooCommerce', 'Elementor', 'Stripe Gateway'],
    results: 'Smooth sub-1.2s mobile page load time with zero drop-off during checkout.',
    isSample: false,
    accentColor: '#059669',
    aspect: '16:9',
    imageUrl: '/src/assets/images/web_skincare_lumiere_1794140854798.jpg',
    imagePlaceholderText: 'Lumière — Organic Skincare Store',
    tags: ['WooCommerce', 'E-commerce', 'Beauty', 'Cart Drawer'],
  },
  {
    id: 'maison-beaute',
    title: 'Maison de Beauté Aesthetics',
    category: 'Beauty & Salon Websites',
    industry: 'Luxury Hair & Medical Spa',
    description: 'High-end beauty salon website featuring online booking integration (Fresha/Calendly), before-after treatment galleries, and service pricing menus.',
    tools: ['WordPress', 'Elementor', 'Online Booking', 'Instagram Feed'],
    results: '80+ direct online bookings in the first month following redesign.',
    isSample: false,
    accentColor: '#D97706',
    aspect: '16:9',
    imageUrl: '/src/assets/images/web_luxury_salon_1794140856586.jpg',
    imagePlaceholderText: 'Maison de Beauté — Luxury Salon & Spa',
    tags: ['Salon & Spa', 'Booking System', 'Elementor', 'Portfolio'],
  },
  {
    id: 'aura-fine-jewelry',
    title: 'Aura Fine Jewels & Diamonds',
    category: 'Fashion & Jewelry Websites',
    industry: 'Luxury Jewelry & Bridal Boutique',
    description: 'Minimalist editorial e-commerce experience with high-resolution image zoom, custom ring size calculator, and VIP consultation booking.',
    tools: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Wishlist Addon'],
    results: '3.4x higher average session duration due to clean editorial layout.',
    isSample: false,
    accentColor: '#475569',
    aspect: '16:9',
    imageUrl: '/src/assets/images/web_fine_jewelry_1794140855550.jpg',
    imagePlaceholderText: 'Aura — Luxury Handcrafted Jewelry',
    tags: ['Jewelry', 'Luxury Store', 'WooCommerce', 'Editorial'],
  },
  {
    id: 'trattoria-bella',
    title: 'Trattoria Bella & Wine Bar',
    category: 'Business Websites',
    industry: 'Italian Dining & Hospitality',
    description: 'Appetizing restaurant website featuring interactive seasonal food & wine menus, Google Maps reservation system, and private dining inquiry forms.',
    tools: ['WordPress', 'Elementor', 'OpenTable API', 'Speed Cache'],
    results: 'Streamlined weekend table reservations and eliminated phone booking bottlenecks.',
    isSample: false,
    accentColor: '#DC2626',
    aspect: '16:9',
    imageUrl: '/src/assets/images/web_italian_bistro_1794140856367.jpg',
    imagePlaceholderText: 'Trattoria Bella — Italian Restaurant',
    tags: ['Restaurant', 'Food & Drink', 'Menu System', 'Reservations'],
  },
  {
    id: 'velvet-apparel',
    title: 'Velvet & Silk Modern Fashion',
    category: 'Fashion & Jewelry Websites',
    industry: 'Boutique Apparel & Ready-to-Wear',
    description: 'Trendy fashion boutique website with video lookbooks, interactive size guide modal, Instagram shoppable integration, and currency switcher.',
    tools: ['WordPress', 'WooCommerce', 'Elementor', 'Multi-Currency'],
    results: 'Seamless cross-border shopping experience across UK, US, and EU customers.',
    isSample: false,
    accentColor: '#7C3AED',
    aspect: '16:9',
    imageUrl: '/src/assets/images/web_fashion_velvet_1794141481094.jpg',
    imagePlaceholderText: 'Velvet & Silk — Boutique Apparel',
    tags: ['Fashion', 'Lookbook', 'WooCommerce', 'Global'],
  },
  {
    id: 'ig-skincare-carousel',
    title: 'Skincare Routine 5-Step Carousel',
    category: 'Instagram Post Designs',
    industry: 'Beauty & Skincare',
    description: 'Engaging, aesthetic 7-slide carousel breakdown of active skincare ingredients, designed with soft pastel neutrals and high-retention typography.',
    tools: ['Canva Pro', 'Photoshop', 'Typography Layout'],
    results: 'Generated 2,400+ saves and 180+ organic shares for client page.',
    isSample: false,
    accentColor: '#0D9488',
    aspect: '1:1',
    imageUrl: '/src/assets/images/ig_skincare_carousel_1794141481652.jpg',
    imagePlaceholderText: 'Instagram Carousel — 5-Step Skincare',
    tags: ['Instagram', 'Carousel', 'Canva Design', 'High Saves'],
  },
  {
    id: 'fb-holiday-flash-sale',
    title: 'Holiday Flash Sale Direct-Response Ad',
    category: 'Facebook Marketing Creatives',
    industry: 'E-commerce Accessories',
    description: 'High-contrast Facebook promotional ad creative designed with urgency countdown hook, promo code banner, and bold product hierarchy.',
    tools: ['Canva Pro', 'Direct Response Copy', 'Photoshop'],
    results: 'Delivered 4.2x ROAS across paid Facebook & Instagram campaign.',
    isSample: false,
    accentColor: '#2563EB',
    aspect: '1:1',
    imageUrl: '/src/assets/images/fb_marketing_creative_1794141481950.jpg',
    imagePlaceholderText: 'Facebook Ad — Holiday Flash Sale',
    tags: ['Facebook Ad', 'Direct Response', 'High ROAS', 'Creative'],
  },
  {
    id: 'reel-jewelry-craft',
    title: 'Artisan Diamond Setting Process Reel',
    category: 'Reels & Product Videos',
    industry: 'Fine Jewelry',
    description: 'Short-form vertical video (9:16) capturing macro lens workshop footage, synced to ambient lo-fi beat with dynamic subtitle overlays.',
    tools: ['CapCut Pro', 'Premiere Pro', 'Audio Sync'],
    results: 'Reached 124K organic views and added 850+ new target followers.',
    isSample: false,
    accentColor: '#0284C7',
    aspect: '9:16',
    imageUrl: '/src/assets/images/reel_jewelry_craft_1794141482536.jpg',
    videoUrl: '/videos/reel_jewelry.mp4',
    imagePlaceholderText: 'Viral Reel — Diamond Crafting (9:16)',
    tags: ['Instagram Reel', 'Vertical Video', 'Macro Video', 'Viral'],
  },
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understanding Your Business',
    tagline: 'Discovery & Needs Analysis',
    description: 'We begin with an in-depth consultation to understand your brand identity, target customers, industry competitors, and core conversion goals.',
    deliverables: ['Discovery questionnaire review', 'Competitor visual analysis', 'Scope definition & project milestones'],
    icon: 'Search',
  },
  {
    step: '02',
    title: 'Planning & Strategy',
    tagline: 'Wireframes & Content Blueprint',
    description: 'Mapping out page sitemaps, user flows, content pillars, and design moodboards to ensure every element serves a specific purpose.',
    deliverables: ['Page layout wireframes', 'Social media 30-day content pillars', 'Font, color palette & typography moodboard'],
    icon: 'Compass',
  },
  {
    step: '03',
    title: 'Design & Content Creation',
    tagline: 'Pixel-Perfect Build & Creative Execution',
    description: 'Bringing the vision to life using WordPress and Elementor Pro, alongside crafting high-resolution social graphics, reels, and persuasive copy.',
    deliverables: ['Interactive website prototype', 'Mobile/tablet responsive fine-tuning', 'Branded post creatives & reels'],
    icon: 'PenTool',
  },
  {
    step: '04',
    title: 'Review & Approval',
    tagline: 'Collaborative Refinement',
    description: 'You review the live development link or social calendar. We make revisions promptly until you are 100% satisfied with every detail.',
    deliverables: ['Client feedback incorporation', 'Speed & security stress tests', 'Form submission & booking tests'],
    icon: 'CheckCircle2',
  },
  {
    step: '05',
    title: 'Publishing & Ongoing Support',
    tagline: 'Official Launch & Growth',
    description: 'We connect your domain, configure SSL, activate analytics, launch the site, schedule your social calendar, and provide 30-day post-launch support.',
    deliverables: ['Live domain launch checklist', 'Meta Business Suite scheduled rollout', '30-day post-launch warranty & video tutorial'],
    icon: 'Rocket',
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: '6+ Years of Experience',
    description: 'Deep, hands-on mastery in WordPress, Elementor, and social media algorithms built across hundreds of client campaigns worldwide.',
    icon: 'Award',
  },
  {
    title: 'Fiverr Level 2 Seller',
    description: 'A verified track record with dozens of 5-star reviews, consistent on-time deliveries, and trusted international client satisfaction.',
    icon: 'CheckCheck',
  },
  {
    title: 'Professional & Modern Designs',
    description: 'No generic cookie-cutter templates. Every website and social graphic is custom styled to look clean, high-end, and international-agency grade.',
    icon: 'Sparkles',
  },
  {
    title: 'Affordable Solutions',
    description: 'Top-tier agency quality without the inflated agency price tag, offering maximum return on investment for small businesses and founders.',
    icon: 'BadgePercent',
  },
  {
    title: 'Reliable Communication',
    description: 'Quick responses within 1-2 hours, clear milestone updates, screen recordings, and friendly English communication throughout.',
    icon: 'MessageSquare',
  },
  {
    title: 'Client-Focused Approach',
    description: 'Your business goals come first. We focus on layouts and content strategies that actually convert traffic into paying inquiries.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Ongoing Support',
    description: 'We do not disappear after launch. Enjoy 30 days of free post-launch support, video walkthroughs, and optional monthly maintenance.',
    icon: 'Headphones',
  },
];

export const SERVICE_PACKAGES: PackageTier[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    tagline: 'Ideal for small businesses launching their first professional digital presence.',
    popular: false,
    idealFor: 'Startups, Solo Founders, Local Salons & Pop-Up Shops',
    features: [
      'High-converting 1-Page WordPress Landing Page or Starter Site',
      'Pixel-perfect Elementor Pro design',
      '100% Mobile, Tablet & Desktop Responsive',
      'Fast loading speed & Core Web Vitals optimization',
      'Contact form & direct WhatsApp chat button',
      'Social media profile setup or 12 custom branded post designs',
      'Basic on-page SEO & Google indexing configuration',
      '30-day post-launch technical warranty',
    ],
    deliverablesSummary: 'Complete launch-ready single page or 12 branded social creatives',
    turnaroundTime: '3 - 5 Business Days',
    revisions: 'Unlimited Revisions within scope',
  },
  {
    id: 'professional',
    name: 'Professional Package',
    tagline: 'The most popular choice for established businesses seeking full growth.',
    popular: true,
    idealFor: 'Growing Businesses, Salons, Restaurants, Clinics & Service Firms',
    features: [
      'Up to 5 Pages Custom WordPress Website (Home, About, Services, Gallery, Contact)',
      'Custom Elementor Pro structure with drag-and-drop client access',
      'Advanced appointment booking or interactive menu/services system',
      'Full monthly Social Media Management (20 branded posts + 4 high-retention Reels)',
      'Hook-driven caption copywriting + targeted hashtag strategy sets',
      'Monthly interactive content calendar with pre-scheduled publishing',
      'Before & After Profile Optimization (Bio, highlights, link hub)',
      'Personalized client video training on editing text & images',
    ],
    deliverablesSummary: 'Full 5-page custom website + 1 Month complete social media management',
    turnaroundTime: '7 - 10 Business Days',
    revisions: 'Unlimited Revisions until 100% satisfied',
  },
  {
    id: 'premium',
    name: 'Premium Growth Package',
    tagline: 'The all-in-one powerhouse for e-commerce stores and luxury brands.',
    popular: false,
    idealFor: 'Online Boutiques, Jewelry Brands, Multi-location Companies & E-commerce',
    features: [
      'Full WooCommerce E-commerce Store (Up to 15 products configured)',
      'Product variations, secure payment gateways (Stripe/PayPal), shipping & tax setup',
      'Slide-out cart drawer, customer wishlist & review system',
      'Complete Omnichannel Social Media Management (Instagram + Facebook)',
      '30 Branded Posts + 8 Reels / Short-Form Product Videos per month',
      'Community management, comment responses & active DM lead greeting',
      'Speed optimization score 90+ on Google PageSpeed Insights',
      'Priority 24/7 WhatsApp & Email VIP support channel',
    ],
    deliverablesSummary: 'Full e-commerce store + 30-day high-octane social media management',
    turnaroundTime: '12 - 16 Business Days',
    revisions: 'VIP Priority Revisions',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Sophie Taylor',
    role: 'Founder & Master Stylist',
    company: 'Maison Hair & Aesthetics Studio',
    location: 'London, United Kingdom',
    rating: 5,
    projectType: 'WordPress Website & Instagram Management',
    feedback: 'Mridul revamped our salon website completely and now manages our Instagram feed. We saw an immediate spike in online booking appointments from new clients who complimented our aesthetic aesthetic. He is communicative, fast, and a true Elementor expert!',
    avatarInitials: 'ST',
    isSample: true,
  },
  {
    id: '2',
    clientName: 'Marco Bellini',
    role: 'Managing Partner',
    company: 'Trattoria Bella & Wine Lounge',
    location: 'Sydney, Australia',
    rating: 5,
    projectType: 'Website Redesign & Social Media Creatives',
    feedback: 'Working with Mridul was seamless from day one. He built our restaurant website with an interactive digital menu and created high-converting Facebook promotions for our weekend tasting nights. Level 2 seller quality without the massive agency overhead!',
    avatarInitials: 'MB',
    isSample: true,
  },
  {
    id: '3',
    clientName: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Aura Fine Jewelry & Diamonds',
    location: 'New York, United States',
    rating: 5,
    projectType: 'WooCommerce Store & Reels Creation',
    feedback: 'Our luxury jewelry brand needed an editorial, elegant website that felt high-end. Mridul delivered beyond expectations! The product zoom, the reels he produced for our diamond crafting, and his ongoing support made him our go-to digital partner.',
    avatarInitials: 'ER',
    isSample: true,
  },
  {
    id: '4',
    clientName: 'Marcus Vance',
    role: 'CEO & Founder',
    company: 'Vance Capital Consulting',
    location: 'Toronto, Canada',
    rating: 5,
    projectType: 'Corporate WordPress & Content Strategy',
    feedback: 'Prompt, professional, and exceptionally talented. He transformed our corporate website into a modern lead-generation machine with crisp Elementor layouts. If you need someone who understands both design and marketing strategy, hire Mridul.',
    avatarInitials: 'MV',
    isSample: true,
  },
];

export const FAQS = [
  {
    question: 'How do we get started on a project together?',
    answer: 'Simply click "Let\'s Work Together" or reach out via WhatsApp/email with your project vision. We will discuss your goals, agree on timeline and scope, and get started right away. If you prefer to order through Fiverr, you can also hire me directly on my Fiverr Level 2 profile.',
  },
  {
    question: 'Can I edit the website myself after you build it?',
    answer: 'Absolutely! I build using WordPress and Elementor Pro, which gives you an intuitive drag-and-drop editor. You will be able to easily update text, change photos, add new products, and publish blog posts. I also provide a personalized video walkthrough showing you exactly how to make edits.',
  },
  {
    question: 'What do I need to provide before we start designing?',
    answer: 'Helpful items include: your logo (if you have one), any existing brand colors, high-resolution photos of your products or business, and written content for each page. If you don\'t have copy or professional photos yet, don\'t worry! I can assist with placeholder copy, licensed stock visuals, and content layout guidance.',
  },
  {
    question: 'How does monthly Social Media Management work?',
    answer: 'At the start of each month, I prepare a full interactive Content Calendar with planned posts, captions, hashtags, and creative visuals. You review and approve the schedule before anything goes live. Once approved, I handle scheduling, reels formatting, and community engagement.',
  },
  {
    question: 'What happens if I need changes after the website is launched?',
    answer: 'All projects include 30 days of complimentary post-launch support and technical warranty. If you spot a glitch or need minor tweaks, I fix it promptly at no extra charge. Ongoing monthly maintenance and support packages are also available.',
  },
  {
    question: 'How do you handle payments and milestone billing?',
    answer: 'For direct clients, projects are typically split into standard milestones (e.g. 50% deposit upon contract start and 50% upon final website approval before live handover). If you prefer escrow protection, we can also work securely through my verified Fiverr Level 2 account.',
  },
];
