
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Droplet, Wind, Heart, TestTube, Filter, Droplets, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-foreground/80 space-y-3">{children}</div>
        </CardContent>
    </Card>
);

const HowKidneysWorkPage = () => {
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
                    <section id="intro" className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">How Your Kidneys Work</h1>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                            Your kidneys are a critical part of your health. They "clean" your blood by removing waste through urine, help make red blood cells, and regulate blood pressure.
                        </p>
                    </section>

                    <section id="the-filtering-process" className="mb-12">
                        <Card className="md:grid md:grid-cols-2 items-center">
                            <div className="p-6">
                                <CardTitle className="text-2xl text-primary mb-4">The Body's Master Chemists</CardTitle>
                                <CardContent className="p-0 text-foreground/80 space-y-4">
                                    <p>One of the main jobs of the kidneys is to filter wastes from the blood and return cleaned blood back to the body. Every minute, about a liter of blood—one-fifth of all the blood pumped by the heart—enters the kidneys.</p>
                                    <p>Amazingly, a single healthy kidney can greatly increase its workload. If one kidney is injured or donated, the remaining one can work harder to keep your body healthy.</p>
                                </CardContent>
                            </div>
                            <div className="p-6">
                                <Image src="https://placehold.co/600x400.png" alt="Diagram of a kidney" width={600} height={400} className="rounded-lg shadow-md" data-ai-hint="kidney diagram" />
                            </div>
                        </Card>
                    </section>
                    
                    <section id="nephrons" className="mb-16">
                        <Card className="p-8">
                            <CardHeader className="p-0 text-center mb-4">
                                <Filter className="h-12 w-12 mx-auto text-primary mb-3" />
                                <CardTitle className="text-2xl text-primary">Inside the Kidney: The Nephrons</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 text-foreground/80 space-y-4 text-center max-w-3xl mx-auto">
                                <p>Inside each kidney are over a million tiny filtering units called nephrons. Each nephron contains a microscopic filter called a glomerulus, which is attached to a tubule. As blood passes through, the glomeruli separate water and waste products, which then flow into the tubules.</p>
                                <p>Much of this water is reabsorbed by the tubules, while the wastes are concentrated into urine. The urine collects in the renal pelvis and flows through tubes called ureters to the bladder, ready to be passed out of the body. On average, the kidneys produce one to two liters of urine daily.</p>
                            </CardContent>
                        </Card>
                    </section>
                    
                    <section id="why-so-important" className="mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Are Kidneys So Important?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                            <InfoCard icon={<Droplets className="h-8 w-8 text-primary" />} title="Regulate Water">
                                <p>For your body to work correctly, it needs just the right amount of water. The kidneys masterfully remove excess water or retain it when the body needs more, maintaining perfect balance.</p>
                            </InfoCard>
                            <InfoCard icon={<TestTube className="h-8 w-8 text-primary" />} title="Remove Waste & Balance Minerals">
                                <p>The body needs minerals like sodium and potassium from food, but they must be kept at precise levels. Healthy kidneys filter out any excess. They also manage calcium and phosphate, which are vital for bone strength. Wastes like urea and creatinine are also removed; rising levels of these in the blood are a key indicator of decreased kidney function.</p>
                            </InfoCard>
                            <InfoCard icon={<Wind className="h-8 w-8 text-primary" />} title="Produce Hormones">
                                <p>Normal kidneys are also hormone factories. They produce essential chemical messengers that circulate in the bloodstream to regulate blood pressure, stimulate red blood cell production, and maintain the body's calcium balance.</p>
                            </InfoCard>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default HowKidneysWorkPage;
