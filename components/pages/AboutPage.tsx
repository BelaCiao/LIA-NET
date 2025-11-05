import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-dark-text">
        <header className="bg-light-gray py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Paixão por Tecnologia, Foco na Solução<span className="text-secondary">.</span></h1>
        </header>

      <div className="py-16 sm:py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://picsum.photos/seed/founder-action/800/1000" 
                  alt="Fundador da LIANET Soluções em um ambiente de trabalho tecnológico" 
                  className="w-full h-full object-cover rounded-lg relative shadow-lg"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="text-gray-600 leading-relaxed space-y-6 text-lg">
                <p className="font-medium text-primary">
                  Por anos, eu estive nas trincheiras do mundo corporativo. Minha rotina era gerenciar e solucionar problemas em ambientes de alta criticidade: a infraestrutura de TI de agências bancárias, redes de grandes varejistas, sistemas onde um minuto de inatividade significava um prejuízo enorme.
                </p>
                <p>
                  Nesses cenários, aprendi o valor da robustez, da segurança e do planejamento. Mas também vi de perto a frustração de muitos: a lentidão, a burocracia e a falta de um atendimento que realmente entendesse a necessidade específica de cada cliente.
                </p>
                <p>
                  A LIANET Soluções nasceu exatamente dessa percepção. Eu decidi pegar toda essa bagagem técnica, toda a disciplina aprendida em ambientes que não perdoam falhas, e trazer para um novo modelo de serviço: um que combina a expertise de nível corporativo com a agilidade e o atendimento pessoal de um parceiro local.
                </p>

                <blockquote className="border-l-4 border-secondary pl-6 py-4 my-8 bg-light-gray rounded-r-lg">
                    <p className="text-xl italic font-semibold text-primary">
                        "Para mim, tecnologia não é sobre cabos e códigos. É sobre capacitar pessoas e negócios. Meu objetivo não é apenas consertar o que quebrou, mas construir soluções inteligentes que evitem que os problemas aconteçam."
                    </p>
                </blockquote>
                
                <p>
                  Seja reestruturando a rede da sua empresa para máxima performance ou montando o computador que vai rodar seus projetos mais importantes, minha missão é a mesma: oferecer soluções honestas, eficientes e que, simplesmente, funcionam. Quero ser o parceiro de tecnologia em quem você pode confiar.
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