import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GymManager - Software de Gestión para Gimnasios',
  description: 'La solución todo en uno para la gestión de tu gimnasio. Control de miembros, pagos, clases y más.',
  keywords: ['gimnasio', 'gestión de gimnasio', 'software gimnasio', 'aplicación gimnasio', 'control de acceso'],
  authors: [{ name: 'GymManager', url: 'https://gymmanager.com' }],
  creator: 'GymManager',
  publisher: 'GymManager',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'GymManager - Software de Gestión para Gimnasios',
    description: 'La solución todo en uno para la gestión de tu gimnasio.',
    url: 'https://gymmanager.com',
    siteName: 'GymManager',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GymManager - Software de Gestión para Gimnasios',
    description: 'La solución todo en uno para la gestión de tu gimnasio.',
    creator: '@gymmanager',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
