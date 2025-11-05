import React from 'react';
import { Page } from '../../types';
import Button from '../ui/Button';

interface FieldServicePageProps {
    navigateTo: (page: Page) => void;
}

const ServiceListItem: React.FC<{ title: string, text: string }> = ({ title, text }) => (
    <div className="bg-primary-card/80 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-sm flex flex-col h-full">
        <h3 className="font-bold text-white text-xl mb-2">{title}</h3>
        <p className="text-gray-300 flex-grow">{text}</p>
    </div>
);

const FieldServicePage: React.FC<FieldServicePageProps> = ({ navigateTo }) => {
  return (
    <div className="bg-transparent text-gray-300">
      <header className="bg-transparent text-white py-16 text-center" data-animate-on-scroll>
        <h1 className="text-4xl md:text-5xl font-bold">Seu Técnico de Campo em Rio Grande e Pelotas<span className="text-secondary">.</span></h1>
        <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">Vamos até você para resolver problemas complexos de hardware e infraestrutura.</p>
      </header>
      
      <main>
        <section className="py-16 sm:py-24" data-animate-on-scroll>
          <div className="max-w-screen-xl mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white inline-block">Nossos Serviços Presenciais</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <ServiceListItem 
                    title="Infraestrutura de Redes (Cabeamento Estruturado)"
                    text="Passagem de cabos de rede (Cat5e/Cat6) e fibra óptica, montagem e organização de racks, certificação de pontos e instalação de canaletas em ambientes comerciais e residenciais."
                />
                <ServiceListItem 
                    title="Field Service para Empresas e Parceiros"
                    text="Atuação como técnico local para grandes empresas de TI. Experiência em troca de equipamentos em bancos, varejo e órgãos públicos (impressoras, computadores, totens de autoatendimento)."
                />
                 <ServiceListItem 
                    title="Redes Wi-Fi de Alta Performance"
                    text="Especialista em planejamento e instalação de sistemas Wi-Fi com equipamentos Ubiquiti UniFi, garantindo cobertura total e alta velocidade em áreas complexas como hotéis, escritórios e grandes residências."
                />
                 <ServiceListItem 
                    title="Manutenção de Hardware"
                    text="Montagem profissional de PCs Gamer e para escritório, com seleção de peças e otimização. Diagnóstico e reparo de notebooks e desktops (troca de peças, limpeza, formatação)."
                />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-primary-card/80 backdrop-blur-sm" data-animate-on-scroll>
          <div className="max-w-screen-lg mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Projetos em Destaque</h2>
            {/* Placeholder for photo gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-primary/50 aspect-video rounded-lg flex items-center justify-center border border-white/10"><span className="text-gray-400">Rack Organizado</span></div>
                <div className="bg-primary/50 aspect-video rounded-lg flex items-center justify-center border border-white/10"><span className="text-gray-400">PC Gamer Montado</span></div>
                <div className="bg-primary/50 aspect-video rounded-lg flex items-center justify-center border border-white/10"><span className="text-gray-400">UniFi AP Instalado</span></div>
            </div>
          </div>
        </section>

        <section className="bg-transparent text-white" data-animate-on-scroll>
             <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Precisa de uma visita técnica?</h2>
                <Button variant="primary" onClick={() => navigateTo(Page.Contact)}>Solicite um Orçamento</Button>
            </div>
        </section>
      </main>
    </div>
  );
};

export default FieldServicePage;