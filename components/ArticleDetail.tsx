
import React, { useState, useEffect } from 'react';
import { Article, ArticleStatus } from '../types';
import { summarizeArticle } from '../services/geminiService';
import ChatAssistant from './ChatAssistant';

interface ArticleDetailProps {
  article: Article;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  const [summary, setSummary] = useState<string | null>(null);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const isUpdated = article.status === ArticleStatus.UPDATED;

  const handleSummarize = async () => {
    setIsSummarizing(true);
    const result = await summarizeArticle(article.title, article.content);
    setSummary(result);
    setIsSummarizing(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <article>
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center gap-3">
             <div className={`flex h-7 items-center justify-center gap-x-2 rounded-lg px-3 ${
                isUpdated ? 'bg-primary/15 text-primary' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
             }`}>
                <span className="material-symbols-outlined text-base">
                  {isUpdated ? 'update' : 'history'}
                </span>
                <p className="text-xs font-bold uppercase tracking-widest">{article.status}</p>
              </div>
              <p className="text-sm font-medium text-gray-400">{article.publishedDate} • {article.source}</p>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight text-gray-900 dark:text-white font-display">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-4">
             <button 
                onClick={handleSummarize}
                disabled={isSummarizing || summary !== null}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold hover:bg-primary/20 transition-all disabled:opacity-50"
             >
               <span className="material-symbols-outlined text-sm">magic_button</span>
               {isSummarizing ? 'Summarizing...' : summary ? 'Summary Generated' : 'AI Summary'}
             </button>
             <span className="text-[10px] text-gray-400 font-medium italic select-none">
               *AI features are optional enhancements
             </span>
          </div>
        </div>

        {summary && (
           <div className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/10 border-l-4 border-primary rounded-r-xl">
             <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
               <span className="material-symbols-outlined text-xs">auto_awesome</span>
               AI Summary (Enhancement)
             </h4>
             <p className="text-gray-700 dark:text-gray-300 text-lg italic leading-relaxed">
               {summary}
             </p>
           </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-300 text-xl leading-relaxed space-y-8 font-serif">
          {article.content.split('\n\n').map((para, i) => (
             <p key={i}>{para}</p>
          ))}
        </div>

        {article.references && article.references.length > 0 && (
          <section className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800">
            <div className="bg-gray-50 dark:bg-gray-900/40 p-6 sm:p-10 rounded-2xl border border-gray-100 dark:border-gray-800">
              <h2 className="text-gray-900 dark:text-white text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">link</span>
                References
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-lg">
                {article.references.map(ref => (
                  <li key={ref.id}>
                    <a 
                      href={ref.url} 
                      className="text-primary hover:underline font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}
      </article>

      {/* Floating Chat Assistant - Optional Enhancement */}
      <ChatAssistant article={article} />
    </div>
  );
};

export default ArticleDetail;
