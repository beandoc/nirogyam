
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, Droplet, Clock, Heart, Download, Settings, Hospital, Syringe, Users, LifeBuoy, Plane, AlertTriangle, ShieldCheck, Dumbbell, Info, ArrowLeft, Sun, Moon } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';
import { usePathname } from 'next/navigation';
import en from '@/locales/en.json';
import hi from '@/locales/hi.json';

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
    const pathname = usePathname();
    const locale = pathname.split('/')[1];
    const t = locale === 'hi' ? hi : en;
    const content = t.peritonealDialysis;


  return (
    <div className="bg-background text-foreground flex-1">
      <AppHeader />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-8">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t.buttons.backToHome}
                </Link>
            </Button>
            <section className="text-center mb-16">
                <Home className="h-16 w-16 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">{content.title}</h1>
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                  {content.intro}
                </p>
            </section>

            <div className="space-y-8">
                <InfoCard icon={<Info className="h-8 w-8 text-primary" />} title={content.whatIs.title}>
                    <p>{content.whatIs.p1}</p>
                    <p>{content.whatIs.p2}</p>
                </InfoCard>

                <InfoCard icon={<Heart className="h-8 w-8 text-primary" />} title={content.howItHelps.title}>
                    <p>{content.howItHelps.p1}</p>
                    <p>{content.howItHelps.p2}</p>
                </InfoCard>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>{content.types.title}</CardTitle>
                        <CardContent className="p-0 pt-2 text-foreground/80">
                            {content.types.intro}
                        </CardContent>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Sun className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-lg">{content.types.capd.title}</h3>
                                <p className="text-foreground/80">{content.types.capd.description}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <Moon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-lg">{content.types.apd.title}</h3>
                                <p className="text-foreground/80">{content.types.apd.description}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <Card>
                        <AccordionItem value="item-1" className="border-b-0">
                            <AccordionTrigger className="p-6 text-xl">{content.accordion1.title}</AccordionTrigger>
                            <AccordionContent className="px-6 pb-6">
                                <div className="space-y-6 text-foreground/80">
                                    <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Syringe className="h-5 w-5"/>{content.accordion1.gettingStarted.title}</h4>
                                        <p>{content.accordion1.gettingStarted.content}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Settings className="h-5 w-5"/>{content.accordion1.dailyLife.title}</h4>
                                        <p>{content.accordion1.dailyLife.content}</p>
                                    </div>
                                     <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Users className="h-5 w-5"/>{content.accordion1.team.title}</h4>
                                        <p>{content.accordion1.team.content}</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>

                    <Card>
                        <AccordionItem value="item-2" className="border-b-0">
                             <AccordionTrigger className="p-6 text-xl">{content.accordion2.title}</AccordionTrigger>
                             <AccordionContent className="px-6 pb-6">
                                 <div className="space-y-6 text-foreground/80">
                                     <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><AlertTriangle className="h-5 w-5 text-destructive"/>{content.accordion2.sideEffects.title}</h4>
                                        <p>{content.accordion2.sideEffects.content}</p>
                                     </div>
                                     <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><ShieldCheck className="h-5 w-5 text-green-600"/>{content.accordion2.stayHealthy.title}</h4>
                                        <p>{content.accordion2.stayHealthy.content}</p>
                                     </div>
                                     <div>
                                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Dumbbell className="h-5 w-5"/>{content.accordion2.alternatives.title}</h4>
                                        <p>{content.accordion2.alternatives.content}</p>
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
