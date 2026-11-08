import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Linkedin } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenQuoteModal: (packageTier?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'SMM Showcase', href: '#smm-showcase' },
    { label: 'Process', href: '#process' },
    { label: 'Packages', href: '#packages' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5 text-slate-900'
            : 'bg-[#0A0F1D]/85 backdrop-blur-md border-b border-white/10 py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (4-5 Nav Links) — Zone 3 (1 Primary Action) */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className={`w-9 h-9 rounded-full overflow-hidden border-2 transition-colors shrink-0 shadow-xs ${
                isScrolled ? 'border-slate-200 group-hover:border-emerald-500' : 'border-white/20 group-hover:border-emerald-400'
              }`}>
                <img
                  src={PROFILE_DATA.avatarImage}
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-display font-bold text-lg tracking-tight leading-tight ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  {PROFILE_DATA.name}
                </span>
                <span className={`text-[11px] font-medium tracking-wide ${
                  isScrolled ? 'text-slate-500' : 'text-emerald-400'
                }`}>
                  WordPress &amp; Social Media
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className={`hidden lg:flex items-center gap-7 text-sm font-medium ${
              isScrolled ? 'text-slate-600' : 'text-slate-300'
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#10B981] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 ${
                    isScrolled ? 'hover:text-slate-900' : 'hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Connect on LinkedIn"
                className={`p-2 rounded-lg transition-colors border shrink-0 flex items-center justify-center ${
                  isScrolled
                    ? 'text-sky-700 bg-sky-50 hover:bg-sky-100 border-sky-200/80'
                    : 'text-sky-300 bg-sky-500/15 hover:bg-sky-500/25 border-sky-500/30'
                }`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={openWhatsApp}
                title="Chat on WhatsApp"
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors border whitespace-nowrap shrink-0 cursor-pointer ${
                  isScrolled
                    ? 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border-emerald-200/80'
                    : 'text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border-emerald-500/30'
                }`}
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>+880 1540-638884</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0 cursor-pointer group ${
                  isScrolled
                    ? 'text-white bg-[#0F172A] hover:bg-slate-800'
                    : 'text-slate-950 bg-emerald-400 hover:bg-emerald-300 font-bold'
                }`}
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className={`sm:hidden px-3 py-1.5 text-xs font-semibold rounded-lg ${
                  isScrolled ? 'text-white bg-[#0F172A]' : 'text-slate-950 bg-emerald-400 font-bold'
                }`}
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isScrolled ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100' : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-[65px] right-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col justify-between p-6 overflow-y-auto border-l border-slate-200">
            <div className="space-y-4">
              <div className="pb-3 border-b border-slate-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Navigation</p>
              </div>
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-semibold text-slate-800 hover:text-[#10B981] transition-colors py-2 border-b border-slate-50"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded-xl shadow-sm cursor-pointer"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp (+880 1540-638884)</span>
              </button>

              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 rounded-xl border border-sky-200 cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-sky-600" />
                <span>Connect on LinkedIn</span>
              </a>

              <p className="text-center text-xs text-slate-400 pt-2">
                {PROFILE_DATA.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
