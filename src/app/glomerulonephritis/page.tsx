
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Download, Microscope, Stethoscope, Pill, ShieldQuestion, Activity } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SectionCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
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

const GlomerulonephritisPage = () => {
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
                    
                    <header className="mb-12">
                         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">A Guide to Glomerulonephritis (GN)</h1>
                         <p className="text-lg text-foreground/80">Glomerulonephritis (GN) refers to a group of diseases that injure the part of the kidney that filters blood. When these filters (glomeruli) are damaged, your kidneys can't function properly. This guide breaks down this complex topic into key areas.</p>
                    </header>
                    
                    <div className="space-y-6">
                        <SectionCard icon={<Microscope className="h-8 w-8 text-primary" />} title="Introduction to Glomerulonephritis">
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>What is Glomerulonephritis?</AccordionTrigger>
                                    <AccordionContent className="prose max-w-none text-foreground/90">
                                        <p>Glomerulonephritis (GN) means "inflammation of the glomeruli." The glomeruli are tiny, intricate structures in your kidneys that filter your blood. When they become inflamed or damaged, the kidneys cannot function properly, leading to a range of health problems. While some forms of GN were once considered "idiopathic" (of unknown cause), we now know many are caused by specific issues like genetic variations or the body's own immune system creating harmful autoantibodies.</p>
                                        <p>The glomerulus is designed to filter waste and excess fluid from the blood while keeping essential proteins and blood cells in. When this filtration barrier is damaged by GN, it can lead to two primary problems: Protein Leak (Proteinuria) and Blood Leak (Hematuria).</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </SectionCard>

                        <SectionCard icon={<Activity className="h-8 w-8 text-primary" />} title="Clinical Presentation: How GN Appears">
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How does Glomerulonephritis show up?</AccordionTrigger>
                                    <AccordionContent className="prose max-w-none text-foreground/90 space-y-4">
                                       <p>Glomerulonephritis is not a single disease but a spectrum of disorders. The way it presents clinically provides important clues to the underlying cause.</p>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Nephrotic Syndrome</h4>
                                            <p>Primarily characterized by a heavy leak of protein into the urine. Key signs include heavy proteinuria, low blood protein levels (hypoalbuminemia), swelling (edema), and high cholesterol.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Nephritic Syndrome</h4>
                                            <p>Primarily characterized by inflammation and blood in the urine. Key signs include hematuria, high blood pressure, reduced kidney function, and reduced urine output.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Rapidly Progressive Glomerulonephritis (RPGN)</h4>
                                            <p>This is a medical emergency defined by a rapid loss of kidney function over days to weeks. A kidney biopsy often shows "crescent formation," a sign of severe injury.</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </SectionCard>
                        
                        <SectionCard icon={<ShieldQuestion className="h-8 w-8 text-primary" />} title="Understanding the Causes">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>What causes Glomerulonephritis?</AccordionTrigger>
                                    <AccordionContent className="prose max-w-none text-foreground/90 space-y-4">
                                        <p>The injury to the glomeruli in GN can happen through several different pathways, often related to the body's immune system.</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>Immune Complex-Mediated Diseases:</strong> Immune system proteins form clusters that get trapped in the glomeruli, causing inflammation (e.g., Lupus Nephritis, IgA Nephropathy).</li>
                                            <li><strong>Antibody-Mediated Diseases:</strong> The body produces antibodies that directly attack parts of the glomeruli (e.g., Anti-GBM Disease).</li>
                                            <li><strong>Podocyte Diseases:</strong> Caused by injury to specialized cells (podocytes) that are part of the kidney's filter, leading to major protein leakage (e.g., Minimal Change Disease, FSGS).</li>
                                            <li><strong>Complement Dysregulation Diseases:</strong> An overactive part of the immune system (the complement system) attacks the body's own cells in the glomeruli.</li>
                                        </ul>
                                        <p>GN can be "Primary" (the disease is only in the kidneys) or "Secondary" (the kidney disease is caused by another condition like an infection, lupus, or cancer).</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </SectionCard>

                        <SectionCard icon={<Stethoscope className="h-8 w-8 text-primary" />} title="The Diagnostic Process">
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How is Glomerulonephritis diagnosed?</AccordionTrigger>
                                    <AccordionContent className="prose max-w-none text-foreground/90 space-y-4">
                                        <p>Diagnosis requires a thorough evaluation by a kidney specialist (nephrologist).</p>
                                         <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>Initial Evaluation:</strong> Medical history, family history, and a physical exam.</li>
                                            <li><strong>Lab and Imaging Tests:</strong> Urine tests for protein/blood, blood tests for kidney function (eGFR) and specific antibodies, and a kidney ultrasound.</li>
                                            <li><strong>Kidney Biopsy (The Gold Standard):</strong> For most patients, a kidney biopsy is needed to get a definitive diagnosis. A tiny piece of kidney tissue is examined under a microscope to identify the exact type of GN, which is crucial for determining the best treatment.</li>
                                         </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </SectionCard>

                        <SectionCard icon={<Pill className="h-8 w-8 text-primary" />} title="General Approach to Management">
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How is Glomerulonephritis treated?</AccordionTrigger>
                                    <AccordionContent className="prose max-w-none text-foreground/90 space-y-4">
                                        <p>Treatment is complex and varies by the specific type of GN. The main goals are to address the cause, reduce inflammation, and slow kidney damage.</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>Treating the Underlying Cause:</strong> If the GN is secondary to another issue (like an infection), treating that condition is the first step.</li>
                                            <li><strong>Supportive Care:</strong> This is critical for all patients and includes strict blood pressure control, managing swelling with diuretics, and following a kidney-friendly diet (often low in salt).</li>
                                            <li><strong>Immunosuppression:</strong> For many types of GN caused by an overactive immune system, medications that suppress the immune system (like steroids) are used to control the disease.</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </SectionCard>
                    </div>

                    <section id="resources" className="mt-12">
                        <Card>
                            <CardHeader>
                                <CardTitle>Resources</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col sm:flex-row gap-4">
                                <Button asChild className="w-full">
                                    <Link href="/glomerulonephritis/summary">
                                        <Download className="mr-2 h-4 w-4" /> View English Summary
                                    </Link>
                                </Button>
                                <Button asChild className="w-full">
                                    <Link href="/glomerulonephritis/summary-hindi">
                                        <Download className="mr-2 h-4 w-4" /> View Hindi Summary
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisPage;
