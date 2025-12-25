
import React from 'react';
import { Article, ArticleStatus } from '../types';

interface ArticleCardProps {
  article: Article;
  onView: (id: string) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onView }) => {
  const isUpdated = article.status === ArticleStatus.UPDATED;

  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50 group">
      <div className="flex flex-1 flex-col">
        <div className="mb-3 flex items-center justify-between">
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
            isUpdated 
              ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' 
              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
          }`}>
            {article.status}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-bold leading-snug text-gray-900 dark:text-white line-clamp-2 font-display group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="mb-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Published: {article.publishedDate} • {article.source}
        </p>
      </div>
      <button 
        onClick={() => onView(article.id)}
        className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 focus:ring-2 focus:ring-primary/20"
      >
        View Article
      </button>
    </div>
  );
};

export default ArticleCard;
