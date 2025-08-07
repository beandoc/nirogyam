
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <Card className="mb-8">
        <CardHeader>
            <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="prose lg:prose-xl max-w-none text-foreground/90 space-y-4">
                {children}
            </div>
        </CardContent>
    </Card>
);

const GlomerulonephritisIntroductionPage = () => {
    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <Button asChild variant="outline" className="mb-8">
                        <Link href="/glomerulonephritis">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Glomerulonephritis Guide
                        </Link>
                    </Button>
                    
                    <header className="mb-12">
                         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Introduction to Glomerulonephritis</h1>
                    </header>
                    
                    <InfoCard title="1.1 What is Glomerulonephritis?">
                        <p>Glomerulonephritis (GN) refers to a group of diseases that injure the part of the kidney that filters blood. These filters, called glomeruli, are tiny, intricate structures made up of small blood vessels. When the glomeruli become inflamed or damaged, the kidneys cannot function properly, leading to a range of health problems. The term Glomerulonephritis essentially means "inflammation of the glomeruli." While some forms of GN were once considered "idiopathic" or of unknown cause, modern understanding has revealed that many are caused by specific issues like genetic variations or the body's own immune system creating harmful autoantibodies.</p>
                    </InfoCard>

                    <InfoCard title="1.2 The Role of the Glomerulus">
                        <p>The glomerulus has a highly refined structure designed to perform a critical function: filtering waste and excess fluid from the blood while keeping essential proteins and blood cells in circulation. When this filtration barrier is damaged by GN, it can lead to two primary problems:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Protein Leak (Proteinuria):</strong> Damage to specialized cells called podocytes causes proteins to leak from the blood into the urine.</li>
                            <li><strong>Blood Leak (Hematuria):</strong> Damage and inflammation can create breaks in the glomerular basement membrane (GBM), allowing red blood cells to escape into the urine.</li>
                        </ul>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisIntroductionPage;
