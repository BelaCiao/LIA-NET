import React from 'react';
import { Page } from '../../types';
import Button from '../ui/Button';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const PillarCard: React.FC<{ icon: React.ReactNode; title: string; description: string; onClick: () => void; }> = ({ icon, title, description, onClick }) => (
  <div 
    className="bg-white p-8 rounded-lg border border-gray-200 text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:border-secondary hover:-translate-y-2 cursor-pointer flex flex-col group"
    onClick={onClick}
  >
    <div className="mx-auto text-secondary mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
    <p className="text-gray-600 flex-grow mb-4">{description}</p>
    <span className="text-secondary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Saiba Mais →</span>
  </div>
);

const Feature: React.FC<{ icon: React.ReactNode; title: string; }> = ({ icon, title }) => (
    <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary/10 text-secondary mb-4">
           {icon}
        </div>
        <h3 className="font-bold text-primary text-lg">{title}</h3>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <div className="bg-white text-dark-text">
      {/* Hero Section */}
      <section 
        className="min-h-[80vh] flex items-center justify-center text-center bg-primary text-white" 
      >
        <div className="max-w-screen-lg mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Tecnologia que Funciona para Você.
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            Soluções completas em TI e Redes. Do seu computador pessoal à infraestrutura de rede da sua empresa, estamos aqui para ajudar.
          </p>
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" onClick={() => navigateTo(Page.Services)}>Para Minha Empresa</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => navigateTo(Page.Services)}>Para Minha Casa</Button>
            </div>
            <a href="https://wa.me/5553999335369" target="_blank" rel="noopener noreferrer" aria-label="Fale pelo WhatsApp">
                <Button variant="primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.004l-1.03 3.747l3.826-1.011z"/></svg>
                    <span>Fale pelo WhatsApp</span>
                </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 sm:py-24 bg-light-gray">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Nossas Frentes de Atuação</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PillarCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} 
              title="TI & Software" 
              description="Manutenção de computadores, suporte remoto e montagem de PCs sob medida."
              onClick={() => navigateTo(Page.Services)}
            />
            <PillarCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 8.536a14.5 14.5 0 0121.212 0" /></svg>} 
              title="Redes & Infraestrutura" 
              description="Projetos de redes cabeadas, fibra óptica e Wi-Fi de alta performance."
              onClick={() => navigateTo(Page.Services)}
            />
            <PillarCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} 
              title="Field Service & NOC" 
              description="Seu parceiro técnico local para grandes projetos e monitoramento."
              onClick={() => navigateTo(Page.FieldServiceNOC)}
            />
          </div>
        </div>
      </section>

       {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-screen-lg mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Por que escolher a LIANET?</h2>
          <div className="grid md:grid-cols-3 gap-12">
             <Feature 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                title="Experiência em Ambientes Críticos"
              />
               <Feature 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8z" /></svg>}
                title="Atendimento Flexível (Remoto e Presencial)"
              />
               <Feature 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>}
                title="Especialistas em UniFi e Fibra Óptica"
              />
          </div>
        </div>
      </section>

      {/* Partner Network CTA Section */}
      <section className="bg-primary text-white">
        <div className="max-w-screen-xl mx-auto px-4 py-16 sm:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">É Técnico de TI e Busca uma Renda Extra?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            Estamos sempre expandindo nossa rede de parceiros de campo para atender demandas em diversas localidades. Se você é um profissional qualificado e busca oportunidades flexíveis, queremos conhecer você.
          </p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => navigateTo(Page.Contact)}>
            Quero Ser um Parceiro
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-light-gray">
        <div className="max-w-screen-xl mx-auto px-4 py-16 sm:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Pronto para resolver seu problema de tecnologia?</h2>
          <Button variant="primary" onClick={() => navigateTo(Page.Contact)}>Fale com um Especialista</Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;