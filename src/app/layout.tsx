import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { ChatbotBubble } from '@/components/ChatbotBubble';

import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

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
    <html lang="en" className={cn("light", inter.variable, outfit.variable)}>
      <head>
        <script dangerouslySetInnerHTML={{__html: `
            // DOM Stability Guard (prevents translation-related crashes)
            if (typeof Node === 'function' && Node.prototype) {
                const originalRemoveChild = Node.prototype.removeChild;
                Node.prototype.removeChild = function(child) {
                    if (child.parentNode !== this) return child;
                    return originalRemoveChild.apply(this, arguments);
                };
                const originalInsertBefore = Node.prototype.insertBefore;
                Node.prototype.insertBefore = function(newNode, referenceNode) {
                    if (referenceNode && referenceNode.parentNode !== this) return newNode;
                    return originalInsertBefore.apply(this, arguments);
                };
                const originalAppendChild = Node.prototype.appendChild;
                Node.prototype.appendChild = function(appendChild) {
                    if (appendChild.parentNode && appendChild.parentNode !== this) return appendChild;
                    return originalAppendChild.apply(this, arguments);
                };
            }

            // Aggressive Anti-Auto-Translate (Prevents persistent 'googtrans' states)
            const userLang = localStorage.getItem('nirogyam-lang') || 'en';
            if (userLang === 'en') {
                document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname + ';';
                if (window.location.hostname.includes('.vercel.app')) {
                   document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.vercel.app;';
                }
            }
        `}} />
      </head>
      <body className={cn("min-h-screen font-sans antialiased flex flex-col")}>
        <div className='flex-grow'>
            {children}
        </div>
        <ChatbotBubble />
        <Toaster />
      </body>
    </html>
  );
}

    