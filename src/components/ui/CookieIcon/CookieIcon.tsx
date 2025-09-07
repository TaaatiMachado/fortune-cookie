import Sparkles from '../Sparkles/Sparkles';
import { CookieIconProps } from '../../../types';

export default function CookieIcon({ className = '' }: CookieIconProps) {
  return (
    <figure
      className={`relative ${className}`}
      style={{ 
        animation: 'spiralIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, float 2s ease-in-out infinite 0.8s',
        transformOrigin: 'center center'
      }}
      role="img"
      aria-label="Fortune cookie floating with sparkles"
    >
      <div
        className="absolute top-2 left-2 w-32 h-20 bg-black/20 rounded-full blur-md"
        aria-hidden="true"
      />

      <div className="relative w-32 h-20 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full transform rotate-12 shadow-lg border-2 border-amber-400">
        <div 
          className="absolute -top-2 -right-2 w-6 h-6 animate-spin" 
          aria-hidden="true"
          style={{ animationDuration: '6.5s' }}
        >
          <Sparkles className="text-yellow-400 drop-shadow-lg w-full h-full" />
        </div>
        <div
          className="absolute inset-2 border border-amber-500/30 rounded-full"
          aria-hidden="true"
        />
        <div
          className="absolute inset-4 border border-amber-500/20 rounded-full"
          aria-hidden="true"
        />

        <div 
          className="absolute -bottom-1 -left-2 w-4 h-4 animate-spin" 
          aria-hidden="true"
          style={{ animationDuration: '5.5s', animationDirection: 'reverse' }}
        >
          <Sparkles className="text-orange-500 drop-shadow-lg w-full h-full" />
        </div>
      </div>
    </figure>
  );
}
