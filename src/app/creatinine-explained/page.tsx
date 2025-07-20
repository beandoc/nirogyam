
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TestTube, FileText, Activity, Users, ShieldAlert, HeartPulse, Home } from 'lucide-react';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="mb-8">
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

const CreatinineExplainedPage = () => {
    return (
        <div className='flex'>
            <Sidebar>
                <AppSidebar />
            </Sidebar>
            <SidebarInset>
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
                                    <Link href="/"><Home className="mr-2 h-4 w-4"/>Home</Link>
                                </Button>
                            </nav>
                        </div>
                    </header>

                    <main className="container mx-auto px-4 py-12 md:py-20">
                        <div className="max-w-4xl mx-auto">
                            <section id="intro" className="text-center mb-16">
                                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Understanding the Creatinine Test</h1>
                                <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                                    Creatinine is a natural waste product from protein digestion and muscle activity. Your kidneys filter it from your blood. While everyone has creatinine, high levels can indicate a kidney issue.
                                </p>
                            </section>

                            <InfoCard icon={<FileText className="h-10 w-10 text-primary" />} title="Purpose of the Test">
                                <p className="text-foreground/80">The serum (blood) creatinine test is a fundamental tool for assessing how well your kidneys are filtering waste. It's a common, frequently ordered test, often included in a Basic or Comprehensive Metabolic Panel (BMP or CMP) during routine health checks. This test helps your healthcare provider:</p>
                                <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/80">
                                    <li>Check kidney health in individuals at high risk for Chronic Kidney Disease (CKD) or those showing symptoms of Acute Kidney Injury (AKI).</li>
                                    <li>Monitor changes in kidney function over time for people diagnosed with CKD.</li>
                                    <li>Determine if medication dosages need to be adjusted or stopped to protect your kidneys.</li>
                                </ul>
                            </InfoCard>
                            
                            <InfoCard icon={<TestTube className="h-10 w-10 text-primary" />} title="The Testing Process">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="before">
                                        <AccordionTrigger>Before the Test</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-foreground/80">Typically, no special preparation is needed. However, your doctor may ask you to avoid eating or drinking (except water) for a few hours beforehand. In some cases, you might be instructed to avoid cooked meat the night before, as it can temporarily raise creatinine levels and affect your eGFR results.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="during">
                                        <AccordionTrigger>During the Test</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-foreground/80">A healthcare professional will draw a small blood sample from a vein in your arm. The process is quick, usually taking less than five minutes. You might feel a brief sting when the needle is inserted.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="after">
                                        <AccordionTrigger>After the Test</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-foreground/80">There are no restrictions after the test. You may have slight pain or bruising at the needle site, but this typically resolves quickly.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </InfoCard>

                            <InfoCard icon={<HeartPulse className="h-10 w-10 text-primary" />} title="Interpreting Your Results">
                                <p className="text-foreground/80 mb-4">While the creatinine test is common, the result alone isn't the best measure of kidney health because "normal" levels vary based on age, sex, and body size. Some people with "normal" creatinine might have kidney disease, while others with "high" levels may not.</p>
                                <p className="text-foreground/80 font-semibold mb-4">The most accurate way to assess kidney function is the estimated Glomerular Filtration Rate (eGFR), which is calculated using your creatinine level, age, and sex.</p>
                                <p className="text-foreground/80">For even greater accuracy, your doctor might also use a Cystatin C test along with creatinine to calculate your eGFR.</p>
                            </InfoCard>
                            
                            <InfoCard icon={<ShieldAlert className="h-10 w-10 text-primary" />} title="Additional Considerations">
                                <p className="text-foreground/80 mb-4">Several factors unrelated to kidney health can influence your creatinine levels, potentially making your eGFR appear higher or lower than it actually is. It's important to discuss these with your doctor.</p>
                                <h3 className="font-semibold mb-2">Factors that can raise creatinine (making eGFR seem lower):</h3>
                                <ul className="list-disc pl-6 mb-4 space-y-1 text-foreground/80">
                                    <li>Eating large amounts of cooked meat</li>
                                    <li>Taking creatine supplements or certain medications (cimetidine, fenofibrate, etc.)</li>
                                    <li>Recent high-intensity exercise</li>
                                    <li>High muscle mass (e.g., bodybuilders)</li>
                                </ul>
                                <h3 className="font-semibold mb-2">Factors that can lower creatinine (making eGFR seem higher):</h3>
                                <ul className="list-disc pl-6 space-y-1 text-foreground/80">
                                    <li>A vegan or vegetarian diet</li>
                                    <li>Low muscle mass, muscle-wasting diseases, or a history of amputation</li>
                                    <li>Pregnancy</li>
                                    <li>Severe liver disease (cirrhosis)</li>
                                </ul>
                            </InfoCard>

                            <InfoCard icon={<Users className="h-10 w-10 text-primary" />} title="Questions for Your Healthcare Team">
                                <ul className="list-disc pl-6 space-y-3 text-foreground/80">
                                    <li>When was my last creatinine test, and what was my eGFR based on that result?</li>
                                    <li>When should I have this test done again?</li>
                                    <li>Do I have any personal factors that might affect my creatinine levels, and how should we interpret my eGFR in light of that?</li>
                                </ul>
                            </InfoCard>
                        </div>
                    </main>
                </div>
            </SidebarInset>
        </div>
    );
};

export default CreatinineExplainedPage;
