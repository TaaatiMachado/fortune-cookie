import CookieIcon from "../CookieIcon/CookieIcon";

interface FortuneCookieProps {
  isOpened: boolean;
  onOpenCookie: () => void;
}

export default function FortuneCookie({
  isOpened,
  onOpenCookie,
}: FortuneCookieProps) {
  return (
    <figure className="relative align-middle" aria-label="Fortune Cookie">
      {!isOpened && (
        <button
          onClick={onOpenCookie}
          className="w-32 h-32 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-4xl"
          aria-label="Click to open fortune cookie"
          type="button"
        >
          <CookieIcon />
        </button>
      )}
    </figure>
  );
}
