import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Code2 
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface AboutProps {
  onOpenQuoteModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
            About Mridul Hassan
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Bridging High-Converting Web Design With Strategic Social Media.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            With 6+ years of dedicated hands-on experience and a verified Fiverr Level 2 Seller track record, I help international brands, small businesses, and boutique owners build memorable digital flagships that convert visitors into loyal customers.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed space-y-4">
              <p>
                Hello! I’m <strong className="text-slate-900 font-semibold">Mridul Hassan</strong>, a professional WordPress Website Designer, Elementor Specialist, and Social Media Strategist. Over the past 6+ years, I have collaborated with businesses across North America, Europe, Australia, and Asia to create modern web experiences and high-engagement social media campaigns.
              </p>
              <p>
                Too many businesses face a common dilemma: they hire a web designer who doesn’t understand social media, or a social media manager who has no technical web skills. <strong className="text-slate-900 font-semibold">I bridge that gap.</strong> I build your WordPress site to match your social media aesthetics and design your social media content to direct traffic straight into your high-converting booking or sales pages.
              </p>
              <p>
                Whether you need a brand-new WooCommerce store for a fashion boutique, a streamlined booking website for a beauty salon, an appetizing interactive menu for a restaurant, or hands-off monthly Instagram management, I provide end-to-end execution with personal attention to detail.
              </p>
            </div>

            {/* Target Industries Grid */}
            <div className="pt-4">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                Industries I Specialize In:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROFILE_DATA.targetIndustries.map((ind) => (
                  <div key={ind} className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 px-3.5 py-2.5 rounded-lg border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded-xl transition-all shadow-sm cursor-pointer group"
              >
                <span>Work With Mridul</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${PROFILE_DATA.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(PROFILE_DATA.whatsappPrefillMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Portrait Card & Credentials */}
          <div className="lg:col-span-5 space-y-5">
            {/* Mridul Portrait & Verified Badge Card */}
            <div className="bg-[#0F172A] text-white p-6 rounded-2xl relative overflow-hidden shadow-lg border border-slate-800">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-500 shrink-0 shadow-md">
                  <img
                    src={PROFILE_DATA.avatarImage}
                    alt={PROFILE_DATA.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-display text-lg font-bold text-white">
                      {PROFILE_DATA.name}
                    </h4>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <p className="text-xs text-emerald-400 font-medium">
                    Fiverr Level 2 Seller · 5.0 ★ Rated
                  </p>
                  <p className="text-[11px] text-slate-400">
                    6+ Years Experience · Bangladesh & Worldwide
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Recognized for consistent 5.0-star customer ratings, prompt on-time delivery, and high repeat-buyer satisfaction across international web design and social media projects.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <p className="text-slate-400">Response Rate</p>
                  <p className="text-lg font-mono font-bold text-white tabular-nums">100%</p>
                </div>
                <div>
                  <p className="text-slate-400">On-Time Delivery</p>
                  <p className="text-lg font-mono font-bold text-white tabular-nums">100%</p>
                </div>
              </div>
            </div>

            {/* Core Tools & Technologies Matrix */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-display text-base font-bold text-slate-900">
                  Primary Tech Stack & Tools
                </h4>
                <Code2 className="w-4 h-4 text-slate-500" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="font-bold text-slate-900 mb-0.5">WordPress & Elementor</p>
                  <p className="text-slate-500">Custom themes & Elementor Pro development</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="font-bold text-slate-900 mb-0.5">WooCommerce</p>
                  <p className="text-slate-500">Stripe, PayPal & cart optimization</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="font-bold text-slate-900 mb-0.5">Meta Business Suite</p>
                  <p className="text-slate-500">Instagram & Facebook scheduling</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="font-bold text-slate-900 mb-0.5">Canva & Photoshop</p>
                  <p className="text-slate-500">High-converting posts, posters & carousels</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="font-bold text-slate-900 mb-0.5">CapCut & Premiere</p>
                  <p className="text-slate-500">9:16 Vertical Reels & promotional clips</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="font-bold text-slate-900 mb-0.5">Wix Studio & Editor</p>
                  <p className="text-slate-500">Alternative CMS platform development</p>
                </div>
              </div>

              <div className="pt-2 text-center">
                <p className="text-xs text-slate-500">
                  Looking for custom tool integration or CRM setup? Just ask!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
