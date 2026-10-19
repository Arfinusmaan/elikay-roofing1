import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/businessInfo';

const BASE_URL = 'https://elikayroofing.com';

/**
 * Universal SEO & Local SEO meta manager.
 * Injects and updates document title, canonical link, meta descriptions,
 * robots, Open Graph, Twitter cards, hreflang alternates, and Schema.org JSON-LD structured data.
 */
export default function SEOHead({
  title,
  description,
  keywords,
  canonicalPath,
  image = '/images/heroes/hero-replacement.jpg',
  type = 'website',
  schemaType = 'RoofingContractor',
  breadcrumbs,
  serviceData,
  locationData,
  faqItems
}) {
  const location = useLocation();
  const { lang, isSpanish } = useLanguage();

  // Fallback defaults
  const siteName = 'ELIKAY ROOFING LLC';
  const defaultTitle = isSpanish
    ? 'ELIKAY ROOFING LLC | Techos Residenciales y Reparaciones en Houston, TX'
    : 'ELIKAY ROOFING LLC | Houston, TX Residential Roofing & Exterior Specialist';

  const defaultDesc = isSpanish
    ? 'ELIKAY ROOFING LLC ofrece reemplazo de techos residenciales, reparación de goteras, tejas asfálticas, daño por tormentas y ventilación en Houston, Katy, Cypress y Texas. 13 años de experiencia. Presupuestos gratuitos.'
    : 'ELIKAY ROOFING LLC provides residential roofing, roof repairs, shingle replacements, leak detection, storm damage repair, and attic ventilation across Houston, Katy, Cypress, and Texas communities. 13 years of experience. Free estimates.';

  const defaultKeywords = [
    'roofing contractor Houston TX',
    'residential roofer Houston',
    'roof repair Katy TX',
    'roof replacement Cypress TX',
    'shingle roofing contractor Texas',
    'emergency roof leak repair Houston',
    'storm damage roof repair Texas',
    'attic ventilation installation Houston',
    'skylight leak repair Houston',
    'gutters and fascia repair Katy',
    'bilingual roofing contractor Houston',
    'techos residenciales Houston',
    'reparación de techos Texas'
  ].join(', ');

  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${BASE_URL}${currentPath.startsWith('/') ? currentPath : `/${currentPath}`}`;
  const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  // Alternate language path calculation
  let enPath = currentPath;
  let esPath = currentPath;
  if (currentPath.startsWith('/es')) {
    enPath = currentPath.replace(/^\/es/, '') || '/';
    esPath = currentPath;
  } else {
    enPath = currentPath;
    esPath = `/es${currentPath === '/' ? '' : currentPath}`;
  }

  const enUrl = `${BASE_URL}${enPath}`;
  const esUrl = `${BASE_URL}${esPath}`;

  useEffect(() => {
    // 1. Page Title
    const finalTitle = title ? `${title} | ${siteName}` : defaultTitle;
    document.title = finalTitle;
    document.documentElement.lang = isSpanish ? 'es' : 'en';

    // Helper to create or update meta tags
    const setMeta = (attrName, attrVal, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content || '');
    };

    // Helper for link tags
    const setLink = (rel, href, hreflang) => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (hreflang) element.setAttribute('hreflang', hreflang);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    const finalDesc = description || defaultDesc;
    setMeta('name', 'description', finalDesc);
    setMeta('name', 'keywords', keywords || defaultKeywords);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('name', 'author', siteName);
    setMeta('name', 'geo.region', 'US-TX');
    setMeta('name', 'geo.placename', 'Houston');
    setMeta('name', 'geo.position', '29.7604;-95.3698');
    setMeta('name', 'ICBM', '29.7604, -95.3698');

    // 3. Open Graph
    setMeta('property', 'og:site_name', siteName);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:title', finalTitle);
    setMeta('property', 'og:description', finalDesc);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', fullImageUrl);
    setMeta('property', 'og:image:alt', title || siteName);
    setMeta('property', 'og:locale', isSpanish ? 'es_US' : 'en_US');
    setMeta('property', 'og:locale:alternate', isSpanish ? 'en_US' : 'es_US');

    // 4. Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', finalTitle);
    setMeta('name', 'twitter:description', finalDesc);
    setMeta('name', 'twitter:image', fullImageUrl);

    // 5. Canonical & Hreflang
    setLink('canonical', canonicalUrl);
    setLink('alternate', enUrl, 'en');
    setLink('alternate', esUrl, 'es');
    setLink('alternate', enUrl, 'x-default');

    // 6. JSON-LD Structured Data
    const scriptId = 'elikay-seo-schema';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    // Comprehensive LocalBusiness / RoofingContractor Graph
    const serviceAreasArray = businessInfo.serviceAreas.map(area => ({
      '@type': 'City',
      'name': area.name,
      'containedInPlace': {
        '@type': 'AdministrativeArea',
        'name': 'Texas'
      }
    }));

    const schemaGraph = [
      {
        '@context': 'https://schema.org',
        '@type': schemaType,
        '@id': `${BASE_URL}/#organization`,
        'name': businessInfo.name,
        'legalName': businessInfo.name,
        'url': BASE_URL,
        'logo': `${BASE_URL}/favicon.svg`,
        'image': fullImageUrl,
        'description': defaultDesc,
        'telephone': '+1-970-778-7951',
        'email': businessInfo.email,
        'priceRange': '$$',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Houston',
          'addressRegion': 'TX',
          'addressCountry': 'US'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '29.7604',
          'longitude': '-95.3698'
        },
        'areaServed': serviceAreasArray,
        'knowsAbout': [
          'Residential Roofing',
          'Roof Replacements',
          'Roof Leak Diagnosis',
          'Architectural Asphalt Shingles',
          'Hail & Wind Storm Damage Repair',
          'Attic Turbine Ventilation',
          'Ridge Vent Installation',
          'Fascia and Soffit Wood Repairs',
          'Seamless Gutter Clearing'
        ],
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            'opens': '07:00',
            'closes': '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Saturday'],
            'opens': '08:00',
            'closes': '16:00'
          }
        ],
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Residential Roofing & Exterior Services',
          'itemListElement': [
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Roof Repairs' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Full Roof Replacements' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Architectural Shingle Roofing' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Emergency Leak Repairs' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Storm Damage Restoration' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Attic Ventilation Installation' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Fascia & Soffit Repair' } }
          ]
        }
      }
    ];

    // BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaGraph.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': isSpanish ? 'Inicio' : 'Home',
            'item': `${BASE_URL}${isSpanish ? '/es' : '/'}`
          },
          ...breadcrumbs.map((crumb, idx) => ({
            '@type': 'ListItem',
            'position': idx + 2,
            'name': crumb.label,
            'item': crumb.path ? `${BASE_URL}${crumb.path.startsWith('/') ? crumb.path : `/${crumb.path}`}` : canonicalUrl
          }))
        ]
      });
    }

    // Specific Service Schema
    if (serviceData) {
      schemaGraph.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': serviceData.title?.[lang] || serviceData.title?.en || '',
        'provider': {
          '@id': `${BASE_URL}/#organization`
        },
        'areaServed': serviceAreasArray,
        'description': serviceData.shortDesc?.[lang] || serviceData.shortDesc?.en || '',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD',
          'name': isSpanish ? 'Presupuesto Gratuito' : 'Free Estimate'
        }
      });
    }

    // Specific FAQ Schema
    if (faqItems && faqItems.length > 0) {
      const validFaqEntities = faqItems
        .map(item => {
          if (!item) return null;
          const qText = item.question?.[lang] || item.question?.en || item.q?.[lang] || item.q?.en || (typeof item.question === 'string' ? item.question : null);
          const aText = item.answer?.[lang] || item.answer?.en || item.a?.[lang] || item.a?.en || (typeof item.answer === 'string' ? item.answer : null);
          if (!qText || !aText) return null;
          return {
            '@type': 'Question',
            'name': qText,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': aText
            }
          };
        })
        .filter(Boolean);

      if (validFaqEntities.length > 0) {
        schemaGraph.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': validFaqEntities
        });
      }
    }

    scriptTag.textContent = JSON.stringify(schemaGraph.length === 1 ? schemaGraph[0] : { '@context': 'https://schema.org', '@graph': schemaGraph });

  }, [title, description, keywords, canonicalUrl, fullImageUrl, currentPath, isSpanish, lang, type, schemaType, breadcrumbs, serviceData, locationData, faqItems]);

  return null;
}
