import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import LocationsOverviewPage from './pages/LocationsOverviewPage';
import LocationDetailPage from './pages/LocationDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-clip">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full max-w-full">
        <Routes>
          {/* English Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/service-areas" element={<LocationsOverviewPage />} />
          <Route path="/service-areas/:slug" element={<LocationDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsPage />} />

          {/* Spanish Routes (/es/...) */}
          <Route path="/es" element={<HomePage />} />
          <Route path="/es/" element={<HomePage />} />
          <Route path="/es/services" element={<ServicesOverviewPage />} />
          <Route path="/es/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/es/service-areas" element={<LocationsOverviewPage />} />
          <Route path="/es/service-areas/:slug" element={<LocationDetailPage />} />
          <Route path="/es/portfolio" element={<PortfolioPage />} />
          <Route path="/es/about" element={<AboutPage />} />
          <Route path="/es/faq" element={<FAQPage />} />
          <Route path="/es/contact" element={<ContactPage />} />
          <Route path="/es/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/es/terms-of-use" element={<TermsPage />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <MainLayout />
      </LanguageProvider>
    </BrowserRouter>
  );
}
