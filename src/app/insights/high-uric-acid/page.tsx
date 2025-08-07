
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

const HighUricAcidPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">That Pain in Your Joint? It Could Be High Uric Acid</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>Have you ever woken up with a sudden, fiery pain in your big toe, ankle, or knee? It can be a shocking and painful experience. This could be a sign of high uric acid, a common but often misunderstood health issue that quietly builds up in the body.</p>
                        <p>High uric acid isn't just a number on a lab report; if left unchecked, it can lead to intensely painful conditions like gout and even affect your kidneys. The good news is that with the right knowledge and a proactive approach, you can manage it effectively. Let's break down what high uric acid is and how you can take charge of your health.</p>
                    </div>

                    <InfoCard title="What Exactly is High Uric Acid?">
                        <p>Think of your body's waste disposal system. Uric acid is a normal waste product that your body creates from breaking down substances called 'purines' found in certain foods. Normally, your kidneys act like a highly efficient cleaning crew, filtering this uric acid out of your blood and sending it out of your body through urine.</p>
                        <p>High uric acid (or hyperuricemia) is what happens when this system goes wrong in one of two ways:</p>
                        <ul className="list-disc pl-6">
                            <li>Your body produces too much uric acid.</li>
                            <li>Your kidneys can't get rid of it fast enough.</li>
                        </ul>
                        <p>When this excess uric acid builds up, it can form tiny, sharp, needle-like crystals. These crystals can get deposited in your joints or tissues, leading to inflammation and severe pain.</p>
                    </InfoCard>

                    <InfoCard title="How High Uric Acid Can Affect Your Body">
                        <p>This condition is more than just a single issue; it can impact your health in several ways:</p>
                        <ul className="list-disc pl-6 space-y-3">
                           <li><strong>Gout:</strong> This is the most well-known problem. It's a type of arthritis caused by uric acid crystals forming in a joint (most famously the big toe). This leads to a sudden "gout attack" with excruciating pain, swelling, redness, and tenderness.</li>
                           <li><strong>Kidney Stones:</strong> The same crystals that cause gout can also clump together in your kidneys, forming painful kidney stones. This can cause severe pain in your back or side and problems with urination.</li>
                           <li><strong>Kidney Damage:</strong> Over a long period, consistently high levels of uric acid can put a strain on your kidneys, potentially leading to chronic kidney disease.</li>
                           <li><strong>Heart Health Risks:</strong> High uric acid is often found alongside other health conditions like high blood pressure, diabetes, and obesity. This combination, known as metabolic syndrome, increases the risk of heart disease and stroke.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="What Causes High Uric Acid?">
                        <p>Several factors can contribute to high uric acid levels:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Your Diet:</strong> A diet rich in high-purine foods is a major contributor. This includes red meat (like mutton), organ meats, some seafood (like shellfish), and alcoholic beverages, especially beer. Sugary drinks are also a known culprit.</li>
                            <li><strong>Your Weight:</strong> Being overweight or obese increases your risk significantly.</li>
                            <li><strong>Your Genes:</strong> Sometimes, it simply runs in the family.</li>
                            <li><strong>Other Health Conditions:</strong> Problems with your kidneys, high blood pressure, or diabetes can all play a role.</li>
                            <li><strong>Certain Medications:</strong> Some common medicines, like diuretics (water pills) used for high BP, can raise uric acid levels.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="What to Do About It: Diagnosis and Treatment">
                        <p>If you suspect you have high uric acid, it's important to see a doctor. Here’s what you can expect:</p>
                        <h3 className="font-semibold text-lg text-foreground mt-4">Diagnosis</h3>
                        <p>The main way to diagnose high uric acid is with a simple blood test. Your doctor might also test your urine or, if you have a swollen joint, they may take a tiny fluid sample to look for the tell-tale crystals under a microscope.</p>
                        <h3 className="font-semibold text-lg text-foreground mt-4">Lifestyle Changes (Your First and Most Important Step)</h3>
                        <ul className="list-disc pl-6">
                            <li><strong>Stay Hydrated:</strong> Drink plenty of water throughout the day to help your kidneys flush out uric acid.</li>
                            <li><strong>Adjust Your Diet:</strong> Limit high-purine foods like red meat and certain seafood. Cut back on alcohol and sugary drinks. Focus on eating more fruits, vegetables, and whole grains.</li>
                            <li><strong>Manage Your Weight:</strong> Even a small amount of weight loss can make a big difference.</li>
                        </ul>
                        <h3 className="font-semibold text-lg text-foreground mt-4">Medications</h3>
                        <p>If lifestyle changes aren't enough to control your levels, your doctor may prescribe medication. Some medicines work by reducing the amount of uric acid your body produces, while others help your kidneys get rid of it more effectively.</p>
                    </InfoCard>
                    
                    <InfoCard title="When Should You See a Doctor?">
                        <p>It's time to consult a healthcare provider if you experience:</p>
                        <ul className="list-disc pl-6">
                            <li>A sudden, severe, and unexplained pain in any of your joints.</li>
                            <li>A joint that is swollen, red, and warm to the touch.</li>
                            <li>Sharp, cramping pain in your back or side that could signal a kidney stone.</li>
                            <li>You have known risk factors (like a family history of gout) and want to get your levels checked.</li>
                        </ul>
                    </InfoCard>

                     <InfoCard title="A Final Thought">
                        <p>Studies have shown that high uric acid is often linked to a higher risk of heart and kidney problems. While it can be a "silent" condition at first, it's important to take it seriously. By understanding the causes, making smart lifestyle choices, and working with a healthcare professional, you can effectively manage your uric acid levels and protect your long-term health. Don't wait for the pain to become a problem—being proactive is the best medicine.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default HighUricAcidPage;
