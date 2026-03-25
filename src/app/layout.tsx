import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { ChatbotBubble } from '@/components/ChatbotBubble';

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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{__html: `
            if (typeof Node === 'function' && Node.prototype) {
                const originalRemoveChild = Node.prototype.removeChild;
                Node.prototype.removeChild = function(child) {
                    if (child.parentNode !== this) {
                        return child;
                    }
                    return originalRemoveChild.apply(this, arguments);
                };
                const originalInsertBefore = Node.prototype.insertBefore;
                Node.prototype.insertBefore = function(newNode, referenceNode) {
                    if (referenceNode && referenceNode.parentNode !== this) {
                        return newNode;
                    }
                    return originalInsertBefore.apply(this, arguments);
                };
                const originalAppendChild = Node.prototype.appendChild;
                Node.prototype.appendChild = function(appendChild) {
                    if (appendChild.parentNode && appendChild.parentNode !== this) {
                        return appendChild;
                    }
                    return originalAppendChild.apply(this, arguments);
                };
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

    