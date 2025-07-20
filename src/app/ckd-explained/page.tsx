
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ChevronsRight, Home, ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const TableOfContents = () => (
    <Card className="mb-12">
        <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2">
                <li><a href="#about-ckd" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />About chronic kidney disease (CKD)</a></li>
                <li><a href="#symptoms" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Signs and symptoms</a></li>
                <li><a href="#causes" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Causes</a></li>
                <li><a href="#complications" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Complications</a></li>
                <li><a href="#diagnosis" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Diagnosis</a></li>
                <li><a href="#treatment" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Treatment</a></li>
                <li><a href="#appointment" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Preparing for your appointment</a></li>
            </ul>
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
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Chronic Kidney Disease (CKD) Explained</h1>
            <p className="text-lg text-foreground/80 mb-10">
              Chronic kidney disease (CKD) means your kidneys slowly get damaged and can't do important jobs like removing waste and keeping blood pressure normal.
            </p>

            <TableOfContents />

            <article className="prose lg:prose-xl max-w-none text-foreground/90">
                <section id="about-ckd" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">About chronic kidney disease (CKD)</h2>
                    <p>Your kidneys do many important jobs. Some of the ways they keep your whole body in balance include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Removing natural waste products and extra water from your body</li>
                        <li>Helping make red blood cells</li>
                        <li>Balancing important minerals in your body</li>
                        <li>Helping maintain your blood pressure</li>
                        <li>Keeping your bones healthy</li>
                    </ul>
                    <p>Chronic kidney disease (CKD) is when the kidneys have become damaged over time (for at least 3 months) and have a hard time doing all their important jobs. CKD also increases the risk of other health problems like heart disease and stroke. Developing CKD is usually a very slow process with very few symptoms at first. So, CKD is divided into 5 stages to help guide treatment decisions.</p>
                </section>

                <section id="symptoms" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">Signs and symptoms</h2>
                    <p>Many people living with CKD do not have any symptoms until the more advanced stages and/or complications develop. If symptoms do happen, they may include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Foamy urine</li>
                        <li>Urinating (peeing) more often or less often than usual</li>
                        <li>Itchy and/or dry skin</li>
                        <li>Feeling tired</li>
                        <li>Nausea</li>
                        <li>Loss of appetite</li>
                        <li>Weight loss without trying to lose weight</li>
                    </ul>
                    <p>People who have more advanced stages of CKD may also notice:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Trouble concentrating</li>
                        <li>Numbness or swelling in your arms, legs, ankles, or feet</li>
                        <li>Achy muscles or cramping</li>
                        <li>Shortness of breath</li>
                        <li>Vomiting</li>
                        <li>Trouble sleeping</li>
                        <li>Breath smells like ammonia</li>
                    </ul>
                </section>

                <section id="causes" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">Causes</h2>
                    <p>Content for causes will be added here.</p>
                </section>

                <section id="complications" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">Complications</h2>
                    <p>Content for complications will be added here.</p>
                </section>

                <section id="diagnosis" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">Diagnosis</h2>
                    <p>Content for diagnosis will be added here.</p>
                </section>

                <section id="treatment" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">Treatment</h2>
                    <p>Content for treatment will be added here.</p>
                </section>

                <section id="appointment" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">Preparing for your appointment</h2>
                    <p>Content for preparing for your appointment will be added here.</p>
                </section>

                <section id="resources" className="mb-12 scroll-mt-20">
                  <h2 className="text-3xl font-bold text-primary mb-6">More resources</h2>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg">
                      <Download className="mr-2 h-5 w-5" />
                      Download Fact Sheet
                    </Button>
                  </div>
                </section>
            </article>
        </div>
      </main>
    </div>
  );
};

export default CkdExplainedPage;
