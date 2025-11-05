import React, { useState } from 'react';

const ServiceItem: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-left py-5 px-2"
        >
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <svg className={`w-6 h-6 transform transition-transform duration-300 text-secondary ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="pb-5 px-2 pt-2 text-gray-600 prose">
            {children}
          </div>
        </div>
      </div>
    );
};


const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white text-dark-text">
        <header className="bg-light-gray py-16">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">Soluções em TI e Redes para Cada Necessidade<span className="text-secondary">.</span></h1>
            </div>
        </header>

        <main className="max-w-screen-xl mx-auto px-4 py-16 sm:py-24">
            {/* Business Section */}
            <section className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary inline-block">Para Sua Empresa e Condomínio</h2>
                    <p className="mt-2 text-gray-600">Impulsione seu Negócio com Tecnologia Confiável.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <ServiceItem title="Projeto e Instalação de Redes Estruturadas">
                        <p>Análise completa do ambiente, passagem de cabeamento metálico (Cat6/Cat7) e fibra óptica, além da montagem e organização de racks para uma infraestrutura limpa e eficiente.</p>
                    </ServiceItem>
                    <ServiceItem title="Wi-Fi Corporativo de Alta Performance (UniFi)">
                        <p>Implementação de redes UniFi para escritórios, lojas e condomínios, garantindo cobertura total, segurança robusta e funcionalidades avançadas como portal de visitantes.</p>
                    </ServiceItem>
                    <ServiceItem title="Manutenção e Suporte de TI para Empresas">
                        <p>Contratos flexíveis de suporte, mensais ou por hora, para manter estações de trabalho, servidores e toda a sua infraestrutura de TI funcionando perfeitamente e sem interrupções.</p>
                    </ServiceItem>
                    <ServiceItem title="Configuração de Servidores (Windows/Linux)">
                        <p>Instalação, configuração e manutenção de servidores locais para armazenamento de arquivos, sistemas de gestão (ERPs), aplicações e outros serviços essenciais para sua operação.</p>
                    </ServiceItem>
                </div>
            </section>

            {/* Residential Section */}
            <section>
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary inline-block">Para Sua Casa</h2>
                    <p className="mt-2 text-gray-600">Tecnologia e Performance para o seu Dia a Dia.</p>
                </div>
                 <div className="max-w-4xl mx-auto">
                    <ServiceItem title="Montagem de PC Gamer e Workstation">
                        <p>Consultoria especializada para seleção de peças e montagem profissional com foco total em performance, refrigeração e estética, criando a máquina ideal para seus jogos ou trabalho.</p>
                    </ServiceItem>
                    <ServiceItem title="Manutenção de Computadores e Notebooks">
                        <p>Serviços completos de formatação com backup seguro, remoção de vírus e malware, limpeza interna para prevenção de superaquecimento e troca de peças como SSD, memória RAM e telas.</p>
                    </ServiceItem>
                    <ServiceItem title="Rede Wi-Fi Residencial Premium">
                        <p>Elimine pontos cegos de Wi-Fi em sua casa com soluções modernas de roteadores e repetidores em malha (Mesh), garantindo sinal forte e estável em todos os cômodos.</p>
                    </ServiceItem>
                    <ServiceItem title="Suporte Técnico Remoto">
                        <p>Resolução rápida e segura de problemas de software, configuração de impressoras, e-mails e outros dispositivos à distância, economizando seu tempo e deslocamento.</p>
                    </ServiceItem>
                </div>
            </section>
        </main>
    </div>
  );
};

export default ServicesPage;