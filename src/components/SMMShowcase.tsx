import React, { useState, useRef, useEffect } from 'react';
import { 
  Instagram, 
  Facebook, 
  Video, 
  Calendar, 
  Hash, 
  Sparkles, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Music,
  TrendingUp, 
  Eye, 
  Search, 
  SlidersHorizontal,
  Clock
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface SMMShowcaseProps {
  onOpenQuoteModal: () => void;
}

export const SMMShowcase: React.FC<SMMShowcaseProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'instagram' | 'facebook' | 'reels' | 'calendar' | 'before-after' | 'hashtags'>('instagram');
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [activeOptimizationView, setActiveOptimizationView] = useState<'after' | 'before' | 'comparison'>('comparison');

  // Video Reel Playback State
  const [playingInlineReelId, setPlayingInlineReelId] = useState<number | null>(null);
  const [isInlineMuted, setIsInlineMuted] = useState<boolean>(true);
  const [activeModalReel, setActiveModalReel] = useState<any | null>(null);
  const [isModalPlaying, setIsModalPlaying] = useState<boolean>(true);
  const [isModalMuted, setIsModalMuted] = useState<boolean>(false);
  const [likedReels, setLikedReels] = useState<Record<number, boolean>>({});
  const [shareToast, setShareToast] = useState<string | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Instagram Mockup 9 Posts with Real Images
  const igPosts = [
    {
      id: 1,
      title: '3-Step Skincare Routine Guide',
      type: 'Carousel',
      likes: '1,420',
      comments: '84',
      image: '/src/assets/images/ig_skincare_carousel_1794141481652.jpg',
      tag: 'Skincare Guide',
    },
    {
      id: 2,
      title: 'Maison de Beauté — Aesthetic & Salon Hub',
      type: 'Website Reveal',
      likes: '2,890',
      comments: '136',
      image: '/src/assets/images/web_luxury_salon_1794140856586.jpg',
      tag: 'Client Reveal',
    },
    {
      id: 3,
      title: 'Luxury Balayage Hair Transformation',
      type: 'Single Post',
      likes: '4,105',
      comments: '210',
      image: '/src/assets/images/ig_salon_feed_photo_1794141482250.jpg',
      tag: 'Transformation',
    },
    {
      id: 4,
      title: 'Apex Capital — Wealth Management Web Design',
      type: 'Case Study',
      likes: '3,210',
      comments: '178',
      image: '/src/assets/images/web_corporate_apex_1794140853051.jpg',
      tag: 'Case Study',
    },
    {
      id: 5,
      title: 'Aura Fine Jewels — Handcrafted Diamonds',
      type: 'E-Commerce',
      likes: '1,840',
      comments: '92',
      image: '/src/assets/images/web_fine_jewelry_1794140855550.jpg',
      tag: 'Jewelry Store',
    },
    {
      id: 6,
      title: 'Setting a 2ct Radiant Diamond in Studio',
      type: 'Viral Reel',
      likes: '12.4K',
      comments: '640',
      image: '/src/assets/images/reel_jewelry_craft_1794141482536.jpg',
      tag: 'Behind The Scenes',
    },
    {
      id: 7,
      title: 'Trattoria Bella — Artisanal Italian Dining',
      type: 'Restaurant Web',
      likes: '2,340',
      comments: '115',
      image: '/src/assets/images/web_italian_bistro_1794140856367.jpg',
      tag: 'Food & Wine',
    },
    {
      id: 8,
      title: 'Elevate Your Everyday — 30% Flash Sale',
      type: 'Ad Creative',
      likes: '3,650',
      comments: '194',
      image: '/src/assets/images/fb_marketing_creative_1794141481950.jpg',
      tag: 'Paid Campaign',
    },
    {
      id: 9,
      title: 'Velvet & Silk — Ready-To-Wear Lookbook',
      type: 'Fashion Boutique',
      likes: '5,120',
      comments: '298',
      image: '/src/assets/images/web_fashion_velvet_1794141481094.jpg',
      tag: 'Lookbook',
    },
  ];

  // Reels Mockup with real 9:16 playable MP4 videos
  const reelsList = [
    {
      id: 1,
      title: 'Fine Jewelry Diamond Setting Workshop (9:16)',
      views: '300.5K',
      likes: '18.4K',
      sound: 'Original Audio · Ambient Lo-Fi Luxury',
      industry: 'Fine Jewelry',
      thumbnail: '/src/assets/images/reel_jewelry_craft_1794141482536.jpg',
      videoUrl: '/videos/reel_jewelry.mp4',
      badge: 'Trending 🔥',
      caption: 'Precision prong setting of a 2.5ct brilliant cut diamond in 18k yellow gold. Crafted for high organic reach.',
      hashtags: '#finejewelry #diamondsetting #goldsmith #luxurycraft #bespokejewelry',
    },
    {
      id: 2,
      title: 'Salon Transformation: Balayage & Gloss Finish',
      views: '89.2K',
      likes: '6.1K',
      sound: 'Trending Beat · Upbeat Pop Aesthetic',
      industry: 'Beauty & Hair',
      thumbnail: '/src/assets/images/ig_salon_feed_photo_1794141482250.jpg',
      videoUrl: '/videos/reel_salon.mp4',
      badge: 'High Saves 💾',
      caption: 'From brassy tones to creamy blonde balayage with high-gloss liquid toner. Client booked via Instagram link in bio.',
      hashtags: '#balayage #hairtransformation #londonsalon #blondehair #hairgoals',
    },
    {
      id: 3,
      title: 'Chef Preparing Artisanal Truffle Pasta',
      views: '67.8K',
      likes: '4.9K',
      sound: 'Sizzling Kitchen Ambience · Relaxing Dining',
      industry: 'Restaurant & Dining',
      thumbnail: '/src/assets/images/web_italian_bistro_1794140856367.jpg',
      videoUrl: '/videos/reel_chef.mp4',
      badge: 'Viral Hook 🍝',
      caption: 'Handmade tagliolini tossed with butter and aged Parmigiano Reggiano, topped with shaved black truffle.',
      hashtags: '#italianfood #pasta #trufflepasta #finedining #foodreels #cheflife',
    },
    {
      id: 4,
      title: 'Lumière Organic Skincare Product Ritual',
      views: '112.1K',
      likes: '9.2K',
      sound: 'Soft Lo-Fi Acoustic Beats',
      industry: 'Organic Beauty',
      thumbnail: '/src/assets/images/ig_skincare_carousel_1794141481652.jpg',
      videoUrl: '/videos/reel_skincare.mp4',
      badge: '112K Views 🌿',
      caption: 'The morning glow ritual. Clean botanical actives designed for radiant skin and high conversion ad performance.',
      hashtags: '#organicskincare #glowingskin #skincareroutine #cleanbeauty #beautyreels',
    },
  ];

  const toggleInlinePlay = (reelId: number) => {
    if (playingInlineReelId === reelId) {
      setPlayingInlineReelId(null);
    } else {
      setPlayingInlineReelId(reelId);
    }
  };

  const handleOpenModal = (reel: typeof reelsList[0]) => {
    setActiveModalReel(reel);
    setIsModalPlaying(true);
    setIsModalMuted(false);
  };

  const handleNextReel = () => {
    if (!activeModalReel) return;
    const currentIndex = reelsList.findIndex((r) => r.id === activeModalReel.id);
    const nextIndex = (currentIndex + 1) % reelsList.length;
    setActiveModalReel(reelsList[nextIndex]);
    setIsModalPlaying(true);
  };

  const handlePrevReel = () => {
    if (!activeModalReel) return;
    const currentIndex = reelsList.findIndex((r) => r.id === activeModalReel.id);
    const prevIndex = (currentIndex - 1 + reelsList.length) % reelsList.length;
    setActiveModalReel(reelsList[prevIndex]);
    setIsModalPlaying(true);
  };

  const toggleLikeReel = (reelId: number) => {
    setLikedReels((prev) => ({
      ...prev,
      [reelId]: !prev[reelId],
    }));
  };

  const handleShareReel = (reel: typeof reelsList[0]) => {
    const text = encodeURIComponent(`Check out this 9:16 high-retention reel produced by Mridul Hassan: ${reel.title}`);
    window.open(`https://wa.me/${PROFILE_DATA.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
    setShareToast('Opening WhatsApp to share this reel style!');
    setTimeout(() => setShareToast(null), 3000);
  };

  // Calendar Plan by Week
  const calendarWeeks: Record<number, Array<{ day: string; pillar: string; title: string; format: string; status: string }>> = {
    1: [
      { day: 'Mon', pillar: 'Educational', title: '5 Website Red Flags Killing Your Conversion Rate', format: 'Carousel (8 Slides)', status: 'Scheduled' },
      { day: 'Tue', pillar: 'Behind The Scenes', title: 'How We Wireframe An Elementor Home Page', format: 'Reel (9:16)', status: 'Approved' },
      { day: 'Wed', pillar: 'Social Proof', title: 'Client Spotlight: 80+ Bookings for UK Hair Salon', format: 'Single Graphic', status: 'Scheduled' },
      { day: 'Thu', pillar: 'Engagement', title: 'Which Color Palette Fits Your Boutique Best? (Poll)', format: 'Interactive Story', status: 'Published' },
      { day: 'Fri', pillar: 'Promotional', title: 'Free Website Audit Offer For 3 Local Businesses', format: 'High-Impact Carousel', status: 'Scheduled' },
    ],
    2: [
      { day: 'Mon', pillar: 'Educational', title: 'WooCommerce vs Shopify: Which Saves You More Money?', format: 'Comparison Carousel', status: 'Drafted' },
      { day: 'Tue', pillar: 'Engagement', title: 'Quick Quiz: Is Your Website Truly Mobile Responsive?', format: 'Story Sticker', status: 'Scheduled' },
      { day: 'Wed', pillar: 'Promotional', title: 'Restaurant Weekend Special Spotlight Graphic', format: 'Menu Showcase', status: 'Approved' },
      { day: 'Thu', pillar: 'Behind The Scenes', title: 'Editing Video Reels In CapCut: Workflow Tour', format: 'Reel (9:16)', status: 'Scheduled' },
      { day: 'Fri', pillar: 'Social Proof', title: '5-Star Review From Australian Restaurant Partner', format: 'Quote Card', status: 'Scheduled' },
    ],
    3: [
      { day: 'Mon', pillar: 'Educational', title: 'The Exact Hashtag Strategy That Reached 100k Non-Followers', format: 'Step-by-Step Guide', status: 'Drafted' },
      { day: 'Tue', pillar: 'Behind The Scenes', title: 'Client Feedback Call & Revisions Walkthrough', format: 'Short Story Video', status: 'Drafted' },
      { day: 'Wed', pillar: 'Social Proof', title: 'Before & After Profile Optimization: Aesthetics Clinic', format: 'Split Slide Post', status: 'Approved' },
      { day: 'Thu', pillar: 'Promotional', title: 'Book Your Monthly SMM Slot For Next Month', format: 'Direct Response Post', status: 'Scheduled' },
      { day: 'Fri', pillar: 'Engagement', title: 'Weekend Advice: What Is Your Biggest Website Headache?', format: 'Question Box', status: 'Drafted' },
    ],
    4: [
      { day: 'Mon', pillar: 'Educational', title: '3 Essential SEO Tweaks Every Small Business Needs', format: 'Carousel', status: 'Drafted' },
      { day: 'Tue', pillar: 'Promotional', title: 'New Website Launch Announcement: Trattoria Bella', format: 'Showcase Reel', status: 'Approved' },
      { day: 'Wed', pillar: 'Behind The Scenes', title: 'Curating A Month Of Content In One Afternoon', format: 'Timelapse Video', status: 'Drafted' },
      { day: 'Thu', pillar: 'Engagement', title: 'Tap to vote: Minimalist Clean vs Bold Energetic', format: 'Poll Stories', status: 'Drafted' },
      { day: 'Fri', pillar: 'Social Proof', title: 'Monthly Metrics Recap: +240% Reach Across Channels', format: 'Infographic Graphic', status: 'Scheduled' },
    ],
  };

  return (
    <section id="smm-showcase" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
            Social Media Management Showcase
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Curated Feeds, Viral Reels & Systematic Content Calendars.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            See exactly how I plan, design, schedule, and optimize social media accounts for high retention, brand credibility, and inbound lead generation.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-200/80 rounded-2xl overflow-x-auto scrollbar-none mb-10 max-w-full">
          <button
            type="button"
            onClick={() => setActiveTab('instagram')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'instagram'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Instagram Feed Mockup</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('before-after')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'before-after'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Profile Optimization (Before & After)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('calendar')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'calendar'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-4 h-4 text-teal-600" />
            <span>Monthly Content Calendar</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('reels')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'reels'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Video className="w-4 h-4 text-rose-600" />
            <span>Reels & Video Covers</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('facebook')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'facebook'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Facebook className="w-4 h-4 text-blue-600" />
            <span>Facebook Marketing Creative</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('hashtags')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'hashtags'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Hash className="w-4 h-4 text-emerald-600" />
            <span>Hashtag Strategy</span>
          </button>
        </div>

        {/* Tab 1: Instagram Feed Mockup */}
        {activeTab === 'instagram' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            {/* Instagram Profile Header */}
            <div className="max-w-2xl mx-auto border-b border-slate-100 pb-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
                    <div className="w-full h-full rounded-full bg-white p-0.5 overflow-hidden">
                      <img
                        src={PROFILE_DATA.avatarImage}
                        alt={PROFILE_DATA.name}
                        className="w-full h-full object-cover object-top rounded-full"
                      />
                    </div>
                  </div>
                  <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
                    ✓
                  </span>
                </div>

                <div className="space-y-3 text-center sm:text-left flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <h3 className="font-display font-bold text-xl text-slate-900">
                      mridulhassan.designs
                    </h3>
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg">
                      Fiverr Level 2 Seller
                    </span>
                  </div>

                  <div className="flex items-center justify-center sm:justify-start gap-6 text-xs text-slate-600">
                    <span><strong className="text-slate-900 font-bold">142</strong> posts</span>
                    <span><strong className="text-slate-900 font-bold">12.8k</strong> followers</span>
                    <span><strong className="text-slate-900 font-bold">480</strong> following</span>
                  </div>

                  <div className="text-xs text-slate-700 space-y-1">
                    <p className="font-semibold text-slate-900">Mridul Hassan | Web Designer & SMM</p>
                    <p>✨ WordPress & Elementor Expert · 6+ Years Experience</p>
                    <p>📈 Growing Boutiques, Salons, Restaurants & Brands Worldwide</p>
                    <p className="text-emerald-700 font-medium">🔗 mridulhassan-portfolio.com/book-now</p>
                  </div>
                </div>
              </div>

              {/* Story Highlights Circles */}
              <div className="flex items-center justify-center sm:justify-start gap-5 pt-8 overflow-x-auto pb-2">
                {[
                  { name: 'Web Work', icon: '💻' },
                  { name: 'Results', icon: '📈' },
                  { name: 'Client Love', icon: '⭐' },
                  { name: 'Tips & Tricks', icon: '💡' },
                  { name: 'FAQ', icon: '❓' },
                ].map((hl) => (
                  <div key={hl.name} className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group">
                    <div className="w-14 h-14 rounded-full border-2 border-slate-200 p-0.5 group-hover:border-emerald-500 transition-colors">
                      <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center text-lg">
                        {hl.icon}
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-600 group-hover:text-slate-900">
                      {hl.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 9-Grid Posts */}
            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
                Curated 9-Post Aesthetic Feed Grid
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {igPosts.map((post) => (
                  <div
                    key={post.id}
                    className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-2xs hover:shadow-md transition-all"
                  >
                    <div className="w-full h-full relative overflow-hidden bg-slate-900">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] text-white/90 z-10">
                        <span className="px-2 py-0.5 bg-black/50 backdrop-blur-md rounded font-semibold text-[9px]">
                          {post.type}
                        </span>
                        <span className="px-2 py-0.5 bg-emerald-500/80 backdrop-blur-md rounded font-mono text-[9px] font-bold text-white">
                          {post.tag}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
                        <p className="text-[11px] sm:text-xs font-bold text-white leading-tight line-clamp-2 drop-shadow-md">
                          {post.title}
                        </p>
                      </div>
                    </div>

                    {/* Hover Stats Scrim */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white text-xs font-semibold">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 fill-white" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Profile Optimization (Before & After) */}
        {activeTab === 'before-after' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-2">
              <h3 className="font-display font-bold text-2xl text-slate-900">
                Instagram Profile Optimization
              </h3>
              <p className="text-sm text-slate-600">
                Turn your Instagram profile into a customer-generating funnel with strategic SEO keywords, clear value proposition, branded highlights, and direct action triggers.
              </p>
            </div>

            {/* Split Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* BEFORE CARD */}
              <div className="bg-rose-50/50 rounded-2xl border-2 border-dashed border-rose-200 p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-rose-200/80">
                  <span className="px-2.5 py-1 rounded bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
                    ❌ Before Optimization
                  </span>
                  <span className="text-xs text-rose-600 font-medium">Unoptimized Bio</span>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-300 text-slate-600 flex items-center justify-center font-bold">
                      ?
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">bella_hair_london99</p>
                      <p className="text-slate-400">Random username with numbers</p>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-rose-100 space-y-1.5">
                    <p className="font-bold text-slate-700">Bella Hair</p>
                    <p className="text-slate-500 italic">&ldquo;Hair stylist in London. Lover of dogs and coffee. DM for prices or appointments ❤️&rdquo;</p>
                  </div>

                  <div className="space-y-1.5 pt-2 text-rose-800">
                    <p className="font-semibold text-slate-800">Critical Weaknesses:</p>
                    <p>• Zero search keywords for people searching &ldquo;London Hair Salon&rdquo;</p>
                    <p>• No website or direct booking link (relying solely on slow DMs)</p>
                    <p>• No organized highlights (reviews, pricing, or portfolio work)</p>
                    <p>• Inconsistent branding and disjointed visual identity</p>
                  </div>
                </div>
              </div>

              {/* AFTER CARD */}
              <div className="bg-emerald-50/60 rounded-2xl border-2 border-emerald-300 p-6 space-y-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-emerald-200">
                  <span className="px-2.5 py-1 rounded bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider">
                    ✅ After Mridul&apos;s Optimization
                  </span>
                  <span className="text-xs text-emerald-700 font-bold">+280% Inbound Inquiries</span>
                </div>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#0F172A] text-emerald-400 flex items-center justify-center font-bold text-sm border-2 border-emerald-500">
                      BH
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">bellahair.london</p>
                      <p className="text-emerald-700 font-medium">Clean, branded, professional handle</p>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-emerald-200 shadow-xs space-y-1.5">
                    <p className="font-bold text-slate-900">Bella Hair Studio | London Balayage & Extensions</p>
                    <p className="text-slate-700">✨ Award-Winning Specialists in Balayage, Blonde & Hair Care</p>
                    <p className="text-slate-700">📍 Mayfair, London · 2,500+ Satisfied Clients</p>
                    <p className="text-emerald-700 font-bold">👇 Tap below to book appointments & view treatment menu:</p>
                    <p className="text-blue-600 font-semibold underline">bellahairlondon.co.uk/book</p>
                  </div>

                  <div className="space-y-1.5 pt-2 text-emerald-900">
                    <p className="font-semibold text-slate-900">High-Conversion Upgrades:</p>
                    <p>• Ranked top 3 on Instagram Search for London Balayage</p>
                    <p>• Integrated direct WordPress booking engine link</p>
                    <p>• 5 branded custom highlight covers (Reviews, Menu, Results, Care, Team)</p>
                    <p>• Cohesive aesthetic color palette aligned with salon decor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Monthly Content Calendar */}
        {activeTab === 'calendar' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-slate-900">
                  Monthly Content Calendar Blueprint
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Balanced 4-pillar schedule: Educational, Behind The Scenes, Social Proof & Direct Promotional Hooks.
                </p>
              </div>

              {/* Week switcher */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                {[1, 2, 3, 4].map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setSelectedWeek(w)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      selectedWeek === w
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Week {w}
                  </button>
                ))}
              </div>
            </div>

            {/* Weekly Schedule Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 uppercase tracking-wider font-semibold">
                    <th className="py-3 px-4">Day</th>
                    <th className="py-3 px-4">Content Pillar</th>
                    <th className="py-3 px-4">Post Topic & Working Hook</th>
                    <th className="py-3 px-4">Asset Format</th>
                    <th className="py-3 px-4 text-right">Workflow Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {calendarWeeks[selectedWeek].map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        {item.day}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                          item.pillar === 'Educational' ? 'bg-blue-50 text-blue-700' :
                          item.pillar === 'Behind The Scenes' ? 'bg-purple-50 text-purple-700' :
                          item.pillar === 'Social Proof' ? 'bg-emerald-50 text-emerald-700' :
                          'bg-amber-50 text-amber-800'
                        }`}>
                          {item.pillar}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-800">
                        {item.title}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500">
                        {item.format}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{item.status}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Pre-scheduled through Meta Business Suite for automated peak-hour publishing.</span>
              </div>
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="font-semibold text-slate-900 hover:text-emerald-700 underline flex items-center gap-1 cursor-pointer"
              >
                Request custom content calendar for your niche <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Reels & Video Covers */}
        {activeTab === 'reels' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Interactive Video Player · Tap to Play</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900">
                High-Retention 9:16 Vertical Video Production
              </h3>
              <p className="text-sm text-slate-600">
                Click any video card below to watch it play immediately in 9:16 vertical reel format. You can play inline or expand to full Instagram Reel mode!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reelsList.map((reel) => {
                const isPlaying = playingInlineReelId === reel.id;
                const isLiked = likedReels[reel.id];

                return (
                  <div
                    key={reel.id}
                    className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md group flex flex-col justify-between p-4 cursor-pointer select-none transition-all duration-300 hover:shadow-xl hover:border-emerald-500/50"
                    onClick={(e) => {
                      // Prevent modal if clicking on buttons
                      if ((e.target as HTMLElement).closest('button')) return;
                      toggleInlinePlay(reel.id);
                    }}
                  >
                    {/* Active Video Player or Thumbnail */}
                    {isPlaying ? (
                      <video
                        src={reel.videoUrl}
                        autoPlay
                        loop
                        playsInline
                        muted={isInlineMuted}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={reel.thumbnail}
                        alt={reel.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40 pointer-events-none" />

                    {/* Top Bar Inside Reel */}
                    <div className="flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] text-white font-mono border border-white/10">
                        {reel.industry}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {isPlaying ? (
                          <span className="flex items-center gap-1 text-[10px] text-emerald-300 bg-emerald-950/80 border border-emerald-500/50 backdrop-blur-md px-2.5 py-1 rounded-full font-bold animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>PLAYING</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[10px] text-white bg-rose-600/90 backdrop-blur-md px-2.5 py-1 rounded-full font-bold shadow-xs">
                            <Play className="w-2.5 h-2.5 fill-white" />
                            <span>{reel.views}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Play/Pause Button in Center */}
                    <div className="my-auto mx-auto z-10 flex flex-col items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleInlinePlay(reel.id);
                        }}
                        className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xl cursor-pointer ${
                          isPlaying 
                            ? 'bg-emerald-500/80 hover:bg-emerald-500 backdrop-blur-md scale-95 opacity-80 group-hover:opacity-100' 
                            : 'bg-white/25 hover:bg-emerald-500 backdrop-blur-md hover:scale-110'
                        }`}
                        title={isPlaying ? 'Pause' : 'Play Video'}
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 fill-current" />
                        ) : (
                          <Play className="w-6 h-6 fill-current ml-1" />
                        )}
                      </button>
                      {!isPlaying && (
                        <span className="text-[11px] font-semibold text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to Watch Video
                        </span>
                      )}
                    </div>

                    {/* Bottom Info & Action Buttons */}
                    <div className="z-10 space-y-2">
                      <p className="text-white font-display font-bold text-xs sm:text-sm leading-snug drop-shadow-md line-clamp-2">
                        {reel.title}
                      </p>
                      
                      <div className="flex items-center justify-between text-[10px] text-slate-300">
                        <span className="line-clamp-1">🎵 {reel.sound}</span>
                      </div>

                      {/* Controls Strip */}
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-1.5">
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleInlinePlay(reel.id);
                            }}
                            className="px-2.5 py-1 text-[11px] font-semibold text-white bg-white/15 hover:bg-white/25 rounded-lg backdrop-blur-md transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
                            <span>{isPlaying ? 'Pause' : 'Play'}</span>
                          </button>

                          {isPlaying && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsInlineMuted(!isInlineMuted);
                              }}
                              className="p-1 text-white bg-white/15 hover:bg-white/25 rounded-lg backdrop-blur-md transition-colors cursor-pointer"
                              title={isInlineMuted ? 'Unmute' : 'Mute'}
                            >
                              {isInlineMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                            </button>
                          )}
                        </div>

                        {/* Expand to Full Reel Modal */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenModal(reel);
                          }}
                          className="px-2.5 py-1 text-[11px] font-semibold text-emerald-300 hover:text-white bg-emerald-950/70 hover:bg-emerald-600 border border-emerald-500/40 rounded-lg backdrop-blur-md transition-all flex items-center gap-1 cursor-pointer"
                          title="Open Full Reel Player"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>Reel Mode</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 5: Facebook Marketing Creative */}
        {activeTab === 'facebook' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-2">
              <h3 className="font-display font-bold text-2xl text-slate-900">
                High-ROAS Facebook Advertising & Organic Posts
              </h3>
              <p className="text-sm text-slate-600">
                Engineered for direct-response conversions: clear problem-solution framework, high-contrast imagery, and compelling call-to-actions.
              </p>
            </div>

            {/* Facebook Post Realistic Mockup */}
            <div className="max-w-xl mx-auto bg-white rounded-2xl border border-slate-300 shadow-sm overflow-hidden">
              {/* FB Post Header */}
              <div className="p-4 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0">
                    <img
                      src={PROFILE_DATA.avatarImage}
                      alt={PROFILE_DATA.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-bold text-slate-900">Mridul Hassan — Digital Growth</p>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    </div>
                    <p className="text-[11px] text-slate-500">Sponsored · 🌐</p>
                  </div>
                </div>
                <button type="button" className="text-slate-400 hover:text-slate-600 font-bold">···</button>
              </div>

              {/* FB Post Text */}
              <div className="px-4 py-3 text-xs text-slate-800 space-y-2 leading-relaxed">
                <p>
                  Still relying on an outdated website that looks broken on phones? 📱❌
                </p>
                <p>
                  Here is the reality: <strong className="font-semibold text-slate-900">82% of your local customers will check your website and Instagram before visiting your shop, salon, or restaurant.</strong>
                </p>
                <p>
                  If it takes longer than 2 seconds to load, they tap back and book with your competitor instead.
                </p>
                <p className="text-emerald-700 font-semibold">
                  👉 Let me rebuild your site on WordPress & manage your social feed for 30 days. No bloated agency retainers. Clean code, 5-star Fiverr Level 2 results.
                </p>
              </div>

              {/* FB Post Image Graphic */}
              <div className="relative aspect-square w-full overflow-hidden bg-slate-900 border-y border-slate-200">
                <img
                  src="/src/assets/images/fb_marketing_creative_1794141481950.jpg"
                  alt="Facebook Marketing Campaign Creative"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* FB Ad Bottom CTA Bar */}
              <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-mono">mridulhassan-portfolio.com</p>
                  <p className="font-bold text-slate-900">Custom WordPress & Social Media Strategy</p>
                </div>
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="px-3.5 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold rounded-md transition-colors cursor-pointer"
                >
                  Learn More
                </button>
              </div>

              {/* FB Reactions Bar */}
              <div className="p-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">👍❤️🔥</span>
                  <span>428 people</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>64 comments</span>
                  <span>22 shares</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Hashtag Strategy */}
        {activeTab === 'hashtags' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-2">
              <h3 className="font-display font-bold text-2xl text-slate-900">
                Data-Driven Hashtag Research Matrix
              </h3>
              <p className="text-sm text-slate-600">
                We avoid banned hashtags and organize tags into strategic volume tiers to guarantee your posts rank on recent & top explore feeds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px] uppercase">
                    Tier 1: Low Competition
                  </span>
                  <span className="text-xs font-mono text-slate-400">10K - 50K Posts</span>
                </div>
                <p className="text-xs text-slate-600">
                  Targeted niche tags where your post easily ranks in the &ldquo;Top&rdquo; grid for weeks:
                </p>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-emerald-800 font-mono space-y-1">
                  <p>#londonhairsalonbalayage</p>
                  <p>#elementorwebdesigner</p>
                  <p>#boutiquefashionlondon</p>
                  <p>#artisanalpastamakers</p>
                  <p>#luxurybridaljewelry</p>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px] uppercase">
                    Tier 2: Mid Competition
                  </span>
                  <span className="text-xs font-mono text-slate-400">50K - 300K Posts</span>
                </div>
                <p className="text-xs text-slate-600">
                  Broad industry community hashtags driving consistent organic discovery:
                </p>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-emerald-800 font-mono space-y-1">
                  <p>#wordpressdesigner</p>
                  <p>#boutiqueshopping</p>
                  <p>#salontransformation</p>
                  <p>#italianfoodlovers</p>
                  <p>#handcraftedjewelry</p>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold text-[10px] uppercase">
                    Tier 3: High Discovery
                  </span>
                  <span className="text-xs font-mono text-slate-400">300K - 1M Posts</span>
                </div>
                <p className="text-xs text-slate-600">
                  High-volume category anchors to signal the algorithm what your account is about:
                </p>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-emerald-800 font-mono space-y-1">
                  <p>#webdesigninspiration</p>
                  <p>#socialmediamanager</p>
                  <p>#smallbusinessgrowth</p>
                  <p>#hairandbeautysalon</p>
                  <p>#fashionboutique</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 9:16 Vertical Reel Player Modal (Instagram / TikTok Style) */}
      {activeModalReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop with click to close */}
          <div 
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
            onClick={() => setActiveModalReel(null)}
          />

          {/* Desktop Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrevReel}
            className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur-md transition-all cursor-pointer z-50 border border-white/10 shadow-xl"
            title="Previous Reel"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNextReel}
            className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur-md transition-all cursor-pointer z-50 border border-white/10 shadow-xl"
            title="Next Reel"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Phone Mockup Container (9:16 Aspect Ratio) */}
          <div className="relative w-full max-w-[360px] sm:max-w-[380px] aspect-[9/16] max-h-[92vh] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20 z-50 flex flex-col justify-between">
            {/* Top Phone Header Bar */}
            <div className="absolute top-0 inset-x-0 p-4 z-20 flex items-center justify-between text-white bg-gradient-to-b from-black/80 via-black/30 to-transparent">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalReel(null)}
                  className="p-1.5 rounded-full bg-black/40 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Close Reel"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold border border-white/10">
                  <Instagram className="w-3.5 h-3.5 text-pink-500" />
                  <span>Reel Showcase</span>
                </div>
              </div>

              {/* Sound & Industry Badges */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalMuted(!isModalMuted)}
                  className="p-2 rounded-full bg-black/40 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
                  title={isModalMuted ? 'Unmute Audio' : 'Mute Audio'}
                >
                  {isModalMuted ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-emerald-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Video Element */}
            <div 
              className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center bg-black"
              onClick={() => {
                if (modalVideoRef.current) {
                  if (isModalPlaying) {
                    modalVideoRef.current.pause();
                    setIsModalPlaying(false);
                  } else {
                    modalVideoRef.current.play();
                    setIsModalPlaying(true);
                  }
                }
              }}
            >
              <video
                ref={modalVideoRef}
                src={activeModalReel.videoUrl}
                autoPlay
                loop
                playsInline
                muted={isModalMuted}
                className="w-full h-full object-cover"
                onPlay={() => setIsModalPlaying(true)}
                onPause={() => setIsModalPlaying(false)}
              />

              {/* Central Pause/Play Splash Indicator */}
              {!isModalPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-2xl">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Right Side Vertical Action Rail (Instagram Style) */}
            <div className="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-4 text-white">
              {/* Like Button */}
              <div className="flex flex-col items-center gap-1">
                <button
                  type="button"
                  onClick={() => toggleLikeReel(activeModalReel.id)}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-md ${
                    likedReels[activeModalReel.id]
                      ? 'bg-rose-600 text-white scale-110 shadow-lg shadow-rose-600/50'
                      : 'bg-black/50 text-white hover:bg-white/20'
                  }`}
                  title="Like Reel"
                >
                  <Heart className={`w-5 h-5 ${likedReels[activeModalReel.id] ? 'fill-white' : ''}`} />
                </button>
                <span className="text-[11px] font-bold text-white drop-shadow-md">
                  {likedReels[activeModalReel.id] 
                    ? `${(parseFloat(activeModalReel.likes) + 0.1).toFixed(1)}K` 
                    : activeModalReel.likes}
                </span>
              </div>

              {/* Share via WhatsApp */}
              <div className="flex flex-col items-center gap-1">
                <button
                  type="button"
                  onClick={() => handleShareReel(activeModalReel)}
                  className="w-11 h-11 rounded-full bg-black/50 hover:bg-emerald-500 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
                  title="Share / Inquire"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <span className="text-[10px] font-medium text-white drop-shadow-md">Share</span>
              </div>

              {/* Audio Vinyl Disc Icon */}
              <div className="w-9 h-9 rounded-full bg-slate-900 border-2 border-white/30 flex items-center justify-center text-white overflow-hidden shadow-lg animate-spin" style={{ animationDuration: '4s' }}>
                <Music className="w-4 h-4 text-emerald-400" />
              </div>
            </div>

            {/* Bottom Info Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 z-20 bg-gradient-to-t from-black via-black/80 to-transparent text-white space-y-2.5">
              {/* Creator Profile Lockup */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-500 shrink-0 shadow-md">
                  <img
                    src={PROFILE_DATA.avatarImage}
                    alt={PROFILE_DATA.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs sm:text-sm drop-shadow-md">
                      {PROFILE_DATA.name}
                    </span>
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-slate-950 text-[9px] font-bold flex items-center justify-center">
                      ✓
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium">
                    WordPress &amp; Social Media Pro
                  </span>
                </div>
              </div>

              {/* Caption & Hashtags */}
              <p className="text-xs text-slate-200 leading-snug line-clamp-2 drop-shadow-md">
                {activeModalReel.caption}
              </p>
              <p className="text-[10px] text-emerald-400 font-mono line-clamp-1">
                {activeModalReel.hashtags}
              </p>

              {/* Sound Audio Tag */}
              <div className="flex items-center gap-1.5 text-[10px] text-slate-300 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-md w-fit">
                <Music className="w-3 h-3 text-emerald-400" />
                <span className="truncate max-w-[200px]">{activeModalReel.sound}</span>
              </div>

              {/* Order This Reel CTA Button */}
              <button
                type="button"
                onClick={() => {
                  setActiveModalReel(null);
                  onOpenQuoteModal();
                }}
                className="w-full mt-2 py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Video Reels Like This</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Toast */}
      {shareToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0F172A] text-white px-4 py-3 rounded-xl shadow-2xl border border-emerald-500 flex items-center gap-2 text-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{shareToast}</span>
        </div>
      )}
    </section>
  );
};
