import type { FortuneDisplayProps } from '@/types';
import RefreshIcon from '../RefreshIcon/RefreshIcon';
import Title from '../Title/Title';
import StarsBanner from '../StarsBanner/StarsBanner';

export default function FortuneDisplay({
  fortune,
  luckyNumbers,
  onNewCookie,
}: FortuneDisplayProps) {
  return (
    <article className="rounded-xl border p-6 bg-white/90 backdrop-blur-sm border-amber-200 shadow-xl max-w-sm animate-fadeIn">
      <StarsBanner />

      <header className="mb-4">
        <Title className="text-2xl" level={2}>Your Fortune</Title>
      </header>
      
      <blockquote className="text-center mt-8 mb-8" cite="Fortune Cookie">
        <p
          className="text-sm text-gray-700 italic leading-relaxed mb-6"
          style={{
            opacity: 0,
            animation: 'fadeUp 0.3s ease-out 0.9s forwards',
          }}
        >
          &ldquo;{fortune.text}&rdquo;
        </p>
      </blockquote>

      <section className="mt-4 text-center mb-6" aria-labelledby="lucky-numbers-heading">
        <h3
          id="lucky-numbers-heading"
          className="text-sm text-amber-700 mb-3"
          style={{
            opacity: 0,
            animation: 'fadeUp 0.3s ease-out 1.2s forwards',
          }}
        >
          Your Lucky Numbers
        </h3>
        <ol className="flex justify-center gap-2 flex-wrap list-none" role="list">
          {luckyNumbers.map((number, index) => (
            <li
              key={index}
              className="text-white bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-md w-10 h-10"
              style={{
                opacity: 0,
                animation: `jumpInBounce 0.3s ease-out ${1.5 + index * 0.1}s forwards`,
              }}
              aria-label={`Lucky number ${number}`}
            >
              {number}
            </li>
          ))}
        </ol>
      </section>

      <footer
        className="mt-12 text-center"
        style={{
          opacity: 0,
          animation: 'fadeUp 0.3s ease-out 2.1s forwards',
        }}
      >
        <button
          onClick={onNewCookie}
          className="text-white text-xs px-6 py-2 rounded-full transition-all duration-200 font-medium shadow-md hover:shadow-lg inline-flex items-center justify-center hover:scale-105 bg-gradient-to-r from-[oklch(0.769_0.188_70.08)] to-[oklch(0.705_0.213_47.604)] hover:from-[oklch(0.666_0.179_58.318)] hover:to-[oklch(0.646_0.222_41.116)]"
          type="button"
          aria-label="Get a new fortune cookie"
        >
          <RefreshIcon className="w-4 h-4 mr-2" aria-hidden="true" />
          Get Another Fortune
        </button>
      </footer>
    </article>
  );
}
