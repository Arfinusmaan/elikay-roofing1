import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageContext = createContext();

export const uiTranslations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      serviceAreas: "Service Areas",
      portfolio: "Portfolio",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      freeEstimateBtn: "Request Free Estimate",
      callUs: "Call 970-778-7951",
      allServices: "Explore All 11 Services",
      allAreas: "View All Service Areas",
      menu: "Menu",
      close: "Close"
    },
    common: {
      freeEstimatesBadge: "Free Estimates · 13 Years Industry Experience",
      callNow: "Call 970-778-7951",
      emailUs: "Email Us",
      getFreeEstimate: "Request a Free Estimate",
      viewDetails: "View Details",
      learnMore: "Learn More",
      exploreService: "Explore Service",
      exploreArea: "Explore Area",
      relatedServices: "Related Exterior Services",
      serviceAreas: "Service Areas",
      frequentlyAskedQuestions: "Frequently Asked Questions",
      backToHome: "Back to Home",
      experienceNote: "13 years of hands-on roofing industry experience of the team",
      honestEstimateNotice: "Honest on-site evaluation with clear written scopes."
    },
    hero: {
      badge: "Residential Roofing · Greater Houston & Texas",
      heading: "Roofing Experience You Can Count On.",
      subheading: "Residential roof repairs, full replacements, leak detection, and exterior restoration across Houston, Katy, Cypress, and surrounding Texas communities.",
      ctaPrimary: "Request a Free Estimate",
      ctaSecondary: "Call 970-778-7951",
      trustPill1: "13 Years Hands-On Experience",
      trustPill2: "Free On-Site Estimates",
      trustPill3: "Se Habla Español"
    },
    servicesOverview: {
      badge: "Complete Exterior Scope",
      heading: "Comprehensive Residential Roofing & Exterior Services",
      subheading: "From focused shingle and leak repairs to full architectural replacements, eave carpentry, and gutter care."
    },
    locationsOverview: {
      badge: "Texas Coverage",
      heading: "Serving Greater Houston & Surrounding Texas Communities",
      subheading: "Dedicated roofing solutions addressing regional heat, humidity, storm fronts, and coastal winds."
    },
    portfolio: {
      badge: "Real Craftsmanship",
      heading: "Project Gallery & Craftsmanship",
      subheading: "Inspect real roofing projects, tear-offs, underlayment applications, and structural repairs.",
      confirmedBadge: "Confirmed ELIKAY Work",
      illustrativeBadge: "Illustrative Project Reference",
      allFilter: "All Projects"
    },
    footer: {
      tagline: "Quality Roofs · Lasting Protection",
      aboutText: "ELIKAY ROOFING LLC delivers trusted residential roofing, leak detection, and exterior care. Our team brings 13 years of hands-on roofing industry experience to Texas homes.",
      quickLinks: "Quick Navigation",
      servicesTitle: "Roofing Services",
      areasTitle: "Service Areas",
      contactTitle: "Get in Touch",
      legalTitle: "Legal & Information",
      rights: "All rights reserved. ELIKAY ROOFING LLC.",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
      phone: "Phone",
      email: "Email",
      hours: "Free estimates scheduled by appointment."
    },
    form: {
      fullName: "Full Name",
      fullNamePlaceholder: "John Doe",
      phone: "Phone Number",
      phonePlaceholder: "970-000-0000",
      email: "Email Address",
      emailPlaceholder: "name@example.com",
      serviceRequested: "Service Requested",
      selectService: "Select a roofing or exterior service",
      cityArea: "City or Area",
      selectCity: "Select your Texas city or area",
      message: "Description of Your Roofing Concern",
      messagePlaceholder: "Please describe what you are noticing (e.g., water stain on ceiling, missing shingles after storm, roof replacement inquiry)...",
      preferredContact: "Preferred Contact Method",
      contactPhone: "Phone Call",
      contactEmail: "Email",
      contactText: "Text Message",
      submitButton: "Send Estimate Request via Email",
      submitting: "Preparing Email...",
      emailNotice: "Note: Submitting this form will prepare an email directly to Nancast0598@gmail.com with your details. Your email client will open to send the request.",
      validationError: "Please fill in all required fields (Name, Phone, and Service)."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      serviceAreas: "Zonas de Servicio",
      portfolio: "Galería",
      about: "Nosotros",
      faq: "Preguntas",
      contact: "Contacto",
      freeEstimateBtn: "Presupuesto Gratuito",
      callUs: "Llamar 970-778-7951",
      allServices: "Ver los 11 Servicios",
      allAreas: "Ver Todas las Zonas",
      menu: "Menú",
      close: "Cerrar"
    },
    common: {
      freeEstimatesBadge: "Presupuestos Gratuitos · 13 Años de Experiencia",
      callNow: "Llamar 970-778-7951",
      emailUs: "Enviar Correo",
      getFreeEstimate: "Solicitar Presupuesto Gratuito",
      viewDetails: "Ver Detalles",
      learnMore: "Conocer Más",
      exploreService: "Explorar Servicio",
      exploreArea: "Explorar Zona",
      relatedServices: "Servicios Exteriores Relacionados",
      serviceAreas: "Zonas de Cobertura",
      frequentlyAskedQuestions: "Preguntas Frecuentes",
      backToHome: "Volver al Inicio",
      experienceNote: "13 años de experiencia práctica en techos por parte del equipo",
      honestEstimateNotice: "Evaluación en su propiedad con cotizaciones transparentes por escrito."
    },
    hero: {
      badge: "Techos Residenciales · Houston y Todo Texas",
      heading: "Experiencia en Techos en la que Puede Confiar.",
      subheading: "Reparación de techos residenciales, reemplazos integrales, detección de goteras y restauración exterior en Houston, Katy, Cypress y comunidades de Texas.",
      ctaPrimary: "Solicitar Presupuesto Gratuito",
      ctaSecondary: "Llamar al 970-778-7951",
      trustPill1: "13 Años de Experiencia Práctica",
      trustPill2: "Presupuestos Sin Costo",
      trustPill3: "Hablamos Español"
    },
    servicesOverview: {
      badge: "Alcance Exterior Completo",
      heading: "Servicios Integrales de Techos y Exteriores Residenciales",
      subheading: "Desde reparaciones puntuales de tejas y goteras hasta reemplazos arquitectónicos completos, carpintería de aleros y canaletas."
    },
    locationsOverview: {
      badge: "Cobertura en Texas",
      heading: "Atendiendo el Gran Houston y Comunidades Cercanas",
      subheading: "Soluciones de techado diseñadas para soportar el calor, la humedad, frentes de tormenta y vientos costeros."
    },
    portfolio: {
      badge: "Mano de Obra Real",
      heading: "Galería de Proyectos y Calidad de Trabajo",
      subheading: "Revise trabajos reales de techado, desmontajes, aplicación de membranas sintéticas y reparaciones estructurales.",
      confirmedBadge: "Trabajo Confirmado de ELIKAY",
      illustrativeBadge: "Referencia Visual Ilustrativa",
      allFilter: "Todos los Proyectos"
    },
    footer: {
      tagline: "Techos de Calidad · Protección Duradera",
      aboutText: "ELIKAY ROOFING LLC ofrece servicios residenciales confiables de techado, detección de fugas y mantenimiento exterior. Nuestro equipo aporta 13 años de experiencia práctica en el rubro.",
      quickLinks: "Navegación Rápida",
      servicesTitle: "Servicios de Techos",
      areasTitle: "Zonas de Servicio",
      contactTitle: "Contacto",
      legalTitle: "Información Legal",
      rights: "Todos los derechos reservados. ELIKAY ROOFING LLC.",
      privacyPolicy: "Política de Privacidad",
      termsOfUse: "Términos de Uso",
      phone: "Teléfono",
      email: "Correo",
      hours: "Presupuestos gratuitos coordinados por cita."
    },
    form: {
      fullName: "Nombre Completo",
      fullNamePlaceholder: "Juan Pérez",
      phone: "Número de Teléfono",
      phonePlaceholder: "970-000-0000",
      email: "Correo Electrónico",
      emailPlaceholder: "correo@ejemplo.com",
      serviceRequested: "Servicio Requerido",
      selectService: "Seleccione un servicio de techado o exterior",
      cityArea: "Ciudad o Zona",
      selectCity: "Seleccione su ciudad en Texas",
      message: "Descripción de su Inquietud",
      messagePlaceholder: "Describa lo que observa (ej. mancha de agua en techo interior, tejas caídas tras tormenta, consulta de reemplazo)...",
      preferredContact: "Método de Contacto Preferido",
      contactPhone: "Llamada Telefónica",
      contactEmail: "Correo Electrónico",
      contactText: "Mensaje de Texto",
      submitButton: "Enviar Solicitud por Correo",
      submitting: "Preparando Correo...",
      emailNotice: "Nota: Al enviar este formulario se abrirá su aplicación de correo electrónico dirigida a Nancast0598@gmail.com con sus datos para enviar la solicitud.",
      validationError: "Por favor complete los campos obligatorios (Nombre, Teléfono y Servicio)."
    }
  }
};

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine current language based on URL prefix
  const isSpanish = location.pathname.startsWith('/es');
  const lang = isSpanish ? 'es' : 'en';

  // Toggle language while preserving the remaining URL path
  const toggleLanguage = (targetLang) => {
    if (targetLang === lang) return;

    let targetPath = location.pathname;
    if (targetLang === 'es') {
      targetPath = `/es${location.pathname === '/' ? '' : location.pathname}`;
    } else {
      targetPath = location.pathname.replace(/^\/es/, '') || '/';
    }

    navigate(`${targetPath}${location.search}${location.hash}`);
  };

  // Helper to translate deep keys e.g. t('nav.home')
  const t = (path) => {
    const keys = path.split('.');
    let result = uiTranslations[lang];
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        return path;
      }
    }
    return result;
  };

  // Synchronize document lang attribute for accessibility and SEO
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    isSpanish,
    toggleLanguage,
    t,
    ui: uiTranslations[lang]
  }), [lang, isSpanish]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
