import React from 'react';
import { Star, Quote, Info, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
            Client Feedback & Reputation
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted By Businesses Worldwide.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            See what founders and business directors say about my WordPress craftsmanship, Elementor expertise, and social media campaigns.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                {/* Top Rating & Project Type */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {/* Clean unboxed metadata with dot separator */}
                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <span>{t.projectType}</span>
                    <span>·</span>
                    <span className="text-emerald-600 font-semibold">Verified Client</span>
                  </div>
                </div>

                {/* Feedback Quote */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{t.feedback}&rdquo;
                </p>
              </div>

              {/* Client Info Lockup */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold font-display text-sm">
                    {t.avatarInitials}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900 leading-snug">
                      {t.clientName}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {t.role} · {t.company}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {t.location}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    5.0 ★ Rated
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
