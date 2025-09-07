const BUBBLE_DATA = [
  { size: 'w-1.5 h-1.5', animation: 'animate-bubble-1' },
  { size: 'w-1 h-1', animation: 'animate-bubble-2' },
  { size: 'w-2 h-2', animation: 'animate-bubble-3' },
  { size: 'w-1.5 h-1.5', animation: 'animate-bubble-4' },
  { size: 'w-1 h-1', animation: 'animate-bubble-5' },
  { size: 'w-1.5 h-1.5', animation: 'animate-bubble-6' },
  { size: 'w-1 h-1', animation: 'animate-bubble-7' },
  { size: 'w-2 h-2', animation: 'animate-bubble-8' },
  { size: 'w-1.5 h-1.5', animation: 'animate-bubble-9' },
  { size: 'w-1 h-1', animation: 'animate-bubble-10' },
  { size: 'w-1.5 h-1.5', animation: 'animate-bubble-11' },
  { size: 'w-2 h-2', animation: 'animate-bubble-12' },
] as const;

export default function FloatingBubbles() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none" 
      aria-hidden="true"
      role="presentation"
    >
      {BUBBLE_DATA.map(({ size, animation }, index) => (
        <div
          key={`bubble-${index + 1}`}
          className={`absolute top-1/2 left-1/2 ${size} bg-amber-500 rounded-full ${animation} opacity-0 will-change-transform`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}