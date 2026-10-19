import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/businessInfo';

export default function CTASection({
  title,
  subtitle,
  variant = 'split'
}) {
  const { lang, isSpanish, t } = useLanguage();
  const prefix = isSpanish ? '/es' : '';

  const defaultTitle = isSpanish 
    ? '¿Listo para Evaluar el Estado de su Techo?' 
    : 'Ready to Evaluate Your Roof’s Condition?';

  const defaultSubtitle = isSpanish
    ? 'El equipo cuenta con 13 años de experiencia en la industria de techos. Solicite su presupuesto gratuito sin compromiso.'
    : 'The people behind our team bring 13 years of hands-on roofing industry experience. Schedule your free on-site estimate today.';

  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;

  if (variant === 'dark') {
    return (
      <section className="bg-elikay-charcoal text-white py-16 sm:py-20 border-y border-elikay-charcoalSecondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded bg-elikay-blue/20 text-elikay-mutedBlue text-xs font-bold uppercase tracking-wider mb-3">
            {businessInfo.offer[lang]}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white max-w-2xl mx-auto tracking-tight">
            {displayTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            {displaySubtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`${prefix}/contact`}
              className="w-full sm:w-auto px-8 py-3.5 bg-elikay-primary hover:bg-elikay-primaryHover text-white text-sm font-bold rounded-lg shadow-elevated transition-all flex items-center justify-center gap-2"
            >
              <span>{t('common.getFreeEstimate')}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href={businessInfo.phoneTel}
              className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{isSpanish ? 'Llamar al' : 'Direct Call:'} <strong className="text-white underline underline-offset-4">{businessInfo.phone}</strong></span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Split architectural banner (default)
  return (
    <section className="py-14 sm:py-20 bg-elikay-deepBlue text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 backdrop-blur-xs">
          
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-xs font-semibold text-elikay-mutedBlue">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{businessInfo.offer[lang]} · {businessInfo.bilingualNotice[lang]}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              {displayTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {displaySubtitle}
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-col gap-3 w-full sm:w-auto">
            <Link
              to={`${prefix}/contact`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-elikay-primary hover:bg-elikay-primaryHover text-white text-sm font-bold rounded-lg shadow-elevated transition-all text-center gap-2"
            >
              <span>{t('common.getFreeEstimate')}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href={businessInfo.phoneTel}
              className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{isSpanish ? 'O llámenos al' : 'Or direct field line:'} <strong className="text-white underline underline-offset-4">{businessInfo.phone}</strong></span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
