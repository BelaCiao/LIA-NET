import React from 'react';
import { Page } from '../../types';
import Button from '../ui/Button';

interface DifferentialsPageProps {
    navigateTo: (page: Page) => void;
}

const Feature: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="relative pl-12">
        <div className="absolute left-0 top-1 text-primary">{icon}</div>
        <h3 className="font-bold text-light-slate text-xl mb-2">{title}</h3>
        <p className="text-slate">{text}</p>
    </div>
);


const DifferentialsPage: React.FC<DifferentialsPageProps> = ({ navigateTo }) => {
  return (
    <div className="bg-navy text-slate">
      <header className="py-16 text-center border-b border-lightest-navy">
        <h1 className="text-4xl md:text-5xl font-bold text-lightest-slate">Por que escolher a LIANET<span className="text-primary">?</span></h1>
        <p className="mt-4 text-lg text-slate max-w-3xl mx-auto">Nossa abordagem combina expertise técnica com um atendimento focado nas suas necessidades reais.</p>
      </header>

      <main>
        <section className="py-16 sm:py-24">
          <div className="max-w-screen-md mx-auto px-4">
            <div className="space-y-12">
              <Feature 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                title="Experiência em Ambientes Críticos"
                text="Atuamos em cenários de alta complexidade, como agências bancárias e grandes varejistas, garantindo a máxima estabilidade e segurança para operações que não podem parar."
              />
              <Feature 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8z" /></svg>}
                title="Atendimento Flexível (Remoto e Presencial)"
                text="Seja para resolver um problema à distância ou para uma instalação complexa no local, nossa equipe está pronta para atender com a agilidade que você precisa, onde você estiver."
              />
              <Feature 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>}
                title="Especialistas em UniFi e Fibra Óptica"
                text="Somos experts em planejar e implementar redes de alta performance, desde Wi-Fi corporativo com tecnologia UniFi até infraestrutura de fibra óptica para máxima velocidade e confiabilidade."
              />
            </div>
          </div>
        </section>

        <section className="bg-light-navy">
             <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold text-lightest-slate mb-4">Precisa de um Parceiro Técnico Confiável?</h2>
                <p className="max-w-2xl mx-auto mb-8 text-slate">Vamos fortalecer sua operação com um serviço de campo e suporte remoto eficiente.</p>
                <Button variant="primary" onClick={() => navigateTo(Page.Contact)}>Seja Nosso Parceiro</Button>
            </div>
        </section>
      </main>
    </div>
  );
};

export default DifferentialsPage;