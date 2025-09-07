export interface CookieIconProps {
  className?: string;
}

export interface TitleProps {
  className?: string;
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  id?: string;
}

export interface RefreshIconProps {
  className?: string;
}

export interface OpenedCookieIconProps {
  className?: string;
}

export interface Fortune {
  id: number;
  text: string;
  author?: string;
}

export interface InitialDisplayProps {
  onOpenCookie: () => void;
}

export interface FortuneResultProps {
  fortune: Fortune;
  luckyNumbers: number[];
  onNewCookie: () => void;
  onOpenCookie: () => void;
}

export interface FortuneDisplayProps {
  fortune: Fortune;
  luckyNumbers: number[];
  onNewCookie: () => void;
}
