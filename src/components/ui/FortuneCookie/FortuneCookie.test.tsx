import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FortuneCookie from './FortuneCookie';

// Mock CookieIcon
jest.mock('../CookieIcon/CookieIcon', () => {
  return function MockCookieIcon() {
    return <div data-testid="cookie-icon">Cookie</div>;
  };
});

describe('FortuneCookie', () => {
  const mockOnOpenCookie = jest.fn();

  beforeEach(() => {
    mockOnOpenCookie.mockClear();
  });

  it('renders button when not opened', () => {
    render(<FortuneCookie isOpened={false} onOpenCookie={mockOnOpenCookie} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('does not render button when opened', () => {
    render(<FortuneCookie isOpened={true} onOpenCookie={mockOnOpenCookie} />);
    
    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });

  it('calls onOpenCookie when clicked', () => {
    render(<FortuneCookie isOpened={false} onOpenCookie={mockOnOpenCookie} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockOnOpenCookie).toHaveBeenCalledTimes(1);
  });

  it('renders figure container', () => {
    render(<FortuneCookie isOpened={false} onOpenCookie={mockOnOpenCookie} />);
    
    const figure = screen.getByLabelText('Fortune Cookie');
    expect(figure).toBeInTheDocument();
  });
});