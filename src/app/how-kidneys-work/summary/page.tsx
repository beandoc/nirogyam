
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const HowKidneysWorkSummaryPage = () => {

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
                            <Link href="/how-kidneys-work">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Full Guide
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">Save as PDF</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">How Kidneys Work: Quick Guide</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section>
                                <h3 className="font-bold text-primary">The Main Job: Filtering</h3>
                                <p>Your kidneys are your body's master cleaners. Their primary role is to filter about half a cup of blood every minute, removing waste products and excess water to create urine.</p>
                            </section>
                            
                            <section>
                                <h3 className="font-bold text-primary">Three Crucial Functions</h3>
                                <ul>
                                    <li><strong>Remove Waste:</strong> They filter out wastes like creatinine and urea, and balance important minerals like sodium, potassium, and calcium.</li>
                                    <li><strong>Regulate Water:</strong> They maintain the perfect amount of water in your body by removing excess or retaining it when needed.</li>
                                    <li><strong>Produce Hormones:</strong> They create essential hormones that help control your blood pressure, make red blood cells (to prevent fatigue), and keep your bones strong.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">Inside the Kidney</h3>
                                <p>Each kidney contains over a million tiny filtering units called nephrons. These nephrons do the hard work of separating waste from the blood, which then becomes urine.</p>
                            </section>

                            <p className="text-sm text-muted-foreground mt-8">This is a summary. For full details, please refer to the complete guide or speak with a healthcare professional.</p>

                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default HowKidneysWorkSummaryPage;

    