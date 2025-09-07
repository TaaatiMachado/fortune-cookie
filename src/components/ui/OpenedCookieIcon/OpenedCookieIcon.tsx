import { OpenedCookieIconProps } from '../../../types';
import FloatingBubbles from '../FloatingBubbles/FloatingBubbles';

const CRUMB_POSITIONS = [
  { x: -14.8881, y: 31.9611 },
  { x: 6.47415, y: -43.2263 },
  { x: -2.04449, y: 42.8289 },
  { x: -4.53907, y: 33.0926 },
  { x: -42.0948, y: -5.62554 },
  { x: 46.2917, y: -25.0272 },
  { x: 26.7318, y: -24.4035 },
  { x: -31.2868, y: 25.4192 },
] as const;

export default function OpenedCookieIcon({ className = '' }: OpenedCookieIconProps) {
  return (
    <figure
      className={`relative animate-cookieIntenseJump will-change-transform ${className}`}
      role="img"
      aria-label="Opened fortune cookie with floating particles"
    >
      <div className="relative w-32 h-20">
        {/* Left cookie half */}
        <div 
          className="absolute left-0 w-16 h-20 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-l-full border-2 border-amber-400 overflow-hidden animate-leftHalf will-change-transform"
          style={{ transform: 'translateX(0px)' }}
          aria-hidden="true"
        >
          <div className="absolute inset-1 border border-amber-500/30 rounded-l-full" />
        </div>
        
        {/* Right cookie half */}
        <div 
          className="absolute right-0 w-16 h-20 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-r-full border-2 border-amber-400 overflow-hidden animate-rightHalf will-change-transform"
          style={{ transform: 'translateX(0px)' }}
          aria-hidden="true"
        >
          <div className="absolute inset-1 border border-amber-500/30 rounded-r-full" />
        </div>
        
        {/* Cookie crumbs */}
        <div className="absolute inset-0" aria-hidden="true">
          {CRUMB_POSITIONS.map(({ x, y }, index) => (
            <div
              key={`crumb-${index + 1}`}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-amber-300 rounded-full opacity-0 will-change-transform"
              style={{ 
                transform: `translateX(${x}px) translateY(${y}px) scale(0)` 
              }}
            />
          ))}
        </div>

        {/* Floating bubbles effect */}
        <FloatingBubbles />
      </div>
    </figure>
  );
}