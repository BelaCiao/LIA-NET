import React, { useState, useCallback } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import RemoteServicesPage from './components/pages/ServicesPage';
import FieldServicePage from './components/pages/FieldServiceNocPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage navigateTo={navigateTo} />;
      case Page.RemoteServices:
        return <RemoteServicesPage />;
      case Page.FieldService:
        return <FieldServicePage navigateTo={navigateTo} />;
      case Page.About:
        return <AboutPage navigateTo={navigateTo} />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-primary">
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;