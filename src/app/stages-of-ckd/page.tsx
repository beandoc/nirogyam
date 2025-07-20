
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { Droplets, Gauge, Scale, Cake, Dna, Cigarette, Heart, Activity } from 'lucide-react';

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
        <div className="bg-background text-foreground">
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-5xl mx-auto">
                    <section id="about-ckd" className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Understanding the Stages of CKD</h1>
                        <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
                            Chronic Kidney Disease (CKD) signifies a gradual loss of kidney function over time. Your kidneys are vital for filtering waste, managing blood pressure, and maintaining overall balance in your body. Understanding the stage of your CKD is key to determining the right treatment plan.
                        </p>
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
    );
};

export default CkdStagesPage;
