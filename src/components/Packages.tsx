import React from 'react';
import { Check, ArrowRight, Sparkles, Clock, RefreshCw, MessageSquare } from 'lucide-react';
import { SERVICE_PACKAGES, PackageTier } from '../data/portfolioData';

interface PackagesProps {
  onSelectPackageForQuote: (packageId: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackageForQuote }) => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
            Service Packages & Engagements
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tailored Packages Designed For Your Exact Stage of Growth.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every business has unique requirements. Rather than forcing you into rigid fixed tiers, I provide tailored scopes based on your specific goals. Select a package below to discuss a customized proposal.
          </p>
        </div>

        {/* 3 Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICE_PACKAGES.map((pkg: PackageTier) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 relative ${
                pkg.popular
                  ? 'bg-[#0F172A] text-white shadow-xl ring-2 ring-emerald-500/80 lg:-translate-y-2'
                  : 'bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div>
                {/* Package Title & Tagline */}
                <div className="space-y-2 pb-6 border-b border-slate-200/40">
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {pkg.name}
                  </h3>
                  <p className={`text-xs ${pkg.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    {pkg.tagline}
                  </p>
                  
                  {/* Custom Quote Label */}
                  <div className="pt-3">
                    <span className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
                      Custom Quote
                    </span>
                    <p className={`text-xs mt-1 ${pkg.popular ? 'text-emerald-400' : 'text-emerald-700 font-medium'}`}>
                      Tailored to your specific deliverables
                    </p>
                  </div>
                </div>

                {/* Best For */}
                <div className="py-4 border-b border-slate-200/40 text-xs">
                  <span className={`font-semibold ${pkg.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    Ideal for:
                  </span>
                  <p className={`font-medium mt-0.5 ${pkg.popular ? 'text-white' : 'text-slate-800'}`}>
                    {pkg.idealFor}
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="py-6 space-y-3">
                  <p className={`text-xs font-bold uppercase tracking-wider ${pkg.popular ? 'text-slate-400' : 'text-slate-400'}`}>
                    Included Scope:
                  </p>
                  <ul className="space-y-3">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        <span className={`leading-relaxed ${pkg.popular ? 'text-slate-200' : 'text-slate-700'}`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Package Meta & CTA */}
              <div className={`pt-6 border-t ${pkg.popular ? 'border-slate-800' : 'border-slate-200'} space-y-4`}>
                <div className={`grid grid-cols-2 gap-2 text-xs ${pkg.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.turnaroundTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{pkg.revisions}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPackageForQuote(pkg.id)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer group ${
                    pkg.popular
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold'
                      : 'bg-[#0F172A] hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>Request a Custom Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing FAQ Note */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Need a hybrid setup combining custom e-commerce design with ongoing monthly social media management?{' '}
          <button
            type="button"
            onClick={() => onSelectPackageForQuote('custom')}
            className="text-emerald-700 font-semibold underline hover:text-emerald-800 cursor-pointer"
          >
            Request a fully customized hybrid proposal
          </button>
        </div>
      </div>
    </section>
  );
};
