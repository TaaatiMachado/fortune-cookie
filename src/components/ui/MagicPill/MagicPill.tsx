import Sparkles from "../Sparkles/Sparkles";

export default function MagicPill() {
  return (
    <div 
      className="flex justify-between flex-nowrap items-center gap-2 border-2 rounded-full px-4 py-2 backdrop-blur-sm border-amber-300/80 bg-gradient-to-r from-amber-50/80 to-yellow-50/80 will-change-transform"
      style={{
        animation: 'magicPillBreathe 2s ease-in-out infinite',
      }}
      role="presentation"
      aria-label="Decorative magic indicator"
    >
      <Sparkles 
        className="text-amber-500 w-4 h-4 will-change-transform animate-spin" 
        style={{ animationDuration: '4.5s' }}
        aria-hidden="true"
      />
      <span className="text-amber-700 text-sm font-medium select-none">
        Magic awaits inside!
      </span>
      <Sparkles 
        className="text-orange-500 w-4 h-4 will-change-transform animate-spin" 
        style={{ animationDuration: '3s', animationDirection: 'reverse' }}
        aria-hidden="true"
      />
    </div>
  );
}