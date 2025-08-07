
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

const KidneyFailureExplainedPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">When Kidneys Stop Working: A Simple Guide to Kidney Failure</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>When you hear the term "kidney failure," it can sound very frightening. It's a serious condition, but understanding what it means is the first step toward managing it and protecting your health.</p>
                        <p>This guide will break down the basics of kidney failure in simple terms—what it is, what causes it, and what can be done about it.</p>
                    </div>

                    <InfoCard title="What is Kidney Failure?">
                        <p>Think of your kidneys as your body's master cleaning crew. Their main job is to filter your blood, removing waste products and extra fluid, which then leave your body as urine.</p>
                        <p>Kidney failure is what happens when this cleaning system breaks down. The kidneys lose their ability to filter properly, causing dangerous levels of waste and fluid to build up in your body. This condition is usually the final stage of a long process of kidney damage, often caused by common health issues like diabetes and high blood pressure.</p>
                    </InfoCard>

                    <InfoCard title="The Two Main Types of Kidney Failure">
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">1. Sudden (Acute) Kidney Failure</h3>
                            <p>This is when your kidneys stop working very suddenly, over just a few hours or days. It's often caused by a specific event and can sometimes be reversed if treated quickly.</p>
                            <p><strong>Common Causes:</strong> A severe infection in the body, major dehydration, a serious injury, or a blockage in the urinary tract (like a very large kidney stone).</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mt-4">2. Gradual (Chronic) Kidney Failure</h3>
                            <p>This is the more common type. It's a slow, silent loss of kidney function over many months or years. You often don't feel sick until the damage is quite advanced.</p>
                            <p><strong>Common Causes:</strong></p>
                            <ul className="list-disc pl-6">
                                <li><strong>Diabetes:</strong> High blood sugar slowly damages the kidney's tiny filters.</li>
                                <li><strong>High Blood Pressure:</strong> The constant force of high BP wears out the kidney's delicate blood vessels.</li>
                                <li><strong>Genetic Conditions:</strong> Diseases like Polycystic Kidney Disease (PKD) can cause kidney failure.</li>
                                <li><strong>Long-term Infections or Blockages.</strong></li>
                            </ul>
                            <p>The final, most severe stage of chronic kidney failure is called End-Stage Renal Disease (ESRD).</p>
                        </div>
                    </InfoCard>
                    
                    <InfoCard title="What are the Symptoms to Watch For?">
                        <p>As kidney function declines, you might start to notice these signs:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Swelling (soojan):</strong> Puffy swelling in your legs, ankles, feet, or even your face.</li>
                            <li><strong>Changes in Urination:</strong> Peeing much less than usual, or sometimes, needing to pee more often, especially at night. Your urine might also look foamy or bubbly.</li>
                            <li><strong>Constant Tiredness:</strong> Feeling exhausted and weak all the time, with no energy.</li>
                            <li><strong>Feeling Sick:</strong> Nausea, vomiting, and a loss of appetite are common.</li>
                            <li><strong>Shortness of Breath:</strong> Caused by fluid building up in the lungs.</li>
                            <li><strong>Brain Fog:</strong> Difficulty concentrating or feeling confused.</li>
                        </ul>
                    </InfoCard>
                    
                    <InfoCard title="How Do Doctors Diagnose Kidney Failure?">
                        <p>If your doctor suspects a problem, they will use a few simple steps to find out what's going on:</p>
                         <ul className="list-disc pl-6">
                            <li><strong>A Health Chat and Physical Check:</strong> Your doctor will ask about your symptoms, your family's health history, and any medications you take. They will also check for physical signs like high blood pressure and swelling.</li>
                            <li><strong>Simple Blood and Urine Tests:</strong> These are the most important tools. A blood test checks for waste products (like creatinine) to see how well your kidneys are filtering. A urine test looks for things that shouldn't be there, like protein.</li>
                            <li><strong>An Imaging Scan:</strong> An ultrasound (similar to the one used during pregnancy) creates a picture of your kidneys to check for any blockages or abnormalities.</li>
                            <li><strong>A Kidney Biopsy (in some cases):</strong> If the cause is unclear, a doctor may need to take a tiny sample of your kidney tissue to examine under a microscope. This is not a routine test.</li>
                        </ul>
                    </InfoCard>
                    
                    <InfoCard title="What are the Treatment Options?">
                        <p>Treatment depends on whether the failure is sudden or gradual.</p>
                        <h3 className="text-xl font-semibold text-foreground">For Sudden (Acute) Failure:</h3>
                        <p>The main goal is to fix the underlying problem quickly—for example, by giving IV fluids for dehydration or treating the infection that caused it.</p>
                        <h3 className="text-xl font-semibold text-foreground mt-4">For Gradual (Chronic) Failure:</h3>
                        <p>Since the damage is often permanent, the focus is on slowing down the disease and managing your health. This includes:</p>
                        <ul className="list-disc pl-6">
                           <li><strong>Lifestyle Changes:</strong> This is your first line of defence! It includes a special kidney-friendly diet (often low in salt, potassium, and phosphorus), regular exercise, and maintaining a healthy weight.</li>
                           <li><strong>Medications:</strong> To control blood pressure, manage blood sugar, treat anaemia (low blood count), and balance minerals in your body.</li>
                           <li><strong>Dialysis:</strong> When your kidneys can no longer clean your blood effectively, a machine has to do the job for them. This life-saving treatment is called dialysis.</li>
                           <li><strong>Kidney Transplant:</strong> For many patients, the best long-term option is a kidney transplant, where a healthy kidney from a donor is surgically placed in your body to take over the work of your failed kidneys.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="How to Protect Your Kidneys and Reduce Your Risk">
                        <p>Prevention is always better than cure. You can take these steps to keep your kidneys healthy:</p>
                        <ul className="list-disc pl-6">
                           <li>Control Blood Pressure and Blood Sugar: This is the most important step if you have hypertension or diabetes.</li>
                           <li>Eat a Healthy Diet: Focus on fresh, home-cooked food. Cut back on salt and processed/packaged foods.</li>
                           <li>Stay Hydrated: Drink enough water throughout the day.</li>
                           <li>Maintain a Healthy Weight.</li>
                           <li>Don't Smoke.</li>
                           <li>Be Careful with Painkillers: Avoid overusing common pain relievers.</li>
                           <li>Get Yearly Check-ups: If you have risk factors, get your kidney function checked annually.</li>
                        </ul>
                    </InfoCard>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Frequently Asked Questions (FAQs)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Can kidney failure be reversed?</AccordionTrigger>
                                    <AccordionContent>
                                    Sudden (acute) kidney failure can often be reversed if the cause is treated quickly. However, damage from gradual (chronic) kidney failure is usually permanent. Treatment can slow down the disease and help you feel better, but it cannot cure it.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Is kidney failure always painful?</AccordionTrigger>
                                    <AccordionContent>
                                    Not always. The kidneys themselves don't often hurt. The discomfort usually comes from complications, like swelling or other body issues.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Can dehydration cause kidney failure?</AccordionTrigger>
                                    <AccordionContent>
                                    Yes, severe and prolonged dehydration can cause sudden (acute) kidney failure. It's important to stay well-hydrated.
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

export default KidneyFailureExplainedPage;
