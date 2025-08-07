
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

export default function CkdSummaryPage() {
    
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
                            <Link href="/ckd-explained">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Full Guide
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">Save as PDF</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">CKD Quick Guide (English)</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section>
                                <h3 className="font-bold text-primary">What is CKD?</h3>
                                <p>Chronic Kidney Disease (CKD) is a long-term condition where your kidneys don't work as well as they should. It's often a "silent" disease with few symptoms in the early stages.</p>
                            </section>
                            
                            <section>
                                <h3 className="font-bold text-primary">Key Functions of Your Kidneys</h3>
                                <ul>
                                    <li>Filter waste from your blood</li>
                                    <li>Control blood pressure</li>
                                    <li>Help make red blood cells</li>
                                    <li>Keep your bones strong</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />Main Causes</h3>
                                <p>The two biggest causes of CKD are <strong>Diabetes</strong> and <strong>High Blood Pressure</strong>.</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">How to Slow Down CKD</h3>
                                <ul>
                                    <li><strong>Control Blood Pressure & Blood Sugar:</strong> Work with your doctor to manage these numbers.</li>
                                    <li><strong>Kidney-Friendly Diet:</strong> Limit salt, and possibly protein, potassium, and phosphorus.</li>
                                    <li><strong>Take Medications:</strong> Take all medicines exactly as prescribed by your doctor.</li>
                                    <li><strong>Avoid Smoking:</strong> Smoking can make kidney disease worse.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">Advanced Treatment</h3>
                                <p>If kidney function becomes very low, treatments include <strong>Dialysis</strong> (a machine cleans your blood) or a <strong>Kidney Transplant</strong>.</p>
                            </section>

                            <p className="text-sm text-muted-foreground mt-8">This is a summary. For full details, please refer to the complete guide or speak with a healthcare professional.</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};
