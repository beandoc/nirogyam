
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <Card className="mb-8">
        <CardHeader>
            <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="prose lg:prose-xl max-w-none text-foreground/90 space-y-4">
                {children}
            </div>
        </CardContent>
    </Card>
);

const CreatinineExplainedPage = () => {
    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <Button asChild variant="outline" className="mb-8">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">What is Creatinine? The Simple Blood Test That Reveals Your Kidney Health</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                         <p>Many people living with kidney problems often ask their doctors, "Isn't there a magic pill you can give me to make my kidneys strong again?"</p>
                        <p>Unfortunately, the reality is that once significant kidney function is lost, it's very difficult to get back. There are no miracle cures, which is why advanced treatments like dialysis and kidney transplantation exist.</p>
                        <p>However, there is a very powerful tool for prevention and early detection. It's a simple blood test that measures your creatinine level. Understanding this one number can tell you a huge amount about how well your kidneys are working.</p>
                    </div>

                    <InfoCard title="Your Kidney's Report Card: Understanding Creatinine">
                        <p>Think of it this way:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Your muscles are constantly working, and in the process, they naturally create a waste product called creatinine.</li>
                            <li>It's the job of your healthy kidneys to act like a cleaning crew, constantly filtering this creatinine waste out of your blood and removing it through your urine.</li>
                            <li>Because this process is very steady, the level of creatinine in your blood should remain stable and low.</li>
                        </ul>
                        <p>When your kidneys are damaged and aren't filtering properly, they can't remove the creatinine as efficiently. As a result, the level of this waste product starts to rise in your blood. Therefore, a higher creatinine level is a red flag that your kidneys are not working at their full capacity.</p>
                        <p className="font-semibold">Normal creatinine levels can vary from person to person. For example, a muscular young man will naturally have a higher level than an elderly woman with less muscle mass. Your lab report will show the normal reference range.</p>
                    </InfoCard>

                    <InfoCard title="The Shocking Truth About Creatinine Numbers">
                        <p>Here is what many people don't realise about kidney disease and why it's called a "silent killer":</p>
                        <p>By the time your creatinine level is even slightly above the normal range, a significant amount of kidney function may already be gone.</p>
                         <ul className="list-disc pl-6 space-y-2">
                            <li>For example, a creatinine level of just <strong>1.5 mg/dl</strong> might mean you have already lost about <strong>50%</strong> of your total kidney function.</li>
                            <li>A level of <strong>5.0 mg/dl</strong> could mean a staggering <strong>85%</strong> of kidney function has been lost.</li>
                        </ul>
                        <p>This is why you can lose a huge amount of kidney function without feeling any symptoms at all. Catching a rising creatinine level at its earliest stage is your best opportunity to work with a doctor to slow down any further damage.</p>
                    </InfoCard>

                    <InfoCard title="A Simple Test for Peace of Mind: Who Should Get Checked?">
                        <p>You should talk to your doctor about checking your creatinine level with a simple blood test (no fasting is required) if you:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Are over the age of 40.</li>
                            <li>Have diabetes or high blood pressure.</li>
                            <li>Are overweight or obese.</li>
                            <li>Have any form of heart disease.</li>
                            <li>Have a family member with kidney disease.</li>
                            <li>Have a history of kidney stones.</li>
                            <li>Regularly take painkillers.</li>
                            <li>Are experiencing symptoms like swelling, constant fatigue, poor appetite, or changes in urination.</li>
                        </ul>
                    </InfoCard>
                    
                    <InfoCard title="No Magic Pill, Just Smart Prevention">
                        <p>It is crucial to understand that there is no pill or special remedy—in any system of medicine—that can just "bring down" a high creatinine level. A high level is a symptom of kidney damage, not the cause itself. The only way to manage your creatinine is to manage the underlying health of your kidneys.</p>
                        <p>Prevention and early detection are truly the best cures. Don't wait for symptoms to appear. Be proactive, get to know your numbers, and talk to your doctor. A simple creatinine test today can give you the vital information you need to protect your kidneys for a lifetime.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default CreatinineExplainedPage;
