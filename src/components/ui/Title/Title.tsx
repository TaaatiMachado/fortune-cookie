import React from 'react';
import { TitleProps } from '../../../types';

export default function Title({ className = '', children, id, level = 1 }: TitleProps) {
  const tag = `h${level}`;
  return React.createElement(
    tag,
    {
      id,
      className: ` bg-gradient-to-r from-amber-700 via-yellow-600 to-orange-700 bg-clip-text text-transparent drop-shadow-lg will-change-transform ${className}`,
      style: {
        textShadow: 'rgba(251, 191, 36, 0.6) 0px 0px 30px',
        filter: 'drop-shadow(rgba(251, 191, 36, 0.4) 0px 2px 8px)',
        opacity: 0,
        animation: 'jumpIn 0.4s ease-out 0.4s forwards'
      }
    },
    children
  );
}