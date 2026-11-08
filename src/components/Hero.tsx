import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Star, 
  Globe2, 
  Briefcase, 
  Code2 
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
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

  const openWhatsApp = () => {
    const text = encodeURIComponent(PROFILE_DATA.whatsappPrefillMessage);
    window.open(`https://wa.me/${PROFILE_DATA.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0A0F1D] text-white">
      {/* Background radial glow & subtle tech grid */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.12),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.1),transparent_50%)] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[520px]">
          {/* Left Column (7 cols): Typography, Name & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Friendly Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 text-xs font-medium shadow-xs">
              <span>Hi 👋, Ready to Launch Your Next Project?</span>
            </div>

            {/* Headline matching user's requested headline & reference */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-slate-300 tracking-tight">
                A Website &amp; Social Media Presence You&apos;ll Be Proud Of
              </h2>
              <div className="flex flex-wrap items-baseline gap-3 pt-1">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                  {PROFILE_DATA.name}
                </h1>
                <span className="px-3 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-display text-xs sm:text-sm font-semibold tracking-wide">
                  WordPress &amp; SMM Specialist
                </span>
              </div>
            </div>

            {/* Subtitle & Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {PROFILE_DATA.subtitle}
            </p>

            {/* Core Deliverable Checkmarks */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 font-medium pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WordPress &amp; Elementor Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full Social Media Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fiverr Level 2 (5.0★ Rated)</span>
              </div>
            </div>

            {/* Two Main Call-To-Action Buttons (Matching reference layout) */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {/* WhatsApp Real-Time Chat */}
              <button
                type="button"
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-slate-950 bg-[#10B981] hover:bg-[#059669] rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 cursor-pointer transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Real-Time Chat</span>
              </button>

              {/* Schedule a Meeting / Request Quote */}
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all shadow-sm cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Request a Quote 📅</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('#portfolio')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>

            {/* Metric Strip (Worked With: 40+ Businesses, 20+ Countries, 11+ Industries) */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs sm:text-sm">
              <span className="text-slate-400 font-medium flex items-center gap-1.5">
                <span>Worked With</span>
                <span className="text-emerald-400">→</span>
              </span>

              <div className="flex items-center gap-2">
                <span className="font-mono text-base font-bold text-white tabular-nums">150+</span>
                <span className="text-slate-400 text-xs">Businesses</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-base font-bold text-white tabular-nums">25+</span>
                <span className="text-slate-400 text-xs">Countries</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-base font-bold text-white tabular-nums">12+</span>
                <span className="text-slate-400 text-xs">Industries</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Mridul Hassan Portrait positioned at the side */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              {/* Soft ambient backlight rings */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-blue-600/15 to-purple-600/10 rounded-full blur-3xl opacity-75 pointer-events-none" />

              {/* Decorative blurred tech badges behind the portrait (matching reference design) */}
              <div className="absolute top-12 -left-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg pointer-events-none hidden sm:flex">
                <span className="font-display font-bold text-xs text-white">WP</span>
              </div>
              <div className="absolute top-1/3 -right-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg pointer-events-none hidden sm:flex">
                <span className="font-display font-bold text-xs text-emerald-400">El</span>
              </div>

              {/* Portrait Container with clean bottom blending */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-slate-800/60 via-slate-900/80 to-[#0A0F1D] shadow-2xl">
                <div className="aspect-[4/5] w-full overflow-hidden flex items-end justify-center">
                  <img
                    src={PROFILE_DATA.avatarImage}
                    alt={PROFILE_DATA.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Subtle dark bottom gradient scrim */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/40 to-transparent pointer-events-none" />
                </div>

                {/* Overlaid Name & Verified Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                  <div>
                    <p className="font-display font-bold text-base sm:text-lg leading-tight drop-shadow-md">
                      {PROFILE_DATA.name}
                    </p>
                    <p className="text-xs text-emerald-400 font-medium">
                      WordPress Designer &amp; Social Media Manager
                    </p>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 text-[11px] font-bold shadow-md">
                    Level 2 ★
                  </div>
                </div>
              </div>

              {/* Floating verified badge (bottom left) */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-sm">
                  ★
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Fiverr Level 2 Seller</p>
                  <p className="text-[11px] text-slate-400">5.0 Star Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What I Can Do For You Teaser Strip (from reference image) */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="text-center mb-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              What I <span className="text-emerald-400">Can Do</span> For You
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
              Crafting stunning websites &amp; seamless social media experiences from concept to conversion.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              { title: 'WordPress Design', desc: 'Custom Elementor sites', href: '#services' },
              { title: 'Social Media Management', desc: 'Instagram & Facebook', href: '#smm-showcase' },
              { title: 'WooCommerce Stores', desc: 'High-converting shops', href: '#services' },
              { title: 'Creative Content', desc: 'Reels, posters & videos', href: '#services' },
            ].map((srv) => (
              <a
                key={srv.title}
                href={srv.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(srv.href);
                }}
                className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 transition-all text-center group cursor-pointer"
              >
                <p className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-emerald-400 transition-colors">
                  {srv.title}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  {srv.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
