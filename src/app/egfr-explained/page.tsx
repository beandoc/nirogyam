
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronsRight, Download, Droplets, Gauge, Scale, Cake, Dna, Home } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

const TableOfContents = () => (
    <Card className="mb-12">
        <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2">
                <li><a href="#about-egfr" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />About eGFR</a></li>
                <li><a href="#types" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Types of GFR Measurement</a></li>
                <li><a href="#purpose" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Purpose of eGFR Testing</a></li>
                <li><a href="#results" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Understanding Your Results</a></li>
            </ul>
        </CardContent>
    </Card>
);

const EgfrExplainedPage = () => {
  return (
    <div className="flex">
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
        <div className="bg-background text-foreground">
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
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Understanding Your eGFR</h1>
                <p className="text-lg text-foreground/80 mb-10">
                Your estimated Glomerular Filtration Rate (eGFR) is a key indicator of kidney function, showing how effectively your kidneys are filtering waste from your blood.
                </p>

                <TableOfContents />

                <article className="prose lg:prose-xl max-w-none text-foreground/90">
                    <section id="about-egfr" className="mb-12 scroll-mt-20">
                        <h2 className="text-3xl font-bold text-primary mb-4">About Estimated Glomerular Rate (eGFR)</h2>
                        <p>Your kidneys work by filtering your blood to remove waste products and excess water, which are then expelled as urine. The Glomerular Filtration Rate (GFR) is a measure of how well your kidneys perform this filtering task. With an estimated 37 million adults in the U.S. potentially having chronic kidney disease (CKD)—and nearly 90% of them unaware—early detection through GFR assessment is critical for protecting kidney health.</p>
                    </section>

                    <section id="types" className="mb-12 scroll-mt-20">
                        <h2 className="text-3xl font-bold text-primary mb-4">Measuring and Estimating GFR</h2>
                        <p>Obtaining a directly measured GFR (mGFR) is a complex and time-consuming process, making it impractical for routine clinical use. Therefore, healthcare providers rely on a formula to calculate an estimated GFR (eGFR). Since CKD often shows no symptoms until its later stages, a reliable eGFR calculation is vital for early diagnosis.</p>
                        <p>The most common method for calculating eGFR involves a simple blood test to measure creatinine levels. Creatinine is a waste product from protein digestion and the natural breakdown of muscle tissue. However, factors other than kidney function—such as diet, muscle mass, malnutrition, and other health conditions—can influence creatinine levels.</p>
                        <h3 className="text-2xl font-bold text-primary/90 mt-8 mb-4">Differences between eGFR and mGFR</h3>
                        <Card>
                        <Table>
                            <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]"></TableHead>
                                <TableHead className="font-bold text-foreground">Estimated GFR (eGFR)</TableHead>
                                <TableHead className="font-bold text-foreground">Measured GFR (mGFR)</TableHead>
                            </TableRow>
                            </TableHeader>
                            <TableBody>
                            <TableRow>
                                <TableHead>How it works</TableHead>
                                <TableCell>A calculation estimating how well kidneys filter substances produced by the body, like creatinine (from muscle wear) or cystatin C (a protein).</TableCell>
                                <TableCell>A direct measurement of how well kidneys filter external agents like inulin (a plant fiber) or iohexol (a medical contrast agent).</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableHead>Availability</TableHead>
                                <TableCell>Widely available</TableCell>
                                <TableCell>Not widely available</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableHead>Cost</TableHead>
                                <TableCell>Less expensive</TableCell>
                                <TableCell>More expensive</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableHead>Time</TableHead>
                                <TableCell>Less time needed</TableCell>
                                <TableCell>More time consuming</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableHead>Accuracy</TableHead>
                                <TableCell>Estimates can be less accurate in early-stage kidney disease (stages 1 and 2).*</TableCell>
                                <TableCell>Provides accurate GFR measures, including in early stages.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableHead>Precision</TableHead>
                                <TableCell>May not detect subtle or rapid GFR changes.</TableCell>
                                <TableCell>Can identify early and rapid changes in GFR levels.</TableCell>
                            </TableRow>
                            </TableBody>
                        </Table>
                        </Card>
                        <p className="text-sm text-muted-foreground mt-4">*Other factors like pregnancy, age over 70, unusual muscle mass, liver cirrhosis, nephrotic syndrome, organ transplants, and certain medications can affect eGFR accuracy.</p>
                    </section>

                    <section id="purpose" className="mb-12 scroll-mt-20">
                        <h2 className="text-3xl font-bold text-primary mb-4">Why eGFR Testing is Done</h2>
                        <p>Since early-stage CKD often has no symptoms, your doctor may recommend an eGFR test if you have a higher risk of developing the disease. Risk factors include:</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-8">
                            <div className="flex flex-col items-center text-center gap-2"><Droplets className="h-10 w-10 text-primary" /><span>Diabetes</span></div>
                            <div className="flex flex-col items-center text-center gap-2"><Gauge className="h-10 w-10 text-primary" /><span>High Blood Pressure</span></div>
                            <div className="flex flex-col items-center text-center gap-2"><Scale className="h-10 w-10 text-primary" /><span>Overweight/Obesity</span></div>
                            <div className="flex flex-col items-center text-center gap-2"><Cake className="h-10 w-10 text-primary" /><span>Over Age 60</span></div>
                            <div className="flex flex-col items-center text-center gap-2"><Dna className="h-10 w-10 text-primary" /><span>Family History of CKD</span></div>
                        </div>
                        <p>The development of CKD is typically due to a combination of physical, environmental, and social factors rather than a single cause.</p>
                        <p className="mt-4">An eGFR test may also be ordered if you exhibit symptoms of later-stage CKD, such as:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Changes in urination frequency</li>
                            <li>Itching or dry skin</li>
                            <li>Persistent fatigue</li>
                            <li>Swelling in arms, legs, or feet</li>
                            <li>Muscle cramps</li>
                            <li>Nausea and vomiting</li>
                            <li>Loss of appetite</li>
                        </ul>
                    </section>

                    <section id="results" className="mb-12 scroll-mt-20">
                        <h2 className="text-3xl font-bold text-primary mb-4">Understanding Your Results</h2>
                        <p>Your eGFR number helps your doctor determine the stage of kidney disease and create an appropriate treatment plan. The results are categorized into stages, from stage 1 (mild) to stage 5 (kidney failure). Discussing your eGFR result with your healthcare provider is the best way to understand your specific situation and next steps.</p>
                    </section>
                    
                    <section id="resources" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-6">More Resources</h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg">
                        <Download className="mr-2 h-5 w-5" />
                        Download eGFR Fact Sheet
                        </Button>
                    </div>
                    </section>
                </article>
            </div>
          </main>
        </div>
      </SidebarInset>
    </div>
  );
};

export default EgfrExplainedPage;
