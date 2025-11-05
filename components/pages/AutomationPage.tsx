import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate inline-block">{children}</h2>
    </div>
);

const AutomationFeature: React.FC<{ title: string; trigger: string; action: string; impact: string; }> = ({ title, trigger, action, impact }) => (
    <div className="bg-light-navy p-6 rounded-lg border border-lightest-navy transform transition-all hover:-translate-y-1 hover:border-primary">
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="mb-2"><strong className="text-light-slate">Gatilho:</strong> {trigger}</p>
        <p className="mb-2"><strong className="text-light-slate">Ação:</strong> {action}</p>
        <p className="mt-4 pt-4 border-t border-lightest-navy"><strong className="text-light-slate">Impacto:</strong> {impact}</p>
    </div>
);

const TutorialOption: React.FC<{ title: string; description: string; tutorial: string; cost?: string; advantage?: string, disadvantage?: string }> = ({ title, description, tutorial, cost, advantage, disadvantage }) => (
     <div className="bg-light-navy p-6 rounded-lg border border-lightest-navy">
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-slate mb-4">{description}</p>
        <p className="mb-2"><strong className="text-light-slate">Tutorial Recomendado:</strong> {tutorial}</p>
        {cost && <p className="mb-2"><strong className="text-light-slate">Custo:</strong> {cost}</p>}
        {advantage && <p className="mb-2"><strong className="text-light-slate">Vantagem:</strong> {advantage}</p>}
        {disadvantage && <p className="mb-2"><strong className="text-light-slate">Desvantagem:</strong> {disadvantage}</p>}
    </div>
);


const AutomationPage: React.FC = () => {
  return (
    <div className="bg-navy text-slate">
        <header className="py-16 text-center border-b border-lightest-navy">
          <h1 className="text-4xl md:text-5xl font-bold text-lightest-slate">Automação de Processos com n8n<span className="text-primary">.</span></h1>
          <p className="mt-4 text-lg text-slate max-w-3xl mx-auto">Otimize seu tempo, reduza erros e impressione seus clientes com automações inteligentes e personalizadas.</p>
        </header>

        <main className="py-16 sm:py-24">
            <section id="fluxo-cliente" className="max-w-screen-xl mx-auto px-4 mb-20">
                <SectionTitle>Fluxo Essencial: "Novo Cliente via Site"</SectionTitle>
                <div className="max-w-4xl mx-auto bg-light-navy p-8 rounded-lg border border-lightest-navy">
                    <p className="text-lg text-center mb-8">Este é o fluxo mais importante para começar, garantindo que nenhuma oportunidade de negócio seja perdida. O objetivo é capturar os dados do formulário de contato do seu site e organizar tudo automaticamente.</p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-light-slate mb-3">Ferramentas Envolvidas</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong className="text-primary">Gatilho:</strong> Webhook</li>
                                <li><strong className="text-primary">Ações:</strong> Trello, Telegram e Google Sheets</li>
                            </ul>
                        </div>
                        <div>
                             <h3 className="text-xl font-bold text-light-slate mb-3">Estrutura Visual do Fluxo</h3>
                             <div className="bg-navy p-3 rounded-md text-center">
                                <code className="text-light-slate">
                                (Webhook) → (Trello) → (Google Sheets) → (Telegram)
                                </code>
                             </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-lightest-slate mb-6 text-center">Passo a Passo Detalhado do Fluxo</h3>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-primary text-lg">Nó 1: Webhook (O Ouvido da Automação)</h4>
                            <p>Gera uma URL única que seu formulário do site irá "chamar" sempre que um cliente clicar em "Enviar", encaminhando os dados para a automação.</p>
                        </div>
                         <div>
                            <h4 className="font-bold text-primary text-lg">Nó 2: Trello - Criar Card (O Gestor de Tarefas)</h4>
                            <p>Cria uma nova tarefa no seu quadro Trello (ex: "Novos Leads") com todas as informações do cliente, para que você nunca se esqueça de um contato.</p>
                        </div>
                         <div>
                            <h4 className="font-bold text-primary text-lg">Nó 3: Google Sheets - Adicionar Linha (O Banco de Dados)</h4>
                            <p>Salva as informações em uma planilha, criando um histórico valioso para futuras consultas ou campanhas de marketing.</p>
                        </div>
                         <div>
                            <h4 className="font-bold text-primary text-lg">Nó 4: Telegram - Enviar Notificação (O Alerta Imediato)</h4>
                            <p>Envia uma mensagem instantânea para você, permitindo uma resposta quase imediata ao cliente e passando uma imagem de extrema agilidade e profissionalismo.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="tutoriais" className="max-w-screen-xl mx-auto px-4 mb-20">
                <SectionTitle>Tutoriais para Instalação do n8n (Self-Hosting)</SectionTitle>
                 <div className="max-w-5xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <TutorialOption 
                        title="Opção 1: Instalação com 1 Clique"
                        description="Plataformas como DigitalOcean ou Hetzner oferecem 'Marketplace Apps' para instalar o n8n automaticamente."
                        tutorial='Pesquise no YouTube por "Install n8n on DigitalOcean Marketplace".'
                        cost="A partir de $4-6 dólares por mês."
                    />
                     <TutorialOption 
                        title="Opção 2: Instalação com Docker"
                        description="Forma oficial e mais recomendada. Docker 'empacota' a aplicação, facilitando a instalação e atualização."
                        tutorial='Consulte a documentação oficial ("n8n docker setup") ou vídeos com o título "Install n8n with Docker on a VPS".'
                        advantage="Controle total, pode ser instalado em qualquer nuvem e a atualização é simples."
                    />
                     <TutorialOption 
                        title="Opção 3: Instalação em um Raspberry Pi"
                        description="Ideal para quem já tem o hardware em casa e quer rodar automações internas com custo quase zero."
                        tutorial='Pesquise por "Install n8n on Raspberry Pi using Docker".'
                        disadvantage="Depende da sua conexão de internet doméstica e pode não ser ideal para webhooks que precisam de 100% de disponibilidade."
                    />
                </div>
            </section>

            <section id="automacoes-impacto" className="max-w-screen-xl mx-auto px-4">
                <SectionTitle>5 Automações de Alto Impacto para o Primeiro Mês</SectionTitle>
                <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
                    <AutomationFeature 
                        title="Gestor de Chamados de Field Service"
                        trigger='Novo e-mail em uma pasta/label específica do seu Gmail (ex: "Field Service").'
                        action="Extrai o conteúdo do e-mail, cria um evento detalhado no Google Agenda e um card no Trello com um checklist padrão."
                        impact="Organiza sua agenda de campo automaticamente e garante que nenhum passo seja esquecido."
                    />
                    <AutomationFeature 
                        title="Monitoramento Básico de Sites/Servidores (Seu NOC Pessoal)"
                        trigger="Agendado para rodar a cada 15 minutos."
                        action="Faz uma requisição HTTP para os sites dos seus clientes. Se algum falhar, envia um alerta para seu Telegram."
                        impact="Proatividade. Você descobre o problema antes do cliente, o que gera um valor percebido imenso."
                    />
                    <AutomationFeature 
                        title="Lembrete de Acompanhamento (Follow-up)"
                        trigger='Quando um card no Trello é movido para a lista "Orçamento Enviado".'
                        action='Espera 3 dias. Se o card ainda estiver lá, envia uma notificação para você fazer o follow-up.'
                        impact="Aumenta sua taxa de conversão de orçamentos em vendas, pois muitos negócios são perdidos por falta de acompanhamento."
                    />
                    <AutomationFeature 
                        title="Boas-Vindas ao Novo Cliente de Contrato Mensal"
                        trigger='Manual, ou quando você adiciona uma tag "Novo Contrato" a um cliente na sua planilha.'
                        action="Envia um e-mail de boas-vindas padronizado com informações úteis (links, horários, guias)."
                        impact="Padroniza e profissionaliza o início do relacionamento com clientes recorrentes."
                    />
                     <AutomationFeature 
                        title="Coletor de Conteúdo para Redes Sociais"
                        trigger="Agendado para rodar uma vez por dia."
                        action="Monitora sites de notícias de tecnologia (via RSS) e salva artigos interessantes em uma planilha ou Notion."
                        impact="Economiza tempo de pesquisa e te ajuda a manter suas redes sociais ativas com conteúdo relevante."
                    />
                </div>
            </section>
        </main>
    </div>
  );
};

export default AutomationPage;
