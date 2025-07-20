
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, Droplet, Clock, Heart, Download, Settings, Hospital, Syringe, Users, LifeBuoy, Plane, AlertTriangle, ShieldCheck, Dumbbell, Info, ArrowLeft, Sun, Moon } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="mb-8">
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-foreground/80 space-y-4">{children}</div>
        </CardContent>
    </Card>
);

const PeritonealDialysisPage = () => {
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
            <section className="text-center mb-16">
                <Home className="h-16 w-16 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Understanding Peritoneal Dialysis (PD)</h1>
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                  Peritoneal dialysis is a treatment for kidney failure that cleans your blood using the lining of your own abdomen, offering greater flexibility and independence.
                </p>
            </section>

            <div className="space-y-8">
                <InfoCard icon={<Info className="h-8 w-8 text-primary" />} title="What is Peritoneal Dialysis?">
                    <p>When kidneys fail, they can't clean your blood effectively, causing toxins and excess fluid to build up. Peritoneal dialysis (PD) is a treatment that uses the inside lining of your abdomen—the peritoneum—as a natural filter.</p>
                    <p>A soft tube called a catheter is placed in your abdomen. Through this catheter, a special cleansing fluid called dialysate flows into your belly. While the fluid is inside you, it absorbs waste products and extra water from your blood. After a few hours, this fluid is drained out, taking the harmful toxins with it. This entire process is called an "exchange."</p>
                </InfoCard>

                <InfoCard icon={<Heart className="h-8 w-8 text-primary" />} title="How Can Peritoneal Dialysis Help Me?">
                    <p>PD can significantly improve symptoms of kidney failure, such as nausea, fatigue, and weakness. It also helps reduce fluid buildup that causes swelling and shortness of breath. By managing waste products, it can also help protect your bones and keep potassium levels in a safe range.</p>
                    <p>Unlike haemodialysis, which is typically done in a hospital, PD is performed at home, giving you more control over your treatment schedule and daily life.</p>
                </InfoCard>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Types of Peritoneal Dialysis</CardTitle>
                        <CardContent className="p-0 pt-2 text-foreground/80">
                            There are two main types of PD, allowing you to choose whether to dialyze during the day or overnight. Your healthcare team will help you decide which method best fits your lifestyle and medical needs.
                        </CardContent>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Sun className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-lg">Continuous Ambulatory Peritoneal Dialysis (CAPD)</h3>
                                <p className="text-foreground/80">With CAPD, you perform exchanges manually during the day, typically one to four times. Each exchange takes about 30-40 minutes. You'll drain the old fluid, fill your abdomen with new dialysate, and then disconnect, allowing you to go about your day while the fluid cleans your blood.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <Moon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-lg">Automated Peritoneal Dialysis (APD)</h3>
                                <p className="text-foreground/80">APD uses a machine, often called a cycler, to perform exchanges automatically overnight while you sleep. You'll connect to the machine before bed, and it will handle the exchanges for you over several hours.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <Card>
                        <AccordionItem value="item-1" className="border-b-0">
                            <AccordionTrigger className="p-6 text-xl">Preparation and Lifestyle</AccordionTrigger>
                            <AccordionContent className="px-6 pb-6">
                                <div className="space-y-6 text-foreground/80">
                                    <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Syringe className="h-5 w-5"/>Getting Started</h4>
                                        <p>Before beginning PD, you'll need a minor surgery to place the catheter in your abdomen. After a recovery period of about two weeks, a dialysis nurse will train you on how to perform your exchanges safely at home and avoid infection.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Settings className="h-5 w-5"/>Daily Life with PD</h4>
                                        <p>You'll need a clean, dry, well-lit space at home to perform exchanges and a separate cool, dry space for storing your supplies. Your routine will adapt to include time for exchanges or setting up your APD machine. Your medical team will also advise on medications, such as laxatives to ensure the dialysis works effectively, and possibly vitamin supplements.</p>
                                    </div>
                                     <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Users className="h-5 w-5"/>Your Healthcare Team</h4>
                                        <p>You are the primary person in charge of your treatment, but you'll have a dedicated team supporting you. This includes nurses for training, a dietitian to guide your food choices, and doctors who monitor your lab results and adjust your treatment plan as needed.</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>

                    <Card>
                        <AccordionItem value="item-2" className="border-b-0">
                             <AccordionTrigger className="p-6 text-xl">Staying Healthy and Treatment Alternatives</AccordionTrigger>
                             <AccordionContent className="px-6 pb-6">
                                 <div className="space-y-6 text-foreground/80">
                                     <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><AlertTriangle className="h-5 w-5 text-destructive"/>Side Effects</h4>
                                        <p>Common side effects can include fatigue or feeling "washed out." There is also a risk of infection at the catheter site or within the abdomen (peritonitis), as well as a risk of developing a hernia. Your team will teach you how to spot and report any issues early so they can be treated promptly with antibiotics.</p>
                                     </div>
                                     <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><ShieldCheck className="h-5 w-5 text-green-600"/>How to Stay Healthy</h4>
                                        <p>To get the most from your treatment, it's vital to perform every exchange as prescribed. Additionally, staying physically active, following your diet and fluid advice, checking your blood pressure, taking medications correctly, and avoiding smoking will help you stay as healthy as possible.</p>
                                     </div>
                                     <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Dumbbell className="h-5 w-5"/>Are there any alternatives?</h4>
                                        <p>PD is a treatment, not a cure. The damage from CKD is not reversible. Other treatment options for kidney failure include haemodialysis, a kidney transplant, or conservative care (managing symptoms without dialysis). Your kidney team will discuss all these choices with you to find the best path forward.</p>
                                     </div>
                                 </div>
                             </AccordionContent>
                         </AccordionItem>
                    </Card>
                </Accordion>
            </div>
        </div>
      </main>
    </div>
  );
};

export default PeritonealDialysisPage;
