
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

const ManagingWeightAndBpPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Tackling the Twin Threats: A Simple Guide to Managing Your Weight and Blood Pressure</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>In our fast-paced lives in India, it's easy to gain a few extra kilos. At the same time, many of us find ourselves dealing with high blood pressure (BP). Have you ever wondered if these two common issues are connected? The answer is a big YES.</p>
                        <p>Obesity (having too much body fat) and hypertension (high BP) are like two sides of the same coin. They are a growing health concern in our country, even affecting people in their 20s and 30s, largely due to modern urban lifestyles. Let's break down this connection and explore simple ways you can take charge of your health.</p>
                    </div>

                    <InfoCard title="The Heavy Connection: How Extra Kilos Raise Your Blood Pressure">
                        <p>How exactly does carrying extra weight affect your BP? It happens in a few key ways:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>More Work for Your Heart:</strong> Think of your heart as a water pump and your blood vessels as pipes. Extra body fat means your body has more tissue, which requires more "pipes" for the blood to travel through. Your heart has to pump harder to send blood everywhere, which increases the pressure in the pipes.</li>
                            <li><strong>Harmful Chemical Signals:</strong> Body fat isn't just inactive storage. It releases certain chemicals that can cause inflammation and interfere with your kidneys' ability to regulate blood pressure.</li>
                            <li><strong>Hormone Imbalance:</strong> Being overweight can also affect how your body handles sugar (a condition called insulin resistance), which can indirectly push your blood pressure even higher.</li>
                        </ul>
                        <p>This dangerous partnership is a major risk factor for serious health problems like heart attacks, strokes, and especially chronic kidney disease.</p>
                    </InfoCard>

                    <InfoCard title="What's Fuelling the Problem?">
                         <p>Many factors in our daily lives contribute to both weight gain and high BP. Do any of these sound familiar?</p>
                        <ul className="list-disc pl-6">
                           <li>A diet high in sugar, salt, and processed or fried foods.</li>
                           <li>Sitting for long hours at a desk for work or at home.</li>
                           <li>High levels of stress and not getting enough quality sleep.</li>
                           <li>Habits like smoking or frequent alcohol consumption.</li>
                           <li>Sometimes, it can simply run in the family.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="The Good News: You Can Take Control Naturally!">
                        <p>The best part is that you can manage both conditions with small, consistent lifestyle changes. No extreme diets needed!</p>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li>
                                <strong>Eat Smart, Not Less</strong>
                                <p>Focus on a balanced, home-cooked thali.</p>
                                <ul className="list-disc pl-6">
                                    <li>Fill half your plate with colourful vegetables and salads.</li>
                                    <li>Choose whole grains like whole wheat roti and brown rice over refined ones.</li>
                                    <li>Include lean proteins like dal, beans, paneer, tofu, or fish.</li>
                                    <li>Most Importantly: Cut down your salt (namak), sugar, and packaged snacks.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Move Your Body Every Day</strong>
                                 <p>You don't need a fancy gym!</p>
                                 <ul className="list-disc pl-6">
                                     <li>A brisk 30-minute walk, 5 days a week, is one of the best exercises.</li>
                                     <li>Simple yoga and deep breathing (pranayama) can do wonders for stress and circulation.</li>
                                     <li>Even dancing to your favourite song or taking the stairs counts!</li>
                                 </ul>
                            </li>
                             <li>
                                <strong>Prioritize Good Sleep</strong>
                                <p>Aim for 7-8 hours of restful sleep each night. A lack of sleep can increase stress hormones that lead to weight gain. A simple tip is to put your phone away at least 30 minutes before bed.</p>
                            </li>
                             <li>
                                <strong>Manage Your Stress</strong>
                                <p>Find what calms you down. For some, it's listening to music; for others, it might be talking to a friend, journaling, or spending quiet time in a park.</p>
                            </li>
                        </ol>
                    </InfoCard>

                    <InfoCard title="When to See a Doctor">
                        <p>While lifestyle changes are powerful, you should definitely consult a doctor if:</p>
                        <ul className="list-disc pl-6">
                            <li>Your blood pressure reading is consistently high (e.g., above 140/90 mmHg).</li>
                            <li>You're trying your best but are unable to lose weight.</li>
                            <li>You experience symptoms like chest pain, frequent headaches, or shortness of breath.</li>
                            <li>High BP or heart problems run in your family.</li>
                        </ul>
                         <p>A doctor can provide the right guidance and, if needed, prescribe medication to keep you safe.</p>
                    </InfoCard>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Frequently Asked Questions (FAQs)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Can losing just a little weight really help my BP?</AccordionTrigger>
                                    <AccordionContent>
                                    Yes, absolutely! Research shows that even losing 4-5 kilos can significantly lower your blood pressure and improve your overall heart health.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>What are some good Indian foods to eat?</AccordionTrigger>
                                    <AccordionContent>
                                    Stick to simple, home-cooked meals. Lauki (bottle gourd), palak (spinach), dal, brown rice, fresh dahi (curd), and fruits like guava and papaya are fantastic choices. Try to strictly limit pickles (achar), papad, and packaged namkeen, as they are loaded with salt.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Is it possible to reverse high BP caused by obesity without medicine?</AccordionTrigger>
                                    <AccordionContent>
                                    In many cases, yes. A healthy diet, regular exercise, and stress management can often bring both your weight and blood pressure down to normal levels. However, you must always follow your doctor's advice, as some people will still need medication to stay healthy.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Are Ayurvedic remedies like Ashwagandha helpful?</AccordionTrigger>
                                    <AccordionContent>
                                    Some traditional herbs may offer health benefits. However, it is very important to talk to your doctor before trying any herbal supplements, especially if you are already taking prescribed medication for your blood pressure.
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

export default ManagingWeightAndBpPage;
