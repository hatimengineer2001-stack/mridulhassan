import React from 'react';
import { 
  Search, 
  Compass, 
  PenTool, 
  CheckCircle2, 
  Rocket, 
  ArrowRight, 
  Check 
} from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../data/portfolioData';

interface ProcessProps {
  onOpenQuoteModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenQuoteModal }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5 text-emerald-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-blue-600" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-purple-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-rose-600" />;
      default: return <Search className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
            Structured Workflow
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How We Turn Your Ideas Into High-Performance Digital Assets.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A battle-tested 5-step collaborative process ensuring complete transparency, zero guesswork, and on-time delivery every time.
          </p>
        </div>

        {/* Process Timeline Steps */}
        <div className="relative">
          {/* Subtle connecting vertical line on desktop */}
          <div className="hidden lg:block absolute left-8 top-10 bottom-10 w-0.5 bg-slate-200" aria-hidden="true" />

          <div className="space-y-12">
            {WORK_PROCESS_STEPS.map((step, index) => (
              <div 
                key={step.step}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start group"
              >
                {/* Step Number Circle Anchor */}
                <div className="lg:col-span-1 flex items-center justify-start lg:justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border-2 border-slate-200 group-hover:border-emerald-500 group-hover:bg-emerald-50 flex items-center justify-center transition-all duration-200 shadow-2xs z-10">
                    <span className="font-mono text-xl font-extrabold text-slate-900 group-hover:text-emerald-700">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Step Content Box */}
                <div className="lg:col-span-11 bg-slate-50 group-hover:bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 transition-all duration-200 shadow-2xs group-hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/80">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white border border-slate-200/60 shadow-2xs">
                        {getStepIcon(step.icon)}
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                          {step.tagline}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      Milestone {step.step} / 05
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-3xl">
                    {step.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-5 pt-4 border-t border-slate-200/60">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      What you receive in this phase:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {step.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 bg-white sm:bg-transparent px-2.5 py-1.5 sm:p-0 rounded border sm:border-0 border-slate-200">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="font-medium">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Guarantee Strip */}
        <div className="mt-16 bg-[#0F172A] text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-xl font-bold">
              Ready to start Step 1 with a quick discovery chat?
            </h4>
            <p className="text-xs text-slate-300">
              Zero obligation. We will review your goals and provide tailored recommendations.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="px-6 py-3 text-xs font-bold text-slate-900 bg-white hover:bg-emerald-400 rounded-xl transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            Start Your Project Now
          </button>
        </div>
      </div>
    </section>
  );
};
