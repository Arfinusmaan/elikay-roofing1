import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/businessInfo';

export default function NotFoundPage() {
  const { isSpanish, t } = useLanguage();
  const prefix = isSpanish ? '/es' : '';

  return (
    <div className="py-24 sm:py-32 bg-elikay-canvas text-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 space-y-6">
        <span className="inline-block px-3 py-1 rounded bg-elikay-blue/10 text-elikay-blue text-xs font-bold uppercase tracking-wider">
          404 Error
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-elikay-charcoal tracking-tight">
          {isSpanish ? 'Página No Encontrada' : 'Page Not Found'}
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed font-body">
          {isSpanish
            ? 'La página que busca no existe o ha sido reubicada. Puede regresar a la página de inicio o llamarnos directamente para recibir asistencia.'
            : 'The page you are looking for does not exist or has been moved. You can return to our homepage or contact us directly for assistance.'}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to={`${prefix}/`}
            className="w-full sm:w-auto px-6 py-3 bg-elikay-blue hover:bg-elikay-supportingBlue text-white text-xs font-bold uppercase tracking-wider rounded shadow-subtle transition-colors"
          >
            {t('common.backToHome')}
          </Link>
          <a
            href={businessInfo.phoneTel}
            className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-100 text-elikay-charcoal border border-gray-300 text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>{isSpanish ? 'Llamar al' : 'Call'} {businessInfo.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
