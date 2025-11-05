import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'ai' | 'system';
}

// Define necessary types locally as they are not exported by the library
interface Part {
    text?: string;
    functionResponse?: {
      name: string;
      response: object;
    };
    functionCall?: {
        name: string;
        args: object;
    };
}
  
interface Content {
    role: 'user' | 'model' | 'tool';
    parts: Part[];
}

// Locally defined types to prevent import errors from the CDN module
enum Type {
    OBJECT = 'OBJECT',
    STRING = 'STRING',
}

interface Schema {
    type: Type;
    description?: string;
    properties?: { [key: string]: Schema };
    required?: string[];
}

interface FunctionDeclaration {
    name: string;
    parameters: Schema;
}


const AiChatPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Olá! Sou a assistente virtual da LIANET. Como posso ajudar com suas necessidades de TI e Redes hoje?", sender: 'ai' }
    ]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const historyRef = useRef<Content[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const scheduleMeetCallFunctionDeclaration: FunctionDeclaration = {
        name: 'scheduleMeetCall',
        parameters: {
            type: Type.OBJECT,
            description: 'Agenda uma chamada no Google Meet com um especialista da LIANET.',
            properties: {
                name: { type: Type.STRING, description: 'Nome completo do cliente.' },
                email: { type: Type.STRING, description: 'Endereço de e-mail do cliente para enviar o convite.' },
                topic: { type: Type.STRING, description: 'Um resumo breve do problema ou tópico da reunião.' },
                dateTime: { type: Type.STRING, description: 'Data e hora sugeridas pelo cliente para a chamada (formato ISO 8601 ou texto livre, ex: "Amanhã às 15h").' },
            },
            required: ['name', 'email', 'topic', 'dateTime'],
        },
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        const userMessageText = userInput;
        const userMessage: Message = { id: Date.now(), text: userMessageText, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setUserInput('');
        setIsLoading(true);

        const currentHistory: Content[] = [...historyRef.current, { role: 'user', parts: [{ text: userMessageText }] }];

        try {
            // Initialize the AI client just-in-time to avoid crash on load.
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const result = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: currentHistory,
                config: {
                    tools: [{ functionDeclarations: [scheduleMeetCallFunctionDeclaration] }],
                },
                systemInstruction: 'Você é uma assistente de IA amigável e profissional da LIANET Soluções, uma empresa de TI e Redes. Seu objetivo é entender o problema do usuário. Se o problema exigir um especialista, sua principal função é agendar uma chamada no Google Meet coletando o nome, e-mail, um breve resumo do problema e uma data/hora preferida. Use a função `scheduleMeetCall` para isso. Seja concisa e prestativa. Não invente informações. Se não souber algo, diga que irá verificar com um especialista.'
            });

            const response = result;

            if (response.functionCalls && response.functionCalls.length > 0) {
                 const fc = response.functionCalls[0];
                 if (fc.name === 'scheduleMeetCall') {
                    const { name, email, topic, dateTime } = fc.args as {name: string, email: string, topic: string, dateTime: string};
                    const confirmationText = `OK! Agendei uma chamada no Meet para ${name} sobre "${topic}". Um convite será enviado para ${email} para a data/hora sugerida: ${dateTime}. Nossa equipe confirmará o horário exato.`;
                    const systemMessage: Message = { id: Date.now() + 1, text: confirmationText, sender: 'system' };
                    setMessages(prev => [...prev, systemMessage]);

                    // Update history with the function call and a simulated response to maintain context
                    historyRef.current = [
                        ...currentHistory,
                        response.candidates[0].content,
                        {
                            role: 'tool',
                            parts: [{
                                functionResponse: {
                                    name: 'scheduleMeetCall',
                                    response: { success: true, message: 'Agendamento simulado com sucesso.' }
                                }
                            }]
                        }
                    ];
                }
            } else {
                 const aiText = response.text;
                 const aiMessage: Message = { id: Date.now() + 1, text: aiText, sender: 'ai' };
                 setMessages(prev => [...prev, aiMessage]);
                 // Add AI response to history
                 historyRef.current = [...currentHistory, response.candidates[0].content];
            }

        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            const errorMessage: Message = { id: Date.now() + 1, text: "Desculpe, estou com problemas para me conectar. Tente novamente mais tarde.", sender: 'system' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-16 h-16 bg-secondary rounded-full text-primary flex items-center justify-center shadow-[0_0_20px_theme(colors.secondary)] hover:shadow-[0_0_30px_theme(colors.secondary)] transition-all duration-300 transform hover:scale-110 z-50"
                aria-label="Abrir chat de assistência"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </button>

            <div className={`fixed bottom-24 right-6 w-[calc(100vw-3rem)] max-w-sm h-[60vh] bg-primary-card/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl flex flex-col transition-all duration-500 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                {/* Header */}
                <header className="p-4 border-b border-white/10 flex justify-between items-center">
                    <h3 className="text-white font-bold">Assistente LIANET</h3>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">&times;</button>
                </header>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-secondary text-primary' : msg.sender === 'ai' ? 'bg-primary text-gray-200' : 'bg-transparent text-center w-full text-secondary text-sm italic'}`}>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                         {isLoading && (
                             <div className="flex justify-start">
                                <div className="max-w-[80%] p-3 rounded-lg bg-primary text-gray-200">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-75"></div>
                                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-150"></div>
                                    </div>
                                </div>
                            </div>
                         )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Digite sua mensagem..."
                            className="flex-1 px-4 py-2 bg-primary/80 border border-gray-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                            disabled={isLoading}
                        />
                        <button type="submit" className="w-10 h-10 bg-secondary text-primary rounded-full flex items-center justify-center disabled:opacity-50" disabled={isLoading}>
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AiChatPopup;