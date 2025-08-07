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

const LeakingWhenYouLaughPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Leaking When You Laugh? You're Not Alone: A Simple Guide to Urinary Incontinence</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>Has this ever happened to you? You share a hearty laugh with friends, lift something heavy, or let out a big sneeze, and suddenly you feel a little leak of urine.</p>
                        <p>If it has, you are not alone. This is called urinary incontinence, and it's an incredibly common condition that affects millions of people, especially women. Unfortunately, because it can feel embarrassing, many people suffer in silence, assuming it's just a normal part of getting older.</p>
                        <p>Here’s the good news: urinary incontinence is not something you just have to live with. It is a treatable medical condition, and understanding it is the first step toward regaining control and confidence.</p>
                    </div>

                    <InfoCard title="What is Urinary Incontinence, Really?">
                        <p>In simple terms, urinary incontinence is the loss of bladder control, leading to the unintentional leakage of urine. This happens when the complex system of muscles and nerves that help you hold and release urine isn't working together properly.</p>
                    </InfoCard>
                    
                    <InfoCard title="Different Types of Leaks: What's Your Type?">
                        <p>Incontinence isn't a one-size-fits-all problem. It shows up in different ways. See if any of these sound familiar:</p>
                        <h3 className="font-semibold text-lg text-foreground">The "Sneeze and Leak" Type (Stress Incontinence)</h3>
                        <p>This is when physical pressure on your bladder causes a leak. It’s triggered by common actions like coughing, sneezing, laughing, exercising, or lifting heavy objects.</p>
                        
                        <h3 className="font-semibold text-lg text-foreground mt-4">The "Sudden Urge" Type (Urge Incontinence)</h3>
                        <p>This is that sudden, overwhelming "gotta go NOW!" feeling, which is often so strong that you leak urine before you can make it to the toilet. This is sometimes called an "overactive bladder."</p>

                        <h3 className="font-semibold text-lg text-foreground mt-4">The "Constant Dribble" Type (Overflow Incontinence)</h3>
                        <p>This happens when your bladder doesn't empty completely, leading to frequent or constant dribbling of urine afterward.</p>

                        <h3 className="font-semibold text-lg text-foreground mt-4">The "Can't Get There in Time" Type (Functional Incontinence)</h3>
                        <p>In this case, your bladder control might be fine, but a physical limitation (like severe arthritis) or a cognitive issue (like dementia) prevents you from getting to the toilet in time.</p>

                        <h3 className="font-semibold text-lg text-foreground mt-4">The "Mix and Match" Type (Mixed Incontinence)</h3>
                        <p>Many people, especially women, experience a combination of types, most commonly Stress and Urge incontinence together.</p>
                    </InfoCard>

                    <InfoCard title="Why Does This Happen? Common Causes">
                        <p>Several factors can weaken the muscles and nerves that control your bladder:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Pregnancy and Childbirth:</strong> These events can stretch and weaken the pelvic floor muscles that support the bladder.</li>
                            <li><strong>Aging and Menopause:</strong> As we age, muscles naturally weaken. For women, the drop in oestrogen during menopause can also affect bladder tissues.</li>
                            <li><strong>Being Overweight:</strong> Extra body weight puts more pressure on your bladder and pelvic muscles.</li>
                            <li><strong>An Enlarged Prostate (in men):</strong> This can block urine flow and lead to overflow incontinence.</li>
                            <li><strong>Chronic Conditions:</strong> Nerve damage from conditions like diabetes, multiple sclerosis, or a spinal cord injury can disrupt the signals to your bladder.</li>
                            <li><strong>Chronic Coughing:</strong> A long-term cough from smoking or asthma puts constant strain on your bladder control muscles.</li>
                            <li><strong>Urinary Tract Infections (UTIs):</strong> An infection can temporarily irritate your bladder and cause strong urges and leakage.</li>
                        </ul>
                    </InfoCard>
                    
                    <InfoCard title="Taking Back Control: Management and Treatment">
                        <p>The most important thing to know is that help is available. Treatment depends on the type and severity of your incontinence, but often starts with simple, effective strategies.</p>
                        <h3 className="font-semibold text-xl mt-4">1. Lifestyle and Bladder Training</h3>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Manage Fluids:</strong> Drink enough water throughout the day to stay hydrated, but try to limit fluids (especially caffeine and alcohol) before bedtime.</li>
                           <li><strong>Avoid Irritants:</strong> Caffeine, alcohol, carbonated drinks, and spicy foods can irritate the bladder for some people.</li>
                           <li><strong>Train Your Bladder:</strong> Your doctor may suggest a schedule for bathroom visits (e.g., every 2 hours) to help you regain control over the urge to urinate.</li>
                        </ul>

                        <h3 className="font-semibold text-xl mt-4">2. Pelvic Floor Exercises (Kegels)</h3>
                        <p>These exercises are designed to strengthen the pelvic floor muscles—the very muscles that support your bladder and help prevent leaks. When done correctly and consistently, Kegels can be incredibly effective, especially for Stress Incontinence.</p>

                        <h3 className="font-semibold text-xl mt-4">3. Medical and Surgical Options</h3>
                        <p>If lifestyle changes and exercises aren't enough, there are other options:</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Medications:</strong> Certain medicines can help calm an overactive bladder or, in men, relax the prostate.</li>
                           <li><strong>Medical Devices:</strong> For women, a small device called a pessary can be inserted into the vagina to help support the bladder.</li>
                           <li><strong>Procedures and Surgery:</strong> For more severe cases, options like bladder injections (Botox) or minor surgical procedures (like a "sling" to support the urethra) can provide significant relief.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="When to See a Doctor">
                        <p>While an occasional, tiny leak might not seem like a big deal, you should talk to a doctor if incontinence:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Starts to affect your daily life, work, or social activities.</li>
                            <li>Is happening frequently or seems to be getting worse.</li>
                            <li>Is accompanied by other symptoms like pain, burning, or blood in your urine.</li>
                        </ul>
                        <p>Don't let embarrassment stop you from seeking help. This is a medical issue, and your doctor is there to provide solutions.</p>
                    </InfoCard>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Frequently Asked Questions (FAQs)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Can holding my urine for too long cause incontinence?</AccordionTrigger>
                                    <AccordionContent>
                                    Frequently delaying urination can weaken your bladder muscles over time and make it harder to control them, so it's best to go when you feel the urge.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Will drinking less water help stop the leaks?</AccordionTrigger>
                                    <AccordionContent>
                                    No, this is a common myth that can actually make things worse! Not drinking enough water can lead to dehydration, which irritates your bladder and can increase the feeling of urgency.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Is urinary incontinence reversible?</AccordionTrigger>
                                    <AccordionContent>
                                    In many cases, yes! Depending on the cause, it can often be significantly improved or even completely resolved with the right exercises, lifestyle changes, or medical treatments.
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

export default LeakingWhenYouLaughPage;
