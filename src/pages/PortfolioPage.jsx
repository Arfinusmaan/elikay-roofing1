import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioItems, portfolioCategories } from '../data/portfolioData';
import { businessInfo } from '../data/businessInfo';
import SEOHead from '../components/SEOHead';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

export default function PortfolioPage() {
  const { lang, isSpanish, t } = useLanguage();
  const prefix = isSpanish ? '/es' : '';
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEOHead
        title={isSpanish ? 'Galería de Trabajos de Techos en Texas | Fotos Reales de Obras' : 'Roofing Project Gallery & Workmanship | Real Texas Roof Installations'}
        description={isSpanish
          ? 'Explore fotos reales de trabajos de techos en Houston, Katy y Cypress: desmontaje, reemplazo de tejas, hojalatería y ventilación de ático por ELIKAY ROOFING LLC.'
          : 'Browse verified roofing jobsite photography across Houston, Katy, and Cypress: complete roof tear-offs, architectural shingle installations, and chimney flashings.'}
        keywords="roofing photos Houston, roof replacement gallery Texas, shingle roofing portfolio, roofer work examples Houston, ELIKAY ROOFING projects"
        canonicalPath={`${prefix}/portfolio`}
        image="/images/heroes/hero-portfolio.jpg"
        breadcrumbs={[
          { label: isSpanish ? 'Galería' : 'Portfolio', path: `${prefix}/portfolio` }
        ]}
      />
      <PageHeader
        badge={isSpanish ? 'Galería de Oficio Real' : 'Field Craftsmanship Gallery'}
        title={isSpanish ? 'Galería de Proyectos y Calidad de Trabajo' : 'Project Gallery & Roofing Craftsmanship'}
        subtitle={isSpanish
          ? 'Fotografías reales de techos terminados, desmontaje de tejas, reemplazo de madera de soporte, hojalatería en chimeneas e instalación de ventilación en Texas.'
          : 'Inspect genuine jobsite photography of completed residential roofs, tear-off operations, plywood deck repairs, step flashing, and attic ventilation across Southeast Texas.'}
        breadcrumbs={[
          { label: isSpanish ? 'Galería' : 'Portfolio' }
        ]}
        bgImage="/images/heroes/hero-portfolio.jpg"
        ctaText={isSpanish ? 'Solicitar Evaluación en Sitio' : 'Request On-Site Estimate'}
      />

      <section className="py-14 sm:py-18 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Metrics Bar */}
          <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900 text-white shadow-xl">
            <div className="p-3 border-r border-slate-800">
              <span className="text-elikay-primary font-extrabold text-2xl sm:text-3xl block">100%</span>
              <span className="text-gray-300 text-xs">{isSpanish ? 'Fotos Reales de Oficio' : 'Real Field Photography'}</span>
            </div>
            <div className="p-3 md:border-r border-slate-800">
              <span className="text-elikay-primary font-extrabold text-2xl sm:text-3xl block">13</span>
              <span className="text-gray-300 text-xs">{isSpanish ? 'Años en la Industria' : 'Years Experience'}</span>
            </div>
            <div className="p-3 border-r border-slate-800">
              <span className="text-amber-400 font-extrabold text-2xl sm:text-3xl block">22+</span>
              <span className="text-gray-300 text-xs">{isSpanish ? 'Obras en Galería' : 'Documented Projects'}</span>
            </div>
            <div className="p-3">
              <span className="text-purple-400 font-extrabold text-2xl sm:text-3xl block">0</span>
              <span className="text-gray-300 text-xs">{isSpanish ? 'Fotos de Autos o Falsas' : 'Stock Distractions'}</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar w-full max-w-full" role="tablist" aria-label="Portfolio Category Filters">
            {portfolioCategories.map(cat => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-elikay-primary text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>

          {/* Editorial Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                {/* Fixed Uniform Image Height for All Cards */}
                <div className="h-60 sm:h-64 overflow-hidden relative bg-slate-900 w-full flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title[lang]} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-elikay-primary/95 text-white rounded-md backdrop-blur-xs shadow-xs">
                      {item.categoryName[lang]}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 rounded-lg bg-white/20 backdrop-blur-md text-white text-xs font-bold inline-flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      {isSpanish ? 'Ampliar' : 'Enlarge'}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold font-display text-slate-900 group-hover:text-elikay-primary transition-colors line-clamp-1">
                      {item.title[lang]}
                    </h3>
                    <p className="mt-1.5 text-xs text-gray-600 leading-relaxed font-body line-clamp-2">
                      {item.description[lang]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-gray-500">
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {isSpanish ? 'Trabajo Confirmado' : 'Verified Field Work'}
                    </span>
                    <span className="text-elikay-primary font-bold hover:underline">
                      {isSpanish ? 'Ver Detalle →' : 'View Scope →'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal Image Viewer */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-slate-900 text-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title[lang]} 
                className="w-full max-h-[60vh] object-contain bg-black"
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white flex items-center justify-center font-bold text-lg border border-white/20 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-elikay-primary text-xs font-bold uppercase tracking-wider">
                  {selectedImage.categoryName[lang]}
                </span>
                <span className="text-xs text-emerald-400 font-semibold">
                  ✓ {isSpanish ? 'Trabajo de Obra Confirmado' : 'Verified Jobsite Craftsmanship'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {selectedImage.title[lang]}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-body">
                {selectedImage.description[lang]}
              </p>
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-gray-400">
                  ELIKAY ROOFING LLC · Greater Houston, TX
                </span>
                <a
                  href={businessInfo.phoneTel}
                  className="px-5 py-2.5 rounded-lg bg-elikay-primary hover:bg-elikay-primaryHover text-white text-xs font-bold shadow-md transition-colors"
                >
                  {isSpanish ? 'Consultar Trabajo Similar' : 'Inquire for Similar Project'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTASection variant="dark" />
    </div>
  );
}
