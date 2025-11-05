import React from 'react';
import { Page } from '../../types';
import Button from '../ui/Button';

interface AboutPageProps {
  navigateTo: (page: Page) => void;
}

const CompetencyItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="bg-secondary/10 text-secondary font-semibold py-2 px-4 rounded-md">
        {children}
    </li>
);

const AboutPage: React.FC<AboutPageProps> = ({ navigateTo }) => {
  return (
    <div className="bg-primary text-gray-300">
        <header className="bg-primary py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">O especialista por trás da LIANET<span className="text-secondary">.</span></h1>
        </header>

        {/* Introduction */}
        <section className="py-16 sm:py-20">
            <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-2">
                    <div className="bg-primary-card aspect-square rounded-lg flex items-center justify-center border border-white/10">
                        <span className="text-gray-400">Foto Profissional</span>
                    </div>
                </div>
                <div className="md:col-span-3 text-lg text-gray-300 leading-relaxed space-y-4">
                   <h2 className="text-3xl font-bold text-white mb-4">Nossa História</h2>
                   <p>A LIANET Soluções nasceu de anos de experiência prática no coração da tecnologia. Minha jornada começou em campo, executando projetos complexos de field service para gigantes como a Avato/Brasiltecpar, onde aprendi na prática a importância da disciplina, da agilidade e da execução perfeita.</p>
                   <p>Hoje, como empreendedor, trago todo esse conhecimento para a Região Sul. Meu objetivo é simples: oferecer um serviço de TI e Redes de altíssimo nível, que antes era acessível apenas para grandes corporações, para os provedores, empresas e moradores da nossa região.</p>
                   <p>A LIANET não é apenas uma empresa, é o meu compromisso pessoal com a solução do seu problema.</p>
                </div>
            </div>
        </section>

        {/* Competencies Section */}
         <section className="bg-primary-card py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 text-center">
                 <h3 className="text-3xl font-bold text-white mb-8">Certificações e Competências</h3>
                 <ul className="flex flex-wrap justify-center gap-4">
                    <CompetencyItem>MikroTik</CompetencyItem>
                    <CompetencyItem>Ubiquiti UniFi</CompetencyItem>
                    <CompetencyItem>Linux</CompetencyItem>
                    <CompetencyItem>Windows Server</CompetencyItem>
                    <CompetencyItem>Hardware de Varejo</CompetencyItem>
                    <CompetencyItem>Fibra Óptica</CompetencyItem>
                    <CompetencyItem>Redes Estruturadas</CompetencyItem>
                 </ul>
            </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-white">
            <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-2">Vamos resolver isso juntos?</h2>
                <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                    A tecnologia deveria ser uma aliada, não uma dor de cabeça. Meu trabalho é fazer essa ponte para você.
                </p>
                <Button variant="primary" onClick={() => navigateTo(Page.Contact)}>
                    Fale Comigo
                </Button>
            </div>
        </section>
    </div>
  );
};

export default AboutPage;