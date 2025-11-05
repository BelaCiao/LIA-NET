import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{ page: Page; currentPage: Page; navigateTo: (page: Page) => void; children: React.ReactNode; isMobile?: boolean }> = ({ page, currentPage, navigateTo, children, isMobile = false }) => {
  const isActive = currentPage === page;
  const baseClasses = isMobile 
    ? "block py-3 px-4 text-lg" 
    : "py-2 px-1 transition-colors duration-300 relative";
  const activeClasses = isMobile || isActive
    ? "text-secondary" 
    : "";
  const inactiveClasses = isMobile 
    ? "text-dark-text hover:text-secondary" 
    : "text-dark-text hover:text-secondary";

  return (
    <li>
      <button
        onClick={() => navigateTo(page)}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
        {!isMobile && (
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
        )}
      </button>
    </li>
  );
};

const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = Object.values(Page);

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={() => navigateTo(Page.Home)} className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-3xl font-bold whitespace-nowrap text-primary tracking-tighter">LIANET</span>
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Abrir menu principal</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
           <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent ${isMenuOpen ? 'bg-white' : ''}`}>
            {navLinks.map((page) => (
              <li key={page} className="group">
                <NavLink page={page} currentPage={currentPage} navigateTo={navigateTo} isMobile={isMenuOpen}>
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;