
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, Droplet, Microscope, ShieldQuestion, Stethoscope, TestTube2, AlertTriangle, Apple, Group, HeartPulse, ShieldCheck, Soup, Wine } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader>
            <div className="flex items-center gap-4">
                {icon}
                <CardTitle>{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

const FaqItem = ({ value, question, children }: { value: string, question: string, children: React.ReactNode }) => (
    <AccordionItem value={value}>
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent className="space-y-4">
            {children}
        </AccordionContent>
    </AccordionItem>
);

const KidneyStonesPage = () => {
    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />

            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <section id="intro" className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Understanding Kidney Stones</h1>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                            Kidney stones are a common and painful condition. This guide explains what they are, why they form, and how they can be treated and prevented.
                        </p>
                    </section>

                    <section id="what-are-stones" className="mb-12">
                        <InfoCard icon={<Microscope className="h-10 w-10 text-primary" />} title="What is a Kidney Stone?">
                            <p className="text-foreground/80">
                                A kidney stone is a hard, solid object formed from chemicals in the urine. Normally, urine contains dissolved waste products. When there's too much waste in too little liquid, crystals can form. These crystals attract other elements, growing into a solid mass unless passed from the body. While the kidneys are master chemists at eliminating these substances, sometimes they build up. A stone can remain in the kidney or travel down the urinary tract. Small stones might pass with minimal pain, but larger ones can block urine flow, causing significant discomfort.
                            </p>
                        </InfoCard>
                    </section>

                    <section id="symptoms" className="mb-12">
                        <InfoCard icon={<AlertTriangle className="h-10 w-10 text-destructive" />} title="Symptoms of Kidney Stones">
                            <p className="text-foreground/80 mb-4">
                                Kidney stones vary in size from a grain of sand to a golf ball. The larger the stone, the more severe the symptoms are likely to be. Pain occurs when the stone causes irritation or blockage. Common signs include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                                <li>Severe pain on either side of your lower back, or a persistent stomach ache.</li>
                                <li>Blood in the urine (hematuria).</li>
                                <li>Nausea or vomiting.</li>
                                <li>Fever and chills.</li>
                                <li>Cloudy or foul-smelling urine.</li>
                            </ul>
                            <p className="mt-4 text-foreground/80">
                                Most stones pass without long-term damage, though often with intense pain. While pain relievers may be sufficient for small stones, larger or more complicated stones might require medical intervention or surgery.
                            </p>
                        </InfoCard>
                    </section>
                    
                    <section id="causes-types" className="mb-12 grid md:grid-cols-2 gap-8">
                        <InfoCard icon={<ShieldQuestion className="h-10 w-10 text-primary" />} title="Common Causes">
                            <p className="text-foreground/80">
                                Key causes include inadequate water intake, exercise habits (too much or too little), obesity, and diets high in salt or sugar. Infections and family history can also play a role. High consumption of fructose, found in table sugar and high-fructose corn syrup, is linked to an increased risk.
                            </p>
                        </InfoCard>
                        <InfoCard icon={<TestTube2 className="h-10 w-10 text-primary" />} title="Four Main Types">
                        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                                <li><strong>Calcium Oxalate:</strong> The most common type, formed when calcium combines with oxalate in the urine.</li>
                                <li><strong>Uric Acid:</strong> Often linked to high-purine diets (organ meats, shellfish) and can be hereditary.</li>
                                <li><strong>Struvite:</strong> Less common and typically caused by upper urinary tract infections.</li>
                                <li><strong>Cystine:</strong> A rare type that tends to run in families.</li>
                        </ul>
                        </InfoCard>
                    </section>
                    
                    <section id="diagnosis-treatment" className="mb-12">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <InfoCard icon={<Stethoscope className="h-10 w-10 text-primary" />} title="Diagnosis and Treatment">
                                <FaqItem value="diagnosis" question="How are kidney stones diagnosed?">
                                    <p>Diagnosis begins with a medical history, physical exam, and imaging tests. A high-resolution CT scan or a KUB (kidney-ureter-bladder) x-ray helps determine the stone's size, shape, and location. Blood and urine tests are also used to assess kidney health and identify potential causes.</p>
                                </FaqItem>
                                <FaqItem value="treatment" question="What are the treatment options?">
                                    <p>Treatment depends on the stone's size and symptoms. For small stones, drinking plenty of water and using pain relievers may be enough. If a stone is too large, blocks urine flow, or causes an infection, more advanced treatment is necessary.</p>
                                    <ul className="list-disc pl-6 mt-4 space-y-1">
                                        <li><strong>Shock-wave lithotripsy (SWL):</strong> Uses sound waves to break stones into smaller, passable fragments.</li>
                                        <li><strong>Ureteroscopy:</strong> A small scope is inserted into the ureter to remove or break up the stone.</li>
                                        <li><strong>Percutaneous Nephrolithotomy:</strong> A surgical procedure for very large or complex stones.</li>
                                    </ul>
                                </FaqItem>
                            </InfoCard>
                        </Accordion>
                    </section>
                    
                    <section id="prevention" className="mb-12">
                        <InfoCard icon={<ShieldCheck className="h-10 w-10 text-green-600" />} title="Prevention Strategies">
                            <p className="mb-4 text-foreground/80">If you've had one kidney stone, your risk of developing another is about 50% within 5-7 years. Prevention is key. Here’s how you can reduce your risk:</p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <Droplet className="h-6 w-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Stay Hydrated</h4>
                                        <p className="text-sm text-foreground/80">Drink plenty of fluids, primarily water, to keep your urine light yellow or clear. This helps dilute the waste products that form stones. Water is preferable to sodas, sports drinks, or coffee.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Apple className="h-6 w-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Adjust Your Diet</h4>
                                        <p className="text-sm text-foreground/80">Eat more fruits and vegetables to make your urine less acidic. Limit animal protein, which increases acidity. Reduce salt intake by avoiding processed foods like sandwich meats, canned soups, and packaged meals.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <HeartPulse className="h-6 w-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Maintain a Healthy Weight</h4>
                                        <p className="text-sm text-foreground/80">If you are overweight, aim for a healthy weight through a balanced diet. Avoid high-protein or crash diets, as they can increase stone risk.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Group className="h-6 w-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Consult a Professional</h4>
                                        <p className="text-sm text-foreground/80">If you've had a stone or are at risk, see a doctor or registered dietitian. They can analyze your specific situation and recommend personalized dietary changes.</p>
                                    </div>
                                </div>
                            </div>
                        </InfoCard>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default KidneyStonesPage;
