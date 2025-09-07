import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fortune Cookie - Discover Your Fortune and Lucky Numbers',
  description: 'Crack open a virtual fortune cookie to reveal your personalized fortune message and lucky numbers. Interactive and fun fortune telling experience.',
  keywords: 'fortune cookie, fortune telling, lucky numbers, predictions, entertainment',
  authors: [{ name: 'Fortune Cookie App' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
