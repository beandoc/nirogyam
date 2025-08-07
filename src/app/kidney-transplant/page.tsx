
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, ChevronsRight, Heart, Shield, Users, Stethoscope, HelpCircle, ArrowRightCircle, ArrowLeft, HeartPulse, CheckCircle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const TableOfContents = () => (
    <Card className="mb-12">
        <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2">
                <li><a href="#about" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Introduction to Renal Transplantation</a></li>
                <li><a href="#evaluation" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Patient Evaluation and Candidacy</a></li>
                <li><a href="#donors" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Sources of Donor Organs</a></li>
                <li><a href="#compatibility" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Donor-Recipient Compatibility</a></li>
                <li><a href="#surgery" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />The Surgical Procedure</a></li>
                <li><a href="#post-op" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Post-Operative and Long-Term Management</a></li>
                <li><a href="#outcomes" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Outcomes and Quality of Life</a></li>
                 <li><a href="#questions" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Questions for Your Healthcare Team</a></li>
            </ul>
        </CardContent>
    </Card>
);

const KidneyTransplantPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">A Guide to Kidney Transplantation</h1>
                    <p className="text-lg text-foreground/80 mb-10">
                        A transplant is a treatment for kidney failure that involves placing a healthy kidney from a donor into your body, potentially offering a longer, more active life than dialysis.
                    </p>

                    <TableOfContents />

                    <article className="prose lg:prose-xl max-w-none text-foreground/90 space-y-12">
                        <section id="about" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Introduction to Renal Transplantation</h2>
                            <p>Renal transplantation is a definitive surgical treatment for individuals with End-Stage Renal Disease (ESRD), a condition where the kidneys have irreversibly lost their ability to perform their essential filtering functions. The procedure involves implanting a healthy kidney from a living or deceased donor into a recipient whose own kidneys have failed. A successful transplant can restore normal kidney function, eliminate the need for dialysis, and significantly improve the recipient's quality of life and life expectancy.</p>
                            <p>While many patients begin dialysis before receiving a transplant, it's also possible to get a <strong className="text-primary">preemptive transplant</strong> before dialysis is needed. Research suggests that a preemptive transplant, with little to no time on dialysis, can lead to better long-term health outcomes. If you are in Stage 3B, 4, or 5 of CKD, it's an ideal time to discuss transplant options with your doctor.</p>
                        </section>

                        <section id="evaluation" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Patient Evaluation and Candidacy</h2>
                            <p>A comprehensive and rigorous evaluation process is undertaken to determine a patient's suitability for a kidney transplant.</p>
                            <h3 className="text-2xl font-bold text-primary/90 mt-6 mb-4">Eligibility Criteria</h3>
                            <p>Candidates for transplantation must have diagnosed End-Stage Renal Disease (ESRD), typically indicated by a significantly reduced glomerular filtration rate (GFR). While there is no strict upper age limit, a candidate's overall physiological health is a critical factor. The evaluation aims to confirm that the patient is physically and psychologically prepared to undergo major surgery and adhere to the lifelong post-transplant medical regimen.</p>
                            <h3 className="text-2xl font-bold text-primary/90 mt-6 mb-4">Pre-Transplant Assessment</h3>
                            <p>Before being approved, a candidate undergoes a battery of diagnostic tests to assess their overall health. This includes:</p>
                             <ul className="list-disc pl-6 space-y-3 mt-4">
                                <li><strong>Cardiovascular Evaluation:</strong> To ensure the patient can tolerate the surgical procedure.</li>
                                <li><strong>Immunological Testing:</strong> To determine blood and tissue type for donor matching.</li>
                                <li><strong>Infectious Disease Screening:</strong> To identify and treat any underlying infections.</li>
                                <li><strong>Imaging Studies:</strong> Chest X-rays, renal ultrasounds, and other scans to evaluate internal organs.</li>
                            </ul>
                            <p>Patients with severe, uncorrectable cardiovascular disease or active malignancies may be deemed unsuitable for transplantation, in which case dialysis remains the primary treatment modality.</p>
                        </section>
                        
                        <section id="donors" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Sources of Donor Organs</h2>
                            <p>A viable kidney for transplantation can be procured from two primary sources, governed by national organ donation laws.</p>
                            <h3 className="text-2xl font-bold text-primary/90 mt-6 mb-4">Living Donors</h3>
                            <p>A healthy individual can donate one of their two kidneys. The remaining kidney will compensate and provide adequate function for a normal, healthy life.</p>
                            <ul className="list-disc pl-6 space-y-3 mt-4">
                                <li><strong>Living Related Donors:</strong> First-degree relatives such as parents, siblings, children, and spouses, who often have a higher likelihood of immunological compatibility.</li>
                                <li><strong>Living Unrelated Donors:</strong> Other relatives or altruistic individuals, as permitted by legal and ethical guidelines.</li>
                            </ul>
                            <h3 className="text-2xl font-bold text-primary/90 mt-6 mb-4">Deceased (Cadaveric) Donors</h3>
                            <p>These are organs retrieved from individuals who have been declared brain-stem dead, typically as a result of trauma or a cerebrovascular event, and with family consent.</p>
                        </section>

                        <section id="compatibility" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">The Principle of Donor-Recipient Compatibility</h2>
                            <p>To minimize the risk of the recipient's immune system rejecting the new organ, a series of compatibility tests are performed.</p>
                            <ul className="list-disc pl-6 space-y-3 mt-4">
                                <li><strong>ABO Blood Group Typing:</strong> The donor and recipient must have compatible blood types, following the same rules as a blood transfusion.</li>
                                <li><strong>Human Leukocyte Antigen (HLA) Tissue Typing:</strong> A closer match of these protein markers on cells correlates with a lower risk of rejection and better long-term graft survival.</li>
                                <li><strong>Cross-matching:</strong> A final test before surgery where the recipient's blood serum is mixed with the donor's cells to ensure there is no pre-formed antibody reaction that would cause immediate rejection.</li>
                            </ul>
                            <h4 className="text-xl font-semibold mt-6">ABO-Incompatible Transplantation</h4>
                            <p>In cases where a willing living donor is not blood-group compatible, advanced medical protocols can be used to remove the reactive antibodies from the recipient's blood, making the procedure possible with outcomes comparable to compatible transplants.</p>
                        </section>

                        <section id="surgery" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">The Surgical Procedure</h2>
                             <h3 className="text-2xl font-bold text-primary/90 mt-6 mb-4">Donor Nephrectomy (Kidney Removal)</h3>
                            <p>The surgical removal of the kidney from a living donor is most commonly performed using <strong>Laparoscopic Donor Nephrectomy</strong>. This minimally invasive "keyhole" technique involves small incisions, resulting in less post-operative pain, a shorter hospital stay (typically 3-5 days), and a faster return to normal activities.</p>
                             <h3 className="text-2xl font-bold text-primary/90 mt-6 mb-4">Recipient Transplant Surgery</h3>
                            <p>The transplant procedure typically lasts 3 to 4 hours. The surgeon places the donor kidney in the recipient's lower abdomen (a heterotopic placement). The renal artery and vein of the new kidney are surgically connected to the recipient's iliac vessels, and the new ureter is connected to the bladder. The patient's native, non-functioning kidneys are generally left in place unless they are causing specific problems.</p>
                        </section>

                        <section id="post-op" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Post-Operative and Long-Term Management</h2>
                             <h3 className="text-2xl font-bold text-primary/90 mt-6 mb-4">Immediate Post-Operative Care</h3>
                            <p>Following surgery, the recipient is closely monitored in a specialized Transplant Intensive Care Unit (ICU). The medical team monitors vital signs, fluid balance, and initial kidney function. The average hospital stay for a recipient is approximately one week.</p>
                            <h3 className="text-2xl font-bold text-primary/90 mt-6 mb-4">Immunosuppressive Therapy</h3>
                             <p>This is the cornerstone of long-term transplant success. The recipient must take a lifelong regimen of immunosuppressive medications to prevent their immune system from attacking the new organ. Adherence to this medication schedule is critical and non-negotiable.</p>
                            <h3 className="text-2xl font-bold text-primary/90 mt-6 mb-4">Ongoing Monitoring</h3>
                            <p>Recipients require regular, lifelong follow-up appointments with their nephrology team, including routine blood tests to monitor kidney function and drug levels, as well as management of potential side effects.</p>
                        </section>

                        <section id="outcomes" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Outcomes and Quality of Life</h2>
                            <div className="bg-primary/10 p-6 rounded-lg">
                                <p>A successful kidney transplant offers significant advantages over long-term dialysis. One-year success rates for living donor transplants are typically in the range of 90-95%.</p>
                                <ul className="space-y-3 mt-4">
                                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Recipients are freed from the demanding schedule of dialysis and strict dietary restrictions.</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Restoration of normal kidney function often leads to a disappearance of chronic fatigue and anemia.</span></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Many patients can return to full-time work, travel, and enjoy a significantly improved sense of well-being.</span></li>
                                     <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" /><span>Many women regain fertility and can have successful pregnancies post-transplant with careful medical supervision.</span></li>
                                </ul>
                                <p className="mt-4">Should a transplanted kidney eventually fail, a return to dialysis and evaluation for a subsequent transplant are viable options.</p>
                            </div>
                        </section>
                        
                        <section id="questions" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Questions for Your Healthcare Team</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Is my kidney disease progressing? Can you explain my lab results?</AccordionTrigger>
                                    <AccordionContent>Understanding your current health status is the first step in making informed decisions about your future care.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>When should we discuss treatment options, including transplant?</AccordionTrigger>
                                    <AccordionContent>Timing is crucial. Proactive conversations can open up more options, like preemptive transplants.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Based on my health, is a transplant a good option for me?</AccordionTrigger>
                                    <AccordionContent>Your doctor can provide personalized advice on whether a transplant, and which type (living vs. deceased donor), is suitable for you.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Could you explain the differences between life on dialysis and life with a transplant?</AccordionTrigger>
                                    <AccordionContent>This comparison will help you understand the long-term lifestyle implications of each treatment path.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>Could you refer me for a transplant evaluation?</AccordionTrigger>
                                    <AccordionContent>Don't hesitate to ask for a referral directly. Taking initiative is a key part of managing your health.</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default KidneyTransplantPage;
