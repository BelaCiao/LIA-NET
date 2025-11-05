import React from 'react';
import { Page } from '../../types';
import Button from '../ui/Button';

interface FieldServiceNocPageProps {
    navigateTo: (page: Page) => void;
}

const ServiceListItem: React.FC<{ title: string, text: string }> = ({ title, text }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="font-bold text-primary text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{text}</p>
    </div>
);


const FieldServiceNocPage: React.FC<FieldServiceNocPageProps> = ({ navigateTo }) => {
  return (
    <div className="bg-white text-dark-text">
      <header className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Seu Braço Técnico em Rio Grande e Região</h1>
      </header>
      
      <main>
        <section className="py-16 sm:py-24 bg-light-gray">
          <div className="max-w-screen-md mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold text-primary mb-4">Inteligência Local para Operações Nacionais</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Grandes empresas de TI e Telecom precisam de técnicos de confiança em campo para garantir a qualidade de seus serviços. A LIANET atua como seu 'Field Service', ou 'mãos e olhos', executando procedimentos técnicos com precisão e agilidade em nome da sua marca.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-screen-xl mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary inline-block">Nossas Capacidades em Campo</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <ServiceListItem 
                    title="IMAC (Install, Move, Add, Change)"
                    text="Instalação e substituição de hardware (desktops, impressoras, totens, roteadores) em agências bancárias, varejo e escritórios."
                />
                <ServiceListItem 
                    title="Smart Hands"
                    text="Suporte físico a equipes de engenharia remotas, como conectar um console, reiniciar um servidor ou verificar um status de LED."
                />
                 <ServiceListItem 
                    title="Site Survey"
                    text="Levantamento técnico do local para planejamento de instalações de rede ou equipamentos."
                />
                 <ServiceListItem 
                    title="Break-Fix"
                    text="Atendimento para substituição de peças e resolução de problemas de hardware em equipamentos sob contrato."
                />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-light-gray">
          <div className="max-w-screen-lg mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Suporte Especializado para Provedores (NOC)</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Oferecemos suporte de Nível 1 e 2 para provedores de internet (ISPs). Atuamos de forma remota para configurar equipamentos de clientes, diagnosticar problemas na rede e auxiliar sua equipe técnica, otimizando seu tempo e recursos.
            </p>
          </div>
        </section>

        <section className="bg-primary text-white">
             <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Precisa de um Parceiro Técnico em Rio Grande?</h2>
                <Button variant="primary" onClick={() => navigateTo(Page.Contact)}>Seja Nosso Parceiro</Button>
            </div>
        </section>
      </main>
    </div>
  );
};

export default FieldServiceNocPage;