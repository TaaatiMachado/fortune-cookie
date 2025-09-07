'use client';

import { useState } from 'react';
import LoadingDisplay from '@/components/ui/LoadingDisplay/LoadingDisplay';
import InitialDisplay from '@/components/ui/InitialDisplay/InitialDisplay';
import FortuneResult from '@/components/ui/FortuneResult/FortuneResult';
import { fortunes } from '@/lib/fortunes';
import { generateLuckyNumbers } from '@/lib/luckyNumbers';
import type { Fortune } from '@/types';

export default function FortuneCookieApp() {
  const [currentFortune, setCurrentFortune] = useState<Fortune | null>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [luckyNumbers, setLuckyNumbers] = useState<number[]>([]);


  const handleOpenCookie = () => {
    setIsLoading(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      setCurrentFortune(fortunes[randomIndex]);
      setLuckyNumbers(generateLuckyNumbers());
      setIsOpened(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleNewCookie = () => {
    setCurrentFortune(null);
    setLuckyNumbers([]);
    setIsOpened(false);
    setIsLoading(false);
  };

  const renderCurrentView = () => {
    if (isLoading) {
      return <LoadingDisplay />;
    }

    if (!currentFortune) {
      return <InitialDisplay onOpenCookie={handleOpenCookie} />;
    }

    return (
      <FortuneResult
        fortune={currentFortune}
        luckyNumbers={luckyNumbers}
        onNewCookie={handleNewCookie}
        onOpenCookie={handleOpenCookie}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sr-only">
        <h1>Fortune Cookie App</h1>
        <p>Discover your fortune and lucky numbers</p>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8" role="main">
        <div className="max-w-sm w-full text-center space-y-8">
          {renderCurrentView()}
        </div>
      </main>
    </div>
  );
}
