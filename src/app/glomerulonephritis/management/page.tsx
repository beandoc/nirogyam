
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

const GlomerulonephritisManagementPage = () => {
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
                         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">General Approach to Management</h1>
                    </header>
                    
                    <InfoCard title="How Glomerulonephritis is Treated">
                         <p>The management of glomerular diseases is often complex and requires a specialized, multidisciplinary care team. While specific treatments vary widely depending on the exact diagnosis, the general goals are to address the underlying cause, reduce inflammation, and slow the progression of kidney damage.</p>
                    </InfoCard>

                    <InfoCard title="Key Treatment Strategies">
                        <ul className="list-disc pl-6 space-y-4">
                           <li>
                                <strong>Treating the Underlying Cause:</strong>
                                <p>If the GN is secondary to an infection, cancer, or drug, the primary focus is on treating that condition.</p>
                           </li>
                           <li>
                                <strong>Supportive Care:</strong>
                                <p>This is crucial for all patients and includes strict blood pressure control (often with medications like ACE inhibitors or ARBs), management of edema with diuretics, and dietary modifications (like salt restriction).</p>
                           </li>
                           <li>
                                <strong>Immunosuppression:</strong>
                                <p>For many primary forms of GN that are caused by an overactive immune system, treatment involves medications that suppress the immune system. This can include corticosteroids and other immunosuppressive agents.</p>
                           </li>
                        </ul>
                         <p className="mt-4 font-semibold">The management of glomerular diseases is a rapidly evolving field, with new knowledge and treatments continually improving the lives of affected patients.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisManagementPage;
