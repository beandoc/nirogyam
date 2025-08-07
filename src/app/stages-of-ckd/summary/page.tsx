
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

function handlePrint() {
    if (typeof window !== 'undefined') {
        window.print();
    }
}

export default function StagesCkdSummaryPage() {
    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-8 flex justify-between items-center print:hidden">
                         <Button asChild variant="outline">
                            <Link href="/stages-of-ckd">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Full Guide
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">Save as PDF</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">CKD Stages Quick Guide (English)</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section>
                                <h3 className="font-bold text-primary">What is CKD?</h3>
                                <p>Chronic Kidney Disease (CKD) means your kidneys are damaged and can't filter blood as well as they should. It's a condition that progresses over time.</p>
                            </section>
                            
                            <section>
                                <h3 className="font-bold text-primary">How CKD is Staged</h3>
                                <p>CKD is categorized into 5 stages based on your eGFR (estimated Glomerular Filtration Rate), which is a score of your kidney function.</p>
                                <ul>
                                    <li><strong>Stage 1 (eGFR 90+):</strong> Normal function, but signs of kidney damage are present.</li>
                                    <li><strong>Stage 2 (eGFR 60-89):</strong> Mild loss of kidney function.</li>
                                    <li><strong>Stage 3 (eGFR 30-59):</strong> Moderate loss of function. This is often when symptoms appear.</li>
                                    <li><strong>Stage 4 (eGFR 15-29):</strong> Severe loss of function. Preparation for dialysis or transplant may begin.</li>
                                    <li><strong>Stage 5 (eGFR <15):</strong> Kidney failure. Requires dialysis or transplant to live.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />Top Risk Factors</h3>
                                <ul>
                                    <li>Diabetes</li>
                                    <li>High Blood Pressure</li>
                                    <li>Heart Disease</li>
                                    <li>Family history of kidney disease</li>
                                </ul>
                            </section>

                            <p className="text-sm text-muted-foreground mt-8">This is a summary. Knowing your stage helps you and your doctor make the best treatment plan. For full details, please refer to the complete guide or speak with a healthcare professional.</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};
