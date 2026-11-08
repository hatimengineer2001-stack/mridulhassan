import React from 'react';
import { 
  Award, 
  CheckCheck, 
  Sparkles, 
  BadgePercent, 
  MessageSquare, 
  HeartHandshake, 
  Headphones, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

export const WhyChooseMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6 text-emerald-600" />;
      case 'CheckCheck': return <CheckCheck className="w-6 h-6 text-blue-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-indigo-600" />;
      case 'BadgePercent': return <BadgePercent className="w-6 h-6 text-emerald-700" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-amber-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-rose-600" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-purple-600" />;
      default: return <Sparkles className="w-6 h-6 text-slate-800" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
            The Competitive Edge
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why International Clients Choose To Work With Me.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Combining senior-level WordPress engineering with creative social media execution to deliver dependable, high-converting results.
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_WORK_WITH_ME.map((item, index) => (
            <div
              key={item.title}
              className={`bg-white rounded-2xl p-7 border border-slate-200 shadow-2xs hover:shadow-md transition-all space-y-4 group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                {getIcon(item.icon)}
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Bonus Guarantee Card filling the 8th slot */}
          <div className="bg-gradient-to-br from-[#0F172A] to-slate-800 text-white rounded-2xl p-7 shadow-md flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Client Peace of Mind Guarantee</span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight">
                30 Days Free Support & Video Handover Included
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Every website and social media handover includes custom recorded video tutorials so you or your staff can effortlessly update content, plus 30 days of complimentary technical warranty for bug fixes.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-700/80 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Satisfaction or Revision</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Escrow Option via Fiverr Level 2</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Clean Source Code & No Locked Plugins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
