
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

const SeeingRedPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Seeing Red? Why You Should Never Ignore Blood in Your Urine</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>It can be a shocking and scary sight—looking into the toilet and seeing a tinge of pink, red, or even brownish-coloured urine. This is known as hematuria, or simply, blood in your pee.</p>
                        <p>While your first reaction might be panic, it's important to stay calm but take it seriously. Blood in your urine is your body's way of sending you a signal that something isn't right. It could be something minor, or it could be the first warning sign of a more serious health issue.</p>
                        <p>Here are 10 common reasons why you might be seeing blood in your urine.</p>
                    </div>

                    <InfoCard title="10 Common Reasons for Blood in Urine">
                        <ol className="list-decimal pl-6 space-y-4">
                            <li>
                                <strong>Urinary Tract Infections (UTIs)</strong>
                                <p>This is one of the most common culprits. A UTI happens when bacteria get into your urinary tract, causing an infection and inflammation that can lead to bleeding. You might also experience other classic UTI symptoms, like a burning feeling when you urinate or the constant urge to go to the bathroom.</p>
                            </li>
                            <li>
                                <strong>Kidney or Bladder Stones</strong>
                                <p>Sometimes, minerals in your urine can crystallize and form hard "pebbles" known as stones. As these stones move around or try to pass out of your body, they can scrape the lining of your urinary tract, causing sharp pain and bleeding. In some cases, you might not feel any pain, and blood in the urine is the only clue you have.</p>
                            </li>
                            <li>
                                <strong>Enlarged Prostate</strong>
                                <p>This is a common issue for many older men. As the prostate gland gets bigger, it can press on the urethra (the tube that carries urine), affecting urine flow and sometimes causing bleeding. This condition is usually benign (not cancerous) and can be managed with medication.</p>
                            </li>
                             <li>
                                <strong>Kidney Diseases</strong>
                                <p>Certain diseases can cause inflammation in the kidneys' tiny filtering units, leading to blood leaking into the urine. This is often a silent problem, discovered only through a routine urine test. Catching it early is key to protecting your kidneys from further damage.</p>
                            </li>
                            <li>
                                <strong>An Early Warning Sign of Cancer</strong>
                                <p>While it's a less common cause, painless blood in the urine can be an early warning sign of cancer in the bladder, kidneys, or prostate. This is one of the most important reasons why you should never ignore this symptom, even if it only happens once. Early detection is critical for successful treatment.</p>
                            </li>
                            <li>
                                <strong>Vigorous Exercise</strong>
                                <p>Have you ever had a really intense workout? Sometimes, strenuous exercise like long-distance running can cause temporary bleeding in the urine. This is often harmless and usually resolves with rest. However, if it continues, it's important to see a doctor to rule out other causes.</p>
                            </li>
                            <li>
                                <strong>Inherited Disorders</strong>
                                <p>Certain genetic conditions that run in families, like sickle cell disease or Alport syndrome, can affect the kidneys and lead to blood in the urine. These conditions often require regular monitoring by a doctor.</p>
                            </li>
                            <li>
                                <strong>A Side Effect of Medication</strong>
                                <p>Some common medications, especially blood thinners like aspirin or certain antibiotics, can cause bleeding in the urinary tract as a side effect. If you notice blood in your urine and you've recently started a new medication, let your doctor know right away.</p>
                            </li>
                             <li>
                                <strong>Injury or Trauma</strong>
                                <p>A direct blow to your back or abdomen from a fall or accident can injure your kidneys or bladder, causing internal bleeding that shows up in your urine.</p>
                            </li>
                             <li>
                                <strong>Side Effects of Cancer Treatment</strong>
                                <p>For patients undergoing cancer treatment, radiation or certain chemotherapy drugs can sometimes irritate the bladder lining and cause it to bleed. This is a known side effect, and your oncology team should be informed immediately if it occurs.</p>
                            </li>
                        </ol>
                    </InfoCard>

                    <InfoCard title="The Bottom Line: Don't Wait and See">
                        <p>Seeing blood in your urine—even just once, and even if you have no pain—is your body's clear signal to see a doctor. While the cause may be harmless, you can't know for sure without a proper diagnosis.</p>
                        <p>Don't try to guess the cause or wait for it to go away on its own. Making an appointment with a healthcare professional is the only way to find out what's really going on and get the right treatment.</p>
                    </InfoCard>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Frequently Asked Questions (FAQs)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Can stress cause blood in my urine?</AccordionTrigger>
                                    <AccordionContent>
                                    Stress itself doesn't directly cause bleeding. However, it can sometimes worsen existing bladder conditions which may lead to blood in the urine.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Is the blood always visible to the naked eye?</AccordionTrigger>
                                    <AccordionContent>
                                    No. Sometimes, the amount of blood is so small it can only be detected with a microscope during a lab test. This is another reason why regular health check-ups are so important.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Does blood in the urine automatically mean I have kidney failure?</AccordionTrigger>
                                    <AccordionContent>
                                    Not at all. While it can be a symptom of a kidney problem, it does not automatically mean your kidneys are failing. There are many other possible causes. A proper diagnosis is key.
                                    </AccordionContent>
                                </AccordionItem>
                                 <AccordionItem value="item-4">
                                    <AccordionTrigger>Should I go to the emergency room?</AccordionTrigger>
                                    <AccordionContent>
                                    If the bleeding is heavy, if you are passing blood clots, or if it is accompanied by severe pain, a high fever, or an inability to urinate, then yes, you should go to the emergency room immediately.
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

export default SeeingRedPage;
