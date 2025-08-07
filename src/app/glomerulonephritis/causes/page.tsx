
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

const GlomerulonephritisCausesPage = () => {
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
                         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Pathogenesis of Glomerular Disease: The Underlying Causes</h1>
                    </header>
                    
                    <InfoCard title="An Overview of Pathogenesis">
                         <p>Glomerulonephritis (GN) is not a single entity but rather a manifestation of various underlying disease processes. The study of these processes, known as pathogenesis, reveals that most forms of GN are the result of a dysfunctional immune system response that targets the glomeruli. Conceptually, the primary pathogenic mechanisms of glomerular disease can be categorized into several broad groups. It is important to recognize that a single histologic pattern of injury can result from different pathogenic pathways, and conversely, a single pathway may lead to different clinical and histologic features.</p>
                    </InfoCard>

                    <InfoCard title="3.1 Immune Complex-Mediated Diseases">
                        <p>This is a common mechanism of glomerular injury characterized by the granular deposition of immunoglobulins (Ig) in the glomeruli. These diseases involve the formation of <strong>immune complexes</strong>, which are clusters of antibodies bound to antigens. These complexes get trapped within the delicate structures of the glomerulus, triggering an inflammatory response that leads to damage. This can occur in one of two ways:</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li>
                                <strong>In Situ Immune Complex Formation:</strong> In this scenario, circulating antibodies travel to the kidney and bind directly to antigens that are either a natural part of the glomerulus (intrinsic antigens) or have become lodged there (planted antigens). This process typically occurs in the subepithelial space, which is the area just outside the main filtration membrane. <strong>Membranous Nephropathy</strong> is a classic example, where antibodies often target an antigen located on the podocytes.
                           </li>
                           <li>
                                <strong>Deposition of Circulating Immune Complexes:</strong> In this pathway, immune complexes are pre-formed in the bloodstream and then travel to the kidneys, where they are trapped in the subendothelial and mesangial areas of the glomeruli. This pattern is characteristic of <strong>Lupus Nephritis</strong>.
                           </li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="3.2 Antibody-Mediated Diseases">
                        <p>This category includes diseases where autoantibodies—antibodies that mistakenly target the body's own tissues—are central to the pathogenic process.</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Direct Antibody Attack:</strong> This is exemplified by <strong>Anti-Glomerular Basement Membrane (Anti-GBM) Disease</strong>. The disease is caused by autoantibodies that directly target a component of type IV collagen within the GBM itself. On a kidney biopsy, this is characterized by a distinct linear (smooth, ribbon-like) deposition of IgG along the basement membrane.</li>
                           <li><strong>Antineutrophil Cytoplasmic Antibody (ANCA)-Associated Disease:</strong> In this condition, the primary pathogenic mechanism involves the activation of immune cells called neutrophils by ANCA. These activated neutrophils then attack and damage the small blood vessels of the glomeruli, leading to a necrotizing vasculitis. On histologic examination, these diseases are characterized by a lack or scarcity of immunoglobulin deposition, a finding known as "pauci-immune".</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="3.3 Diseases of Podocyte Injury and Dysregulation">
                         <p>These diseases are associated predominantly with an injury to the podocytes, the highly specialized cells that wrap around the glomerular capillaries and form a critical part of the filtration barrier. Injury to these cells leads to significant proteinuria and the clinical presentation of nephrotic syndrome. The two primary conditions in this category are:</p>
                         <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Minimal Change Disease (MCD)</strong></li>
                            <li><strong>Focal Segmental Glomerulosclerosis (FSGS)</strong></li>
                         </ul>
                         <p>The term FSGS is now recognized as a histologic description of a scarring pattern that can result from a number of vastly different causes, including primary podocyte dysregulation, genetic factors, infections, or as a maladaptive response to other conditions.</p>
                    </InfoCard>

                    <InfoCard title="3.4 Diseases of Primary Complement Dysregulation">
                        <p>The complement system is a complex network of proteins in the blood that is part of the body's innate immunity. In some glomerular diseases, this system becomes overactive due to an imbalance in its regulatory factors.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>When this dysregulation affects complement activation in the "fluid phase" (within the blood), the resulting disease often takes the form of <strong>C3 Glomerulopathy (C3G)</strong>, which is characterized by the predominant deposition of the C3 complement protein in the glomeruli.</li>
                            <li>When the dysregulation primarily affects complement activation on the surface of cells ("membrane-bound"), the resulting disease is a thrombotic microangiopathy in the form of <strong>Atypical Hemolytic-Uremic Syndrome (aHUS)</strong>.</li>
                        </ul>
                    </InfoCard>

                     <InfoCard title="3.5 Genetic and Structural Diseases">
                        <p>An ever-growing number of genetic mutations are implicated in the pathogenesis of glomerular diseases. These genetic factors can play different roles:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Directly Causative Gene Abnormalities:</strong> These are mutations that reliably lead to the development of a clinical syndrome. The classic example is <strong>Alport Syndrome</strong>, which results from genetic abnormalities in the genes (COL4A3, COL4A4, or COL4A5) that encode for type IV collagen, a primary structural component of the glomerular basement membrane.</li>
                            <li><strong>Genetic Risk Factors:</strong> In some cases, a genetic variant does not directly cause a disease but is associated with an increased risk of developing one. A prime example is the <strong>APOL1 risk alleles</strong>, which are associated with an increased risk of kidney diseases, including FSGS, among individuals of West African descent.</li>
                        </ul>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisCausesPage;
