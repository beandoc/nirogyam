
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Filter, TestTube, Wind, Droplets, ArrowLeft, Download, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="glass-card border-none rounded-[2rem] hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <CardHeader className="flex flex-row items-center gap-6 p-8 bg-primary/5">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
                {icon}
            </div>
            <CardTitle className="text-2xl font-black font-heading tracking-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
            <div className="text-foreground/60 leading-relaxed text-lg">{children}</div>
        </CardContent>
    </Card>
);

const HowKidneysWorkPage = () => {
    return (
        <div className="bg-background text-foreground flex-1 flex flex-col min-h-screen">
            <AppHeader />

            <main className="container mx-auto px-4 py-12 md:py-24 flex-grow">
                <div className="max-w-5xl mx-auto space-y-16">
                    <Button asChild variant="ghost" className="hover:bg-primary/5 rounded-full px-6 -ml-4">
                        <Link href="/kidney-health">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Clinical Library
                        </Link>
                    </Button>

                    <header className="space-y-6 text-center lg:text-left">
                         <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 animate-fade-in-up">
                            <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-xs font-black uppercase tracking-widest text-primary/70">Foundational Biology</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-heading bg-clip-text text-transparent bg-gradient-to-br from-primary via-blue-700 to-indigo-900 leading-[1.1] tracking-tight animate-fade-in-up">
                            How Your <br className="hidden md:block" /> Kidneys Work
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl leading-relaxed animate-fade-in-up-delay">
                            Your kidneys are the body's master chemists—filtering blood, purifying systems, and discovery the delicate balance of life.
                        </p>
                    </header>

                    <section id="the-filtering-process" className="animate-fade-in-up-delay">
                        <Card className="glass-card border-none rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/5">
                            <div className="grid lg:grid-cols-2">
                                <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
                                    <div className="space-y-4">
                                        <h2 className="text-3xl font-black font-heading text-primary">The Body's Master Chemists</h2>
                                        <div className="h-1.5 w-20 bg-primary/10 rounded-full" />
                                    </div>
                                    <div className="text-lg text-foreground/60 leading-relaxed space-y-6 italic">
                                        <p>"One of the main jobs of the kidneys is to filter wastes from the blood and return cleaned blood back to the body. Every minute, a liter of blood enters these sophisticated filters."</p>
                                        <p className="not-italic text-foreground/80 font-medium">Amazingly, a single healthy kidney can greatly increase its workload to sustain life on its own.</p>
                                    </div>
                                </div>
                                <div className="relative bg-slate-50 flex items-center justify-center p-8 md:p-12">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
                                    <Image 
                                        src="/kidney_diagram.png" 
                                        alt="Scholarly Diagram of a kidney" 
                                        width={800} 
                                        height={600} 
                                        className="rounded-[2rem] shadow-2xl relative z-10 w-full h-auto object-cover" 
                                    />
                                </div>
                            </div>
                        </Card>
                    </section>
                    
                    <section id="nephrons">
                        <div className="glass-card p-10 md:p-16 rounded-[4rem] text-center space-y-8 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-12 text-primary/5 transform translate-x-4 -translate-y-4 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-700">
                                <Filter className="h-64 w-64" />
                            </div>
                            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                                <div className="inline-flex p-4 bg-primary/10 rounded-3xl">
                                    <Filter className="h-8 w-8 text-primary" />
                                </div>
                                <h2 className="text-4xl font-black font-heading text-primary tracking-tight">Inside the Nephrons</h2>
                                <div className="text-xl text-foreground/60 leading-relaxed space-y-6">
                                    <p>Inside each kidney are over a million tiny units called nephrons. Each contains a microscopic filter called a <span className="text-primary font-bold">glomerulus</span> attached to a tubule.</p>
                                    <p>On average, these sophisticated systems filter and refine your internal environment to produce approximately one to two liters of urine daily.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section id="why-so-important" className="space-y-12">
                         <div className="flex items-center gap-6">
                            <h2 className="text-3xl md:text-4xl font-black font-heading text-primary whitespace-nowrap">Clinical Significance</h2>
                            <div className="h-px bg-gradient-to-r from-primary/20 to-transparent flex-grow" />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <InfoCard icon={<Droplets className="h-6 w-6 text-primary" />} title="Water Balance">
                                <p>Masterfully managing water retention and expulsion to maintain precise systemic equilibrium.</p>
                            </InfoCard>
                            <InfoCard icon={<TestTube className="h-6 w-6 text-primary" />} title="Waste Extraction">
                                <p>Filtering urea and creatinine—essential biomarkers for clinical assessment and health tracking.</p>
                            </InfoCard>
                            <InfoCard icon={<Wind className="h-6 w-6 text-primary" />} title="Hormone Synth">
                                <p>Normal kidneys act as factories for messengers that regulate blood pressure and red blood cell production.</p>
                            </InfoCard>
                        </div>
                    </section>

                    <section id="resources" className="pt-16 pb-24">
                        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center space-y-10 text-white relative overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-indigo-900/20 pointer-events-none" />
                             <div className="relative z-10 space-y-4">
                                <h3 className="text-3xl md:text-4xl font-black font-heading">Clinical Documentation</h3>
                                <p className="text-slate-400 text-lg max-w-xl mx-auto">Download verified medical summaries to share with your healthcare provider or maintain for your records.</p>
                             </div>
                             <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-6">
                                <Button asChild size="lg" className="rounded-full px-10 h-14 bg-white text-primary hover:bg-slate-100 font-bold shadow-xl shadow-black/20 transition-all hover:-translate-y-1">
                                    <Link href="/how-kidneys-work/summary">
                                        <Download className="mr-2 h-5 w-5" /> English Summary
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 border-white/20 hover:bg-white/10 text-white font-bold backdrop-blur-md transition-all hover:-translate-y-1">
                                    <Link href="/how-kidneys-work/summary-hindi">
                                        <Download className="mr-2 h-5 w-5" /> Hindi Summary (हिंदी)
                                    </Link>
                                </Button>
                             </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default HowKidneysWorkPage;