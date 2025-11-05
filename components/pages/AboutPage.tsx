import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-dark-text">
        <header className="bg-light-gray py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Paixão por Tecnologia, Foco na Solução<span className="text-secondary">.</span></h1>
        </header>

      <div className="py-16 sm:py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="md:col-span-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://picsum.photos/seed/founder/800/1000" 
                  alt="Fundador da LIANET Soluções" 
                  className="w-full h-full object-cover rounded-lg relative shadow-lg"
                />
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="text-gray-600 leading-relaxed text-justify space-y-6 text-lg">
                <p>
                  A LIANET Soluções nasceu de uma dupla necessidade: gerar uma renda extra e aplicar anos de experiência prática em um serviço que realmente fizesse a diferença. O projeto começou adaptando uma IA, a 'LIA', para o universo de TI, e evoluiu para uma consultoria completa.
                </p>
                <p>
                  Meu nome é <span className="font-bold text-primary">[Seu Nome]</span>, e minha jornada passou por projetos complexos, como a troca de equipamentos de TI em agências bancárias para a Titanium, e pela configuração de redes de alta performance.
                </p>
                <p>
                  Hoje, a LIANET combina essa bagagem técnica com a agilidade de um serviço local, oferecendo desde o reparo do seu notebook até a reestruturação da rede da sua empresa. Nossa missão é simples: <span className="font-semibold text-primary">resolver problemas de tecnologia de forma eficiente e honesta.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;