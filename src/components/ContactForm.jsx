import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { locationsData } from '../data/locationsData';
import { businessInfo } from '../data/businessInfo';

export default function ContactForm({ preselectedService = '', preselectedArea = '' }) {
  const { lang, isSpanish, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService,
    area: preselectedArea,
    message: '',
    preferredContact: 'phone'
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setError(t('form.validationError'));
      return;
    }

    // Construct honest, well-formatted mailto URL
    const subject = encodeURIComponent(`Estimate Request: ${formData.service || 'Roofing / Exterior'} - ${formData.name}`);
    const bodyContent = [
      `CUSTOMER ROOFING ESTIMATE REQUEST`,
      `---------------------------------`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || 'Not provided'}`,
      `Service Requested: ${formData.service || 'General Inquiry'}`,
      `City / Area: ${formData.area || 'Houston Area'}`,
      `Preferred Contact Method: ${formData.preferredContact}`,
      ``,
      `Project Description & Details:`,
      formData.message || 'No additional details provided.',
      ``,
      `Sent via ELIKAY ROOFING LLC Website Form`
    ].join('\n');

    const mailtoUrl = `mailto:${businessInfo.email}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    setSubmitted(true);

    // Open user's email client
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <div className="bg-white rounded-xl border border-elikay-borderGray/40 shadow-elevated p-6 sm:p-8">
      
      {/* Form Header */}
      <div className="mb-6 pb-4 border-b border-gray-100">
        <span className="inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-elikay-blue bg-elikay-blue/10 rounded mb-2">
          {businessInfo.offer[lang]}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold font-display text-elikay-charcoal">
          {isSpanish ? 'Solicite su Presupuesto sin Costo' : 'Request Your Free Estimate'}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          {businessInfo.experienceSummary[lang]}
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded bg-red-50 border border-red-200 text-xs text-red-700 font-medium" role="alert">
          {error}
        </div>
      )}

      {submitted ? (
        <div className="p-6 rounded-lg bg-elikay-blue/5 border border-elikay-blue/20 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-elikay-blue text-white mx-auto flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-elikay-charcoal">
            {isSpanish ? 'Abriendo su Correo Electrónico' : 'Opening Your Email Application'}
          </h4>
          <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
            {isSpanish 
              ? 'Hemos preparado el mensaje con todos sus datos dirigido a Nancast0598@gmail.com. Por favor revise y presione "Enviar" en su aplicación de correo.'
              : 'We have formatted an email directly addressed to Nancast0598@gmail.com containing your details. Please verify and tap "Send" in your email client to complete submission.'}
          </p>
          <div className="pt-2">
            <a 
              href={businessInfo.phoneTel} 
              className="inline-flex items-center gap-2 px-4 py-2 bg-elikay-deepBlue text-white text-xs font-semibold rounded hover:bg-elikay-blue transition-colors"
            >
              <span>{isSpanish ? 'O llámenos al' : 'Or Call Directly'}: {businessInfo.phone}</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          
          {/* Name & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="form-name" className="block text-xs font-bold text-elikay-charcoal mb-1">
                {t('form.fullName')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="form-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t('form.fullNamePlaceholder')}
                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded focus:bg-white focus:border-elikay-blue transition-colors"
              />
            </div>

            <div>
              <label htmlFor="form-phone" className="block text-xs font-bold text-elikay-charcoal mb-1">
                {t('form.phone')} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="form-phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('form.phonePlaceholder')}
                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded focus:bg-white focus:border-elikay-blue transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="form-email" className="block text-xs font-bold text-elikay-charcoal mb-1">
              {t('form.email')}
            </label>
            <input
              type="email"
              id="form-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('form.emailPlaceholder')}
              className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded focus:bg-white focus:border-elikay-blue transition-colors"
            />
          </div>

          {/* Service & City Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="form-service" className="block text-xs font-bold text-elikay-charcoal mb-1">
                {t('form.serviceRequested')}
              </label>
              <select
                id="form-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded focus:bg-white focus:border-elikay-blue transition-colors"
              >
                <option value="">{t('form.selectService')}</option>
                {servicesData.map(s => (
                  <option key={s.slug} value={s.title.en}>
                    {s.title[lang]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="form-area" className="block text-xs font-bold text-elikay-charcoal mb-1">
                {t('form.cityArea')}
              </label>
              <select
                id="form-area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded focus:bg-white focus:border-elikay-blue transition-colors"
              >
                <option value="">{t('form.selectCity')}</option>
                {locationsData.map(l => (
                  <option key={l.slug} value={l.name}>
                    {l.name}, TX
                  </option>
                ))}
                <option value="Other Texas Area">{isSpanish ? 'Otra Zona de Texas' : 'Other Texas Area'}</option>
              </select>
            </div>
          </div>

          {/* Message / Project Description */}
          <div>
            <label htmlFor="form-message" className="block text-xs font-bold text-elikay-charcoal mb-1">
              {t('form.message')}
            </label>
            <textarea
              id="form-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder={t('form.messagePlaceholder')}
              className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded focus:bg-white focus:border-elikay-blue transition-colors"
            />
          </div>

          {/* Preferred Contact Method */}
          <div>
            <span className="block text-xs font-bold text-elikay-charcoal mb-1.5">
              {t('form.preferredContact')}
            </span>
            <div className="flex items-center gap-4 text-xs text-gray-700">
              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formData.preferredContact === 'phone'}
                  onChange={handleChange}
                  className="text-elikay-blue focus:ring-elikay-blue"
                />
                <span>{t('form.contactPhone')}</span>
              </label>
              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formData.preferredContact === 'email'}
                  onChange={handleChange}
                  className="text-elikay-blue focus:ring-elikay-blue"
                />
                <span>{t('form.contactEmail')}</span>
              </label>
              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="text"
                  checked={formData.preferredContact === 'text'}
                  onChange={handleChange}
                  className="text-elikay-blue focus:ring-elikay-blue"
                />
                <span>{t('form.contactText')}</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-elikay-primary hover:bg-elikay-primaryHover text-white text-sm font-bold rounded shadow-subtle hover:shadow-elevated transition-all active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{t('form.submitButton')}</span>
            </button>
            <p className="mt-2 text-[11px] text-gray-400 text-center leading-normal">
              {t('form.emailNotice')}
            </p>
          </div>

        </form>
      )}

    </div>
  );
}
