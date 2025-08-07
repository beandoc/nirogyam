
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

const GlomerulonephritisDiagnosisPage = () => {
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
                         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Diagnostic Process for Glomerular Disease</h1>
                    </header>
                    
                    <InfoCard title="A Meticulous Diagnostic Approach">
                         <p>The diagnosis of Glomerular Disease (GN) is a meticulous process that integrates clinical findings with specialized laboratory and pathological evaluations. Given the complexity and variety of these conditions, a single classification scheme is unlikely to provide a sufficient diagnostic tool on its own. Instead, the nephrologist must synthesize information from multiple approaches to arrive at an accurate diagnosis and formulate an appropriate therapeutic plan.</p>
                    </InfoCard>

                    <InfoCard title="4.1 Initial Clinical Evaluation">
                        <p>The diagnostic journey begins with a comprehensive clinical assessment to gather initial data and form a differential diagnosis.</p>
                        <h3 className="text-xl font-semibold text-foreground mt-4">4.1.1 Medical and Family History</h3>
                        <p>A thorough and complete history is the essential starting point. The physician will inquire about:</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Presenting Symptoms:</strong> Onset and nature of symptoms such as swelling (edema), changes in urine color (hematuria), or foamy urine (proteinuria).</li>
                           <li><strong>Systemic Symptoms:</strong> Presence of symptoms that may indicate a systemic disease, such as joint pain, rashes, or fevers.</li>
                           <li><strong>Family History:</strong> A detailed family history is crucial, as it can reveal a potential genetic or familial component to the kidney disease, such as in Alport syndrome or familial FSGS.</li>
                           <li><strong>Medication and Exposure History:</strong> A careful review of all medications, therapeutic agents, and potential environmental exposures is necessary, as these can be causative factors for GN.</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-foreground mt-4">4.1.2 Physical Examination</h3>
                        <p>A physical examination is performed to identify clinical signs associated with glomerular disease, including hypertension (high blood pressure), edema, and evidence of systemic conditions such as a skin rash or joint inflammation.</p>
                    </InfoCard>

                    <InfoCard title="4.2 Laboratory Investigations">
                         <p>Blood and urine tests are fundamental in assessing kidney function and identifying markers of immunologic activity.</p>
                        <h3 className="text-xl font-semibold text-foreground mt-4">4.2.1 Urine Analysis (Urinalysis)</h3>
                        <p>Examination of the urine is a critical early step.</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Quantification of Proteinuria:</strong> The amount of protein in the urine is measured, typically using a spot urine protein-to-creatinine ratio (UPCR) or a 24-hour urine collection. The quantity of protein helps distinguish between glomerular and tubular disease origins.</li>
                           <li><strong>Evaluation of Hematuria:</strong> The presence of blood in the urine is assessed. Examination of the urinary sediment by phase-contrast microscopy can be valuable in distinguishing glomerular hematuria from other causes by identifying red cell casts or dysmorphic (abnormally shaped) red blood cells.</li>
                           <li><strong>Urine Culture:</strong> This is performed to rule out a urinary tract infection as a cause of urinary abnormalities.</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-foreground mt-4">4.2.2 Blood Tests</h3>
                        <p>Blood tests are pivotal in assessing kidney function and providing clues to the underlying pathogenic mechanism.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Kidney Function Assessment:</strong> Serum creatinine and blood urea nitrogen (BUN) levels are measured. These values are used to calculate the estimated Glomerular Filtration Rate (eGFR), which is considered one of the best indicators of kidney function.</li>
                            <li><strong>Immunologic Markers:</strong> A panel of blood tests is often performed to screen for autoantibodies associated with specific types of GN. This includes tests for antinuclear antibodies (ANA) for lupus, antineutrophil cytoplasmic antibodies (ANCA) for vasculitis, and anti-GBM antibodies.</li>
                            <li><strong>Complement Levels:</strong> Measuring the serum levels of complement components C3 and C4 is an essential early step. Low levels of these proteins (hypocomplementemia) can provide important clues as to the pathogenic mechanism at play and help narrow the diagnosis.</li>
                        </ul>
                    </InfoCard>
                    
                    <InfoCard title="4.3 The Kidney Biopsy: The Definitive Diagnostic Tool">
                        <p>For most patients, a kidney biopsy is considered the "gold standard" to diagnose glomerular diseases. It provides definitive information that cannot be obtained from blood or urine tests alone and is crucial for guiding treatment.</p>
                        <h3 className="text-xl font-semibold text-foreground mt-4">4.3.1 Biopsy Procedure and Specimen Handling</h3>
                        <p>The procedure typically involves a percutaneous kidney biopsy, where a small sample of kidney tissue is obtained using a needle. Ideally, the specimen will contain a sufficient number of glomeruli (typically 10-15) for a comprehensive evaluation. The tissue is divided into three parts for different types of microscopic analysis.</p>
                        <h3 className="text-xl font-semibold text-foreground mt-4">4.3.2 Microscopic Analysis of Biopsy Tissue</h3>
                        <p>The pathologist's evaluation involves three distinct techniques that provide complementary information:</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Light Microscopy (LM):</strong> The tissue is treated with a series of special stains (such as H&E, PAS, and Jones silver) that highlight different cellular and structural components. This allows the pathologist to identify the overall pattern of glomerular injury, such as hypercellularity (too many cells), sclerosis (scarring), or crescent formation.</li>
                           <li><strong>Immunofluorescence (IF):</strong> This technique uses antibodies tagged with fluorescent dyes that bind to specific immune proteins. It is performed to evaluate the presence, composition (e.g., IgG, IgA, C3), and pattern (e.g., granular or linear) of immune deposits within the glomeruli. This is critical for diagnosing immune-mediated diseases.</li>
                           <li><strong>Electron Microscopy (EM):</strong> This provides an ultra-high magnification view of the glomerulus. EM allows for a detailed evaluation of the fine structures, including the podocyte foot processes, the glomerular basement membrane (GBM), and the precise location of any electron-dense deposits (subepithelial, subendothelial, or mesangial).</li>
                        </ul>
                        <p>The integration of findings from all three modalities—LM, IF, and EM—is required to reach a precise and definitive diagnosis.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisDiagnosisPage;
