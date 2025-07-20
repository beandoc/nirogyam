
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Beaker, Droplet, Microscope, Monitor, Stethoscope, TestTube, Thermometer, User, FileText, BarChart, Dna, Heart, Activity, Wind, Bone, Droplets, LineChart, Scale, Home } from 'lucide-react';
import Image from 'next/image';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';


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
    <div className='flex'>
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
                <section id="intro" className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Understanding Your Lab Values in CKD</h1>
                    <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                        Living with Chronic Kidney Disease (CKD) can feel like learning a new language. As the condition progresses, your healthcare team will monitor various health markers through lab tests and other measurements. This guide explains what these numbers mean for your kidney health.
                    </p>
                </section>

                <section id="disclaimer" className="mb-12 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                    <p className="text-amber-800">
                        The information here is for educational purposes. Always discuss your lab results with your healthcare professional before making any decisions. Your situation is unique, and "normal" ranges can vary.
                    </p>
                </section>
                
                <div className="space-y-8">
                    <InfoCard icon={<User className="h-10 w-10 text-primary" />} title="Measuring Your General Health">
                        <Accordion type="single" collapsible className="w-full">
                            <TestAccordionItem value="blood-pressure" title="Blood Pressure">
                                <p>Maintaining a healthy blood pressure is vital. High pressure strains your kidneys and heart, while low pressure can reduce oxygen flow. Your doctor will set a personal target for you, written as two numbers (e.g., 120/80). The top number (systolic) measures pressure during a heartbeat, and the bottom (diastolic) measures pressure between beats.</p>
                            </TestAccordionItem>
                            <TestAccordionItem value="weight" title="Weight">
                                <p>A healthy weight, which depends on your height, age, and health, is important. Unexplained weight loss could signal nutritional issues, while gradual gain might relate to diet or activity. For those on dialysis or with heart failure, sudden weight gain can indicate fluid retention and should be reported to your doctor. Your "dry weight" (normal weight without extra fluid) is a key number to monitor daily.</p>
                            </TestAccordionItem>
                        </Accordion>
                    </InfoCard>

                    <InfoCard icon={<Droplet className="h-10 w-10 text-primary" />} title="Measuring Your Kidney Health">
                        <Accordion type="single" collapsible className="w-full">
                            <TestAccordionItem value="creatinine" title="Serum (Blood) Creatinine">
                                <p>Creatinine is a waste product from muscle activity and protein digestion. Healthy kidneys filter it from your blood. When kidney function declines, creatinine levels rise. A "normal" level varies by age, sex, and body size.</p>
                            </TestAccordionItem>
                            <TestAccordionItem value="cystatin-c" title="Cystatin C">
                                <p>Cystatin C is a protein made by your body's cells. Like creatinine, it's filtered by the kidneys and can be used as another marker to estimate kidney function. This test is less common and may be more expensive.</p>
                            </TestAccordionItem>
                            <TestAccordionItem value="egfr" title="Estimated Glomerular Filtration Rate (eGFR)">
                                <p>eGFR is a crucial calculation based on your blood creatinine (and sometimes cystatin C), age, and sex. It estimates how well your kidneys are filtering waste. A higher number is better, with levels below 60 suggesting potential kidney disease and below 15 indicating kidney failure. Your eGFR determines your CKD stage.</p>
                            </TestAccordionItem>
                            <TestAccordionItem value="mgfr" title="Measured Glomerular Filtration Rate (mGFR)">
                            <p>In specific cases where a highly precise measurement is needed, your doctor may order an mGFR. This is a direct measurement of your kidney's filtering capacity. It is more complex than an eGFR, often involving a 24-hour urine collection or multiple blood draws over several hours.</p>
                            </TestAccordionItem>
                            <TestAccordionItem value="bun" title="Blood Urea Nitrogen (BUN)">
                                <p>BUN measures urea nitrogen, a waste product from the protein you eat. While levels can rise with age or kidney issues, BUN is usually evaluated alongside creatinine and eGFR for a complete picture.</p>
                            </TestAccordionItem>
                            <TestAccordionItem value="uacr" title="Urine Albumin-to-Creatinine Ratio (uACR)">
                            <p>This urine test checks for albumin, a protein that healthy kidneys keep in the blood. A result below 30 mg/g is normal. Higher levels can be a sign of kidney damage (albuminuria).</p>
                            </TestAccordionItem>
                            <TestAccordionItem value="upcr" title="Urine Protein-to-Creatinine Ratio (uPCR)">
                            <p>Similar to uACR, this test measures all types of protein in the urine, not just albumin. It's sometimes used for specific kidney conditions. A normal uPCR is less than 150 mg/g.</p>
                            </TestAccordionItem>
                        </Accordion>
                    </InfoCard>

                    <InfoCard icon={<Scale className="h-10 w-10 text-primary" />} title="Balance of Minerals & Acidity">
                        <Accordion type="single" collapsible className="w-full">
                            <TestAccordionItem value="potassium" title="Potassium">
                            <p>This mineral is vital for heart and muscle function. In advanced CKD, kidneys may struggle to remove excess potassium. The typical goal is between 3.5 and 5.0 mEq/L.</p>
                            </TestAccordionItem>
                            <TestAccordionItem value="sodium" title="Sodium">
                            <p>Sodium helps balance fluids. In advanced CKD, retaining sodium can lead to high blood pressure, swelling (edema), and thirst. Even with normal blood sodium levels, it's important to limit dietary salt to less than 2,300 mg per day, or as advised by your doctor.</p>
                            </TestAccordionItem>
                            <TestAccordionItem value="bicarbonate" title="Serum Bicarbonate / Carbon Dioxide (CO2)">
                            <p>Bicarbonate keeps your blood from becoming too acidic. Kidneys help regulate it. In advanced CKD, acid can build up (metabolic acidosis). A level below 22 mEq/L may signal too much acid in the blood.</p>
                            </TestAccordionItem>
                        </Accordion>
                    </InfoCard>

                    <InfoCard icon={<Heart className="h-10 w-10 text-primary" />} title="Monitoring for CKD Complications">
                        <Accordion type="single" collapsible className="w-full">
                            <TestAccordionItem value="nutrition" title="Nutrition & Malnourishment">
                            <p>Tests like <strong>Serum Albumin</strong>, <strong>Normalized Protein Nitrogen Appearance (nPNA)</strong>, and assessments like the <strong>Subjective Global Assessment (SGA)</strong> help determine if you are getting the right nutrition.</p>
                            </TestAccordionItem>
                            <TestAccordionItem value="anemia" title="Anemia (Low Red Blood Cells)">
                            <p>CKD can lead to anemia because the kidneys help make red blood cells and absorb iron. Common tests include <strong>Hemoglobin (Hgb)</strong>, <strong>Hematocrit (Hct)</strong>, <strong>Ferritin</strong> (iron stores), and <strong>Transferrin Saturation (TSAT)</strong> (iron availability).</p>
                            </TestAccordionItem>
                            <TestAccordionItem value="bone-disorder" title="Mineral and Bone Disorder (CKD-MBD)">
                            <p>Kidneys balance calcium and phosphorus. In advanced CKD, this balance can be disrupted, leading to bone disease. Key tests include <strong>Parathyroid Hormone (PTH)</strong>, <strong>Serum Calcium</strong>, <strong>Serum Phosphorus</strong>, and <strong>Vitamin D</strong> levels.</p>
                            </TestAccordionItem>
                            <TestAccordionItem value="cardiovascular" title="Cardiovascular Disease (CVD)">
                            <p>People with CKD have a higher risk of heart attack and stroke. Your doctor will monitor your cholesterol with a lipid panel, which includes <strong>Total Cholesterol</strong>, <strong>HDL ("good")</strong>, <strong>LDL ("bad")</strong>, and <strong>Triglycerides</strong>.</p>
                            </TestAccordionItem>
                        </Accordion>
                    </InfoCard>

                    <InfoCard icon={<Activity className="h-10 w-10 text-primary" />} title="Monitoring for CKD Risk Factors">
                        <Accordion type="single" collapsible className="w-full">
                            <TestAccordionItem value="diabetes" title="Diabetes">
                            <p>High blood sugar is a major risk factor for CKD. Your doctor will monitor it using the <strong>Hemoglobin A1C</strong> test (an average blood sugar over 3 months) and regular <strong>Serum (blood) Glucose</strong> checks.</p>
                            </TestAccordionItem>
                        </Accordion>
                    </InfoCard>

                    <InfoCard icon={<FileText className="h-10 w-10 text-primary" />} title="Questions for Your Healthcare Team">
                        <div className="text-foreground/80 space-y-3">
                        <p>Use these questions to start a conversation with your doctor or dietitian:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Am I at a healthy weight?</li>
                            <li>What is my recommended goal for blood pressure?</li>
                            <li>What are my goal A1C and/or blood glucose levels?</li>
                            <li>What is my "dry weight," and when should I be concerned about changes?</li>
                            <li>Are there any test results you are particularly concerned about?</li>
                            <li>Do any of my results have a different goal range than what's listed on the lab report?</li>
                        </ul>
                        </div>
                    </InfoCard>
                </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </div>
  );
};

export default KidneyFunctionTestsPage;
