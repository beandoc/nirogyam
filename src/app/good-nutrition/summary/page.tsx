
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const GoodNutritionSummaryPage = () => {

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
                            <Link href="/good-nutrition">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Full Guide
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">Save as PDF</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">Good Nutrition Quick Guide</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section>
                                <h3 className="font-bold text-primary">Why Good Nutrition Matters</h3>
                                <p>A balanced diet gives your body the energy and nutrients it needs to function correctly, build muscle, repair tissues, and prevent chronic diseases like diabetes, heart disease, and kidney disease.</p>
                            </section>
                            
                            <section>
                                <h3 className="font-bold text-primary">Four Pillars of a Healthy Diet</h3>
                                <ul>
                                    <li><strong>Eat a Variety:</strong> Get nutrients from all food groups.</li>
                                    <li><strong>Limit Unhealthy Stuff:</strong> Cut back on salt, sugar, and unhealthy fats.</li>
                                    <li><strong>Read Labels:</strong> Make informed choices when you shop.</li>
                                    <li><strong>Stay Active:</strong> Combine a healthy diet with regular physical activity for the best results.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />Be Cautious with Supplements</h3>
                                <p>Most people get all the vitamins they need from food. Always talk to your doctor before taking any vitamin or herbal supplements, as some can be harmful or interfere with your medications.</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">Simple Tips for Kidney Health</h3>
                                <ul>
                                    <li>Control blood pressure and blood sugar.</li>
                                    <li>Avoid overusing painkillers.</li>
                                    <li>Eat a diet low in salt and processed foods.</li>
                                    <li>Get your urine tested for protein regularly if you are at risk.</li>
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

export default GoodNutritionSummaryPage;

    