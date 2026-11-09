import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Handle URL hash changes for deep linking and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'products' || hash === 'services' || hash === 'contact' || hash === 'home') {
        setCurrentPage(hash as PageId);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F8F4] text-[#26332E] w-full max-w-full overflow-x-hidden">
      {/* Global Header with integrated compact molecular divider */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
