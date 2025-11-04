
import React, { Suspense } from 'react';
import KidneyHealthPage from './KidneyHealthPage';
import { AppHeader } from '@/components/AppHeader';

const KidneyHealthPageWithSuspense = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <KidneyHealthPage />
        </Suspense>
    );
};

export default KidneyHealthPageWithSuspense;
