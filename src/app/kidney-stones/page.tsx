
'use client'
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, Droplet, Microscope, ShieldQuestion, Stethoscope, TestTube2, AlertTriangle, Apple, Group, HeartPulse, ShieldCheck, Soup, Wine, ArrowLeft, Download, Bone } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-foreground/80 space-y-4">{children}</div>
        </CardContent>
    </Card>
);

const FaqItem = ({ value, question, children }: { value: string, question: string, children: React.ReactNode }) => (
    <AccordionItem value={value}>
        <AccordionTrigger className="font-semibold text-lg">{question}</AccordionTrigger>
        <AccordionContent className="space-y-4 text-foreground/80">
            {children}
        </AccordionContent>
    </AccordionItem>
);

const KidneyStonesPage = () => {
    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />

            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <Button asChild variant="outline" className="mb-8">
                        <Link href="/kidney-health">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Kidney Health Topics
                        </Link>
                    </Button>
                    <section id="intro" className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Understanding Kidney Stones (Nephrolithiasis)</h1>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                            Kidney stone disease is a prevalent condition where solid crystals form in the kidneys. This guide explains what they are, why they form, and how they can be treated and prevented.
                        </p>
                    </section>

                    <section id="what-are-stones" className="mb-12">
                        <InfoCard icon={<Microscope className="h-10 w-10 text-primary" />} title="1.0 Introduction to Nephrolithiasis">
                            <p>
                                A kidney stone (or renal calculus) is a hard, solid object formed from chemicals and salts that precipitate out of the urine. While often asymptomatic when small, kidney stones can cause significant acute pain, particularly when they obstruct the urinary tract.
                            </p>
                            <p>
                                Normally, urine contains dissolved waste products. When there's too much waste in too little liquid, crystals can form. These crystals attract other elements, growing into a solid mass unless passed from the body. A stone can remain in the kidney or travel down the urinary tract. Small stones might pass with minimal pain, but larger ones can block urine flow, causing significant discomfort.
                            </p>
                        </InfoCard>
                    </section>

                    <section id="types" className="mb-12">
                        <InfoCard icon={<TestTube2 className="h-10 w-10 text-primary" />} title="2.0 Classification of Renal Calculi">
                            <p className="mb-4">Kidney stones are classified by their chemical composition, which helps guide preventive strategies.</p>
                            <ul className="list-disc pl-5 space-y-3">
                                <li><strong>Calcium Oxalate Stones:</strong> The most common type. These form when calcium combines with oxalate in the urine, often due to dietary factors or metabolic disorders.</li>
                                <li><strong>Calcium Phosphate Stones:</strong> Frequently associated with underlying conditions like hyperparathyroidism or renal tubular acidosis.</li>
                                <li><strong>Uric Acid Stones:</strong> Form in acidic urine and are often linked to high-purine diets (organ meats, shellfish), dehydration, or metabolic conditions like gout.</li>
                                <li><strong>Struvite Stones:</strong> Also known as infection stones, these are less common and typically form in the presence of an upper urinary tract infection.</li>
                                <li><strong>Cystine Stones:</strong> A rare type resulting from a hereditary disorder called cystinuria, causing excessive excretion of the amino acid cystine.</li>
                            </ul>
                        </InfoCard>
                    </section>

                    <section id="symptoms" className="mb-12">
                        <InfoCard icon={<AlertTriangle className="h-10 w-10 text-destructive" />} title="3.0 Clinical Presentation and Symptomatology">
                             <p>
                                Symptoms often manifest when a stone migrates into the ureter, causing irritation or obstruction.
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Renal Colic:</strong> The hallmark symptom is severe, sharp pain in the flank, back, or lower abdomen, often coming in waves.</li>
                                <li><strong>Hematuria:</strong> Blood in the urine, which may be visible (pink, red, or brown) or only detectable under a microscope.</li>
                                <li><strong>Urinary Symptoms:</strong> A persistent urge to urinate, frequent urination, or a burning sensation during urination (dysuria).</li>
                                <li><strong>Systemic Symptoms:</strong> The intense pain can induce nausea and vomiting. Fever and chills are critical signs that may indicate a concurrent infection, requiring urgent medical attention.</li>
                            </ul>
                        </InfoCard>
                    </section>
                    
                    <section id="causes-risk-factors" className="mb-12">
                         <InfoCard icon={<ShieldQuestion className="h-10 w-10 text-primary" />} title="4.0 Etiology and Risk Factors">
                            <p>Stone formation is multifactorial, influenced by environment, diet, and genetics. The primary cause is urine supersaturation with stone-forming substances and a lack of natural inhibitors.</p>
                            <h3 className="font-semibold mt-4">Key Risk Factors:</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Dehydration:</strong> The most significant factor, leading to concentrated urine.</li>
                                <li><strong>Dietary Factors:</strong> High intake of sodium, animal protein, and oxalate-rich foods. High fructose consumption (from sugar and syrups) is also linked.</li>
                                <li><strong>Medical Conditions:</strong> Obesity, diabetes, gout, and certain gastrointestinal diseases.</li>
                                <li><strong>Genetic Predisposition:</strong> A family history significantly increases risk.</li>
                                <li><strong>Medications:</strong> Certain diuretics and calcium-based antacids can contribute.</li>
                            </ul>
                        </InfoCard>
                    </section>
                    
                    <section id="diagnosis-treatment" className="mb-12">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <InfoCard icon={<Stethoscope className="h-10 w-10 text-primary" />} title="5.0 & 6.0 Diagnosis and Management">
                                <FaqItem value="diagnosis" question="How are kidney stones diagnosed?">
                                    <p>Diagnosis begins with a medical history and physical exam. A non-contrast helical CT scan is the gold standard for diagnosis. Other tests include:</p>
                                    <ul className="list-disc pl-6 mt-4 space-y-2">
                                        <li><strong>Laboratory Analysis:</strong> Blood tests to assess kidney function and urinalysis to detect blood, crystals, or signs of infection. A 24-hour urine collection can measure levels of stone-forming substances.</li>
                                        <li><strong>Imaging:</strong> A renal ultrasound or a KUB (kidney-ureter-bladder) x-ray may also be used.</li>
                                        <li><strong>Stone Analysis:</strong> Analyzing a passed or removed stone is crucial for guiding specific prevention strategies.</li>
                                    </ul>
                                </FaqItem>
                                <FaqItem value="treatment" question="What are the treatment options?">
                                    <p>Treatment depends on the stone's size, type, and symptoms. For small stones, conservative management with hydration, pain relief (analgesia), and medical expulsive therapy (e.g., alpha-blockers) is often sufficient.</p>
                                    <p>For larger stones or those causing severe issues, active removal is needed:</p>
                                    <ul className="list-disc pl-6 mt-4 space-y-2">
                                        <li><strong>Extracorporeal Shock-wave lithotripsy (ESWL):</strong> Uses sound waves to break stones into smaller, passable fragments.</li>
                                        <li><strong>Ureteroscopy (URS):</strong> A small scope is inserted into the ureter to remove or break up the stone, often with a laser.</li>
                                        <li><strong>Percutaneous Nephrolithotomy (PCNL):</strong> A surgical procedure for very large or complex stones, involving a small incision in the back.</li>
                                    </ul>
                                </FaqItem>
                                <FaqItem value="complications" question="7.0 What are the potential complications?">
                                     <p>If not managed properly, kidney stones can lead to serious issues:</p>
                                     <ul className="list-disc pl-6 mt-4 space-y-2">
                                        <li><strong>Urinary Tract Obstruction:</strong> Can cause urine to back up, leading to kidney swelling (hydronephrosis) and damage.</li>
                                        <li><strong>Infection:</strong> Blockages increase the risk of UTIs, which can escalate to a kidney infection (pyelonephritis) or sepsis.</li>
                                        <li><strong>Renal Damage:</strong> Recurrent stones or prolonged obstruction can cause permanent kidney damage and chronic kidney disease.</li>
                                     </ul>
                                </FaqItem>
                            </InfoCard>
                        </Accordion>
                    </section>
                    
                    <section id="prevention" className="mb-12">
                        <InfoCard icon={<ShieldCheck className="h-10 w-10 text-green-600" />} title="8.0 Prevention of Recurrence">
                            <p className="mb-4">
                                If you've had one kidney stone, your risk of another is about 50% within 5-7 years. Prevention is key.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <Droplet className="h-6 w-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Stay Hydrated</h4>
                                        <p className="text-sm">The single most effective measure. Aim for a urine output of 2-2.5 litres per day. Water is preferable to sodas or sugary drinks.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Apple className="h-6 w-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Dietary Modifications</h4>
                                        <p className="text-sm">Based on your stone type, your doctor may recommend reducing sodium, limiting animal protein, or moderating high-oxalate foods.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <HeartPulse className="h-6 w-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Pharmacological Therapy</h4>
                                        <p className="text-sm">For recurrent stones due to metabolic issues, medication may be prescribed to alter urine composition and reduce risk.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Group className="h-6 w-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Consult a Professional</h4>
                                        <p className="text-sm">See a doctor or registered dietitian to get personalized recommendations based on a 24-hour urine analysis.</p>
                                    </div>
                                </div>
                            </div>
                        </InfoCard>
                    </section>
                    
                    <section id="resources" className="mt-12 not-prose">
                        <Card>
                            <CardHeader>
                                <CardTitle>Resources</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col sm:flex-row gap-4">
                                <Button asChild className="w-full">
                                    <Link href="/kidney-stones/summary">
                                        <Download className="mr-2 h-4 w-4" /> View English Summary
                                    </Link>
                                </Button>
                                <Button asChild className="w-full">
                                    <Link href="/kidney-stones/summary-hindi">
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

export default KidneyStonesPage;
