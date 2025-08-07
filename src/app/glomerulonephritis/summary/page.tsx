
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const GlomerulonephritisSummaryPage = () => {
    
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-8 flex justify-between items-center print:hidden">
                         <Button asChild variant="outline">
                            <Link href="/glomerulonephritis">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Full Guide
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">Save as PDF</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">Glomerulonephritis (GN) Quick Guide</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section>
                                <h3 className="font-bold text-primary">What is Glomerulonephritis?</h3>
                                <p>Glomerulonephritis (GN) is a group of diseases that cause inflammation and damage to the kidney's filters (glomeruli). This damage can cause the kidneys to leak protein and blood into the urine.</p>
                            </section>
                            
                            <section>
                                <h3 className="font-bold text-primary">Two Main Ways it Appears</h3>
                                <ul>
                                    <li><strong>Nephrotic Syndrome:</strong> The main sign is a large amount of protein in the urine, leading to swelling (edema) in the body.</li>
                                    <li><strong>Nephritic Syndrome:</strong> The main sign is blood in the urine, often accompanied by high blood pressure and reduced kidney function.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />Why It's Serious</h3>
                                <p>Some forms of GN can progress very quickly (Rapidly Progressive GN) and lead to permanent kidney failure if not treated immediately. It is a medical emergency.</p>
                            </section>

                             <section>
                                <h3 className="font-bold text-primary">Diagnosis and Treatment</h3>
                                <p>Diagnosis often requires blood tests, urine tests, and a <strong>kidney biopsy</strong> to identify the exact type of GN. Treatment depends on the cause but often includes medications to control blood pressure and suppress the immune system.</p>
                            </section>
                            
                            <p className="text-sm text-muted-foreground mt-8">This is a summary. Glomerulonephritis is a complex condition that requires care from a kidney specialist (nephrologist). For full details, please refer to the complete guide.</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisSummaryPage;
