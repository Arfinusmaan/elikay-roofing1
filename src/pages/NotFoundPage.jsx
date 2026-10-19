import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/businessInfo';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  const { isSpanish, lang } = useLanguage();
  const prefix = isSpanish ? '/es' : '';

  const quickLinks = [
    { name: isSpanish ? 'Inicio' : 'Home', path: `${prefix}/` },
    { name: isSpanish ? 'Servicios de Techos' : 'Roofing Services', path: `${prefix}/services` },
    { name: isSpanish ? 'Zonas de Servicio' : 'Service Areas', path: `${prefix}/service-areas` },
    { name: isSpanish ? 'Galería de Trabajos' : 'Project Gallery', path: `${prefix}/portfolio` },
    { name: isSpanish ? 'Solicitar Presupuesto' : 'Request Free Estimate', path: `${prefix}/contact` }
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-950 text-white relative overflow-hidden py-16 sm:py-24">
      <SEOHead
        title={isSpanish ? 'Página No Encontrada (404) | ELIKAY ROOFING LLC' : '404 - Page Not Found | ELIKAY ROOFING LLC'}
        description={isSpanish
          ? 'La página que busca no existe o ha sido movida. Regrese al inicio o comuníquese con ELIKAY ROOFING LLC para asistencia directa.'
          : 'The page you requested could not be found. Return to our homepage or reach out to ELIKAY ROOFING LLC directly.'}
        canonicalPath="/404"
      />

      {/* Background Graphic Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="/images/heroes/hero-replacement.jpg" 
          alt="Roof architecture background" 
          className="w-full h-full object-cover filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        {/* Badge & Big 404 Accent */}
        <div className="space-y-2">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-bold text-elikay-primary uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-elikay-primary" />
            {isSpanish ? 'Error 404 · Ruta No Encontrada' : 'Error 404 · Page Missing'}
          </span>
          <h1 className="text-7xl sm:text-9xl font-display font-black tracking-tight text-white drop-shadow-md">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-3 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-100">
            {isSpanish ? 'Parece que esta sección se ha desprendido del techo' : 'Looks Like This Page Blew Off the Roof'}
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-body">
            {isSpanish
              ? 'La dirección que ingresó no existe o ha cambiado de lugar. Puede regresar al inicio, revisar nuestras zonas de servicio en Texas o llamarnos directamente.'
              : 'The link you followed may be broken or the page has moved. Let us help you navigate back under a solid roof or call our direct field line for assistance.'}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={`${prefix}/`}
            className="w-full sm:w-auto px-8 py-4 bg-elikay-primary hover:bg-elikay-primaryHover text-white text-sm font-bold rounded-lg shadow-elevated transition-all flex items-center justify-center gap-2"
          >
            <span>{isSpanish ? 'Regresar al Inicio' : 'Return to Home'}</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          <a
            href={businessInfo.phoneTel}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 text-elikay-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{isSpanish ? 'Llamar al' : 'Call Direct'}: {businessInfo.phone}</span>
          </a>
        </div>

        {/* Quick Route Guide */}
        <div className="pt-8 border-t border-white/10">
          <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            {isSpanish ? 'Enlaces Directos Útiles' : 'Popular Destinations'}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {quickLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-elikay-primary hover:text-white border border-white/10 text-xs text-gray-200 transition-all font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
