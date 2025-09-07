import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title', () => {
  it('renders with default h1 tag', () => {
    render(<Title>Test Title</Title>);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test Title');
  });

  it('renders with correct heading levels', () => {
    render(<Title level={2}>Level 2</Title>);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Title className="custom-class">Test</Title>);
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('custom-class');
  });

  it('applies default styling classes', () => {
    render(<Title>Styled Title</Title>);
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('bg-gradient-to-r');
  });
});