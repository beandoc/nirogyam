
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ChevronsRight, Home } from 'lucide-react';

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
      <header className="bg-card/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                  <svg className="h-10 w-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V3.5C9.1 3.5 7.25 5.1 7.25 7.25C7.25 9.4 9.1 11 11.25 11V21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25V11C14.9 11 16.75 9.4 16.75 7.25C16.75 5.1 14.9 3.5 12.75 3.5V2.75Z" />
                      <path d="M7.25 14.5C7.25 14.0858 6.91421 13.75 6.5 13.75C6.08579 13.75 5.75 14.0858 5.75 14.5V15C4.37 15 3.25 16 3.25 17.25C3.25 18.5 4.37 19.5 5.75 19.5V20C5.75 20.4142 6.08579 20.75 6.5 20.75C6.91421 20.75 7.25 20.4142 7.25 20V19.5C8.63 19.5 9.75 18.5 9.75 17.25C9.75 16 8.63 15 7.25 15V14.5Z" />
                      <path d="M18.25 13.75C17.8358 13.75 17.5 14.0858 17.5 14.5V15C16.12 15 15 16 15 17.25C15 18.5 16.12 19.5 17.5 19.5V20C17.5 20.4142 17.8358 20.75 18.25 20.75C18.6642 20.75 19 20.4142 19 20V19.5C20.38 19.5 21.5 18.5 21.5 17.25C21.5 16 20.38 15 19 15V14.5C19 14.0858 18.6642 13.75 18.25 13.75Z" />
                  </svg>
                  <h1 className="text-2xl font-bold text-primary">Nirogyam</h1>
              </Link>
              <nav>
                  <Button variant="ghost" asChild>
                      <Link href="/"><Home className="mr-2 h-4 w-4" /> Home</Link>
                  </Button>
              </nav>
          </div>
      </header>
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
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
