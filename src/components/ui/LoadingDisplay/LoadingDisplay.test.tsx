import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingDisplay from './LoadingDisplay';

// Mock OpenedCookieIcon
jest.mock('../OpenedCookieIcon/OpenedCookieIcon', () => {
  return function MockOpenedCookieIcon() {
    return <div data-testid="opened-cookie-icon">Opened Cookie</div>;
  };
});

describe('LoadingDisplay', () => {
  it('renders loading section', () => {
    render(<LoadingDisplay />);
    
    const section = screen.getByRole('status');
    expect(section).toBeInTheDocument();
  });

  it('renders loading text', () => {
    render(<LoadingDisplay />);
    
    const text = screen.getByText('Cracking open your fortune...');
    expect(text).toBeInTheDocument();
  });

  it('renders opened cookie icon', () => {
    render(<LoadingDisplay />);
    
    const icon = screen.getByTestId('opened-cookie-icon');
    expect(icon).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<LoadingDisplay />);
    
    const section = screen.getByRole('status');
    expect(section).toHaveAttribute('aria-label', 'Loading fortune cookie');
  });
});