
'use client'
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { Droplets, Gauge, Scale, Cake, Dna, Cigarette, Heart, Activity, Home } from 'lucide-react';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { cn } from "@/lib/utils";


const KidneyIcon = ({ percentage }: { percentage: number }) => (
    <div className="relative h-24 w-24 mx-auto">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -scale-x-100">
            <path d="M50,95C25,95 10,75 10,50S25,5 50,5c25,0 40,20 40,45c0,15-5,25-15,30C65,90 55,95 50,95z" fill="#E5E7EB" />
            <defs>
                <clipPath id="kidneyClip">
                    <path d="M50,95C25,95 10,75 10,50S25,5 50,5c25,0 40,20 40,45c0,15-5,25-15,30C65,90 55,95 50,95z" />
                </clipPath>
            </defs>
            <rect clipPath="url(#kidneyClip)" x="0" y={100 - percentage} width="100" height={percentage} className="fill-primary" />
        </svg>
    </div>
);

const RiskFactorCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description?: string }) => (
    <Card className="text-center p-4">
        <CardHeader className="items-center pb-2">
            <div className="p-3 bg-primary/10 rounded-full mb-2">
                {icon}
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        {description && <CardContent><p className="text-muted-foreground text-sm">{description}</p></CardContent>}
    </Card>
);

const StageButton = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => (
    <Link href={href} className={cn(
        "block relative bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1",
        "after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-[-10px] after:w-[20px] after:bg-inherit after:transform after:skew-x-[-20deg] after:rounded-r-lg",
        className
    )}>
        {children}
    </Link>
);


const CkdStagesPage = () => {
    const stages = [
        { title: "Stage 1 CKD", egfr: "90 or higher", damage: "uACR 30+", description: "Kidney damage present but function is near normal.", percentage: 95 },
        { title: "Stage 2 CKD", egfr: "60-89", damage: "uACR 30+", description: "Mild loss of kidney function.", percentage: 75 },
        { title: "Stage 3a CKD", egfr: "45-59", description: "Mild to moderate loss of kidney function.", percentage: 52 },
        { title: "Stage 3b CKD", egfr: "30-44", description: "Moderate to severe loss of kidney function.", percentage: 37 },
        { title: "Stage 4 CKD", egfr: "15-29", description: "Severe loss of kidney function.", percentage: 22 },
        { title: "Stage 5 CKD", egfr: "less than 15", description: "Kidney failure, requiring dialysis or transplant.", percentage: 10 },
    ];

    const riskFactors = [
        { icon: <Droplets className="h-8 w-8 text-primary" />, title: "Diabetes" },
        { icon: <Gauge className="h-8 w-8 text-primary" />, title: "High Blood Pressure", description: "(Hypertension)" },
        { icon: <Heart className="h-8 w-8 text-primary" />, title: "Heart Disease", description: "and/or Heart Failure" },
        { icon: <Scale className="h-8 w-8 text-primary" />, title: "Obesity", description: "(BMI of 30 or more)" },
        { icon: <Cake className="h-8 w-8 text-primary" />, title: "Over Age 60" },
        { icon: <Dna className="h-8 w-8 text-primary" />, title: "Family History", description: "of CKD or kidney failure" },
        { icon: <Activity className="h-8 w-8 text-primary" />, title: "Acute Kidney Injury", description: "(Personal history of AKI)" },
        { icon: <Cigarette className="h-8 w-8 text-primary" />, title: "Smoking", description: "and/or tobacco use" },
    ];

    return (
        <div className='flex'>
            <Sidebar>
                <AppSidebar />
            </Sidebar>
            <SidebarInset>
                <div className="bg-background text-foreground flex-1">
                    <header className="bg-card/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
                        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                            <Link href="/" className="flex items-center gap-2">
                                <svg className="h-10 w-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V3.5C9.1 3.5 7.25 5.1 7.25 7.25C7.25 9.4 9.1 11 11.25 11V21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25V11C14.9 11 16.75 9.4 16.75 7.25C16.75 5.1 14.9 3.5 12.75 3.5V2.75Z" />
                                    <path d="M7.25 14.5C7.25 14.0858 6.91421 13.75 6.5 13.75C6.08579 13.75 5.75 14.0858 5.75 14.5V15C4.37 15 3.25 16 3.25 17.25C3.25 18.5 4.37 19.5 5.75 19.5V20C5.75 20.4142 6.08579 20.75 6.5 20.75C6.91421 20.75 7.25 20.4142 7.25 20V19.5C8.63 19.5 9.75 18.5 9.75 17.25C9.75 16 8.63 15 7.25 15V14.5Z" />
                                    <path d="M18.25 13.75C17.8358 13.75 17.5 14.0858 17.5 14.5V15C16.12 15 15 16 15 17.25C15 18.5 16.12 19.5 17.5 19.5V20C17.5 20.4142 17.8358 20.75 18.25 20.75C18.6642 20.75 19 20.4142 19 20V19.5C20.38 19.5 21.5 18.5 21.5 17.25C21.5 16 20.38 15 19 15V14.5C19 14.0858 18.6642 13.75 18.25 13.75Z" />
                                </svg>
                                <h1 className="text-2xl font-bold text-primary">Nirogyam</h1>
                            </Link>
                            <nav>
                                <Button variant="ghost" asChild>
                                    <Link href="/"><Home className="mr-2 h-4 w-4" /> Home</Link>
                                </Button>
                            </nav>
                        </div>
                    </header>
                    <main className="container mx-auto px-4 py-12 md:py-20">
                        <div className="max-w-5xl mx-auto">
                            <section id="about-ckd" className="text-center mb-16">
                                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Understanding the Stages of CKD</h1>
                                <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
                                    Chronic Kidney Disease (CKD) signifies a gradual loss of kidney function over time. Your kidneys are vital for filtering waste, managing blood pressure, and maintaining overall balance in your body. Understanding the stage of your CKD is key to determining the right treatment plan.
                                </p>
                            </section>

                            <section id="diagnosis-guide" className="mb-16 p-8 bg-blue-100 rounded-lg shadow-md">
                                <p className="text-center text-xl text-blue-800 mb-8">Being diagnosed with a kidney condition can be a scary time. Find out about treatments across the five stages of chronic kidney disease (CKD).</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl mx-auto">
                                    <StageButton href="/stages-of-ckd">Newly diagnosed?</StageButton>
                                    <StageButton href="/stages-of-ckd">Kidney disease stages</StageButton>
                                    <StageButton href="/stages-of-ckd" className="!bg-orange-600 !text-white">Stage 1 (CKD1)</StageButton>
                                    <StageButton href="/stages-of-ckd">Stage 2 (CKD2)</StageButton>
                                    <StageButton href="/stages-of-ckd">Stage 3 (CKD3)</StageButton>
                                    <StageButton href="/stages-of-ckd">Stage 4 (CKD4)</StageButton>
                                    <StageButton href="/stages-of-ckd">Stage 5 (CKD5)</StageButton>
                                </div>
                            </section>
                            
                            <section id="how-ckd-is-evaluated" className="mb-16 p-8 bg-card rounded-lg shadow-md">
                                <h2 className="text-3xl font-bold text-primary mb-4 text-center">How CKD is Evaluated</h2>
                                <p className="text-foreground/80 text-center max-w-3xl mx-auto">
                                    Kidney health is primarily assessed through two simple tests: the estimated Glomerular Filtration Rate (eGFR), which is a blood test, and the urine albumin-to-creatinine ratio (uACR), a urine test. Both are essential for a complete understanding of your kidney function. To confirm a CKD diagnosis, these tests are typically repeated over three months to verify long-term damage. An eGFR below 60 or a uACR above 30 for three months or more can indicate kidney disease.
                                </p>
                            </section>

                            <section id="stages-of-ckd" className="mb-16">
                                <h2 className="text-3xl font-bold text-primary mb-10 text-center">The 5 Stages of CKD</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {stages.map((stage, index) => (
                                        <Card key={index} className="flex flex-col text-center">
                                            <CardHeader>
                                                <KidneyIcon percentage={stage.percentage} />
                                                <CardTitle className="text-2xl mt-4">{stage.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="flex-grow flex flex-col justify-center">
                                                <p className="text-foreground/80 mb-4">{stage.description}</p>
                                                <div className="bg-primary/10 p-3 rounded-md">
                                                    <p className="font-semibold text-primary">eGFR: {stage.egfr}</p>
                                                    {stage.damage && <p className="font-semibold text-primary">{stage.damage}</p>}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                            
                            <section id="risk-factors" className="mb-16">
                                <h2 className="text-3xl font-bold text-primary mb-10 text-center">Risk Factors for CKD</h2>
                                <p className="text-lg text-foreground/80 text-center mb-10 max-w-3xl mx-auto">
                                    Anyone can develop CKD, but certain factors increase your risk. Often, it's a combination of physical, environmental, and social factors. Knowing the risks is the first step toward early detection, as CKD often has no early symptoms.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {riskFactors.map((factor, index) => (
                                        <RiskFactorCard key={index} icon={factor.icon} title={factor.title} description={factor.description} />
                                    ))}
                                </div>
                            </section>

                            <section id="call-to-action" className="mb-16 bg-primary/10 p-10 rounded-lg text-center">
                                <div className="max-w-3xl mx-auto">
                                    <Image src="https://placehold.co/150x150.png" alt="Smiling mother and daughter" width={150} height={150} className="rounded-full mx-auto mb-6 shadow-lg" data-ai-hint="family hug" />
                                    <h2 className="text-3xl font-bold text-primary mb-4">One Day, No Life Will Be Lost to Kidney Disease</h2>
                                    <p className="text-foreground/80 mb-6">
                                        Your support makes extraordinary progress possible. A gift today helps revolutionize kidney health for generations to come by funding research, advocating for better policies, and equipping patients and families with the resources they need.
                                    </p>
                                    <Button size="lg">Get Involved</Button>
                                </div>
                            </section>

                            <section id="faq">
                                <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
                                <div className="max-w-3xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger className="text-lg">What does my CKD stage mean for me?</AccordionTrigger>
                                            <AccordionContent>
                                                Your CKD stage helps your doctor create the best treatment plan for you. In earlier stages, the focus is on preserving kidney function through lifestyle changes, diet, and managing conditions like diabetes and high blood pressure. In later stages, discussions may begin about dialysis or kidney transplantation.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger className="text-lg">Can I improve my kidney function?</AccordionTrigger>
                                            <AccordionContent>
                                                While CKD is generally a progressive disease, you can take steps to slow its progression and, in some cases, improve kidney function. This includes managing blood sugar and blood pressure, eating a kidney-friendly diet, avoiding certain medications, and not smoking.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-3">
                                            <AccordionTrigger className="text-lg">How often should I get my kidneys checked?</AccordionTrigger>
                                            <AccordionContent>
                                                If you have risk factors for CKD, such as diabetes or high blood pressure, your doctor will recommend regular eGFR and uACR tests. The frequency depends on your overall health and current kidney function.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </SidebarInset>
        </div>
    );
};

export default CkdStagesPage;
