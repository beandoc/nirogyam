
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Droplet, Microscope, Stethoscope, Pill, LifeBuoy, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const UrinaryTractInfectionPage = () => {
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
                    
                    <article className="prose lg:prose-xl max-w-none text-foreground/90 space-y-8">
                        <h1 className="text-4xl font-extrabold text-primary tracking-tight">Guide to Urinary Tract Infections (UTIs)</h1>
                        
                        <section id="intro">
                            <h2 className="text-2xl font-bold text-primary">1.0 Introduction to Urinary Tract Infections (UTIs)</h2>
                            <h3 className="text-xl font-semibold">1.1 Definition</h3>
                            <p>A Urinary Tract Infection (UTI) is an infection that occurs in any part of the urinary system. This system is responsible for creating, storing, and eliminating urine and includes the kidneys, ureters, bladder, and urethra. While UTIs are most commonly caused by bacteria, in rarer instances, fungi or viruses can also be the causative agents.</p>
                            
                            <h3 className="text-xl font-semibold mt-6">1.2 The Urinary System</h3>
                            <p>Understanding the components of the urinary system is crucial to understanding the different types of UTIs:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Kidneys:</strong> Two bean-shaped organs that filter waste from the blood to produce urine.</li>
                                <li><strong>Ureters:</strong> Tubes that carry urine from the kidneys to the bladder.</li>
                                <li><strong>Bladder:</strong> A muscular sac that stores urine.</li>
                                <li><strong>Urethra:</strong> The tube through which urine exits the body from the bladder.</li>
                            </ul>
                            <p>Infections are typically classified by their location within this tract, with lower tract infections (bladder, urethra) being more common and generally less severe than upper tract infections (kidneys, ureters).</p>
                        </section>

                        <section id="types">
                            <h2 className="text-2xl font-bold text-primary">2.0 Types of Urinary Tract Infections</h2>
                            <p>UTIs are categorised based on the specific part of the urinary tract that is affected.</p>
                             <ul className="list-disc pl-6 space-y-2">
                                <li><strong>2.1 Cystitis (Bladder Infection):</strong> This is the most prevalent form of UTI. It involves inflammation and infection of the bladder.</li>
                                <li><strong>2.2 Urethritis (Urethra Infection):</strong> This infection is confined to the urethra, the tube that expels urine from the body.</li>
                                <li><strong>2.3 Pyelonephritis (Kidney Infection):</strong> A more serious condition where the infection ascends to one or both kidneys. Pyelonephritis can result from an untreated lower UTI and poses a greater risk of systemic complications.</li>
                                <li><strong>2.4 Recurrent UTIs:</strong> This term describes a condition where an individual experiences multiple distinct UTI episodes over a defined period (e.g., two or more infections in six months, or three or more in a year). This often suggests an underlying predisposition or unresolved issue.</li>
                            </ul>
                        </section>

                        <section id="symptoms">
                            <h2 className="text-2xl font-bold text-primary">3.0 Clinical Manifestations and Symptoms</h2>
                            <p>The symptoms of a UTI vary depending on the location and severity of the infection.</p>
                            <h3 className="text-xl font-semibold mt-6">3.1 Common Symptoms of a Lower Tract UTI (Cystitis/Urethritis)</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Dysuria:</strong> A painful, burning, or stinging sensation during urination.</li>
                                <li><strong>Increased Urinary Frequency:</strong> A persistent and often urgent need to urinate, even when the bladder is not full.</li>
                                <li><strong>Urgency:</strong> A sudden, compelling urge to urinate.</li>
                                <li><strong>Abnormal Urine:</strong> Urine may appear cloudy, dark, or discoloured. In some cases, it may contain blood (hematuria), giving it a pink, red, or brownish tint.</li>
                                <li><strong>Malodorous Urine:</strong> A strong, foul, or unusual odour from the urine.</li>
                                <li><strong>Pelvic Pain:</strong> Discomfort, pressure, or pain in the lower abdomen or pelvic region.</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-6">3.2 Symptoms Indicative of an Upper Tract UTI (Pyelonephritis)</h3>
                             <ul className="list-disc pl-6 space-y-2">
                                <li>High fever and chills.</li>
                                <li>Pain in the lower back or flank (side).</li>
                                <li>Nausea and vomiting.</li>
                                <li>General malaise and fatigue.</li>
                            </ul>
                            <p><strong>Note:</strong> These symptoms may occur in addition to the lower tract symptoms listed above.</p>
                        </section>
                        
                        <section id="causes">
                            <h2 className="text-2xl font-bold text-primary">4.0 Etiology and Principal Risk Factors</h2>
                            <p>UTIs are primarily caused by the infiltration of bacteria into the urinary tract.</p>
                            <h3 className="text-xl font-semibold mt-6">4.1 Causative Agent</h3>
                            <p>The bacterium Escherichia coli (E. coli), which is commonly found in the gastrointestinal tract, is responsible for the vast majority of UTI cases.</p>
                            <h3 className="text-xl font-semibold mt-6">4.2 Key Risk Factors</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Female Anatomy:</strong> Women are at a significantly higher risk due to their shorter urethra, which reduces the distance bacteria must travel to reach the bladder.</li>
                                <li><strong>Sexual Activity:</strong> Intercourse can facilitate the introduction of bacteria into the urethral opening.</li>
                                <li><strong>Hormonal Changes:</strong> Post-menopausal women experience a decrease in oestrogen, which can lead to changes in the urinary tract that increase susceptibility to infection.</li>
                                <li><strong>Urinary Tract Abnormalities:</strong> Structural issues such as blockages, kidney stones, or an enlarged prostate in men can impede the complete emptying of the bladder, allowing bacteria to multiply.</li>
                                <li><strong>Catheter Use:</strong> Indwelling urinary catheters provide a direct pathway for bacteria to enter the bladder.</li>
                                <li><strong>Weakened Immune System:</strong> Conditions such as diabetes mellitus or other immunocompromising illnesses reduce the body's ability to defend against infection.</li>
                                <li><strong>Urinary Retention:</strong> Any condition that prevents the bladder from emptying completely can increase UTI risk.</li>
                            </ul>
                        </section>
                        
                        <section id="diagnosis">
                             <h2 className="text-2xl font-bold text-primary">5.0 Diagnostic Process</h2>
                            <p>A definitive diagnosis of a UTI involves a combination of clinical evaluation and laboratory testing.</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Medical History and Physical Examination:</strong> A healthcare provider will review the patient's symptoms and medical history. A physical exam may be performed to assess for tenderness in the abdomen or back.</li>
                                <li><strong>Urinalysis:</strong> A collected urine sample is analysed to detect the presence of white blood cells, red blood cells, and bacteria, which are indicators of infection.</li>
                                <li><strong>Urine Culture and Sensitivity:</strong> This laboratory test is crucial for identifying the specific type of bacteria causing the infection. It also determines which antibiotics will be most effective for treatment (sensitivity testing).</li>
                                <li><strong>Imaging Studies:</strong> In cases of recurrent UTIs or if a kidney infection is suspected, imaging tests such as an ultrasound or CT scan may be ordered to visualize the urinary tract and rule out structural abnormalities.</li>
                                <li><strong>Cystoscopy:</strong> For complex or recurrent cases, a procedure called cystoscopy may be performed. A thin tube with a camera is inserted into the urethra to directly inspect the lining of the bladder and urethra.</li>
                            </ul>
                        </section>

                         <section id="treatment">
                            <h2 className="text-2xl font-bold text-primary">6.0 Treatment and Management</h2>
                            <p>The primary goal of UTI treatment is to eliminate the infection and alleviate symptoms.</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>6.1 Antibiotic Therapy:</strong> Antibiotics are the cornerstone of treatment for bacterial UTIs. The specific antibiotic and the duration of the course are determined by the severity of the infection and the results of the urine culture. It is imperative that the patient completes the entire prescribed course, even if symptoms improve, to ensure complete eradication of the infection and prevent recurrence.</li>
                                <li><strong>6.2 Symptomatic Relief:</strong> Over-the-counter pain relievers can manage pain and fever. A specific urinary analgesic, such as phenazopyridine, may be prescribed to relieve the burning sensation.</li>
                                <li><strong>6.3 Hydration:</strong> Increased fluid intake, primarily water, is recommended to help flush bacteria from the urinary system.</li>
                                <li><strong>6.4 Hospitalization:</strong> Severe infections, particularly pyelonephritis with high fever and vomiting, may require hospitalization for the administration of intravenous (IV) antibiotics and fluids.</li>
                            </ul>
                        </section>

                        <section id="prevention">
                             <h2 className="text-2xl font-bold text-primary">7.0 Strategies for Prevention</h2>
                            <p>Adopting certain lifestyle and hygiene practices can significantly reduce the risk of developing UTIs.</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Maintain Adequate Hydration:</strong> Consuming sufficient water daily helps to dilute urine and flush the urinary tract regularly.</li>
                                <li><strong>Proper Hygiene:</strong> For women, wiping from front to back after urination and bowel movements is critical to prevent the transfer of bacteria from the anal region to the urethra.</li>
                                <li><strong>Urination Habits:</strong> Urinate when the urge arises rather than holding it for extended periods. Urinating shortly after sexual intercourse is also recommended to help flush out any bacteria that may have entered the urethra.</li>
                                <li><strong>Clothing Choices:</strong> Wearing breathable cotton underwear and avoiding excessively tight-fitting clothing can help keep the genital area dry and reduce bacterial growth.</li>
                                <li><strong>Avoid Irritants:</strong> Some individuals find that certain feminine hygiene products (like douches and sprays) or bath products can cause irritation and increase susceptibility to UTIs.</li>
                            </ul>
                        </section>
                        
                        <section id="consultation">
                             <h2 className="text-2xl font-bold text-primary">8.0 When to Seek Medical Consultation</h2>
                            <p>It is essential to consult a healthcare provider if you experience any symptoms of a UTI. Immediate medical attention is warranted if you develop symptoms suggestive of a kidney infection, such as high fever, chills, back pain, or vomiting. Individuals who experience recurrent UTIs require a thorough medical evaluation to identify and address any underlying causes.</p>
                        </section>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default UrinaryTractInfectionPage;

    