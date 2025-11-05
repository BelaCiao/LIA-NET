import React from 'react';
import { Page } from '../../types';
import Button from '../ui/Button';

interface AboutPageProps {
  navigateTo: (page: Page) => void;
}

const CommitmentItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <li className="flex items-start">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mr-4 mt-1">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-primary text-xl">{title}</h4>
            <p className="text-gray-600">{children}</p>
        </div>
    </li>
);

const AboutPage: React.FC<AboutPageProps> = ({ navigateTo }) => {
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
              <h2 className="text-3xl font-bold text-primary mb-4">Seu Especialista em Tecnologia em Rio Grande</h2>
              <div className="text-gray-600 leading-relaxed space-y-6 text-lg">
                <p>Olá, eu sou a pessoa por trás da LIANET Soluções. Se você já se sentiu frustrado com a tecnologia, saiba que eu entendo perfeitamente. Minha carreira foi construída nos bastidores de ambientes onde uma falha de sistema não é um inconveniente, é uma crise.</p>
                
                <h3 className="text-2xl font-bold text-primary !mt-10 !mb-4 border-t pt-6 border-gray-200">A Experiência que Faz a Diferença</h3>
                <p>Por anos, atuei em campo para grandes empresas, incluindo a troca e validação de equipamentos de TI em agências bancárias. Nesses lugares, aprendi que não existe "jeitinho". Uma rede precisa ser estável, um servidor precisa ser confiável e a segurança é inegociável. Vi em primeira mão como uma infraestrutura bem planejada é a espinha dorsal de qualquer operação de sucesso.</p>
                <p>Ao mesmo tempo, vi a frustração de amigos e pequenas empresas locais lidando com os mesmos problemas – internet lenta, computadores travando, soluções improvisadas – mas sem acesso ao mesmo nível de conhecimento técnico.</p>

                <blockquote className="border-l-4 border-secondary pl-6 py-4 my-8 bg-light-gray rounded-r-lg">
                    <p className="text-xl italic font-semibold text-primary">
                        "Eu percebi que poderia usar minha experiência em ambientes críticos para resolver problemas do mundo real, de forma direta e acessível."
                    </p>
                </blockquote>
                
                <h3 className="text-2xl font-bold text-primary !mt-10 !mb-4 border-t pt-6 border-gray-200">O Nascimento da LIANET Soluções</h3>
                <p>A LIANET nasceu dessa percepção. O nome vem da união de "LIA", um projeto de IA que criei, com "NET", de redes. Representa a minha filosofia: unir inteligência e planejamento (LIA) com conectividade e ação prática (NET).</p>
                <p>Decidi criar uma empresa que oferece o profissionalismo e a expertise de um serviço corporativo, mas com a agilidade, a flexibilidade e o atendimento pessoal que só um especialista local pode proporcionar.</p>

                <h3 className="text-2xl font-bold text-primary !mt-10 !mb-4 border-t pt-6 border-gray-200">Meu Compromisso com Você</h3>
                <ul className="space-y-6 text-base">
                    <CommitmentItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>} title="Sem Termos Complicados">Vou explicar o que precisa ser feito de uma forma que você entenda.</CommitmentItem>
                    <CommitmentItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>} title="Qualidade Acima de Tudo">Uso as melhores práticas e ferramentas do mercado para garantir um serviço duradouro.</CommitmentItem>
                    <CommitmentItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>} title="Soluções, Não Vendas">Nunca vou te empurrar um equipamento ou serviço que você não precisa.</CommitmentItem>
                </ul>

                <div className="!mt-12 pt-8 border-t border-gray-200">
                    <p>A tecnologia deveria ser uma aliada, não uma dor de cabeça. Meu trabalho é fazer essa ponte para você.</p>
                    <p className="font-bold text-xl text-primary mt-2">Vamos resolver isso juntos?</p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <a href="https://wa.me/5553999335369" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                           <Button variant="primary" className="w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.004l-1.03 3.747l3.826-1.011z"/></svg>
                               <span>Fale Comigo no WhatsApp</span>
                            </Button>
                        </a>
                        <Button variant="outline" onClick={() => navigateTo(Page.Services)} className="w-full sm:w-auto">
                            Conheça Meus Serviços
                        </Button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;