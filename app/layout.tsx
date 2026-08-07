import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Église de Réveil du Plein Évangile - ERPEVAI',
  description: 'Vision Apostolique Internationale - Éclairer, Restaurer, Conquérir',
  verification: {
    google: 'upTtM9CkBuFWFj_w6-roDSH_9FDRx_S1E_uR7v1zYhU',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}