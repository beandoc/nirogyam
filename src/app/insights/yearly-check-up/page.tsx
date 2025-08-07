
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

const YearlyCheckupPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">The Silent Worker: Why Your Kidneys Need a Yearly Check-Up</h1>

                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>Your kidneys are like the silent, hardworking staff of your body. They operate 24/7 in the background, cleaning toxins from your blood, managing your blood pressure, and keeping your body's fluids perfectly balanced.</p>
                        <p>But here's the catch: kidneys rarely complain. Problems can develop for years without causing any pain or obvious signs. That's why a simple, yearly kidney health check is one of the smartest things you can do for your long-term well-being. It helps you listen in on these silent workers and catch issues before they grow into serious problems.</p>
                    </div>

                    <InfoCard title="Why 'Feeling Fine' Can Be a Trap">
                        <p>It’s easy to think everything is okay when you feel energetic and healthy. However, kidney damage is sneaky. It often progresses so slowly that you don't feel a thing. Health issues common in India, like high blood pressure and diabetes, can silently harm the kidneys year after year.</p>
                        <p>Think of a regular check-up as a "performance review" for your kidneys. It allows your doctor to spot subtle changes over time and take action to protect them from future damage.</p>
                    </InfoCard>

                    <InfoCard title="What's in a Kidney Check-Up? (It's Easy!)">
                        <p>Worried that a kidney evaluation is complicated or invasive? It's not! A standard check-up is typically very simple and fast. It includes:</p>
                         <ul className="list-disc pl-6">
                            <li><strong>A Quick Blood Test:</strong> This checks how efficiently your kidney "filters" are cleaning your blood.</li>
                            <li><strong>A Simple Urine Test:</strong> This looks for tiny clues of damage, like protein leaking into your urine, which shouldn't be there.</li>
                            <li><strong>A Blood Pressure Check:</strong> High blood pressure is a top enemy of the kidneys, so checking it is essential.</li>
                        </ul>
                        <p>These routine tests give your doctor a powerful snapshot of your kidney health, helping them guide you long before any symptoms would have appeared.</p>
                    </InfoCard>

                    <InfoCard title="Early Detection Puts YOU in the Driver's Seat">
                       <p>The best part about catching a potential issue early? You gain the power to do something about it!</p>
                       <p>Finding a problem in its early stages means you can slow or even stop further damage with simple, effective steps. This could be as easy as making small changes to your diet, starting a gentle exercise routine, or getting better control over your blood sugar. Modern medicine is most effective when problems are found early.</p>
                    </InfoCard>

                    <InfoCard title="When Should You Start Getting Tested?">
                        <p>This is a great question, and the answer depends on your overall health.</p>
                        <ul className="list-disc pl-6">
                           <li><strong>For generally healthy adults:</strong> It's a wise move to start adding a kidney check to your annual health screening around age 40.</li>
                           <li><strong>For those with risk factors:</strong> If you have diabetes, high blood pressure, a family history of kidney disease, or are overweight, you should start much earlier. Talk to your doctor about yearly or even twice-yearly tests, possibly starting in your 30s.</li>
                        </ul>
                    </InfoCard>
                    
                    <InfoCard title="Healthy Kidneys = A Healthy Body">
                        <p>Your kidneys' job goes way beyond just making urine. They help keep your bones strong, produce hormones that regulate blood pressure, and play a role in making red blood cells that give you energy.</p>
                        <p>When kidney function declines, it can increase your risk of heart problems, brittle bones, and constant tiredness (anaemia). In short, taking care of your kidneys is a crucial part of taking care of your entire body.</p>
                    </InfoCard>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Frequently Asked Questions (FAQs)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Which foods are good for my kidneys?</AccordionTrigger>
                                    <AccordionContent>
                                    Focus on fresh and natural foods! Colourful fruits, leafy green vegetables, berries, and lean protein are excellent choices. Using healthy fats like olive oil and, most importantly, staying hydrated with plain water is key.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Is it possible to drink too much water?</AccordionTrigger>
                                    <AccordionContent>
                                    Believe it or not, yes. Gulping down huge amounts of water all at once can be stressful for your kidneys. It's much better to sip water consistently throughout the day to stay hydrated.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Are those at-home kidney test kits any good?</AccordionTrigger>
                                    <AccordionContent>
                                    Home kits can sometimes give you a basic hint that something is wrong (like finding protein in your urine), but they are not a substitute for a doctor's diagnosis. If a home test shows a potential problem, you must see a doctor for proper blood and urine tests to get an accurate picture.
                                    </AccordionContent>
                                </AccordionItem>
                                 <AccordionItem value="item-4">
                                    <AccordionTrigger>Is peeing a lot always a sign of kidney trouble?</AccordionTrigger>
                                    <AccordionContent>
                                    Not necessarily. It could simply be due to drinking a lot of fluids or caffeine. However, if it's happening all the time and you have other symptoms like swelling in your feet or feeling extra tired, it’s definitely a good reason to get your kidneys checked.
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

export default YearlyCheckupPage;
