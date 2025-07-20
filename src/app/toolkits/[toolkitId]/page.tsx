
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { useParams } from 'next/navigation';
import { AppHeader } from '@/components/AppHeader';

const toolkitMap: { [key: string]: { url: string; title: string } } = {
    'know-hemodialysis': {
        url: 'https://beandoc.github.io/know_hemodialysis/',
        title: 'Know Hemodialysis',
    },
    'ckd-assessment': {
        url: 'https://beandoc.github.io/ckdassessment/',
        title: 'CKD Assessment',
    },
    'aki-risk-assessment': {
        url: 'https://beandoc.github.io/AKI-risk-index/',
        title: 'AKI Risk Assessment',
    },
    'kidney-care-choices': {
        url: 'https://beandoc.github.io/Kidneycarechoices/',
        title: 'Kidney Care Choices',
    },
    'adpkd-road-map': {
        url: 'https://beandoc.github.io/adpkd/',
        title: 'ADPKD Road Map',
    },
    'biopsy-consent': {
        url: 'https://beandoc.github.io/Biopsyconsent/',
        title: 'Biopsy Consent',
    },
};

const ToolkitPage = () => {
    const params = useParams();
    const toolkitId = params.toolkitId as string;
    const toolkit = toolkitMap[toolkitId];

    if (!toolkit) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
                <h1 className="text-4xl font-bold text-destructive mb-4">Toolkit Not Found</h1>
                <p className="text-lg mb-8">The toolkit you are looking for does not exist.</p>
                <Button asChild>
                    <Link href="/">
                        <Home className="mr-2 h-4 w-4" /> Go back to Home
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen bg-background">
             <header className="bg-card/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 flex-shrink-0">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                         <svg className="h-10 w-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V3.5C9.1 3.5 7.25 5.1 7.25 7.25C7.25 9.4 9.1 11 11.25 11V21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25V11C14.9 11 16.75 9.4 16.75 7.25C16.75 5.1 14.9 3.5 12.75 3.5V2.75Z" />
                            <path d="M7.25 14.5C7.25 14.0858 6.91421 13.75 6.5 13.75C6.08579 13.75 5.75 14.0858 5.75 14.5V15C4.37 15 3.25 16 3.25 17.25C3.25 18.5 4.37 19.5 5.75 19.5V20C5.75 20.4142 6.08579 20.75 6.5 20.75C6.91421 20.75 7.25 20.4142 7.25 20V19.5C8.63 19.5 9.75 18.5 9.75 17.25C9.75 16 8.63 15 7.25 15V14.5Z" />
                            <path d="M18.25 13.75C17.8358 13.75 17.5 14.0858 17.5 14.5V15C16.12 15 15 16 15 17.25C15 18.5 16.12 19.5 17.5 19.5V20C17.5 20.4142 17.8358 20.75 18.25 20.75C18.6642 20.75 19 20.4142 19 20V19.5C20.38 19.5 21.5 18.5 21.5 17.25C21.5 16 20.38 15 19 15V14.5C19 14.0858 18.6642 13.75 18.25 13.75Z" />
                        </svg>
                        <h1 className="text-2xl font-bold text-primary">Nirogyam</h1>
                    </Link>
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-semibold text-foreground hidden sm:block">{toolkit.title}</h2>
                         <Button variant="outline" asChild>
                            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Link>
                        </Button>
                    </div>
                </div>
            </header>
            <main className="flex-grow">
                <iframe
                    src={toolkit.url}
                    title={toolkit.title}
                    className="w-full h-full border-0"
                />
            </main>
        </div>
    );
};

export default ToolkitPage;
