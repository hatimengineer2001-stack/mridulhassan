import React, { useState } from 'react';
import { X, Send, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { PROFILE_DATA, SERVICE_PACKAGES } from '../data/portfolioData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultPackage = 'professional',
  defaultService = 'WordPress Website Design',
}) => {
  const [selectedPkg, setSelectedPkg] = useState(defaultPackage);
  const [selectedService, setSelectedService] = useState(defaultService);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (defaultPackage) setSelectedPkg(defaultPackage);
  }, [defaultPackage]);

  React.useEffect(() => {
    if (defaultService) setSelectedService(defaultService);
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSendViaWhatsApp = () => {
    const pkgObj = SERVICE_PACKAGES.find((p) => p.id === selectedPkg);
    const pkgName = pkgObj ? pkgObj.name : 'Custom Scope';
    const text = encodeURIComponent(
      `Hello Mridul!\nI would like to request a custom quote.\n\nPackage: ${pkgName}\nService: ${selectedService}\nName: ${name || 'Prospective Client'}\nEmail: ${email || 'Provided on chat'}\nPhone/WhatsApp: ${phone || 'N/A'}\nNotes: ${notes || 'Looking forward to discussing.'}`
    );
    window.open(`https://wa.me/${PROFILE_DATA.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
    onClose();
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mailtoLink, setMailtoLink] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const pkgObj = SERVICE_PACKAGES.find((p) => p.id === selectedPkg);
    const pkgName = pkgObj ? pkgObj.name : 'Custom Scope';

    const subject = `Quote Request: ${pkgName} (${selectedService}) - ${name}`;
    const body = 
`Hello Mridul,

A client has requested a custom quote from your website:

• Client Name: ${name}
• Email: ${email}
• Phone / WhatsApp: ${phone || 'Not provided'}
• Package Tier: ${pkgName}
• Service: ${selectedService}

Project Requirements & Notes:
${notes || 'Client requested discussion.'}

Sent via Mridul Hassan Portfolio Quote Request`;

    const mailto = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailtoLink(mailto);

    try {
      await fetch(`https://formsubmit.co/ajax/${PROFILE_DATA.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: subject,
          _template: 'table',
          _captcha: 'false',
          name,
          email,
          phone: phone || 'Not provided',
          package: pkgName,
          service: selectedService,
          notes,
        }),
      });
    } catch (err) {
      console.warn('Form submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(mailto, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden z-10 my-8">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="font-display font-bold text-xl text-slate-900">
              Request a Custom Quote
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Discuss your project directly with Mridul Hassan.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-display font-bold text-xl text-slate-900">
                Custom Quote Request Sent!
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                Thank you! I will review your project requirements and send a customized proposal to <strong className="text-slate-900">{email || 'your email'}</strong> within 1-2 hours.
              </p>

              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Send via WhatsApp for Instant Estimate</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Package selector chips */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Select Package Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {SERVICE_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPkg(pkg.id)}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                        selectedPkg === pkg.id
                          ? 'border-emerald-500 bg-emerald-50/60 font-bold text-slate-900 ring-1 ring-emerald-500'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <p className="font-semibold truncate">{pkg.name.replace(' Package', '')}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5 truncate">{pkg.revisions.split(' ')[0]} revs</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Required */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Primary Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                >
                  <option value="WordPress Website Design">WordPress Website Design</option>
                  <option value="Elementor Pro Website Design">Elementor Pro Website Design</option>
                  <option value="WooCommerce Online Store">WooCommerce Online Store</option>
                  <option value="Website Redesign & Revamp">Website Redesign & Revamp</option>
                  <option value="Monthly Social Media Management">Monthly Social Media Management (IG & FB)</option>
                  <option value="Reels & Video Content Creation">Reels & Video Content Creation</option>
                  <option value="Complete Website + SMM Bundle">Complete Website + SMM Bundle</option>
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* WhatsApp or Phone */}
              <div className="space-y-1">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                  WhatsApp Number (Optional for fastest reply)
                </label>
                <input
                  type="text"
                  placeholder="+1 (555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Project Brief */}
              <div className="space-y-1">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                  Brief Project Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell me about your business type, pages needed, or social goals..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none resize-none"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#0F172A] hover:bg-slate-800 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Request Custom Proposal</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors cursor-pointer border border-emerald-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Send Directly on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
