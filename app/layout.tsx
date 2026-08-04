import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ERPEVAI-SITE-V2',
  description: 'Vision Apostolique Internationale',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar /> {/* 2. Affichage du Navbar global */}
        <main className="pt-20"> {/* pt-20 évite que le contenu ne se cache sous la navbar fixed */}
          {children}
        </main>
      </body>
    </html>
  );
}