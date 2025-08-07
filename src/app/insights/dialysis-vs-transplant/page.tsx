
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, LifeBuoy, Heart, HandHeart, Banknote, HelpCircle, ArrowRight } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="mb-8">
        <CardHeader>
            <div className="flex items-center gap-4">
                {icon}
                <CardTitle className="text-2xl text-primary">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <div className="prose lg:prose-xl max-w-none text-foreground/90 space-y-4">
                {children}
            </div>
        </CardContent>
    </Card>
);

const DialysisVsTransplantPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Two Paths for Kidney Failure: A Guide to Dialysis and Transplantation</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>When your kidneys can no longer do their job, you and your family face a major decision about the path forward. The two primary treatments for kidney failure—dialysis and a kidney transplant—are very different from each other.</p>
                        <p>Each path affects your daily life, long-term health, and emotions in its own unique way. This guide will help you understand these two options so you can have a more informed conversation with your doctor and loved ones.</p>
                    </div>

                    <Card className="mb-8 bg-primary/10 border-primary/20">
                        <CardHeader>
                            <CardTitle>Kidney Care Choices Toolkit</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80 mb-4">Explore your treatment options in more detail and make informed decisions with our interactive Kidney Care Choices guide.</p>
                            <Button asChild>
                                <Link href="/toolkits/kidney-care-choices">
                                    Launch Toolkit <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <InfoCard icon={<LifeBuoy className="h-8 w-8 text-primary" />} title="How Will My Daily Life Change?">
                        <h3 className="text-xl font-semibold text-foreground">Life on Dialysis</h3>
                        <p>Think of dialysis as a regular, essential part of your schedule.</p>
                        <ul className="list-disc pl-6">
                            <li><strong>The Routine:</strong> Most people go to a hospital or clinic 2-3 times a week for a session that lasts about 4 hours. During this time, a machine cleans your blood.</li>
                            <li><strong>The Impact:</strong> This fixed schedule requires careful planning. You'll need to organize your work, home life, and any travel around your dialysis sessions.</li>
                            <li><strong>The Diet:</strong> You will need to follow a very strict diet, carefully controlling your intake of fluids, salt, and certain minerals like potassium and phosphorus.</li>
                        </ul>
                        
                        <h3 className="text-xl font-semibold text-foreground mt-6">Life After a Kidney Transplant</h3>
                        <p>A successful transplant can often feel like a return to freedom.</p>
                         <ul className="list-disc pl-6">
                            <li><strong>The Routine:</strong> After you recover from surgery, you are free from the fixed dialysis schedule. Many people experience a big boost in energy and can return to work, hobbies, and a more spontaneous life.</li>
                            <li><strong>The New Responsibility:</strong> You will have a crucial new daily task: taking special medications every day, exactly as prescribed. These medicines (called immunosuppressants) stop your body from fighting or "rejecting" the new kidney.</li>
                            <li><strong>The Diet:</strong> Your diet will likely be much more flexible than it was on dialysis, but eating healthy remains very important to protect your new organ.</li>
                        </ul>
                        <div className="my-6">
                           <Image src="https://placehold.co/800x400.png" alt="Side-by-side comparison of life on dialysis versus after a transplant" width={800} height={400} className="rounded-lg shadow-md" data-ai-hint="dialysis clinic person enjoying outdoors" />
                        </div>
                    </InfoCard>

                    <InfoCard icon={<Heart className="h-8 w-8 text-primary" />} title="Looking at Long-Term Health">
                        <h3 className="text-xl font-semibold text-foreground">Dialysis</h3>
                        <p>Dialysis is a life-saving treatment, but it's not a perfect substitute for a healthy kidney. It cleans the blood, but it can't perform all the other important jobs a kidney does. Over many years, this can sometimes lead to other health issues related to the heart or bones.</p>
                        
                        <h3 className="text-xl font-semibold text-foreground mt-6">Kidney Transplant</h3>
                        <p>A new, working kidney functions just like a healthy one, which generally leads to better overall health and a longer life expectancy. However, it comes with its own set of risks. Your body might try to reject the new kidney, and the powerful anti-rejection medicines you need to take can have side effects and increase your risk of infections.</p>
                    </InfoCard>

                    <InfoCard icon={<HandHeart className="h-8 w-8 text-primary" />} title="The Emotional Journey">
                         <h3 className="text-xl font-semibold text-foreground">The Dialysis Experience</h3>
                        <p>The constant routine and feeling of being dependent on a machine can be emotionally tiring. It's completely normal to feel stressed, frustrated, or down. Having a strong support system of family, friends, and other patients who understand is incredibly important.</p>

                        <h3 className="text-xl font-semibold text-foreground mt-6">The Transplant Experience</h3>
                        <p>Receiving a new kidney often brings a powerful feeling of hope, gratitude, and a new lease on life. However, it can also bring new worries, like the fear of organ rejection or anxiety about remembering to take your medications perfectly. Talking openly with your medical team and support groups can help manage these feelings.</p>
                    </InfoCard>

                    <InfoCard icon={<Banknote className="h-8 w-8 text-primary" />} title="Understanding the Financial Side">
                        <h3 className="text-xl font-semibold text-foreground">The Cost of Dialysis</h3>
                        <p>Dialysis is an ongoing, long-term expense. While government health schemes and private insurance can help cover costs, the expenses for regular sessions, medications, and travel can add up over the years.</p>
                        
                        <h3 className="text-xl font-semibold text-foreground mt-6">The Cost of a Transplant</h3>
                        <p>A transplant has a very high one-time cost for the surgery, hospital stay, and initial care. After that, you will have the lifelong expense of the anti-rejection medicines, which can also be costly. It's essential to talk with the hospital's financial counsellors to understand the costs and what support might be available to you.</p>
                    </InfoCard>

                    <InfoCard icon={<HelpCircle className="h-8 w-8 text-primary" />} title="Making the Right Choice for You">
                        <p>Choosing between dialysis and a transplant is one of the most personal decisions you and your family will make. There is no single "right" answer for everyone. The best choice depends on many factors, including:</p>
                        <ul className="list-disc pl-6">
                            <li>Your age and overall health.</li>
                            <li>Your lifestyle and what's most important to you.</li>
                            <li>Your emotional resilience and support system.</li>
                            <li>Your financial situation.</li>
                        </ul>
                        <p>The best way forward is to have open, honest conversations with your doctors, your family, and even others who have walked these paths.</p>
                    </InfoCard>
                    
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Frequently Asked Questions (FAQs)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Does my age matter for this decision?</AccordionTrigger>
                                    <AccordionContent>
                                    Yes, age is a factor. Your doctor will perform a thorough health evaluation to determine if you are healthy enough for a major surgery like a transplant. There is no strict age cut-off, but it's about your overall fitness.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Are the diets for dialysis and transplant different?</AccordionTrigger>
                                    <AccordionContent>
                                    Yes, very different. The dialysis diet is typically very strict about limiting fluids, salt, potassium, and phosphorus. After a successful transplant, the diet is usually much more relaxed, but you still need to eat well to protect your new kidney.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>How long is the recovery after a kidney transplant?</AccordionTrigger>
                                    <AccordionContent>
                                    It varies, but most people stay in the hospital for about a week. You'll need to take it easy at home for several more weeks, and it can take a few months to feel fully recovered and get back to all your normal activities.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>How important is family support?</AccordionTrigger>
                                    <AccordionContent>
                                    Family support is absolutely essential for both paths. Whether it's providing rides to dialysis, helping with meals, or offering emotional encouragement, having a strong support network makes a world of difference.
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

export default DialysisVsTransplantPage;
