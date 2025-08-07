
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

const KidneyFunctionTestsExplainedPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Your Kidney Health Report Card: A Simple Guide to Kidney Function Tests</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>Your kidneys are two of the hardest-working organs in your body. They work 24/7, filtering waste, balancing fluids, and keeping your blood chemistry in check. But how can you know if they're doing their job properly?</p>
                        <p>The answer is a Kidney Function Test (KFT). Think of a KFT as a "report card" for your kidneys. It's a series of simple blood and urine tests that give you and your doctor a clear window into your kidney health. Understanding these tests can help you catch problems early and take steps to protect your kidneys for years to come.</p>
                        <p>Let's break down what doctors are looking for when they order a KFT.</p>
                    </div>

                    <InfoCard title="Check #1: How Well Are Your Kidneys Cleaning Your Blood? (The Filtration Check)">
                        <p>This is the most important question. Your doctor wants to know how efficiently your kidneys are filtering waste products out of your blood.</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Creatinine Test:</strong> Your muscles naturally produce a waste product called creatinine. It's the job of healthy kidneys to filter this waste out. If your kidney function is low, creatinine builds up in your blood. So, a high creatinine level is a red flag.</li>
                           <li><strong>eGFR (Estimated Glomerular Filtration Rate):</strong> This is your main "kidney score." It's a calculation based on your creatinine level, age, and gender. It estimates how well your kidneys are filtering. A high eGFR score is good (like getting an A+ on your report card), while a low eGFR score indicates reduced kidney function.</li>
                           <li><strong>Blood Urea Nitrogen (BUN):</strong> This is another waste product in your blood that healthy kidneys should remove. A high BUN level can also be a sign of a kidney problem.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="Check #2: Are Your Kidneys Leaking Anything They Shouldn't? (The Leakage Check)">
                         <p>Healthy kidney filters are very good at keeping important things, like protein, in your blood. When the filters are damaged, they can become "leaky."</p>
                         <p><strong>Urine Protein / Albumin Test (ACR):</strong> This simple urine test checks for tiny amounts of a protein called albumin in your urine. Finding protein in your urine is one of the earliest signs of kidney damage, often appearing long before you feel any symptoms. It's a crucial test, especially for people with diabetes or high blood pressure.</p>
                    </InfoCard>
                    
                    <InfoCard title="Check #3: What Do Your Kidneys Look Like? (The Picture Check)">
                        <p>Sometimes, your doctor needs to see what your kidneys look like to check for physical problems.</p>
                         <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Ultrasound:</strong> This is the most common imaging test. It's a painless and safe procedure that uses sound waves to create a picture of your kidneys. It can show their size and shape and check for things like kidney stones, cysts, or blockages.</li>
                           <li><strong>CT Scan or MRI:</strong> For a more detailed look, your doctor might order a CT scan or MRI if needed.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="Understanding Your KFT Results">
                        <p>It can be confusing to look at a lab report. Here’s a simple way to think about it:</p>
                         <ul className="list-disc pl-6 space-y-2">
                           <li><strong>For Blood Tests:</strong> Generally, you want the levels of waste products like Creatinine and BUN to be LOW. If these numbers are high, it suggests your kidneys aren't cleaning your blood well.</li>
                           <li><strong>For Your eGFR Score:</strong> You want your eGFR to be HIGH. A lower number means lower kidney function.</li>
                           <li><strong>For Urine Tests:</strong> You want the amount of Protein in your urine to be LOW or zero. Finding protein is a sign of leaky, damaged filters.</li>
                        </ul>
                    </InfoCard>
                    
                    <InfoCard title="'My KFT Results Are Abnormal. What Should I Do?'">
                        <p>Receiving an abnormal report can be worrying, but it's a call to action, not a reason to panic. Here are the steps to take:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Talk to Your Doctor:</strong> This is the most important step. Discuss your results, understand what they mean for you, and ask questions.</li>
                            <li><strong>Figure Out the "Why":</strong> Your doctor will work with you to find the underlying cause of the kidney issue. Most often, it's related to managing conditions like high blood pressure or diabetes.</li>
                            <li><strong>Make Healthy Lifestyle Changes:</strong> You have the power to protect your kidneys. Focus on:
                                <ul className="list-disc pl-8 mt-2 space-y-1">
                                    <li>A Kidney-Friendly Diet: The most important change is often reducing your salt intake to help control blood pressure.</li>
                                    <li>Staying Hydrated: Drink enough water throughout the day.</li>
                                    <li>Regular Exercise: A simple 30-minute walk most days can do wonders.</li>
                                    <li>Be Cautious with Painkillers: Avoid overusing certain pain medications (NSAIDs), as they can be hard on the kidneys.</li>
                                </ul>
                            </li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="A Final Thought">
                        <p>Kidney Function Tests are not something to be feared. They are invaluable tools that give you and your doctor the information you need to be proactive about your health. By understanding your "kidney report card," you can take the right steps to manage any issues early and keep your kidneys working well for a long, healthy life.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default KidneyFunctionTestsExplainedPage;
