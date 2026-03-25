
import React, { Suspense } from 'react';
import KidneyHealthPage from './KidneyHealthPage';
import { AppHeader } from '@/components/AppHeader';

const KidneyHealthPageWithSuspense = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <AppHeader />
            <Suspense fallback={<div className="flex-grow flex items-center justify-center font-heading text-xl text-primary animate-pulse">Loading Clinical Library...</div>}>
                <KidneyHealthPage />
            </Suspense>
        </div>
    );
};

export default KidneyHealthPageWithSuspense;
