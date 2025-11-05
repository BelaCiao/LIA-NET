import React from 'react';
import { Page } from '../../types';
import Button from '../ui/Button';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const QuickDirectionCard: React.FC<{ icon: React.ReactNode; title: string; description: string; buttonText: string; onClick: () => void; }> = ({ icon, title, description, buttonText, onClick }) => (
    <div className="bg-primary-card/80 backdrop-blur-sm p-8 rounded-lg border border-white/10 flex flex-col items-center text-center transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 group hover:border-secondary/50">
        <div className="text-secondary mb-6">{icon}</div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 flex-grow mb-6 max-w-sm">{description}</p>
        <Button variant="primary" onClick={onClick}>{buttonText}</Button>
    </div>
);

const AudienceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-secondary/10 text-secondary mb-5">
            {icon}
        </div>
        <h3 className="font-bold text-white text-xl mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
);

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary/10 text-secondary mb-4">
           {icon}
        </div>
        <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
    </div>
);

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <div className="bg-transparent text-gray-300">
      {/* Hero Section */}
      <section 
        className="min-h-[70vh] flex items-center justify-center text-center text-white" 
        data-animate-on-scroll
      >
        <div className="max-w-screen-lg mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Especialista em TI e Redes em Rio Grande e Pelotas.
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            Soluções remotas e presenciais para Provedores, Empresas e Residências.
          </p>
        </div>
      </section>

      {/* Quick Direction Section */}
       <section className="py-16 sm:py-24 bg-transparent -mt-20 relative z-10" data-animate-on-scroll>
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10">
                <QuickDirectionCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    title="Suporte Remoto e NOC"
                    description="Agilidade para resolver problemas de software, configurar redes e dar suporte a provedores (NOC N1/N2), tudo online."
                    buttonText="Ver Serviços Remotos"
                    onClick={() => navigateTo(Page.RemoteServices)}
                />
                <QuickDirectionCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
                    title="Atendimento Presencial (Field Service)"
                    description="Seu técnico especialista no local para instalações, reparos de hardware e infraestrutura de redes em Rio Grande, Pelotas e região."
                    buttonText="Ver Serviços Presenciais"
                    onClick={() => navigateTo(Page.FieldService)}
                />
            </div>
        </div>
      </section>

      {/* "Para Quem Trabalhamos" Section */}
      <section className="py-16 sm:py-24 bg-transparent" data-animate-on-scroll>
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Para Quem Trabalhamos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <AudienceCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 8.536a14.5 14.5 0 0121.212 0" /></svg>}
                title="Provedores de Internet (ISPs)"
                description="Suporte NOC e Field Service para sua operação."
            />
            <AudienceCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                title="Empresas e Comércio"
                description="Manutenção de TI e infraestrutura de redes para seu negócio não parar."
            />
            <AudienceCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
                title="Residências e Condomínios"
                description="Redes Wi-Fi de alta performance, montagem de PCs e reparos."
            />
          </div>
        </div>
      </section>

       {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-transparent" data-animate-on-scroll>
        <div className="max-w-screen-lg mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Por que escolher a LIANET?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
             <Feature 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                title="Especialista Local"
                description="Conhecimento profundo da Região Sul."
              />
               <Feature 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>}
                title="Experiência Comprovada"
                description="Experiência em campo com os maiores players de TI e Redes do mercado."
              />
               <Feature 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                title="Flexibilidade Total"
                description="Do suporte remoto rápido ao projeto de campo complexo."
              />
               <Feature 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>}
                title="Foco em Qualidade"
                description="Especialização em Ubiquiti UniFi e MikroTik."
              />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-transparent" data-animate-on-scroll>
        <div className="max-w-screen-xl mx-auto px-4 py-16 sm:py-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para resolver seu problema de tecnologia?</h2>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => navigateTo(Page.Contact)}>Fale com um Especialista</Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;