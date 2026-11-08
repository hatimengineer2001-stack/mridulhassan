import React from 'react';
import { ArrowUp, Instagram, Facebook, Linkedin, Mail, MessageCircle, Heart } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = 2026;

  return (
    <footer className="bg-[#0B132B] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500 shrink-0 shadow-sm">
                <img
                  src={PROFILE_DATA.avatarImage}
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                {PROFILE_DATA.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional WordPress Website Designer, Elementor Specialist, and Social Media Strategist. Helping small businesses, boutiques, salons, and e-commerce stores scale globally.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={PROFILE_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={PROFILE_DATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${PROFILE_DATA.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">All Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio Work</a></li>
              <li><a href="#smm-showcase" className="hover:text-white transition-colors">SMM Showcase</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Work Process</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Pricing Packages</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Form</a></li>
            </ul>
          </div>

          {/* Services Quicklist (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Core Capabilities
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>WordPress Custom Theme Design</li>
              <li>Elementor Pro Page Building</li>
              <li>WooCommerce Online Stores</li>
              <li>Website Speed & On-Page SEO</li>
              <li>Instagram Grid & Story Management</li>
              <li>High-Retention 9:16 Reels Video</li>
              <li>Monthly Content Calendars</li>
            </ul>
          </div>

          {/* Industries Served (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Industries Served
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Beauty Salons, Spas & Clinics</li>
              <li>Restaurants, Cafés & Bakeries</li>
              <li>Fashion Boutiques & Apparel</li>
              <li>Fine Jewelry Stores & Luxury</li>
              <li>Small Businesses & Consultants</li>
              <li>Direct-To-Consumer Online Shops</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Mridul Hassan. All rights reserved. Professional WordPress Website Designer & Social Media Manager.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="p-1.5 rounded-md bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
