import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{ page: Page; currentPage: Page; navigateTo: (page: Page) => void; children: React.ReactNode; isMobile?: boolean }> = ({ page, currentPage, navigateTo, children, isMobile = false }) => {
  const isActive = currentPage === page;
  const baseClasses = isMobile 
    ? "block py-3 px-4 text-lg w-full text-left" 
    : "py-2 px-1 transition-colors duration-300 relative group";
  const activeClasses = isMobile
    ? "text-secondary font-semibold"
    : "text-secondary [text-shadow:0_0_8px_theme(colors.secondary)]";
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
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
        )}
      </button>
    </li>
  );
};

// FIX: This component was not returning any JSX, causing a type error.
// It also lacked a default export, causing an import error in App.tsx.
const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = Object.values(Page);
  const logoDataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAABABAMAAABn2A+2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIBSURBVCHd7ZtNb6JAEIb/EBL2XmMv2Gvttd5CQB4IAcFCQsK+hYAgwAv2PnvLChg8yWyaQZnZzUv6vj/z29nNGFNKqZCQ+Q4BEyLT0DkLgiHpjAVBkPSGgiBIemsjQoCEYc5v2gJIEB55DkDC8ChzAgmDA68jQIywykOAGGHlxwExwgr7AxFhhb2jA2KElb4PjBFW2js5IUZY6RnghBX2jgbECCvtA8QIy2YMxAhrZhxEjLDaM4AYYd0ZgBhhZzMAYoSdsQGIEbY5B2KEnbYBjBGOcwYgRjjNBkCMcDgDECMcwg5AjHAYMIAY4RgfAjHCGTMEIpwxgxBCOFsGIIQzrgZghEtuAcQIlyYDxAgnzQCECCfZAggRjloGECIcdgYgRJg9ASBCmD0BIkKYLQcgRJgNAyBEmM0GIEKYjQcgRJjZDBAmzGwdIEyY7QogTJjtCiBMmM0MIEyY4QogTJjhDEDEmOE2IEKY4RYgQpjjB0CEMd4GIEKY4wdAjDHeB0CMMeMOQIzxE3YAY8TNG0CM8RPmAGPEjRvAGPEjZoAx4kYfgDFixwEgxpjBAiDGmEMCIMaYxQIgxpiFAQgx5qAEIMaYjQYQYsyGAxBjzGYCCDFm4wCEGHMWEGJM+gcQY0z8FxBjTPwPEGNM/AsQY0z8ExBjTPwTEGNMfAsQY0z8CxBjTPwPEGNM/AsQY0z8ExBjTPwTEGNMfAsQY0z8CxBjTPwPEGNM/AsQY0z8ExBjTPwTEGNM/AsQY0z8B39qJd0Yp3dPAAAAAElFTkSuQmCC";

// FIX: Added JSX return to Navbar component to render the navigation bar
  return (
    <nav className="bg-primary/80 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={() => navigateTo(Page.Home)} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logoDataUri} className="h-10" alt="LIANET Soluções Logo" />
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Abrir menu principal</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-primary-card/90 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {navLinks.map((page) => (
              <NavLink 
                key={page} 
                page={page} 
                currentPage={currentPage} 
                navigateTo={(p: Page) => { 
                  navigateTo(p); 
                  setIsMenuOpen(false); 
                }}
              >
                {page}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// FIX: Added default export to Navbar component
export default Navbar;