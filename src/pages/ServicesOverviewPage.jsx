import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { businessInfo } from '../data/businessInfo';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

export default function ServicesOverviewPage() {
  const { lang, isSpanish, t } = useLanguage();
  const prefix = isSpanish ? '/es' : '';
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: { en: 'All 11 Services', es: 'Los 11 Servicios' } },
    { id: 'replacements', label: { en: 'Replacements & Shingles', es: 'Reemplazos y Tejas' }, slugs: ['residential-roof-replacements', 'architectural-shingle-roofing', 'emergency-tarping-and-temporary-protection'] },
    { id: 'repairs', label: { en: 'Repairs & Leaks', es: 'Reparaciones y Goteras' }, slugs: ['roof-leak-diagnostics-and-repair', 'roof-decking-and-structural-wood-repair', 'flashing-repair-and-counter-flashing', 'storm-damage-roof-repair'] },
    { id: 'ventilation', label: { en: 'Attic & Ventilation', es: 'Ventilación y Ático' }, slugs: ['attic-ventilation-and-exhaust-fans'] },
    { id: 'exteriors', label: { en: 'Gutters & Exteriors', es: 'Canaletas y Exteriores' }, slugs: ['gutter-installation-and-drainage-systems', 'skylight-leak-repair-and-replacement', 'fascia-board-and-soffit-repair'] }
  ];

  const filteredServices = filter === 'all'
    ? servicesData
    : servicesData.filter(service => {
        const cat = categories.find(c => c.id === filter);
        return cat?.slugs.includes(service.slug);
      });

  const weatherStandards = [
    {
      title: isSpanish ? 'Resistencia a Vientos de 130 MPH' : '130 MPH Wind & Storm Rating',
      desc: isSpanish
        ? 'Patrón de 6 clavos neumáticos por teja y banda de inicio perimetral para resistir tormentas tropicales del Golfo.'
        : '6-nail pneumatic fastening patterns and reinforced starter strips engineered to prevent blow-offs during Gulf storms.',
      image: '/images/projects/8.jpeg',
      tag: 'Wind Defense'
    },
    {
      title: isSpanish ? 'Ventilación Térmica de Ático' : 'Thermal Relief & Attic Exhaust',
      desc: isSpanish
        ? 'Evacuación de aire sobrecalentado de hasta 150°F para reducir el consumo eléctrico de aire acondicionado.'
        : 'Continuous airflow expulsion protecting attic temperatures from degrading shingle adhesive strips from below.',
      image: '/images/projects/18.jpeg',
      tag: 'Heat Defense'
    },
    {
      title: isSpanish ? 'Drenaje Pluvial y Limahoyas' : 'Torrents & Valley Drainage',
      desc: isSpanish
        ? 'Limahoyas reforzadas con membrana impermeable y canaletas continuas para encauzar aguaceros intensos.'
        : 'Closed-cut shingle valleys and seamless aluminum gutters channeling high-volume rainwater away safely.',
      image: '/images/services/gutters-drainage.jpg',
      tag: 'Water Defense'
    },
    {
      title: isSpanish ? 'Inspección de Daños por Granizo' : 'Hail & Moisture Diagnostics',
      desc: isSpanish
        ? 'Diagnóstico profesional con tiza y medidor de humedad para tramitar reclamos de seguro con evidencia real.'
        : 'Chalk-documented impact testing and moisture detection to provide insurance-grade documentation.',
      image: '/images/services/storm-damage.jpg',
      tag: 'Storm Defense'
    }
  ];

  return (
    <div className="bg-slate-50">
      <PageHeader
        badge={isSpanish ? 'Alcance Completo de Servicios' : 'Comprehensive Trade Scope'}
        title={isSpanish ? 'Servicios de Techos y Exteriores Residenciales' : 'Residential Roofing & Exterior Services'}
        subtitle={isSpanish 
          ? 'Ofrecemos 11 servicios especializados respaldados por 13 años de experiencia práctica del equipo en Houston, Katy, Cypress y Texas.' 
          : 'Providing 11 specialized residential roofing, deck repair, and exterior services backed by 13 years of trade experience across Greater Houston and Texas.'}
        breadcrumbs={[
          { label: isSpanish ? 'Servicios' : 'Services' }
        ]}
        bgImage="/images/heroes/hero-services.jpg"
        ctaText={isSpanish ? 'Presupuesto Gratuito' : 'Request Free Estimate'}
      />

      {/* Service Filter Tabs & Service Cards */}
      <section className="py-14 sm:py-18 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block">
                {isSpanish ? 'Soluciones Especializadas' : 'Specialized Solutions'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                {isSpanish ? 'Explore Nuestro Catálogo Técnico' : 'Browse Our Residential Services'}
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilter(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    filter === cat.id
                      ? 'bg-elikay-primary text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat.label[lang]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={service.slug}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="h-56 overflow-hidden relative bg-slate-900">
                  <img 
                    src={service.image} 
                    alt={service.title[lang]} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-slate-900/85 text-white rounded backdrop-blur-xs border border-white/10">
                      {isSpanish ? `Servicio #${index + 1}` : `Service #${index + 1}`}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold text-elikay-primaryMuted uppercase tracking-wider block">
                      {businessInfo.offer[lang]}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-elikay-primary transition-colors">
                      {service.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-body">
                      {service.shortDesc[lang]}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="border-t border-slate-100 pt-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        {isSpanish ? 'Síntomas Frecuentes en Texas' : 'Common Texas Indicators'}
                      </span>
                      <ul className="text-xs text-gray-600 space-y-1.5 font-body">
                        {service.commonSigns[lang].slice(0, 2).map((sign, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-elikay-primary font-bold mt-0.5">•</span>
                            <span className="line-clamp-1">{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`${prefix}/services/${service.slug}`}
                        className="text-xs font-bold text-elikay-primary hover:text-elikay-primaryHover inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>{t('common.viewDetails')}</span>
                        <span>→</span>
                      </Link>
                      <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {businessInfo.bilingualNotice[lang]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 1. Texas Weather Climate Standards Section with Real Photos */}
      <section className="py-16 sm:py-20 bg-slate-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {isSpanish ? 'Resistencia Climática' : 'Built for the Texas Climate'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              {isSpanish ? '¿Por Qué Nuestros Techos Duran Más?' : 'Engineered for Extreme Texas Elements'}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {isSpanish
                ? 'El clima del sureste de Texas no perdona fallas en la mano de obra. Así protegemos cada ángulo de su hogar.'
                : 'From Galveston hurricane gusts to Houston summer heatwaves, each component is selected and fastened for maximum resilience.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weatherStandards.map((std, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="h-44 relative bg-slate-900">
                  <img src={std.image} alt={std.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-elikay-primary text-[10px] font-bold text-white uppercase tracking-wider">
                    {std.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h4 className="text-base font-bold font-display text-slate-900">{std.title}</h4>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed">{std.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 text-[11px] text-elikay-primary font-semibold">
                    ✓ {isSpanish ? 'Instalación Certificada' : 'Trade Standard Met'}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. The 6-Layer Roofing Anatomy System */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {isSpanish ? 'Anatomía del Techo' : 'Complete System Engineering'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              {isSpanish ? 'El Sistema de Protección de 6 Capas' : 'The 6-Layer Texas Roof Defense System'}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {isSpanish
                ? 'Un techo duradero no es solo una hilera de tejas. Es un sistema integral diseñado para evitar filtraciones, resistir vientos y mantener fresco el ático.'
                : 'A weather-tight roof is not merely shingles—it is an engineered, multi-tier defense system working in unison to seal against driving rain and relentless sun.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-sm flex items-center justify-center">1</span>
                <h4 className="font-bold text-slate-900 text-base">{isSpanish ? 'Base de Madera Estructural' : 'Solid Decking Foundation'}</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isSpanish
                  ? 'Madera contrachapada CDX o paneles OSB de 7/16" o 1/2" inspeccionados minuciosamente. Reemplazamos cualquier sección ablandada o dañada por humedad.'
                  : 'Inspected 7/16" or 1/2" CDX plywood or OSB deck. Any saturated, warped, or rotted sheets are cut back to rafter centers and replaced.'}
              </p>
              <div className="text-[11px] font-semibold text-elikay-primary">
                {isSpanish ? 'Requisito: Firmeza estructural total' : 'Spec: Zero sag, fastened flush'}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-sm flex items-center justify-center">2</span>
                <h4 className="font-bold text-slate-900 text-base">{isSpanish ? 'Barrera Contra Hielo y Agua' : 'Self-Adhering Leak Barrier'}</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isSpanish
                  ? 'Membrana asfáltica adhesiva colocada en limahoyas, bordes de alero y chimeneas para evitar que el agua impulsada por el viento penetre bajo las tejas.'
                  : 'Modified bitumen peel-and-stick membrane applied along valleys, eaves, pipe penetrations, and chimney saddles where water volume peaks.'}
              </p>
              <div className="text-[11px] font-semibold text-elikay-primary">
                {isSpanish ? 'Requisito: Sellado impermeable directo' : 'Spec: Direct-to-wood waterproof seal'}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-sm flex items-center justify-center">3</span>
                <h4 className="font-bold text-slate-900 text-base">{isSpanish ? 'Bajo-Techo Sintético Reforzado' : 'Synthetic Breathable Deck Barrier'}</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isSpanish
                  ? 'Capa de polímero de alta resistencia al desgarro que reemplaza al viejo fieltro de asfalto. No absorbe humedad y no se pudre con el tiempo.'
                  : 'Heavy-duty woven polypropylene synthetic underlayment fastened with plastic caps. Won’t tear in high gusts or rot under Texas humidity.'}
              </p>
              <div className="text-[11px] font-semibold text-elikay-primary">
                {isSpanish ? 'Requisito: Sujeción con grapas de tapa plástica' : 'Spec: Plastic-cap ring shank fastening'}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-sm flex items-center justify-center">4</span>
                <h4 className="font-bold text-slate-900 text-base">{isSpanish ? 'Hojalatería de Calibre 26' : '26-Gauge Heavy Flashing'}</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isSpanish
                  ? 'Metales pre-doblados de acero galvanizado en muros, chimeneas y bordes de goteo para encauzar el agua lejos de la estructura de madera.'
                  : 'Rust-resistant galvanized steel step flashing, counter-flashing, kickout diverters, and drip edge transitions to steer runoff outward.'}
              </p>
              <div className="text-[11px] font-semibold text-elikay-primary">
                {isSpanish ? 'Requisito: Sin siliconas temporales' : 'Spec: Mechanical diversion over caulk'}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-sm flex items-center justify-center">5</span>
                <h4 className="font-bold text-slate-900 text-base">{isSpanish ? 'Tejas Arquitectónicas Laminadas' : 'Dimensional Shingles'}</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isSpanish
                  ? 'Doble capa de fibra de vidrio con gránulos cerámicos resistentes a los rayos UV y al crecimiento de hongos/algas. Resistencia a vientos de 130 MPH.'
                  : 'Laminated fiberglass-asphalt shingles with algae-resistant granules and heat-activated sealant strips rated to 130 MPH storm winds.'}
              </p>
              <div className="text-[11px] font-semibold text-elikay-primary">
                {isSpanish ? 'Requisito: 6 clavos por teja en Texas' : 'Spec: 6-nail high-wind fastener line'}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-sm flex items-center justify-center">6</span>
                <h4 className="font-bold text-slate-900 text-base">{isSpanish ? 'Ventilación de Cumbrera y Ático' : 'Continuous Ridge Exhaust'}</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isSpanish
                  ? 'Ventilación continua en el lomo del techo con tejas de cumbrera de alto perfil para expulsar calor de hasta 150°F acumulado en el ático.'
                  : 'Baffled ridge vents covered with high-profile cap shingles. Maintains natural convection to prevent heat cooking shingles from underneath.'}
              </p>
              <div className="text-[11px] font-semibold text-elikay-primary">
                {isSpanish ? 'Requisito: Flujo equilibrado entrada/salida' : 'Spec: Balanced 1:300 NFA ratio'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Honest Diagnostic: Repair vs. Replace Decision Matrix */}
      <section className="py-16 sm:py-20 bg-slate-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {isSpanish ? 'Criterio Técnico Honesto' : 'Honest Trade Advice'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              {isSpanish ? '¿Reparación Puntual o Reemplazo Completo?' : 'Repair vs. Replace: How We Evaluate Your Roof'}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {isSpanish
                ? 'Nunca recomendamos un reemplazo cuando una reparación bien hecha es suficiente. Evaluamos estos 5 factores concretos en cada visita.'
                : 'We never push full replacement when a targeted repair will genuinely protect your home. Here is our exact diagnostic matrix.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs">{isSpanish ? 'Condición Observada' : 'Roof Condition Factor'}</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs text-emerald-400">{isSpanish ? 'Candidato a Reparación' : 'Repair Recommended'}</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs text-amber-400">{isSpanish ? 'Candidato a Reemplazo' : 'Replacement Recommended'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{isSpanish ? 'Edad del Techo' : 'Roof Age'}</td>
                    <td className="p-4 sm:p-5">{isSpanish ? 'Menor a 12-15 años; las tejas aún conservan flexibilidad.' : 'Under 12-15 years; shingles are pliable and seal strips re-bond.'}</td>
                    <td className="p-4 sm:p-5">{isSpanish ? 'Mayor a 18-22 años; las tejas se quiebran al levantarse.' : '18-25+ years; shingles are brittle and break when lifted.'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{isSpanish ? 'Área Afectada' : 'Scope of Damage'}</td>
                    <td className="p-4 sm:p-5">{isSpanish ? 'Menos del 25% de una pendiente o daño focalizado por viento.' : 'Isolated to under 20-25% of a slope or localized flashing joint.'}</td>
                    <td className="p-4 sm:p-5">{isSpanish ? 'Daño generalizado en múltiples pendientes o pérdida de gránulos masiva.' : 'Over 30% of total roof plane damaged; extensive bare spots.'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{isSpanish ? 'Madera de Soporte (Decking)' : 'Wood Decking State'}</td>
                    <td className="p-4 sm:p-5">{isSpanish ? 'Firme y seca; máximo 1 o 2 hojas requieren corte puntual.' : 'Decking is solid; 1-2 small soft spots easily repaired locally.'}</td>
                    <td className="p-4 sm:p-5">{isSpanish ? 'Hundimiento extenso, moho en vigas o saturación múltiple.' : 'Widespread sagging, spongy feel underfoot, or rotted rafter tails.'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{isSpanish ? 'Filtraciones de Agua' : 'Active Water Leaks'}</td>
                    <td className="p-4 sm:p-5">{isSpanish ? 'Gotera localizada en una penetración de tubería o chimenea.' : 'Single leak traceable to a pipe boot, vent, or localized flashing.'}</td>
                    <td className="p-4 sm:p-5">{isSpanish ? 'Múltiples goteras independientes en distintas habitaciones.' : 'Multiple leaks occurring across different rooms simultaneously.'}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{isSpanish ? 'Rentabilidad a Largo Plazo' : 'Cost-Effectiveness'}</td>
                    <td className="p-4 sm:p-5 text-emerald-700 font-semibold">{isSpanish ? 'Alta: Extiende la vida útil entre 4 y 8 años a costo razonable.' : 'High: Extends serviceable life by 4-8 years at a fraction of full cost.'}</td>
                    <td className="p-4 sm:p-5 text-amber-700 font-semibold">{isSpanish ? 'Baja para reparar: Reparar repetidamente costará más que reemplazar.' : 'Repairs become money pits; new roof resets manufacturer warranties.'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Texas Seasonal Roofing Care Guide */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {isSpanish ? 'Mantenimiento Preventivo' : 'Seasonal Maintenance'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              {isSpanish ? 'Calendario de Cuidado del Techo en Texas' : 'Texas Homeowner’s Seasonal Roof Calendar'}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {isSpanish
                ? 'El clima en Texas cambia drásticamente entre estaciones. Esta guía le ayuda a prevenir problemas costosos antes de que ocurran.'
                : 'Proactive maintenance saves thousands in water damage repairs. Follow this seasonal checklist designed for Southeast Texas homes.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  {isSpanish ? 'Primavera (Mar - May)' : 'Spring (Mar - May)'}
                </span>
                <h4 className="font-bold text-slate-900 text-base">{isSpanish ? 'Temporada de Granizo' : 'Hail & Severe Storm Prep'}</h4>
                <ul className="mt-3 text-xs text-gray-600 space-y-2">
                  <li>• {isSpanish ? 'Revisar canaletas y bajantes para desalojar hojas.' : 'Clear gutters and downspouts of winter debris.'}</li>
                  <li>• {isSpanish ? 'Inspeccionar sellos de chimenea y tuberías de ventilación.' : 'Inspect pipe flashings and rubber boots for cracks.'}</li>
                  <li>• {isSpanish ? 'Verificar tejas levantadas tras tormentas eléctricas.' : 'Check for wind-lifted or creased shingles after squalls.'}</li>
                </ul>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                {isSpanish ? 'Objetivo: Evitar goteras en aguaceros' : 'Goal: Water-tight readiness'}
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  {isSpanish ? 'Verano (Jun - Ago)' : 'Summer (Jun - Aug)'}
                </span>
                <h4 className="font-bold text-slate-900 text-base">{isSpanish ? 'Calor Extremo y Rayos UV' : 'Attic Heat & UV Shielding'}</h4>
                <ul className="mt-3 text-xs text-gray-600 space-y-2">
                  <li>• {isSpanish ? 'Comprobar que las turbinas del ático giren libremente.' : 'Verify attic exhaust vents and turbines spin freely.'}</li>
                  <li>• {isSpanish ? 'Inspeccionar el ático por calor excesivo (más de 140°F).' : 'Check attic temperature to prevent shingle baking.'}</li>
                  <li>• {isSpanish ? 'Revisar sellos de claraboyas que puedan resecarse.' : 'Inspect skylight seals against intense ultraviolet drying.'}</li>
                </ul>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                {isSpanish ? 'Objetivo: Ahorro en aire acondicionado' : 'Goal: Reduce AC electricity load'}
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-1">
                  {isSpanish ? 'Otoño (Sep - Nov)' : 'Fall (Sep - Nov)'}
                </span>
                <h4 className="font-bold text-slate-900 text-base">{isSpanish ? 'Temporada de Huracanes' : 'Hurricane & High-Wind Peak'}</h4>
                <ul className="mt-3 text-xs text-gray-600 space-y-2">
                  <li>• {isSpanish ? 'Asegurar tejas de cumbrera y bordes de inicio.' : 'Inspect starter strip edges along roof perimeters.'}</li>
                  <li>• {isSpanish ? 'Cortar ramas de árboles que rocen el techo.' : 'Trim overhanging tree limbs within 6 feet of shingles.'}</li>
                  <li>• {isSpanish ? 'Revisar fascia y soffit para evitar entrada de vientos.' : 'Inspect soffit panels to prevent gale-force wind blowouts.'}</li>
                </ul>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                {isSpanish ? 'Objetivo: Resistencia ante vientos de 100+ MPH' : 'Goal: 100+ MPH wind resilience'}
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
                  {isSpanish ? 'Invierno (Dic - Feb)' : 'Winter (Dec - Feb)'}
                </span>
                <h4 className="font-bold text-slate-900 text-base">{isSpanish ? 'Frentes Fríos y Humedad' : 'Freeze & Moisture Barriers'}</h4>
                <ul className="mt-3 text-xs text-gray-600 space-y-2">
                  <li>• {isSpanish ? 'Despejar limahoyas de acumulación de agujas de pino.' : 'Clear pine needles and oak leaves from valleys.'}</li>
                  <li>• {isSpanish ? 'Comprobar sellador alrededor de penetraciones.' : 'Check mastic seals around vents before cold snaps.'}</li>
                  <li>• {isSpanish ? 'Asegurar que las bajantes desagüen lejos de los cimientos.' : 'Ensure downspout extensions discharge 5+ ft from slab.'}</li>
                </ul>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                {isSpanish ? 'Objetivo: Protección contra congelamiento' : 'Goal: Foundation & valley drainage'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-Phase Field Diagnostic Scope */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {isSpanish ? 'Nuestro Proceso en Sitio' : 'Our Diagnostic Standard'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              {isSpanish ? 'Cómo Realizamos Cada Evaluación Gratuita' : 'The 4-Phase On-Site Assessment Protocol'}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-300">
              {isSpanish
                ? 'No damos presupuestos a ojo desde la calle. Subimos al techo, diagnosticamos la madera y entregamos un alcance por escrito.'
                : 'We don’t do visual guesses from a truck. We climb, measure, test moisture, and document real conditions with genuine jobsite photography.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-elikay-primary font-extrabold text-2xl block">01</span>
              <h4 className="font-bold text-white text-base">{isSpanish ? 'Perímetro y Aleros' : 'Perimeter & Fascia'}</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                {isSpanish
                  ? 'Revisión desde tierra y escalera de canaletas, alineación de fascia, goteo de aleros y ventilación de soffit.'
                  : 'Full 360-degree perimeter walk checking gutter pitch, fascia rot, drip edge overhang, and soffit intake clearance.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-elikay-primary font-extrabold text-2xl block">02</span>
              <h4 className="font-bold text-white text-base">{isSpanish ? 'Inspección de Pendientes' : 'Slope & Deck Probe'}</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                {isSpanish
                  ? 'Subida segura al techo para palpar la rigidez de la madera, verificar adherencia de tejas y registrar pérdidas de gránulos.'
                  : 'Physical slope walk probing for softened plywood, checking shingle seal strips, and documenting wind lift lines.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-elikay-primary font-extrabold text-2xl block">03</span>
              <h4 className="font-bold text-white text-base">{isSpanish ? 'Penetraciones y Hojalatería' : 'Flashings & Chimneys'}</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                {isSpanish
                  ? 'Diagnóstico detallado de chimeneas, limahoyas, botas de tubos sanitarios y claraboyas con prueba de estanqueidad.'
                  : 'Meticulous check of step flashing, counter-flashing into brick mortar, valley pans, and rubber plumbing boot integrity.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-elikay-primary font-extrabold text-2xl block">04</span>
              <h4 className="font-bold text-white text-base">{isSpanish ? 'Presupuesto Detallado' : 'Itemized Proposal'}</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                {isSpanish
                  ? 'Explicación clara en inglés o español con fotos de lo encontrado y alcance de materiales, sin letras chicas ni sorpresas.'
                  : 'Written, itemized scope with photos explaining exact materials needed, realistic timeline, and zero hidden contingencies.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </div>
  );
}
