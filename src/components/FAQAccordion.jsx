import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQAccordion({ items = [] }) {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(prev => prev === idx ? -1 : idx);
  };

  return (
    <div className="space-y-3" role="region" aria-label="FAQ Accordion">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const headingId = `faq-h-${item.id || idx}`;
        const panelId = `faq-p-${item.id || idx}`;

        return (
          <div 
            key={item.id || idx}
            className={`rounded-lg border transition-all duration-200 overflow-hidden ${
              isOpen 
                ? 'bg-white border-elikay-primary/40 shadow-subtle' 
                : 'bg-white/70 hover:bg-white border-gray-200/80'
            }`}
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-elikay-primary rounded-lg"
              >
                <span className={`text-sm sm:text-base font-bold font-display transition-colors ${
                  isOpen ? 'text-elikay-deepBlue' : 'text-elikay-charcoal'
                }`}>
                  {item.question ? item.question[lang] : item.q[lang]}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 ${
                  isOpen ? 'bg-elikay-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100"
              >
                <p>{item.answer ? item.answer[lang] : item.a[lang]}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
