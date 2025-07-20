
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Beaker, Droplet, Microscope, Monitor, Stethoscope, TestTube, Thermometer, User, FileText, BarChart, Dna } from 'lucide-react';
import Image from 'next/image';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

const TestAccordionItem = ({ value, title, children }: { value: string, title: string, children: React.ReactNode }) => (
    <AccordionItem value={value}>
        <AccordionTrigger className="text-lg font-medium">{title}</AccordionTrigger>
        <AccordionContent className="text-foreground/80 space-y-4">
            {children}
        </AccordionContent>
    </AccordionItem>
);

const KidneyFunctionTestsPage = () => {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
            <section id="about-kidneys" className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">How to Check Your Kidney Function</h1>
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                    Understanding how your kidney health is monitored is a key step in managing your well-being. Your healthcare provider uses a variety of tests to get a complete picture of your kidney function.
                </p>
            </section>

            <section id="your-kidneys" className="mb-12">
                 <InfoCard icon={<Dna className="h-10 w-10 text-primary" />} title="About Your Kidneys">
                    <p className="text-foreground/80">Most people have two kidneys, each about the size of an adult fist, located near the spine below the rib cage. Despite their small size, your kidneys perform many crucial tasks to keep your body in balance. They are responsible for:</p>
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/80">
                        <li>Filtering waste products and excess water from your blood to produce urine.</li>
                        <li>Stimulating the production of red blood cells.</li>
                        <li>Regulating essential minerals in your body.</li>
                        <li>Assisting in blood pressure management.</li>
                        <li>Maintaining bone health.</li>
                    </ul>
                    <p className="mt-4 text-foreground/80">Your doctor will periodically order tests based on your symptoms and other health factors to ensure your kidneys are functioning correctly.</p>
                </InfoCard>
            </section>
            
            <section id="kidney-numbers" className="mb-12 text-center">
                 <h2 className="text-3xl font-bold text-primary mb-6">Your Kidney Numbers: uACR and eGFR</h2>
                 <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
                    Two of the most important metrics for your kidney health are the urine albumin-to-creatinine ratio (uACR) and the estimated glomerular filtration rate (eGFR). These numbers help your doctor assess how well your kidneys are working.
                 </p>
                 <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-6">
                        <CardTitle className="mb-4">eGFR (estimated Glomerular Filtration Rate)</CardTitle>
                        <p className="text-muted-foreground mb-4">Shows how well your kidneys filter blood. Higher is better.</p>
                        <div className="relative h-32 w-full">
                           <Image src="https://placehold.co/400x200.png" layout="fill" objectFit="contain" alt="eGFR Dial" data-ai-hint="gauge meter" />
                        </div>
                        <div className="flex justify-between text-xs mt-2 text-muted-foreground">
                            <span>Kidney Failure (&lt;15)</span>
                            <span>Kidney Disease (15-60)</span>
                            <span>Normal (&gt;90)</span>
                        </div>
                    </Card>
                     <Card className="p-6">
                        <CardTitle className="mb-4">uACR (Urine Albumin-Creatinine Ratio)</CardTitle>
                         <p className="text-muted-foreground mb-4">Measures protein (albumin) in your urine. Lower is better.</p>
                        <div className="relative h-32 w-full flex items-center justify-center">
                             <Image src="https://placehold.co/400x150.png" layout="fill" objectFit="contain" alt="uACR traffic light" data-ai-hint="traffic light" />
                        </div>
                         <div className="flex justify-between text-xs mt-2 text-muted-foreground">
                            <span>Normal (&lt;30)</span>
                            <span>High (30-299)</span>
                             <span>Very High (&gt;300)</span>
                        </div>
                    </Card>
                 </div>
            </section>

            <Accordion type="single" collapsible className="w-full space-y-6">
                <InfoCard icon={<Droplet className="h-10 w-10 text-primary" />} title="Blood Tests">
                    <Accordion type="single" collapsible className="w-full">
                        <TestAccordionItem value="creatinine" title="Serum Creatinine">
                            <p>Creatinine is a waste product from protein digestion and muscle breakdown. Your kidneys are responsible for removing it from the blood. A "normal" level can vary based on age, sex, and body size. In this test, a lower number is generally better, as high levels can indicate kidney injury or disease.</p>
                        </TestAccordionItem>
                        <TestAccordionItem value="cystatin-c" title="Cystatin C">
                             <p>Cystatin C is a protein produced by your body's cells and is also filtered by the kidneys. It serves as an alternative marker for calculating eGFR. While less common and potentially more expensive than the creatinine test, a lower number is also preferable here.</p>
                        </TestAccordionItem>
                        <TestAccordionItem value="egfr" title="Estimated Glomerular Filtration Rate (eGFR)">
                            <p>The eGFR estimates how effectively your kidneys are filtering waste from your blood. It's calculated using your serum creatinine, age, and sex (and sometimes Cystatin C). A normal eGFR varies, typically decreasing with age. For this test, a higher number is better. A result below 60 suggests potential kidney issues, while below 15 indicates kidney failure. In specific cases, a more precise Measured GFR (mGFR) may be ordered.</p>
                        </TestAccordionItem>
                        <TestAccordionItem value="bun" title="Blood Urea Nitrogen (BUN)">
                            <p>Urea nitrogen is a waste product from protein breakdown in your food. While BUN levels naturally increase with age, this test isn't very informative on its own. Your doctor will typically evaluate your BUN in conjunction with your creatinine and eGFR results.</p>
                        </TestAccordionItem>
                    </Accordion>
                </InfoCard>

                <InfoCard icon={<Beaker className="h-10 w-10 text-primary" />} title="Urine Tests">
                     <Accordion type="single" collapsible className="w-full">
                        <TestAccordionItem value="urinalysis" title="Urinalysis">
                           <p>A urinalysis is a comprehensive test on a small urine sample. It involves a visual check for color and clarity, a dipstick test for abnormalities like excess acid, protein, or blood, and sometimes a microscopic examination for a more detailed analysis.</p>
                        </TestAccordionItem>
                        <TestAccordionItem value="uacr" title="Urine Albumin-Creatinine Ratio (uACR)">
                           <p>This test measures the ratio of albumin (a protein) to creatinine in your urine. Healthy kidneys retain albumin in the blood, so very little should be present in urine. A uACR below 30 mg/g is considered normal; a level of 30 mg/g or higher may indicate albuminuria, a sign of kidney damage.</p>
                        </TestAccordionItem>
                        <TestAccordionItem value="24-hour" title="24-Hour Urine Collection">
                           <p>This test, which requires collecting all your urine over a 24-hour period, is used for specific situations like investigating kidney stones or glomerular disease. It's less common than other urine tests due to its complexity but may be necessary if other tests show abnormal results.</p>
                        </TestAccordionItem>
                    </Accordion>
                </InfoCard>

                <InfoCard icon={<Monitor className="h-10 w-10 text-primary" />} title="Imaging Tests">
                     <Accordion type="single" collapsible className="w-full">
                        <TestAccordionItem value="ultrasound" title="Ultrasound">
                           <p>This test uses sound waves to create images of your kidneys. It's useful for checking their size and position and identifying obstructions like stones or tumors. No intravenous contrast dye is required.</p>
                        </TestAccordionItem>
                        <TestAccordionItem value="ct-scan" title="Computerized Tomography (CT) Scan">
                           <p>A CT scan uses X-rays to generate detailed cross-sectional images of the kidneys. It can also detect structural abnormalities and obstructions. This test may require an intravenous contrast dye, which can be a concern for individuals with existing kidney disease.</p>
                        </TestAccordionItem>
                        <TestAccordionItem value="mri" title="Magnetic Resonance Imaging (MRI)">
                           <p>An MRI uses magnets and radio waves for detailed imaging. Like other imaging tests, it helps find structural issues. It might also require a contrast dye, which needs careful consideration for those with kidney conditions. An MRI scan can last from 20 to 90 minutes.</p>
                        </TestAccordionItem>
                    </Accordion>
                </InfoCard>

                <InfoCard icon={<Stethoscope className="h-10 w-10 text-primary" />} title="Other Tests">
                     <Accordion type="single" collapsible className="w-full">
                        <TestAccordionItem value="biopsy" title="Kidney Biopsy">
                           <p>A kidney biopsy involves taking a tiny tissue sample from your kidney for microscopic examination. Your doctor might order this if blood, urine, or imaging tests are inconclusive. It's often used for conditions like nephrotic syndrome or to evaluate a transplanted kidney that isn't functioning well.</p>
                        </TestAccordionItem>
                        <TestAccordionItem value="mgfr" title="Measured Glomerular Filtration Rate (mGFR)">
                           <p>The mGFR is a direct measurement of your kidney's filtering capacity. It is more complex and time-consuming than the eGFR, involving either a 24-hour urine collection or multiple blood samples over several hours. It is reserved for situations where a highly accurate GFR measurement is essential.</p>
                        </TestAccordionItem>
                    </Accordion>
                </InfoCard>
            </Accordion>
        </div>
      </main>
    </div>
  );
};

export default KidneyFunctionTestsPage;
