
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

const RecurrentUTIsPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Another UTI? Understanding Why They Keep Happening and What to Do</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>A urinary tract infection (UTI) is uncomfortable and disruptive, but getting them over and over again can be incredibly frustrating. If you've found yourself dealing with two or more UTIs in the last six months, or three or more in a year, you may have what doctors call recurrent UTIs.</p>
                        <p>This isn't just a case of bad luck; it's often a sign that there's an underlying reason why you are more susceptible. Let's explore why this happens and what you can do to break the cycle.</p>
                    </div>

                    <InfoCard title="Where Can a UTI Happen?">
                        <p>A UTI can affect different parts of your urinary system:</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Bladder Infection (Cystitis):</strong> This is the most common type of UTI. It's what causes that classic burning feeling when you urinate, a constant need to go to the bathroom, and cloudy or strong-smelling urine.</li>
                           <li><strong>Kidney Infection (Pyelonephritis):</strong> This is a more serious infection that occurs if bacteria travel from the bladder up to the kidneys. Symptoms can include fever, chills, and pain in your lower back or side. A kidney infection requires immediate medical attention.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="Why Do UTIs Keep Coming Back?">
                        <p>There are several common reasons why UTIs might recur:</p>
                        <ul className="list-disc pl-6 space-y-3">
                           <li><strong>Incomplete Treatment:</strong> If you don't finish your full course of antibiotics from a previous infection, some of the stronger bacteria can survive and multiply, leading to another infection down the road.</li>
                           <li><strong>Stubborn Bacteria:</strong> Some bacteria, like E. coli, are very clever. They can attach to the lining of the bladder and create a protective shield (called a biofilm) around themselves, which makes them resistant to antibiotics.</li>
                           <li><strong>Your Body's Structure:</strong> Sometimes, physical issues within the urinary tract—like kidney stones, a blockage, or other anatomical differences—can make it easier for bacteria to get trapped and grow.</li>
                           <li><strong>Sexual Activity:</strong> For women especially, sexual intercourse can sometimes push bacteria from the surrounding area into the urethra, increasing the risk of a UTI.</li>
                           <li><strong>Hormonal Changes:</strong> Life stages that involve hormonal shifts, such as menopause, can change the environment of the urinary tract and make it more vulnerable to infections.</li>
                        </ul>
                    </InfoCard>
                    
                    <InfoCard title="Common Symptoms of a UTI">
                        <p>If a UTI has returned, you will likely recognise these familiar, uncomfortable signs:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>A strong, persistent urge to urinate.</li>
                            <li>A burning, stinging, or painful sensation when you pee.</li>
                            <li>Needing to urinate very frequently, but often only passing small amounts.</li>
                            <li>Urine that appears cloudy or has a strong, unpleasant odour.</li>
                            <li>Urine that looks pink, red, or brownish (a sign of blood).</li>
                            <li>For a kidney infection, you may also have a fever, chills, and back pain.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="Getting the Right Diagnosis and Treatment">
                        <p>To stop the cycle of recurrent UTIs, it's crucial to understand the root cause. Your doctor will likely:</p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Perform a Urine Culture:</strong> This is the most important step. This test not only confirms you have an infection but, more importantly, it identifies the exact type of bacteria causing it. This helps your doctor choose the most effective antibiotic to fight it.</li>
                            <li><strong>Discuss Your Medical History:</strong> They will ask about your symptoms, how many UTIs you've had, and other health factors.</li>
                            <li><strong>Consider Further Investigation:</strong> If infections keep coming back, your doctor may recommend an ultrasound or other imaging scan to check the structure of your kidneys and bladder for any issues like stones or blockages.</li>
                        </ul>
                        <p>The primary treatment for a UTI is a course of antibiotics. It is absolutely essential that you take the full prescription exactly as your doctor directs, even if you start to feel better after a day or two.</p>
                    </InfoCard>

                    <InfoCard title="Breaking the Cycle: Tips for Prevention">
                         <p>While treatment is for an active infection, prevention is key to stopping the next one.</p>
                        <ul className="list-disc pl-6 space-y-3">
                           <li><strong>Stay Well-Hydrated:</strong> Drink plenty of water throughout the day. This helps dilute your urine and ensures you are urinating regularly, which flushes bacteria out of your system.</li>
                           <li><strong>Practice Good Hygiene:</strong> After using the toilet, always wipe from front to back. This helps prevent bacteria from the rectal area from spreading to the urethra.</li>
                           <li><strong>Urinate After Sex:</strong> Peeing soon after intercourse can help wash away any bacteria that may have been pushed into the urethra.</li>
                           <li><strong>Don't "Hold It":</strong> Go to the bathroom as soon as you feel the urge. Holding urine for long periods gives bacteria more time to multiply in your bladder.</li>
                           <li><strong>Talk to Your Doctor:</strong> If you are struggling with very frequent UTIs, speak to your doctor about long-term prevention strategies. In some cases, they may recommend a low-dose antibiotic for a period of time or other preventive treatments.</li>
                        </ul>
                    </InfoCard>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Frequently Asked Questions (FAQs)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Are recurrent UTIs dangerous?</AccordionTrigger>
                                    <AccordionContent>
                                    While a single, simple bladder infection is usually not dangerous if treated promptly, recurrent infections can be. They can be a sign of an underlying issue and, if left unmanaged, can sometimes lead to more serious kidney infections.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Why are women more likely to get UTIs?</AccordionTrigger>
                                    <AccordionContent>
                                    Women are much more prone to UTIs primarily due to their anatomy. A woman's urethra is shorter than a man's, which means bacteria have a shorter distance to travel to reach the bladder.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Can cranberry juice really help prevent UTIs?</AccordionTrigger>
                                    <AccordionContent>
                                    Some studies suggest that the active compounds in cranberries may help prevent bacteria from sticking to the bladder wall, which could reduce the risk of infection for some people. However, it is not a treatment for an active UTI. If you choose to try it for prevention, opt for pure, unsweetened cranberry juice or supplements.
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

export default RecurrentUTIsPage;
