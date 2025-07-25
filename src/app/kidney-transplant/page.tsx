
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ChevronsRight, Heart, Shield, Users, Stethoscope, HelpCircle, ArrowRightCircle, ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const TableOfContents = () => (
    <Card className="mb-12">
        <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2">
                <li><a href="#about" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />About Kidney Transplant</a></li>
                <li><a href="#types" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Types: Living and Deceased Donors</a></li>
                <li><a href="#benefits" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Benefits of a Transplant</a></li>
                <li><a href="#risks" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Risks of a Transplant</a></li>
                <li><a href="#eligibility" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Who Can Get a Transplant?</a></li>
                <li><a href="#surgery" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />The Transplant Surgery</a></li>
                <li><a href="#getting-started" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Where to Start</a></li>
                <li><a href="#questions" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Questions for Your Healthcare Team</a></li>
            </ul>
        </CardContent>
    </Card>
);

const KidneyTransplantPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Kidney Transplant: A New Beginning</h1>
                    <p className="text-lg text-foreground/80 mb-10">
                        A transplant is a treatment for kidney failure that involves placing a healthy kidney from a donor into your body, potentially offering a longer, more active life than dialysis.
                    </p>

                    <TableOfContents />

                    <article className="prose lg:prose-xl max-w-none text-foreground/90 space-y-12">
                        <section id="about" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">About Kidney Transplant</h2>
                            <p>When kidneys fail, treatment is required to take over their functions. The two primary treatments are dialysis and kidney transplant. A transplant provides you with a healthy kidney to perform the tasks your own kidneys can no longer handle. On average, a kidney from a living donor functions for 15-20 years, while one from a deceased donor lasts 8-12 years, though individual results vary.</p>
                            <p>While many patients begin dialysis before receiving a transplant, it's also possible to get a <strong className="text-primary">preemptive transplant</strong> before dialysis is needed. Research suggests that a preemptive transplant, with little to no time on dialysis, can lead to better long-term health outcomes and a higher quality of life. If you are in Stage 3B, 4, or 5 of CKD, it's an ideal time to discuss transplant options with your doctor.</p>
                        </section>

                        <section id="types" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Types: Living and Deceased Donors</h2>
                            <p>There are two sources for a donor kidney:</p>
                            <ul className="list-disc pl-6 space-y-3 mt-4">
                                <li><strong>Deceased Donor:</strong> The kidney comes from an individual who has passed away and chose to be an organ donor.</li>
                                <li><strong>Living Donor:</strong> The kidney is donated by a living person with two healthy kidneys. A living donor can be a family member, friend, or even a stranger, and does not need to be related to you.</li>
                            </ul>
                            <p className="mt-4">The first step for either type of transplant is a thorough evaluation at a transplant center. A potential living donor can often be evaluated at the same time as the recipient (the person receiving the kidney).</p>
                        </section>

                        <section id="benefits" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Benefits of a Transplant</h2>
                            <div className="bg-primary/10 p-6 rounded-lg">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3"><Heart className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Studies indicate that individuals with kidney transplants generally live longer than those who remain on dialysis.</span></li>
                                    <li className="flex items-start gap-3"><Heart className="h-5 w-5 text-primary mt-1 shrink-0" /><span>A successful transplant can restore the freedom to work, travel, and spend more time with loved ones, improving your overall quality of life.</span></li>
                                    <li className="flex items-start gap-3"><Heart className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Dietary restrictions are often less strict, though a heart-healthy diet is recommended to protect your new kidney.</span></li>
                                    <li className="flex items-start gap-3"><Heart className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Most patients experience improved health and energy levels.</span></li>
                                </ul>
                            </div>
                        </section>

                        <section id="risks" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Risks of a Transplant</h2>
                            <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3"><Shield className="h-5 w-5 text-destructive mt-1 shrink-0" /><span>A transplant is a treatment, not a cure for kidney disease.</span></li>
                                    <li className="flex items-start gap-3"><Shield className="h-5 w-5 text-destructive mt-1 shrink-0" /><span>You must take anti-rejection medications (immunosuppressants) daily for as long as the kidney works. These can have side effects.</span></li>
                                    <li className="flex items-start gap-3"><Shield className="h-5 w-5 text-destructive mt-1 shrink-0" /><span>There is an increased risk for infections and certain types of cancer due to the immunosuppressant medications.</span></li>
                                    <li className="flex items-start gap-3"><Shield className="h-5 w-5 text-destructive mt-1 shrink-0" /><span>The lifespan of a transplanted kidney varies, and some individuals may need more than one transplant in their lifetime.</span></li>
                                </ul>
                            </div>
                        </section>

                        <section id="eligibility" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Who Can Get a Transplant?</h2>
                            <p>Kidney patients of all ages can be considered for a transplant. While some centers may have age limits, many do not. Every potential candidate undergoes a comprehensive medical and psychosocial evaluation to ensure they are healthy enough for surgery and prepared for post-transplant care. Even with other health conditions like diabetes, a successful transplant is often possible. It is important to note that being placed on the waitlist is not automatic; you must be evaluated at a transplant center first.</p>
                        </section>

                        <section id="surgery" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">The Transplant Surgery</h2>
                            <p>The surgery to place the new kidney typically lasts 3-4 hours. The donated kidney is positioned in the lower abdomen to easily connect it to your blood vessels and bladder. Your own kidneys are usually left in place unless there's a specific medical reason to remove them.</p>
                            <p>Recovery begins quickly. You will be encouraged to stand and walk soon after the surgery. Most patients can return home within a few days, followed by frequent check-ups at the transplant center. Over time, as you and your new kidney stabilize, your regular kidney doctor will resume your care.</p>
                        </section>
                        
                        <section id="getting-started" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Where to Start</h2>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Your First Step: Evaluation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>The journey to a transplant begins with an evaluation at a transplant center. You can ask your doctor for a referral or contact a center directly—a practice known as a self-referral. This evaluation is necessary even if you already have a willing living donor.</p>
                                    <Button asChild className="mt-4">
                                        <a href="#contact">Find a Specialist Near You <ArrowRightCircle className="ml-2 h-5 w-5"/></a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="questions" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Questions for Your Healthcare Team</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Is my kidney disease progressing? Can you explain my lab results?</AccordionTrigger>
                                    <AccordionContent>Understanding your current health status is the first step in making informed decisions about your future care.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>When should we discuss treatment options, including transplant?</AccordionTrigger>
                                    <AccordionContent>Timing is crucial. Proactive conversations can open up more options, like preemptive transplants.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Based on my health, is a transplant a good option for me?</AccordionTrigger>
                                    <AccordionContent>Your doctor can provide personalized advice on whether a transplant, and which type (living vs. deceased donor), is suitable for you.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Could you explain the differences between life on dialysis and life with a transplant?</AccordionTrigger>
                                    <AccordionContent>This comparison will help you understand the long-term lifestyle implications of each treatment path.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>Could you refer me for a transplant evaluation?</AccordionTrigger>
                                    <AccordionContent>Don't hesitate to ask for a referral directly. Taking initiative is a key part of managing your health.</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default KidneyTransplantPage;
