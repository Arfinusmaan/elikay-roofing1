import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { locationsData } from '../data/locationsData';
import { businessInfo } from '../data/businessInfo';
import SEOHead from '../components/SEOHead';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

export default function LocationsOverviewPage() {
  const { lang, isSpanish, t } = useLanguage();
  const prefix = isSpanish ? '/es' : '';

  const regionalZones = [
    {
      title: isSpanish ? 'Zona Costera (Galveston)' : 'Gulf Coastal Zone (Galveston)',
      desc: isSpanish ? 'Vientos huracanados y salitre marino. Requiere tejas con sellado de 130 MPH y hojalatería resistente a la corrosión.' : 'Hurricane gusts and salt air demand 130 MPH wind-sealed shingles and corrosion-resistant flashing.',
      img: '/images/locations/galveston.jpg'
    },
    {
      title: isSpanish ? 'Corredor Residencial (Katy & Cypress)' : 'Suburban Corridors (Katy & Cypress)',
      desc: isSpanish ? 'Tormentas de verano intensas y granizadas. Requiere membranas sintéticas y tejas arquitectónicas reforzadas.' : 'Severe summer squalls and hail patterns require durable laminate shingles and synthetic barriers.',
      img: '/images/locations/cypress.jpg'
    },
    {
      title: isSpanish ? 'Zonas Boscosas (The Woodlands & Spring)' : 'Wooded Communities (The Woodlands & Spring)',
      desc: isSpanish ? 'Acumulación de agujas de pino y sombra densa. Crucial mantener canaletas limpias y tejas con protección antialgas.' : 'Heavy pine needle fall and tree shade necessitate algae-resistant granules and clean gutter drainage.',
      img: '/images/locations/the-woodlands.jpg'
    },
    {
      title: isSpanish ? 'Área Metropolitana (Houston & Pearland)' : 'Metro Areas (Houston & Pearland)',
      desc: isSpanish ? 'Calor extremo de más de 100°F y alta radiación UV. La ventilación de ático balanceada previene envejecimiento prematuro.' : 'Extreme UV index and attic heat above 150°F make balanced turbine and ridge ventilation essential.',
      img: '/images/locations/houston.jpg'
    }
  ];

  return (
    <div className="bg-slate-50">
      <SEOHead
        title={isSpanish ? 'Zonas de Servicio en Texas | Techos en Houston, Katy, Cypress y Más' : 'Service Areas in Texas | Roofing in Houston, Katy, Cypress & Surrounding Areas'}
        description={isSpanish
          ? 'Servicios de techos residenciales de ELIKAY ROOFING LLC en Houston, Katy, Cypress, Waller, Hempstead, Spring, The Woodlands, Pearland y Galveston, TX. Presupuestos gratuitos.'
          : 'ELIKAY ROOFING LLC provides residential roofing, roof repairs, and free estimates across Houston, Katy, Cypress, Waller, Hempstead, Spring, The Woodlands, Pearland, and Galveston, TX.'}
        keywords="roofing service areas Texas, roofer Houston TX, roofing contractor Katy, roof replacement Cypress, roofer Spring TX, roofer The Woodlands, roofer Pearland, Galveston roofing contractor"
        canonicalPath={`${prefix}/service-areas`}
        image="/images/locations/houston.jpg"
        breadcrumbs={[
          { label: isSpanish ? 'Zonas de Servicio' : 'Service Areas', path: `${prefix}/service-areas` }
        ]}
      />
      <PageHeader
        badge={isSpanish ? 'Cobertura Regional en Texas' : 'Texas Regional Coverage'}
        title={isSpanish ? 'Áreas de Servicio y Presupuestos en Texas' : 'Texas Service Areas & Roof Coverage'}
        subtitle={isSpanish
          ? 'Brindamos servicios de techos residenciales y presupuestos sin costo en 9 ciudades principales y comunidades cercanas de Texas.'
          : 'Providing residential roofing replacements, leak diagnostics, and free in-person estimates across 9 primary Texas cities and surrounding communities.'}
        breadcrumbs={[
          { label: isSpanish ? 'Zonas de Servicio' : 'Service Areas' }
        ]}
        bgImage="/images/heroes/hero-locations.jpg"
        ctaText={isSpanish ? 'Presupuesto Gratuito' : 'Request Free Estimate'}
      />

      {/* Grid of Locations with Authentic Photos */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {businessInfo.offer[lang]}
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              {isSpanish ? 'Presupuestos Gratuitos en su Localidad' : 'Free In-Person Roof Estimates Across Texas'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed font-body">
              {isSpanish
                ? 'El equipo cuenta con 13 años de experiencia práctica en techos residenciales. Entendemos el impacto del calor extremo, la humedad del Golfo de México, las granizadas y las tormentas en cada sector.'
                : 'The people behind ELIKAY ROOFING bring 13 years of hands-on roofing experience. We understand the specific weather pressures facing homes in each community—from coastal winds in Galveston to prairie squalls in Katy and heavy tree shade in The Woodlands.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationsData.map((loc) => (
              <div 
                key={loc.slug}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="h-56 overflow-hidden relative bg-slate-900">
                  <img 
                    src={loc.image} 
                    alt={`${loc.name}, Texas residential roof`} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-slate-900/85 text-white rounded-md backdrop-blur-xs border border-white/10">
                      {loc.name}, TX
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold text-elikay-primaryMuted uppercase tracking-wider">
                      {loc.county}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-elikay-primary transition-colors">
                      {loc.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-body">
                      {loc.shortDesc[lang]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`${prefix}/service-areas/${loc.slug}`}
                      className="text-xs font-bold text-elikay-primary hover:text-elikay-primaryHover inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>{t('common.exploreArea')}</span>
                      <span>→</span>
                    </Link>
                    <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {businessInfo.bilingualNotice[lang]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Regional Texas Microclimates Section */}
      <section className="py-16 sm:py-20 bg-slate-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-elikay-primary block mb-2">
              {isSpanish ? 'Condiciones de la Región' : 'Microclimate Considerations'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              {isSpanish ? 'Cada Zona de Texas Tiene Retos Únicos' : 'Tailored to Texas Weather Microclimates'}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {isSpanish
                ? 'Conocemos a fondo cómo afecta la ubicación geográfica a la vida útil de las tejas y la madera de soporte.'
                : 'Different areas of Southeast Texas face distinct atmospheric forces. Here is how we adapt our installation methods.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalZones.map((zone, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="h-44 relative bg-slate-900">
                  <img src={zone.img} alt={zone.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h4 className="text-base font-bold font-display text-slate-900">{zone.title}</h4>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed font-body">{zone.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 text-[11px] text-elikay-primary font-semibold">
                    ✓ {isSpanish ? 'Cobertura Especializada' : 'Specialized Scope'}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTASection variant="split" />
    </div>
  );
}
