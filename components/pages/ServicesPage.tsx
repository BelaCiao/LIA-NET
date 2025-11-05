import React, { useState } from 'react';
import Button from '../ui/Button';

const ServiceItem: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-white/10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-left py-5 px-2"
        >
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <svg className={`w-6 h-6 transform transition-transform duration-300 text-secondary ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="pb-5 px-2 pt-2 text-gray-300 prose prose-lg prose-invert">
            {children}
          </div>
        </div>
      </div>
    );
};

const HowItWorksStep: React.FC<{ number: number; title: string; description: string; }> = ({ number, title, description }) => (
    <div className="relative flex flex-col items-center">
        <div className="h-12 w-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl mb-3 z-10">
            {number}
        </div>
        <h4 className="font-bold text-white text-lg text-center mb-1">{title}</h4>
        <p className="text-gray-300 text-center">{description}</p>
    </div>
);


const RemoteServicesPage: React.FC = () => {
  return (
    <div className="bg-primary text-gray-300">
        <header className="bg-primary py-16">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Nossas Soluções Remotas<span className="text-secondary">:</span></h1>
                 <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">Agilidade e Expertise para sua Operação, com atendimento focado das 8h às 14h para garantir a estabilidade do seu ambiente de TI.</p>
            </div>
        </header>

        <main className="max-w-screen-xl mx-auto px-4 py-16 sm:py-24">
             <div className="max-w-4xl mx-auto">
                <ServiceItem title="Analista de NOC para Provedores (N1/N2)">
                    <p>Oferecemos monitoramento proativo, configuração de ativos (OLTs, Switches, Roteadores como MikroTik, FiberHome, Ubiquiti), análise de falhas e suporte técnico especializado para a equipe do seu provedor.</p>
                </ServiceItem>
                <ServiceItem title="Suporte de TI para Empresas">
                    <p>Realizamos acesso remoto a servidores e estações de trabalho para resolver problemas de software, realizar configurações, gerenciar antivírus e garantir a segurança dos dados do seu negócio.</p>
                </ServiceItem>
                <ServiceItem title="Consultoria e Planejamento de Redes">
                    <p>Desenhamos topologias de rede eficientes, planejamos a expansão da sua infraestrutura e otimizamos configurações para máximo desempenho e escalabilidade, tudo de forma remota.</p>
                </ServiceItem>
                <ServiceItem title="Suporte para Usuários Domésticos">
                    <p>Solucionamos problemas comuns de forma rápida e segura, incluindo remoção de vírus, otimização de sistema (Windows/Linux), instalação de softwares e diagnóstico de problemas de lentidão.</p>
                </ServiceItem>
            </div>
        </main>
        
        <section className="bg-primary-card py-16 sm:py-24">
            <div className="max-w-screen-xl mx-auto px-4">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white inline-block">Como Funciona?</h2>
                </div>
                <div className="relative">
                    <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-700 hidden md:block" aria-hidden="true"></div>
                    <div className="grid md:grid-cols-4 gap-12 relative">
                        <HowItWorksStep number={1} title="Contato Inicial" description="Você entra em contato via WhatsApp ou formulário." />
                        <HowItWorksStep number={2} title="Diagnóstico" description="Entendemos sua necessidade em uma chamada rápida." />
                        <HowItWorksStep number={3} title="Acesso Seguro" description="Conectamos ao seu equipamento usando ferramentas seguras." />
                        <HowItWorksStep number={4} title="Solução" description="Resolvemos o problema e entregamos um relatório do serviço." />
                    </div>
                </div>
            </div>
        </section>
        
         <section className="bg-primary text-white">
            <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-2">Precisa de um especialista remoto agora?</h2>
                 <a href="https://wa.me/5553999335369" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                   <Button variant="primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.004l-1.03 3.747l3.826-1.011z"/></svg>
                       <span>Fale Conosco no WhatsApp</span>
                    </Button>
                </a>
            </div>
        </section>

    </div>
  );
};

export default RemoteServicesPage;