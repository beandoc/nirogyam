
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ChevronsRight, ArrowLeft } from 'lucide-react';
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


const CkdExplainedPage = () => {
    
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">A Simple Guide to Chronic Kidney Disease (CKD)</h1>
            
            <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                <p>Chronic Kidney Disease (CKD) is a condition where your kidneys slowly lose their ability to work over time. Think of your kidneys as your body's expert cleaning crew. When they can't filter properly, waste can build up, leading to health problems. With the rise of conditions like diabetes and high blood pressure, CKD is becoming more common, so understanding it is more important than ever.</p>
            </div>

            <InfoCard title="What Do Your Kidneys Actually Do?">
                <p>Your kidneys are a pair of amazing, bean-shaped organs that do much more than just make urine. Their vital jobs include:</p>
                <ul className="list-disc pl-6">
                    <li>Filtering waste and extra water from your blood.</li>
                    <li>Helping to control your blood pressure.</li>
                    <li>Playing a role in making red blood cells to prevent you from feeling tired.</li>
                    <li>Keeping your bones strong by balancing important minerals.</li>
                </ul>
            </InfoCard>

            <InfoCard title="What Does 'Chronic' Mean?">
                <p>When a doctor says kidney disease is "chronic," it means the damage has happened over a long period and, unfortunately, can't be reversed. This is different from a "sudden" or "acute" kidney problem, which can often be fixed.</p>
                <p>The main goal with CKD is to "hit the brakes" and slow the damage down as much as possible. If the damage becomes too severe, it leads to kidney failure, where treatments like dialysis or a kidney transplant are needed to keep you healthy.</p>
            </InfoCard>

            <InfoCard title="How is CKD Found? The 'Silent' Disease">
                <p>One of the biggest challenges with CKD is that it's often a "silent" disease. You can lose a lot of kidney function without feeling any different. That's why tests are so important.</p>
                <ul className="list-disc pl-6">
                    <li><strong>Blood Test:</strong> Checks your creatinine level, a waste product. High levels mean your kidneys aren't filtering well.</li>
                    <li><strong>Urine Test:</strong> Looks for protein in your urine, which is an early sign of kidney damage.</li>
                    <li><strong>Ultrasound:</strong> Gives your doctor a picture of your kidneys to check their size and shape.</li>
                </ul>
                <p>Symptoms usually only appear in the later stages. These can include swelling in your legs, feeling very tired, nausea, or a poor appetite.</p>
            </InfoCard>

            <InfoCard title="Slowing It Down: Your Treatment Plan">
                <p>While CKD can't be cured, you have a lot of power to slow it down. The main goal is to protect the kidney function you have left.</p>
                <h3 className="text-xl font-semibold text-foreground">Controlling the Causes</h3>
                <p>The most important step is to manage the conditions that harm the kidneys. This means working with your doctor to keep your blood pressure and blood sugar at healthy levels.</p>

                <h3 className="text-xl font-semibold text-foreground mt-4">A Kidney-Friendly Lifestyle</h3>
                <p>Your daily habits are your best defense:</p>
                <ul className="list-disc pl-6">
                    <li><strong>Diet:</strong> A "renal diet" is key. A dietitian can help you create a plan that's low in salt, and might limit protein, potassium, or phosphorus.</li>
                    <li><strong>Fluids:</strong> You may need to watch how much you drink.</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-4">When Kidneys Fail: Advanced Treatment</h3>
                <p>If CKD progresses to kidney failure, there are two main treatments to take over the work of your kidneys:</p>
                <ul className="list-disc pl-6">
                    <li><strong>Dialysis:</strong> A treatment that cleans your blood for you, either with a machine (hemodialysis) or at home (peritoneal dialysis).</li>
                    <li><strong>Kidney Transplant:</strong> A surgery to give you a healthy kidney from a donor. This is often the best long-term solution for a better quality of life.</li>
                </ul>
            </InfoCard>

            <InfoCard title="The Path Forward">
                <p>Managing CKD is a team effort between you and your healthcare providers. Early detection through regular check-ups is the best way to protect yourself, especially if you have diabetes or high blood pressure.</p>
                <p>With the right lifestyle changes and medical care, you can slow down CKD and live a full, healthy life. Even if you reach the final stages, treatments like dialysis and transplant allow people to continue living productively and well.</p>
            </InfoCard>

        </div>
      </main>
    </div>
  );
};

export default CkdExplainedPage;
