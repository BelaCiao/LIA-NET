import React from 'react';
import Button from '../ui/Button';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; href?: string }> = ({ icon, title, children, href }) => (
    <div className="flex items-start space-x-4">
        <div className="text-secondary mt-1">{icon}</div>
        <div>
            <h3 className="font-bold text-primary">{title}</h3>
            {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary transition-colors duration-300">
                    {children}
                </a>
            ) : (
                <p className="text-gray-600">{children}</p>
            )}
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Obrigado pela sua mensagem! Entraremos em contato em breve.");
        e.currentTarget.reset();
    };

    return (
        <div className="bg-white text-dark-text">
            <header className="bg-light-gray py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">Vamos Conversar<span className="text-secondary">?</span></h1>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Preencha o formulário abaixo ou entre em contato direto pelo WhatsApp. Estamos prontos para te atender.</p>
            </header>

            <div className="py-16 sm:py-24">
                 <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                         {/* Contact Info */}
                        <div className="space-y-8 pt-4">
                            <ContactInfoItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                                title="WhatsApp"
                                href="https://wa.me/5553999335369"
                            >
                                +55 (53) 99933-5369
                            </ContactInfoItem>
                            <ContactInfoItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                                title="E-mail"
                                href="mailto:contato@lianet.com"
                            >
                                contato@lianet.com
                            </ContactInfoItem>
                            <ContactInfoItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                title="Horário de Atendimento"
                            >
                                Segunda a Sexta, das 9h às 18h.
                            </ContactInfoItem>
                            <ContactInfoItem 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                                title="Área de Cobertura"
                            >
                                Atendimento presencial em Rio Grande/RS e região. Suporte remoto para todo o Brasil.
                            </ContactInfoItem>
                        </div>
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                                    <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"/>
                                </div>
                                <div>
                                    <label htmlFor="contact_info" className="block text-sm font-medium text-gray-700 mb-1">E-mail ou Telefone</label>
                                    <input type="text" id="contact_info" name="contact_info" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"/>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                                    <select id="subject" name="subject" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary bg-white">
                                        <option>Orçamento Empresa</option>
                                        <option>Suporte Residencial</option>
                                        <option>Parceria Field Service</option>
                                        <option>Outros</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                                    <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"></textarea>
                                </div>
                                <div>
                                    <Button type="submit" variant="primary" className="w-full">Enviar Mensagem</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;