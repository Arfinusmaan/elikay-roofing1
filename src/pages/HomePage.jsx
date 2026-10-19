import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { locationsData } from '../data/locationsData';
import { portfolioItems } from '../data/portfolioData';
import { faqData } from '../data/faqData';
import { businessInfo } from '../data/businessInfo';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

export default function HomePage() {
  const { lang, isSpanish, t } = useLanguage();
  const prefix = isSpanish ? '/es' : '';

  // Select top verified portfolio highlights
  const featuredProjects = portfolioItems.filter(p => p.isConfirmedElikayWork).slice(0, 4);

  return (
    <div className="space-y-0">
      
      {/* 7.1 HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center border-b border-slate-800">
        {/* Full-bleed background image with layered gradients (lightened so roof and home details are clearly visible) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/heroes/hero-home.jpg" 
            alt="ELIKAY ROOFING aerial view of completed architectural shingle roof in Texas" 
            className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
          />
          {/* Subtle directional gradient on left for text legibility, transparent across middle and right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/20 text-xs font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{businessInfo.offer[lang]} · {businessInfo.bilingualNotice[lang]}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-sm">
              {businessInfo.heroHeading[lang]}
            </h1>

            {/* Subheading with strictly verified experience */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl font-body">
              {businessInfo.experienceSummary[lang]}
            </p>

            {/* Single primary CTA + direct call indicator */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Link
                to={`${prefix}/contact`}
                className="px-8 py-4 bg-elikay-primary hover:bg-elikay-primaryHover text-white text-sm font-bold rounded shadow-elevated transition-all text-center flex items-center justify-center gap-2"
              >
                <span>{t('hero.ctaPrimary')}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a
                href={businessInfo.phoneTel}
                className="text-sm text-gray-200 hover:text-white transition-colors flex items-center gap-2 font-medium"
                title={`Call ${businessInfo.phone}`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isSpanish ? 'Consulta directa:' : 'Direct field call:'} <strong className="text-white text-base underline decoration-emerald-400 underline-offset-4">{businessInfo.phone}</strong></span>
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-elikay-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">13 {isSpanish ? 'Años de Experiencia' : 'Years Experience'}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-elikay-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">{isSpanish ? 'Presupuesto Gratuito' : 'Free Estimates'}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <svg className="w-4 h-4 text-elikay-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">{isSpanish ? 'Atención Bilingüe' : 'Bilingual Team'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.2 SERVICE INTRODUCTION */}
      <section className="py-20 bg-elikay-canvas border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-elikay-blue block mb-2">
                {isSpanish ? 'Nuestra Especialidad' : 'Our Capabilities'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-elikay-charcoal tracking-tight">
                {isSpanish ? 'Servicios Residenciales de Techos y Exteriores' : 'Residential Roofing & Exterior Solutions'}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                {isSpanish
                  ? 'Atendemos cada detalle del techo de su casa, desde goteras rebeldes y reemplazo completo de tejas hasta ventilación de ático y reparación de aleros.'
                  : 'Covering every aspect of your residential roof envelope, from precision leak repairs and architectural replacements to attic ventilation and exterior trim.'}
              </p>
            </div>
            <Link
              to={`${prefix}/services`}
              className="text-xs sm:text-sm font-bold text-elikay-blue hover:text-elikay-deepBlue inline-flex items-center gap-1.5 transition-colors"
            >
              <span>{isSpanish ? 'Ver los 11 servicios en detalle' : 'Explore all 11 services'}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Asymmetric / Editorial Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service, idx) => (
              <div 
                key={service.slug}
                className="bg-white rounded-xl border border-elikay-borderGray/30 shadow-subtle hover:shadow-elevated transition-all duration-200 overflow-hidden flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <img 
                    src={service.image} 
                    alt={service.title[lang]} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-elikay-charcoal/80 text-white rounded backdrop-blur-xs">
                      #{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-display text-elikay-charcoal group-hover:text-elikay-blue transition-colors">
                      {service.title[lang]}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {service.shortDesc[lang]}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={`${prefix}/services/${service.slug}`}
                      className="text-xs font-bold text-elikay-blue hover:underline inline-flex items-center gap-1"
                    >
                      <span>{t('common.learnMore')}</span>
                      <span>→</span>
                    </Link>
                    <span className="text-[11px] text-gray-400 font-medium">
                      {businessInfo.offer[lang]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7.3 ROOFING CRAFTSMANSHIP & PHOTOGRAPHY SHOWCASE */}
      <section className="py-20 bg-elikay-deepBlue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-mutedBlue block mb-2">
              {isSpanish ? 'Mano de Obra en Acción' : 'Real Roofing Craftsmanship'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              {isSpanish ? 'Imágenes de Trabajos Reales en Texas' : 'Authentic Texas Roofing Field Photography'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
              {isSpanish
                ? 'Inspeccione la precisión técnica en colocación de tejas arquitectónicas, sellado de cumbreras, sustitución de madera podrida e instalación de turbinas eólicas.'
                : 'Inspect the precision alignment of architectural shingles, capped ridge lines, structural deck repairs, and attic wind turbine installations.'}
            </p>
          </div>

          {/* Photo Mosaic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Large Feature Photo */}
            <div className="md:col-span-2 rounded-xl overflow-hidden bg-black/40 border border-white/10 group relative h-[380px] sm:h-[440px]">
              <img 
                src="/images/projects/8.jpeg" 
                alt="Architectural Shingle Hip & Ridge Craftsmanship" 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-elikay-blue text-white rounded w-fit mb-1.5">
                  {isSpanish ? 'Trabajo Confirmado ELIKAY' : 'Confirmed ELIKAY Work'}
                </span>
                <h3 className="text-xl font-bold font-display text-white">
                  {isSpanish ? 'Alineación de Tejas Arquitectónicas en Limatesa y Cumbrera' : 'Architectural Shingle Hip & Ridge Precision'}
                </h3>
                <p className="text-xs text-gray-300 mt-1 max-w-lg">
                  {isSpanish 
                    ? 'Instalación impecable en vivienda de Texas con remates metálicos y tejas dimensionales resistentes al viento.'
                    : 'Flawless dimensional shingle lines, secure chimney flashing, and capped hip junctions.'}
                </p>
              </div>
            </div>

            {/* Secondary Column: 2 Stacked Photos */}
            <div className="space-y-6 flex flex-col justify-between">
              
              <div className="rounded-xl overflow-hidden bg-black/40 border border-white/10 group relative h-[208px]">
                <img 
                  src="/images/projects/18.jpeg" 
                  alt="Turbine attic vents at sunset" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-bold text-elikay-mutedBlue uppercase tracking-wider">
                    {isSpanish ? 'Ventilación de Ático' : 'Attic Ventilation'}
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {isSpanish ? 'Turbinas Eólicas (Whirlybirds)' : 'Turbine Whirlybirds Installed'}
                  </h4>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden bg-black/40 border border-white/10 group relative h-[208px]">
                <img 
                  src="/images/projects/2.jpeg" 
                  alt="Roof decking plywood replacement" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-bold text-elikay-mutedBlue uppercase tracking-wider">
                    {isSpanish ? 'Reparación Estructural' : 'Structural Decking'}
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {isSpanish ? 'Reemplazo de Madera de Soporte' : 'Decking Plywood Replacement'}
                  </h4>
                </div>
              </div>

            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              to={`${prefix}/portfolio`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
            >
              <span>{isSpanish ? 'Ver la galería completa de proyectos' : 'View the complete project gallery'}</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 7.4 EXPERIENCE & APPROACH */}
      <section className="py-20 bg-white border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-elikay-blue block">
                {isSpanish ? 'Experiencia Comprobada' : 'Hands-On Experience'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-elikay-charcoal tracking-tight leading-tight">
                {isSpanish 
                  ? '13 Años de Experiencia Práctica en la Industria de Techos' 
                  : '13 Years of Hands-On Roofing Industry Experience'}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {businessInfo.experienceSummary[lang]}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isSpanish
                  ? 'Creemos en la transparencia absoluta: diagnosticamos con rigor técnico si un problema puede resolverse con una reparación puntual o si la degradación de la madera y las tejas aconseja un reemplazo completo. Nunca prometemos tiempos ni costos inventados: cada hogar recibe una cotización escrita honesta y detallada.'
                  : 'We believe in straightforward evaluations: accurately determining whether a roof issue can be cured with targeted repairs or whether shingle brittleness and decking saturation necessitate full replacement. We never invent claims or offer superficial patches.'}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-elikay-canvas border border-gray-200/60">
                  <div className="text-2xl font-bold font-display text-elikay-deepBlue">13</div>
                  <div className="text-xs font-semibold text-gray-700 mt-0.5">
                    {isSpanish ? 'Años de Experiencia Práctica' : 'Years Trade Experience'}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1">
                    {isSpanish ? 'Del equipo técnico a cargo' : 'Of the people behind the work'}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-elikay-canvas border border-gray-200/60">
                  <div className="text-2xl font-bold font-display text-elikay-blue">100%</div>
                  <div className="text-xs font-semibold text-gray-700 mt-0.5">
                    {businessInfo.offer[lang]}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1">
                    {isSpanish ? 'Sin compromiso en sitio' : 'No-obligation on-site evaluations'}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-gray-200">
                <img 
                  src="/images/projects/12.jpeg" 
                  alt="Synthetic underlayment barrier on roof deck" 
                  loading="lazy"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 sm:bottom-4 sm:left-4 lg:-bottom-6 lg:-left-6 bg-elikay-charcoal text-white p-5 rounded-xl shadow-elevated border border-white/10 max-w-xs hidden sm:block">
                <span className="text-xs font-bold uppercase text-elikay-blue block mb-1">
                  {isSpanish ? 'Preparación Técnica' : 'Technical Standard'}
                </span>
                <p className="text-xs text-gray-300">
                  {isSpanish 
                    ? 'Desmontaje total hasta la madera limpia e instalación de barrera impermeable sintética.'
                    : 'Full tear-off to clean decking with premium synthetic underlayment fastened to code.'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7.5 COMMON ROOFING CONCERNS */}
      <section className="py-20 bg-elikay-canvas border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {isSpanish ? 'Educación para el Propietario' : 'Homeowner Guidance'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-elikay-charcoal tracking-tight">
              {isSpanish ? 'Señales Comunes que Requieren una Evaluación' : 'Common Roofing Concerns to Watch For'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {isSpanish
                ? 'Conocer las señales de desgaste a tiempo evita filtraciones graves y costosos daños estructurales en cielos y muros.'
                : 'Recognizing early symptoms protects your home interior, insulation, and roof decking from costly water damage.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="h-48 relative bg-slate-900 overflow-hidden">
                <img 
                  src="/images/projects/3.jpeg" 
                  alt="Plumbing boot pipe leak inspection" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-elikay-primary text-white text-[10px] font-bold uppercase tracking-wider">
                  {isSpanish ? 'Diagnóstico de Goteras' : 'Leak Diagnostics'}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-elikay-primary transition-colors">
                    {isSpanish ? 'Goteras y Penetración de Agua' : 'Active Water Leaks & Stains'}
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed font-body">
                    {isSpanish
                      ? 'Aureolas marrones en cielos o humedad en el ático tras lluvias intensas. La entrada de agua suele originarse en botas de tubería o limahoyas agrietadas.'
                      : 'Brown ceiling rings or damp attic insulation after rainfall. Water frequently penetrates around failed plumbing boots or rusted valley seams.'}
                  </p>
                </div>
                <Link to={`${prefix}/services/roof-leak-diagnostics-and-repair`} className="text-xs font-bold text-elikay-primary hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100">
                  <span>{isSpanish ? 'Detalles de reparación de goteras' : 'Leak repair details'}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="h-48 relative bg-slate-900 overflow-hidden">
                <img 
                  src="/images/services/storm-damage.jpg" 
                  alt="Hail impact chalk evaluation on asphalt shingles" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-elikay-primary text-white text-[10px] font-bold uppercase tracking-wider">
                  {isSpanish ? 'Daño por Tormenta' : 'Wind & Hail'}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-elikay-primary transition-colors">
                    {isSpanish ? 'Tejas Desprendidas o Daño por Viento' : 'Wind Uplift & Missing Shingles'}
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed font-body">
                    {isSpanish
                      ? 'Ráfagas de viento del Golfo que rompen el sellado térmico o arrancan tejas, dejando la base de madera desprotegida ante futuros aguaceros.'
                      : 'High-velocity gusts break thermal adhesive seals and rip shingles away, leaving underlying decking vulnerable to immediate rain intrusion.'}
                  </p>
                </div>
                <Link to={`${prefix}/services/storm-damage-roof-repair`} className="text-xs font-bold text-elikay-primary hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100">
                  <span>{isSpanish ? 'Detalles de daño por tormenta' : 'Storm repair details'}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="h-48 relative bg-slate-900 overflow-hidden">
                <img 
                  src="/images/projects/18.jpeg" 
                  alt="Wind turbine ventilators installed on roof ridge" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-elikay-primary text-white text-[10px] font-bold uppercase tracking-wider">
                  {isSpanish ? 'Alivio Térmico' : 'Attic Airflow'}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-elikay-primary transition-colors">
                    {isSpanish ? 'Sobrecalentamiento y Mala Ventilación' : 'Attic Heat & Inadequate Venting'}
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed font-body">
                    {isSpanish
                      ? 'Temperaturas de más de 65°C en el ático que resecan las tejas desde abajo y disparan el consumo de aire acondicionado en el verano texano.'
                      : 'Attic heat exceeding 150°F bakes shingles from beneath, causing premature granule loss and inflating summer electricity bills.'}
                  </p>
                </div>
                <Link to={`${prefix}/services/attic-ventilation-and-exhaust-fans`} className="text-xs font-bold text-elikay-primary hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100">
                  <span>{isSpanish ? 'Detalles de ventilación de ático' : 'Attic venting details'}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7.6 THE ELIKAY PROCESS */}
      <section className="py-20 bg-white border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {isSpanish ? 'Paso a Paso' : 'Clear Process'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              {isSpanish ? 'Cómo Trabajamos con Cada Propietario' : 'How We Evaluate & Complete Your Project'}
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              {isSpanish 
                ? 'Un camino directo y sin complicaciones para cuidar el techo de su hogar.'
                : 'A transparent, professional path to restoring your residential roof.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="h-40 relative bg-slate-900">
                <img src="/images/services/storm-damage.jpg" alt="Initial roof inspection" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-elikay-primary text-white font-extrabold flex items-center justify-center text-xs shadow-md">
                  1
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    {isSpanish ? 'Contacto & Visita' : 'Initial Consultation'}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed font-body">
                    {isSpanish 
                      ? 'Llámenos al 970-778-7951 o complete el formulario web para coordinar una visita sin costo.'
                      : 'Call us directly or submit our online form to schedule a prompt on-site visit.'}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-600 font-semibold">
                  ✓ {isSpanish ? '100% Gratuito' : '100% Free'}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="h-40 relative bg-slate-900">
                <img src="/images/projects/2.jpeg" alt="Roof deck structural review" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-elikay-primary text-white font-extrabold flex items-center justify-center text-xs shadow-md">
                  2
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    {isSpanish ? 'Inspección en Techo' : 'On-Site Diagnostic'}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed font-body">
                    {isSpanish 
                      ? 'Subimos a evaluar caídas de agua, hojalatería, madera y penetraciones para diagnosticar con precisión.'
                      : 'We inspect roof slopes, flashings, decking condition, and penetrations to find the exact issue.'}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 text-[11px] text-elikay-primary font-semibold">
                  ✓ {isSpanish ? 'Inspección Real' : 'Roof Climb Inspection'}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="h-40 relative bg-slate-900">
                <img src="/images/projects/12.jpeg" alt="Synthetic underlayment barrier" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-elikay-primary text-white font-extrabold flex items-center justify-center text-xs shadow-md">
                  3
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    {isSpanish ? 'Presupuesto Escrito' : 'Written Proposal'}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed font-body">
                    {isSpanish 
                      ? 'Entregamos una propuesta clara con marcas de material y alcance formal, sin sorpresas.'
                      : 'You receive an itemized written estimate specifying exact materials, underlayment, and labor scope.'}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-600 font-semibold">
                  ✓ {isSpanish ? 'Cero Presión' : 'No Hidden Fees'}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="h-40 relative bg-slate-900">
                <img src="/images/projects/13.jpeg" alt="Completed roof at sunset" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-elikay-primary text-white font-extrabold flex items-center justify-center text-xs shadow-md">
                  4
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    {isSpanish ? 'Ejecución & Barrido' : 'Craft & Nail Sweep'}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed font-body">
                    {isSpanish 
                      ? 'Instalación meticulosa y barrido magnético de alta potencia para recoger clavos de su patio.'
                      : 'Skilled installation fastened to code, followed by systematic magnetic nail sweeps of your lawn.'}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 text-[11px] text-elikay-primary font-semibold">
                  ✓ {isSpanish ? 'Patio Limpio' : 'Tire-Safe Yard'}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7.7 SERVICE AREAS OVERVIEW */}
      <section className="py-20 bg-elikay-canvas border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
                {isSpanish ? 'Cobertura Regional' : 'Texas Service Areas'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-elikay-charcoal tracking-tight">
                {isSpanish ? 'Comunidades que Atendemos en Texas' : 'Serving Greater Houston & Surrounding Texas Communities'}
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                {isSpanish
                  ? 'Brindamos presupuestos gratuitos en 9 ciudades principales y localidades contiguas del sureste de Texas.'
                  : 'Providing free estimates across 9 primary cities and adjacent Southeast Texas communities.'}
              </p>
            </div>
            <Link
              to={`${prefix}/service-areas`}
              className="text-xs sm:text-sm font-bold text-elikay-primary hover:text-elikay-primaryHover inline-flex items-center gap-1.5 transition-colors"
            >
              <span>{isSpanish ? 'Ver todas las zonas →' : 'View all service areas →'}</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationsData.map((loc) => (
              <Link
                key={loc.slug}
                to={`${prefix}/service-areas/${loc.slug}`}
                className="bg-white rounded-xl border border-gray-200 shadow-subtle hover:shadow-elevated hover:border-elikay-primary/50 transition-all group overflow-hidden flex flex-col"
              >
                <div className="h-44 relative bg-slate-900 overflow-hidden">
                  <img 
                    src={loc.image} 
                    alt={`Residential roofing in ${loc.name}, Texas`} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white rounded backdrop-blur-xs border border-white/20">
                    {loc.county}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-lg font-bold font-display drop-shadow-sm">{loc.name}, TX</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-elikay-primary text-white">
                      {isSpanish ? 'Presupuesto Gratis' : 'Free Scope'}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {loc.shortDesc[lang]}
                  </p>
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-elikay-primary font-bold">
                    <span>{isSpanish ? 'Explorar servicios locales' : `Roofing in ${loc.name}`}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 7.10 FAQ PREVIEW */}
      <section className="py-20 bg-white border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-elikay-blue block">
                {isSpanish ? 'Preguntas Frecuentes' : 'Homeowner Questions'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-elikay-charcoal tracking-tight">
                {isSpanish ? 'Respuestas Claras y Honestas' : 'Straightforward Answers to Common Questions'}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isSpanish
                  ? 'Conozca cómo programar su presupuesto gratuito, qué buscar en su techo y cómo abordamos las reparaciones y reemplazos.'
                  : 'Learn how free estimates work, what to look for when inspecting your roof from the ground, and our repair approach.'}
              </p>
              <div className="pt-2">
                <Link
                  to={`${prefix}/faq`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-elikay-canvas hover:bg-gray-200 text-elikay-charcoal text-xs font-bold uppercase tracking-wider rounded transition-colors border border-gray-300"
                >
                  <span>{isSpanish ? 'Ver todas las preguntas' : 'Read all FAQs'}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <FAQAccordion items={faqData.slice(0, 5)} />
            </div>

          </div>

        </div>
      </section>

      {/* 7.11 CONTACT & FREE ESTIMATE SECTION */}
      <section className="py-20 bg-elikay-canvas border-b border-gray-200/60" id="estimate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-elikay-blue block">
                {businessInfo.offer[lang]}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-elikay-charcoal tracking-tight leading-tight">
                {isSpanish ? 'Comience con su Presupuesto Gratuito' : 'Get Started With Your Free Estimate'}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {businessInfo.experienceSummary[lang]}
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-lg bg-white border border-gray-200/70 shadow-subtle flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-elikay-blue/10 text-elikay-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase">{isSpanish ? 'Teléfono Directo' : 'Direct Phone'}</span>
                    <a href={businessInfo.phoneTel} className="text-base font-bold text-elikay-charcoal hover:text-elikay-blue transition-colors">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white border border-gray-200/70 shadow-subtle flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-elikay-blue/10 text-elikay-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase">{isSpanish ? 'Correo Electrónico' : 'Email Address'}</span>
                    <a href={businessInfo.emailMailto} className="text-base font-bold text-elikay-charcoal hover:text-elikay-blue transition-colors">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-elikay-blue/5 border border-elikay-blue/20 text-xs text-gray-700 space-y-1">
                <span className="font-bold text-elikay-deepBlue block">
                  {businessInfo.bilingualNotice[lang]}
                </span>
                <p>
                  {isSpanish
                    ? 'Le atendemos en inglés o español con atención directa de los expertos de la empresa.'
                    : 'We assist homeowners in English and Spanish with direct communication from our team.'}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>

      {/* 7.12 FINAL SPLIT CTA */}
      <CTASection variant="split" />

    </div>
  );
}
