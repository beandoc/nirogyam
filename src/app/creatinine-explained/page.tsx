
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TestTube, FileText, Activity, Users, ShieldAlert, HeartPulse, Home, ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';
import { useParams } from 'next/navigation';
import en from '@/locales/en.json';
import hi from '@/locales/hi.json';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="mb-8">
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

const CreatinineExplainedPage = () => {
    const params = useParams();
    const locale = params.lang || 'en';
    const t = locale === 'hi' ? hi : en;

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
                    <section id="intro" className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">{t.creatinineExplained.title}</h1>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                           {t.creatinineExplained.intro}
                        </p>
                    </section>

                    <InfoCard icon={<FileText className="h-10 w-10 text-primary" />} title={t.creatinineExplained.purpose.title}>
                        <p className="text-foreground/80">{t.creatinineExplained.purpose.p1}</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/80">
                            {t.creatinineExplained.purpose.list.map((item: string, index: number) => <li key={index}>{item}</li>)}
                        </ul>
                    </InfoCard>
                    
                    <InfoCard icon={<TestTube className="h-10 w-10 text-primary" />} title={t.creatinineExplained.process.title}>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="before">
                                <AccordionTrigger>{t.creatinineExplained.process.before.title}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-foreground/80">{t.creatinineExplained.process.before.content}</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="during">
                                <AccordionTrigger>{t.creatinineExplained.process.during.title}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-foreground/80">{t.creatinineExplained.process.during.content}</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="after">
                                <AccordionTrigger>{t.creatinineExplained.process.after.title}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-foreground/80">{t.creatinineExplained.process.after.content}</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </InfoCard>

                    <InfoCard icon={<HeartPulse className="h-10 w-10 text-primary" />} title={t.creatinineExplained.results.title}>
                        <p className="text-foreground/80 mb-4">{t.creatinineExplained.results.p1}</p>
                        <p className="text-foreground/80 font-semibold mb-4">{t.creatinineExplained.results.p2}</p>
                        <p className="text-foreground/80">{t.creatinineExplained.results.p3}</p>
                    </InfoCard>
                    
                    <InfoCard icon={<ShieldAlert className="h-10 w-10 text-primary" />} title={t.creatinineExplained.considerations.title}>
                        <p className="text-foreground/80 mb-4">{t.creatinineExplained.considerations.p1}</p>
                        <h3 className="font-semibold mb-2">{t.creatinineExplained.considerations.factorsRaise.title}</h3>
                        <ul className="list-disc pl-6 mb-4 space-y-1 text-foreground/80">
                            {t.creatinineExplained.considerations.factorsRaise.list.map((item: string, index: number) => <li key={index}>{item}</li>)}
                        </ul>
                        <h3 className="font-semibold mb-2">{t.creatinineExplained.considerations.factorsLower.title}</h3>
                        <ul className="list-disc pl-6 space-y-1 text-foreground/80">
                            {t.creatinineExplained.considerations.factorsLower.list.map((item: string, index: number) => <li key={index}>{item}</li>)}
                        </ul>
                    </InfoCard>

                    <InfoCard icon={<Users className="h-10 w-10 text-primary" />} title={t.creatinineExplained.questions.title}>
                        <ul className="list-disc pl-6 space-y-3 text-foreground/80">
                            {t.creatinineExplained.questions.list.map((item: string, index: number) => <li key={index}>{item}</li>)}
                        </ul>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default CreatinineExplainedPage;
