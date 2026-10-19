import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { locationsData } from '../data/locationsData';
import { businessInfo } from '../data/businessInfo';

export default function Navbar() {
  const { lang, isSpanish, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const servicesRef = useRef(null);
  const areasRef = useRef(null);

  // Prefix routes for Spanish
  const prefix = isSpanish ? '/es' : '';

  // Close all menus when location changes
  useEffect(() => {
    setServicesOpen(false);
    setAreasOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
  }, [location.pathname]);

  // Handle mobile navigation reliably with drawer closure and scroll reset
  const handleMobileLink = (e, targetPath) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
    navigate(targetPath);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle scroll detection for glass elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside and Escape key to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(e.target)) {
        setAreasOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setAreasOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-shadow duration-200 border-b py-3 ${
      scrolled 
        ? 'glass-header border-elikay-borderGray/40 shadow-subtle' 
        : 'bg-white/95 border-elikay-borderGray/30'
    }`}>
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            to={`${prefix}/`}
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-elikay-primary rounded py-1 flex-shrink-0"
            aria-label="ELIKAY ROOFING LLC Home"
          >
            <img 
              src="/images/logo/elikay-logo.jpeg" 
              alt="ELIKAY ROOFING LLC" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform hover:scale-[1.02]"
            />
            <div className="hidden 2xl:block">
              <span className="block text-xs font-semibold tracking-wider uppercase text-elikay-deepBlue">
                {businessInfo.offer[lang]}
              </span>
              <span className="block text-[11px] text-gray-500 font-medium">
                {businessInfo.bilingualNotice[lang]}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            <Link 
              to={`${prefix}/`}
              className={`px-3 py-2 text-sm font-semibold rounded transition-colors ${
                location.pathname === `${prefix}/` || location.pathname === `${prefix}`
                  ? 'text-elikay-primary bg-elikay-primary/5' 
                  : 'text-elikay-charcoal hover:text-elikay-primary hover:bg-gray-50'
              }`}
            >
              {t('nav.home')}
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setAreasOpen(false);
                }}
                onMouseEnter={() => setServicesOpen(true)}
                className={`px-3 py-2 text-sm font-semibold rounded flex items-center gap-1.5 transition-colors ${
                  location.pathname.includes('/services')
                    ? 'text-elikay-primary bg-elikay-primary/5'
                    : 'text-elikay-charcoal hover:text-elikay-primary hover:bg-gray-50'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>{t('nav.services')}</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-elikay-primary' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div 
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 top-full mt-1 w-[460px] bg-white rounded-lg shadow-elevated border border-elikay-borderGray/30 p-3 grid grid-cols-2 gap-1 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                >
                  <div className="col-span-2 pb-2 mb-1 border-b border-gray-100 flex items-center justify-between px-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-elikay-deepBlue">
                      {isSpanish ? '11 Servicios de Techos' : 'All 11 Roofing Services'}
                    </span>
                    <Link 
                      to={`${prefix}/services`}
                      className="text-xs font-semibold text-elikay-primary hover:underline"
                    >
                      {isSpanish ? 'Ver resumen →' : 'View overview →'}
                    </Link>
                  </div>

                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      to={`${prefix}/services/${service.slug}`}
                      className="px-2.5 py-2 text-xs font-medium rounded hover:bg-elikay-primary/5 hover:text-elikay-primary transition-colors flex items-center gap-2 group"
                      role="menuitem"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-elikay-primary transition-colors" />
                      <span className="truncate">{service.title[lang]}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative" ref={areasRef}>
              <button
                type="button"
                onClick={() => {
                  setAreasOpen(!areasOpen);
                  setServicesOpen(false);
                }}
                onMouseEnter={() => setAreasOpen(true)}
                className={`px-3 py-2 text-sm font-semibold rounded flex items-center gap-1.5 transition-colors ${
                  location.pathname.includes('/service-areas')
                    ? 'text-elikay-primary bg-elikay-primary/5'
                    : 'text-elikay-charcoal hover:text-elikay-primary hover:bg-gray-50'
                }`}
                aria-expanded={areasOpen}
                aria-haspopup="true"
              >
                <span>{t('nav.serviceAreas')}</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${areasOpen ? 'rotate-180 text-elikay-primary' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {areasOpen && (
                <div 
                  onMouseLeave={() => setAreasOpen(false)}
                  className="absolute left-0 top-full mt-1 w-[380px] bg-white rounded-lg shadow-elevated border border-elikay-borderGray/30 p-3 grid grid-cols-2 gap-1 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                >
                  <div className="col-span-2 pb-2 mb-1 border-b border-gray-100 flex items-center justify-between px-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-elikay-deepBlue">
                      {isSpanish ? 'Ciudades y Zonas de Texas' : 'Texas Service Areas'}
                    </span>
                    <Link 
                      to={`${prefix}/service-areas`}
                      className="text-xs font-semibold text-elikay-primary hover:underline"
                    >
                      {isSpanish ? 'Ver mapa →' : 'Overview →'}
                    </Link>
                  </div>

                  {locationsData.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={`${prefix}/service-areas/${loc.slug}`}
                      className="px-2.5 py-1.5 text-xs font-medium rounded hover:bg-elikay-primary/5 hover:text-elikay-primary transition-colors flex items-center gap-2 group"
                      role="menuitem"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-elikay-primary transition-colors" />
                      <span>{loc.name}, TX</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to={`${prefix}/portfolio`}
              className={`px-3 py-2 text-sm font-semibold rounded transition-colors ${
                location.pathname.includes('/portfolio')
                  ? 'text-elikay-primary bg-elikay-primary/5'
                  : 'text-elikay-charcoal hover:text-elikay-primary hover:bg-gray-50'
              }`}
            >
              {t('nav.portfolio')}
            </Link>

            <Link 
              to={`${prefix}/about`}
              className={`px-3 py-2 text-sm font-semibold rounded transition-colors ${
                location.pathname.includes('/about')
                  ? 'text-elikay-primary bg-elikay-primary/5'
                  : 'text-elikay-charcoal hover:text-elikay-primary hover:bg-gray-50'
              }`}
            >
              {t('nav.about')}
            </Link>

            <Link 
              to={`${prefix}/faq`}
              className={`px-3 py-2 text-sm font-semibold rounded transition-colors ${
                location.pathname.includes('/faq')
                  ? 'text-elikay-primary bg-elikay-primary/5'
                  : 'text-elikay-charcoal hover:text-elikay-primary hover:bg-gray-50'
              }`}
            >
              {t('nav.faq')}
            </Link>

            <Link 
              to={`${prefix}/contact`}
              className={`px-3 py-2 text-sm font-semibold rounded transition-colors ${
                location.pathname.includes('/contact')
                  ? 'text-elikay-primary bg-elikay-primary/5'
                  : 'text-elikay-charcoal hover:text-elikay-primary hover:bg-gray-50'
              }`}
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Actions & Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Click to Call Desktop */}
            <a 
              href={businessInfo.phoneTel}
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-elikay-charcoal hover:text-elikay-primary transition-colors"
              title="Call ELIKAY ROOFING LLC directly"
            >
              <svg className="w-4 h-4 text-elikay-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{businessInfo.phone}</span>
            </a>

            {/* Language Switcher: EN | ES */}
            <div className="notranslate inline-flex items-center p-0.5 rounded border border-elikay-borderGray/40 bg-gray-50 text-xs font-semibold" role="group" aria-label="Language Switcher" translate="no">
              <button
                type="button"
                onClick={() => toggleLanguage('en')}
                translate="no"
                className={`notranslate px-2.5 py-1 rounded font-bold transition-colors ${
                  lang === 'en' 
                    ? 'bg-elikay-brandPlum text-white shadow-xs' 
                    : 'text-gray-600 hover:text-elikay-charcoal'
                }`}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => toggleLanguage('es')}
                translate="no"
                className={`notranslate px-2.5 py-1 rounded font-bold transition-colors ${
                  lang === 'es' 
                    ? 'bg-elikay-brandPlum text-white shadow-xs' 
                    : 'text-gray-600 hover:text-elikay-charcoal'
                }`}
                aria-pressed={lang === 'es'}
              >
                ES
              </button>
            </div>

            {/* Direct Phone Call Icon for mobile screens */}
            <a
              href={businessInfo.phoneTel}
              className="sm:hidden w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center"
              aria-label={`Call ${businessInfo.phone}`}
            >
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>

            {/* Primary Free Estimate CTA - hidden on extra small mobile screens to prevent wrapping */}
            <Link
              to={`${prefix}/contact`}
              className="hidden sm:inline-flex items-center justify-center px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-elikay-primary hover:bg-elikay-primaryHover rounded transition-all duration-150 shadow-subtle hover:shadow-elevated active:scale-[0.98]"
            >
              {t('nav.freeEstimateBtn')}
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-11 h-11 flex items-center justify-center text-elikay-charcoal hover:text-elikay-primary focus:outline-none focus:ring-2 focus:ring-elikay-primary rounded-lg bg-gray-50 border border-gray-200/60"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t('nav.close') : t('nav.menu')}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-elikay-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-elikay-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu rendered via portal to document.body */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="xl:hidden fixed inset-0 z-[9999] bg-white flex flex-col justify-between overflow-y-auto overscroll-contain"
          role="dialog"
          aria-modal="true"
        >
          {/* Mobile Drawer Top Bar */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10 shadow-xs">
            <Link 
              to={`${prefix}/`}
              onClick={() => handleNav(`${prefix}/`)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img 
                src="/images/logo/elikay-logo.jpeg" 
                alt="ELIKAY ROOFING LLC" 
                className="h-9 w-auto object-contain"
              />
            </Link>
            
            <div className="flex items-center gap-2.5">
              {/* Language Switcher inside Drawer Header */}
              <div className="notranslate inline-flex items-center p-0.5 rounded border border-elikay-borderGray/40 bg-gray-50 text-xs font-semibold" role="group" aria-label="Language Switcher" translate="no">
                <button
                  type="button"
                  onClick={() => toggleLanguage('en')}
                  translate="no"
                  className={`notranslate px-2.5 py-1 rounded font-bold transition-colors ${
                    lang === 'en' 
                      ? 'bg-elikay-brandPlum text-white shadow-xs' 
                      : 'text-gray-600'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => toggleLanguage('es')}
                  translate="no"
                  className={`notranslate px-2.5 py-1 rounded font-bold transition-colors ${
                    lang === 'es' 
                      ? 'bg-elikay-brandPlum text-white shadow-xs' 
                      : 'text-gray-600'
                  }`}
                >
                  ES
                </button>
              </div>

              {/* Close Button with generous touch area */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 text-elikay-charcoal transition-colors border border-gray-200"
                aria-label={t('nav.close')}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Drawer Body Navigation */}
          <div className="p-5 space-y-4 flex-1">
            {/* Direct phone call banner */}
            <div className="p-3.5 bg-slate-900 rounded-xl text-white flex items-center justify-between shadow-md">
              <div>
                <span className="block text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                  {isSpanish ? 'Llámenos directamente' : 'Direct Field Call'}
                </span>
                <span className="text-sm font-bold text-white">{businessInfo.phone}</span>
              </div>
              <a 
                href={businessInfo.phoneTel}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition-colors shadow-sm flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{isSpanish ? 'Llamar' : 'Call'}</span>
              </a>
            </div>

            {/* Mobile Nav Links */}
            <nav className="space-y-1 divide-y divide-gray-100">
              <div className="py-1">
                <Link 
                  to={`${prefix}/`}
                  onClick={(e) => handleMobileLink(e, `${prefix}/`)}
                  className="w-full text-left px-3 py-3 text-base font-semibold text-elikay-charcoal hover:bg-gray-50 rounded-lg flex items-center justify-between"
                >
                  <span>{t('nav.home')}</span>
                  <span className="text-gray-400 text-sm">→</span>
                </Link>
              </div>
              
              {/* Mobile Services Accordion */}
              <div className="py-1">
                <div 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between px-3 py-2.5 text-base font-semibold text-elikay-charcoal cursor-pointer hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <span>{t('nav.services')}</span>
                    <span className="text-xs text-elikay-primary font-bold">(11)</span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileServicesOpen(!mobileServicesOpen);
                    }}
                    className="p-1 text-gray-500 hover:text-elikay-primary rounded-md"
                    aria-label="Toggle services list"
                  >
                    <svg className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-elikay-primary' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {mobileServicesOpen && (
                  <div className="pl-3 pr-2 py-2 space-y-1 bg-gray-50 rounded-lg mt-1 border-l-2 border-elikay-primary">
                    <Link
                      to={`${prefix}/services`}
                      onClick={(e) => handleMobileLink(e, `${prefix}/services`)}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-elikay-primary uppercase tracking-wider block hover:underline"
                    >
                      {isSpanish ? 'Ver todos los 11 servicios →' : 'View all 11 services →'}
                    </Link>
                    {servicesData.map(s => (
                      <Link
                        key={s.slug}
                        to={`${prefix}/services/${s.slug}`}
                        onClick={(e) => handleMobileLink(e, `${prefix}/services/${s.slug}`)}
                        className="w-full text-left px-3 py-2.5 text-xs font-medium text-gray-800 hover:text-elikay-primary hover:bg-white rounded block truncate active:bg-gray-100"
                      >
                        {s.title[lang]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Service Areas Accordion */}
              <div className="py-1">
                <div 
                  onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                  className="flex items-center justify-between px-3 py-2.5 text-base font-semibold text-elikay-charcoal cursor-pointer hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <span>{t('nav.serviceAreas')}</span>
                    <span className="text-xs text-elikay-primary font-bold">(9)</span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileAreasOpen(!mobileAreasOpen);
                    }}
                    className="p-1 text-gray-500 hover:text-elikay-primary rounded-md"
                    aria-label="Toggle service areas list"
                  >
                    <svg className={`w-5 h-5 transition-transform duration-200 ${mobileAreasOpen ? 'rotate-180 text-elikay-primary' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {mobileAreasOpen && (
                  <div className="pl-3 pr-2 py-2 space-y-1 bg-gray-50 rounded-lg mt-1 border-l-2 border-elikay-primary">
                    <Link
                      to={`${prefix}/service-areas`}
                      onClick={(e) => handleMobileLink(e, `${prefix}/service-areas`)}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-elikay-primary uppercase tracking-wider block hover:underline"
                    >
                      {isSpanish ? 'Ver mapa de áreas →' : 'View area overview →'}
                    </Link>
                    {locationsData.map(l => (
                      <Link
                        key={l.slug}
                        to={`${prefix}/service-areas/${l.slug}`}
                        onClick={(e) => handleMobileLink(e, `${prefix}/service-areas/${l.slug}`)}
                        className="w-full text-left px-3 py-2.5 text-xs font-medium text-gray-800 hover:text-elikay-primary hover:bg-white rounded block truncate active:bg-gray-100"
                      >
                        {l.name}, TX
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="py-1">
                <Link 
                  to={`${prefix}/portfolio`}
                  onClick={(e) => handleMobileLink(e, `${prefix}/portfolio`)}
                  className="w-full text-left px-3 py-3 text-base font-semibold text-elikay-charcoal hover:bg-gray-50 rounded-lg flex items-center justify-between"
                >
                  <span>{t('nav.portfolio')}</span>
                  <span className="text-gray-400 text-sm">→</span>
                </Link>
              </div>

              <div className="py-1">
                <Link 
                  to={`${prefix}/about`}
                  onClick={(e) => handleMobileLink(e, `${prefix}/about`)}
                  className="w-full text-left px-3 py-3 text-base font-semibold text-elikay-charcoal hover:bg-gray-50 rounded-lg flex items-center justify-between"
                >
                  <span>{t('nav.about')}</span>
                  <span className="text-gray-400 text-sm">→</span>
                </Link>
              </div>

              <div className="py-1">
                <Link 
                  to={`${prefix}/faq`}
                  onClick={(e) => handleMobileLink(e, `${prefix}/faq`)}
                  className="w-full text-left px-3 py-3 text-base font-semibold text-elikay-charcoal hover:bg-gray-50 rounded-lg flex items-center justify-between"
                >
                  <span>{t('nav.faq')}</span>
                  <span className="text-gray-400 text-sm">→</span>
                </Link>
              </div>

              <div className="py-1">
                <Link 
                  to={`${prefix}/contact`}
                  onClick={(e) => handleMobileLink(e, `${prefix}/contact`)}
                  className="w-full text-left px-3 py-3 text-base font-semibold text-elikay-charcoal hover:bg-gray-50 rounded-lg flex items-center justify-between"
                >
                  <span>{t('nav.contact')}</span>
                  <span className="text-gray-400 text-sm">→</span>
                </Link>
              </div>
            </nav>
          </div>

          {/* Drawer Bottom CTA */}
          <div className="p-5 border-t border-gray-200 bg-gray-50">
            <Link
              to={`${prefix}/contact`}
              onClick={(e) => handleMobileLink(e, `${prefix}/contact`)}
              className="w-full inline-flex items-center justify-center px-4 py-3.5 text-sm font-bold text-white bg-elikay-primary hover:bg-elikay-primaryHover rounded-lg shadow-md transition-all active:scale-[0.99]"
            >
              {t('nav.freeEstimateBtn')}
            </Link>
            <p className="mt-2 text-center text-xs text-gray-500">
              {businessInfo.experienceSummary[lang]}
            </p>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
