import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { faqData } from '../data/faqData';
import { businessInfo } from '../data/businessInfo';
import SEOHead from '../components/SEOHead';
import PageHeader from '../components/PageHeader';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

export default function FAQPage() {
  const { lang, isSpanish, t } = useLanguage();
  const prefix = isSpanish ? '/es' : '';
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: { en: 'All Questions', es: 'Todas las Preguntas' } },
    { id: 'general', label: { en: 'General & Estimates', es: 'General y Presupuestos' } },
    { id: 'roofing', label: { en: 'Roofing & Repairs', es: 'Techos y Reparaciones' } },
    { id: 'exteriors', label: { en: 'Gutters & Exteriors', es: 'Canaletas y Exteriores' } }
  ];

  const knowledgeCards = [
    {
      title: isSpanish ? "¿Cuánto Dura un Techo en Texas?" : "How Long Do Shingles Last in Texas?",
      desc: isSpanish ? "Debido a la alta radiación UV y tormentas de verano, un techo de tejas arquitectónicas suele durar entre 18 y 25 años con ventilación adecuada." : "High UV radiation and intense Gulf weather typically yield 18-25 years for architectural shingles when attic airflow is properly maintained.",
      img: "/images/projects/13.jpeg",
      tag: "Shingle Life"
    },
    {
      title: isSpanish ? "Señales de Daño por Granizo o Viento" : "Identifying Hail & Wind Damage",
      desc: isSpanish ? "Pérdida de gránulos negros en canaletas, abolladuras en chimeneas y tejas levantadas son motivos para una inspección formal." : "Granule accumulation in gutters, bruised shingle mats, and creased tab edges indicate the need for insurance-level evaluation.",
      img: "/images/services/storm-damage.jpg",
      tag: "Storm Diagnostics"
    },
    {
      title: isSpanish ? "¿Por Qué Importa la Ventilación?" : "Why Attic Airflow is Crucial",
      desc: isSpanish ? "Un ático sin ventilación puede alcanzar 150°F, cocinando las tejas desde abajo y aumentando sus facturas de electricidad." : "Trapped attic heat exceeding 150°F bakes shingle adhesive strips from below and causes air conditioning systems to overwork.",
      img: "/images/projects/18.jpeg",
      tag: "Attic Science"
    }
  ];

  const filteredFaqs = filter === 'all'
    ? faqData
    : faqData.filter(item => item.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEOHead
        title={isSpanish ? 'Preguntas Frecuentes sobre Techos en Texas | Respuestas Técnicas' : 'Texas Residential Roofing FAQ | Expert Technical Answers'}
        description={isSpanish
          ? 'Preguntas frecuentes sobre reemplazo de techos, presupuestos gratuitos, tejas arquitectónicas, reparación de goteras y seguros en Texas por ELIKAY ROOFING LLC.'
          : 'Frequently asked questions regarding roof replacements, free estimates, architectural shingles, leak repairs, storm claims, and attic ventilation in Texas.'}
        keywords="roofing FAQ Texas, how long does roof last Houston, cost of roof replacement Houston, free roofing estimate Texas"
        canonicalPath={`${prefix}/faq`}
        image="/images/heroes/hero-faq.jpg"
        breadcrumbs={[
          { label: isSpanish ? 'Preguntas Frecuentes' : 'FAQ', path: `${prefix}/faq` }
        ]}
        faqItems={faqData}
      />
      <PageHeader
        badge={isSpanish ? 'Centro de Preguntas & Asesoría' : 'Homeowner Knowledge Base'}
        title={isSpanish ? 'Preguntas Frecuentes sobre Techos' : 'Frequently Asked Roofing Questions'}
        subtitle={isSpanish
          ? 'Encuentre respuestas honestas y directas sobre presupuestos gratuitos, evaluación de techos, reparaciones y reemplazos en Texas.'
          : 'Clear, grounded answers regarding free estimates, roof diagnostics, shingle options, and exterior maintenance in Southeast Texas.'}
        breadcrumbs={[
          { label: isSpanish ? 'Preguntas Frecuentes' : 'FAQ' }
        ]}
        bgImage="/images/heroes/hero-faq.jpg"
        ctaText={isSpanish ? 'Solicitar Evaluación Gratuita' : 'Request Free Evaluation'}
      />

      {/* 1. Visual Homeowner Knowledge Cards */}
      <section className="py-14 sm:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {isSpanish ? 'Guía Rápida para Propietarios' : 'Quick Homeowner Insights'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
              {isSpanish ? 'Conceptos Clave Antes de Reparar su Techo' : 'Essential Concepts Before Starting a Roof Project'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {knowledgeCards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="h-44 relative bg-slate-900">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-elikay-primary text-white text-[10px] font-bold uppercase tracking-wider">
                    {card.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="text-base font-bold font-display text-slate-900">{card.title}</h3>
                    <p className="mt-1.5 text-xs text-gray-600 leading-relaxed font-body">{card.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 text-[11px] text-elikay-primary font-semibold">
                    ✓ {isSpanish ? 'Recomendación Técnica' : 'Trade Recommendation'}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Main Accordion Section */}
      <section className="py-16 bg-slate-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar w-full max-w-full" role="tablist" aria-label="FAQ Categories">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={filter === cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  filter === cat.id
                    ? 'bg-elikay-primary text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>

          {/* Accordion Component */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
            <FAQAccordion items={filteredFaqs} />
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider text-elikay-primary font-bold block">
                {isSpanish ? 'Asistencia Personalizada' : 'Direct Roofer Support'}
              </span>
              <h4 className="text-lg sm:text-xl font-bold font-display text-white">
                {isSpanish ? '¿Tiene una duda específica sobre su techo?' : 'Have a Specific Question About Your Home?'}
              </h4>
              <p className="text-xs text-gray-300">
                {isSpanish 
                  ? 'Llámenos directamente o solicite una visita de inspección gratuita en su propiedad.'
                  : 'Call us directly or schedule a free in-person roof evaluation.'}
              </p>
            </div>
            <a
              href={businessInfo.phoneTel}
              className="px-6 py-3.5 bg-elikay-primary hover:bg-elikay-primaryHover text-white text-xs sm:text-sm font-bold rounded-lg shadow-md transition-all flex items-center gap-2 flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{businessInfo.phone}</span>
            </a>
          </div>

        </div>
      </section>

      <CTASection variant="split" />
    </div>
  );
}
