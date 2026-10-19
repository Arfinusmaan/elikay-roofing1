import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/businessInfo';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const { lang, isSpanish, t } = useLanguage();

  const estimateSteps = [
    {
      num: "01",
      title: isSpanish ? "Confirmación Telefónica" : "Prompt Phone Follow-Up",
      desc: isSpanish ? "Nos comunicamos en español o inglés para coordinar el horario de visita más conveniente." : "We contact you promptly in English or Spanish to pick a visit window that fits your schedule.",
      img: "/images/heroes/hero-contact.jpg"
    },
    {
      num: "02",
      title: isSpanish ? "Inspección Completa en Techo" : "Comprehensive Roof Examination",
      desc: isSpanish ? "Subimos al techo para evaluar limahoyas, tejas, chimeneas, tubos y la solidez de la madera de soporte." : "We climb the roof to evaluate shingle wear, valley troughs, penetrations, and deck firmness.",
      img: "/images/projects/8.jpeg"
    },
    {
      num: "03",
      title: isSpanish ? "Presupuesto Escrito Detallado" : "Transparent Written Proposal",
      desc: isSpanish ? "Entregamos un desglose formal sin costes ocultos ni presión para que tome su decisión con tranquilidad." : "You receive an itemized proposal with clear material grades, labor stages, and pricing.",
      img: "/images/projects/13.jpeg"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge={businessInfo.offer[lang]}
        title={isSpanish ? 'Contáctenos y Solicite su Presupuesto' : 'Contact & Free Estimate Request'}
        subtitle={isSpanish
          ? 'Estamos a su disposición para responder preguntas, evaluar el estado de su techo y brindarle cotizaciones claras por escrito en Texas.'
          : 'Reach out to discuss your roofing concern, schedule a free on-site evaluation, or request service across Greater Houston and Texas communities.'}
        breadcrumbs={[
          { label: isSpanish ? 'Contacto' : 'Contact' }
        ]}
        bgImage="/images/heroes/hero-contact.jpg"
        ctaText={isSpanish ? 'Ir al Formulario de Contacto' : 'Jump to Estimate Form'}
        ctaLink="/contact#form"
      />

      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Details & Company Summary */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-900 text-white p-7 rounded-2xl shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-1">
                    {isSpanish ? 'Atención Directa' : 'Direct Communication'}
                  </span>
                  <h2 className="text-2xl font-bold font-display text-white">
                    ELIKAY ROOFING LLC
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
                  {businessInfo.experienceSummary[lang]}
                </p>

                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-950/60 border border-pink-500/30 text-elikay-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">{isSpanish ? 'Teléfono Directo' : 'Direct Phone'}</span>
                      <a href={businessInfo.phoneTel} className="text-base font-bold text-white hover:text-elikay-primary transition-colors">
                        {businessInfo.phone}
                      </a>
                      <span className="block text-[11px] text-emerald-400 mt-0.5">
                        ✓ {businessInfo.bilingualNotice[lang]}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-950/60 border border-pink-500/30 text-elikay-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">{isSpanish ? 'Correo Electrónico' : 'Email Address'}</span>
                      <a href={businessInfo.emailMailto} className="text-sm font-bold text-white hover:text-elikay-primary transition-colors break-all">
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-950/60 border border-pink-500/30 text-elikay-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">{isSpanish ? 'Áreas de Atención' : 'Service Coverage'}</span>
                      <span className="text-xs text-gray-300 leading-normal block">
                        Houston, Katy, Cypress, Waller, Hempstead, Spring, The Woodlands, Pearland, Galveston, TX
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-white/5 text-xs text-gray-300">
                  <span className="font-bold text-elikay-primary block mb-1">
                    {businessInfo.offer[lang]}
                  </span>
                  <p>
                    {isSpanish
                      ? 'Nuestras estimaciones presenciales no conllevan ningún costo ni compromiso de compra.'
                      : 'All in-person consultations are 100% free with itemized written estimates.'}
                  </p>
                </div>
              </div>

              {/* Verified Inspection Image Card */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <div className="h-48 relative">
                  <img 
                    src="/images/projects/8.jpeg" 
                    alt="ELIKAY ROOFING completed hip shingle course" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-elikay-primary text-white text-[10px] font-bold uppercase tracking-wider">
                    {isSpanish ? 'Calidad Garantizada' : 'Verified Trade Standard'}
                  </span>
                </div>
                <div className="p-4 text-xs text-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 block">
                    {isSpanish ? 'Evaluación Técnica Real' : 'Professional Trade Evaluation'}
                  </span>
                  <p className="text-gray-600 text-[11px]">
                    {isSpanish ? 'Inspección física en techo por técnicos experimentados.' : 'Physical rooftop inspection performed by experienced roofing estimators.'}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-1">
                    {isSpanish ? 'Formulario en Línea' : 'Online Request'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                    {isSpanish ? 'Solicite su Visita de Evaluación Gratuita' : 'Request Your Free On-Site Roof Scope'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 font-body">
                    {isSpanish
                      ? 'Describa su necesidad de techo o exteriores. Nos pondremos en contacto con usted a la brevedad para coordinar la visita.'
                      : 'Share your roofing or exterior concern below. We will follow up quickly to set up a convenient time to inspect your roof.'}
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. What to Expect 3-Step Walkthrough */}
      <section className="py-16 sm:py-20 bg-slate-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {isSpanish ? 'Nuestro Proceso' : 'What to Expect'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
              {isSpanish ? '¿Qué Sucede Después de Solicitar su Presupuesto?' : 'How Your Free Estimate Works'}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              {isSpanish ? 'Transparencia de principio a fin, sin presiones comerciales.' : 'Straightforward, transparent service from your first inquiry to project completion.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {estimateSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="h-44 relative bg-slate-900">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-elikay-primary text-white font-extrabold flex items-center justify-center text-xs shadow-md">
                    {step.num}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h4 className="text-base font-bold font-display text-slate-900">{step.title}</h4>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed font-body">{step.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-600 font-semibold">
                    ✓ {isSpanish ? 'Sin Coste ni Presión' : '100% Free & No Pressure'}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
