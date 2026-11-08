import React, { useState } from 'react';
import { 
  Globe, 
  Sparkles, 
  ShoppingBag, 
  RefreshCw, 
  ShieldCheck, 
  FileEdit, 
  Instagram, 
  Facebook, 
  Calendar, 
  Image, 
  Video, 
  PenTool, 
  Hash, 
  CheckSquare, 
  Clock, 
  UserCheck, 
  MessageCircle, 
  PlayCircle, 
  Layers, 
  Palette, 
  Cpu, 
  ArrowRight, 
  Check, 
  Layout 
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/portfolioData';

interface ServicesProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-slate-900" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-emerald-600" />;
      case 'Globe': return <Globe className="w-5 h-5 text-blue-600" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-indigo-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-slate-700" />;
      case 'FileEdit': return <FileEdit className="w-5 h-5 text-amber-600" />;
      case 'Instagram': return <Instagram className="w-5 h-5 text-pink-600" />;
      case 'Facebook': return <Facebook className="w-5 h-5 text-blue-600" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-teal-600" />;
      case 'Image': return <Image className="w-5 h-5 text-violet-600" />;
      case 'Video': return <Video className="w-5 h-5 text-rose-600" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-emerald-600" />;
      case 'Hash': return <Hash className="w-5 h-5 text-blue-600" />;
      case 'CheckSquare': return <CheckSquare className="w-5 h-5 text-emerald-700" />;
      case 'Clock': return <Clock className="w-5 h-5 text-amber-600" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-emerald-600" />;
      case 'MessageCircle': return <MessageCircle className="w-5 h-5 text-emerald-600" />;
      case 'PlayCircle': return <PlayCircle className="w-5 h-5 text-red-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'Palette': return <Palette className="w-5 h-5 text-purple-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-600" />;
      default: return <Sparkles className="w-5 h-5 text-slate-700" />;
    }
  };

  const filteredCategories = activeCategoryTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((cat) => cat.id === activeCategoryTab);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
              Full-Spectrum Digital Services
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Crafted For Growth, Built For Conversions.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore specialized website design and social media management services designed to position your brand as an authority in your niche.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/70 rounded-xl shrink-0 overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setActiveCategoryTab('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategoryTab === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Services
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryTab('web-design')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategoryTab === 'web-design'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Website Design
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryTab('social-media')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategoryTab === 'social-media'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Social Media
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryTab('creative-content')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategoryTab === 'creative-content'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Creative Content
            </button>
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              {/* Category Subheader */}
              <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    {category.category}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {category.tagline}
                  </p>
                </div>
                <span className="text-xs font-mono font-medium text-slate-400">
                  {category.services.length} Core Capabilities
                </span>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service: ServiceItem) => {
                  const isExpanded = expandedServiceId === service.id;
                  return (
                    <div
                      key={service.id}
                      className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-slate-300"
                    >
                      <div className="space-y-4">
                        <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                          {getServiceIcon(service.icon)}
                        </div>

                        <div>
                          <h4 className="font-display text-lg font-bold text-slate-900 leading-snug">
                            {service.name}
                          </h4>
                          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Deliverables Checklist */}
                        <div className="pt-2 border-t border-slate-100">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                            Key Deliverables:
                          </p>
                          <ul className="space-y-2">
                            {service.deliverables.map((deliv, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{deliv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card Action */}
                      <div className="pt-6 mt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => onSelectServiceForQuote(service.name)}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-slate-50 hover:bg-[#0F172A] hover:text-white rounded-xl transition-all border border-slate-200 hover:border-transparent cursor-pointer group/btn"
                        >
                          <span>Inquire About This Service</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-emerald-400 group-hover/btn:translate-x-0.5 transition-all" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
