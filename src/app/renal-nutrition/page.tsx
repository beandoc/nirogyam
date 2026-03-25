'use client'

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, Droplet, Flame, HeartPulse, Bone, Utensils, Scale, UserCheck, Wind, Soup, Cloudy, Leaf, ArrowRight, ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const NutrientCard = ({ icon, title, href, children }: { icon: React.ReactNode, title: string, href?: string, children: React.ReactNode }) => (
    <Card className="glass-card hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group animate-fade-in-up">
        <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors shadow-inner">
                {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8 text-primary", strokeWidth: 1.5 })}
            </div>
            <CardTitle className="text-xl font-heading font-bold text-foreground/90">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <div className="text-foreground/70 space-y-2 leading-relaxed">{children}</div>
            {href && (
                <Button asChild variant="link" className="px-0 mt-6 text-primary hover:text-blue-700 font-semibold transition-colors">
                    <Link href={href} className="flex items-center">
                        Explore Insights <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"/>
                    </Link>
                </Button>
            )}
        </CardContent>
    </Card>
);

const FaqItem = ({ value, question, children }: { value: string, question: string, children: React.ReactNode }) => (
    <AccordionItem value={value} className="border-b border-primary/5 last:border-0">
        <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary transition-colors py-6">{question}</AccordionTrigger>
        <AccordionContent className="space-y-4 text-foreground/70 pb-6 text-base leading-relaxed">
            {children}
        </AccordionContent>
    </AccordionItem>
);

const RenalNutritionPage = () => {
    return (
        <div className="bg-slate-50/50 text-foreground flex-1 min-h-screen">
            <AppHeader />
            <main className="container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-5xl mx-auto">
                    <Button asChild variant="ghost" className="mb-12 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all group">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                            Back to Knowledge Center
                        </Link>
                    </Button>

                    <section id="intro" className="mb-20">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] rounded-full animate-fade-in-up">Nutrition Guide</span>
                            <h1 className="text-5xl md:text-7xl font-black font-heading leading-[1.1] bg-clip-text text-transparent bg-gradient-to-br from-primary via-blue-700 to-indigo-900 tracking-tight animate-fade-in-up">
                                Your Guide to <br /> Renal Nutrition
                            </h1>
                            <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                                Master the art of kidney-friendly eating. Discover how strategic food choices can empower your health journey and protect your vitality.
                            </p>
                        </div>
                    </section>

                    <section id="dietitian" className="mb-24 glass-card p-10 md:p-14 rounded-[2rem] flex flex-col md:flex-row items-center gap-12 shadow-2xl shadow-primary/5 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                            <div className="relative bg-white p-6 rounded-3xl shadow-xl ring-1 ring-primary/5">
                                <UserCheck className="h-16 w-16 text-primary" strokeWidth={1} />
                            </div>
                        </div>
                        <div className="space-y-4 text-center md:text-left">
                            <h2 className="text-3xl font-black font-heading text-primary">The Role of a Registered Dietitian</h2>
                            <p className="text-foreground/70 text-lg leading-relaxed">
                                A registered dietitian specializing in kidney disease is your ultimate navigator. They craft a <span className="text-primary font-bold">personalized architectural plan</span> for your health, balancing your lifestyle with clinical precision to slow disease progression and enhance your quality of life.
                            </p>
                        </div>
                    </section>

                    <section id="nutrients" className="mb-24 space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl font-black font-heading text-slate-900">Key Nutrients to Manage</h2>
                            <p className="text-lg text-foreground/60 max-w-3xl mx-auto leading-relaxed">
                                Precision management of specific nutrients is paramount. Your dietitian will help you calibrate these levels based on your unique clinical biometrics.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <NutrientCard icon={<Bone />} title="Phosphorus" href="/phosphorus-explained">
                                <p>Preserve your skeletal structural integrity. As function shifts, phosphorus can accumulate—strategic management is key to long-term vitality.</p>
                            </NutrientCard>
                            <NutrientCard icon={<HeartPulse />} title="Potassium" href="/potassium-explained">
                                <p>Harmonize your cardiac rhythm. Calibrating potassium levels ensures optimal muscle performance and cardiovascular stability.</p>
                            </NutrientCard>
                            <NutrientCard icon={<Leaf />} title="Protein" href="/protein-explained">
                                <p>Optimize cellular repair. High-quality, plant-centric proteins offer a lighter load for renal filtration while maintaining lean mass.</p>
                            </NutrientCard>
                            <NutrientCard icon={<Cloudy />} title="Sodium" href="/sodium-explained">
                                <p>Master fluid equilibrium. Reducing sodium is the most effective lever for blood pressure control and edema prevention.</p>
                            </NutrientCard>
                        </div>

                        <div className="bg-primary/5 p-12 rounded-[2.5rem] space-y-12">
                            <h3 className="text-3xl font-black font-heading text-primary text-center">Clinical Considerations</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                <div className="space-y-3">
                                    <h4 className="text-xl font-bold font-heading text-foreground/90 flex items-center gap-3">
                                        <div className="h-2 w-2 bg-primary rounded-full" /> Calcium
                                    </h4>
                                    <p className="text-foreground/60 leading-relaxed">Balancing calcium often involves complex interactions with phosphorus. Professional guidance ensures your bone matrix remains robust.</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-bold font-heading text-foreground/90 flex items-center gap-3">
                                        <div className="h-2 w-2 bg-primary rounded-full" /> Fluid Intelligence
                                    </h4>
                                    <p className="text-foreground/60 leading-relaxed">Monitoring intake volume becomes critical in advanced stages to prevent cardiorenal strain and preserve systemic balance.</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-bold font-heading text-foreground/90 flex items-center gap-3">
                                        <div className="h-2 w-2 bg-primary rounded-full" /> Metobolic Energy
                                    </h4>
                                    <p className="text-foreground/60 leading-relaxed">Ensuring adequate caloric density is vital to prevent protein catabolism, allowing your body to focus on repair and maintenance.</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-bold font-heading text-foreground/90 flex items-center gap-3">
                                        <div className="h-2 w-2 bg-primary rounded-full" /> Micronutrient Support
                                    </h4>
                                    <p className="text-foreground/60 leading-relaxed">Precision supplementation tailored for renal needs can bridge dietary gaps, supporting metabolic health without overloading the system.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="questions-for-team" className="mb-24 space-y-12">
                         <div className="text-center space-y-4">
                            <h2 className="text-4xl font-black font-heading text-slate-900">Expert Consultation</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                                Empower your next appointment by asking these high-impact questions to your clinical team.
                            </p>
                        </div>
                        <div className="glass-card rounded-[2rem] p-8 md:p-12 shadow-xl shadow-primary/5">
                            <Accordion type="single" collapsible className="w-full">
                                <FaqItem value="q1" question="What specific dietary architecture matches my CKD stage?">
                                    <p>Your needs are evolving. Aligning your menu with current laboratory biometrics is the most effective way to protect renal function.</p>
                                </FaqItem>
                                <FaqItem value="q2" question="Can we integrate a renal dietitian into my care team?">
                                    <p>Specialized nutritional expertise is a powerful adjunct to medical therapy, providing practical strategies for daily success.</p>
                                </FaqItem>
                                <FaqItem value="q3" question="How do we optimize my acid-base balance through nutrition?">
                                    <p>Modulating dietary acid load—often by increasing alkaline, plant-based foods—is a proven therapy for managing metabolic acidosis.</p>
                                </FaqItem>
                                <FaqItem value="q4" question="Is my protein intake mathematically optimized for my health?">
                                    <p>A dietitian can calculate your exact requirements, ensuring you receive enough for muscle maintenance without creating unnecessary nitrogenous waste.</p>
                                </FaqItem>
                            </Accordion>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default RenalNutritionPage;
