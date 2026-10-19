import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/businessInfo';
import PageHeader from '../components/PageHeader';

export default function TermsPage() {
  const { isSpanish } = useLanguage();

  return (
    <div>
      <PageHeader
        badge={isSpanish ? 'Documento Legal · Borrador' : 'Legal Terms · Draft'}
        title={isSpanish ? 'Términos de Uso' : 'Terms of Use'}
        subtitle={isSpanish
          ? 'Términos y condiciones aplicables al uso informativo de este sitio web.'
          : 'Terms and conditions governing informative use of this website.'}
        breadcrumbs={[
          { label: isSpanish ? 'Términos de Uso' : 'Terms of Use' }
        ]}
        bgImage="/images/heroes/hero-legal.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed font-body">
          
          {/* Legal Draft Notice */}
          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs">
            <span className="font-bold block mb-1">
              {isSpanish ? 'Aviso Importante para el Propietario / Legal:' : 'Important Owner / Legal Review Notice:'}
            </span>
            <p>
              {isSpanish
                ? 'Este documento es un borrador informativo para ELIKAY ROOFING LLC y debe ser revisado y aprobado formalmente antes de su adopción legal definitiva.'
                : 'This document is an informative draft for ELIKAY ROOFING LLC and must be reviewed and approved by a legal professional prior to formal legal reliance.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold font-display text-elikay-charcoal">
              {isSpanish ? '1. Propósito Informativo del Sitio Web' : '1. Informational Purpose'}
            </h2>
            <p>
              {isSpanish
                ? 'El contenido de este sitio web tiene carácter informativo general sobre los servicios de techado residencial que ofrece ELIKAY ROOFING LLC. No constituye asesoramiento de ingeniería estructural ni un contrato de obra formal. Los acuerdos de servicio se rigen por presupuestos y contratos escritos formalizados directamente entre las partes.'
                : 'Content provided on this website is for general informational guidance regarding residential roofing services provided by ELIKAY ROOFING LLC. It does not constitute structural engineering counsel or a formal contract for construction. All contracted roofing projects are governed by specific written agreements signed directly by the parties.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold font-display text-elikay-charcoal">
              {isSpanish ? '2. Presupuestos Gratuitos' : '2. Free Estimates & On-Site Evaluations'}
            </h2>
            <p>
              {isSpanish
                ? 'Las visitas de presupuesto gratuito se realizan sujetas a disponibilidad geográfica en el área metropolitana de Houston y comunidades cercanas de Texas. Una estimación verbal o por formulario es orientativa hasta que se complete una inspección física en el lugar.'
                : 'Free estimates are scheduled subject to geographic availability across Greater Houston and adjacent Texas service areas. Initial online or verbal inquiries are preliminary until verified through on-site physical inspection of the roof.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold font-display text-elikay-charcoal">
              {isSpanish ? '3. Propiedad Intelectual y Fotografías' : '3. Intellectual Property & Photography'}
            </h2>
            <p>
              {isSpanish
                ? 'El logotipo de ELIKAY ROOFING LLC, los textos y las fotografías de proyectos presentados en este sitio web son propiedad de la empresa o se utilizan bajo licencia. No está permitida su reproducción comercial no autorizada.'
                : 'The ELIKAY ROOFING LLC logo, original copy, and verified project photographs displayed on this website are protected property. Unauthorized commercial reproduction or copying is prohibited.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold font-display text-elikay-charcoal">
              {isSpanish ? '4. Contacto y Consultas' : '4. Inquiries'}
            </h2>
            <p>
              {isSpanish
                ? `Para cualquier consulta relativa a estos términos, comuníquese con ELIKAY ROOFING LLC al ${businessInfo.phone} o escriba a ${businessInfo.email}.`
                : `For questions regarding website terms, contact ELIKAY ROOFING LLC at ${businessInfo.phone} or via email at ${businessInfo.email}.`}
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
