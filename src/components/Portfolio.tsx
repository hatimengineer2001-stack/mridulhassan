import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  X, 
  CheckCircle2, 
  Smartphone, 
  Laptop, 
  Eye, 
  Info 
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolioData';

interface PortfolioProps {
  onRequestSimilarProject: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onRequestSimilarProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = [
    'All',
    'Business Websites',
    'E-commerce Websites',
    'Beauty & Salon Websites',
    'Fashion & Jewelry Websites',
    'Instagram Post Designs',
    'Facebook Marketing Creatives',
    'Reels & Product Videos',
  ];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((proj) => proj.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
            Selected Works & Case Studies
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Designed With Precision. Built For Real Business Results.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Browse through sample WordPress sites, WooCommerce shops, social media carousels, and high-impact reels crafted for diverse industries.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 pb-6 overflow-x-auto scrollbar-none no-scrollbar mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Visual Device Frame / Mockup Area */}
                <div 
                  className="relative aspect-video w-full overflow-hidden bg-slate-900 flex flex-col justify-between"
                  style={{ borderBottom: `2px solid ${project.accentColor}` }}
                >
                  {project.imageUrl ? (
                    <div className="relative w-full h-full overflow-hidden group">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-black/30 opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      {/* Top browser bar overlay */}
                      <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between z-10 text-[11px] text-white">
                        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
                          <span className="w-2 h-2 rounded-full bg-rose-400" />
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        </div>
                        <div className="flex items-center gap-1.5">
                          {project.videoUrl && (
                            <span className="bg-rose-600/90 backdrop-blur-md px-2 py-0.5 rounded-full text-white text-[10px] font-bold flex items-center gap-1">
                              <span>▶ Video</span>
                            </span>
                          )}
                          <span className="bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-md font-mono text-[10px]">
                            {project.industry}
                          </span>
                        </div>
                      </div>

                      {/* Bottom title strip */}
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between z-10 text-[11px] text-white">
                        <span className="font-display font-bold text-xs drop-shadow-md">
                          {project.title}
                        </span>
                        <span className="flex items-center gap-1 text-emerald-400 font-semibold group-hover:underline">
                          <span>Inspect</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
                      <div className="flex items-center justify-between z-10">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-rose-400" />
                          <div className="w-2 h-2 rounded-full bg-amber-400" />
                          <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        </div>
                        <div className="text-[11px] font-medium text-slate-300">
                          {project.industry}
                        </div>
                      </div>

                      <div className="my-auto text-center space-y-1 z-10">
                        <p className="text-white font-display font-bold text-lg sm:text-xl drop-shadow-md">
                          {project.title}
                        </p>
                        <p className="text-xs text-slate-300 line-clamp-1">
                          {project.imagePlaceholderText}
                        </p>
                      </div>

                      <div className="flex items-center justify-between z-10 text-[11px] text-slate-300">
                        <span className="font-mono">{project.tools[0]}</span>
                        <span className="flex items-center gap-1 text-emerald-400 group-hover:underline">
                          <span>Inspect Details</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>

                      <div 
                        className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full blur-2xl opacity-30" 
                        style={{ backgroundColor: project.accentColor }} 
                      />
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  {/* Unboxed metadata line with typographic bullet */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="text-slate-900 font-semibold">{project.category}</span>
                    <span>·</span>
                    <span>{project.industry}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Result highlighted */}
                  <div className="pt-2 flex items-start gap-2 text-xs text-emerald-800 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{project.results}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="text-[11px] font-mono text-slate-500">
                      #{tool}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View <ArrowRight className="w-3 h-3 text-emerald-600" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" 
            onClick={() => setSelectedProject(null)} 
          />

          <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col">
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="font-semibold text-slate-900">{selectedProject.category}</span>
                <span>/</span>
                <span>{selectedProject.industry}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-1 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Visual Display */}
              <div 
                className="w-full aspect-video rounded-xl bg-slate-900 overflow-hidden relative shadow-md border border-slate-200"
                style={{ borderBottom: `4px solid ${selectedProject.accentColor}` }}
              >
                {selectedProject.videoUrl ? (
                  <div className="relative w-full h-full flex items-center justify-center bg-black">
                    <video
                      src={selectedProject.videoUrl}
                      controls
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : selectedProject.imageUrl ? (
                  <div className="relative w-full h-full">
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-bold drop-shadow-md">{selectedProject.title}</span>
                      <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] font-mono">
                        {selectedProject.industry}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white flex flex-col justify-between">
                    <div className="flex items-center justify-between z-10">
                      <span className="font-mono text-xs text-slate-300">
                        {selectedProject.industry}
                      </span>
                    </div>

                    <div className="my-auto z-10 text-center space-y-2">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold">
                        {selectedProject.title}
                      </h3>
                      <p className="text-sm text-slate-300 max-w-lg mx-auto">
                        {selectedProject.imagePlaceholderText}
                      </p>
                    </div>

                    <div className="flex items-center justify-between z-10 text-xs text-slate-300">
                      <span>Custom Elementor & WordPress</span>
                      <span>100% Mobile Responsive</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <h4 className="font-display text-base font-bold text-slate-900">
                  Project Overview & Scope
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Results Achieved */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <h5 className="font-display text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                  Demonstrated Impact & Results:
                </h5>
                <p className="text-sm font-semibold text-emerald-950">
                  {selectedProject.results}
                </p>
              </div>

              {/* Tools & Tech Stack */}
              <div>
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Tools & Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((t) => (
                    <span 
                      key={t}
                      className="px-3 py-1 bg-slate-100 text-slate-800 rounded-md text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer / Action */}
            <div className="p-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Want a custom solution like this for your business?
              </span>
              <button
                type="button"
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onRequestSimilarProject(title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <span>Request Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
