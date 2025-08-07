
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

const HighBPSecretVictimPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">High BP's Secret Victim: Are Your Kidneys Paying the Price?</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>When your doctor says your blood pressure (BP) is high, you probably start worrying about your heart. But did you know there's another silent victim of high BP? Your kidneys.</p>
                        <p>High blood pressure is one of the top causes of kidney failure in India, and the scariest part is that you might not feel a single thing until serious damage is already done. Think of it like a pressure cooker silently building up steam inside your body—you often don't know there's a problem until it's too late.</p>
                    </div>

                    <InfoCard title="Your Kidneys: The Body's Super-Cleaners">
                        <p>Imagine your kidneys are two of the most advanced water purifiers you could ever own. They work 24/7, meticulously cleaning every drop of your blood, balancing your body's fluids, and removing all the waste products.</p>
                        <p>But this world-class purification system is incredibly delicate.</p>
                        <p>High BP is like forcing water through this fine filter with extreme force, day after day. Over time, this constant pressure damages the tiny, fragile filtering units inside your kidneys. They begin to wear out and break down. And unlike a filter in your kitchen, you can't just order a replacement part for your kidneys. Once the damage is done, it's often permanent.</p>
                    </InfoCard>

                    <InfoCard title="Modern Indian Life: A Challenge for Our Kidneys">
                        <p>Let's be honest, our modern lifestyle isn't always kind to our health. Does this sound like a typical day for you?</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Long hours sitting at a desk for work.</li>
                            <li>Stress-eating salty snacks like chips or bhujia to get through a deadline.</li>
                            <li>Ordering takeout late at night because you're too tired to cook.</li>
                            <li>Relying on multiple cups of chai or coffee but forgetting to drink plain water.</li>
                            <li>Skipping a walk because of back-to-back meetings.</li>
                        </ul>
                        <p>These habits might seem harmless, but they create a chain reaction: more salt, less movement, weight gain, and ultimately, higher blood pressure. All of this puts your kidneys under constant, silent strain.</p>
                    </InfoCard>

                    <InfoCard title="The Long-Term Damage: When the Filters Start to Fail">
                        <p>This is where things get serious. If high blood pressure isn't controlled, it can lead to Chronic Kidney Disease (CKD), a condition where your kidneys slowly lose their ability to function.</p>
                        <p>In the advanced stages, this can mean:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Harmful toxins building up throughout your body.</li>
                            <li>Noticeable swelling (soojan) in your legs, ankles, and face.</li>
                            <li>Feeling constantly exhausted, sick, and confused.</li>
                            <li>Needing dialysis—a time-consuming process where a machine does your kidneys' job for you, several times a week.</li>
                            <li>Eventually, requiring a kidney transplant to survive.</li>
                        </ul>
                        <p>The tragedy is that you can feel perfectly healthy for years while this silent destruction is happening inside. This is why hypertension and CKD are called "silent killers."</p>
                    </InfoCard>

                    <InfoCard title="Simple Ways to Protect Your Kidneys (and Lower Your BP)">
                        <p>You don't need a massive lifestyle overhaul. Small, consistent changes can make a world of difference.</p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Go Easy on the Salt:</strong> The biggest source of salt isn't the salt shaker, but packaged foods like chips, biscuits, and ready-to-eat meals. Read labels and cook fresh meals using spices for flavour instead of extra namak.</li>
                            <li><strong>Make Water Your Best Friend:</strong> Aim for 6–8 glasses of plain water a day. It helps your kidneys flush out waste more easily.</li>
                            <li><strong>Move Your Body Every Day:</strong> A simple 30-minute brisk walk is powerful medicine for both your heart and your kidneys.</li>
                            <li><strong>Watch Your Weight:</strong> Losing even a few extra kilos can dramatically lower your blood pressure and reduce the stress on your kidneys.</li>
                            <li><strong>Manage Your Stress:</strong> Find what works for you. Try simple breathing exercises, listen to calming music, or just take 15 minutes of quiet "me-time" each day.</li>
                            <li><strong>Know Your Numbers:</strong> This is the most important step. Check your BP regularly. And if you're over 40 or have high BP, get a yearly kidney function test (it's a simple blood test).</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="A Final Thought">
                        <p>Your kidneys work in silence, but they are performing an extraordinary job every second of every day. High blood pressure puts them under relentless strain, often without any warning signs. Don't let the silence fool you. Start today by making small, conscious choices that protect both your heart and your kidneys for a long, healthy life.</p>
                    </InfoCard>
                    
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Frequently Asked Questions (FAQs)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>What foods can help lower BP without harming my kidneys?</AccordionTrigger>
                                    <AccordionContent>
                                    Foods rich in potassium like bananas, spinach, and sweet potatoes are great for lowering BP in healthy people. BUT, be very careful: if you already have kidney disease, too much potassium can be dangerous. Always ask your doctor what is safe for you to eat.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Is kidney damage from high BP reversible?</AccordionTrigger>
                                    <AccordionContent>
                                    In the very early stages, controlling your blood pressure can slow down or sometimes even partially reverse the damage. However, advanced kidney damage is permanent. This is why prevention and early detection are everything.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>How often should I get my kidneys tested if I have high BP?</AccordionTrigger>
                                    <AccordionContent>
                                    You should have a kidney function test at least once a year. If you have other risk factors like diabetes or a family history of kidney problems, your doctor might recommend more frequent testing.
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

export default HighBPSecretVictimPage;
