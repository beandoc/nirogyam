
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

const GlomerulonephritisIntroductionPage = () => {
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
                         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Introduction to Glomerulonephritis</h1>
                    </header>
                    
                    <InfoCard title="1.1 Definition and Scope">
                        <p>Glomerulonephritis (GN) refers to a group of diseases that cause inflammation and injury to the kidneys' primary filtering units, known as the glomeruli. The term itself means "inflammation of the glomeruli." These conditions represent a large and complex field of nephrology, and our understanding of their underlying causes is rapidly evolving. While some forms of GN were historically considered "idiopathic" (of unknown cause), scientific advances have revealed that many are caused by specific mechanisms, such as genetic variants or the formation of autoantibodies. Because many glomerular diseases are rare, patients may require referral to specialized centers for accurate diagnosis and management.</p>
                    </InfoCard>

                    <InfoCard title="1.2 The Glomerulus: The Kidney's Filtration Unit">
                        <p>The glomerulus is a highly refined and complex structure designed to perform the critical function of filtering blood. Its key components are three main cell types (podocytes, endothelial cells, and mesangial cells) and the glomerular basement membrane (GBM). This intricate system works to remove waste products and excess fluid from the blood, which are then excreted as urine, while simultaneously preventing the loss of essential components like proteins and blood cells.</p>
                    </InfoCard>

                    <InfoCard title="1.3 The Body's Responses to Glomerular Injury">
                         <p>Damage to the glomerulus disrupts its normal function, leading to a limited number of responses that manifest as key clinical signs. The three major manifestations of glomerulonephritis are:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Protein Leak (Proteinuria):</strong> Proteinuria is generally caused by the dysfunction or injury of specialized cells called podocytes. When these cells are damaged, the filtration barrier fails to prevent protein, particularly albumin, from leaking out of the blood and into the urine.</li>
                            <li><strong>Blood Leak (Hematuria):</strong> For red blood cells to enter the urine, a disruption of the glomerular basement membrane's (GBM) integrity must be present. This damage is most commonly caused by inflammation resulting from an immune response.</li>
                            <li><strong>Loss of Filtration Capacity:</strong> This refers to a decline in the Glomerular Filtration Rate (GFR), which is the measure of how efficiently the kidneys are cleaning the blood. This loss of function can be a primary manifestation of the glomerular injury.</li>
                        </ul>
                    </InfoCard>
                    
                    <InfoCard title="1.4 Approaches to Classifying Glomerular Diseases and Common Examples">
                        <p>The complexity of glomerular diseases stems in part from the different classification schemes that are used in parallel to understand them. To achieve an accurate diagnosis, a nephrologist will integrate information from each of these complementary approaches.</p>
                        <h3 className="font-semibold mt-4">Classification by Clinical Presentation:</h3>
                        <p>This approach categorizes diseases based on their primary clinical manifestations. For example, conditions that typically present with nephrotic syndrome (heavy proteinuria) include <strong>Minimal Change Disease (MCD)</strong> and <strong>Membranous Nephropathy (MN)</strong>. Conditions that classically present with a nephritic syndrome (inflammation and hematuria) include <strong>Post-Infectious Glomerulonephritis (PIGN)</strong> and <strong>ANCA-Associated Vasculitis</strong>.</p>
                        
                        <h3 className="font-semibold mt-4">Classification by Histopathology:</h3>
                        <p>This classification is based on the findings of a kidney biopsy as seen under a microscope. Some disease names are derived directly from these descriptive findings. A primary example is <strong>Focal Segmental Glomerulosclerosis (FSGS)</strong>, a term which describes a pattern of scarring (sclerosis) that is found in parts of (segmental) some (focal) glomeruli. Another example is <strong>Membranoproliferative Glomerulonephritis (MPGN)</strong>, which describes a histologic pattern of injury.</p>
                        
                        <h3 className="font-semibold mt-4">Classification by Pathogenic Mechanism:</h3>
                        <p>This approach groups diseases based on the underlying biological process causing the injury.</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Immune Complex Diseases:</strong> Examples include Lupus Nephritis and Immunoglobulin A Nephropathy (IgAN).</li>
                            <li><strong>Direct Antibody-Mediated Diseases:</strong> Examples include Anti-Glomerular Basement Membrane (Anti-GBM) Disease and ANCA-Associated Vasculitis.</li>
                            <li><strong>Complement Dysregulation Diseases:</strong> A key example is C3 Glomerulopathy (C3G).</li>
                        </ul>

                        <h3 className="font-semibold mt-4">Classification by Association:</h3>
                        <p>This method distinguishes between glomerular diseases that are "primary" (limited to the kidney) and those that are "secondary" to another systemic condition. For instance, <strong>Diabetic Kidney Disease (DKD)</strong> is a form of secondary GN caused by diabetes. Similarly, <strong>Alport Syndrome</strong> is a secondary GN caused by an underlying genetic disorder of type IV collagen.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisIntroductionPage;
