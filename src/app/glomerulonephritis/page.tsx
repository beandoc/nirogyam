
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Download, Shield } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

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
                    
                    <article className="prose lg:prose-xl max-w-none text-foreground/90 space-y-12">
                        <header>
                             <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">A Guide to Glomerulonephritis (GN)</h1>
                        </header>

                        <section id="what-is-gn">
                            <h2 className="text-3xl font-bold text-primary">1.0 Introduction to Glomerulonephritis</h2>
                            <p>Glomerulonephritis (GN) refers to a group of diseases that injure the part of the kidney that filters blood. These filters, called glomeruli, are tiny, intricate structures made up of small blood vessels. When the glomeruli become inflamed or damaged, the kidneys cannot function properly, leading to a range of health problems. When this filtration barrier is damaged by GN, it can lead to two primary problems: protein leakage (proteinuria) and blood leakage (hematuria).</p>
                        </section>

                        <section id="presentation">
                            <h2 className="text-3xl font-bold text-primary">2.0 Clinical Presentation: How GN Appears</h2>
                            <p>Glomerulonephritis is not a single disease but a spectrum of disorders. The way it presents clinically provides important clues to the underlying cause.</p>
                            <Card className="mt-6">
                                <CardHeader><CardTitle>Nephrotic Syndrome</CardTitle></CardHeader>
                                <CardContent>
                                    <p>Primarily characterized by a heavy leak of protein into the urine. Key signs include:</p>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Heavy Proteinuria (3.5 g/day or more)</li>
                                        <li>Low levels of albumin in the blood (Hypoalbuminemia)</li>
                                        <li>Swelling (Edema) in legs, ankles, and around the eyes</li>
                                        <li>High levels of cholesterol (Dyslipidemia)</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="mt-6">
                                <CardHeader><CardTitle>Nephritic Syndrome</CardTitle></CardHeader>
                                <CardContent>
                                    <p>Primarily characterized by inflammation and the presence of blood in the urine. Key signs include:</p>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Blood in the urine (Hematuria)</li>
                                        <li>High blood pressure (Hypertension)</li>
                                        <li>Reduced kidney function (low GFR)</li>
                                        <li>Reduced urine output (Oliguria)</li>
                                    </ul>
                                </CardContent>
                            </Card>
                             <Card className="mt-6">
                                <CardHeader><CardTitle>Rapidly Progressive Glomerulonephritis (RPGN)</CardTitle></CardHeader>
                                <CardContent>
                                    <p>This is a medical emergency defined by a rapid loss of kidney function over days to weeks, often showing "crescent formation" on a kidney biopsy, which is a sign of severe injury.</p>
                                </CardContent>
                            </Card>
                        </section>

                        <section id="causes">
                            <h2 className="text-3xl font-bold text-primary">3.0 Understanding the Causes</h2>
                            <p>The injury to the glomeruli in GN can happen through several different pathways, often related to the body's immune system.</p>
                             <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Immune Complex-Mediated Diseases:</strong> Immune system proteins (antibodies) and other substances form clusters that get trapped in the glomeruli, causing inflammation. (e.g., Lupus Nephritis, IgA Nephropathy).</li>
                                <li><strong>Antibody-Mediated Diseases:</strong> The body produces antibodies that directly attack parts of the glomeruli (e.g., Anti-GBM Disease, ANCA-Associated Vasculitis).</li>
                                <li><strong>Podocyte Diseases:</strong> Caused by injury to specialized cells (podocytes) that are part of the kidney's filter, leading to major protein leakage (e.g., Minimal Change Disease, FSGS).</li>
                                <li><strong>Complement Dysregulation Diseases:</strong> An overactive part of the immune system (the complement system) attacks the body's own cells in the glomeruli.</li>
                            </ul>
                            <p className="mt-4">GN can be <strong>"Primary"</strong> (the disease is only in the kidneys) or <strong>"Secondary"</strong> (the kidney disease is caused by another condition like an infection, lupus, or cancer).</p>
                        </section>
                        
                        <section id="diagnosis">
                             <h2 className="text-3xl font-bold text-primary">4.0 The Diagnostic Process</h2>
                             <p>Diagnosis requires a thorough evaluation by a kidney specialist (nephrologist).</p>
                             <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Initial Evaluation:</strong> A detailed medical and family history, plus a physical exam to check for swelling or high blood pressure.</li>
                                <li><strong>Lab and Imaging Tests:</strong> Urine tests to check for protein and blood, blood tests to measure kidney function (creatinine, eGFR) and check for specific antibodies, and a kidney ultrasound to see the kidney's structure.</li>
                                <li><strong>Kidney Biopsy (The Gold Standard):</strong> For most patients, a kidney biopsy is needed to get a definitive diagnosis. A tiny piece of kidney tissue is examined under a microscope to identify the exact type of GN, which is crucial for determining the best treatment.</li>
                             </ul>
                        </section>

                        <section id="management">
                            <h2 className="text-3xl font-bold text-primary">5.0 General Approach to Management</h2>
                            <p>Treatment is complex and varies by the specific type of GN. The main goals are to address the cause, reduce inflammation, and slow kidney damage.</p>
                             <ul className="list-disc pl-6 space-y-3">
                                 <li><strong>Treating the Underlying Cause:</strong> If the GN is secondary to another issue (like an infection), treating that condition is the first step.</li>
                                 <li><strong>Supportive Care:</strong> This is critical for all patients and includes strict blood pressure control, managing swelling with diuretics, and following a kidney-friendly diet (often low in salt).</li>
                                 <li><strong>Immunosuppression:</strong> For many types of GN caused by an overactive immune system, medications that suppress the immune system (like steroids) are used to control the disease.</li>
                             </ul>
                        </section>

                        <section id="resources" className="mt-12 not-prose">
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
                    </article>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisPage;
