import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{ page: Page; currentPage: Page; navigateTo: (page: Page) => void; children: React.ReactNode; isMobile?: boolean }> = ({ page, currentPage, navigateTo, children, isMobile = false }) => {
  const isActive = currentPage === page;
  const baseClasses = isMobile 
    ? "block py-3 px-4 text-lg w-full text-center" 
    : "py-2 px-1 transition-colors duration-300 relative group";
  const activeClasses = isMobile
    ? "text-secondary font-semibold"
    : "text-secondary";
  const inactiveClasses = isMobile 
    ? "text-gray-300 hover:text-secondary" 
    : "text-gray-300 hover:text-white";

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

  const handleMobileNavClick = (page: Page) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-primary/90 backdrop-blur-md sticky top-0 z-50 border-b border-white/10 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Text */}
        {/* FIX: Corrected the onClick handler to navigate to Page.Home. The previous code was passing the Page enum type itself instead of a member, causing a type error. */}
        <button onClick={() => navigateTo(Page.Home)} className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
           <span className="self-center text-2xl font-bold whitespace-nowrap text-white">LIANET</span>
        </button>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            {navLinks.map((page) => (
              <NavLink key={page} page={page} currentPage={currentPage} navigateTo={navigateTo}>
                {page}
              </NavLink>
            ))}
          </ul>
        </div>
        
        {/* Mobile Nav */}
        <div className={`w-full md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-mobile">
            <ul className="font-medium flex flex-col mt-4 border-t border-gray-700 pt-4">
                {navLinks.map((page) => (
                    <NavLink key={page} page={page} currentPage={currentPage} navigateTo={handleMobileNavClick} isMobile={true}>
                        {page}
                    </NavLink>
                ))}
            </ul>
        </div>
      </div>
    </nav>
  );
};

// FIX: Added the missing default export. This resolves the module import error in App.tsx.
export default Navbar;