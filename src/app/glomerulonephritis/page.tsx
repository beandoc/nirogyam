
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
                                        <p>The manifestation of glomerular disease is heterogeneous, but the diagnosis often begins with the recognition of key clinical syndromes. The initial assessment of a patient provides crucial clues to the underlying pathologic process even before a kidney biopsy is performed. Glomerular injury can be understood through its primary effects on kidney function, which include loss of filtration capacity, leakage of protein into the urine (proteinuria), and leakage of blood into the urine (hematuria). These abnormalities manifest in distinct clinical patterns.</p>
                                        
                                        <h3 className="text-xl font-bold text-primary/90">2.1 Proteinuric Presentations and Nephrotic Syndrome</h3>
                                        <p>Presentations dominated by proteinuria are generally caused by dysfunction of the podocytes, which are essential cells in the kidney's filtration barrier.</p>
                                        
                                        <h4 className="font-semibold text-foreground">2.1.1 Definition and Features of Nephrotic Syndrome</h4>
                                        <p>Nephrotic syndrome is a clinical condition defined by a combination of findings resulting from heavy protein loss in the urine. It is a primary presentation for glomerular diseases such as Minimal Change Disease (MCD), Focal Segmental Glomerulosclerosis (FSGS), and Membranous Nephropathy (MN). The classic triad of features includes:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>Massive Proteinuria:</strong> The defining characteristic, with urinary protein excretion typically exceeding 3.5 grams per day.</li>
                                            <li><strong>Hypoalbuminemia:</strong> Low levels of the protein albumin in the blood (typically ≤2.5 g/dL), a direct result of its loss in the urine.</li>
                                            <li><strong>Edema:</strong> Significant swelling due to fluid retention.</li>
                                        </ul>

                                        <h4 className="font-semibold text-foreground">2.1.2 Complications of the Nephrotic State</h4>
                                        <p>The massive loss of protein in nephrotic syndrome leads to several serious systemic complications beyond the kidneys.</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>Edema (Swelling):</strong> This is often the first notable manifestation that prompts individuals to seek medical evaluation. The fluid accumulation is gravity-dependent, with periorbital (around the eyes) edema being more prominent in the morning and lower extremity edema more obvious later in the day. In severe cases, it can progress to anasarca (widespread body swelling), ascites (fluid in the abdomen), and pleural effusions (fluid around the lungs). This edema is a major contributor to a diminished quality of life for patients.</li>
                                            <li><strong>Dyslipidemia (Abnormal Blood Fats):</strong> Nephrotic syndrome causes marked elevations in blood lipid levels, including total cholesterol and triglycerides. This is often clinically silent but is a key driver of long-term atherosclerotic cardiovascular complications, such as coronary artery disease and stroke.</li>
                                            <li><strong>Hypercoagulopathy (Increased Risk of Blood Clots):</strong> Patients with nephrotic syndrome acquire a profound and complex state where the blood is more prone to clotting. This is due to the urinary loss of anticoagulant proteins while the liver increases production of pro-coagulant factors. This significantly elevates the risk of both venous and arterial thromboembolic events (blood clots), including deep vein thrombosis (DVT), pulmonary embolism (PE), and renal vein thrombosis (RVT).</li>
                                        </ul>
                                        
                                        <h3 className="text-xl font-bold text-primary/90 mt-6">2.2 Hematuric Presentations and Nephritic Syndrome</h3>
                                        <p>Presentations dominated by hematuria (blood in the urine) are typically caused by inflammatory processes that disrupt the integrity of the glomerular basement membrane (GBM).</p>

                                        <h4 className="font-semibold text-foreground">2.2.1 Definition and Features of Nephritic Syndrome</h4>
                                        <p>Nephritic syndrome is a clinical presentation characterized by glomerular inflammation. Its features include:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong>Hematuria:</strong> Blood in the urine is a cardinal sign.</li>
                                            <li><strong>Hypertension:</strong> Elevated blood pressure is an almost universal feature in patients with low GFR.</li>
                                            <li><strong>Reduced Glomerular Filtration Rate (GFR):</strong> The inflammation impairs the kidneys' ability to filter blood, leading to a decline in function.</li>
                                            <li><strong>Fluid Retention:</strong> Salt is retained due to the limited ability of the kidneys to excrete excess, leading to fluid retention and contributing to hypertension.</li>
                                        </ul>

                                        <h4 className="font-semibold text-foreground">2.2.2 Distinguishing Glomerular Hematuria</h4>
                                        <p>Because hematuria can originate from anywhere in the urinary tract, certain findings point specifically to a glomerular source. These include the presence of <strong>dysmorphic red blood cells</strong> (red cells that have been deformed by squeezing through breaks in the GBM) and <strong>red blood cell casts</strong> (cylindrical structures formed in the kidney tubules containing trapped red blood cells) upon microscopic examination of the urine sediment.</p>

                                        <h3 className="text-xl font-bold text-primary/90 mt-6">2.3 Rapidly Progressive Glomerulonephritis (RPGN)</h3>
                                        <p>RPGN is not a specific disease but a clinical syndrome defined by a rapid and severe decline in kidney function that occurs over days to weeks. It is a medical emergency. The characteristic finding on a kidney biopsy is <strong>crescent formation</strong>, a lesion that represents a response to severe injury to the glomerular capillary wall. Conditions that can cause RPGN include ANCA-associated vasculitis and anti-GBM disease.</p>
                                        
                                        <h3 className="text-xl font-bold text-primary/90 mt-6">2.4 Other Key Clinical Manifestations</h3>

                                        <h4 className="font-semibold text-foreground">2.4.1 Hypertension (High Blood Pressure)</h4>
                                        <p>High blood pressure is a common manifestation of glomerular disease. In nephritic conditions, the severity of hypertension can be disproportionate to the reduction in GFR. Conversely, in patients with heavy proteinuria (nephrotic syndrome) but normal GFR, blood pressure is often normal or low.</p>

                                        <h4 className="font-semibold text-foreground">2.4.2 Fluid Retention</h4>
                                        <p>The mechanism of fluid retention differs between presentations. In nephrotic syndrome, there is avid salt retention in the nephron, and much of the excess fluid leaks into body tissues. In low GFR states typical of nephritic syndrome, salt is retained due to the kidney's limited ability to excrete it, leading to prominent intravascular (within the blood vessels) fluid retention that raises blood pressure.</p>
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
