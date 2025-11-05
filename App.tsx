import React, { useState, useCallback, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import RemoteServicesPage from './components/pages/ServicesPage';
import FieldServicePage from './components/pages/FieldServiceNocPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });
  
    const elements = document.querySelectorAll('[data-animate-on-scroll]');
    elements.forEach(el => observer.observe(el));
  
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [currentPage]);

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
    <div className="flex flex-col min-h-screen font-sans bg-primary relative">
      <AnimatedBackground />
      
      <div>
        <Navbar currentPage={currentPage} navigateTo={navigateTo} />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer navigateTo={navigateTo} />
      </div>
    </div>
  );
};

export default App;