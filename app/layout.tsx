import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import './globals.css';

const libre = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Galleria',
  description: 'Galleria Slide Show',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={libre.className}>
        <main className="max-w-autoScreen mx-auto">{children}</main>
      </body>
    </html>
  );
}
