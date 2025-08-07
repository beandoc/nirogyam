
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const UtiSummaryPage = () => {
    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-8 flex justify-between items-center print:hidden">
                         <Button asChild variant="outline">
                            <Link href="/urinary-tract-infection">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Full Guide
                            </Link>
                        </Button>
                        <Button onClick={() => window.print()} variant="outline">Save as PDF</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">UTI Quick Guide (English)</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section>
                                <h3 className="font-bold text-primary">What is a UTI?</h3>
                                <p>A Urinary Tract Infection (UTI) is an infection in your urinary system, usually caused by bacteria. It can affect your bladder or, more seriously, your kidneys.</p>
                            </section>
                            
                            <section>
                                <h3 className="font-bold text-primary">Common Symptoms</h3>
                                <ul>
                                    <li>Pain or burning when you pee</li>
                                    <li>Needing to pee often and urgently</li>
                                    <li>Cloudy, dark, or strange-smelling urine</li>
                                    <li>Pain in your lower stomach</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />When to See a Doctor Immediately</h3>
                                <p>If you have the symptoms above PLUS any of the following, it could be a kidney infection:</p>
                                <ul>
                                    <li>Fever and chills</li>
                                    <li>Pain in your lower back or side</li>
                                    <li>Nausea or vomiting</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">Key Prevention Tips</h3>
                                <ul>
                                    <li><strong>Drink Plenty of Water:</strong> Helps flush out bacteria.</li>
                                    <li><strong>Wipe Front to Back:</strong> Prevents bacteria spreading.</li>
                                    <li><strong>Don't Hold It:</strong> Urinate when you feel the need.</li>
                                    <li><strong>Pee After Sex:</strong> Helps wash away bacteria.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">Treatment</h3>
                                <p>UTIs are treated with antibiotics prescribed by a doctor. It is very important to finish the entire course of medicine, even if you start to feel better.</p>
                            </section>

                            <p className="text-sm text-muted-foreground mt-8">This is a summary. For full details, please refer to the complete guide or speak with a healthcare professional.</p>

                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default UtiSummaryPage;
