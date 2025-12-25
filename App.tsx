
import React, { useState } from 'react';
import Header from './components/Header';
import ArticleCard from './components/ArticleCard';
import ArticleDetail from './components/ArticleDetail';
import { MOCK_ARTICLES } from './constants';
import { Article } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'detail'>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleViewArticle = (id: string) => {
    const article = MOCK_ARTICLES.find(a => a.id === id);
    if (article) {
      setSelectedArticle(article);
      setView('detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGoHome = () => {
    setView('home');
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col font-sans">
      <Header onGoHome={handleGoHome} currentPage={view} />
      
      <main className="flex w-full flex-1 flex-col items-center py-10 px-6">
        {view === 'home' ? (
          <div className="w-full max-w-7xl">
            <div className="mb-12 flex flex-col items-start">
              <h2 className="text-5xl font-black tracking-tight text-gray-900 dark:text-white font-display">
                All Articles
              </h2>
              <p className="mt-2 text-xl text-gray-500 dark:text-gray-400">
                A preview of original content and their refined AI-updated counterparts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {MOCK_ARTICLES.map(article => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  onView={handleViewArticle} 
                />
              ))}
            </div>
            
            {/* Footer space */}
            <div className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-8 flex justify-between items-center text-sm text-gray-400">
               <p>© 2024 BeyondChats Inc.</p>
               <div className="flex gap-4">
                  <a href="#" className="hover:text-primary">Privacy</a>
                  <a href="#" className="hover:text-primary">Terms</a>
               </div>
            </div>
          </div>
        ) : (
          selectedArticle && (
            <div className="w-full">
               <button 
                  onClick={handleGoHome}
                  className="mb-8 flex items-center gap-2 text-primary font-bold hover:underline"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Back to Articles
                </button>
               <ArticleDetail article={selectedArticle} />
            </div>
          )
        )}
      </main>
    </div>
  );
};

export default App;
