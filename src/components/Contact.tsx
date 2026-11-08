import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Award, 
  Clock, 
  Sparkles, 
  Code2, 
  AlertCircle 
} from 'lucide-react';
import { PROFILE_DATA, SERVICES_DATA, SERVICE_PACKAGES } from '../data/portfolioData';

interface ContactProps {
  initialService?: string;
  initialPackage?: string;
}

export const Contact: React.FC<ContactProps> = ({ 
  initialService = '', 
  initialPackage = '' 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || 'WordPress Website Design',
    packageTier: initialPackage || 'professional',
    budget: '$500 - $1,500',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfigGuide, setShowConfigGuide] = useState(false);

  // Update formData when props change
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  React.useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, packageTier: initialPackage }));
    }
  }, [initialPackage]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'fallback'>('idle');
  const [lastMailtoUrl, setLastMailtoUrl] = useState<string>('');

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Mridul! I submitted a project inquiry on your website.\n\nName: ${formData.name || 'Client'}\nEmail: ${formData.email || 'N/A'}\nService: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message || 'Looking forward to hearing from you.'}`
    );
    window.open(`https://wa.me/${PROFILE_DATA.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailSubject = `New Project Inquiry: ${formData.service} from ${formData.name}`;
    const formattedBody = 
`Hello Mridul,

A new project inquiry has been submitted through your portfolio website:

CLIENT & PROJECT BRIEF
----------------------------------------------------
• Client Name: ${formData.name}
• Client Email: ${formData.email}
• Phone / WhatsApp: ${formData.phone || 'Not provided'}
• Company / Brand: ${formData.company || 'Not provided'}
• Service Requested: ${formData.service}
• Package Tier: ${formData.packageTier}
• Budget Estimate: ${formData.budget}

PROJECT DETAILS & GOALS:
----------------------------------------------------
${formData.message}

----------------------------------------------------
Sent via Mridul Hassan Portfolio Website`;

    const mailto = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(formattedBody)}`;
    setLastMailtoUrl(mailto);

    try {
      // 1. Asynchronously submit to FormSubmit.co which auto-forwards to mridulhassan2014@gmail.com
      const res = await fetch(`https://formsubmit.co/ajax/${PROFILE_DATA.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _template: 'table',
          _captcha: 'false',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          service: formData.service,
          packageTier: formData.packageTier,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmissionStatus('success');
      } else {
        setSubmissionStatus('fallback');
      }
    } catch (err) {
      console.warn('Network submission fallback enabled:', err);
      setSubmissionStatus('fallback');
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Also trigger mailto so client's mail application prepares a copy
      window.open(mailto, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
            Let&apos;s Work Together
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Ready To Launch Your Website Or Scale Your Social Channels?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have a project in mind or need a custom quote? Reach out directly via WhatsApp, email, or send an inquiry through the form below. I respond within 1-2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Channels & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Connect Buttons */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
              <h3 className="font-display text-lg font-bold text-slate-900">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-slate-500">
                Choose the fastest way to get in touch. All links are fully functional.
              </p>

              {/* WhatsApp Direct */}
              <a
                href={`https://wa.me/${PROFILE_DATA.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(PROFILE_DATA.whatsappPrefillMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Chat on WhatsApp</p>
                    <p className="text-[11px] text-emerald-700 font-medium font-mono">{PROFILE_DATA.whatsappDisplay} · Fast response</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Email Direct */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Direct Email</p>
                      <p className="text-[11px] text-slate-500 font-mono select-all">{PROFILE_DATA.email}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={`mailto:${PROFILE_DATA.email}?subject=Project%20Inquiry%20via%20Portfolio`}
                    className="flex-1 text-center py-2 px-3 text-xs font-semibold bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-slate-800 transition-colors"
                  >
                    Open in Mail App
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 py-2 px-3 text-xs font-semibold bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-slate-800 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Fiverr Profile Direct */}
              <a
                href={PROFILE_DATA.fiverrProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00B22D] text-white flex items-center justify-center font-bold text-base">
                    fi
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-bold text-slate-900">Fiverr Level 2 Profile</p>
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        Top Rated
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">Order with Fiverr Escrow Protection</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Social Media Profiles */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900">
                Connect on Social Channels
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PROFILE_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 hover:bg-pink-50 border border-slate-200 hover:border-pink-200 transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span className="text-xs font-semibold text-slate-800 group-hover:text-pink-700">Instagram</span>
                </a>

                <a
                  href={PROFILE_DATA.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-colors group"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-700">Facebook</span>
                </a>

                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-200 transition-colors group col-span-2"
                >
                  <Linkedin className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-semibold text-slate-800 group-hover:text-sky-700">LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Fast Email Delivery Guarantee Card */}
            <div className="bg-emerald-50/80 rounded-2xl p-5 border border-emerald-200/80 text-xs text-emerald-950 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>Automatic Email Routing</span>
              </div>
              <p className="leading-relaxed text-emerald-900/90">
                All submissions are automatically routed directly to Mridul Hassan&apos;s personal inbox at <strong className="font-mono text-emerald-950 font-bold">{PROFILE_DATA.email}</strong>.
              </p>
              <div className="pt-1 flex items-center gap-2 text-[11px] text-emerald-800">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Average response time: <strong>1–2 hours</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2 max-w-lg mx-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      <Check className="w-3 h-3 text-emerald-600" />
                      Email Dispatched Automatically
                    </span>
                    <h3 className="font-display font-bold text-2xl text-slate-900">
                      Inquiry Sent to Mridul Hassan!
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Thank you, <strong className="text-slate-900">{formData.name || 'there'}</strong>! Your project details have been forwarded to <strong className="font-mono text-slate-900">{PROFILE_DATA.email}</strong>.
                    </p>
                  </div>

                  {/* Summary of Submitted Project Brief */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left max-w-lg mx-auto text-xs space-y-2">
                    <p className="font-bold text-slate-900 border-b border-slate-200 pb-1.5">Submitted Project Summary:</p>
                    <div className="grid grid-cols-2 gap-2 text-slate-600">
                      <div><span className="text-slate-400">Service:</span> <span className="font-medium text-slate-900">{formData.service}</span></div>
                      <div><span className="text-slate-400">Budget:</span> <span className="font-medium text-slate-900">{formData.budget}</span></div>
                      <div><span className="text-slate-400">Client:</span> <span className="font-medium text-slate-900">{formData.name}</span></div>
                      <div><span className="text-slate-400">Email:</span> <span className="font-medium text-slate-900">{formData.email}</span></div>
                    </div>
                  </div>

                  {/* Multi-channel Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
                    {lastMailtoUrl && (
                      <a
                        href={lastMailtoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl transition-colors cursor-pointer"
                      >
                        <Mail className="w-4 h-4 text-slate-700" />
                        <span>Open in Email App / Gmail</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-sm cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-950" />
                      <span>Send Instant Copy on WhatsApp</span>
                    </button>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-medium text-slate-500 hover:text-slate-900 underline cursor-pointer"
                    >
                      ← Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      Project Inquiry & Custom Quote Request
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill in your details below and I will reply with an estimate and timeline.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@yourbusiness.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* WhatsApp/Phone & Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        WhatsApp or Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Company Name / Current Website
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bloom Aesthetics / bloom.com"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Primary Service Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Primary Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    >
                      <option value="WordPress Website Design">WordPress Website Design</option>
                      <option value="Elementor Website Design">Elementor Website Design</option>
                      <option value="WooCommerce Online Store">WooCommerce Online Store</option>
                      <option value="Website Redesign & Revamp">Website Redesign & Revamp</option>
                      <option value="Wix Website Design">Wix Website Design</option>
                      <option value="Full Social Media Management (IG & FB)">Full Social Media Management (IG & FB)</option>
                      <option value="Instagram Feed Design & Growth">Instagram Feed Design & Growth</option>
                      <option value="Reels & Short-form Video Production">Reels & Short-form Video Production</option>
                      <option value="Content Calendar & Post Design">Content Calendar & Post Design</option>
                      <option value="Complete Website + SMM Growth Bundle">Complete Website + SMM Growth Bundle</option>
                    </select>
                  </div>

                  {/* Package & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Package Tier of Interest
                      </label>
                      <select
                        value={formData.packageTier}
                        onChange={(e) => setFormData({ ...formData, packageTier: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      >
                        <option value="starter">Starter Package</option>
                        <option value="professional">Professional Package (Most Popular)</option>
                        <option value="premium">Premium Growth Package</option>
                        <option value="custom">Custom Tailored Scope</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Estimated Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      >
                        <option value="Under $500">Under $500 (Starter project)</option>
                        <option value="$500 - $1,500">$500 - $1,500 (Standard website / SMM)</option>
                        <option value="$1,500 - $3,000">$1,500 - $3,000 (Full E-com / Growth bundle)</option>
                        <option value="$3,000+">$3,000+ (Multi-channel enterprise)</option>
                        <option value="Flexible">Flexible / Open to proposal</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Project Details */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Project Details & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me a bit about your business, the goals for this project, your ideal timeline, and any reference websites or competitor profiles you admire..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold text-white bg-[#0F172A] hover:bg-slate-800 disabled:bg-slate-400 rounded-xl transition-all shadow-md cursor-pointer group"
                    >
                      {isSubmitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Strict confidentiality. Your details will never be shared. No marketing spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
