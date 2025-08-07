
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Droplet, Microscope, Stethoscope, Pill, LifeBuoy, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="mb-8">
        <CardHeader>
            <div className="flex items-center gap-4">
                {icon}
                <CardTitle className="text-2xl text-primary">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <div className="prose lg:prose-xl max-w-none text-foreground/90 space-y-4">
                {children}
            </div>
        </CardContent>
    </Card>
);

const UrinaryTractInfectionPage = () => {
    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <Button asChild variant="outline" className="mb-8">
                        <Link href="/kidney-health">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Kidney Health
                        </Link>
                    </Button>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">A Guide to Urinary Tract Infections (UTIs)</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>A urinary tract infection (UTI) is an infection in any part of your urinary system—your kidneys, ureters, bladder, and urethra. While most UTIs involve the lower tract (the bladder and urethra), they can become serious if the infection spreads to the kidneys.</p>
                    </div>

                    <InfoCard icon={<Droplet className="h-8 w-8 text-primary" />} title="What Are the Different Types of UTIs?">
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Cystitis (Bladder Infection):</strong> The most common type, causing inflammation and discomfort in the bladder.</li>
                            <li><strong>Urethritis (Urethra Infection):</strong> An infection limited to the tube that carries urine out of the body.</li>
                            <li><strong>Pyelonephritis (Kidney Infection):</strong> A more serious infection where bacteria travel up to one or both kidneys. This requires prompt medical attention.</li>
                            <li><strong>Recurrent UTIs:</strong> Defined as having two or more UTIs in six months, or three or more in a year. This often signals an underlying issue.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard icon={<AlertTriangle className="h-8 w-8 text-destructive" />} title="What Are the Symptoms?">
                        <h3 className="text-xl font-semibold text-foreground">Lower Tract UTI (Bladder Infection)</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>A painful or burning feeling when you urinate.</li>
                            <li>A frequent or intense urge to urinate, even if little comes out.</li>
                            <li>Cloudy, dark, bloody, or strong-smelling urine.</li>
                            <li>Pressure or cramping in the lower abdomen.</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-foreground mt-6">Upper Tract UTI (Kidney Infection)</h3>
                        <p>In addition to the symptoms above, a kidney infection can cause:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Fever and chills.</li>
                            <li>Pain in your lower back or side.</li>
                            <li>Nausea and vomiting.</li>
                        </ul>
                         <p className="font-bold mt-4">If you suspect a kidney infection, seek medical help immediately.</p>
                    </InfoCard>

                    <InfoCard icon={<Microscope className="h-8 w-8 text-primary" />} title="Why Do UTIs Happen? Causes and Risks">
                        <p>UTIs are most often caused by bacteria, especially E. coli from the digestive tract, entering the urethra. Women are more prone to UTIs due to their shorter urethra.</p>
                        <h3 className="text-xl font-semibold text-foreground">Key Risk Factors:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Sexual Activity:</strong> Can introduce bacteria into the urinary tract.</li>
                           <li><strong>Hormonal Changes:</strong> Particularly during menopause.</li>
                           <li><strong>Blockages:</strong> Kidney stones or an enlarged prostate can prevent the bladder from emptying fully.</li>
                           <li><strong>Catheter Use:</strong> Provides a direct path for bacteria.</li>
                           <li><strong>Weakened Immune System:</strong> Conditions like diabetes can increase risk.</li>
                        </ul>
                    </InfoCard>
                    
                    <InfoCard icon={<Stethoscope className="h-8 w-8 text-primary" />} title="How Doctors Diagnose and Treat UTIs">
                         <h3 className="text-xl font-semibold text-foreground">Diagnosis</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Urinalysis:</strong> A urine sample is checked for signs of infection.</li>
                            <li><strong>Urine Culture:</strong> This crucial test identifies the specific bacteria and helps your doctor choose the most effective antibiotic.</li>
                            <li><strong>Imaging:</strong> If UTIs are recurrent, an ultrasound or CT scan might be used to check for structural problems.</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-foreground mt-6">Treatment</h3>
                         <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Antibiotics:</strong> The main treatment for bacterial UTIs. It is vital to complete the full course prescribed by your doctor.</li>
                            <li><strong>Pain Relief:</strong> Over-the-counter pain relievers can help with discomfort.</li>
                            <li><strong>Hydration:</strong> Drinking plenty of water helps flush the system.</li>
                            <li><strong>Hospitalization:</strong> Severe kidney infections may require IV antibiotics.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard icon={<Shield className="h-8 w-8 text-green-600" />} title="Tips for Prevention">
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Stay Hydrated:</strong> Drink lots of water to flush out bacteria.</li>
                            <li><strong>Wipe Correctly:</strong> For women, always wipe from front to back.</li>
                            <li><strong>Urinate After Sex:</strong> This helps wash away any bacteria near the urethra.</li>
                            <li><strong>Don't Hold It:</strong> Go to the bathroom when you feel the urge.</li>
                            <li><strong>Wear Breathable Underwear:</strong> Cotton is a good choice.</li>
                            <li><strong>Avoid Irritants:</strong> Some feminine hygiene products or bath products can cause irritation.</li>
                        </ul>
                    </InfoCard>
                    
                     <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary flex items-center gap-3"><LifeBuoy /> When to See a Doctor</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <p className="prose lg:prose-xl max-w-none text-foreground/90">
                                If you have any symptoms of a UTI, it's important to consult a healthcare provider. If you have symptoms of a kidney infection (fever, back pain, vomiting), seek immediate medical attention. For recurrent UTIs, a thorough medical evaluation is necessary to find and treat the underlying cause.
                             </p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default UrinaryTractInfectionPage;
