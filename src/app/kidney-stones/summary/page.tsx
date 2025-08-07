
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const KidneyStonesSummaryPage = () => {

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
                            <Link href="/kidney-stones">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Full Guide
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">Save as PDF</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">Kidney Stones Quick Guide</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section>
                                <h3 className="font-bold text-primary">What Are They?</h3>
                                <p>Kidney stones are hard, pebble-like objects formed from excess minerals and salts in your urine. They can cause severe pain as they travel through the urinary tract.</p>
                            </section>
                            
                            <section>
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />Key Symptoms</h3>
                                <ul>
                                    <li>Sudden, severe pain in your back or side.</li>
                                    <li>Pain when urinating.</li>
                                    <li>Pink, red, or brown urine (blood).</li>
                                    <li>Nausea and vomiting.</li>
                                    <li>Fever or chills.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">Main Causes</h3>
                                <ul>
                                    <li>Not drinking enough water (dehydration).</li>
                                    <li>A diet high in salt, sugar, or animal protein.</li>
                                    <li>Being overweight.</li>
                                    <li>Family history of kidney stones.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">Top Prevention Tip</h3>
                                <p><strong>Stay hydrated!</strong> Drinking plenty of water is the single most important thing you can do to prevent kidney stones. Your urine should be light yellow or clear.</p>
                            </section>
                            
                            <p className="text-sm text-muted-foreground mt-8">This is a summary. For full details, and information on treatment, please refer to the complete guide or speak with a healthcare professional.</p>

                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default KidneyStonesSummaryPage;

    