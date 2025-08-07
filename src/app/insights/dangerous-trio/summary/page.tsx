
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const DangerousTrioSummaryPage = () => {

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
                            <Link href="/insights/dangerous-trio">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Full Article
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">Save as PDF</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">Quick Guide: The Dangerous Trio</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section>
                                <h3 className="font-bold text-primary">The Problem</h3>
                                <p>Diabetes and High Blood Pressure (BP) are the top two causes of kidney disease. Together, they create a "dangerous trio" that silently damages the kidneys' filters over time, often without any symptoms until the damage is severe.</p>
                            </section>
                            
                            <section>
                                <h3 className="font-bold text-primary">How the Damage Happens</h3>
                                <ul>
                                    <li><strong>Diabetes:</strong> High blood sugar makes blood thick, clogging the tiny filters in your kidneys.</li>
                                    <li><strong>High BP:</strong> High pressure physically damages and weakens these delicate filters.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />Key Warning Signs</h3>
                                <p>As kidney disease progresses, you might notice:</p>
                                <ul>
                                    <li>Swelling in feet, ankles, or face (soojan).</li>
                                    <li>Foamy or bubbly urine.</li>
                                    <li>Constant tiredness and weakness.</li>
                                    <li>BP that is very hard to control.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">Your 5-Point Protection Plan</h3>
                                <ol>
                                    <li><strong>Control Your Numbers:</strong> Manage your blood sugar and blood pressure with diet, exercise, and medication.</li>
                                    <li><strong>Get a Yearly Kidney Check:</strong> A simple blood and urine test is essential.</li>
                                    <li><strong>Eat a Kidney-Friendly Diet:</strong> Reduce salt, sugar, red meat, and fried foods.</li>
                                    <li><strong>Stay Active:</strong> Aim for 30 minutes of activity, like a brisk walk, most days.</li>
                                    <li><strong>Be Smart About Medicines:</strong> Avoid overusing painkillers and always consult your doctor.</li>
                                </ol>
                            </section>

                            <p className="text-sm text-muted-foreground mt-8">This is a summary. For full details, please refer to the complete article or speak with a healthcare professional.</p>

                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default DangerousTrioSummaryPage;
