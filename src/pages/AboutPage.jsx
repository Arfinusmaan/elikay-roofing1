import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/businessInfo';
import SEOHead from '../components/SEOHead';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

export default function AboutPage() {
  const { lang, isSpanish } = useLanguage();
  const prefix = isSpanish ? '/es' : '';

  const craftsmanshipPhases = [
    {
      title: isSpanish ? '1. Retiro & Reparación de Madera' : '1. Tear-Off & Deck Restoration',
      desc: isSpanish
        ? 'Inspeccionamos cada placa de madera de soporte. Si encontramos tablas podridas o combadas por goteras previas, las reemplazamos con madera estructural limpia antes de colocar impermeabilización.'
        : 'Every piece of decking substrate is thoroughly inspected. Any rotted, warped, or sagging plywood from past leaks is removed and replaced with structural sheathing.',
      image: '/images/projects/2.jpeg',
      tag: isSpanish ? 'Madera Estructural' : 'Substrate Integrity'
    },
    {
      title: isSpanish ? '2. Barrera Sintética Impermeable' : '2. Synthetic Water Barrier',
      desc: isSpanish
        ? 'Instalamos membrana sintética de alta resistencia mecánica y protección contra hielo y agua en limahoyas y aleros para crear un escudo secundario impenetrable contra la lluvia con viento.'
        : 'We secure industrial-grade synthetic underlayment fastened with plastic cap nails, plus ice & water barrier in critical valleys and eaves for impenetrable secondary moisture defense.',
      image: '/images/projects/12.jpeg',
      tag: isSpanish ? 'Protección TopShield' : 'Watertight Underlayment'
    },
    {
      title: isSpanish ? '3. Tejas Arquitectónicas & Limatesas' : '3. Architectural Shingles & Hips',
      desc: isSpanish
        ? 'Colocamos tejas de fibra de vidrio de alta densidad con patrón de 6 clavos neumáticos por teja para resistir vientos de hasta 130 MPH y rayos UV intensos de Texas.'
        : 'Heavyweight architectural laminate shingles are aligned and fastened with enhanced 6-nail pneumatic wind patterns rated for up to 130 MPH Texas storm currents.',
      image: '/images/projects/8.jpeg',
      tag: isSpanish ? 'Resistencia 130 MPH' : 'Wind Rated Shingles'
    },
    {
      title: isSpanish ? '4. Ventilación de Ático Equilibrada' : '4. Balanced Attic Airflow',
      desc: isSpanish
        ? 'Instalamos turbinas eólicas whirlybird o cumbreras ventiladas continuas para evacuar el aire caliente del ático (hasta 150°F), reduciendo el consumo eléctrico y protegiendo las tejas.'
        : 'Aluminum turbine whirlybirds or continuous ridge vents are precision-mounted along roof ridges to continuously expel 150°F attic heat and protect shingle adhesives.',
      image: '/images/projects/18.jpeg',
      tag: isSpanish ? 'Ventilación Eólica' : 'Thermal Reduction'
    }
  ];

  return (
    <div className="bg-slate-50">
      <SEOHead
        title={isSpanish ? 'Acerca de ELIKAY ROOFING LLC | 13 Años de Experiencia en Texas' : 'About ELIKAY ROOFING LLC | 13 Years Residential Roofing Experience'}
        description={isSpanish
          ? 'Conozca la historia, compromiso y estándares técnicos de ELIKAY ROOFING LLC. 13 años de experiencia en techos residenciales en Houston, Katy, Cypress y Texas.'
          : 'Learn about ELIKAY ROOFING LLC: 13 years of hands-on roofing experience delivering honest, durable residential roof replacements across Greater Houston and Texas.'}
        keywords="about ELIKAY ROOFING, Houston roofing company history, residential roofer Texas experience, bilingual roofing team Houston"
        canonicalPath={`${prefix}/about`}
        image="/images/heroes/hero-about.jpg"
        breadcrumbs={[
          { label: isSpanish ? 'Nosotros' : 'About', path: `${prefix}/about` }
        ]}
      />
      <PageHeader
        badge={isSpanish ? 'Nuestra Trayectoria & Compromiso' : '13 Years Trade Experience'}
        title={isSpanish ? 'Acerca de ELIKAY ROOFING LLC' : 'About ELIKAY ROOFING LLC'}
        subtitle={isSpanish
          ? 'El equipo detrás de ELIKAY ROOFING LLC aporta 13 años de experiencia práctica en techos residenciales en Houston, Katy, Cypress y el sureste de Texas.'
          : 'Dedicated Texas residential roofing contractors delivering honest craftsmanship, precision roof replacements, and storm-resilient installations across Southeast Texas.'}
        breadcrumbs={[
          { label: isSpanish ? 'Nosotros' : 'About' }
        ]}
        bgImage="/images/heroes/hero-about.jpg"
        ctaText={isSpanish ? 'Agendar Evaluación Gratuita' : 'Schedule Free Roof Evaluation'}
      />

      {/* Main Story & Value Proposition Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold uppercase tracking-wider text-elikay-brandPlum">
                <span className="w-2 h-2 rounded-full bg-elikay-primary" />
                <span>{isSpanish ? 'Vocación de Servicio y Oficio' : 'Dedicated Hands-On Roofing Trade'}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                {isSpanish 
                  ? 'Protegiendo los Hogares de Texas con Mano de Obra Real' 
                  : 'Protecting Texas Homes with Genuine Trade Craftsmanship'}
              </h2>
              
              <p className="text-base text-gray-700 leading-relaxed font-body">
                {businessInfo.experienceSummary[lang]}
              </p>

              <p className="text-base text-gray-700 leading-relaxed font-body">
                {isSpanish
                  ? 'En ELIKAY ROOFING LLC no creemos en atajos ni en parches provisionales que fallen al primer aguacero. Sabemos que el clima de Texas impone condiciones extremas: sol abrasador que reseca los materiales, aguaceros torrenciales repentinos y fuertes vientos de tormenta. Cada proyecto que asumimos recibe nuestra atención directa desde la inspección inicial hasta la última pasada con el imán para clavos.'
                  : 'At ELIKAY ROOFING LLC, we don’t believe in temporary band-aids or cosmetic cover-ups. Southeast Texas roofs endure unforgiving atmospheric stress: relentless UV radiation drying out asphalt oils, torrential Gulf Coast downpours, and high-wind squalls. Every residential roof we touch receives rigorous structural evaluation from initial substrate check to the final magnetic nail sweep.'}
              </p>

              {/* Highlight Pillars */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-elikay-primary text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      {businessInfo.offer[lang]}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {isSpanish
                      ? 'Evaluaciones en sitio exhaustivas y presupuestos detallados por escrito sin ningún compromiso.'
                      : 'Comprehensive on-site roof evaluations and transparent written estimates with zero pressure.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      {businessInfo.bilingualNotice[lang]}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {isSpanish
                      ? 'Atención cordial y transparente en español e inglés para que siempre conozca el estado de su techo.'
                      : 'Direct and fluent communication in English and Spanish so you always understand your project scope.'}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-elikay-primary" />
                  Harris County
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-elikay-primary" />
                  Fort Bend County
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-elikay-primary" />
                  Waller County
                </span>
              </div>
            </div>

            {/* Visual Hero Feature Image with Specs */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <div className="relative h-80 sm:h-96">
                  <img 
                    src="/images/projects/7.jpeg" 
                    alt="ELIKAY ROOFING craftsmanship detail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-elikay-primary text-xs font-bold uppercase tracking-wider mb-1">
                      {isSpanish ? 'Foto Real de Obra' : 'Verified Jobsite Photo'}
                    </span>
                    <h4 className="text-base font-bold">
                      {isSpanish ? 'Línea de Alero y Tejas Asfálticas' : 'Crisp Shingle Alignment & Drip Edge'}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      {isSpanish ? 'Instalación uniforme con clavado reforzado y remate perimetral' : 'Even coursing with reinforced pneumatic fastening and clean metal edge'}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 text-white text-xs grid grid-cols-2 gap-3 divide-x divide-slate-800">
                  <div className="pr-3">
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Experience</span>
                    <span className="font-bold text-white text-sm">13 Years in Industry</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Estimates</span>
                    <span className="font-bold text-elikay-primary text-sm">100% Free & Written</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Visual Step-by-Step Craftsmanship Gallery */}
      <section className="py-16 sm:py-20 bg-slate-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {isSpanish ? 'Estándares de Ejecución' : 'Our Construction Standard'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              {isSpanish ? 'Las 4 Fases de un Techo Duradero' : 'The 4 Pillars of an Enduring Roof'}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {isSpanish 
                ? 'Conozca de forma visual cómo ejecutamos cada etapa para garantizar protección total contra el clima de Texas.' 
                : 'See the exact layers and technical execution that go into protecting your home against severe Texas weather.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftsmanshipPhases.map((phase, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img 
                    src={phase.image} 
                    alt={phase.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-bold border border-white/10">
                    {phase.tag}
                  </span>
                </div>
                
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="text-base font-bold font-display text-slate-900 group-hover:text-elikay-primary transition-colors">
                      {phase.title}
                    </h4>
                    <p className="mt-2 text-xs text-gray-600 leading-relaxed font-body">
                      {phase.desc}
                    </p>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-elikay-primary font-semibold">
                    <span>{isSpanish ? 'Foto Real de Trabajo' : 'Jobsite Verified Photo'}</span>
                    <span>✓</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us & Working Principles */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 h-44 sm:h-52">
                  <img 
                    src="/images/projects/13.jpeg" 
                    alt="Finished architectural roof at sunset" 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300" 
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 h-44 sm:h-52">
                  <img 
                    src="/images/projects/11.jpeg" 
                    alt="Chimney step flashing craftsmanship" 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300" 
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 h-44 sm:h-52">
                  <img 
                    src="/images/projects/3.jpeg" 
                    alt="Plumbing boot pipe inspection" 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300" 
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 h-44 sm:h-52">
                  <img 
                    src="/images/projects/9.jpeg" 
                    alt="Clean valley roof drainage" 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300" 
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block">
                {isSpanish ? 'Nuestra Filosofía' : 'Our Work Principles'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                {isSpanish ? 'Cómo Cuidamos su Vivienda de Principio a Fin' : 'How We Respect Your Home & Investment'}
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-elikay-primary text-white flex-shrink-0 flex items-center justify-center font-bold">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {isSpanish ? 'Diagnóstico Preciso y Honesto en Sitio' : 'Accurate, Honest On-Site Diagnosis'}
                    </h4>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                      {isSpanish
                        ? 'Subimos a su techo para inspeccionar limatesas, flashing de chimeneas, tubos de ventilación y el estado real de la madera antes de sugerir cualquier solución.'
                        : 'We physically climb onto your roof to evaluate flashing, valleys, penetration seals, and underlying wood condition rather than guessing from the curb.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-elikay-primary text-white flex-shrink-0 flex items-center justify-center font-bold">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {isSpanish ? 'Presupuesto Escrito sin Sorpresas' : 'Clear Written Scope & Pricing'}
                    </h4>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                      {isSpanish
                        ? 'Detallamos marca y tipo de teja, membrana sintética, cantidad de ventiladores y garantía de mano de obra en un presupuesto claro y formal.'
                        : 'Every project quote outlines exact shingle specifications, underlayment grade, ventilation units, and labor expectations in plain language.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-elikay-primary text-white flex-shrink-0 flex items-center justify-center font-bold">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {isSpanish ? 'Protección de Jardines y Barrido Magnético' : 'Landscape Protection & Magnetic Nail Sweeps'}
                    </h4>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                      {isSpanish
                        ? 'Protegemos plantas y arbustos con lonas de trabajo y pasamos imanes rodantes de alta potencia por entradas, aceras y césped para recoger cualquier clavo caído.'
                        : 'We tarp shrubbery and landscaping, then run high-powered rolling magnetic sweeps over driveways, paths, and grass to safeguard tires and pets.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={`${prefix}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                >
                  <span>{isSpanish ? 'Hablar con un Especialista' : 'Speak with an Estimator'}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      <CTASection variant="dark" />
    </div>
  );
}
