import OpenedCookieIcon from '../OpenedCookieIcon/OpenedCookieIcon';

export default function LoadingDisplay() {
  return (
    <section 
      className="flex flex-col items-center justify-center min-h-48 p-6"
      aria-label="Loading fortune cookie"
      role="status"
    >
      <div className="flex flex-col items-center space-y-6">
        <OpenedCookieIcon className="scale-110" />
        <p className="text-amber-700 text-center animate-textJump" aria-live="polite">
          Cracking open your fortune...
        </p>
      </div>
    </section>
  );
}
