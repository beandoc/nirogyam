
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <Card className="mb-8">
        <CardHeader>
            <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="prose lg:prose-xl max-w-none text-foreground/90 space-y-4">
                {children}
            </div>
        </CardContent>
    </Card>
);

const GlomerulonephritisClinicalPresentationPage = () => {
    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <Button asChild variant="outline" className="mb-8">
                        <Link href="/glomerulonephritis">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Glomerulonephritis Guide
                        </Link>
                    </Button>
                    
                    <header className="mb-12">
                         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Clinical Presentation of Glomerular Disease</h1>
                    </header>
                    
                    <InfoCard title="How Glomerulonephritis Appears">
                        <p>The manifestation of glomerular disease is heterogeneous, but the diagnosis often begins with the recognition of key clinical syndromes. The initial assessment of a patient provides crucial clues to the underlying pathologic process even before a kidney biopsy is performed. Glomerular injury can be understood through its primary effects on kidney function, which include loss of filtration capacity, leakage of protein into the urine (proteinuria), and leakage of blood into the urine (hematuria). These abnormalities manifest in distinct clinical patterns.</p>
                    </InfoCard>

                    <InfoCard title="2.1 Proteinuric Presentations and Nephrotic Syndrome">
                        <p>Presentations dominated by proteinuria are generally caused by dysfunction of the podocytes, which are essential cells in the kidney's filtration barrier.</p>
                        
                        <h3 className="text-xl font-bold text-primary/90 mt-4">2.1.1 Definition and Features of Nephrotic Syndrome</h3>
                        <p>Nephrotic syndrome is a clinical condition defined by a combination of findings resulting from heavy protein loss in the urine. It is a primary presentation for glomerular diseases such as Minimal Change Disease (MCD), Focal Segmental Glomerulosclerosis (FSGS), and Membranous Nephropathy (MN). The classic triad of features includes:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Massive Proteinuria:</strong> The defining characteristic, with urinary protein excretion typically exceeding 3.5 grams per day.</li>
                            <li><strong>Hypoalbuminemia:</strong> Low levels of the protein albumin in the blood (typically ≤2.5 g/dL), a direct result of its loss in the urine.</li>
                            <li><strong>Edema:</strong> Significant swelling due to fluid retention.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-primary/90 mt-4">2.1.2 Complications of the Nephrotic State</h3>
                        <p>The massive loss of protein in nephrotic syndrome leads to several serious systemic complications beyond the kidneys.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Edema (Swelling):</strong> This is often the first notable manifestation that prompts individuals to seek medical evaluation. The fluid accumulation is gravity-dependent, with periorbital (around the eyes) edema being more prominent in the morning and lower extremity edema more obvious later in the day. In severe cases, it can progress to anasarca (widespread body swelling), ascites (fluid in the abdomen), and pleural effusions (fluid around the lungs). This edema is a major contributor to a diminished quality of life for patients.</li>
                            <li><strong>Dyslipidemia (Abnormal Blood Fats):</strong> Nephrotic syndrome causes marked elevations in blood lipid levels, including total cholesterol and triglycerides. This is often clinically silent but is a key driver of long-term atherosclerotic cardiovascular complications, such as coronary artery disease and stroke.</li>
                            <li><strong>Hypercoagulopathy (Increased Risk of Blood Clots):</strong> Patients with nephrotic syndrome acquire a profound and complex state where the blood is more prone to clotting. This is due to the urinary loss of anticoagulant proteins while the liver increases production of pro-coagulant factors. This significantly elevates the risk of both venous and arterial thromboembolic events (blood clots), including deep vein thrombosis (DVT), pulmonary embolism (PE), and renal vein thrombosis (RVT).</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="2.2 Hematuric Presentations and Nephritic Syndrome">
                        <p>Presentations dominated by hematuria (blood in the urine) are typically caused by inflammatory processes that disrupt the integrity of the glomerular basement membrane (GBM).</p>
                        
                        <h3 className="text-xl font-bold text-primary/90 mt-4">2.2.1 Definition and Features of Nephritic Syndrome</h3>
                        <p>Nephritic syndrome is a clinical presentation characterized by glomerular inflammation. Its features include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Hematuria:</strong> Blood in the urine is a cardinal sign.</li>
                            <li><strong>Hypertension:</strong> Elevated blood pressure is an almost universal feature in patients with low GFR.</li>
                            <li><strong>Reduced Glomerular Filtration Rate (GFR):</strong> The inflammation impairs the kidneys' ability to filter blood, leading to a decline in function.</li>
                            <li><strong>Fluid Retention:</strong> Salt is retained due to the limited ability of the kidneys to excrete excess, leading to fluid retention and contributing to hypertension.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-primary/90 mt-4">2.2.2 Distinguishing Glomerular Hematuria</h3>
                        <p>Because hematuria can originate from anywhere in the urinary tract, certain findings point specifically to a glomerular source. These include the presence of <strong>dysmorphic red blood cells</strong> (red cells that have been deformed by squeezing through breaks in the GBM) and <strong>red blood cell casts</strong> (cylindrical structures formed in the kidney tubules containing trapped red blood cells) upon microscopic examination of the urine sediment.</p>
                    </InfoCard>

                    <InfoCard title="2.3 Rapidly Progressive Glomerulonephritis (RPGN)">
                        <p>RPGN is not a specific disease but a clinical syndrome defined by a rapid and severe decline in kidney function that occurs over days to weeks. It is a medical emergency. The characteristic finding on a kidney biopsy is <strong>crescent formation</strong>, a lesion that represents a response to severe injury to the glomerular capillary wall. Conditions that can cause RPGN include ANCA-associated vasculitis and anti-GBM disease.</p>
                    </InfoCard>

                    <InfoCard title="2.4 Other Key Clinical Manifestations">
                        <h3 className="text-xl font-bold text-primary/90 mt-4">2.4.1 Hypertension (High Blood Pressure)</h3>
                        <p>High blood pressure is a common manifestation of glomerular disease. In nephritic conditions, the severity of hypertension can be disproportionate to the reduction in GFR. Conversely, in patients with heavy proteinuria (nephrotic syndrome) but normal GFR, blood pressure is often normal or low.</p>
                        
                        <h3 className="text-xl font-bold text-primary/90 mt-4">2.4.2 Fluid Retention</h3>
                        <p>The mechanism of fluid retention differs between presentations. In nephrotic syndrome, there is avid salt retention in the nephron, and much of the excess fluid leaks into body tissues. In low GFR states typical of nephritic syndrome, salt is retained due to the kidney's limited ability to excrete it, leading to prominent intravascular (within the blood vessels) fluid retention that raises blood pressure.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisClinicalPresentationPage;
