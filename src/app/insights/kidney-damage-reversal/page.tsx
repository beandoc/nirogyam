
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

const KidneyDamageReversalPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Kidney Damage: Is It Possible to Turn Back the Clock?</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>If you or a loved one has been diagnosed with kidney disease, one of the first questions on your mind is likely: "Can this be fixed? Can my kidneys heal?"</p>
                        <p>It’s a hopeful and important question, and the answer is... it depends. The key to healing lies in how early the problem is caught. Let's explore what’s possible at different stages of kidney disease.</p>
                    </div>

                    <InfoCard title="Understanding the Stages of Kidney Disease (A Simple Guide)">
                        <p>Think of your kidney health like a five-story building. A special score, which doctors call the eGFR, tells them which "floor" of function your kidneys are on.</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Stages 1 & 2 (The Top Floors):</strong> Your kidneys are still working quite well (90% function or more), but there might be early signs of mild damage, like a tiny bit of protein leaking into your urine. At this stage, you almost certainly feel perfectly fine. This is the golden window for taking action!</li>
                           <li><strong>Stage 3 (The Middle Floor):</strong> The damage is now moderate, and your kidneys aren't filtering as well as they should be. This is often the point where people might start to notice symptoms like feeling tired, swelling in their feet, or having back pain.</li>
                           <li><strong>Stages 4 & 5 (The Ground Floors):</strong> The kidney damage is now severe. Your kidneys are struggling to do their job, and without medical support like dialysis or a transplant, your body can no longer clean itself effectively. Stage 5 is also known as End-Stage Renal Disease (ESRD).</li>
                        </ul>
                    </InfoCard>
                    
                    <InfoCard title="So, Can the Damage Be Reversed? Hope, Halt, and Help">
                        <p>The answer truly depends on which "floor" your kidneys are on.</p>
                        <h3 className="font-semibold text-xl mt-4">Early Stages (HOPE for Reversal)</h3>
                        <p>In the very early stages (Stage 1 and 2), if the damage is caused by something temporary like a severe infection, dehydration, or a particular medication, then YES, the damage can often be stopped and even reversed. By treating the root cause and getting conditions like diabetes and high blood pressure under excellent control, you can often help your kidneys return to normal function.</p>
                        
                        <h3 className="font-semibold text-xl mt-4">Middle Stage (HALT the Damage)</h3>
                        <p>In Stage 3, a complete reversal is usually not possible as the damage has become more permanent. However, the main goal here is to hit the brakes hard! With the right diet, medications, and lifestyle changes, you can often slow down or completely stop the disease from getting worse. This helps you preserve the kidney function you still have for many, many years.</p>

                        <h3 className="font-semibold text-xl mt-4">Late Stages (HELP is Needed)</h3>
                        <p>In the advanced stages (Stage 4 and 5), the damage is considered irreversible. The focus here shifts from healing the kidneys to getting help for your body. Medical treatments become necessary to do the job your kidneys can no longer perform. These include:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Dialysis:</strong> Using a machine to clean your blood.</li>
                            <li><strong>Kidney Transplant:</strong> Receiving a healthy kidney from a donor.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="Your Kidney Protection Toolkit: How to Slow a Decline">
                        <p>Even if the damage can't be fully reversed, you have a lot of power to protect your kidneys.</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Manage Your Health:</strong> Be a strict manager of your diabetes and high blood pressure. Keeping your blood sugar and BP numbers in a healthy range is the #1 rule.</li>
                           <li><strong>Eat for Your Kidneys:</strong> Cut back on salt, packaged foods, and red meat. Work with a doctor or dietitian to understand how much protein, potassium, and phosphorus is right for your specific stage.</li>
                           <li><strong>Be Smart with Medicines:</strong> Avoid overusing painkillers (like Ibuprofen or Diclofenac). Always tell your doctor about every single medication or herbal remedy you take.</li>
                           <li><strong>Quit Smoking & Limit Alcohol:</strong> These habits put extra stress on your kidneys and raise blood pressure.</li>
                           <li><strong>Get Regular Tests:</strong> Stay on top of your health with yearly kidney function tests (blood and urine), especially if you have risk factors.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="A Final Thought">
                       <p>While a complete "do-over" for your kidneys isn't always on the table, there is so much you can do. Early detection is everything. By being proactive, managing your health conditions, and working closely with your doctor, you can dramatically slow down the progression of kidney disease and live a full, healthy life.</p>
                    </InfoCard>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Frequently Asked Questions (FAQs)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Can drinking lots of water fix my kidneys?</AccordionTrigger>
                                    <AccordionContent>
                                    Staying properly hydrated is important for kidney health, but drinking excessive amounts of water will not reverse existing damage. In fact, in the late stages, your doctor may ask you to limit your fluid intake. Always follow your doctor's advice.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>What are the very first signs of kidney trouble?</AccordionTrigger>
                                    <AccordionContent>
                                    Often, there are no signs at all in the early stages! But some people might notice new swelling in their legs, foamy urine, or feeling unusually tired. This is why regular blood and urine tests are so crucial—they can spot a problem long before you can feel it.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Are Ayurvedic or herbal remedies safe for my kidneys?</AccordionTrigger>
                                    <AccordionContent>
                                    Please be very careful. Many herbal supplements and remedies can be harmful to kidneys, especially if they are already damaged. Never take any supplement, herb, or local remedy without asking your doctor first.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Does losing weight help my kidneys?</AccordionTrigger>
                                    <AccordionContent>
                                    Yes, definitely. Maintaining a healthy weight is one of the best ways to control diabetes and high blood pressure, which are the two biggest enemies of your kidneys.
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

export default KidneyDamageReversalPage;
