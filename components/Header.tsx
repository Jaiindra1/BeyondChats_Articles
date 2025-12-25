
import React from 'react';

interface HeaderProps {
  onGoHome: () => void;
  currentPage: 'home' | 'detail';
}

const Header: React.FC<HeaderProps> = ({ onGoHome, currentPage }) => {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-center border-b border-gray-200/80 bg-background-light/80 dark:border-gray-800/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="flex w-full max-w-7xl items-center justify-between px-6">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={onGoHome}
        >
          <div className="size-8 text-primary transition-transform group-hover:scale-110">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">BeyondChats Articles</h1>
        </div>
        
        <nav className="flex items-center gap-6">
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Original & AI-Updated Content Preview
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
