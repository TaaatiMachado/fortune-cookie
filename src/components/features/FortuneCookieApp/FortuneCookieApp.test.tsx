import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import FortuneCookieApp from './FortuneCookieApp';

// Mock child components
jest.mock('@/components/ui/InitialDisplay/InitialDisplay', () => {
  return function MockInitialDisplay({ onOpenCookie }: { onOpenCookie: () => void }) {
    return (
      <div data-testid="initial-display">
        <button data-testid="open-cookie-btn" onClick={onOpenCookie}>
          Open Cookie
        </button>
      </div>
    );
  };
});

jest.mock('@/components/ui/LoadingDisplay/LoadingDisplay', () => {
  return function MockLoadingDisplay() {
    return <div data-testid="loading-display">Loading...</div>;
  };
});

jest.mock('@/components/ui/FortuneResult/FortuneResult', () => {
  return function MockFortuneResult({ onNewCookie }: { onNewCookie: () => void }) {
    return (
      <div data-testid="fortune-result">
        <button data-testid="new-cookie-btn" onClick={onNewCookie}>
          New Cookie
        </button>
      </div>
    );
  };
});

// Mock generateLuckyNumbers
jest.mock('@/lib/luckyNumbers', () => ({
  generateLuckyNumbers: () => [1, 7, 13, 21, 34, 55],
}));

describe('FortuneCookieApp', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders initial display by default', () => {
    render(<FortuneCookieApp />);
    
    expect(screen.getByTestId('initial-display')).toBeInTheDocument();
  });

  it('renders main heading', () => {
    render(<FortuneCookieApp />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Fortune Cookie App');
  });

  it('shows loading when cookie is opened', () => {
    render(<FortuneCookieApp />);
    
    const openButton = screen.getByTestId('open-cookie-btn');
    fireEvent.click(openButton);
    
    expect(screen.getByTestId('loading-display')).toBeInTheDocument();
  });

  it('shows result after loading completes', async () => {
    render(<FortuneCookieApp />);
    
    const openButton = screen.getByTestId('open-cookie-btn');
    
    act(() => {
      fireEvent.click(openButton);
      jest.advanceTimersByTime(2000);
    });
    
    expect(screen.getByTestId('fortune-result')).toBeInTheDocument();
  });

  it('resets to initial state when new cookie is clicked', async () => {
    render(<FortuneCookieApp />);
    
    // Open cookie and wait
    const openButton = screen.getByTestId('open-cookie-btn');
    act(() => {
      fireEvent.click(openButton);
      jest.advanceTimersByTime(2000);
    });
    
    // Click new cookie
    const newCookieButton = screen.getByTestId('new-cookie-btn');
    fireEvent.click(newCookieButton);
    
    expect(screen.getByTestId('initial-display')).toBeInTheDocument();
  });
});