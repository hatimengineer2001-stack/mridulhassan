import React, { useState } from 'react';
import { MessageCircle, FileText, X } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface FloatingActionProps {
  onOpenQuoteModal: () => void;
}

export const FloatingAction: React.FC<FloatingActionProps> = ({ onOpenQuoteModal }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const openWhatsApp = () => {
    const text = encodeURIComponent(PROFILE_DATA.whatsappPrefillMessage);
    window.open(`https://wa.me/${PROFILE_DATA.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <aside aria-label="Quick Connect Actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="bg-[#0F172A] text-white text-xs px-3.5 py-2 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2 max-w-xs animate-bounce-short">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Need a website or social media quote? Chat here!</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss quick chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button Group */}
      <div className="flex items-center gap-2">
        {/* Quick Quote Button */}
        <button
          type="button"
          onClick={onOpenQuoteModal}
          className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 bg-white text-slate-900 hover:bg-slate-50 border border-slate-300 rounded-full shadow-lg text-xs font-bold transition-all hover:scale-105 cursor-pointer"
        >
          <FileText className="w-4 h-4 text-emerald-600" />
          <span>Get Quote</span>
        </button>

        {/* WhatsApp Button */}
        <button
          type="button"
          onClick={openWhatsApp}
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
          aria-label="Chat directly on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </button>
      </div>
    </aside>
  );
};
