import FortuneDisplay from '../FortuneDisplay/FortuneDisplay';
import type { FortuneResultProps } from '@/types';

export default function FortuneResult({
  fortune,
  luckyNumbers,
  onNewCookie,
}: FortuneResultProps) {
  return (
    <div className="flex flex-col items-center space-y-6 w-full max-w-md">
      <FortuneDisplay
        fortune={fortune}
        luckyNumbers={luckyNumbers}
        onNewCookie={onNewCookie}
      />
    </div>
  );
}
