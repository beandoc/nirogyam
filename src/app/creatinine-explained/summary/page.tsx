
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const CreatinineSummaryPage = () => {

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
                            <Link href="/creatinine-explained">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Full Guide
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">Save as PDF</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">Creatinine Quick Guide (English)</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section>
                                <h3 className="font-bold text-primary">What is Creatinine?</h3>
                                <p>Creatinine is a waste product from your muscles that healthy kidneys filter out of your blood. A high creatinine level in your blood is a key sign that your kidneys are not working well.</p>
                            </section>
                            
                            <section>
                                <h3 className="font-bold text-primary">Why is the Test Important?</h3>
                                <p>It's a simple blood test to check your kidney health. It's often the first step to diagnosing Chronic Kidney Disease (CKD), sometimes long before you feel any symptoms.</p>
                            </section>

                             <section>
                                <h3 className="font-bold text-primary">Interpreting the Result</h3>
                                <p>A "normal" level depends on age, sex, and muscle mass. Your doctor will use your creatinine result to calculate your eGFR (estimated Glomerular Filtration Rate), which is the main score for your kidney function.</p>
                            </section>

                            <section>
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />Key Takeaway</h3>
                                <p>A high creatinine level is a warning sign. By the time it is even slightly elevated, a significant amount of kidney function may already be lost. Early detection is crucial.</p>
                            </section>

                            <p className="text-sm text-muted-foreground mt-8">This is a summary. For full details, please refer to the complete guide or speak with a healthcare professional.</p>

                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default CreatinineSummaryPage;

    