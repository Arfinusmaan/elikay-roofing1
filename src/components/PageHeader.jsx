import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/businessInfo';

export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbs = [],
  bgImage = '/images/heroes/hero-services.jpg',
  stats = null,
  ctaText = null,
  ctaLink = null
}) {
  const { isSpanish } = useLanguage();
  const prefix = isSpanish ? '/es' : '';

  return (
    <div className="relative bg-elikay-charcoal text-white overflow-hidden min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] flex items-center border-b border-elikay-charcoalSecondary">
      {/* Background Image with Dark Contrast Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title || 'Elikay Roofing Texas'}
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />
        {/* Grounded dark vignette for crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-elikay-charcoal via-elikay-charcoal/85 to-elikay-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-elikay-charcoal via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          {/* Breadcrumb Navigation */}
          {breadcrumbs.length > 0 && (
            <nav className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-black/40 border border-white/10 text-xs text-gray-300 mb-2" aria-label="Breadcrumb">
              <Link to={`${prefix}/`} className="hover:text-white transition-colors flex items-center gap-1 font-medium">
                <svg className="w-3.5 h-3.5 text-elikay-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>{isSpanish ? 'Inicio' : 'Home'}</span>
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-gray-500">/</span>
                  {crumb.path ? (
                    <Link to={`${prefix}${crumb.path}`} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-elikay-primaryMuted font-semibold">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {/* Brand Category Badge using official logo plum & magenta */}
          {badge && (
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-black/50 border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-elikay-primary" />
                {badge}
              </span>
            </div>
          )}

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl font-body">
              {subtitle}
            </p>
          )}

          {/* Single purposeful CTA with subtle direct call line */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {ctaLink && ctaLink.includes('#') ? (
              <button
                type="button"
                onClick={() => {
                  const hash = ctaLink.substring(ctaLink.indexOf('#') + 1);
                  const targetEl = document.getElementById(hash);
                  if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    window.location.hash = hash;
                  }
                }}
                className="px-7 py-3.5 rounded bg-elikay-primary hover:bg-elikay-primaryHover text-white text-xs sm:text-sm font-bold shadow-elevated transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{ctaText || (isSpanish ? 'Solicitar Presupuesto Gratuito' : 'Request Free Estimate')}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            ) : (
              <Link
                to={ctaLink ? `${prefix}${ctaLink}` : `${prefix}/contact`}
                className="px-7 py-3.5 rounded bg-elikay-primary hover:bg-elikay-primaryHover text-white text-xs sm:text-sm font-bold shadow-elevated transition-all flex items-center gap-2"
              >
                <span>{ctaText || (isSpanish ? 'Solicitar Presupuesto Gratuito' : 'Request Free Estimate')}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            )}
            <a
              href={businessInfo.phoneTel}
              className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2 underline-offset-4 hover:underline"
              title={`Call ${businessInfo.phone}`}
            >
              <span className="w-2 h-2 rounded-full bg-elikay-primary" />
              <span>{isSpanish ? 'O llame directamente al' : 'Or direct call:'} <strong className="text-white">{businessInfo.phone}</strong></span>
            </a>
          </div>

          {/* Quick Trust Badges */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-gray-300">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              13 {isSpanish ? 'Años de Experiencia' : 'Years Experience'}
            </span>
            <span className="text-gray-600">·</span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {isSpanish ? 'Presupuesto Gratuito' : 'Free Estimates'}
            </span>
            <span className="text-gray-600">·</span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {isSpanish ? 'Atención Bilingüe' : 'Bilingual Team'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
