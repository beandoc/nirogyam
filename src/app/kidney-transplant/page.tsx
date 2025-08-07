
'use client';
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
                <li><a href="#decision" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />The Decision for Kidney Transplant</a></li>
                <li><a href="#evaluation" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Patient Evaluation and Candidacy</a></li>
                <li><a href="#donors" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Sources of Donor Organs</a></li>
                <li><a href="#compatibility" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Donor-Recipient Compatibility</a></li>
                <li><a href="#surgery" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />The Surgical Procedure</a></li>
                <li><a href="#risks" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Risks Associated with Kidney Transplants</a></li>
                <li><a href="#recovery" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />The Road to Recovery</a></li>
                <li><a href="#complications" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Potential Complications</a></li>
                <li><a href="#outcomes" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Outcomes and Quality of Life</a></li>
                 <li><a href="#faq" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />Frequently Asked Questions</a></li>
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
                        A kidney transplant is a life-saving procedure for patients with end-stage renal disease (ESRD). During this procedure, a damaged kidney is replaced with a healthy one obtained from either a living or deceased donor. While a kidney transplant can improve the quality of life and longevity, it also comes with its own set of risks, recovery challenges, and potential complications. It is important for patients and their families to understand these aspects as they navigate this complex medical journey.
                    </p>

                    <TableOfContents />

                    <article className="prose lg:prose-xl max-w-none text-foreground/90 space-y-12">
                        <section id="about" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Introduction to Renal Transplantation</h2>
                            <p>Renal transplantation is a definitive surgical treatment for individuals with End-Stage Renal Disease (ESRD), a condition where the kidneys have irreversibly lost their ability to perform their essential filtering functions. The procedure involves implanting a healthy kidney from a living or deceased donor into a recipient whose own kidneys have failed. A successful transplant can restore normal kidney function, eliminate the need for dialysis, and significantly improve the recipient's quality of life and life expectancy.</p>
                            <p>While many patients begin dialysis before receiving a transplant, it's also possible to get a <strong className="text-primary">preemptive transplant</strong> before dialysis is needed. Research suggests that a preemptive transplant, with little to no time on dialysis, can lead to better long-term health outcomes. If you are in Stage 3B, 4, or 5 of CKD, it's an ideal time to discuss transplant options with your doctor.</p>
                        </section>
                        
                        <section id="decision" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">The Decision for Kidney Transplant</h2>
                            <p>Deciding to undergo a kidney transplant is significant. It is often made after considering various factors, such as the severity of kidney disease, the patient's overall health, and the availability of a suitable donor. Kidney transplants are generally recommended for patients with ESRD who have not responded well to other treatments like dialysis. The procedure can offer a better quality of life and greater freedom from the restrictions of dialysis.</p>
                        </section>


                        <section id="evaluation" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Patient Evaluation and Candidacy</h2>
                            <p>A comprehensive and rigorous evaluation process is undertaken to determine a patient's suitability for a kidney transplant.</p>
                            <h3 className="text-2xl font-bold text-primary/90 mt-6 mb-4">Eligibility Criteria</h3>
                            <p>Candidates for transplantation must have diagnosed End-Stage Renal Disease (ESRD), typically indicated by a significantly reduced glomerular filtration rate (GFR). While there is no strict upper age limit, a candidate's overall physiological health is a critical factor. The evaluation aims to confirm that the patient is physically and psychologically prepared to undergo major surgery and adhere to the lifelong post-transplant medical regimen.</p>
                            <h3 className="text-2xl font-bold text-primary/90 mt-6 mb-4">Pre-Transplant Assessment</h3>
                            <p>Before being approved for transplantation, a candidate undergoes a battery of diagnostic tests to assess their overall health and identify any potential contraindications. This includes:</p>
                             <ul className="list-disc pl-6 space-y-3 mt-4">
                                <li><strong>Cardiovascular Evaluation:</strong> To ensure the patient can tolerate the surgical procedure.</li>
                                <li><strong>Immunological Testing:</strong> To determine blood and tissue type for donor matching.</li>
                                <li><strong>Infectious Disease Screening:</strong> To identify and treat any underlying infections that could pose a risk post-transplant.</li>
                                <li><strong>Imaging Studies:</strong> Chest X-rays, renal ultrasounds, and other scans to evaluate the status of internal organs.</li>
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
                                <li><strong>Human Leukocyte Antigen (HLA) Tissue Typing:</strong> HLA are protein markers on the surface of cells. A closer match of HLA antigens between the donor and recipient correlates with a lower risk of rejection and better long-term graft survival.</li>
                                <li><strong>Cross-matching:</strong> A final test performed just before surgery where the recipient's blood serum is mixed with the donor's cells to ensure there is no pre-formed antibody reaction that would cause immediate (hyperacute) rejection.</li>
                            </ul>
                            <h4 className="text-xl font-semibold mt-6">ABO-Incompatible Transplantation</h4>
                            <p>In cases where a willing living donor is not blood-group compatible, advanced medical protocols have been developed to overcome this barrier by using specific techniques to remove the reactive antibodies from the recipient's blood before the transplant, making the procedure possible with outcomes comparable to compatible transplants.</p>
                        </section>

                        <section id="surgery" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">The Surgical Procedure</h2>
                             <h3 className="text-2xl font-bold text-primary/90 mt-6 mb-4">Donor Nephrectomy (Kidney Removal)</h3>
                            <p>The surgical removal of the kidney from a living donor is most commonly performed using <strong>Laparoscopic Donor Nephrectomy</strong>. This minimally invasive "keyhole" technique involves small incisions, resulting in less post-operative pain, a shorter hospital stay (typically 3-5 days), and a faster return to normal activities compared to traditional open surgery.</p>
                             <h3 className="text-2xl font-bold text-primary/90 mt-6 mb-4">Recipient Transplant Surgery</h3>
                            <p>The transplant procedure typically lasts 3 to 4 hours. The surgeon places the donor kidney in the recipient's lower abdomen (a heterotopic placement). The renal artery and vein of the new kidney are surgically connected (anastomosed) to the recipient's iliac vessels, and the new ureter is connected to the bladder. The patient's native, non-functioning kidneys are generally left in place unless they are causing specific problems such as uncontrolled hypertension or recurrent infections.</p>
                        </section>
                        
                        <section id="risks" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Risks Associated with Kidney Transplants</h2>
                            <p>As with any major surgery, kidney transplants carry certain risks. Knowing about these risks enables patients and their families to make well-informed decisions and get ready for possible challenges:</p>
                             <ul className="list-disc pl-6 space-y-3 mt-4">
                                <li><strong>Surgical risks:</strong> These include bleeding, infection, and complications related to anaesthesia. The surgical site itself can develop issues such as wound infections or hernias.</li>
                                <li><strong>Organ rejection:</strong> The body's immune system might identify the new kidney as foreign and try to attack it. This can lead to acute or chronic rejection, which might necessitate additional treatments or, in severe cases, another transplant.</li>
                                <li><strong>Infections:</strong> Patients are at an increased risk of infections due to the immunosuppressive medications required to prevent rejection. These medications lower the body's ability to fight off infections, making even minor infections potentially serious.</li>
                                <li><strong>Cardiovascular risks:</strong> Patients with a history of kidney disease often have an increased risk of cardiovascular problems. The surgery and the stress it places on the body can sometimes exacerbate these issues.</li>
                            </ul>
                        </section>
                        
                        <section id="recovery" className="scroll-mt-20">
                             <h2 className="text-3xl font-bold text-primary mb-4">The Road to Recovery</h2>
                             <p>Recovery from a kidney transplant involves a combination of hospital stays, careful monitoring, medication management, and lifestyle adjustments. Here's what patients can typically expect during the recovery phase:</p>
                             <ul className="list-disc pl-6 space-y-3 mt-4">
                                <li><strong>Hospital stay:</strong> Patients usually stay in the hospital for about a week after the transplant. During this time, they are closely monitored for signs of complications and have their new kidney function regularly assessed.</li>
                                <li><strong>Follow-up care:</strong> After discharge, patients need frequent follow-up visits to ensure the kidney functions well and monitor for rejection or infection. These visits include blood tests, physical exams, and sometimes imaging studies.</li>
                                <li><strong>Medication management:</strong> Lifelong use of immunosuppressive drugs is essential to prevent organ rejection. Patients must adhere strictly to their medication plan and be aware of potential side effects.</li>
                                <li><strong>Lifestyle adjustments:</strong> To support the new kidney, it is important to adopt a healthy lifestyle. This involves consuming a balanced diet, engaging in consistent physical activity, avoiding tobacco and excessive alcohol consumption, and managing a healthy body weight. Patients are also advised to avoid exposure to infections and to practise good hygiene.</li>
                                <li><strong>Emotional and psychological support:</strong> The process of undergoing a kidney transplant can have a significant impact on the emotional well-being of patients. They may encounter a variety of feelings, including anxiety, depression, relief, and happiness. Seeking assistance from counselling services and participating in support groups has the potential to provide valuable support.</li>
                            </ul>
                        </section>
                        
                        <section id="complications" className="scroll-mt-20">
                             <h2 className="text-3xl font-bold text-primary mb-4">Potential Complications</h2>
                            <p>Despite the best efforts, complications can arise even after a successful kidney transplant. Some of the more common complications include:</p>
                            <ul className="list-disc pl-6 space-y-3 mt-4">
                                <li><strong>Acute rejection:</strong> This can occur days to months after the transplant and requires immediate medical attention. This situation arises when the immune system sees the new organ as a foreign object and begins to attack it. Symptoms may include fever, reduced urine output, and pain or swelling at the transplant site.</li>
                                <li><strong>Chronic rejection:</strong> This happens slowly over several years when the body's immune system slowly and constantly fights your new kidney, which leads to kidney damage and may eventually lead to the need for another transplant or return to dialysis.</li>
                                <li><strong>Infection:</strong> Due to immunosuppressive therapy, patients are more susceptible to infections. These can range from minor infections like colds to more serious ones like pneumonia or cytomegalovirus.</li>
                                <li><strong>Diabetes:</strong> The use of certain immunosuppressive drugs can lead to the development of diabetes, which requires careful management to avoid further complications.</li>
                                <li><strong>High Blood Pressure:</strong> Many kidney transplant patients develop hypertension, which needs to be controlled to protect the new kidney and overall health.</li>
                                <li><strong>Cancer:</strong> Long-term use of immunosuppressive drugs increases the risk of certain cancers, like skin cancer and lymphomas.</li>
                            </ul>
                        </section>


                        <section id="outcomes" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Outcomes and Quality of Life</h2>
                            <p>A successful kidney transplant offers significant advantages over long-term dialysis. One-year success rates for living donor transplants are typically in the range of 90-95%. Recipients are freed from the demanding schedule of dialysis and the strict dietary and fluid restrictions. This restoration of normal kidney function often leads to a disappearance of the chronic fatigue and anemia associated with renal failure, allowing for a return to full-time work, travel, and a significantly improved sense of well-being. Many women regain fertility and can have successful pregnancies post-transplant with careful medical supervision. Should a transplanted kidney eventually fail, a return to dialysis and evaluation for a subsequent transplant are viable options.</p>
                        </section>
                        
                        <section id="faq" className="scroll-mt-20">
                            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How long does it take to recover from a kidney transplant?</AccordionTrigger>
                                    <AccordionContent>
                                        Patients typically resume regular activities within 8 to 12 weeks, although complete recovery may require a few months. During this period, it's important to follow medical advice and attend regular check-ups.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>What are the signs of kidney rejection?</AccordionTrigger>
                                    <AccordionContent>
                                       Signs of rejection may include fever, decreased urine output, swelling, pain or tenderness around the transplant site, and a general feeling of illness. Contact your doctor immediately if you experience any of these symptoms.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>How will my diet change after a kidney transplant?</AccordionTrigger>
                                    <AccordionContent>
                                        You may need to follow a specific diet to support your new kidney and prevent complications. This often includes eating a balanced diet, limiting salt, and avoiding certain foods that can interfere with immunosuppressive medications.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>How often will I need to see my doctor after the transplant?</AccordionTrigger>
                                    <AccordionContent>
                                       Initially, you will have frequent check-ups, possibly several times a week. Over time, these visits will become less frequent, but you will still need regular monitoring for the rest of your life.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>Can I exercise after a kidney transplant?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, exercise is encouraged, but you should start slowly and gradually increase your activity level. Speaking with your healthcare provider to create a suitable exercise plan is important.
                                    </AccordionContent>
                                </AccordionItem>
                                 <AccordionItem value="item-6">
                                    <AccordionTrigger>Will I need to take medication for the rest of my life after a kidney transplant?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, you will need to take immunosuppressive medications for the rest of your life to prevent your body from rejecting the new kidney.
                                    </AccordionContent>
                                </AccordionItem>
                                 <AccordionItem value="item-7">
                                    <AccordionTrigger>Can I travel after a kidney transplant?</AccordionTrigger>
                                    <AccordionContent>
                                       You can travel, but it's important to plan ahead. Ensure you have enough medication for the trip, avoid areas with high infection risks, and contact your healthcare provider while travelling.
                                    </AccordionContent>
                                </AccordionItem>
                                 <AccordionItem value="item-8">
                                    <AccordionTrigger>What lifestyle changes should I make after a kidney transplant?</AccordionTrigger>
                                    <AccordionContent>
                                        You should avoid smoking, limit alcohol intake, maintain a healthy weight, and follow a balanced diet. Regular exercise and stress management are also important for overall health and transplant success.
                                    </AccordionContent>
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
