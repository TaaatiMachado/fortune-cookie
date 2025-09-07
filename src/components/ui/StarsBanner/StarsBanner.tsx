import Sparkles from '../Sparkles/Sparkles';

export default function StarsBanner() {
  return (
    <div 
      className="flex flex-col items-center mb-2 relative" 
      role="img" 
      aria-label="Decorative stars animation"
      style={{ 
        opacity: 0,
        animation: 'jumpIn 0.3s ease-out 0s forwards'
      }}>
      <div
        className="w-10 h-10 mb-4 will-change-transform animate-spin relative"
        style={{ animationDuration: '2.2s' }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 border-2 border-amber-400 rounded-full"
          style={{
            animation: 'fortuneHalo 2.5s ease-in-out infinite',
          }}
        />
        <Sparkles
          className="w-full h-full relative z-10"
          style={{
            animation:
              'breatheScale 2.5s ease-in-out infinite, colorShift 3s ease-in-out infinite',
          }}
        />
      </div>

      <div
        className="absolute top-[10%] left-[20%]"
        style={{
          opacity: 0,
          animation: 'vMovement 2.5s linear infinite 0s',
          transformOrigin: 'center',
        }}
        aria-hidden="true"
      >
        <Sparkles
          className="w-4 h-4 text-yellow-300"
          style={{
            animation: 'breatheScale 2.5s ease-in-out infinite 0.625s',
          }}
        />
      </div>

      <div
        className="absolute top-[30%] left-[32%]"
        style={{
          opacity: 0,
          animation: 'vMovement 2.5s linear infinite 0.1s',
          transformOrigin: 'center',
        }}
        aria-hidden="true"
      >
        <Sparkles
          className="w-3 h-3 text-black"
          style={{
            animation: 'breatheScale 2.5s ease-in-out infinite 0.725s',
          }}
        />
      </div>

      <div
        className="absolute top-[10%] left-[44%]"
        style={{
          opacity: 0,
          animation: 'vMovement 2.5s linear infinite 0.2s',
          transformOrigin: 'center',
        }}
        aria-hidden="true"
      >
        <Sparkles
          className="w-4 h-4 text-orange-400"
          style={{
            animation: 'breatheScale 2.5s ease-in-out infinite 0.825s',
          }}
        />
      </div>

      <div
        className="absolute top-[30%] left-[56%]"
        style={{
          opacity: 0,
          animation: 'vMovement 2.5s linear infinite 0.3s',
          transformOrigin: 'center',
        }}
        aria-hidden="true"
      >
        <Sparkles
          className="w-3 h-3 text-yellow-300"
          style={{
            animation: 'breatheScale 2.5s ease-in-out infinite 0.925s',
          }}
        />
      </div>

      <div
        className="absolute top-[10%] left-[68%]"
        style={{
          opacity: 0,
          animation: 'vMovement 2.5s linear infinite 0.4s',
          transformOrigin: 'center',
        }}
        aria-hidden="true"
      >
        <Sparkles
          className="w-3 h-3 text-black"
          style={{
            animation: 'breatheScale 2.5s ease-in-out infinite 1.025s',
          }}
        />
      </div>

      <div
        className="absolute top-[30px] left-[88%]"
        style={{
          opacity: 0,
          animation: 'vMovement 2.5s linear infinite 0.5s',
          transformOrigin: 'center',
        }}
        aria-hidden="true"
      >
        <Sparkles
          className="w-3 h-3 text-orange-400"
          style={{
            animation: 'breatheScale 2.5s ease-in-out infinite 1.125s',
          }}
        />
      </div>
    </div>
  );
}
