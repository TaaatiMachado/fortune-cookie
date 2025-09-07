import FortuneCookie from '../FortuneCookie/FortuneCookie';
import type { InitialDisplayProps } from '../../../types';
import MagicPill from '../MagicPill/MagicPill';
import Title from '../Title/Title';
import Sparkles from '../Sparkles/Sparkles';

const SPARKLE_DATA = [
  { position: 'left-[100%] bottom-[15%]', size: 'w-3 h-3', delay: 1.7 }, // Direita
  { position: 'bottom-[0] right-[15%]', size: 'w-2 h-2', delay: 1.8 }, // Baixo-direita
  { position: 'left-[50%] bottom-[-10%]', size: 'w-3 h-3', delay: 1.9 }, // Baixo
  { position: 'bottom-[0] left-[15%]', size: 'w-2 h-2', delay: 2.0 }, // Baixo-esquerda
  { position: 'left-0 bottom-[15%]', size: 'w-3 h-3', delay: 2.1 }, // Esquerda
  { position: 'top-[55%] left-[15%]', size: 'w-2 h-2', delay: 2.2 }, // Cima-esquerda
  { position: 'left-[50%] top-[50%]', size: 'w-3 h-3', delay: 2.3 }, // Cima
  { position: 'top-[55%] right-[15%]', size: 'w-2 h-2', delay: 2.4 }, // Cima-direita
] as const;

export default function InitialDisplay({ onOpenCookie }: InitialDisplayProps) {
  return (
    <section className="relative" aria-labelledby="fortune-cookie-title">
      {/* Decorative sparkles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {SPARKLE_DATA.map(({ position, size, delay }, index) => (
          <Sparkles
            key={`sparkle-${index + 1}`}
            className={`text-black ${size} absolute ${position}`}
            style={{ 
              opacity: 0,
              animation: `sparkleShow 0.3s ease-out ${delay}s forwards, spin 4s linear infinite ${delay}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center mb-4">
        <FortuneCookie isOpened={false} onOpenCookie={onOpenCookie} />
      </div>

      <header className="mb-2">
        <Title className='text-3xl mb-3' id="fortune-cookie-title">Fortune Cookie</Title>
        <p
          className="text-amber-700 mb-4 animate-fadeUp-delayed opacity-0"
          style={{
            textShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px',
          }}
          role="status"
          aria-live="polite"
        >
          Tap the cookie to crack it open!
        </p>
      </header>

      <div className="animate-jumpInBounce inline-block">
        <MagicPill />
      </div>
    </section>
  );
}