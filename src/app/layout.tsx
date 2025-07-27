
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Nirogyam - Kidney Health Education',
  description: 'Your comprehensive resource for understanding kidney health, managing kidney disease, and finding support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <Script async type='module' src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'></Script>
      </head>
      <body className={cn("min-h-screen font-sans antialiased flex flex-col")}>
        <div className='flex-grow'>
            {children}
        </div>
        <Toaster />
        <zapier-interfaces-chatbot-embed is-popup='true' chatbot-id='cmdjl8il0001prscdldia2w3v'></zapier-interfaces-chatbot-embed>
      </body>
    </html>
  );
}

    
