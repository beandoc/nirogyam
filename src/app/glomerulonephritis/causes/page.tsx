
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
                         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Understanding the Causes (Pathogenesis)</h1>
                    </header>
                    
                    <InfoCard title="How Glomerular Injury Occurs">
                         <p>The injury to the glomeruli in GN can happen through several different biological pathways, which are often related to the body's immune system. Understanding these mechanisms helps doctors determine the correct treatment.</p>
                    </InfoCard>

                    <InfoCard title="3.1 Immune Complex-Mediated Diseases">
                        <p>In these diseases, proteins from the immune system called <strong>antibodies</strong> bind to substances called <strong>antigens</strong>, forming clusters known as <strong>immune complexes</strong>. These complexes can get trapped in the glomeruli, triggering inflammation and damage.</p>
                        <p><strong>Examples:</strong> Lupus Nephritis and IgA Nephropathy.</p>
                    </InfoCard>

                    <InfoCard title="3.2 Antibody-Mediated Diseases">
                        <p>In this category, the body produces autoantibodies that directly attack components of the glomeruli.</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Anti-GBM Disease:</strong> Autoantibodies directly target a part of the glomerular basement membrane (GBM).</li>
                           <li><strong>ANCA-Associated Vasculitis:</strong> Autoantibodies called ANCA activate white blood cells (neutrophils), which then attack the small blood vessels in the glomeruli and other parts of the body.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="3.3 Podocyte Diseases (Podocytopathies)">
                         <p>These conditions are caused by a primary injury or dysfunction of the <strong>podocytes</strong>, the specialized cells that form a crucial part of the kidney's filtration barrier. This leads to significant protein leakage.</p>
                         <p><strong>Examples:</strong> Minimal Change Disease (MCD) and Focal Segmental Glomerulosclerosis (FSGS).</p>
                    </InfoCard>

                    <InfoCard title="3.4 Complement Dysregulation Diseases">
                        <p>The <strong>complement system</strong> is a part of the immune system that helps fight infections. When it is not regulated properly, it can become overactive and attack the body's own cells, including those in the glomeruli.</p>
                        <p><strong>Examples:</strong> C3 Glomerulopathy (C3G) and Atypical Hemolytic-Uremic Syndrome (aHUS).</p>
                    </InfoCard>

                     <InfoCard title="3.5 'Primary' vs. 'Secondary' Glomerulonephritis">
                        <p>Almost all types of GN can be classified as either primary or secondary.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Primary GN:</strong> The disease is confined to the kidneys.</li>
                            <li><strong>Secondary GN:</strong> The kidney disease is a result of another underlying condition, such as an infection (like hepatitis or HIV), an autoimmune disease (like lupus), a cancer, or exposure to a drug.</li>
                        </ul>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisCausesPage;
