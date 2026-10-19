import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { locationsData } from '../data/locationsData';
import { businessInfo } from '../data/businessInfo';

export default function Footer() {
  const { lang, isSpanish, toggleLanguage, t } = useLanguage();
  const prefix = isSpanish ? '/es' : '';

  return (
    <footer className="bg-elikay-charcoal text-white pt-16 pb-12 border-t border-elikay-charcoalSecondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Identity & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <Link to={`${prefix}/`} className="inline-block bg-white p-2.5 rounded">
              <img 
                src="/images/logo/elikay-logo.jpeg" 
                alt="ELIKAY ROOFING LLC" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              {businessInfo.experienceSummary[lang]}
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <span className="w-2 h-2 rounded-full bg-elikay-primary" />
                <span className="font-semibold text-white">{businessInfo.offer[lang]}</span>
                <span className="text-xs text-gray-400">· {businessInfo.bilingualNotice[lang]}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                <a 
                  href={businessInfo.phoneTel} 
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/10 hover:bg-elikay-primary text-white rounded text-xs font-semibold transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{businessInfo.phone}</span>
                </a>

                <a 
                  href={businessInfo.emailMailto}
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/10 hover:bg-elikay-primary text-white rounded text-xs font-semibold transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{businessInfo.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-elikay-mutedBlue">
              {t('footer.servicesTitle')}
            </h3>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 7).map(s => (
                <li key={s.slug}>
                  <Link 
                    to={`${prefix}/services/${s.slug}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {s.title[lang]}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to={`${prefix}/services`}
                  className="text-elikay-mutedBlue hover:text-white font-semibold inline-flex items-center gap-1 pt-1"
                >
                  <span>{isSpanish ? 'Ver los 11 servicios →' : 'View all 11 services →'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-elikay-mutedBlue">
              {t('footer.areasTitle')}
            </h3>
            <ul className="space-y-2 text-xs">
              {locationsData.map(l => (
                <li key={l.slug}>
                  <Link 
                    to={`${prefix}/service-areas/${l.slug}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {l.name}, TX
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Legal */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-elikay-mutedBlue">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to={`${prefix}/portfolio`} className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/about`} className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/faq`} className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.faq')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/contact`} className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link to={`${prefix}/privacy-policy`} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/terms-of-use`} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.termsOfUse')}
                </Link>
              </li>
            </ul>

            {/* Language Switcher in Footer */}
            <div className="pt-3">
              <span className="block text-[11px] text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">
                {isSpanish ? 'Idioma / Language' : 'Language'}
              </span>
              <div className="inline-flex rounded border border-white/20 p-0.5 bg-black/40 text-xs">
                <button
                  type="button"
                  onClick={() => toggleLanguage('en')}
                  className={`px-2.5 py-1 rounded transition-colors ${lang === 'en' ? 'bg-elikay-primary text-white font-bold' : 'text-gray-400 hover:text-white'}`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => toggleLanguage('es')}
                  className={`px-2.5 py-1 rounded transition-colors ${lang === 'es' ? 'bg-elikay-primary text-white font-bold' : 'text-gray-400 hover:text-white'}`}
                >
                  Español
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal Compliance Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} {businessInfo.name}. {t('footer.rights')}
          </p>
          <p className="text-gray-500 text-center md:text-right max-w-xl">
            {isSpanish 
              ? 'El equipo cuenta con 13 años de experiencia en la industria de techos. Presupuestos gratuitos sin compromiso en el área metropolitana de Houston.' 
              : 'The team brings 13 years of hands-on roofing industry experience. Free estimates scheduled across Greater Houston and surrounding areas.'}
          </p>
        </div>

      </div>
    </footer>
  );
}
