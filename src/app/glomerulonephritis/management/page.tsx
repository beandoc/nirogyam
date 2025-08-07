
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

const GlomerulonephritisManagementPage = () => {
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
                         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Management Approach for Glomerular Disease</h1>
                    </header>
                    
                    <InfoCard title="A Tailored and Multidisciplinary Approach">
                         <p>The management of Glomerulonephritis (GN) is a complex endeavor that has evolved significantly with an improved understanding of the underlying disease mechanisms. Treatment must be tailored to the individual, taking into account the specific type of GN, the severity of the disease, and the patient's overall health status. The approach is typically multidisciplinary, involving a team of specialists including nephrologists, nephropathologists, and often immunologists, rheumatologists, or hematologists. The primary goals are to control symptoms, reduce glomerular inflammation and injury, and slow the long-term progression of kidney disease.</p>
                    </InfoCard>

                    <InfoCard title="Supportive Care: The Foundation of Management">
                        <p>Supportive care consists of non-immunosuppressive treatments aimed at managing the consequences of kidney damage. These measures are recommended for virtually all patients with GN to protect the kidneys from further injury and manage complications.</p>
                        <ul className="list-disc pl-6 space-y-4">
                           <li>
                                <strong>Blood Pressure Control:</strong> Aggressive management of hypertension is pivotal in slowing the progression of Chronic Kidney Disease (CKD). Medications that block the renin-angiotensin-aldosterone system (RAAS), such as Angiotensin-Converting Enzyme inhibitors (ACEi) or Angiotensin II Receptor Blockers (ARBs), are considered first-line agents. These medications not only lower blood pressure but also have a direct effect on reducing proteinuria, which is itself a risk factor for disease progression. The dose is typically increased to the maximum tolerated level to achieve these goals.
                           </li>
                           <li>
                                <strong>Dietary Interventions:</strong> A low-sodium diet (generally {'<'}2 grams per day) is recommended to help control blood pressure and manage edema (swelling). Depending on the specific condition and stage of kidney disease, protein restriction may also be advised to reduce the burden on the kidneys.
                           </li>
                            <li>
                                <strong>Management of Edema:</strong> Fluid retention is a common complication, particularly in nephrotic syndrome. Treatment involves sodium restriction and the use of diuretics, most commonly loop diuretics, to help the body excrete excess fluid. In cases of diuretic resistance, a combination of different types of diuretics may be used.
                           </li>
                           <li>
                                <strong>Treatment of Dyslipidemia:</strong> Patients with nephrotic syndrome often develop high levels of cholesterol and other fats in the blood. For patients with persistently elevated lipid levels and other cardiovascular risk factors, treatment with statins is often recommended.
                           </li>
                           <li>
                                <strong>Anticoagulation:</strong> Nephrotic syndrome creates a hypercoagulopathic state, increasing the risk of dangerous blood clots (thromboembolism). For patients with a high risk of clotting and a low risk of bleeding, prophylactic (preventive) anticoagulation therapy should be considered.
                           </li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="Disease-Specific Treatment">
                        <p>For many forms of GN that are caused by an overactive or dysfunctional immune system, treatment involves therapies designed to suppress or modulate the immune response. The decision to use these powerful medications is based on the specific diagnosis from the kidney biopsy, the severity of the disease, and the risk of progression.</p>
                        <h3 className="text-xl font-bold text-primary/90 mt-4">Immunosuppressive Therapy</h3>
                        <p>The goal of immunosuppression is to reduce the inflammation that is damaging the glomeruli. The choice of agent depends on the specific disease.</p>
                        <ul className="list-disc pl-6 space-y-4">
                           <li>
                                <strong>Corticosteroids:</strong> High-dose corticosteroids (e.g., prednisone) are a cornerstone of initial treatment for many types of GN, providing rapid control of inflammation.
                           </li>
                           <li>
                                <strong>Other Immunosuppressive Agents:</strong> To achieve long-term remission and minimize the significant side effects of prolonged steroid use, other agents are often used. The choice is highly dependent on the specific diagnosis and may include:
                                <ul className="list-disc pl-8 mt-2 space-y-2">
                                    <li><strong>Cyclophosphamide:</strong> An alkylating agent used for severe, proliferative forms of GN like Lupus Nephritis and ANCA-associated vasculitis.</li>
                                    <li><strong>Mycophenolate Mofetil (MMF):</strong> An agent used as an alternative to cyclophosphamide for induction therapy in Lupus Nephritis and as a maintenance therapy.</li>
                                    <li><strong>Calcineurin Inhibitors (CNIs):</strong> Drugs like tacrolimus and cyclosporine are used to treat podocyte diseases like Minimal Change Disease and FSGS.</li>
                                    <li><strong>Rituximab:</strong> A monoclonal antibody that depletes B-cells and is used to treat conditions like ANCA-associated vasculitis and Membranous Nephropathy.</li>
                                </ul>
                           </li>
                           <li>
                                <strong>Novel Therapies:</strong> Research into the specific pathways of glomerular injury has led to the development of new and targeted therapies. This includes agents that inhibit the complement system and other novel immunomodulators, which are bringing new hope for patients with these complex disorders.
                           </li>
                        </ul>
                        <p className="mt-4">The management of glomerular disease requires ongoing monitoring of kidney function, proteinuria, and blood pressure to assess the response to treatment and make necessary adjustments over time.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisManagementPage;
