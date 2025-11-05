import React from 'react';
import { Page } from '../types';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const logoDataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAABABAMAAABn2A+2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIBSURBVCHd7ZtNb6JAEIb/EBL2XmMv2Gvttd5CQB4IAcFCQsK+hYAgwAv2PnvLChg8yWyaQZnZzUv6vj/z29nNGFNKqZCQ+Q4BEyLT0DkLgiHpjAVBkPSGgiBIemsjQoCEYc5v2gJIEB55DkDC8ChzAgmDA68jQIywykOAGGHlxwExwgr7AxFhhb2jA2KElb4PjBFW2js5IUZY6RnghBX2jgbECCvtA8QIy2YMxAhrZhxEjLDaM4AYYd0ZgBhhZzMAYoSdsQGIEbY5B2KEnbYBjBGOcwYgRjjNBkCMcDgDECMcwg5AjHAYMIAY4RgfAjHCGTMEIpwxgxBCOFsGIIQzrgZghEtuAcQIlyYDxAgnzQCECCfZAggRjloGECIcdgYgRJg9ASBCmD0BIkKYLQcgRJgNAyBEmM0GIEKYjQcgRJjZDBAmzGwdIEyY7QogTJjtCiBMmM0MIEyY4QogTJjhDEDEmOE2IEKY4RYgQpjjB0CEMd4GIEKY4wdAjDHeB0CMMeMOQIzxE3YAY8TNG0CM8RPmAGPEjRvAGPEjZoAx4kYfgDFixwEgxpjBAiDGmEMCIMaYxQIgxpiFAQgx5qAEIMaYjQYQYsyGAxBjzGYCCDFm4wCEGHMWEGJM+gcQY0z8FxBjTPwPEGNM/AsQY0z8ExBjTPwTEGNMfAsQY0z8CxBjTPwPEGNM/AsQY0z8ExBjTPwTEGNMfAsQY0z8CxBjTPwPEGNM/AsQY0z8ExBjTPwTEGNM/AsQY0z8B39qJd0Yp3dPAAAAAElFTkSuQmCC";

  return (
    <footer className="bg-primary text-gray-300 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto p-8 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <button onClick={() => navigateTo(Page.Home)} className="flex items-center mb-6 sm:mb-0 space-x-3 rtl:space-x-reverse cursor-pointer">
             <img src={logoDataUri} className="h-10 w-auto" alt="LIANET Soluções Logo" />
          </button>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            <li>
              <button onClick={() => navigateTo(Page.About)} className="hover:text-secondary me-4 md:me-6">Quem Somos</button>
            </li>
            <li>
              <button onClick={() => navigateTo(Page.RemoteServices)} className="hover:text-secondary me-4 md:me-6">Serviços Remotos</button>
            </li>
             <li>
                <button onClick={() => navigateTo(Page.FieldService)} className="hover:text-secondary me-4 md:me-6">Serviços Presenciais</button>
            </li>
            <li>
              <button onClick={() => navigateTo(Page.Contact)} className="hover:text-secondary">Contato</button>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="block text-sm text-gray-400 sm:text-center">© {new Date().getFullYear()} LIANET Soluções™. Todos os direitos reservados.</span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
                {/* Social Icons Placeholder */}
                <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                    <span className="sr-only">Facebook page</span>
                </a>
                 <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.792 2.013 10.146 2 12.315 2zm-1.002 6.363a4.951 4.951 0 100 9.9 4.951 4.951 0 000-9.9zm6.536-3.846a1.233 1.233 0 100 2.466 1.233 1.233 0 000-2.466z" clipRule="evenodd" /></svg>
                    <span className="sr-only">Instagram page</span>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;