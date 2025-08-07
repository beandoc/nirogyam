
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const EgfrSummaryPage = () => {
    
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
                            <Link href="/egfr-explained">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Full Guide
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">Save as PDF</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">eGFR Quick Guide (English)</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section>
                                <h3 className="font-bold text-primary">What is eGFR?</h3>
                                <p>Your estimated Glomerular Filtration Rate (eGFR) is a score that shows how well your kidneys are filtering waste from your blood. A high number is good; a low number indicates kidney damage.</p>
                            </section>
                            
                            <section>
                                <h3 className="font-bold text-primary">How is it Measured?</h3>
                                <p>eGFR is calculated using a simple blood test for creatinine, along with your age and sex. It's an estimate because a direct measurement is too complex for regular check-ups.</p>
                            </section>

                            <section>
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />Main Risk Factors for Low eGFR</h3>
                                <p>The main conditions that lead to a lower eGFR and Chronic Kidney Disease (CKD) are:</p>
                                <ul>
                                    <li>Diabetes</li>
                                    <li>High Blood Pressure</li>
                                    <li>Heart Disease</li>
                                    <li>Family history of kidney disease</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">Understanding Your eGFR Number</h3>
                                <ul>
                                    <li><strong>eGFR 90+:</strong> Normal kidney function (but may have early kidney damage if other signs are present).</li>
                                    <li><strong>eGFR 60-89:</strong> Mildly reduced kidney function.</li>
                                    <li><strong>eGFR 30-59:</strong> Moderately reduced kidney function (Stage 3 CKD).</li>
                                    <li><strong>eGFR 15-29:</strong> Severely reduced kidney function (Stage 4 CKD).</li>
                                    <li><strong>eGFR below 15:</strong> Kidney failure (Stage 5 CKD), requiring dialysis or transplant.</li>
                                </ul>
                            </section>
                            
                            <p className="text-sm text-muted-foreground mt-8">This is a summary. For full details, please refer to the complete guide or speak with a healthcare professional.</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default EgfrSummaryPage;

    