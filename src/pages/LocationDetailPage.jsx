import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { locationsData } from '../data/locationsData';
import { servicesData } from '../data/servicesData';
import { businessInfo } from '../data/businessInfo';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

export default function LocationDetailPage() {
  const { slug } = useParams();
  const { lang, isSpanish, t } = useLanguage();
  const prefix = isSpanish ? '/es' : '';

  const location = locationsData.find(l => l.slug === slug);

  if (!location) {
    return <Navigate to={`${prefix}/service-areas`} replace />;
  }

  // Other nearby cities for internal navigation
  const nearbyLocations = locationsData.filter(l => l.slug !== slug).slice(0, 4);

  const localJobHighlights = [
    {
      title: isSpanish ? "Inspección & Evaluación Estructural" : "Roof Inspection & Framing Review",
      desc: isSpanish ? "Evaluación minuciosa de limatesas, pendientes y penetraciones de chimenea o tubería sanitaria." : "Comprehensive on-roof examination of valleys, step flashings, and wood substrate integrity.",
      img: "/images/projects/8.jpeg"
    },
    {
      title: isSpanish ? "Membrana Sintética & Protección de Alero" : "Synthetic Barrier & Eave Defense",
      desc: isSpanish ? "Fijación de barrera sintética TopShield con clavos de tapa plástica antes de instalar tejas." : "TopShield synthetic water barrier mechanically fastened across exposed plywood decking.",
      img: "/images/projects/12.jpeg"
    },
    {
      title: isSpanish ? "Ventilación de Ático Whirlybird" : "Whirlybird Turbine Ventilation",
      desc: isSpanish ? "Instalación de turbinas de aluminio para evacuar aire caliente y proteger el adhesivo de las tejas." : "Aluminum wind turbines mounted with sealed flashing along the newly capped ridge.",
      img: "/images/projects/18.jpeg"
    }
  ];

  return (
    <div className="bg-slate-50">
      {/* 1. Page Header with City Background Image */}
      <PageHeader
        badge={`${location.name}, Texas · ${location.county}`}
        title={location.title[lang]}
        subtitle={location.shortDesc[lang]}
        breadcrumbs={[
          { label: isSpanish ? 'Zonas de Servicio' : 'Service Areas', path: '/service-areas' },
          { label: `${location.name}, TX` }
        ]}
        bgImage={location.image}
        ctaText={isSpanish ? `Presupuesto en ${location.name}` : `Estimate in ${location.name}`}
      />

      {/* 2. Overview & Local Context Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block">
                {isSpanish ? 'Disponibilidad de Servicio en su Zona' : 'Local Roofing Scope'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                {isSpanish 
                  ? `Servicios de Techos Residenciales en ${location.name}, TX` 
                  : `Residential Roofing Services in ${location.name}, TX`}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                {location.overview[lang]}
              </p>

              {/* Regional Considerations Box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block">
                  {isSpanish ? 'Factores Climáticos de la Zona' : 'Regional Climate Demands'}
                </span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-body">
                  {location.regionalConsiderations[lang]}
                </p>
              </div>

              {/* Experience and Free Estimate Banner */}
              <div className="p-4 rounded-xl bg-pink-50/70 border border-pink-200 text-xs text-slate-800 space-y-1">
                <span className="font-bold text-elikay-brandPlum block text-sm">
                  {businessInfo.offer[lang]} · {businessInfo.bilingualNotice[lang]}
                </span>
                <p>
                  {businessInfo.experienceSummary[lang]}
                </p>
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
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{isSpanish ? 'O llame directo: ' : 'Or call: '}{businessInfo.phone}</span>
                </a>
              </div>
            </div>

            {/* City Featured Photo */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <div className="h-80 sm:h-96 relative">
                  <img 
                    src={location.image} 
                    alt={`${location.name}, Texas residential home roof`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-elikay-primaryMuted block mb-1">
                      {location.county}
                    </span>
                    <h4 className="text-lg font-bold">{location.name}, Texas</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      {isSpanish ? 'Techos residenciales y presupuesto gratuito en sitio' : 'Residential roofs with free on-site inspections'}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 text-white text-xs flex items-center justify-between">
                  <span className="text-gray-300 font-medium">{location.name}, TX</span>
                  <span className="text-emerald-400 font-bold uppercase tracking-wider">Active In Field</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Real Jobsite Craftsmanship Highlights */}
      <section className="py-16 sm:py-20 bg-slate-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {isSpanish ? 'Evidencia de Mano de Obra' : 'Verified Trade Workmanship'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
              {isSpanish ? `Nuestros Estándares en ${location.name}` : `Our Roofing Craftsmanship in ${location.name}`}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              {isSpanish ? 'Imágenes reales de cómo reparamos y renovamos techos en el sureste de Texas.' : 'Authentic jobsite photos showing the layered protection we install on Texas homes.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {localJobHighlights.map((job, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="h-48 relative bg-slate-900">
                  <img src={job.img} alt={job.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h4 className="text-base font-bold font-display text-slate-900">{job.title}</h4>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed font-body">{job.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 text-[11px] text-elikay-primary font-semibold">
                    ✓ {isSpanish ? 'Foto Real de Trabajo' : 'Verified Field Photo'}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Services Offered in this City */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-1">
              {isSpanish ? 'Catálogo Local' : 'Local Scope'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              {isSpanish 
                ? `Servicios Disponibles en ${location.name}, Texas` 
                : `Services Available in ${location.name}, Texas`}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              {isSpanish
                ? 'Ofrecemos evaluaciones sin costo y presupuestos por escrito para los siguientes trabajos:'
                : 'We provide complimentary inspections and written estimates for the following scopes:'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {location.servicesOffered.map((svcName, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-pink-300 hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-100 text-elikay-primary flex items-center justify-center font-bold text-xs group-hover:bg-elikay-primary group-hover:text-white transition-colors">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-elikay-primary transition-colors">
                    {svcName}
                  </span>
                </div>
                <span className="text-elikay-primary opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                  →
                </span>
              </div>
            ))}
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
              {isSpanish ? `Solicitar Presupuesto en ${location.name}, TX` : `Request Free Roof Estimate in ${location.name}, TX`}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
              {isSpanish
                ? 'Coordinamos una inspección presencial en su propiedad sin ningún coste ni obligación.'
                : 'Schedule a free on-site roof inspection with a detailed written scope of work.'}
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xl">
            <ContactForm initialCity={location.name} />
          </div>
        </div>
      </section>

      {/* 6. Local FAQs */}
      {location.faqs && location.faqs.length > 0 && (
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
                {isSpanish ? 'Preguntas Frecuentes' : 'Local Area FAQs'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                {isSpanish ? `Dudas Frecuentes en ${location.name}` : `Common Questions in ${location.name}`}
              </h3>
            </div>

            <FAQAccordion items={location.faqs} />
          </div>
        </section>
      )}

      {/* 7. Nearby Service Areas with Photos */}
      <section className="py-16 bg-slate-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block">
                {isSpanish ? 'Otras Ciudades' : 'Nearby Communities'}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                {isSpanish ? 'Áreas Vecinas que También Atendemos' : 'Other Areas We Service'}
              </h3>
            </div>
            <Link
              to={`${prefix}/service-areas`}
              className="text-xs font-bold text-elikay-primary hover:text-elikay-primaryHover hidden sm:inline-flex items-center gap-1"
            >
              <span>{isSpanish ? 'Ver todas las zonas' : 'View all service areas'}</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyLocations.map((nearby) => (
              <div 
                key={nearby.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="h-36 relative bg-slate-900">
                  <img src={nearby.image} alt={nearby.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-bold text-white">
                    {nearby.name}, TX
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h4 className="text-sm font-bold font-display text-slate-900 group-hover:text-elikay-primary transition-colors">
                      {nearby.title[lang]}
                    </h4>
                    <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                      {nearby.shortDesc[lang]}
                    </p>
                  </div>
                  <Link
                    to={`${prefix}/service-areas/${nearby.slug}`}
                    className="text-xs font-bold text-elikay-primary hover:underline pt-2 border-t border-slate-100 flex items-center gap-1"
                  >
                    <span>{t('common.exploreArea')}</span>
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
