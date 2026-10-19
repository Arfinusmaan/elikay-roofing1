import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { businessInfo } from '../data/businessInfo';
import SEOHead from '../components/SEOHead';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { lang, isSpanish, t } = useLanguage();
  const prefix = isSpanish ? '/es' : '';

  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to={`${prefix}/services`} replace />;
  }

  // Get other services for cross-linking
  const relatedServices = servicesData.filter(s => s.slug !== slug).slice(0, 3);

  const executionSteps = [
    {
      num: "01",
      title: isSpanish ? "Diagnóstico en Sitio" : "On-Site Roof Inspection",
      desc: isSpanish ? "Inspeccionamos pendientes, madera, limahoyas y penetraciones para encontrar el origen exacto del daño." : "We climb the roof, evaluate flashings, valley troughs, and underlying decking to isolate root causes.",
      img: "/images/services/storm-damage.jpg"
    },
    {
      num: "02",
      title: isSpanish ? "Reparación de Base" : "Substrate & Wood Repair",
      desc: isSpanish ? "Reemplazamos placas de madera podridas o debilitadas para asegurar un anclaje firme de clavos." : "Damaged plywood or decking is removed and replaced with structural sheathing for solid nail retention.",
      img: "/images/projects/2.jpeg"
    },
    {
      num: "03",
      title: isSpanish ? "Barrera Impermeable" : "Synthetic Underlayment",
      desc: isSpanish ? "Instalamos membrana sintética impermeable y protección contra agua en limahoyas y aleros." : "High-performance synthetic membrane and leak barriers are fastened with sealed cap nails.",
      img: "/images/projects/12.jpeg"
    },
    {
      num: "04",
      title: isSpanish ? "Instalación & Remate" : "Precision Shingle & Flashing",
      desc: isSpanish ? "Clavado neumático reforzado de 6 clavos por teja y sellado hermético en chimeneas y tubos." : "Enhanced 6-nail pneumatic patterns with precision metal step flashing and ridge caps.",
      img: "/images/projects/8.jpeg"
    }
  ];

  const serviceKeywords = `${service.title.en} Houston TX, ${service.title.en} Katy, residential ${service.title.en} Cypress, roof repair contractor Texas, ELIKAY ROOFING ${service.title.en}, ${service.title.es} Houston`;

  return (
    <div className="bg-slate-50">
      <SEOHead
        title={isSpanish ? `${service.title.es} en Houston y Texas | ELIKAY ROOFING` : `${service.title.en} in Houston, TX | ELIKAY ROOFING LLC`}
        description={service.shortDesc[lang]}
        keywords={serviceKeywords}
        canonicalPath={`${prefix}/services/${service.slug}`}
        image={service.image}
        breadcrumbs={[
          { label: isSpanish ? 'Servicios' : 'Services', path: `${prefix}/services` },
          { label: service.title[lang], path: `${prefix}/services/${service.slug}` }
        ]}
        serviceData={service}
        faqItems={service.faqs}
      />

      {/* 1. Header with Breadcrumbs & Service Background Image */}
      <PageHeader
        badge={isSpanish ? 'Servicio Residencial Especializado' : 'Specialized Residential Service'}
        title={service.title[lang]}
        subtitle={service.shortDesc[lang]}
        breadcrumbs={[
          { label: isSpanish ? 'Servicios' : 'Services', path: '/services' },
          { label: service.title[lang] }
        ]}
        bgImage={service.image}
        ctaText={isSpanish ? 'Presupuesto Gratuito' : 'Request Free Estimate'}
      />

      {/* 2. Overview & Detailed Craftsmanship Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block">
                {isSpanish ? 'Compromiso y Especificaciones Técnicas' : 'Service Overview & Trade Specifications'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                {service.title[lang]}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                {service.overview[lang]}
              </p>
              
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-900 block uppercase tracking-wider">
                  {businessInfo.experienceSummary[lang]}
                </span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {isSpanish
                    ? 'Evaluamos cada techo en persona sin costo para ofrecerle un presupuesto claro, formal y por escrito. Cero costes ocultos.'
                    : 'We evaluate every roof on-site at no charge, providing honest written scopes tailored to your home’s exact architecture.'}
                </p>
              </div>

              {/* Fast Feature Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-pink-50/60 border border-pink-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-elikay-primary" />
                  <span>{businessInfo.offer[lang]}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-pink-50/60 border border-pink-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-elikay-primary" />
                  <span>{businessInfo.bilingualNotice[lang]}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#estimate-form"
                  className="px-6 py-3.5 bg-elikay-primary hover:bg-elikay-primaryHover text-white text-xs sm:text-sm font-bold rounded-lg shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>{t('common.getFreeEstimate')}</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href={businessInfo.phoneTel}
                  className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-elikay-primary transition-colors inline-flex items-center gap-2 py-2"
                >
                  <svg className="w-4 h-4 text-elikay-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{isSpanish ? 'O llame directo: ' : 'Or call: '}{businessInfo.phone}</span>
                </a>
              </div>
            </div>

            {/* Service Image Card Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <div className="h-80 sm:h-96 relative">
                  <img 
                    src={service.image} 
                    alt={service.title[lang]} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-elikay-primaryMuted block mb-1">
                      {isSpanish ? 'Fotografía Técnica' : 'Technical Craftsmanship Photo'}
                    </span>
                    <h4 className="text-base font-bold">{service.title[lang]}</h4>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 text-white text-xs flex items-center justify-between">
                  <span className="text-gray-300 font-medium truncate">{service.title[lang]}</span>
                  <span className="text-elikay-primary font-bold uppercase tracking-wider">{businessInfo.offer[lang]}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Four-Step Photographic Execution Process */}
      <section className="py-16 sm:py-20 bg-slate-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {isSpanish ? 'Metodología en Obra' : 'Our Systematic Execution'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
              {isSpanish ? 'Cómo Realizamos Este Trabajo Paso a Paso' : 'Step-by-Step Field Execution'}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              {isSpanish ? 'Cada etapa documentada y ejecutada bajo estrictas normas de seguridad y durabilidad.' : 'Every stage carefully performed to protect your home’s framing, deck, and interior ceilings.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executionSteps.map((step, idx) => (
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
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-600 font-semibold">
                    ✓ {isSpanish ? 'Supervisión en Sitio' : 'Field Supervised'}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Common Signs & Process Breakdown */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Common Signs */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-1">
                  {isSpanish ? 'Señales de Alerta' : 'Warning Indicators'}
                </span>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  {isSpanish ? 'Cuándo Solicitar una Inspección' : 'When to Schedule an Inspection'}
                </h3>
              </div>

              <div className="space-y-3">
                {(service.commonSigns?.[lang] || service.commonSigns?.en || []).map((sign, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 text-elikay-primary flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      !
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-body">
                      {sign}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Execution Process */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-1">
                  {isSpanish ? 'Proceso Detallado' : 'Technical Process'}
                </span>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  {isSpanish ? 'Etapas de Inspección y Ejecución' : 'Evaluation & Installation Stages'}
                </h3>
              </div>

              <div className="space-y-4">
                {(service.evaluationProcess?.[lang] || service.evaluationProcess?.en || service.process?.[lang] || []).map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-elikay-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-xs">
                      0{idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pt-1 font-body">
                      {step}
                    </p>
                  </div>
                ))}

                {service.repairOrReplace && (
                  <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-gray-700 leading-relaxed font-body">
                    <span className="font-bold text-slate-900 block mb-1">
                      {isSpanish ? 'Criterio Profesional: ¿Reparar o Reemplazar?' : 'Trade Standard: Repair vs. Replace Criteria'}
                    </span>
                    {service.repairOrReplace[lang] || service.repairOrReplace.en}
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Contact Form Section */}
      <section id="estimate-form" className="py-16 sm:py-20 bg-slate-50 border-b border-gray-200 scroll-mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {businessInfo.offer[lang]}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              {isSpanish ? `Solicitar Presupuesto para ${service.title[lang]}` : `Request Free Estimate for ${service.title[lang]}`}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
              {isSpanish
                ? 'Complete el formulario para coordinar una visita en su propiedad sin coste ni compromiso.'
                : 'Fill out the form below to arrange an honest, no-obligation roof inspection in Southeast Texas.'}
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xl">
            <ContactForm initialService={service.title[lang]} />
          </div>
        </div>
      </section>

      {/* 6. Service Specific FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
                {isSpanish ? 'Preguntas Frecuentes' : 'Service FAQs'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                {isSpanish ? 'Dudas Comunes sobre este Servicio' : 'Common Questions About This Service'}
              </h3>
            </div>

            <FAQAccordion items={service.faqs} />
          </div>
        </section>
      )}

      {/* 7. Related Services with Photos */}
      <section className="py-16 bg-slate-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block">
                {isSpanish ? 'Servicios Relacionados' : 'Complementary Services'}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                {isSpanish ? 'Otros Trabajos de Techo y Exteriores' : 'Other Residential Services'}
              </h3>
            </div>
            <Link
              to={`${prefix}/services`}
              className="text-xs font-bold text-elikay-primary hover:text-elikay-primaryHover hidden sm:inline-flex items-center gap-1"
            >
              <span>{isSpanish ? 'Ver los 11 servicios' : 'View all 11 services'}</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div 
                key={rel.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="h-44 relative bg-slate-900">
                  <img src={rel.image} alt={rel.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="text-base font-bold font-display text-slate-900 group-hover:text-elikay-primary transition-colors">
                      {rel.title[lang]}
                    </h4>
                    <p className="mt-1 text-xs text-gray-600 line-clamp-2">
                      {rel.shortDesc[lang]}
                    </p>
                  </div>
                  <Link
                    to={`${prefix}/services/${rel.slug}`}
                    className="text-xs font-bold text-elikay-primary hover:underline pt-2 border-t border-slate-100 flex items-center gap-1"
                  >
                    <span>{t('common.viewDetails')}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </div>
  );
}
