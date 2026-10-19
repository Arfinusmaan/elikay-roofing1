import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/businessInfo';
import PageHeader from '../components/PageHeader';

export default function PrivacyPolicyPage() {
  const { isSpanish } = useLanguage();

  return (
    <div>
      <PageHeader
        badge={isSpanish ? 'Documento Legal · Borrador' : 'Legal Documentation · Draft'}
        title={isSpanish ? 'Política de Privacidad' : 'Privacy Policy'}
        subtitle={isSpanish
          ? 'Información sobre cómo se recopilan y utilizan los datos proporcionados a través de nuestro sitio web.'
          : 'Information on how personal details submitted through this website are handled and protected.'}
        breadcrumbs={[
          { label: isSpanish ? 'Política de Privacidad' : 'Privacy Policy' }
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
                ? 'Este documento es un borrador informativo para el sitio web de ELIKAY ROOFING LLC. Debe ser revisado y aprobado por el propietario del negocio o su asesor legal antes del lanzamiento de producción formal.'
                : 'This document is a practical draft prepared for ELIKAY ROOFING LLC. It should be formally reviewed and approved by the business owner or an attorney prior to formal production launch.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold font-display text-elikay-charcoal">
              {isSpanish ? '1. Información que Recopilamos' : '1. Information We Collect'}
            </h2>
            <p>
              {isSpanish
                ? 'Recopilamos únicamente la información que usted decide proporcionar de forma voluntaria al solicitar un presupuesto o comunicarse con nosotros: nombre completo, número de teléfono, dirección de correo electrónico, ubicación aproximada (ciudad o código postal) y detalles sobre su necesidad de techado o exteriores.'
                : 'We collect information that you voluntarily provide when requesting a free estimate or contacting ELIKAY ROOFING LLC. This includes your full name, telephone number, email address, property location (city or zip code), and descriptions of your roofing or exterior concern.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold font-display text-elikay-charcoal">
              {isSpanish ? '2. Uso de la Información' : '2. How Information is Used'}
            </h2>
            <p>
              {isSpanish
                ? 'Los datos proporcionados se utilizan exclusivamente para: responder a sus consultas, coordinar visitas de inspección gratuita en su propiedad, entregar presupuestos por escrito y prestar los servicios acordados. No vendemos, alquilamos ni transferimos sus datos a terceros para fines de publicidad o telemercadeo.'
                : 'Information submitted through our website is used solely to respond to your inquiries, schedule on-site roof evaluations, provide written estimates, and perform requested roofing services. We do not sell, rent, or lease your personal information to third parties for commercial marketing.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold font-display text-elikay-charcoal">
              {isSpanish ? '3. Seguridad y Almacenamiento' : '3. Security & Communications'}
            </h2>
            <p>
              {isSpanish
                ? 'Adoptamos precauciones razonables para proteger la información que nos envía por correo electrónico o teléfono. Tenga en cuenta que ninguna transmisión por internet es 100% segura; le recomendamos no enviar datos financieros confidenciales a través de formularios generales.'
                : 'We take reasonable measures to safeguard contact information communicated via email and telephone. However, no internet transmission is entirely secure, and customers are advised not to submit sensitive financial information through contact forms.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold font-display text-elikay-charcoal">
              {isSpanish ? '4. Contacto para Consultas de Privacidad' : '4. Privacy Contact'}
            </h2>
            <p>
              {isSpanish
                ? `Si tiene dudas sobre esta política o desea actualizar sus datos de contacto, puede comunicarse con ELIKAY ROOFING LLC al ${businessInfo.phone} o por correo a ${businessInfo.email}.`
                : `For inquiries regarding this privacy policy or to update your contact preferences, please contact ELIKAY ROOFING LLC at ${businessInfo.phone} or via email at ${businessInfo.email}.`}
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
