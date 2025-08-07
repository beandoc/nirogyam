
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
                         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">The Diagnostic Process for GN</h1>
                    </header>
                    
                    <InfoCard title="How Glomerulonephritis is Diagnosed">
                         <p>Because of the complexity of glomerular diseases, diagnosis requires a thorough and multidisciplinary approach, often coordinated by a kidney specialist (nephrologist).</p>
                    </InfoCard>

                    <InfoCard title="4.1 Initial Evaluation">
                        <p>The diagnostic process begins with a detailed assessment of the patient's medical history, family history, social history, and any medication or drug exposures. This is followed by a physical examination to look for signs like edema or high blood pressure.</p>
                    </InfoCard>

                    <InfoCard title="4.2 Laboratory and Imaging Tests">
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Urine Tests:</strong> These are essential for detecting and quantifying proteinuria and hematuria.</li>
                           <li><strong>Blood Tests:</strong> These are used to measure kidney function (creatinine and eGFR), check for low protein levels (albumin), and test for specific antibodies (like ANA or ANCA) or complement proteins (C3, C4) that can point to the underlying cause.</li>
                           <li><strong>Imaging:</strong> A kidney ultrasound may be performed to assess the size and structure of the kidneys.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="4.3 The Kidney Biopsy: The Gold Standard">
                         <p>For most patients, a <strong>kidney biopsy</strong> is considered the "gold standard" to definitively diagnose the specific type of glomerular disease. A small sample of kidney tissue is obtained and examined under different types of microscopes.</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Light Microscopy (LM):</strong> Shows the overall structure and pattern of injury.</li>
                           <li><strong>Immunofluorescence (IF):</strong> Detects the presence and location of immune complexes or antibodies.</li>
                           <li><strong>Electron Microscopy (EM):</strong> Provides a highly magnified view of the glomerular structures and any deposits.</li>
                        </ul>
                        <p>The biopsy provides crucial information about the type of GN, its activity, and the degree of chronic scarring, which helps guide treatment decisions.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisDiagnosisPage;
