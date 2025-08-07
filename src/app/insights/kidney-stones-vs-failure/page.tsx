
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


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

const KidneyStonesVsFailurePage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Kidney Stones vs. Kidney Failure: They're Not the Same!</h1>

                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>Have you ever heard someone mention they have "kidney trouble"? It's a common phrase, but it can mean very different things. Two of the most common issues—kidney stones and kidney failure—often get mixed up.</p>
                        <p>Think of it this way: a kidney stone is like getting a painful pebble stuck in a pipe, while kidney failure is like the entire plumbing system slowly breaking down. Both affect your kidneys, but they are worlds apart in how they start, feel, and are treated. Let's clear up the confusion so you can feel more confident about your health.</p>
                    </div>

                    <InfoCard title="What Are Kidney Stones? 🪨">
                        <p>Imagine tiny, hard pebbles forming inside your kidneys. That's exactly what kidney stones are! They are created when your urine has too many minerals, like calcium or uric acid, which then clump together.</p>
                        <p>These "pebbles" can be as small as a grain of sand or much larger. As they travel through your urinary tract, they can cause some major discomfort.</p>
                        <h3 className="text-xl font-semibold text-foreground">Signs You Might Have a Kidney Stone:</h3>
                        <ul className="list-disc pl-6">
                            <li>A sudden, sharp, and intense pain in your side or back.</li>
                            <li>Pain or a burning feeling when you pee.</li>
                            <li>Seeing pink, red, or brown in your urine (a sign of blood).</li>
                            <li>Feeling like you need to pee all the time.</li>
                            <li>Feeling sick to your stomach or throwing up.</li>
                        </ul>
                        <p>The good news? Many small stones pass out of the body on their own (ouch!). Larger ones might need a little help from a doctor with treatments to break them up or remove them.</p>
                    </InfoCard>

                    <InfoCard title="What is Kidney Failure? 😟">
                        <p>Kidney failure is a completely different and much more serious condition. Think of your kidneys as your body's master filters, working 24/7 to clean your blood. Kidney failure means these filters are damaged and can no longer do their job of removing waste and extra fluid.</p>
                        <p>This problem can happen quickly (acute kidney failure) or, more commonly, develop slowly over many years (chronic kidney disease), eventually leading to failure. Because it's often silent in the beginning, many people don't know they have it.</p>
                        <h3 className="text-xl font-semibold text-foreground">Early Warning Signs of Kidney Failure:</h3>
                         <ul className="list-disc pl-6">
                            <li>Puffy swelling in your legs, ankles, or even your face.</li>
                            <li>Feeling tired and weak all the time.</li>
                            <li>Peeing less than usual.</li>
                            <li>Feeling short of breath.</li>
                            <li>Brain fog or trouble focusing.</li>
                        </ul>
                        <p>If kidney failure isn't managed, it can lead to needing dialysis (a machine cleaning your blood) or a kidney transplant.</p>
                    </InfoCard>

                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Quick Comparison: Stones vs. Failure</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Feature</TableHead>
                                        <TableHead>Kidney Stones</TableHead>
                                        <TableHead>Kidney Failure</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">The Problem</TableCell>
                                        <TableCell>Solid "pebbles" blocking the urinary tract.</TableCell>
                                        <TableCell>Kidneys lose their ability to filter blood.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">The Feeling</TableCell>
                                        <TableCell>Usually causes sudden, severe pain.</TableCell>
                                        <TableCell>Often has no symptoms in early stages.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Seriousness</TableCell>
                                        <TableCell>Painful but typically treatable.</TableCell>
                                        <TableCell>A serious, long-term condition needing lifelong management.</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <p className="text-sm text-muted-foreground mt-4">The biggest takeaway? A kidney stone will likely scream for your attention with pain. Kidney failure is often a silent problem that you might not feel until serious damage is already done. This is why awareness is so important!</p>
                        </CardContent>
                    </Card>

                    <InfoCard title="What Causes These Conditions?">
                        <h3 className="text-xl font-semibold text-foreground">Common Causes of Kidney Stones:</h3>
                        <ul className="list-disc pl-6">
                           <li>Not drinking enough water.</li>
                           <li>A diet with too much salt, sugar, or animal protein.</li>
                           <li>Being overweight.</li>
                           <li>Having a family member who gets them.</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-foreground mt-6">Common Causes of Kidney Failure:</h3>
                        <ul className="list-disc pl-6">
                           <li>Diabetes and High Blood Pressure are the top two causes! Over many years, they damage the kidney's delicate filters.</li>
                           <li>Kidney infections that keep coming back.</li>
                           <li>Certain genetic conditions.</li>
                        </ul>
                    </InfoCard>
                    
                    <InfoCard title="How to Protect Your Kidneys (Prevention is Key!) ✅">
                        <p>The best news is that you have the power to keep your kidneys healthy! Simple lifestyle changes can make a huge difference in preventing both stones and failure.</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Drink Up!</strong> Water is your kidney's best friend. Aim for 2-3 litres a day.</li>
                            <li><strong>Cut Back on Salt</strong> and processed junk food.</li>
                            <li><strong>Keep Blood Sugar and Blood pressure in Check.</strong> If you have diabetes or hypertension, managing them is the #1 thing you can do for your kidneys.</li>
                            <li><strong>Be Smart About Painkillers.</strong> Overusing certain over-the-counter pain meds can harm your kidneys over time.</li>
                            <li><strong>Get Regular Check-ups.</strong> Simple blood and urine tests can tell you how well your kidneys are working. Don't wait for symptoms!</li>
                        </ul>
                    </InfoCard>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Frequently Asked Questions (FAQs)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Can stress cause kidney problems?</AccordionTrigger>
                                    <AccordionContent>
                                    Stress alone doesn't directly cause kidney disease. However, long-term stress can lead to high blood pressure, which is a major enemy of your kidneys.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Can I have both kidney stones and kidney failure?</AccordionTrigger>
                                    <AccordionContent>
                                    It's possible. In some cases, very large or untreated kidney stones can cause blockages and infections that lead to permanent kidney damage over time.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>What kind of diet is needed for kidney failure?</AccordionTrigger>
                                    <AccordionContent>
                                    Managing kidney failure often requires a special "kidney-friendly" diet that is low in salt, potassium, and protein. This is not a do-it-yourself plan. A doctor and a dietitian will create a diet that is specifically tailored to your health needs.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default KidneyStonesVsFailurePage;

