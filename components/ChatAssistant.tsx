
import React, { useState, useRef, useEffect } from 'react';
import { Article, ChatMessage } from '../types';
import { chatWithGemini } from '../services/geminiService';

interface ChatAssistantProps {
  article: Article;
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ article }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    const systemPrompt = `You are an AI assistant helping a user understand the article: "${article.title}". 
    Article Content: ${article.content}. 
    Be professional, concise, and helpful. If the user asks something outside the scope of the article, try to relate it back or state that the article doesn't cover it.`;

    const response = await chatWithGemini(newMessages, systemPrompt);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        <span className="material-symbols-outlined">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[350px] sm:w-[400px] flex flex-col rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-primary px-6 py-4">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                Article Assistant
              </h4>
              <span className="text-[9px] text-blue-200 font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded">
                Enhancement
              </span>
            </div>
            <p className="text-blue-100 text-[10px] mt-1 italic opacity-80">Ask me anything about this piece (AI Preview)</p>
          </div>

          <div 
            ref={scrollRef}
            className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950/50"
          >
            {messages.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-400 text-sm">Ask questions like:</p>
                <div className="flex flex-wrap gap-2 justify-center mt-3">
                  {["Summarize this", "Key takeaways", "What's new?"].map(hint => (
                    <button 
                      key={hint}
                      onClick={() => setInputValue(hint)}
                      className="text-xs px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary"
                    >
                      {hint}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div 
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-2xl text-sm border border-gray-200 dark:border-gray-700 rounded-bl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex gap-2">
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary/30 dark:text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
